/**
 * Zedong Zhou: opt-in IP-based country/region aggregation for the public map.
 * IP and user-agent are used transiently to deduplicate; never persist them.
 */
const allowed=new Set(['https://zhouzedong.top','https://www.zhouzedong.top','https://2350082187zhou-ux.github.io']);
function response(data,origin,status=200){
 return new Response(JSON.stringify(data),{status,headers:{
  'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store',
  'Access-Control-Allow-Origin':origin,'Access-Control-Allow-Methods':'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers':'Content-Type','Vary':'Origin','X-Content-Type-Options':'nosniff'
 }});
}
async function sign(secret,msg){
 const utf=new TextEncoder();
 const key=await crypto.subtle.importKey('raw',utf.encode(secret),{name:'HMAC',hash:'SHA-256'},false,['sign']);
 const raw=new Uint8Array(await crypto.subtle.sign('HMAC',key,utf.encode(msg)));
 return Array.from(raw,b=>b.toString(16).padStart(2,'0')).join('');
}
export default {async fetch(request,env){
 const origin=request.headers.get('Origin')||'';
 if(!allowed.has(origin))return new Response('Forbidden',{status:403});
 if(request.method==='OPTIONS')return new Response(null,{status:204,headers:{
    'Access-Control-Allow-Origin':origin,'Access-Control-Allow-Methods':'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers':'Content-Type','Vary':'Origin'}});
 if(!env.DB||!env.VISITOR_HASH_SECRET)return response({error:'Backend not configured'},origin,503);
 const path=new URL(request.url).pathname;
 const cutoff=new Date(Date.now()-90*86400000).toISOString().slice(0,10);
 try{
  if(path==='/stats'&&request.method==='GET'){
   const [points,total,countries]=await Promise.all([
     env.DB.prepare('SELECT country,lat,lon,COUNT(*) AS count FROM geo_visits WHERE day>=? GROUP BY country,lat,lon ORDER BY count DESC LIMIT 500').bind(cutoff).all(),
     env.DB.prepare('SELECT COUNT(*) AS n FROM geo_visits WHERE day>=?').bind(cutoff).first(),
     env.DB.prepare('SELECT COUNT(DISTINCT country) AS n FROM geo_visits WHERE day>=?').bind(cutoff).first()
   ]);
   return response({
      total:Number(total?.n||0),countries:Number(countries?.n||0),
      points:(points.results||[]).map(p=>({country:p.country,lat:Number(p.lat),lon:Number(p.lon),count:Number(p.count)})),
      windowDays:90,updated:new Date().toISOString()
   },origin);
  }
  if(path==='/collect'&&request.method==='POST'){
   if((request.headers.get('Content-Type')||'').split(';')[0]!=='text/plain')return response({error:'Content type'},origin,415);
   if((await request.text()).trim()!=='consent=1')return response({error:'Consent required'},origin,400);
   const cf=request.cf||{};
   const ip=request.headers.get('CF-Connecting-IP');
   const ua=(request.headers.get('User-Agent')||'').slice(0,200);
   const lat=Number(cf.latitude),lon=Number(cf.longitude);
   const country=String(cf.country||'').toUpperCase();
   if(!ip||!Number.isFinite(lat)||!Number.isFinite(lon)||lat<-90||lat>90||lon<-180||lon>180||!/^([A-Z]{2})$/.test(country)){
      return response({recorded:false,reason:'Geolocation unavailable'},origin,202);
   }
   const day=new Date().toISOString().slice(0,10);
   const key=await sign(env.VISITOR_HASH_SECRET,day+'|'+ip+'|'+ua);
   // Coordinates rounded to ~2° before saving: NOT precise GPS.
   await env.DB.prepare('INSERT OR IGNORE INTO geo_visits (fingerprint,day,country,lat,lon) VALUES (?,?,?,?,?)')
     .bind(key,day,country,Math.round(lat/2)*2,Math.round(lon/2)*2).run();
   await env.DB.prepare('DELETE FROM geo_visits WHERE day<?').bind(cutoff).run();
   return response({recorded:true},origin);
  }
  return response({error:'Not found'},origin,404);
 }catch(_){return response({error:'Temporarily unavailable'},origin,503)}
}};

/**
 * Zedong Zhou: coarse location pageview counts, not user tracking.
 * No full IP, User-Agent, cookie, or persistent visitor identifier stored.
 */
const allowed=new Set(['https://zhouzedong.top','https://www.zhouzedong.top','https://2350082187zhou-ux.github.io']);
function response(data,origin,status=200){
 return new Response(JSON.stringify(data),{status,headers:{
  'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store',
  'Access-Control-Allow-Origin':origin,'Access-Control-Allow-Methods':'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers':'Content-Type','Vary':'Origin','X-Content-Type-Options':'nosniff'
 }});
}
export default {
 async scheduled(_event,env,ctx){
  // Enforce 90-day retention even when there are no new pageviews.
  if(!env.DB)return;
  const cutoff=new Date(Date.now()-90*86400000).toISOString().slice(0,10);
  ctx.waitUntil(env.DB.prepare('DELETE FROM geo_visits WHERE day<?').bind(cutoff).run());
 },
 async fetch(request,env){
 const origin=request.headers.get('Origin')||'';
 if(!allowed.has(origin))return new Response('Forbidden',{status:403});
 if(request.method==='OPTIONS')return new Response(null,{status:204,headers:{
    'Access-Control-Allow-Origin':origin,'Access-Control-Allow-Methods':'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers':'Content-Type','Vary':'Origin'}});
 if(!env.DB)return response({error:'Backend not configured'},origin,503);
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
   const event=(await request.text()).trim();
   if(event!=='pageview=1' && event!=='consent=1')return response({error:'Invalid event'},origin,400);
   const cf=request.cf||{};
   const hasGeo=cf.latitude!=null && cf.longitude!=null && cf.latitude!=='' && cf.longitude!=='';
   const lat=Number(cf.latitude),lon=Number(cf.longitude);
   const country=String(cf.country||'').toUpperCase();
   if(!hasGeo||!Number.isFinite(lat)||!Number.isFinite(lon)||lat<-90||lat>90||lon<-180||lon>180||!/^([A-Z]{2})$/.test(country)){
      return response({recorded:false,reason:'Geolocation unavailable'},origin,202);
   }
   const day=new Date().toISOString().slice(0,10);
   // Random record ID per page view, never a stable visitor fingerprint.
   await env.DB.prepare('INSERT INTO geo_visits (fingerprint,day,country,lat,lon) VALUES (?,?,?,?,?)')
     .bind(crypto.randomUUID(),day,country,Math.round(lat/2)*2,Math.round(lon/2)*2).run();
   await env.DB.prepare('DELETE FROM geo_visits WHERE day<?').bind(cutoff).run();
   return response({recorded:true},origin);
  }
  return response({error:'Not found'},origin,404);
 }catch(_){return response({error:'Temporarily unavailable'},origin,503)}
}};

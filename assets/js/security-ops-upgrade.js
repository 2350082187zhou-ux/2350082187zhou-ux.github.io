/* Interactive Operations Center. Relies only on server-rendered deadline rows. */
(() => {
  'use strict';
  const rows = [...document.querySelectorAll('#deadline-rows tr[data-utc]')];
  if (!rows.length) return;
  const rankFilter = document.querySelector('#rank-filter');
  const trackFilter = document.querySelector('#track-filter');
  const timeline = document.querySelector('#ops-timeline');
  const tabTimeline = document.querySelector('#view-timeline');
  const tabTable = document.querySelector('#view-table');
  const tableShell = document.querySelector('#deadline-table-shell');
  const noMatches = document.querySelector('#no-matches');
  const zone = document.querySelector('#zone-select');
  const clock = document.querySelector('#ops-utc-clock');
  const pad = x => String(x).padStart(2,'0');
  const categoryMap = {
    sp:'systems',usenix:'systems',ccs:'systems',ndss:'systems',eurosp:'systems',
    asiaccs:'systems',csf:'systems',secrypt:'systems',pst:'systems',
    ches:'crypto',eurocrypt:'crypto',ctrsa:'crypto',fc:'crypto',
    host:'hardware',pets:'privacy',dfceurope:'forensics'
  };
  const records = rows.map(row => ({
    row,utc:Date.parse(row.dataset.utc),
    conf:row.dataset.conf,kind:row.dataset.kind,
    source:row.dataset.source || 'official',
    track:categoryMap[row.dataset.conf] || 'other',
    rank:row.dataset.rank || 'NA',
    title:row.querySelector('.venue-name strong')?.textContent.trim() || row.dataset.conf,
    cycle:row.querySelector('.cycle-text')?.textContent.trim() || '',
    milestone:row.querySelector('td:nth-child(2) small')?.textContent.trim() || '',
    url:row.querySelector('.actions a')?.getAttribute('href') || '#'
  })).filter(record => Number.isFinite(record.utc));
  const futureRecords = () => records.filter(r => r.utc > Date.now());
  const countdown = diff => {
    if (diff <= 0) return 'Closed';
    const sec = Math.ceil(diff/1000);
    return Math.floor(sec/86400)+'d '+pad(Math.floor(sec%86400/3600))+'h '+pad(Math.floor(sec%3600/60))+'m '+pad(sec%60)+'s';
  };
  const localFmt = new Intl.DateTimeFormat(undefined,{year:'numeric',month:'short',day:'numeric',hour:'2-digit',minute:'2-digit',timeZoneName:'short'});
  const timeText = r => zone?.value === 'local'
    ? localFmt.format(new Date(r.utc))
    : (r.row.querySelector('[data-display-date]')?.textContent.trim() || new Date(r.utc).toISOString());
  const setMetric = (id,value) => { const node=document.querySelector(id); if(node)node.textContent=String(value); };
  function updateMetrics() {
    const next = futureRecords();
    setMetric('#ops-remaining', next.length);
    setMetric('#ops-official', next.filter(r=>r.source==='official').length);
    setMetric('#ops-community', next.filter(r=>r.source==='community').length);
    if(clock)clock.textContent=new Date().toISOString().slice(0,19).replace('T',' ')+' UTC';
  }
  let view = 'timeline';
  function setView(next) {
    view=next;
    const showTimeline=next==='timeline';
    if(timeline)timeline.hidden=!showTimeline;
    if(tableShell)tableShell.hidden=showTimeline;
    if(tabTimeline)tabTimeline.setAttribute('aria-pressed',String(showTimeline));
    if(tabTable)tabTable.setAttribute('aria-pressed',String(!showTimeline));
    if(showTimeline)renderTimeline();
  }
  // Existing table filtering runs before this listener on shared search/select controls.
  function matchingRecords() {
    return records.filter(r => !r.row.hidden && r.utc > 0);
  }
  function applyExtraFilters() {
    const rank=rankFilter?.value || 'all';
    const track=trackFilter?.value || 'all';
    const matchRank=r=>rank==='all'||(rank==='NA'?r.rank==='NA':r.rank===rank);
    const matchTrack=r=>track==='all'||r.track===track;
    // Use the same primary filters as the standard table, to avoid overwriting their decisions.
    const search=document.querySelector('#deadline-search')?.value.trim().toLocaleLowerCase()||'';
    const venue=document.querySelector('#venue-filter')?.value||'all';
    const paper=Boolean(document.querySelector('#paper-only')?.checked);
    const past=Boolean(document.querySelector('#show-past')?.checked);
    const now=Date.now();let shown=0;
    for(const r of records){
      const match=(venue==='all'||venue===r.conf)&&(!paper||r.kind==='paper')
        &&(past||r.utc>now)&&(!search||(r.row.dataset.search||'').toLocaleLowerCase().includes(search))
        &&matchRank(r)&&matchTrack(r);
      r.row.hidden=!match;
      if(match)shown++;
    }
    if(noMatches)noMatches.hidden=shown!==0;
    setMetric('#ops-filter-count',shown);
    if(view==='timeline')renderTimeline();
  }
  const escapeHtml=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function renderTimeline(){
    if(!timeline)return;
    const subset=matchingRecords();
    timeline.replaceChildren();
    if(!subset.length){
      const el=document.createElement('div');el.className='ops-timeline-empty';
      el.textContent='No milestones match these filters. Try another research area, CCF category, or enable past deadlines.';
      timeline.appendChild(el);return;
    }
    for(const r of subset.slice(0,40)){
      const item=document.createElement('article');
      item.className='ops-event'+(r.source==='community'?' community':'');
      const a=document.createElement('a');a.href=r.url;a.target='_blank';a.rel='noopener noreferrer';a.textContent='Official CFP ↗';
      const rank=r.rank==='NA'?'Not mapped':'CCF '+r.rank;
      const left=document.createElement('div');left.className='ops-event-title';
      left.textContent=r.title;
      const small=document.createElement('small');small.textContent=rank+' · '+(r.source==='community'?'Community listing':'Official-checked');left.appendChild(small);
      const middle=document.createElement('div');middle.className='ops-event-detail';middle.textContent=r.cycle+' · '+r.milestone;
      const dt=document.createElement('span');dt.className='ops-event-date';dt.textContent=timeText(r);middle.appendChild(dt);
      const right=document.createElement('div');right.className='ops-event-clock';
      const remain=document.createElement('span');remain.dataset.opsRemain=String(r.utc);remain.textContent=countdown(r.utc-Date.now());right.appendChild(remain);
      const note=document.createElement('small');note.textContent='SUBMISSION MILESTONE';right.appendChild(note);right.appendChild(a);
      item.append(left,middle,right);timeline.appendChild(item);
    }
  }
  const tableInputs=['#deadline-search','#venue-filter','#paper-only','#show-past','#rank-filter','#track-filter','#zone-select'];
  tableInputs.forEach(selector=>{
    const elem=document.querySelector(selector);
    if(elem)elem.addEventListener(selector==='#deadline-search'?'input':'change',()=>{
      applyExtraFilters();
      if(selector==='#zone-select'&&view==='timeline')renderTimeline();
    });
  });
  if(tabTimeline)tabTimeline.addEventListener('click',()=>setView('timeline'));
  if(tabTable)tabTable.addEventListener('click',()=>setView('table'));
  function tick(){
    if(document.hidden)return;
    updateMetrics();
    document.querySelectorAll('[data-ops-remain]').forEach(el=>{
      const ms=Number(el.dataset.opsRemain)-Date.now();
      el.textContent=countdown(ms);
    });
  }
  applyExtraFilters();
  setView('timeline');
  tick();
  window.setInterval(tick,1000);
  document.addEventListener('visibilitychange',()=>{
    if(!document.hidden){applyExtraFilters();tick();}
  });
})();

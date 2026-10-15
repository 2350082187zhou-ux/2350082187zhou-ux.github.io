/* Security Top 4 paper deadline tracker.
   AoE is UTC-12. All ISO timestamps below are verified in the Jekyll data file.
   The page only counts down; it never guesses or scrapes unannounced CFP dates. */
(() => {
  'use strict';
  const rows = Array.from(document.querySelectorAll('#deadline-rows tr[data-utc]'));
  const lookup = JSON.parse(document.getElementById('conference-data')?.textContent || '[]');
  const conferences = new Map(lookup.map(conf => [conf.id, conf]));
  const records = rows.map(row => {
    const due = Date.parse(row.dataset.utc);
    return {
      row, due, id: row.dataset.eventId,
      conf: row.dataset.conf, kind: row.dataset.kind,
      cycle: row.querySelector('.cycle-text')?.textContent?.trim() || '',
      milestone: row.querySelector('td:nth-child(2) small')?.textContent?.trim() || '',
      clock: row.querySelector('[data-remain]'),
      dateDisplay: row.querySelector('[data-display-date]'),
      zoneHint: row.querySelector('.tz-hint'),
    };
  }).filter(event => Number.isFinite(event.due));
  const fields = {
    zone: document.querySelector('#zone-select'),
    venue: document.querySelector('#venue-filter'),
    search: document.querySelector('#deadline-search'),
    paperOnly: document.querySelector('#paper-only'),
    past: document.querySelector('#show-past'),
    noMatches: document.querySelector('#no-matches'),
    next: document.querySelector('#next-heading'),
    detail: document.querySelector('#next-event-detail'),
    days: document.querySelector('#next-days'),
    hours: document.querySelector('#next-hours'),
    minutes: document.querySelector('#next-minutes'),
    seconds: document.querySelector('#next-seconds')
  };
  const pad = n => String(n).padStart(2,'0');
  function parts(ms) {
    const sec = Math.max(0, Math.ceil(ms / 1000));
    return {
      days: Math.floor(sec / 86400),
      hours: Math.floor(sec % 86400 / 3600),
      minutes: Math.floor(sec % 3600 / 60),
      seconds: sec % 60
    };
  }
  function compact(ms, seconds = true) {
    if (ms <= 0) return 'Passed';
    const p = parts(ms);
    return p.days+'d '+pad(p.hours)+'h '+pad(p.minutes)+'m'+(seconds?' '+pad(p.seconds)+'s':'');
  }
  const dateFormatter = new Intl.DateTimeFormat(undefined, {
    year: 'numeric', month: 'short', day: 'numeric',
    hour: '2-digit', minute: '2-digit', second: '2-digit',
    timeZoneName: 'short'
  });
  function dateLine(event) {
    if (fields.zone?.value === 'local') {
      return dateFormatter.format(new Date(event.due));
    }
    // AoE (UTC−12) official CFP date, avoiding daylight-saving-time ambiguity.
    const aoe = new Date(event.due - 12 * 60 * 60 * 1000);
    const iso = aoe.toISOString();
    return iso.slice(0, 10) + ' · ' + iso.slice(11, 19) + ' AoE';
  }
  function updateTimes(now) {
    for (const event of records) {
      const remaining = event.due - now;
      if (event.clock) {
        event.clock.textContent = compact(remaining);
        event.clock.classList.toggle('past', remaining <= 0);
        event.clock.classList.toggle('urgent', remaining > 0 && remaining < 3 * 86400000);
      }
      if (event.dateDisplay) event.dateDisplay.textContent = dateLine(event);
      if (event.zoneHint) event.zoneHint.textContent = fields.zone?.value === 'local' ? 'Browser local time' : 'UTC−12';
    }
    for (const [key, venue] of conferences) {
      const upcoming = records
        .filter(event => event.conf === key && event.due > now)
        .sort((a,b)=>a.due-b.due);
      const clock = document.querySelector('[data-card-count="'+key+'"]');
      const label = document.querySelector('[data-card-label="'+key+'"]');
      if (!clock || !label) continue;
      clock.classList.toggle('is-tbd', upcoming.length === 0);
      if (upcoming.length) {
        clock.textContent = compact(upcoming[0].due - now, false);
        label.textContent = upcoming[0].cycle+' · '+upcoming[0].milestone;
      } else if (key === 'ccs') {
        clock.textContent = 'Awaiting official dates';
        label.textContent = '2027 CFP: important dates TBD';
      } else {
        clock.textContent = 'Submissions closed';
        label.textContent = venue.year+' paper cycles have passed';
      }
    }
    const upcomingAll = records.filter(event => event.due > now).sort((a,b)=>a.due-b.due);
    if (upcomingAll.length) {
      const soon = upcomingAll[0];
      const venue = conferences.get(soon.conf);
      if (fields.next) fields.next.textContent = (venue?.short || soon.conf)+' '+(venue?.year || '')+' — '+soon.milestone;
      if (fields.detail) fields.detail.textContent = soon.cycle+' · '+dateLine(soon);
      const p = parts(soon.due-now);
      if (fields.days) fields.days.textContent = String(p.days);
      if (fields.hours) fields.hours.textContent = pad(p.hours);
      if (fields.minutes) fields.minutes.textContent = pad(p.minutes);
      if (fields.seconds) fields.seconds.textContent = pad(p.seconds);
    } else {
      if (fields.next) fields.next.textContent = 'Awaiting next official call for papers';
      if (fields.detail) fields.detail.textContent = 'Please use the official CFP links for new cycles.';
      for (const field of ['days','hours','minutes','seconds']) if(fields[field])fields[field].textContent='--';
    }
  }
  function applyFilters() {
    const now = Date.now();
    const search = fields.search?.value.trim().toLocaleLowerCase() || '';
    const venue = fields.venue?.value || 'all';
    const kind = Boolean(fields.paperOnly?.checked);
    const showPast = Boolean(fields.past?.checked);
    let shown = 0;
    for (const event of records) {
      const match = (venue === 'all' || venue === event.conf)
        && (!kind || event.kind === 'paper')
        && (showPast || event.due > now)
        && (!search || (event.row.dataset.search || '').toLocaleLowerCase().includes(search));
      event.row.hidden = !match;
      if (match) shown++;
    }
    if (fields.noMatches) fields.noMatches.hidden = shown !== 0;
  }
  // Put upcoming deadlines first; older past dates are available on demand.
  const tbody = document.getElementById('deadline-rows');
  const now = Date.now();
  records.sort((a,b) => {
    const aFuture = a.due > now, bFuture = b.due > now;
    if (aFuture !== bFuture) return aFuture ? -1 : 1;
    return aFuture ? a.due - b.due : b.due - a.due;
  });
  for (const event of records) tbody?.appendChild(event.row);

  // Standard portable ICS event, with a 24-hour alert.
  function downloadIcs(button) {
    const time = Date.parse(button.dataset.calendarDate);
    if (!Number.isFinite(time)) return;
    const dateIcs = ms => new Date(ms).toISOString().replace(/[-:]/g,'').replace(/\.\d{3}/,'');
    const clean = s => String(s||'').replace(/[\r\n]/g,' ').replace(/\\/g,'\\\\')
      .replace(/,/g,'\\,').replace(/;/g,'\\;');
    const title = clean(button.dataset.calendarName);
    const url = String(button.dataset.calendarUrl || '');
    const uid = 'zedong-security-ddl-'+time+'-'+title.replace(/[^a-z0-9]/gi,'').slice(0,35)+'@zhouzedong.top';
    const lines = [
      'BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//Zedong Zhou//Security Top Four Deadlines//EN',
      'CALSCALE:GREGORIAN','METHOD:PUBLISH','BEGIN:VEVENT',
      'UID:'+uid,'DTSTAMP:'+dateIcs(Date.now()),'DTSTART:'+dateIcs(time),
      'DTEND:'+dateIcs(time + 3600000),
      'SUMMARY:'+title,
      'DESCRIPTION:'+clean('Conference paper milestone. Deadline is AoE (UTC-12). Verify latest CFP: '+url),
      'URL:'+url,
      'BEGIN:VALARM','TRIGGER:-P1D','ACTION:DISPLAY',
      'DESCRIPTION:Submission deadline in 24 hours','END:VALARM',
      'END:VEVENT','END:VCALENDAR'
    ];
    const file = new Blob([lines.join('\r\n')+'\r\n'], {type:'text/calendar;charset=utf-8'});
    const link = document.createElement('a');
    const href = URL.createObjectURL(file);
    link.href = href;
    link.download = 'security-deadline-'+time+'.ics';
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(href), 3000);
  }
  document.querySelectorAll('[data-calendar-date]').forEach(button =>
    button.addEventListener('click', () => downloadIcs(button)));
  [fields.search, fields.venue, fields.paperOnly, fields.past].forEach(field => {
    if (!field) return;
    field.addEventListener(field === fields.search ? 'input' : 'change', applyFilters);
  });
  if (fields.zone) fields.zone.addEventListener('change', () => updateTimes(Date.now()));

  function refresh() { updateTimes(Date.now()); }
  applyFilters();
  refresh();
  window.setInterval(() => {
    if (!document.hidden) {
      refresh();
      // Handle a deadline turning past while the page stays open.
      if (Date.now() % 15000 < 1000) applyFilters();
    }
  }, 1000);
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) { updateTimes(Date.now()); applyFilters(); }
  });
})();
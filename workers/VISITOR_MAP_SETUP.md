# Homepage visitor origins — automatic, no button

GitHub Pages loads `assets/js/visitor-geo.js` on the academic homepage.
When opened, it automatically submits `pageview=1` to the existing Cloudflare
Worker `dry-wildflower-8d08` and loads the public `/stats` API.
The cyber blog remains unchanged and does not send automatic pageviews.

## Privacy and what the numbers mean

- The Worker receives approximate IP-based Cloudflare geolocation metadata,
  but it never reads, stores, or exposes a full IP address, User-Agent or GPS.
- Only UTC day, ISO country code, latitude/longitude rounded to 2 degrees and
  a freshly generated random row ID are written to D1.
- These rows represent **page views**, not deduplicated or unique people.
  Reloading the homepage increments the count again.
- No cookies or durable visitor identifiers are used.
- Pageview requests are skipped when the browser advertises Do Not Track or
  Global Privacy Control. Ad blockers, disabled JavaScript and network
  restrictions can also prevent counting.
- The world map plots real aggregate points only; no mock traffic is used.
- Rows older than 90 days are deleted by scheduled Worker cron, and again
  during new pageview inserts. The page discloses automatic approximate stats.
- IP-derived location can be imprecise (VPNs/mobile providers); international
  privacy and disclosure requirements should be reviewed for this use.

## Update the Worker already created on Cloudflare

Cloudflare account has Worker `dry-wildflower-8d08`, binding `DB` to
D1 database `zz-visitor-map`, and an existing D1 table `geo_visits`.
**No database schema migration is needed.**

In Windows PowerShell:

```powershell
Set-Location "$env:USERPROFILE\zz-visitor-worker"
$base = "https://raw.githubusercontent.com/2350082187zhou-ux/2350082187zhou-ux.github.io/master/workers"
Invoke-WebRequest "$base/visitor-map-worker.js" -OutFile ".\visitor-map-worker.js"
Invoke-WebRequest "$base/wrangler.toml" -OutFile ".\wrangler.toml"
node --check .\visitor-map-worker.js
npx.cmd --yes wrangler@latest deploy --config .\wrangler.toml
```

The website client should be deployed before / alongside the new Worker.
While transitioning, Worker accepts the old `consent=1` event payload as well.

## Verification

```powershell
$api = "https://dry-wildflower-8d08.zhouzedongunr.workers.dev"
Invoke-RestMethod "$api/stats" -Headers @{Origin="https://zhouzedong.top"}
```

Visit `https://zhouzedong.top/` once from a browser without DNT enabled and
with Cloudflare geo metadata available, then run the request again. The
`total` field should increment by one; `countries` and `points` represent
approximate locations. The website itself shows the same data.

`VISITOR_HASH_SECRET` is no longer used by the Worker. The previous secret
was shared in a transcript; remove it from Worker settings once this version is
deployed, or rotate if used elsewhere. Never paste an active secret into chat.

Cloudflare Worker CORS Origin checks limit ordinary browsers, but are not a
strong defense against determined script-origin spoofing or artificial traffic.

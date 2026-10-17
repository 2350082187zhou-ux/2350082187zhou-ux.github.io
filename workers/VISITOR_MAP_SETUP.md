# Independent homepage and blog visitor maps

Homepage: `https://zhouzedong.top/` → `site=home` → existing D1 table `geo_visits`.
Blog: `https://zhouzedong.top/blog/` → `site=blog` → new table `geo_visits_blog`.
Maps refresh statistics every 60 seconds while visible and when revisiting an inactive browser tab. Refresh polling does not add pageviews. Each actual load attempts one view, respecting browser Do Not Track and Global Privacy Control preferences. No full IP address or cookie is stored; counts represent pageviews, not unique people.

## STEP 1: One-time D1 migration (BEFORE worker deployment)

In Cloudflare dashboard open Workers & Pages → D1 → zz-visitor-map → Console, and execute:

```sql
CREATE TABLE IF NOT EXISTS geo_visits_blog (fingerprint TEXT NOT NULL, day TEXT NOT NULL, country TEXT NOT NULL, lat REAL NOT NULL, lon REAL NOT NULL);
CREATE INDEX IF NOT EXISTS idx_geo_visits_blog_day ON geo_visits_blog(day);
```

Alternatively, in Windows PowerShell with Wrangler authenticated:

```powershell
npx.cmd --yes wrangler@latest d1 execute zz-visitor-map --remote --command "CREATE TABLE IF NOT EXISTS geo_visits_blog (fingerprint TEXT NOT NULL, day TEXT NOT NULL, country TEXT NOT NULL, lat REAL NOT NULL, lon REAL NOT NULL)"
npx.cmd --yes wrangler@latest d1 execute zz-visitor-map --remote --command "CREATE INDEX IF NOT EXISTS idx_geo_visits_blog_day ON geo_visits_blog(day)"
```

Do not drop or change existing `geo_visits`; historical records remain in the homepage counter. Blog begins at zero because past visits cannot be separated retroactively.

## STEP 2: Redeploy updated Worker

```powershell
Set-Location "$env:USERPROFILE\zz-visitor-worker"
$base = "https://raw.githubusercontent.com/2350082187zhou-ux/2350082187zhou-ux.github.io/master/workers"
Invoke-WebRequest "$base/visitor-map-worker.js" -OutFile ".\visitor-map-worker.js"
Invoke-WebRequest "$base/wrangler.toml" -OutFile ".\wrangler.toml"
node --check .\visitor-map-worker.js
npx.cmd --yes wrangler@latest deploy --config .\wrangler.toml
```

Worker is `dry-wildflower-8d08`, D1 binding `DB` → `zz-visitor-map`. Updating GitHub does not itself deploy Cloudflare Worker.

## STEP 3: Verify

```powershell
$api="https://dry-wildflower-8d08.zhouzedongunr.workers.dev"
$h=@{Origin="https://zhouzedong.top"}
Invoke-RestMethod "$api/stats?site=home" -Headers $h
Invoke-RestMethod "$api/stats?site=blog" -Headers $h
```

Visit the homepage once, then blog once, comparing each individual total before/after. Browser extensions, absent Cloudflare geography or DNT/GPC can prevent recording; reloading a page counts another pageview. D1 rows older than 90 days are cleaned by daily cron and on new records. CORS alone is not sufficient to prevent forged requests, so counts are approximate. Review visitor privacy notice and applicable privacy law before enabling this feature.

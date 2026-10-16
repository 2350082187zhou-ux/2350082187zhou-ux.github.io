# Activate the real worldwide visitor map

The four-language academic homepage and cyber blog already include the visitor
map frontend. **Actual recording is not enabled until its Worker endpoint is
deployed and configured.** GitHub Pages is a static hosting service and cannot
alone provide the site owner with per-visitor IP geolocation logs.

We supply a Cloudflare Worker + D1 implementation. You do NOT need to transfer
zhouzedong.top's DNS or change GitHub Pages settings.

## Set up the backend (one-time, with your own Cloudflare account)

1. Install Node.js and use `npx wrangler login`.
2. From the repository root run `npx wrangler d1 create zz-visitor-map`.
3. Copy the output UUID into `workers/wrangler.toml`, replacing
   `REPLACE_WITH_YOUR_DATABASE_ID`.
4. Run `npx wrangler d1 execute zz-visitor-map --remote --file=workers/schema.sql`.
5. Generate a random secret locally:
   `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`.
6. Run `npx wrangler secret put VISITOR_HASH_SECRET --config workers/wrangler.toml`;
   paste the random secret when prompted. Never commit secrets.
7. Run `npx wrangler deploy --config workers/wrangler.toml`.
8. Find the new Worker URL, for example
   `https://zz-visitor-map.YOUR-SUBDOMAIN.workers.dev`.
   In `assets/js/visitor-geo-config.js` replace
   `window.ZEDONG_VISITOR_API = "";`
   with `window.ZEDONG_VISITOR_API = "https://...workers.dev";`.
   Commit the config change. The visible map starts fetching real data.

## What the feature does

- Public map: plots approximate global latitude/longitude of opt-in visitors,
  grouped by region and country, with hover details and 90-day totals.
- A visitor must select *Share my approximate region* before any visit
  is collected. Their choice is saved locally and can be revoked using the
  same button, preventing future collection. Historical anonymous aggregates
  remain until expiry.
- Cloudflare edge location is approximate IP-based geography, NOT phone GPS.
  Coordinates are rounded to 2 degrees (large area, often >200 km).
- The server uses IP + User-Agent *only in memory*, to compute daily HMAC
  fingerprints with a secret unavailable to the browser. It never stores or
  publishes raw IP, UA, GPS, or visitor identities.
- Database rows count unique fingerprints per day, not every page view.
  90-day queries exclude older records; opportunistic deletion is done during
  collection. For guaranteed storage expiration when there is no new traffic,
  schedule a Cloudflare Cron maintenance job to delete old rows.
- Map's continent outlines are schematic; dots use geographical projection
  based on REAL API data, never hard-coded invented visit locations.
- Only allowlisted zhouzedong.top / www and owner github.io origins may
  call the API from normal web browsers; this is not strong protection against
  intentional server-side Origin spoofing. Cloudflare rate limits are advisable
  if spam becomes an issue.

## Verification

With the URL configured, open `https://zhouzedong.top/` or
`https://zhouzedong.top/blog/` and select *Share my approximate region*.
The map should update. Without endpoint configured, it explicitly displays
*Visitor analytics are not connected yet* rather than fake hits.

Cloudflare Workers and D1 free tiers have limits; consult current docs.

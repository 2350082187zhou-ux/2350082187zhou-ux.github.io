/* Live Cloudflare Worker endpoint for the opt-in visitor-origin dashboard.
 * No raw IP addresses, credentials, or D1 database keys are placed on the site.
 * The academic homepage queries /stats; a visit is recorded only if the
 * visitor chooses to share their approximate region.
 */
window.ZEDONG_VISITOR_API = "https://dry-wildflower-8d08.zhouzedongunr.workers.dev";

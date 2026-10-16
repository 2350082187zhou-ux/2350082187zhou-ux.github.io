/* Real visit origins: academic homepage only. The cyber blog is untouched.
 * The Cloudflare Worker counts anonymous pageviews automatically.
 * Do not place credentials or the VISITOR_HASH_SECRET in this public file.
 */
window.ZEDONG_VISITOR_API =
  window.location.pathname === "/"
    ? "https://dry-wildflower-8d08.zhouzedongunr.workers.dev"
    : "";

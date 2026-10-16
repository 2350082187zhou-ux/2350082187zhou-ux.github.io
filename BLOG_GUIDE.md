# Blog content synchronization

The academic website at https://zhouzedong.top/blog/ **automatically mirrors** the
standalone research blog at https://blog.zhouzedong.top/.

## Where to write

**Only edit the canonical repository:**
https://github.com/2350082187zhou-ux/research-blog

1. Add a Markdown post under the canonical repository's `_posts/` directory,
   named `YYYY-MM-DD-short-title.md`.
2. Include front matter (title, date, excerpt, optional categories/tags).
3. Commit changes to the `main` branch of `research-blog`.
4. The independent blog builds on the push.
5. The academic site automatically pulls the same homepage, posts, and dedicated
   blog visuals at its hourly deployment. The scheduled update can be delayed by
   GitHub Actions; to refresh immediately, manually run the academic site's
   "Deploy Academic Pages template site to Pages" workflow.

**Do not author or edit files under this academic repository's `_posts/`.**
During every academic-site build, the canonical blog's posts replace the posts
from this academic checkout. Source files in this academic Git repository are
unchanged by the mirror step; only its rendered site is updated.

## Site architecture

- Canonical blog: `research-blog` (branch `main`), deployed separately at
  `blog.zhouzedong.top`.
- Academic site: `2350082187zhou-ux.github.io` (branch `master`), deployed
  at `zhouzedong.top`.
- Academic site's `scripts/sync_research_blog.py` fetches the canonical
  `index.md`, article posts and blog-specific visual assets before each build.
- Both academic deployment workflows run the mirror step. The regular academic
  workflow additionally runs approximately once per hour.
- The academic site retains its own `/blog/` URL and navigation. The article
  permalinks differ by site, but the rendered article source is shared.
- The conference deadline database is owned by the **academic website**;
  the independent blog imports the same data during its own deployment.

For images used within individual posts, put them in `assets/blog/` or
`images/blog/` in the canonical repository and use root-relative URLs in
Markdown. The mirror script copies those optional folders as well.

Never publish passwords, credentials, confidential files or unpublished
sensitive experiment results in either public repository.

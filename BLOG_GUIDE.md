# Publishing a blog post

Your blog lives at `/blog/` on your GitHub Pages website.

## Create a post

1. On GitHub, open `_posts/` and add a new Markdown file named `YYYY-MM-DD-short-title.md`.
2. Copy the structure from `_drafts/post-draft.md` and replace all placeholder text.
3. Use a valid YAML front matter block such as:

```yaml
---
layout: single
title: "My Research Note"
date: 2026-10-15
excerpt: "A short, accurate summary."
categories:
  - Research Notes
tags:
  - Linux
  - Storage
---
```

4. Write in Markdown. Use fenced code blocks for commands and cite sources/credit images where appropriate.
5. Commit the Markdown file to the `master` branch. The existing GitHub Actions workflow automatically builds and deploys the website.

New posts receive URLs of the form `/blog/YYYY/MM/DD/short-title/` and appear automatically on `/blog/` in reverse chronological order.

## Editing and drafts

- To revise an article, edit the original Markdown file and commit.
- Keep unpublished notes in `_drafts/`; they are not published in the normal site build.
- Do not put passwords, tokens, private data, or unpublished sensitive research results in the public repository.
- The original Academic Pages template sample blog posts have been moved to `_archived_blog_examples/` for safekeeping.

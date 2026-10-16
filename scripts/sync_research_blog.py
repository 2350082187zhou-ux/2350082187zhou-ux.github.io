#!/usr/bin/env python3
"""Mirror the public research-blog content into the academic site's Jekyll build.

Run this before Jekyll builds the academic site. The canonical authoring source is
2350082187zhou-ux/research-blog (branch main), not the academic site.

No access token is required. This copies ONLY blog-scoped files into the build
workspace and does not commit them back to the academic repository.
"""
from __future__ import annotations

import os
import shutil
import subprocess
import tempfile
from pathlib import Path

ACADEMIC_ROOT = Path(__file__).resolve().parents[1]
BLOG_REPO_URL = "https://github.com/2350082187zhou-ux/research-blog.git"
BLOG_ASSETS = [
    "assets/css/blog-deadlines-ops.css",
    "assets/css/cyber-blog.css",
    "assets/css/cyber-cinematic.css",
    "assets/js/blog-deadlines-ops.js",
    "assets/js/cyber-blog.js",
    "assets/js/cyber-cinematic.js",
    "assets/js/security-inline.js",
    "assets/images/agent-storage-trust-boundary-v2.svg",
    "assets/images/channel-agent-security.svg",
    "assets/images/channel-research-notes.svg",
    "assets/images/channel-storage-security.svg",
    "assets/images/cyber-lab-backdrop.svg",
    "assets/images/cyber-linux-defense.svg",
    "assets/images/linux-tux-original.svg",
]
POST_SUFFIXES = {".md", ".markdown", ".html"}


def copy_file(source_root: Path, relative_path: str) -> None:
    source = source_root / relative_path
    if not source.is_file():
        raise FileNotFoundError(f"Required blog asset missing: {relative_path}")
    target = ACADEMIC_ROOT / relative_path
    target.parent.mkdir(parents=True, exist_ok=True)
    shutil.copy2(source, target)


def mirror(source_root: Path) -> int:
    homepage = source_root / "index.md"
    posts_root = source_root / "_posts"
    if not homepage.is_file() or not posts_root.is_dir():
        raise FileNotFoundError("The canonical blog must contain index.md and _posts/.")

    source_text = homepage.read_text(encoding="utf-8")
    if "permalink: /\n" not in source_text:
        raise ValueError("Canonical blog index is missing the expected permalink.")
    source_text = source_text.replace("permalink: /\n", "permalink: /blog/\n", 1)
    # Preserve the academic site's own blog URL instead of sending its cards
    # back to the separate domain. Other research/CV links remain valid.
    source_text = source_text.replace(
        "https://blog.zhouzedong.top/",
        "{{ '/blog/' | relative_url }}",
    )
    academic_page = ACADEMIC_ROOT / "_pages/blog.md"
    academic_page.parent.mkdir(parents=True, exist_ok=True)
    academic_page.write_text(source_text, encoding="utf-8")

    # Only Markdown/HTML post files are owned by the canonical blog.
    # Keep .gitkeep and other hidden metadata; delete stale authored posts.
    academic_posts = ACADEMIC_ROOT / "_posts"
    academic_posts.mkdir(parents=True, exist_ok=True)
    for previous in academic_posts.rglob("*"):
        if previous.is_file() and previous.suffix.lower() in POST_SUFFIXES:
            previous.unlink()
    count = 0
    for post in sorted(posts_root.rglob("*")):
        if not post.is_file() or post.suffix.lower() not in POST_SUFFIXES:
            continue
        relative = post.relative_to(posts_root)
        destination = academic_posts / relative
        destination.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(post, destination)
        count += 1

    for relative_path in BLOG_ASSETS:
        copy_file(source_root, relative_path)

    # Put article-specific illustrations here so their paths work on BOTH sites.
    for asset_folder in ("assets/blog", "images/blog"):
        source_dir = source_root / asset_folder
        if source_dir.exists() and source_dir.is_dir():
            target_dir = ACADEMIC_ROOT / asset_folder
            if target_dir.exists():
                shutil.rmtree(target_dir)
            shutil.copytree(source_dir, target_dir)

    print(f"Mirrored blog homepage, {count} article(s), and {len(BLOG_ASSETS)} shared assets.")
    return count


def main() -> None:
    override = os.environ.get("BLOG_SYNC_SOURCE")
    if override:
        mirror(Path(override).resolve())
        return
    with tempfile.TemporaryDirectory(prefix="research-blog-sync-") as directory:
        checkout = Path(directory) / "research-blog"
        subprocess.run(
            ["git", "clone", "--quiet", "--depth", "1", "--branch", "main",
             BLOG_REPO_URL, str(checkout)],
            check=True,
        )
        mirror(checkout)


if __name__ == "__main__":
    main()

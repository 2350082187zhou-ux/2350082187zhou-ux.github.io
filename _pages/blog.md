---
layout: archive
title: "Blog"
permalink: /blog/
author_profile: true
description: "Research notes, technical tutorials, and updates by Zedong Zhou."
---

Welcome to my research and engineering blog. I use this space to share notes on **computer systems, AI agent security, storage and hardware security, computer vision**, and lessons from hands-on experiments.

Here you will find technical walkthroughs, experiment logs, and ideas in progress.

---

## Latest Posts

{% assign blog_posts = site.posts | sort: 'date' | reverse %}
{% if blog_posts.size > 0 %}
  {% for post in blog_posts %}
    {% include archive-single.html %}
  {% endfor %}
{% else %}
No posts yet. I'm preparing the first research note — check back soon.
{% endif %}

---
permalink: /
title: "Zedong Zhou"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

**Welcome to my website!**

I am **Zedong Zhou**, a Ph.D. student in Computer Science at the **University of Nevada, Reno (UNR)**, advised by [Dr. Niusen Chen](https://www.unr.edu/cse/people/niusen-chen). My research interests lie at the intersection of **systems security**, **operating systems**, **storage systems**, and the security implications of increasingly autonomous AI agents.

I am particularly interested in understanding how privileged software interacts with traditional security boundaries, and how data can remain protected even when the host environment is not fully trusted.

<div class="security-deadline-entry">
  <span class="security-deadline-entry__symbol" aria-hidden="true">◷</span>
  {% assign community_venues = site.data.security_deadlines_auto.conferences | where: "tier", "additional" %}
  {% assign all_security_events = site.data.security_deadlines.events | concat: site.data.security_deadlines_auto.events | sort: 'iso_utc' %}
  {% assign current_utc = 'now' | date: '%Y-%m-%dT%H:%M:%SZ' %}
  {% assign next_event = nil %}
  {% for item in all_security_events %}
    {% if item.iso_utc > current_utc %}
      {% assign next_event = item %}
      {% break %}
    {% endif %}
  {% endfor %}
  <span><strong>Security Conference Deadlines</strong>
    <span class="security-deadline-entry__desc">Top 4 + {{ community_venues.size }} additional venues · automated updates every 6 hours</span>
    {% if next_event %}
      {% assign manual_venue = site.data.security_deadlines.conferences | where: "id", next_event.conf | first %}
      {% assign imported_venue = site.data.security_deadlines_auto.conferences | where: "id", next_event.conf | first %}
      {% assign best_venue = manual_venue | default: imported_venue %}
      <span class="security-deadline-next">Next: {{ best_venue.short | escape }} — <span data-inline-deadline="{{ next_event.iso_utc }}">Calculating…</span> {% if next_event.source == "community" %}(community listing){% endif %}</span>
    {% endif %}
  </span>
  <a href="{{ '/security-deadlines/' | relative_url }}">Live conference countdown ↗</a>
</div>
<style>
.security-deadline-entry{display:flex;align-items:center;gap:12px;flex-wrap:wrap;background:#eef7fb;border:1px solid #c8e3e9;border-left:4px solid #168da0;border-radius:8px;padding:13px 15px;margin:20px 0 27px;font-size:.88em;color:#223a4e}
.security-deadline-entry__symbol{font-size:1.5em;color:#148b93}
.security-deadline-entry__desc{display:block;font-size:.88em;color:#577284;margin-top:2px}
.security-deadline-entry>a{margin-left:auto;font-weight:700;color:#087b8c!important;white-space:nowrap}
.security-deadline-entry>a:hover{text-decoration:underline}
.security-deadline-next{display:block;margin-top:4px;color:#087d7c;font-size:.85em;font-weight:700}
.security-deadline-next [data-inline-deadline]{font-variant-numeric:tabular-nums}
@media(max-width:640px){.security-deadline-entry>a{margin-left:0}}
</style>
<script defer src="{{ '/assets/js/security-inline.js' | relative_url }}"></script>

## Education

### University of Nevada, Reno

**Ph.D. in Computer Science**  
Reno, Nevada, USA  
*September 2026 – Present*

### Anhui Polytechnic University

**Bachelor's Degree in Electrical Engineering and Automation**  
Wuhu, Anhui, China  
*September 2021 – June 20, 2025*

## Undergraduate Research Background

My undergraduate research focused on **applied intelligent algorithms**, with work in **visual–inertial SLAM and mapping**, battery health prediction, and energy forecasting. I also developed familiarity with **computer vision, 3D reconstruction**, and the concepts and applications of **large language models (LLMs)**. These interests complement my current Ph.D. research in systems and AI agent security.

[Learn more about my research](/research/)

## Research Interests

- **AI Agent Security:** Security risks posed by AI agents with elevated permissions, including unauthorized file modification or deletion.
- **Operating Systems and Kernel Security:** Linux security mechanisms, access control, and kernel-level enforcement.
- **Storage and Hardware Security:** Data integrity and protection mechanisms beyond the host software stack.
- **Security Analysis with AI:** Applications of machine learning and program analysis to software security.

## Selected Research Project

### When AI Agents Go Rogue: Who Protects Your Files?

This research investigates whether host-controlled protection mechanisms can safeguard sensitive files when an AI agent has root privileges. The study examines defenses at different levels of the software stack, including **AppArmor**, **eBPF LSM**, and **block-layer enforcement**, to identify the limits of host-side protection and motivate stronger data-integrity boundaries.

*Research/poster project; a formal publication reference will be added when available.*

See the [Research page](/research/) for more information about my interests and projects.

## Publications

My publications and preprints cover efficient 3D reconstruction, battery health prediction, visual–inertial SLAM, and electricity demand forecasting. See the [Publications page](/publications/) for full citations and links to papers and code.

## Contact

- **Primary email (UNR):** [zedongz@unr.edu](mailto:zedongz@unr.edu)
- **Alternative email:** [2350082187zhou@gmail.com](mailto:2350082187zhou@gmail.com)
- **WhatsApp:** [+1 (775) 203-1866](https://wa.me/17752031866)
- **QQ:** 2350082187
- **WeChat:** `zhou13155311153`

## Links

- [GitHub](https://github.com/2350082187zhou-ux)
- [ORCID](https://orcid.org/0009-0009-2268-059X)
- [Google Scholar](https://scholar.google.com/citations?user=vkzLMEcAAAAJ&hl=en)
- [LinkedIn](https://www.linkedin.com/in/zedong-zhou-19b50041a/)
- [University of Nevada, Reno](https://www.unr.edu/)

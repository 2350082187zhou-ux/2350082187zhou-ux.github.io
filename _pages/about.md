---
permalink: /
title: "Zedong Zhou"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

**Welcome to my website!**

## About Me

Zedong Zhou received his Bachelor's degree in **Electrical Engineering and Automation** from **Anhui Polytechnic University**, Wuhu, China, in 2025. He is currently pursuing a **Ph.D. in Computer Science** at the **University of Nevada, Reno (UNR)**, USA, under the supervision of [Dr. Niusen Chen](https://www.unr.edu/cse/people/niusen-chen).

His research interests include **computer systems security, operating systems, storage systems, AI agent security, and hardware security**. His current work investigates the risks posed by highly privileged AI agents, evaluates host-side protections at the file-system, kernel, and block-device layers, and explores stronger security boundaries for protecting sensitive data from unauthorized modification or deletion.

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
  <span class="security-deadline-entry__content">
    <strong>Security Conference Paper Submission Deadlines</strong>
    <span class="security-deadline-entry__intro">Explore submission deadlines, upcoming paper and abstract registration dates, and live countdowns for leading cybersecurity and systems security conferences.</span>
    <span class="security-deadline-entry__desc">IEEE S&amp;P · USENIX Security · ACM CCS · NDSS · {{ community_venues.size }} additional security conferences · automatically checked every 6 hours</span>
    {% if next_event %}
      {% assign manual_venue = site.data.security_deadlines.conferences | where: "id", next_event.conf | first %}
      {% assign imported_venue = site.data.security_deadlines_auto.conferences | where: "id", next_event.conf | first %}
      {% assign best_venue = manual_venue | default: imported_venue %}
      <span class="security-deadline-next">Next: {{ best_venue.short | escape }} — <span data-inline-deadline="{{ next_event.iso_utc }}">Calculating…</span> {% if next_event.source == "community" %}(community listing){% endif %}</span>
    {% endif %}
  </span>
  <a href="{{ '/security-deadlines/' | relative_url }}" aria-label="View cybersecurity conference paper submission deadlines and live countdowns">View Submission Deadlines &amp; Live Countdowns ↗</a>
</div>
<style>
.security-deadline-entry{display:grid;grid-template-columns:34px minmax(0,1fr);column-gap:15px;row-gap:14px;align-items:start;background:#edf8fa;border:1px solid #c6e6e9;border-left:4px solid #138d9c;border-radius:10px;padding:20px 22px;margin:24px 0 32px;color:#223a4e;box-shadow:0 5px 20px rgba(22,94,111,.06)}
.security-deadline-entry__symbol{font-size:1.8em;color:#148b93;line-height:1.25}
.security-deadline-entry__content{min-width:0}
.security-deadline-entry__content>strong{display:block;font-size:1.1em;line-height:1.4;color:#143b4b;margin-bottom:8px}
.security-deadline-entry__intro{display:block;font-size:.92em;line-height:1.65;color:#315368;margin-bottom:8px}
.security-deadline-entry__desc{display:block;font-size:.83em;line-height:1.65;color:#577284}
.security-deadline-entry>a{grid-column:2;justify-self:start;display:inline-block;padding:9px 15px;background:#087f8c;border:1px solid #087f8c;color:#fff!important;border-radius:6px;font-size:.87em;font-weight:700;line-height:1.45}
.security-deadline-entry>a:hover{background:#066674;color:#fff!important;text-decoration:none}
.security-deadline-next{display:block;margin-top:8px;color:#087d7c;font-size:.87em;font-weight:700;line-height:1.55}
.security-deadline-next [data-inline-deadline]{font-variant-numeric:tabular-nums}
@media(max-width:640px){.security-deadline-entry{grid-template-columns:1fr;padding:16px}.security-deadline-entry__symbol{display:none}.security-deadline-entry>a{grid-column:1}}
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

---
layout: archive
title: "Cybersecurity Blog"
permalink: /blog/
author_profile: true
description: "Security research, Linux internals, AI agent safety and reproducible systems experiments."
---

<style>
.cyber-blog{--cb-accent:#24e0b0;--cb-blue:#68b7ff;--cb-bg:#0a1420;color:#dbe8f1;font-family:inherit}
.cyber-blog *{box-sizing:border-box}
.cyber-hero{position:relative;overflow:hidden;isolation:isolate;border:1px solid #28516a;border-radius:16px;background:radial-gradient(ellipse at 75% 0%,#183e51 0%,transparent 55%),linear-gradient(130deg,#091522,#0c2030);padding:clamp(25px,5vw,52px);box-shadow:0 14px 35px #06142122}
.cyber-hero:before{content:"";position:absolute;inset:0;background-image:linear-gradient(#4cdab010 1px,transparent 1px),linear-gradient(90deg,#4cdab010 1px,transparent 1px);background-size:32px 32px;mask-image:linear-gradient(to bottom,#000,transparent);pointer-events:none}
.cyber-hero>*{position:relative}
.cyber-status{display:inline-flex;align-items:center;gap:9px;color:#91f5d8;font:600 .73rem ui-monospace,monospace;letter-spacing:.12em}
.cyber-dot{width:8px;height:8px;background:#24e0b0;border-radius:50%;box-shadow:0 0 12px #24e0b0;animation:cyber-pulse 2.5s infinite}
.cyber-hero h2{color:#f3fbff!important;font-size:clamp(1.65rem,4vw,2.75rem)!important;line-height:1.16!important;margin:19px 0!important;border:0!important}
.cyber-hero h2 span{color:var(--cb-accent)}
.cyber-hero p{max-width:620px;color:#a9c2d2;font-size:.98rem;line-height:1.75}
.cyber-terminal{margin-top:27px;padding:14px 18px;background:#050d15c9;border:1px solid #24455a;border-radius:9px;color:#a6e5d5;font: .77rem/1.7 ui-monospace,SFMono-Regular,Consolas,monospace;overflow-wrap:anywhere}
.cyber-prompt{color:#6cb4ff}.cyber-caret{display:inline-block;width:7px;height:1em;vertical-align:-2px;background:#29dcb0;animation:cyber-blink 1.2s steps(1) infinite}
.cyber-heading{display:flex;justify-content:space-between;align-items:center;gap:12px;margin:34px 0 16px}
.cyber-heading h2{font-size:1.3rem!important;margin:0!important;border:0!important;color:#243c4d!important}
.cyber-heading small{font: .72rem ui-monospace,monospace;color:#567486}
.cyber-topics{display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:12px}
.cyber-topic{border:1px solid #2a465a;border-radius:11px;padding:19px 15px;background:linear-gradient(145deg,#101f2d,#0c1722);color:#e3f5fc;transition:transform .22s ease,border-color .22s ease,box-shadow .22s ease}
.cyber-topic:hover{transform:translateY(-4px);border-color:#25d8ac;box-shadow:0 8px 25px #0c504c30}
.cyber-topic strong{display:block;font-size:.92rem;color:#f0fbff}.cyber-topic small{display:block;margin-top:7px;color:#8aafc0;font-size:.75rem;line-height:1.5}
.cyber-topic .cyber-icon{display:block;color:#36e0ba;font:700 1.2rem ui-monospace,monospace;margin-bottom:11px}
.cyber-posts{background:#0c1722;border:1px solid #2a465a;border-radius:12px;padding:clamp(17px,3vw,28px);color:#dbe8f1}
.cyber-posts .archive__item{padding:13px 0;border-bottom:1px solid #294155}.cyber-posts .archive__item:last-child{border-bottom:0}
.cyber-posts .archive__item-title a{color:#a5f2df!important}.cyber-posts .archive__item-excerpt,.cyber-posts .page__date{color:#b1c7d2}
.cyber-empty{text-align:center;padding:38px 15px}.cyber-empty strong{display:block;color:#e9fbff;font-size:1.1rem;margin-bottom:8px}.cyber-empty p{color:#a8c2cf;font-size:.88rem}
@keyframes cyber-pulse{50%{opacity:.45;box-shadow:0 0 3px #24e0b0}}
@keyframes cyber-blink{50%{opacity:0}}
@media(prefers-reduced-motion:reduce){.cyber-blog *, .cyber-blog *:before{animation:none!important;transition:none!important}}
@media(max-width:480px){.cyber-hero{padding:22px}.cyber-terminal{font-size:.68rem}}
</style>

<div class="cyber-blog">
  <section class="cyber-hero" aria-label="Blog introduction">
    <div class="cyber-status"><span class="cyber-dot" aria-hidden="true"></span> RESEARCH LOG / SYSTEM ONLINE</div>
    <h2>Exploring the <span>Security Boundary.</span></h2>
    <p>Notes from Zedong Zhou on operating systems, AI agents, storage security, and the engineering behind trustworthy computing. Research ideas, experiments, and technical walkthroughs.</p>
    <div class="cyber-terminal" aria-label="Terminal-style introduction">
      <span class="cyber-prompt">zedong@research:~$</span> cat research_interests.txt<br>
      &gt; AI Agent Security · Linux Kernel · Storage Systems<br>
      <span class="cyber-prompt">zedong@research:~$</span> <span class="cyber-caret" aria-hidden="true"></span>
    </div>
  </section>

  <div class="cyber-heading"><h2>Research Channels</h2><small>01 / FOCUS AREAS</small></div>
  <div class="cyber-topics">
    <div class="cyber-topic"><span class="cyber-icon">[01]</span><strong>AI Agent Security</strong><small>Privilege boundaries, autonomy, and file protection</small></div>
    <div class="cyber-topic"><span class="cyber-icon">[02]</span><strong>Linux &amp; eBPF</strong><small>Kernel instrumentation and system observability</small></div>
    <div class="cyber-topic"><span class="cyber-icon">[03]</span><strong>Storage Security</strong><small>File systems, block I/O, and data integrity</small></div>
    <div class="cyber-topic"><span class="cyber-icon">[04]</span><strong>Research Notes</strong><small>Experiments, tools, papers, and lessons learned</small></div>
  </div>

  <div class="cyber-heading"><h2>Latest Posts</h2><small>02 / FIELD NOTES</small></div>
  <div class="cyber-posts">
    {% assign blog_posts = site.posts | sort: 'date' | reverse %}
    {% if blog_posts.size > 0 %}
      {% for post in blog_posts %}
        {% include archive-single.html %}
      {% endfor %}
    {% else %}
      <div class="cyber-empty"><strong>No field notes published yet.</strong><p>Research notes and technical articles will appear here as they are published.</p></div>
    {% endif %}
  </div>
</div>

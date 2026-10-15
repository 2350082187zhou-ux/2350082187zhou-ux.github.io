---
layout: single
title: "Research"
permalink: /research/
author_profile: true
---

My research interests center on **security boundaries for modern computing systems**, particularly where autonomous software, operating systems, and storage hardware meet.

## AI Agent Security

AI agents can operate software tools and manage files with broad permissions. I study the security implications of privileged agents and the risks of unauthorized modification or deletion of sensitive data.

## Operating Systems and Kernel Security

I am interested in Linux access-control and enforcement mechanisms, including **AppArmor**, **eBPF LSM**, and controls at the block-I/O layer. A key question is what protection remains effective when the software performing an operation has extensive host privileges.

## Storage and Hardware Security

I am interested in data-integrity protections that can provide a stronger trust boundary than host-managed mechanisms alone, including potential hardware-level enforcement.

## Selected Project

### When AI Agents Go Rogue: Who Protects Your Files?

**Keywords:** AI Agent Security · Linux Security · eBPF LSM · AppArmor · File Integrity

This project investigates the resilience of sensitive-file protections against a root-privileged AI agent. The experimental design evaluates controls at the file-system, kernel, and block-device layers, and studies the limitations of protections governed by the same host.

**Status:** Research/poster project. Public artifacts or a citable paper will be linked here when available.

## Other Interests

I am also interested in applying machine learning and program analysis to vulnerability detection and security analysis.

[Back to homepage](/)

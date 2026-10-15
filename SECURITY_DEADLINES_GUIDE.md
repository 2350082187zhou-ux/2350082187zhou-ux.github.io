# Automated Security Conference Deadlines

Live website: https://zhouzedong.top/security-deadlines/

## What is automatic?

The GitHub Actions workflow `.github/workflows/security-deadlines-auto.yml`
runs at minute 17 every six hours (UTC), and can be started manually using
Actions → Auto-update Security Conference Deadlines → Run workflow.

1. Downloads the public structured YAML from the community-managed
   [sec-deadlines](https://github.com/sec-deadlines/sec-deadlines.github.io/blob/master/_data/conferences.yml).
2. Runs offline unit tests, validates the upstream list and converts deadlines
   into a canonical UTC instant while respecting AoE and explicit IANA zones.
3. Selects only a curated set of major security, privacy, cryptography,
   digital-forensics, and hardware-security venues.
4. Writes `_data/security_deadlines_auto.json` only when the dates or
   descriptions have actually changed; unchanged runs create no commit.
5. Commits changes using the built-in GitHub Actions token and, when anything
   changes, builds and deploys the updated GitHub Pages site **in the same
   workflow**. Bot commits do not automatically trigger another push workflow.
6. Uploads desktop/mobile screenshots of the updated deadline website to
   GitHub Actions artifacts (kept for 14 days).

The homepage and blog share the imported data through Jekyll Liquid and show
countdowns; the standalone board lists all tracked venues and submission cycles.

## What is deliberately NOT automatic?

The official-checked Top Four dates in `_data/security_deadlines.yml` are
authoritative. The importer does **not** overwrite a conference edition once
its dates have been manually verified in that file. Thus an upstream mistake
cannot silently change a verified CFP date. The updater CAN import a newly
published, not-yet-verified Top Four edition, with an explicit community
disclaimer, pending official verification.

New community data is NOT represented as officially confirmed. It is
always labeled “Community listing · check CFP” and linked to the official
conference page. The aggregator is a community source, not the organizer.

Unknown, malformed, tentative “TBD” entries are skipped. We never invent
submission dates or mandatory registration dates based on prior years.
Rolling quarterly deadlines such as PETS or CHES are expanded according to
the source's documented %Y (year preceding conference) and %y (conference
year) format.

If the upstream source is unavailable, malformed, unexpectedly small, or
returns too few future deadlines, the action fails safely. The previously
published data stays unchanged until the next successful run.

## How to add another conference

Open `scripts/update_security_deadlines.py` and add an explicit entry in
the `CURATED` map (using the exact upstream conference name). The map is
purposefully an allowlist. Do not automatically import hundreds of
unrelated conferences.

Unit tests: `python -m unittest discover -s tests -p 'test_update_security_deadlines.py' -v`.
Dependencies: Python 3.12 and `PyYAML==6.0.2`.

To test offline with a copy of the upstream file:

```sh
python scripts/update_security_deadlines.py --source-file conferences.yml --dry-run
```

## Pages and assets

- `_pages/about.md`: compact homepage countdown and shortcut.
- `_pages/blog.md`: next-deadline cards on the Linux security blog.
- `_pages/security-deadlines.html`: complete searchable board.
- `assets/js/security-inline.js`: small countdowns on home + blog.
- `assets/js/security-deadlines.js`: full clock, filters and calendar.
- `_data/security_deadlines.yml`: manually verified Top Four.
- `_data/security_deadlines_auto.json`: read-only generated community data.
- `scripts/update_security_deadlines.py`: fetch, validate, generate.

## Timezone rules and reliability

AoE = UTC−12. Example: 2026-11-17 23:59 AoE is the same instant as
2026-11-18 11:59 UTC. The parser preserves the exact minute reported by
the community source; it does **not** add undocumented seconds.
Other timezones are interpreted using Python zoneinfo, including DST.

Dates and their origin are printed clearly on the website. A deadline
displayed by this tool does not substitute for a CFP. Organizers can change
submission deadlines, tracks, abstract-registration rules, and procedures.

The scheduled action depends on GitHub Actions being enabled and on the
repository's workflow token retaining Contents: write and Pages deployment
permissions. GitHub can delay cron jobs or disable scheduled actions after
extended repository inactivity. Monitor the Actions tab if the feed
appears stale.

Source acknowledgments: [sec-deadlines](https://github.com/sec-deadlines/sec-deadlines.github.io).
The four-conference concept and live countdown were inspired by CCFDDL,
but this website is independently operated and is not an official CFP feed.

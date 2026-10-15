# Security Top Four Conference Deadlines

URL: `/security-deadlines/`

This independently maintained research utility tracks four security venues:
IEEE S&P, USENIX Security, ACM CCS, and NDSS.

## Sources and accuracy

Conference facts are located in `_data/security_deadlines.yml`.
**Always use the conference's official Call for Papers to revise a date.**
CCFDDL and third-party tracking sites are useful references but are not
authoritative. The site intentionally shows **TBD** when an organizer has
not published a deadline. As of October 15, 2026 the ACM CCS 2027
submission dates are still unannounced.

Official CFP sources:

- IEEE S&P: https://www.ieee-security.org/TC/SP2027/cfpapers.html
- USENIX: https://www.usenix.org/conference/usenixsecurity27/call-for-papers
- ACM CCS: https://www.sigsac.org/ccs/CCS2027/cfp.html
- NDSS: https://www.ndss-symposium.org/ndss2027/submissions/call-for-papers/

## How dates work

The `local_date` field is the date printed by the CFP in **AoE (UTC−12)**.
The `iso_utc` field is the same deadline converted into a UTC instant.
For a deadline at `2026-11-17 23:59:59 AoE`, write
`iso_utc: "2026-11-18T11:59:59Z"`.

Do not change the time zone to the web server's local time or the
visitor's clock time. Visitors can switch between AoE and their browser's
own local time on the page.

For each new edition/cycle, add validated events to the `events` list,
using an existing conference ID (`sp`, `usenix`, `ccs`, `ndss`) and
`kind: paper` or `kind: abstract`. Update the `conferences` metadata,
the `official` CFP links, and `verified_on` as well.

The JavaScript calculates countdowns on the visitor's device and
downloads optional iCalendar `.ics` reminders. It does not automatically
scrape or update CFP dates. Refresh the YAML data after checking official
websites.

The homepage shortcut is in `_pages/about.md`, the Academic Pages menu
is in `_data/navigation.yml`, and the cyber-blog menu is in
`_layouts/cyber-blog.html`.

## Build and preview

The `Cyber Blog Visual Preview` GitHub Action builds the Jekyll site and
captures both the homepage and the deadlines subpage. Use the GitHub
Actions artifact images to review layout before making more changes.

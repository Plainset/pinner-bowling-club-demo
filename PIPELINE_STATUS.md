# Pipeline Status

Operational handoff only. `OUTREACH_LOG.md` remains the source of truth.

- Current phase: build complete, builder QA passed, awaiting reviewer score (round 1)
- Last trusted commit: initial build commit on `main`
- Known untrusted state: none
- Next exact action: reviewer scores out of 10; pass mark 7.5, loop back below that.
- Deploy URL: not deployed. No outreach authorised.
- Outreach state: **none, and none possible by email.** The club publishes no email address
  and no phone number anywhere on its site.
- Local preview: `pinner-bowling-club-site` in `.claude/launch.json`, port 4178.
- Flags for Alex:
  1. **The register asked for proof of a broken membership or booking path. Here it is.**
     There is no email address and no telephone number anywhere on the club's site — 0
     `mailto:` links across the whole crawl — and the Contact page's "Club Secretary" field
     reads "n/a". The home page invites you to "call in… or book a trial session", and there
     is nothing to call. That is a missing-essentials defect under the AGENTS.md
     qualification bar, and it materially upgrades this lead from the register's assessment.
  2. **Their "Become a member" page lives at the URL `/test-content/`.** The most important
     page on the site has an address that says the site is unfinished.
  3. The `{PageTitle}` token in the homepage meta description is confirmed still live.
  4. The site disagrees with itself on the season — "May to September" on the home page,
     "end of April to end of September" on the membership page.
  5. Because there is no email, any approach has to be in person or through their own form.

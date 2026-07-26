# Pipeline Status

Operational handoff only. `OUTREACH_LOG.md` remains the source of truth.

- Current phase: **reviewed round 1 — scored 7.5/10, PASS** (pass mark 7.5). Fix pass pending.
- Last trusted commit: initial build commit on `main`
- Known untrusted state: none
- Next exact action: apply the fix list below in order, then re-run
  `.pipeline/qa/upscale-audit.js` and `contrast-audit.js` at 320/390/768/1024/1440/1920 and
  re-capture the mobile header at 390. No re-review needed unless the hero is restructured.

## Reviewer fix list (ranked) — see `QA_REPORT.md` for evidence

1. **Restructure the hero on `index.html` at >=1024px.** It is the single thing holding the
   score at the line. Currently a 1327px-tall stacked block: at 1440x900 the entire first
   screen is flat navy plus a headline, and the only image visible above the fold is 274px of
   sky and treetops. The club's best asset — members playing in sunshine — sits at page
   y~1055, below the fold on every desktop screen, while 413px of empty navy sits beside the
   h1. Go side-by-side (text left, photo right) above 1024. It fills the dead space, puts the
   players above the fold, and renders `green-play.jpg` at ~550px — *more* upscale headroom
   than now, not less. Keep the stacked order at mobile.
2. **`white-space: nowrap` on `.nav-toggle`** (`assets/css/site.css:115`). "Menu" currently
   breaks to "MEN / U" at 320/360/375/390 — every common phone width.
3. **Re-export `assets/img/logo.png`** at 128px or as WebP. 466KB for a 52px badge is 64% of
   the home page's 727KB.
4. **Separate the mobile nav panel from the page** (`site.css:127`): it is the same navy as
   the hero it covers, with no shadow, so the open menu does not read as a layer.
5. **Either complete the committee table or re-label it** (`bowls.html:131`). It says "As
   published by the club" but shows 13 of the club's 16 rows (Vets A, Vets B, Bidgood dropped).
6. **Correct `BUILD_BRIEF.md` lines 98, 118-119, 123** — they still describe a full-bleed hero
   at 1.2x. The shipped hero is contained at 1140 and renders at 0.95x.

## Reviewer confirmations (independent, not the builder's word)

- **The contact claim is true.** 98 pages of the live site crawled: 0 `mailto:`, 0 `tel:`,
  0 email strings, 0 UK phone patterns in visible text. Contact page reads "Club Secretary —
  n/a". The build's footer and Visit-page statements are accurate and handled gracefully.
- **No upscale violation at 1920.** Hero renders 1140x691 from 1200x727 native = 0.95x.
- **All three testimonials are verbatim** from `/test-content/`, unembellished.
- **No season start month sneaks in** — the only "may" hits are the verb, in `visit.html:98,104`.
- **Every factual claim traces** to the club's own pages, including both "Unfilled" posts.
- 0 console errors, 0 failed requests, all 9 hrefs 200, keyboard and focus handling correct.
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

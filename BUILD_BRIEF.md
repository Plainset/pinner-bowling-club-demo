# Build Brief — Pinner Bowling Club

Spec redesign. Built 2026-07-26 from `active leads/LEAD_REGISTER.md` lead #4.
No outreach authorised; this is a build only.

## Contact
- Email: **none published anywhere on the site.** Confirmed: 0 `mailto:` links across every
  page crawled, and the Contact page's "Club Secretary" field reads literally **"n/a"**.
- Phone: **none published anywhere.**
- Contact route as published: an "Expression of Interest" form on the Become a member page,
  and a general contact form on the Contact page.
- Address: Pinner Bowling Club, Pinner Memorial Park, West End Lane, Pinner HA5 1AE
- Source URLs: `.../pinner-bowling-club-15231/contact/` and `/test-content/`
- Rechecked date: 2026-07-26

**This matters for outreach, not just for the build.** AGENTS.md makes a real, findable
email a hard requirement before investing time in a prospect. There isn't one. Any approach
to this club has to be in person or through their own form.

## Business State Check
- Status: **active.** Committee page is headed "C'ttee & Other Posts 2026" and lists 2026
  postholders; a bowls guide PDF was uploaded 2 June 2025; fixture and results pages are
  labelled 2026.
- Checked sources: the club's own site, crawled in a real browser 2026-07-26.
- Build decision: **proceed**

## Page Plan
- Scope: 3 pages
- Pages: `index.html` (Home), `bowls.html` (Bowls & membership), `visit.html` (Visit — finding
  the club and parking)
- Reason: the live site has 15 nav items, most of them members-only administration (change
  log, fixture lists, results, competitions, archived pages, policies). A redesign concept
  targets the one job the public site fails at — turning an interested passer-by into someone
  who books a taster session — so the member admin is deliberately out of scope.

## Pitch Hook
The register recorded the `{PageTitle}` token as the only defect and judged this "not a BIG
LEAD… would qualify if a broken membership or booking path can be demonstrated."

**It can be demonstrated.** Four findings, all verifiable:

1. **There is no way to contact the club.** No email address and no telephone number appear
   anywhere on the site — 0 `mailto:` links across the whole crawl — and the Contact page's
   "Club Secretary" line reads **"n/a"**. The home page invites you to "call in to just watch
   a game or book a trial session", and there is nothing to call.
2. **The single most important page on the site — "Become a member" — is published at the
   URL `/test-content/`.** That is the conversion page, and its address says the site is
   unfinished.
3. **The homepage meta description still contains an unreplaced template token**: "The
   official site for Pinner Bowling Club this page contains information {PageTitle}". This is
   what search results show.
4. **The site contradicts itself on the season.** The home page says "open for five months of
   the year from May to September"; the membership page says play runs "from end of April to
   end of September".

Sources: `/home/`, `/test-content/`, `/contact/`, all read 2026-07-26.

## Allowed Facts
| Fact | Source | Used where |
|---|---|---|
| "We have been here in the Memorial Park since 1953" | /home/ | index |
| "The club is run by its members for its members" | /home/ | index |
| Known as "the friendly club in the park" | /test-content/ | index, bowls |
| "It's your park – why not make it your bowling club?" | /home/ | index |
| Free taster session on the green, about an hour, arranged with a member | /test-content/ | index, bowls |
| Bring a pair of flat-soled shoes; the club provides the bowls, a set of four per person | /test-content/ | bowls |
| **No joining fee; annual membership is less than £200** | /test-content/ | bowls |
| Own bowls cost about £50 second-hand to £350 new | /test-content/ | bowls |
| Free coaching, 3–4 one-hour sessions, for new members | /test-content/ | bowls |
| Both social and competitive bowling, including inter-club matches | /test-content/ | index, bowls |
| Social events include quiz, bingo, barbeque and race nights | /test-content/ | index, bowls |
| "suitable for people aged 9 to 90 years" | /test-content/ | bowls |
| Play from 11:00 a.m. to dusk on most days | /test-content/ | index, visit |
| How the game works — deliver bowls close to the jack; the nearer bowl wins the end; typically 18 ends or first to 21 shots | /test-content/ | bowls |
| Bowls was played by Sir Francis Drake at Plymouth Hoe in 1588 | /home/ | bowls (as the club tells it) |
| Location: Pinner Memorial Park, West End Lane, HA5 1AE; next to Daisy's in the Park, by the lake and ornamental fountain; beside the car park near the duck pond | /home/, /test-content/, /contact/ | visit, footer |
| Parking: roads around the club are in the Pinner CPZ, restricted in residents' bays and most single yellow lines 11am–midday; pay and display car park adjacent to the club; zigzags on West End Lane restrict parking weekdays 3–5pm only; usually ample free parking in residents' bays on West Way and West End Avenue, a couple of minutes' walk | /where-are-we/ | visit |
| Three member quotes (verbatim) | /test-content/ | index |
| 2026 committee and postholders, including two posts recorded as "Unfilled" | /cttee--other-posts-2026/ | bowls |
| A club history document written in 1968 exists | /pbc-history/ | bowls |

## Do Not Claim
| Claim or uncertainty | Reason |
|---|---|
| A single season start month | **Their own site contradicts itself** — /home/ says "May to September", /test-content/ says "end of April to end of September". The build says the season runs "through the summer, into the end of September" and points to the club to confirm the opening date. Flagged to Alex. |
| Any email address or phone number | **None exists on their site.** Nothing may be invented. The build routes to their own published form. |
| An exact membership price | Their wording is "less than £200" and "no joining fee". The build repeats exactly that and no figure of its own. |
| A member count, league names, or any honours/results | Results and competition pages exist but were not read; nothing is asserted. |
| Named individuals as a public contact | The committee list is published, but it is an internal roster with two posts "Unfilled" and no contact details. Names are not used as a contact route. |
| Anything about disabled access, changing rooms, or a clubhouse bar | Not published. |
| Opening times beyond "11:00 a.m. to dusk on most days" | That is the only published time, and it is on the membership page rather than a hours table. |

## Asset Manifest
All images are the club's own, taken from their own website.

| File | Source | Native size | License/credit | Watermark checked | Intended section | Copy match |
|---|---|---|---|---|---|---|
| green-play.jpg | club site (hugofox CMS) | 1200×727 | club's own photo | yes | index hero, contained to the shell (0.45× at desktop) | members playing on the green — the club's own caption on the live site says "The photo on this page shows some of our club's members on the green" |
| green-hedge.jpg | club site header crop | 1000×240 | club's own photo | yes | bowls page band | the green, hedge and bench |
| park-map.jpg | club site | 1200×779 | the club's **own bespoke map** of Pinner Memorial Park, marked "We are here!" with both car parks | yes | visit page | finding the club and parking |
| logo.png | club site, re-exported 399×400 → 128×128 (466KB → 42.6KB) | 128×128 | club's own badge | yes | header, footer | brand mark |
| favicon.png | generated — "PBC" in Georgia Bold, amber on club navy | 256×256 | generated | n/a | browser tab | n/a |

Rejected:
- `pbc-0.jpg` (718×184) — the club's own "Welcoming new members now! For players of all ages
  and abilities / LEARN MORE" promo banner. It is theirs and it is on-message, but the message
  is **baked into the pixels**: unselectable, unreadable by a screen reader, un-translatable,
  and it would upscale badly. The same words are set as real text instead.
- Google Maps tiles from their Where Are We page — third-party, and the club's own map is
  better anyway.

## Design Notes
- Palette: club navy `#123E63` (sampled from their own logo and promo banner), amber
  `#F3A81B` from the same banner, and a bowling-green green for a secondary accent.
  **Amber fails contrast as text on light** (2.32:1) so it is used only on navy or as a
  block/rule colour, never as body text on paper.
- The hero photograph earns its prominence: sun, blue sky, mature trees, and a real moment of
  members mid-game. It clears the AGENTS.md quality bar. **It is not full-bleed.** At 1200px
  native, bleeding it to the viewport measures 1.6× at 1920 and fails the upscale gate, so it
  is held inside the 1140px shell. After reviewer round 1 it also moved alongside the
  headline above 64rem rather than beneath it — stacked, it sat at y≈1055, below the fold on
  every desktop screen, with 413px of empty navy beside the h1. Side by side it renders at
  **544px, a 0.45× downscale**: more headroom than the stacked version, not less.
- Image layout pattern: wrapper `aspect-ratio` + `object-fit: cover` throughout.
- Risk notes: `green-play.jpg` is 1200px native. Measured after the round-1 restructure:
  0.236× at 320 up to **0.45× at 1440 and 1920**. `green-hedge.jpg` is 1000px native and was
  initially allowed to fill the 1140 shell — 1.14×, under the gate but inconsistent with the
  discipline applied to the hero — so its band is now capped at its own native 1000px.
  Every width from 320 to 1920 is audited, 1920 specifically because that is where a
  full-bleed hero would have failed.
- Engine: `engine.css` vendored; `data-reveal` motion overridden at site level as on the
  previous two builds.

## Builder QA
See `QA_REPORT.md`.


## Reviewer round 1 — PASS at 7.5/10, and what changed

The reviewer verified every claim it was asked to challenge and found the build correct on
all of them: it crawled **98 pages** of the live site and confirmed **zero** `mailto:`, zero
`tel:`, zero email-pattern and zero UK-phone-pattern matches across raw HTML and stripped
text, with the Contact page reading "Club Secretary — n/a"; it confirmed the hero at 0.95×
with no violation at 1920; it confirmed all three testimonials verbatim; and it confirmed
every fact, including all 13 committee names and both "Unfilled" posts.

Its criticism was visual judgement, and it was right. Fixed:

1. **The hero buried the club's best asset.** Stacked, the photograph sat at y≈1055 — below
   the fold on every desktop screen — while 413px of navy sat empty beside the headline. It
   is now side by side above 64rem, stacked below. The players are above the fold and the
   image renders at 544px.
2. **The header said "MEN / U" on every phone.** `.nav-toggle` had no `white-space: nowrap`,
   so "Menu" broke mid-word at 320, 360, 375 and 390px. Fixed and measured: the text node now
   returns **1 client rect at every width**. The brand title also had its size clamped so it
   holds one line from 375px up.
3. **The logo was 466KB for a 52px badge** — 64% of the home page's total weight. Re-exported
   at 128px: **42.6KB**, an 89% reduction.
4. **The open mobile nav was the same navy as the hero behind it**, so it read as the page
   changing rather than a panel opening. Now `--navy-deep` with a drop shadow.
5. **The committee table said "as published" but showed 13 of 16 rows.** Vets A, Vets B and
   Bidgood restored.
6. `green-hedge.jpg` band capped at its native 1000px.

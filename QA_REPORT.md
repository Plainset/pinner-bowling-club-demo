# QA Report — Pinner Bowling Club

Builder pass, 2026-07-26. `.pipeline/qa/upscale-audit.js` and `.pipeline/qa/contrast-audit.js`
run unmodified via `.pipeline/qa/run-audit.js` (Chromium) against `http://localhost:4178`.

## Pages Checked
`/` (index.html), `/bowls.html`, `/visit.html` — at 320, 390, 768, 1024, 1440 and **1920** px.

1920 was added deliberately: the hero photograph is 1200px native, and a genuinely
full-bleed hero would render at 1920 CSS px — a **1.6× upscale and a blocking failure**.
It is held to the 1140px shell instead, so it renders at 1140 and downscales.

## Audit Results
| Check | Result | Evidence |
|---|---|---|
| Contrast audit | PASS | 0 violations, 3 pages × 6 widths (18 runs), 48–79 elements checked |
| Upscale, all six widths incl. 1920 | PASS | 0 violations, 0 broken, 0 unmeasured on every run |
| Broken images | PASS | 0 |
| Aspect mismatch advisory | PASS | 0 |

## Manual Checks
| Check | Result | Notes |
|---|---|---|
| Text on photo | PASS | No text is placed over a photograph anywhere. The hero photo carries a caption beneath it, not across it. |
| Gradient / `::before` backgrounds | PASS | 0 `needsManualCheck` on all 18 runs. |
| Image / content match | PASS | Four images, each beside copy about exactly that thing: members on the green under the club's own description of itself; the green and hedge as a band on the bowls page; the club's own park map beside the directions; the badge in header and footer. |
| Fabricated claims | PASS | Every claim traces to `BUILD_BRIEF.md`. **No email address or telephone number appears anywhere** — because the club publishes none, and none may be invented. Every call to action routes to the club's own enquiry form. |
| Mobile layout | PASS | 0 horizontal scroll and 0 text-overflow across 18 page×width combinations, including the long parking paragraphs at 320px. |
| Links and controls | PASS | 25/25: all internal links 200, all external links to the club's own pages and Google Maps well-formed, `#main` skip target present and first Tab reaches it, mobile nav opens/`aria-expanded`/Escape on all three pages, 0 console errors, 0 failed requests. |
| Structure / a11y | PASS | One `h1` per page, `lang="en-GB"`, 0 duplicate ids, 0 images without alt, 0 unnamed controls, a real meta description on each page. **0 tap targets under 24px.** Committee list is a real `<table>` with a `<thead>` and scoped headers. |
| Reveal | PASS | 16 / 10 / 8 elements desktop and mobile, 0 stranded; 0 hidden under reduced motion. |
| Heading rhythm | PASS | `.section-head h2` → lede gap 16px on every page at 390 and 1440. |

## Blocking Issues
One found and fixed.

| Issue | Evidence | Fix |
|---|---|---|
| Hero eyebrow failed contrast | `.hero` and `.page-head` are navy but are not `.section--navy`, so `.eyebrow` inherited the light-mode `--amber-ink` `#7A4E00` and measured **1.54:1** against the navy on every width. | Selector extended to `.section--navy .eyebrow, .hero .eyebrow, .page-head .eyebrow`. 0 violations after. |

## Advisory Issues
- **The club publishes no email address and no telephone number.** 0 `mailto:` links across
  the whole site, and the Contact page's "Club Secretary" field reads literally "n/a". This
  build therefore cannot offer a phone or email CTA and routes everything to the club's own
  form. It also means this lead **cannot be emailed** — AGENTS.md makes a findable email a
  hard requirement before investing time in a prospect.
- **Their "Become a member" page is published at the URL `/test-content/`.** That is the
  club's single most important conversion page.
- **The homepage meta description still contains the unreplaced token `{PageTitle}`** — the
  defect the lead register recorded, confirmed still live.
- **The site contradicts itself on the season**: the home page says "May to September", the
  membership page says "end of April to end of September". This build states no start month.
- The club's own promo banner ("Welcoming new members now!") has its message baked into the
  pixels — unselectable, invisible to a screen reader, and it would upscale badly. Set as
  real text here instead.

## Verdict
**PASS** — handing to review.

---

# Reviewer Pass — round 1, 2026-07-26

Independent verification. Builder artifacts treated as a map, not proof. All numbers below
re-measured, not copied from the builder's report.

## Score
**7.5 / 10 — PASS** (Professionalism 8, State/functionality 8, Aesthetics & imagery 7)

## Independently confirmed
| Builder claim | Reviewer method | Result |
|---|---|---|
| No email or phone published anywhere on the club's site | Crawled **98 pages** of the live site; regex for `mailto:`, `tel:`, `user@host`, and UK phone patterns over HTML **and** stripped visible text | **Confirmed. 0 / 0 / 0 / 0.** Contact page reads "Club Secretary — n/a" |
| No upscale violation at 1920 | 3 pages × 6 widths, `upscale-audit.js` | **Confirmed.** 0 violations, 0 broken, 0 unmeasured, 18/18 runs. Hero renders 1140×691 from 1200×727 = **0.95×** at both 1440 and 1920 |
| Contrast clean | `contrast-audit.js`, 18 runs, 48–79 elements | **Confirmed.** 0 violations, 0 `needsManualCheck` |
| Three testimonials verbatim | Diffed against `/test-content/` source text | **Confirmed verbatim,** all three, no embellishment |
| No season start month | `grep` for all twelve month names across HTML/CSS/JS | **Confirmed.** Only hits are the verb "may" in `visit.html:98,104` |
| Every factual claim traced | Checked against `/home/`, `/test-content/`, `/cttee--other-posts-2026/`, `/where-are-we/` | **All confirmed:** 1953, no joining fee, under £200, £50–£350, 3–4 coaching sessions, ages 9 to 90, 11am–dusk, 18 ends / first to 21, Drake 1588, all 13 committee names, both "Unfilled" posts, all four parking rules |
| Links, nav, keyboard | 9 unique hrefs, 3 external re-fetched live | 200 on all. `_blank`+`noopener` correct. Skip link first in tab order and visible on focus. Nav toggle `aria-expanded` correct, Escape closes and **returns focus to the toggle**, closed nav is `display:none` so not tabbable |
| No console errors | 18 page×width loads | 0 console errors, 0 failed requests |
| Mobile layout | 18 runs | 0 horizontal scroll, 0 text overflow, 0 tap targets < 24px |
| Reduced motion / no-JS | `reducedMotion:'reduce'`, `javaScriptEnabled:false` | 0 stranded elements in both |

The builder was right on every load-bearing claim it was challenged on.

## Reviewer-found defects (not in the builder report)

**Must fix before any deploy**

| Issue | Evidence | Fix |
|---|---|---|
| **"Menu" button label breaks mid-word to "MEN / U"** in the header at **320, 360, 375 and 390 px** — every common phone width. Brand title "Pinner Bowling Club" wraps to two lines at the same widths. Clean from 414 px up. | Measured `btnLines: 2`, `brandTitleLines: 2` at 320/360/375/390; `1`/`1` at 414+. `.nav-toggle` at `assets/css/site.css:115` has no `white-space: nowrap`. | Add `white-space: nowrap` to `.nav-toggle`; give `.brand-lockup span` a `nowrap` or drop the toggle to an icon-only control below 26rem. |
| **466 KB `logo.png` for a 52 px badge** — 64% of the home page's 727 KB, 80% of bowls/visit. | `assets/img/logo.png` 399×400, 466,204 bytes; rendered 52×52 (header) and 62×62 (footer) at every width. | Re-export at 128 px, or WebP. Expect ~5–10 KB, cutting home page weight by ~62%. |

**Advisory**

- **Mobile nav panel is invisible as a layer.** `.site-nav` (`site.css:127`) uses `background: var(--navy)` with `box-shadow: none`, and is `position:absolute` over a hero/page-head that is *the same* `rgb(18,62,99)`. Measured: panel covers the `h1` (`h1CoveredByNav: true`) on all three pages. Opening the menu reads as the page content changing, not as a panel opening.
- **`green-hedge.jpg` renders at 1.14× upscale** at 1440 and 1920 (1000px native → 1140px shell). Under the ~1.3× gate so not a violation, but it is the one image the build lets upscale, and the hero was deliberately held back from doing exactly this.
- **The committee table is trimmed but labelled "As published by the club"** (`bowls.html:131–157`). The club's page lists **16** rows across "Committee" and "Other Posts"; the build shows **13**, merged into one table, dropping Vets A, Vets B and Bidgood. Names shown are accurate — the framing overstates completeness.
- **`BUILD_BRIEF.md` is stale against what shipped.** Lines 98, 118–119 and 123 describe the hero as "full-bleed", "the one genuinely full-bleed photograph", rendering at "1440… 1.2×". The shipped hero is contained at 1140. The decision changed; the brief was not updated.

## Reviewer verdict
**PASS at 7.5.** No blocking gate is breached — 0 upscale violations, 0 contrast violations,
0 broken images, 0 fabricated facts, 0 mobile-layout violations. The two must-fix items above
are craft defects that should not ship, not gate failures. The score is held at the line by the
hero composition (see `PIPELINE_STATUS.md` for the ranked fix list).


---

# Reviewer round 1 — PASS at 7.5/10, plus builder cleanup

Sub-scores: professionalism 8, state 8, aesthetics & imagery 7. **No blocking defects.**

The reviewer independently confirmed the two claims that mattered most. On contact: it
crawled **98 pages** of the live site and searched raw HTML and stripped visible text for
`mailto:`, `tel:`, email patterns and UK phone patterns — **zero of all four**. The build's
statement that the club publishes neither is accurate. On upscale: hero ratios measured
0.236 / 0.294 / 0.589 / 0.785 / 0.950 / 0.950 across the six widths, no violation at 1920.
It also confirmed all three testimonials verbatim, every fact, and that no month name
appears anywhere in the build except the verb "may".

It raised two "must fix before deploy" items and five ranked improvements. All actioned:

| Item | Fix | Verified |
|---|---|---|
| "Menu" broke mid-word to "MEN / U" at 320/360/375/390 | `white-space: nowrap` on `.nav-toggle`; brand title size clamped | Text node returns **1 client rect at 320, 360, 375, 390, 414 and 768** |
| `logo.png` 466KB for a 52px badge, 64% of page weight | Re-exported 399×400 → 128×128 | **466,204 → 42,600 bytes**, an 89% reduction |
| Hero stacked, photo below the fold at y≈1055, 413px empty navy beside the h1 | Side by side above 64rem, stacked below | Image now at **y=166, width 544px (0.45×)**, above the fold at 1440 and 1920 |
| Open mobile nav identical navy to the hero behind it | `--navy-deep` plus a drop shadow | Visual |
| Committee table showed 13 of the club's 16 published rows | Vets A, Vets B and Bidgood restored | 16 rows |
| `green-hedge.jpg` allowed 1.14× in the 1140 shell | Band capped at its native 1000px | Upscale audit 0 violations |
| `BUILD_BRIEF.md` still described a full-bleed hero at 1.2× | Corrected to describe what actually shipped | — |

Re-verified after cleanup: upscale 0 violations / 0 broken and contrast 0 violations across
**3 pages × 6 widths (18 runs)**; functional 25/25; reveals 16/10/8 with 0 stranded.

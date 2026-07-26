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

# Multi-Page Rebuild — Design & Decisions

## Background

The existing site (built across several earlier sessions — see
`2026-07-23-terrys-bobcat-website-design.md` and
`2026-07-27-license-badge-and-phone-update-design.md`) was a single long homepage
with anchor-linked sections, plus `who-we-are.html` and three `methods/*.html`
sub-pages for the pool-removal methods.

A new, much more detailed project brief asked for a full multi-page site with
clean directory-based routes (`/services/pool-removal/`, `/gallery/`,
`/service-area/`, etc.), three new top-level service categories beyond pool
removal (grading & excavation, retaining walls, demolition & hauling), a real
contact form, and a dedicated gallery with lightbox. This document records how
that brief was reconciled against the site's existing, already-vetted content.

## Key decisions

**Service area cities.** The brief's example cities (San Jose, Los Gatos, Walnut
Creek) didn't match the existing, already-verified 10-city South Bay list carried
over from Terry's real previous site. Walnut Creek is in the East Bay — a
different region — so adding it without confirmation would have violated the
brief's own "don't fabricate service areas" rule. **Confirmed with the user:
kept the existing 10-city list** (San Jose, Cupertino, Campbell, Milpitas, Santa
Clara, Gilroy, Morgan Hill, Sunnyvale, Saratoga, Fremont).

**Header logo.** The brief named an exact file
(`Gemini_Generated_Image_e7e6d2e7e6d2e7e6.png`) as "the supplied watercolor
portrait" for the header. That file is actually a full composited logo lockup
with a baked-in wordmark reading "Terry's Bobcat / Services & Rentals" — wrong
subtitle, and duplicating the HTML-rendered business name next to it. Cropped
just the face out of that same file (excluding the text) and used that as
`images/logo-watercolor-portrait.jpg`, matching the brief's actual intent
(real HTML text for the name, styled per the brief's color spec; watercolor
image for the portrait only, not repeated elsewhere on the site).

**Contact form backend.** The brief requires a real submission flow (no fake
success states) but doesn't name a form provider. The project's own README
already recommends Netlify as the deploy target, so the form uses **Netlify
Forms** — a native HTML solution requiring no backend code or JavaScript for
submission itself, including file upload support for the optional project
photo. This only functions once deployed to Netlify; documented clearly in
the README as a pre-launch requirement, not something to silently assume works.

**Validation.** Uses native HTML5 constraint validation (`required`,
`type="email"`, etc.) rather than a custom JavaScript validator, per the brief's
"minimal JavaScript" performance requirement. A small progressive-enhancement
script (`js/main.js`) adds a red-border highlight on top of the browser's own
validation UI, listening for the `invalid` event (not `submit`, since the
`submit` event never fires when native validation blocks the form).

**URL architecture.** Switched every page to root-relative paths
(`/css/styles.css`, `/services/pool-removal/`, etc.) instead of the old site's
relative `../` paths, since the new directory depth varies per page
(`/services/pool-removal/` is two levels deep vs. one for `/gallery/`).
Consequence: the site can no longer be opened by double-clicking `index.html` —
local preview now requires `python3 -m http.server` (documented in the README).
This trade-off was chosen because it eliminates an entire class of relative-path
bugs across 11+ pages, at the cost of one documented workflow change.

**Pool removal page structure.** The brief groups "Partial or Cave-In
Demolition" as a single stage (not two separate pages, as the old site had) plus
"Complete Pool Removal" and a new "Backfill and Compaction" stage using
`terry-on-site.jpg`. Consolidated the three old `methods/*.html` pages'
content into three sections of one `/services/pool-removal/` page, preserving
their process detail rather than thinning it out.

**Reviews.** Kept the single existing real testimonial (originally sourced from
Terry's actual previous site, not fabricated) and added an honest "more reviews
coming soon" note rather than inventing additional ones. No review structured
data was added, consistent with the brief's requirement to wait until reviews
are genuine and policy-eligible.

**Images.** Processed nine new photos from `images/gallery/originals/` (EXIF-safe,
via a temporary Python venv with Pillow, since the system Python is externally
managed and had no Pillow installed) into descriptive filenames for the new
service pages, hero, and gallery transformations. Reused several already-processed
photos from earlier sessions (e.g. `debris-hauling.jpg`, `terry-on-site.jpg`)
where they already matched the brief's assigned content.

## Update — confirmed shortly after initial build

The user confirmed three items that were flagged as pending above:
business email (`Terrysbobcatservices@gmail.com`, added to every footer and the
homepage `LocalBusiness` JSON-LD), the domain (`terrysbobcatpoolremoval.com` —
already what every canonical/OG URL used as a placeholder, so no find-and-replace
was needed), and the deploy path (GitHub → Netlify's Git integration, not
drag-and-drop — this repo already has a GitHub remote). README updated accordingly.

## Update — photo audit and a real CSS bug

The user flagged that several photos looked "shrunk." Investigation (via direct
`getComputedStyle` measurement, not just visual inspection) found a genuine bug:
`.service-detail-band img` and `.why-photo img` set a CSS `width` without also
setting `height`, so the browser fell back to the raw HTML `height="1050"`
attribute as a literal pixel value instead of scaling proportionally — e.g. a
672px-wide column rendered its image at a stretched 672×1050 instead of
672×504. Fixed by adding `height: auto` (both rules) plus `aspect-ratio: 4/3`
and `object-fit: cover` on `.service-detail-band img` for a consistent crop
regardless of source photo dimensions. Confirmed via computed-style
measurement before/after, then visually confirmed once a stale browser cache
(unrelated to the code) was bypassed.

Also per the user's request: swapped the homepage hero from `_MG_0481.jpeg` to
`terryhillside.jpeg` (more dramatic hillside shot), and the About page portrait
from the old `logo-terry-portrait.jpg` to a new portrait crop of `_MG_0176.jpeg`
(`images/gallery/about-portrait.jpg`).

Did a full pass on every photo used sitewide against its actual visual content:
- `bobcat-on-site.jpg` and `compaction-grading.jpg` were mislabeled as generic
  "trench" shots; closer inspection showed they're the same property (and
  likely the same job) as `excavating-before.jpg`, a confirmed pool excavation —
  recaptioned as pool-cavity excavation and moved into the "Pool removal, in
  progress" gallery group instead of "Heavy earthwork."
- `equipment-spotlight.jpg`'s caption ("staged equipment") didn't match what's
  shown (an excavator mid-dig at the edge of a pool cavity) — corrected.
- `backfill-after.jpg`'s caption overstated completion ("ready for
  landscaping") when the photo still shows a skid steer actively grading muddy
  ground — softened to "being graded and leveled."
- `pool-removal-service.jpg`'s caption said "cleared and ready for backfill"
  when the photo actually shows loose backfill dirt already in place with tire
  tracks — corrected to describe backfilling in progress.
- Everything else checked (cave-in-coping, complete-demolition, pool-demo-start,
  rubble-pile, terry-on-site, terry-with-bobcat, excavating-the-hole,
  excavating-before, and all four service-page hero photos) matched their
  existing captions and needed no changes.

## Out of scope / unchanged

- Business street address, social accounts — still pending, flagged in the
  README rather than invented.
- The CSLB license-name mismatch (license #618640 registered to "A-1 Hauling," not
  "Terry's Bobcat") — already resolved in the prior license-badge session by
  showing the license number alone; not revisited here.

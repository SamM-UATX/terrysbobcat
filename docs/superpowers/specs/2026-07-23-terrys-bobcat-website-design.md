# Terry's Bobcat Swimming Pool Removal — Website Design

## Background

Terry has run a pool removal / excavation business in the South Bay for 35 years, previously operating as "A1 Pool Removal" (a1poolremoval.com). Terry reports that a former trainee, who now runs a competing business ("Richie Bobcat Pool Removal Service"), used A1's branding in a way that caused Google to effectively bury A1's own site in search results for roughly two years, cutting off Terry's lead flow. This is Terry's account of events and has not been independently verified; it is background motivation, not something this project investigates or acts on directly. Reclaiming any hijacked Google Business Profile listing is a separate matter (Google support / possibly legal) outside the scope of this design.

The plan is a clean rebrand under a new name, paired with a new website and local-SEO-conscious content, so the business can rank on its own merits going forward.

## Brand identity

- **Full name:** Terry's Bobcat Swimming Pool Removal (used in page titles, legal/formal contexts, footer)
- **Short name:** Terry's Bobcat (nav logo, social handles, casual references)
- **Positioning:** a known, individually-reputable local operator (35 years, real name, real reputation) rather than a faceless contractor — a differentiator competitors can't easily copy.
- **Naming rationale:** Competitor research turned up two other "[Name] Bobcat [...] Pool Removal" businesses in the same market (Richie Bobcat Pool Removal Service, Four Seasons Bobcat & Pool Removal), so "Bobcat" alone in a name is not unique in this niche. Keeping the personal name distinct (Terry, not Richie) plus folding "Swimming Pool Removal" back into the full name preserves keyword relevance for search while avoiding brand confusion.

## Visual style

- **Direction:** "Modern and clean" — navy primary (`#0f2a44`), bright blue accent/CTA (`#1a7fd4`), white/light-gray surfaces.
- **Typography:** Plus Jakarta Sans (headings), Work Sans (body) — both Google Fonts. Chosen to avoid the generic/AI-template feel of overused pairings like Inter/Poppins-everywhere, while staying in the same "clean modern" register as the reference site the user liked (blog.royalswimmingpools.com/pool-demolition-and-removal, which uses Poppins/Muli).
- **Tone:** professional, trustworthy, fast-loading, mobile-first — built for a homeowner comparing several quotes on their phone.

## Sitemap & content

Single site (can be one long page or lightly sectioned with anchor nav — implementation plan will decide based on content volume), reusing the old site's proven content structure and copy where it was already solid:

1. **Hero** — headline, phone number, "free quote" CTA above the fold
2. **Services** — Cave-in / Partial / Complete removal methods (reuse existing copy, it's accurate and clear)
3. **Why remove your pool** — reuse existing bullet list (cost savings, property tax, liability, etc.)
4. **Before/after gallery** — placeholder-sized slots initially; real job photos (including the bobcat-in-pool-demo shot already provided) to be dropped in once the user sends the full set
5. **Testimonials** — existing review ("David, San Jose") plus room to add more
6. **FAQ** — reuse existing questions
7. **Service area** — same 10 cities as the old site: San Jose, Cupertino, Campbell, Milpitas, Santa Clara, Gilroy, Morgan Hill, Sunnyvale, Saratoga, Fremont (each city name present in text matters for local SEO)
8. **Contact/footer** — phone (408) 605-4224; email/contact form pending Terry's new email address (placeholder for now)

## Technical approach

- Plain HTML/CSS/vanilla JS — no framework needed for a brochure site this size; keeps it fast, cheap, and easy to host anywhere.
- Schema.org `LocalBusiness` structured data embedded in the page (name, service area, phone, reviews) to support local search.
- Local git repo for version history. No GitHub account required to launch. Recommended deploy path once the domain is purchased: a free static host (e.g. Netlify) with DNS pointed at it. GitHub integration is an optional later add-on for auto-deploy, not a dependency.
- Mobile-first responsive layout; fast page load (no heavy JS frameworks, optimized images once real photos are supplied).

## SEO & local-search strategy (recommendations — require Terry's own accounts/logins)

Out of scope for this repo's code, but necessary for the "rank for pool removal Bay Area" goal and tracked here so nothing gets lost:

- Claim/create a Google Business Profile under the new name once the new email exists — the single biggest lever for local map-pack rankings.
- Keep name/address/phone (NAP) consistent across the site, GBP, and directory listings (Yelp, Angi, BBB, Nextdoor).
- Real, photo-heavy content over stock photos (Google favors this for local service businesses).
- Steady flow of real Google reviews — a short "text this link after the job" review-request message will be drafted separately.

## Social media (recommendations — accounts created by Terry)

Priority order: Google Business Profile first, then Instagram + Facebook (before/after photos perform well for this trade), then Nextdoor (strong hyper-local trust signal). Bio and first-post copy to be drafted once the new email/handles are confirmed.

## Open items / not yet available

- Domain name (Terry is purchasing one matching "Terry's Bobcat Swimming Pool Removal")
- New business email address (pending — contact form/footer will use a placeholder until then)
- Full set of real job photos (a few provided already; more coming within a day or so)
- Social/GBP account handles (pending new email)

## Explicitly out of scope for this design

- Investigating or disputing the alleged Google/competitor search manipulation
- Creating social media, GBP, or domain accounts directly (credential/payment actions the user must perform)
- Any framework/build-tooling beyond plain HTML/CSS/JS

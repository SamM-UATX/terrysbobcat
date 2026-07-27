# License Badge & Phone Number Update — Design

## Background

Terry sent over a CSLB personnel-license lookup for "ARRIGHI, TERRY RAY" showing
license #618640, and a corrected phone number. Independently confirmed via CSLB's
public license lookup (cslb.ca.gov/618640): license #618640 is classification
**C12 – Earthwork and Paving**, status current/active, issued 04/29/1991 — which
lines up exactly with the "35 years" / "since 1991" claims already on the site.

The license is registered to the business name **A-1 HAULING**, with no DBA on file
for "Terry's Bobcat" or "A1 Pool Removal." Flagged this mismatch to the user; decided
to display the license number alone, without pairing it to either business name, to
sidestep the naming question rather than assert a name/license relationship that
isn't confirmed on the public record.

## Changes

1. **Phone number** — site-wide replacement of `(408) 605-4224` with `(408) 459-2682`
   (display text, `tel:` links, and the JSON-LD `telephone` field) across every page:
   `index.html`, `who-we-are.html`, `methods/cave-in-removal.html`,
   `methods/partial-removal.html`, `methods/complete-removal.html`. README's
   "Updating contact info" section updated to match.

2. **License badge** — "CA C-12 License #618640," shown in two places using existing
   patterns (no new components):
   - Footer fine print, appended to the copyright line, on every page.
   - `who-we-are.html`'s stats list, as a 4th item alongside years-in-business,
     owner-operator, and cities-served.

## Out of scope

- Resolving the A-1 Hauling / Terry's Bobcat business-name relationship (DBA
  registration, etc.) — that's Terry's call to make with CSLB, not a website change.
- Any other content from the original project brief already implemented in prior
  commits (see `docs/superpowers/specs/2026-07-23-terrys-bobcat-website-design.md`).

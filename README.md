# Terry's Bobcat Swimming Pool Removal — website

Plain HTML/CSS/JS site. No build step, no dependencies to install — open `index.html`
in a browser and it works.

## Files

- `index.html` — all page content
- `css/styles.css` — all styling (colors, fonts, layout)
- `js/main.js` — mobile menu, FAQ accordion, scroll animations
- `favicon.svg` — browser tab icon
- `images/gallery/` — drop real job photos here (see below)

## Adding real photos

1. Put image files in `images/gallery/` (e.g. `before-1.jpg`, `bobcat-pool.jpg`).
2. In `index.html`, find the `gallery-grid` section (search for `gallery-slot`).
3. Replace a placeholder line like:
   ```html
   <div class="gallery-slot reveal" data-label="Before — full pool"></div>
   ```
   with:
   ```html
   <div class="gallery-slot reveal" style="background-image:url('images/gallery/before-1.jpg')"></div>
   ```
4. Repeat for each photo. The layout automatically crops/fits any photo size.

The hero section can also take a real photo later — ask if you want that wired in
once you've picked a favorite.

## Updating contact info

- Phone number appears in several places — search `index.html` for `4086054224` and
  `(408) 605-4224` and replace both the digits-only version (in `tel:` links and the
  JSON-LD schema) and the display version.
- Once the new business email exists, uncomment the email lines in the footer and
  add it wherever noted in the HTML comments.
- Once social accounts exist, uncomment the `footer-social` block in the footer and
  add the real links.

## SEO basics already in place

- Page title, meta description, and Open Graph tags in `<head>`
- `LocalBusiness` structured data (JSON-LD) with service area and phone — update the
  `url` and `address` fields once the domain and any shop address are finalized
- Semantic headings and city names in real text (not just images) for local search

## Deploying (once you have a domain)

Easiest path, no GitHub required:

1. Create a free account at [netlify.com](https://netlify.com).
2. Drag the whole project folder onto the Netlify dashboard ("Deploys" tab has a
   drop zone). It publishes instantly with a temporary netlify.app URL.
3. In Netlify, go to **Domain settings → Add a domain**, enter the domain you bought,
   and follow the DNS instructions it gives you (you'll add a couple of records at
   wherever you bought the domain, e.g. GoDaddy/Namecheap/Google Domains).
4. Netlify handles HTTPS automatically once DNS points to it.

If you'd rather connect this to GitHub for automatic redeploys whenever the code
changes, that's an optional later step — not required to launch.

## Local preview

Just open `index.html` directly in a browser, or run a tiny local server from this
folder if you want it to behave exactly like a real deploy:

```
python3 -m http.server 8000
```

then visit `http://localhost:8000`.

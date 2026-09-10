# Growalix — Digital Agency Website

A fast, static, multi-page agency website (17 pages) styled after the *Trixel* AI-startup / digital-agency template, rebranded with the Growalix logo palette (navy `#0B1A45`, blue `#2454FF`, cyan `#25C6F5`). Light + dark mode, fully responsive, no frameworks and no runtime dependencies.

## Quick start

```bash
npm run build   # generates the site into ./dist
npm run dev     # build + preview at http://localhost:3000
```

You can also just double-click `dist/index.html` to open it locally.

Requires Node.js 18+. There is nothing to `npm install`.

## Pages

| Page | File |
| --- | --- |
| Home | `dist/index.html` |
| Services overview | `dist/services.html` |
| 10 service pages | `dist/services/<slug>.html` — email-marketing, linkedin-marketing, data-extraction, lead-generation, seo-aeo-geo, paid-media, web-development, app-development, content-creation, youtube-automation |
| About, Work, Pricing, Contact, 404 | `dist/*.html` |
| SEO | `dist/sitemap.xml`, `dist/robots.txt` |

## Where to edit

| What | File |
| --- | --- |
| Brand name, email, phone, WhatsApp, socials, domain, form backend | `src/data/site.mjs` → `brand` |
| Stats, testimonials, pricing, FAQs, case studies, process | `src/data/site.mjs` |
| The 10 services (copy, deliverables, tools, stats) | `src/data/services.mjs` |
| Colours, fonts, spacing, components | `assets/css/style.css` (tokens at the top) |
| Interactions (theme toggle, slider, filters, form) | `assets/js/main.js` |
| Page layouts / sections | `src/pages/*.mjs`, `src/sections.mjs`, `src/layout.mjs` |
| Logo | `assets/logo.svg`, `assets/favicon.svg` (also inlined in `src/layout.mjs`) |

After editing anything in `src/` or `assets/`, run `npm run build` again.

## Before going live — replace placeholders

Everything marked `PLACEHOLDER` in `src/data/site.mjs` is sample content:

- **Contact details** — email, phone, WhatsApp link, social profile URLs, production domain (`brand.url`).
- **Numbers** — hero stats, service stats, score bars.
- **Testimonials** — currently "Client Name / COMPANY". Use real, attributable quotes only.
- **Case studies** (`work`) — illustrative results; swap in real projects.
- **Pricing** — sample monthly plans.

## Contact form

By default the form opens the visitor's email app with the enquiry pre-filled (works with zero backend). To receive submissions directly, create a free form endpoint (Formspree, Getform, Basin…) and set `brand.formEndpoint` in `src/data/site.mjs`, then rebuild.

## Deploy

### Cloudflare Pages (recommended)

1. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git** → pick this repository.
2. Build settings:
   - **Framework preset:** None
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
3. **Save and Deploy.** Every push to `main` redeploys automatically.

Then add your custom domain under the project's **Custom domains** tab and update `brand.url` in `src/data/site.mjs` so the sitemap and canonical links use it.

### Other hosts

Upload the contents of `dist/` to any static host — Netlify (drag & drop), Vercel, Cloudflare Pages, GitHub Pages or regular cPanel hosting. Configure the host to serve `404.html` for missing pages.

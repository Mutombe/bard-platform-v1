# Bard Santner — bardsantnerbank.com

The institutional website for Bard Santner Markets Inc and the forthcoming
Bard Santner Microfinance Bank (BSMFB). Built to the design philosophy of
Lloyds, AfrAsia Bank and Investec — clean spaces, raw clarity, quiet
confidence, editorial pacing.

## Stack

- React 19 + Vite 8
- Tailwind v4 (CSS-first `@theme` tokens)
- React Router v6
- React Helmet Async (per-route SEO)
- Framer Motion (page transitions, scroll reveals)
- Phosphor Icons
- Self-hosted typography (Fraunces display, Inter body, Cormorant Garamond, JetBrains Mono micro) — DSGVO clean
- Puppeteer postbuild prerender (every route → static HTML)

## Architecture

```
src/
  components/        # Nav, Footer, PageHero, AudienceTiles, ProductGrid,
                     # GroupRibbon, InsightsRail, AdvisoryBand, TrustRibbon,
                     # PolicyPage, SEO, Monogram, PageTransition, ScrollToTop
  data/
    audiences.js     # The 5 audience contexts
    products.js      # 13 financial products
    insights.js      # 8 editorial pieces
    group.js         # The 5 Group entities (BSMFB, Markets, Loans, Golf, Journal)
    leadership.js    # 3 named leaders
    quickActions.js  # Audience-aware quick-action strips
  pages/
    Home.jsx
    audiences/       # Personal, Business, PrivateBanking, International, Institutional
    Banking, Wealth, Markets  # Service hubs
    ProductDetail.jsx
    About, Group, GroupEntity, Leadership
    Insights, InsightDetail
    Contact, Locations
    Security, Legal, Privacy, Cookies, Terms, Regulatory, Accessibility, Complaints
    NotFound
scripts/
  generate-sitemap.mjs    # postbuild sitemap.xml + robots.txt
  prerender.mjs           # postbuild Puppeteer crawl → per-route static HTML
public/
  logo.svg, monogram-pattern.svg, _redirects
```

## Run

```bash
npm install
npm run dev               # Vite dev server on :5180
npm run build:fast        # Vite build + sitemap (no prerender — for dev iteration)
npm run build             # Vite build + sitemap + prerender (production)
npm run preview           # Serve dist/ on :4173
```

## Sequence on the home page

Pulled directly from the inspection of Lloyds + AfrAsia + Investec:

1. **Hero** — full-bleed editorial photo + one CTA
2. **Quick actions** — 4 pills in a navy strip
3. **Audience tiles** — 5 editorial portrait cards
4. **Featured products** — 4 editorial cards
5. **Group ribbon** — 5 sub-brand cards on a deep navy ground
6. **Insights** — 3 article cards
7. **Advisory band** — speak to a banker
8. **Trust ribbon** — 4 pillars (regulated, deposits, security, AML)

## Voice

Quiet, institutional. Parallel structure in segmentation. Italic-accented tails on headlines. "Eligibility criteria apply" inline below CTAs. Named leadership. No em-dashes. No AI hedges. No exclamation marks.

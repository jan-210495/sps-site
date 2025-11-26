# SPS Site Review & Suggestions

## Ratings
- Overall experience: 7/10
- Visual design: 8/10
- Color palette: 8/10 — Burgundy/gold pair reads on-brand and consistent across pages; ensure gold text on light backgrounds meets contrast (aim for WCAG AA) or darken slightly.

## Design & Color Notes
- Strong brand carry-through: navbar gradient, buttons, dividers, and icon strokes reuse the primary palette, keeping the experience cohesive.
- Typography feels balanced for Arabic/English; keep RTL defaults and tighten line-height for long Arabic paragraphs if they feel airy.
- Check contrast on muted-gold text over light surfaces and on hover states; if needed, deepen the gold or add subtle shadows for legibility.

## High-Impact Improvements
1) SEO/share: Add `meta name="description"` and Open Graph/Twitter tags per page so search/snippets look intentional; include canonical URLs.  
2) Contact credibility: Replace placeholder address/email/phone on `contact.html`, and align with footer/contact snippets site-wide.  
3) Forms that deliver: Wire Join and Contact to a real handler (email relay, server endpoint, or form service). Add basic spam controls (honeypot + timestamp) and inline error messages.  
4) Fix dead links: Point Login/social to real URLs or hide them until live. Avoid `href="#"`.  
5) Performance: Compress/resize hero and gallery images; add `loading="lazy"` to non-hero images; consider preloading the logo and hero font.  
6) Resilience: Self-host Google Fonts and Bootstrap (you already self-host another font) to avoid CDN failures; keep cache-busting query strings updated.  
7) Accessibility/i18n: Ensure active states have good focus outlines; set `aria-pressed` on language toggles; make sure every visible string and placeholder has Arabic/English variants; keep `aria-current` on nav items.  
8) Ops: Add 404 page, `robots.txt`, and `sitemap.xml`. Keep `README` updated with deploy steps and cache-busting version. Optionally add privacy-respecting analytics to spot broken pages.

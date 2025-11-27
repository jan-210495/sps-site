## Planned Improvements and Tasks

- **SEO & sharing** *(implemented)*
  - Add `meta description`, Open Graph, Twitter cards, and canonical URLs per page.

- **Contact & links** *(implemented)*
  - Replace placeholder address/email/phone site-wide.
  - Remove or hide dead links (Login, social) until real URLs exist.

- **Performance** *(implemented)*
  - Compress/resize hero and gallery images.
  - Add `loading="lazy"` to all non-hero images.
  - Consider preloading logo and primary fonts.

- **Resilience** *(implemented)*
  - Self-host Google Fonts and Bootstrap to avoid CDN reliance.
  - Keep cache-busting/versioning updated.

- **Accessibility & i18n** *(implemented)*
  - Verify gold contrast on light backgrounds/hover states.
  - Ensure focus outlines and `aria-pressed` states on toggles/buttons; keep `aria-current` on nav.
  - Confirm all visible strings have AR/EN variants.

- **Operations** *(implemented)*
  - Add 404 page, `robots.txt`, and `sitemap.xml`.
  - Update README with deploy steps and cache-busting notes.

- **Forms**
  - Wire Join and Contact to a real backend handler or form service.
  - Add basic spam controls (honeypot + timestamp) and inline errors.

- **Auth & roles**
  - Implement login backed by a DB (MySQL or similar) with roles: admin, leaders, media-admin.
  - Persist users/permissions securely; plan session handling.

- **Media/admin UX**
  - Add authenticated UI for admin and media-admin to edit news cards and featured images inline (e.g., edit icons).
  - Support choosing/uploading images from gallery; enforce permissions.
  - Keep the experience friendly and page-contextual.

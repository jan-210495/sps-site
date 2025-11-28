# Backend Implementation Plan

This document outlines the high-level roadmap for standing up the API and data services that the static site expects (forms, news, admin tools, media uploads).

## 1. Environment & Deployment Envelope
- Containerize the Express app that lives under `server/src`, bake in the environment variables from `.env.example`, and decide whether it runs behind nginx on the same origin (preferred so `/api/*` calls work without extra CORS).
- Add middleware for logging, compression, and trust-proxy handling so JWT cookies/headers survive Cloudflare → nginx → Express.
- Define how the container is built and restarted alongside the existing rsync flow documented in `AGENTS.md`.

## 2. Database Schema & Migration Strategy
- Translate the implicit needs into tables: `users` (for `/api/auth/login`), `news`, `featured_media`, `contact_messages`, `join_applications`, and `media_assets`.
- Each content table should have bilingual columns (`title_ar`, `title_en`, etc.) so both locale versions of the site can pull from one record set.
- Capture migration steps (SQL files or a lightweight tool) so schema changes can be replayed and reviewed.

## 3. Authentication & Authorization Flow
- Complete `/api/auth/login` with password hashing, lockout/rate limiting, and refreshable JWTs (short-lived access token, optional refresh cookie).
- Expose supporting endpoints such as `/api/auth/profile` and `/api/auth/logout` so the front-end helpers in `assets/js/auth.js` can verify state after reloads.
- Respect the role model assumed by the UI (`admin`, `media-admin`, `leaders`) and enforce it server-side via the middleware in `server/src/middleware/auth.js`.

## 4. News & Featured Content APIs
- Replace the hard-coded cards on `news.html` with API-driven data: create public endpoints like `GET /api/news?lang=ar` and `GET /api/news/:id`.
- Extend `/api/media/news` so admins can list/create/update/delete news entries with localized titles, summaries, and optional hero images.
- Implement CRUD for featured slots (hero, gallery) so the dashboard section in `admin.html` can read/write the same records.

## 5. Form Submission Services
- Introduce `/api/forms/contact` and `/api/forms/join` controllers; update `contact.html` and `join.html` to point their `data-endpoint` attributes at these routes.
- Validate payloads (honeypot + timestamp + server-side checks), persist them to `contact_messages`/`join_applications`, and trigger downstream notifications (email relay, WhatsApp, etc.).
- Provide a simple admin listing endpoint for authorized roles to review submissions.

## 6. Media & Gallery Management
- Expand the upload endpoint in `server/src/routes/media.js` so uploaded files are validated, resized (e.g., with `sharp`), stored under versioned paths, and recorded in the `media_assets` table.
- Expose `GET /api/media/gallery` so the gallery filters on the public site can consume curated metadata rather than scanning `assets/images` at runtime.
- Consider a background job or admin view for deleting/archiving media to keep storage under control.

## 7. Internationalization & Content Serving
- For every textual entity (news, featured captions, form responses), store both Arabic and English fields; APIs should pick the correct language based on a `lang` query parameter that mirrors the logic in `assets/js/main.js`.
- Future-proof static pages by defining structured blocks (e.g., mission bullets, leadership bios) that can eventually be served from the same backend.

## 8. Security, Observability, and Ops
- Add rate limiting, structured error responses, centralized logging, and `/api/health`/`/api/metrics` probes so ops can monitor the service.
- Ensure uploads are authenticated, JWT secrets are rotated, and HTTPS termination + CORS headers match the Cloudflare/nginx setup.

## 9. Cutover & Continuous Delivery
- Update cache-busted asset references once the front-end points to the new API endpoints; keep a feature flag to fall back to Formspree until the new forms are validated.
- Document the deploy procedure for both the static site (rsync + nginx reload) and the API container (build/push/restart).
- Plan staged rollout: enable form endpoints first, then news/featured APIs, and finally flip the admin dashboard to live data after validation.

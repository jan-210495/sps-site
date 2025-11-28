# Backend Implementation Plan

This roadmap folds in the current constraints (static site hosted via GitHub Pages/Cloudflare, MySQL artifacts stored inside the repo) and the future goal of a leaders’ webapp that supports ~400 authenticated members with unit-level filters, attendance, schedules, and HR oversight.

## 1. Hosting & Deployment Envelope
- Keep the public site on GitHub Pages (served at `sps.abboud.cloud` via Cloudflare) and avoid server-side rendering there; the static assets stay under version control.
- Define a sibling deployment artifact (Docker image or container bundle) that runs the Express API separately on the homeserver or another runtime; Pages alone cannot host Node/MySQL so the container must live elsewhere even though its source/Dockerfiles reside in this repo.
- Check in a `docker-compose.yml` (or similar) that provisions both the API container and a MySQL service seeded from SQL dumps kept in `server/db/seed/*.sql`; this satisfies the “database present in GitHub” requirement because schema/data definitions live here even if the running instance spins up from them during deploys.
- Harden the Express bootstrap: enable logging, compression, rate limiting, and trust-proxy settings so it works when proxied through Cloudflare/nginx.

## 2. Data Architecture & Extensibility
- Define the baseline tables now (`users`, `roles`, `news`, `featured_media`, `contact_messages`, `join_applications`, `media_assets`) plus the scaffolding for the upcoming leaders’ platform: `units`, `unit_members`, `members`, `attendance_records`, `meetings`, `missions`, `achievements`, `schedules`, `hr_notes`.
- Every content-heavy table should support bilingual fields (`title_ar`/`title_en`, `summary_ar`/`summary_en`, etc.) so the same record powers both locales.
- Store schema migrations and seed data in the repo; add scripts that rebuild the MySQL container locally/from CI so contributors can reproduce the data model without external DB hosting.

## 3. Authentication, Authorization, and Accounts
- Expand the auth module to manage ~400 users: hashed passwords, optional MFA later, refresh tokens, and password-reset workflows.
- Model granular roles: `admin`, `media-admin`, `leaders`, `unit-leader`, `hr`, and potentially `member` for self-service dashboards. Enforce them via middleware (`server/src/middleware/auth.js`) and surface them in the UI (e.g., badge in `admin.html`).
- Provide CRUD endpoints for managing member accounts, unit assignments, and permissions so future leaders’ features can be configured in-app.

## 4. Public-Facing APIs & Form Services
- Replace Formspree by building `/api/forms/contact` and `/api/forms/join`; update the HTML to point at these routes once the endpoints exist. Persist submissions, run spam checks (honeypot + timestamp + server-side throttling), and notify leaders via email/webhook.
- Expose read-only endpoints for news, featured imagery, gallery metadata, and (eventually) public unit schedules. Pages like `news.html` can fetch data client-side until a more advanced CMS layer is needed.

## 5. Leader Webapp Roadmap
- Plan a progressive enhancement strategy: start with an authenticated dashboard embedded in `admin.html`, then branch into dedicated views for unit leaders, HR, and members.
- Core features to design for now (even if data is placeholder): member directory filtered by unit, attendance capture per meeting, schedule builder per unit, mission tracking, achievements log, and HR reports covering attendance across the troop.
- Keep the API contracts flexible—e.g., allow filtering by `unit_id`, date ranges, or `member_id`—so future modules (carnival attendance, mission approvals, etc.) can plug in without schema rewrites.

## 6. Media & Asset Management
- Enhance `/api/media` so uploads are validated, optionally resized (via `sharp`), and recorded in `media_assets` with ownership metadata; include endpoints for listing/deleting assets.
- Publish a `GET /api/media/gallery` endpoint that returns curated items grouped by category, feeding the gallery filter UI instead of scanning the filesystem.
- Version uploaded files or store them under `/uploads/<version>` so cache-busting remains consistent with the static site.

## 7. Internationalization & Content Serving
- Ensure every textual API supports a `lang` parameter and falls back gracefully, matching the front-end toggles in `assets/js/main.js`.
- When designing leader-facing modules, plan for bilingual labels/notes so HR reports can flip between Arabic and English without data duplication.

## 8. Security, Observability, and Compliance
- Implement rate limiting, audit logging, structured error responses, and `/api/health` & `/api/metrics` endpoints so the service can be monitored.
- Lock down file uploads, rotate JWT secrets, and document backup/restore procedures for the MySQL dumps committed to the repo.
- Because the future system will store personal data, plan for access logs and permission reviews, even if policy details arrive later.

## 9. Cutover, CI/CD, and Future Growth
- Use GitHub Actions (or another CI runner) to lint/test the server code, build container images, and publish updated SQL dumps whenever migrations change.
- Document how the homeserver (or another runtime) pulls the repo, rebuilds the Docker stack (API + MySQL), and proxies `/api/*` behind Cloudflare so the static Pages site can call it securely.
- Stage the rollout: (1) implement local form endpoints, (2) back news/featured areas with real APIs, (3) light up the media admin workflow, (4) start seeding member/unit data, and finally (5) build the leader dashboards once schema + roles are stable. Leave deliberate room for new HR requirements (missions, carnival tracking, etc.) by keeping APIs versioned and modular.

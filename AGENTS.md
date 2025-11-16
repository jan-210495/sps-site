# Repository Guidelines

## Project Structure & Module Organization
- Root pages: `index.html`, `about.html`, `units.html`, `band.html`, `events.html`, `gallery.html`, `news.html`, `join.html`, `contact.html`.
- Assets: `assets/css/style.css`, `assets/js/main.js`, images in `assets/images/`.
- i18n: Elements use `data-i18n` (text) and `data-i18n-attr` (attributes). Strings live in `assets/js/main.js` under `i18n.en` and `i18n.ar`. Each page sets `body[data-page]` and titles are mapped in `titles`.

## Build, Test, and Development Commands
- Serve locally (recommended): `python -m http.server 8000` then open `http://localhost:8000`.
- Quick preview: open `index.html` directly in a browser.
- No build step; the site is pure HTML/CSS/JS using Bootstrap via CDN.

## Coding Style & Naming Conventions
- HTML: semantic, 2‑space indentation. Keep shared navbar/footer consistent across all pages. Place new copy inside elements with `data-i18n` keys.
- CSS: extend `assets/css/style.css`. Reuse palette variables (`--color-burgundy`, `--color-gold`, etc.). Prefer Bootstrap utilities; add minimal custom classes.
- JS: vanilla only. Extend the i18n dictionary and `titles` map in `assets/js/main.js`. Avoid adding heavy dependencies.
- Files/paths: lowercase, kebab‑case (e.g., `assets/images/event-hero.jpg`).

## Testing Guidelines
- No unit tests; perform manual QA:
  - Check responsive layout at mobile (≤375px), tablet (~768px), desktop (≥1200px).
  - Verify EN/AR toggle: text swaps, `dir` changes, and selection persists via `localStorage`.
  - Confirm nav “active” state, gallery filters, and Join form validation (phone OR email required) work.

## Commit & Pull Request Guidelines
- Use Conventional Commits where possible: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `chore:`.
- PRs should include:
  - Clear description and linked issue (if any).
  - Screenshots or short clips for UI changes (EN and AR, mobile and desktop).
  - Notes on i18n keys added/changed and any new pages (`data-page` + `titles` update).

## Security & Configuration Tips
- This site has no backend; do not add secrets or trackers. Keep external resources minimal (Bootstrap/Google Fonts only). Compress images and set meaningful `alt` text. Keep forms client‑side unless a reviewed backend is introduced.

## Agent-Specific Instructions
- When adding a page: copy navbar/footer with language toggle, set `body[data-page]`, add `titles[...]`, and wire all text with `data-i18n`. Update every page if navbar/footer structure changes.

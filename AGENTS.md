# Repository Guidelines

## Project Structure & Assets
- Static site lives here; HTML pages are in the repo root (e.g., `index.html`, `about.html`, `units.html`).
- Shared assets: `assets/css/style.css`, `assets/js/main.js`, images under `assets/images/`, fonts under `assets/fonts/`.
- Deployment target on the homeserver: `~/www/sps/` served by the `sps_site` nginx container behind Cloudflare (`sps.abboud.cloud`).

## Build, Deploy, and Local Preview
- No build step; plain HTML/CSS/JS. Preview locally from the repo root: `python3 -m http.server 8000` then browse `http://localhost:8000`.
- Sync to the homeserver (from this machine):  
  `sshpass -p '0000' rsync -av --delete --exclude '.git' -e "ssh -o StrictHostKeyChecking=accept-new" /mnt/c/Users/janoo/projects/sps.com/ abboudfam@10.70.171.21:~/www/sps/`
- Restart the site container after sync:  
  `sshpass -p '0000' ssh abboudfam@10.70.171.21 "echo '0000' | sudo -S docker restart sps_site"`
- Cache busting: append a version to CSS/JS in HTML (e.g., `style.css?v=20251117c`, `main.js?v=20251117c`) whenever asset content changes to avoid stale Cloudflare/browser caches.

## Coding Style & Naming
- HTML: semantic tags where possible; indent 2 spaces; keep language attributes and meta viewport intact.
- CSS: prefer classes over IDs; keep theme variables in `style.css`; follow existing naming (e.g., `.navbar`, `.hero`, `.section-divider`).
- JS: plain ES modules in `assets/js/main.js`; use const/let, arrow functions, and existing patterns for i18n, nav, and theme toggles.
- Filenames: lowercase with hyphens for images/assets (`scouts-marching-good-friday.jpg`).

## Testing & Checks
- No automated tests; validate by manual browser check and `curl -I` for key endpoints:
  - `curl -I http://127.0.0.1:8080` (on server) or `curl -I https://sps.abboud.cloud` (via tunnel) should return `200 OK`.
  - Spot-check cache-busted asset headers and ensure expected `ETag`/`Last-Modified` update after deploy.

## Commit & PR Guidelines
- Commits: present-tense, concise summaries (e.g., “Add gallery hero images”, “Tweak navbar spacing”). Group related asset+HTML changes together.
- PRs (if used): include a brief description of user-facing changes, note any new assets, and mention cache-busting token updates. Add screenshots for visual changes when possible.

## Agent Notes
- Avoid removing cache-busting query strings when editing HTML; bump the version instead.
- Keep rsync exclusions minimal; `.git` is excluded by default—do not exclude `assets/images/` or other content folders.

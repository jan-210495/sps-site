# SPS Design Refresh Plan

> **Process reminder:** Make a dedicated git commit after every meaningful change to keep the history clean.

## 1. Moodboard & Visual Direction — **DONE**
- Gathered references from scout.org plus recent humanitarian/nonprofit scout campaigns.
- Defined an updated palette (deep plum, warm neutrals, vivid accents) and typography pairings for EN/AR families.
- Collected photography + texture cues (fabric grain, diagonal accents, badges) to inform hero/section backgrounds.

## 2. Design System Foundations — **DONE**
- Expanded tokens in the split CSS partials for color scales, spacing, typography, elevations, component states, and gradients.
- Introduced utility classes for angles, overlays, texture layers, RTL spacing, reveal animations, and count-up helpers.
- Split the monolithic stylesheet into `foundations.css`, `components.css`, and `layout.css` so future edits stay modular.

## 3. Global Navigation & Hero — **DONE**
- Added an announcement/situational bar with dismissal + persistence logic and kept the navbar solid with support CTA.
- Built the full-viewport hero with gradient overlays, dual CTAs, stat badges, and responsive media treatment.
- Tweaked palette (nav, hero headings, theme toggle alignment) to keep colors on-brand after user feedback.

## 4. Story-Driven Homepage Sections — **DONE**
- Rebuilt “Who We Are,” mission, impact, units, highlights, gallery, and CTA bands with alternating imagery/gradients.
- Added animated counters + reveal effects, curated gallery mosaic with filters, and CTA copy tuned for both languages.
- Iterated on CTA gradients (now plum→lavender without gold) and button legibility per follow-up requests.

## 5. Interior Pages Enhancements — **DONE**
- **About:** Implemented timeline, service coverage, updated copy, and ensured sections reuse neutral backgrounds.
- **Units:** Created tabbed storytelling panels, tightened media sizing, and aligned volunteer CTA section styling.
- **Band & Events:** Rebuilt hero/rehearsal/media bands, added event grids + timeline, and synced section backgrounds.

## 6. Media, News, and Footer — **DONE**
- Upgraded `gallery.html` to the curated mosaic with hover captions and filter buttons tied to new i18n strings.
- Redesigned `news.html` around a hero story, compact news grid, and media-team CTA while matching home colors.
- Refreshed the footer with the brand gradient, quick links, contact/support CTAs, and consistent background usage.

## 7. Interaction & Localization Layer — **DONE**
- Extended `assets/js/main.js` with IntersectionObserver reveals, counter animations, announcement dismissal, and RTL-friendly gradients.
- Hooked up nav state, unit tabs, and theme toggles so EN/AR experiences stay synchronized in light/dark modes.
- Ensured CTA/button micro-interactions, gallery transitions, and announcement UX respect motion/user preferences.

---

## Change Log
- **Hero/Nav Refresh (Commits `b8cf0e9`, `c388165`, etc.)** — Implemented the new hero, announcement bar, and modular CSS structure.
- **Interior Pages Overhaul (`cddf476`, `0ee0efb`, `5d55f9c`)** — Rebuilt About, Units, Band, Events, gallery/news/footers, and added per-page backgrounds.
- **Color & CTA Iterations (`49073f5`, `380b9e8`, `d6d6799`, `02ce408`)** — Reinstated legacy palette, polished gradients, theme toggle, and CTA typography.
- **Announcement UX (`1432608`, `671b08f`)** — Added dismiss persistence, removed extra offset, and ensured navbar reclaims space.
- **Section Background Cleanup (`e11f6e6`, `485d5fd`, `9546d1d`, `5d55f9c`, `5d9b059`, `97ac6b6`)** — Applied scoped classes (`about-section`, `units-section`, `band-section`, `events-section`, `news-section`) so only intended pages use neutral backgrounds while preserving home styling.

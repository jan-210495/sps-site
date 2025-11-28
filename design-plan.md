# SPS Design Refresh Plan

> **Process reminder:** Make a dedicated git commit after every meaningful change to keep the history clean.

## 1. Moodboard & Visual Direction
- Gather references from scout.org plus recent humanitarian/nonprofit scout campaigns.
- Define an updated palette (deep plum, warm neutrals, vivid action colors) and typography pairings for EN/AR families.
- Collect photography and texture cues (fabric grain, diagonal accents, badges) to inform hero/section backgrounds.

## 2. Design System Foundations
- Expand tokens in `assets/css/style.css` for color scales, spacing, typography, elevations, and component states (light/dark).
- Introduce utility classes for angles, overlays, texture layers, and RTL-friendly spacing helpers.
- Split the stylesheet into logical partials (foundations, layout, components) to speed iteration while keeping the current build chain (plain HTML/CSS/JS).

## 3. Global Navigation & Hero
- Add an announcement/situational awareness bar above the navbar for urgent updates.
- Convert the navbar into a transparent-on-top bar that solidifies with scroll; enhance hover/focus states and include a tertiary CTA (e.g., “Support a project”).
- Replace the static hero in `index.html` with a full viewport experience: photo/video background, angled overlay shapes, badge stack, dual CTAs, and scroll cue animations similar to scout.org’s landing hero.

## 4. Story-Driven Homepage Sections
- Rebuild “Who We Are,” mission, and units blocks as modular story bands with alternating imagery, iconography, and highlights.
- Add an impact metrics row (youth served, volunteer hours, community projects) using animated counters.
- Introduce a “Stories & Highlights” carousel mixing articles, testimonials, and photo essays; include CTA cards for joining, supporting, or attending events.
- Use angled dividers, textured backdrops, and parallax assets to break the current flat stack of sections.

## 5. Interior Pages Enhancements
- **About:** Add a timeline/stepper for troop history, leadership spotlights with quotes, and a service-area mini map. Incorporate multimedia blocks (audio of hymns, badges).
- **Units:** Transform unit cards into tabbed storytelling panels per program with badges, skill progressions, downloadable guides, and embedded mini galleries.
- **Band & Events:** Provide rehearsal schedules, media snippets, and event sliders that mirror scout.org’s interactive program showcases.

## 6. Media, News, and Footer
- Elevate `gallery.html` into a curated experience: mixed-aspect masonry, hover captions, and lightbox filtering with story summaries.
- Redesign `news.html` around hero stories, featured carousels, tag chips, and shareable quote blocks; integrate upcoming events on the same page.
- Refresh the footer with layered backgrounds, quick links, and contact/support CTAs; add social proof (partners, hashtags).

## 7. Interaction & Localization Layer
- Extend `assets/js/main.js` with IntersectionObserver reveals, parallax cues, counter animations, and localized date formatting so EN/AR experiences stay in sync.
- Add per-section theme hooks for dark mode, ensuring gradients, text, and icons remain accessible.
- Incorporate richer motion states (button micro-interactions, image hover tilt, gallery transitions) while respecting performance budgets.


You are a senior full-stack web developer.
Your task: create a complete, responsive static website for a Syriac Orthodox scout troop based in Damascus, Syria.


---

1. Project Identity

Build a website for:

English name: St. Ephrem Patriarchal Syriac Scouts – Damascus

Arabic name: فوج مار أفرام السرياني البطريركي – دمشق

Type: church-based scout troop with brass band, youth units, and community service.


The site should look modern, clean, and respectful, suitable for a church youth organization.


---

2. Tech Stack & Structure

Use:

Pure HTML5, CSS3, and vanilla JavaScript.

You may use Bootstrap (via CDN) or another modern CSS framework for layout and responsiveness.

Create separate files:

index.html (Home)

about.html

units.html

band.html

events.html

gallery.html

news.html

join.html

contact.html

assets/css/style.css (main custom CSS)

assets/js/main.js (optional small JS for interactions, nav, etc.)



Implement a shared navigation bar and footer on all pages with consistent styling.


---

3. Design & Branding

Colors (use as a guideline)

Burgundy / Wine Red: #7A1F24

Gold: #CFAF5A

Dark Navy: #0A1A33

White: #FFFFFF

Light Grey BG: #F2F2F2


Fonts

English: e.g. Poppins or Montserrat (via Google Fonts)

Arabic: e.g. Cairo or Tajawal (via Google Fonts)


The design should:

Be fully responsive (mobile-first).

Use hero sections, cards, and nice spacing.

Work well with both English (LTR) and Arabic (RTL) text (even if you add placeholder Arabic for now).



---

4. Pages & Content Layout

You can use placeholder text where real content is unknown, but structure must be clear and realistic.

4.1. index.html – Home

Sections (in order):

1. Hero Section

Full-width background image or gradient.

Title: “St. Ephrem Patriarchal Syriac Scouts – Damascus”

Subtitle: short mission tagline (e.g. “Faith, Service, and Brotherhood in the Heart of Damascus”).

Buttons: “About the Troop” and “Join Us”.



2. Who We Are

Brief text about the troop (church-based Syriac Orthodox scout group in Damascus).



3. Our Mission

3–4 bullet points (Faith, Scouting Spirit, Community Service, Youth Formation).



4. Our Units Overview

Cards for:

Cubs (أشبال)

Scouts

Guides

Rovers (جوالة)

Band (الفرقة النحاسية)


Each card has short description + “Learn more” linking to units.html or band.html.



5. Upcoming Events Preview

3 event cards (title, date, short description, link to events.html).



6. Featured Gallery Strip

A row of 4–6 image placeholders (use local placeholder paths for now).

Link to gallery.html.



7. Call to Action

Section with a short message: “Want to join the troop?” and button to join.html.





---

4.2. about.html – About Us

Sections:

Our Story
Short history paragraph (use realistic scout-style placeholder).

Spiritual Identity

Explain that it belongs to the Syriac Orthodox Patriarchate.

Mention St. Ephrem as patron saint (placeholder text).


Mission & Vision
Use bullet lists.

Leadership

Cards for “Troop Leader”, “Band Leader”, “Unit Leaders” with placeholder names/roles.


Our Emblem & Symbols

Explain in text (no actual image needed, but leave a placeholder <img> for a logo/emblem).




---

4.3. units.html – Scouting Units

Show sections/cards for each unit:

Cubs (أشبال)

Scouts

Guides

Rovers (جوالة)

Leaders


For each:

Age range (placeholder).

Typical activities (meetings, camps, games, service).

Small icon or image placeholder.



---

4.4. band.html – Band (الفرقة النحاسية)

Sections:

About the Band

Describe brass band: trumpets, drums, cymbals, etc.


What We Do

Events: Palm Sunday procession, Christmas services, feasts, community events.


Rehearsals

Placeholder schedule and description.


Join the Band

Short text + button linking to join.html.



Add a small “media strip” of image placeholders for the band.


---

4.5. events.html – Events

List of upcoming events in cards or a simple calendar layout.

Each event card:

Title

Date

Location

Short description


Also a “Past Highlights” section with a few sample past events.



---

4.6. gallery.html – Gallery

Organized into simple tabs or filter buttons:

“Processions”

“Camps”

“Band”

“Meetings”


Use responsive image grid with placeholders (e.g. <img src="assets/images/gallery1.jpg"> etc.).

Make sure images resize nicely on mobile.



---

4.7. news.html – News / Blog

Simple list of news posts:

Title

Date

Short excerpt

“Read more” placeholder links (can be non-functional for now).




---

4.8. join.html – Join Us

Brief text inviting youth to join.

A HTML form (no backend, just front-end validation) with:

Name

Age

Phone / WhatsApp

Email

Preferred unit (select: Cubs, Scouts, Guides, Rovers, Band)

Message / Notes


Add simple JS validation for required fields.



---

4.9. contact.html – Contact

Section with:

Address (placeholder in Old Damascus).

Email (placeholder).

Phone / WhatsApp (placeholder).

Embedded Google Maps iframe placeholder (dummy src is fine).


Contact form can be simple (Name, Email, Message).



---

5. Navigation & Footer

Navigation bar (on all pages):

Logo / Text on the left: “St. Ephrem Scouts”

Menu items (right):

Home

About

Units

Band

Events

Gallery

News

Join Us

Contact



The current page should have an “active” state.

Footer (on all pages):

Short description line about the troop.

Copyright line.

Social media icons (Instagram, Facebook, YouTube) with # links.



---

6. General Requirements

Code must be clean, well-indented, and commented where helpful.

All text content should be easy to replace later.

Make sure the site is fully responsive: test layout conceptually for mobile, tablet, and desktop breakpoints.

Avoid heavy dependencies; keep it lightweight.


Create and populate all the above files with valid HTML/CSS/JS and realistic placeholder content that fits a Syriac Orthodox scout group in Damascus.


---

You are allowed to create, modify, and delete files in the current project directory as needed to implement this website.
# sps-site

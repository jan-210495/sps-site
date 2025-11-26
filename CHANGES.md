## Change Log

Tracked updates applied by automation.

### Current session
- Imported 46 troop photos from `/mnt/c/Users/janoo/Downloads/scout images`, renamed them to kebab-case, and replaced placeholders across Home, Units, Events, Band, About, and Gallery with the real images. Gallery now displays the full set with filtering categories.
- Added Beavers unit (AR: مستعمرة القنادس) across Home and Units with light-blue accent, description, and images; adjusted AR titles for Cubs (قطيع الجراميز) and Scouts (الكشافين).
- Set Arabic as default language on first load; navbar AR brand text updated to “فوج مار أفرام السرياني”.
- Hero tweaks: larger logo (200px/225px via CSS vars), Arabic hero title trimmed to remove “– دمشق”, subtitle updated to “إخلاص - مساعدة - طاعة”.
- Styling tweaks: new hero gradient, navbar hover/active colors, dropdown opens on hover, button hover states refined (login invert, gold buttons outlined, contact send hover border), mission divider alignment.
- Content tweaks: emblem now uses `logo-2.png`; mission divider aligns with title; About, Units, Events, Band images updated; Join/Contact buttons restyled.
- Added locale split: root pages default to Arabic, new `en/` directory holds English copies with corrected asset paths; language toggle now navigates between locale-specific pages; body hidden until i18n applies to reduce flash; backups stored in `sps.old/`.

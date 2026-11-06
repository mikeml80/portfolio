# Project Showcase — bilingual portfolio

A responsive interactive portfolio featuring six projects, with Spark Driver-style onboarding/walkthrough slides, animated original CSS illustrations, clickable pagination dots, swipe gestures, keyboard arrows, and English/Spanish routes.

## Quick start

Requires Node.js 20.9+ (Node.js 22 recommended).

```bash
npm install
npm run dev
```

Open http://localhost:3000 (redirects to `/en`). Switch between `/en` and `/es` using the language control.

## Projects included

- Gig Goal Tracker
- MetricForge
- Petinha
- Bills Reminder
- MathQuest Arcade
- Career Town (CV RPG)

Each has 5 individually written bilingual slides and a custom visual treatment. Figures such as $680 and $1,000 are **illustrative examples**, not verified application data. Feature descriptions should be checked and updated as work progresses.

## Editing the portal

- `lib/projects.ts`: project cards, descriptions, tech stack, five slides, language translations, and development status. To add projects, append one entry with a unique `id`, `icon`, `theme`, and slides.
- `lib/site.ts`: owner name and **real** email, GitHub, LinkedIn, and PDF resume URLs. These are intentionally blank; no made-up links are published.
- `components/showcase.tsx`: gallery and animated/swipable walkthrough modal.
- `components/visual.tsx`: illustrations keyed by `slide.visual`. Use these or replace with screenshots/animations from your real applications.
- `app/globals.css`: colors, card layouts, mobile styling, and artwork.

To expose project-specific Demo or GitHub links, add a `links` property to the appropriate object in `lib/projects.ts`, e.g. `links: {demo: "https://YOUR-REAL-APP", source: "https://github.com/YOU/REPO"}`. These links appear automatically after the project's carousel only when populated.

## Production deployment (Hostinger VPS / Docker / Caddy)

```bash
npm install
npm run build
npm run start
```

Or use the included Dockerfile. Point Caddy to the service on port 3000 and configure your own domain, TLS, and contact details. Do not expose a public demo without reviewing each project's claims, replacing illustrative diagrams as desired, and setting actual links.

## Notes

- English is the default; both locales have dedicated addressable routes. The language switch maintains language choice within site navigation, and content is entirely separate from design.
- Modal supports keyboard Escape, arrow keys, touch swipe, and pagination dots. The page remains responsive down to phone widths.
- The portal runs independently of Career Town so it can remain a lightweight recruitment and sponsor showcase once the RPG is launched.

## Downloadable technical and business reports

Each project card and walkthrough now includes two downloadable English PDFs, under `public/downloads/`: a Technical Case Study and a Product & Business Brief. There are also two complete portfolio reports in that folder. The bilingual UI translates button labels, but **PDF text is currently English only**. To add Spanish PDFs later, name them `PROJECT-ID-technical-es.pdf` and `PROJECT-ID-business-es.pdf` and update `pdfUrl` in `components/showcase.tsx` to use the current locale. These reports reflect available project discussions; verify claims against source code before submitting externally.


## Homepage previews (2026-11-04)

The homepage cards for **Gig Goal Tracker** and **Petinha** now use product-specific rendered previews, based on screenshots supplied by the author. Images are stored at:

- `public/images/projects/gig-goal-tracker-preview.webp`
- `public/images/projects/petinha-preview.webp`

These are **illustrative composite artwork**, not exact application screenshots. To replace them with updated images, keep the same names or adjust the `<img>` paths in `components/showcase.tsx`. Other project cards retain their existing icon artwork until their own previews are supplied. Both report download buttons remain available for all six projects.


## New MetricForge and Bills Reminder previews

The homepage includes branded visual previews in `public/images/projects/metricforge-preview.webp` and `bills-reminder-preview.webp`. Both use **fictional demonstration values**, not real user financial data or credentials. The other project previews, bilingual onboarding carousels, and PDF downloads are preserved.


## Fan previews (all six projects)

All six gallery cards use three separate WebP layers with the same hover/focus fan animation. MathQuest uses the character-selection screenshot in the middle, the tavern on the left, and Cows & Bulls on the right. The previews of the other apps are cropped from previously created promotional collages and use demo data; they are not live screens.


## Uncropped screenshots — November 2026
The four non-RPG cards use the newly supplied original vertical screenshots as individual, uncropped WebP images. `object-fit: contain` preserves each complete screen in its animated frame. MathQuest and Career Town assets and layout were left unchanged. Screenshots containing potentially personal financial values have those content regions blurred; the Bills login screenshot was not included. MetricForge had only two distinct source screenshots, so the hero shot is reused as its third panel.

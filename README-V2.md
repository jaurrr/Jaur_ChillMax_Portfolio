# Jauhar Ayyub — Portfolio V2

Angular 20 + TypeScript + SCSS. Professional light/dark theme portfolio.

## Run locally
1. `npm install`
2. `npx ng serve` → http://localhost:4200

## Production build
`npx ng build` → output in `dist/site/browser/`

## Deploy (Vercel)
- Import this folder as the project root.
- Build command: `npx ng build`
- Output directory: `dist/site/browser`
- `vercel.json` (included) sets security headers.
- After deployment, update the placeholder domain `YOUR-DOMAIN` in:
  - `src/index.html` (canonical — uncomment and set)
  - `public/robots.txt` (Sitemap URL)
  - `public/sitemap.xml` (loc URL)

## What's inside
- Hero with 3D flip photo card, typing roles, Download CV
- About, Skills + Services, Experience (DTF), Certifications (PDF lightbox), Education
- Projects: Hamza Travels, Fixdoo, SnapLink
- Gallery (12 photos, lightbox), Contact (mailto form + WhatsApp)
- Theme toggle (light/dark) persisted in localStorage

# Drea's Dog World

Website for **Drea's Dog World**, the Brooklyn dog training business of Andrea "Drea" Smith. Andrea has worked with dogs for more than 30 years. Her training is positive and reward-based, never a shock collar, with a focus on rescues, reactive dogs, and bully breeds.

The site introduces Andrea, builds trust through press, credentials, reviews, and video, and gets dog owners to reach out.

Built by [Novus](https://novusnyc.org) following the Novus build standard in `CLAUDE.md`.

## Pages

| Route | What's on it |
| --- | --- |
| `/` | Hero video, press banner, common issues, about preview, reviews, Instagram, contact form |
| `/about` | Andrea's story, her TV work, the four P's, bully breeds, press and credentials |
| `/testimonials` | Seven client stories and a link to Yelp |
| `/contact` | Contact form, phone and email, and the ways to work together |

## Business details

All business content (contact info, services, press, reviews, videos, photos) lives in one file: `src/lib/site-data.ts`. Edit that file to change text on the site.

## Tech stack

- [Next.js](https://nextjs.org) 16 (App Router), React 19, TypeScript
- Tailwind CSS 3, with brand colors as CSS variables in `src/app/globals.css`
- Fonts: Fraunces and Work Sans, loaded with `next/font`
- No other runtime dependencies

## Getting started

```bash
npm install
npm run dev          # http://localhost:3000
npm run typecheck
npm run lint
npm run build        # stop the dev server first
```

## Project structure

```
src/
  app/                  Pages (one folder per route), layout, global styles, favicon
  lib/
    site-data.ts        All business content
    components/         Sections grouped by page (home, about, testimonials, contact),
                        plus shared layout, ui, and icons
public/images/          photos, instagram, press, badges, videos, illustrations
```

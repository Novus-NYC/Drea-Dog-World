# Drea's Dog World

Website for **Drea's Dog World**, the Brooklyn dog training business of Andrea "Drea" Smith. Andrea has worked with dogs for more than 30 years and specializes in positive, reward-based obedience, rehabilitation, and socialization, especially for rescues, reactive dogs, and bully breeds.

The site's job is to introduce Andrea, build trust through press, credentials, reviews, and video, and get dog owners to reach out.

Built by [Novus](https://novusnyc.org) following the Novus build standard in `CLAUDE.md`.

## Pages

| Route | Status |
| --- | --- |
| `/` Home | Built |
| `/about` | Placeholder, still to build |
| `/testimonials` | Not built yet (linked from the navbar and Reviews section) |
| `/contact` | Placeholder, still to build |

## Tech stack

- [Next.js](https://nextjs.org) (App Router) with React and TypeScript
- Tailwind CSS 3, with brand colors as CSS variables
- Fonts: Fraunces (display and italic accent) and Work Sans (body), loaded with `next/font`
- No other runtime dependencies

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

Other useful commands:

```bash
npx tsc --noEmit   # type check
npm run build      # production build
```

Do not run `npm run build` while `npm run dev` is running. Both write to the `.next` folder and the dev server can end up serving stale CSS. If a new Tailwind class seems to do nothing, stop the dev server, delete `.next`, and start it again.

## Project structure

```
src/
  app/
    layout.tsx          Root layout: fonts, metadata, navbar, footer
    page.tsx            Homepage: lists the sections in order
    globals.css         Color tokens, base styles, and shared CSS classes
    icon.svg            Favicon (with favicon.ico and apple-icon.png)
    about/              /about
    contact/            /contact
  lib/
    site-data.ts        All business content in one place
    components/
      layout/           Navbar and footer (on every page)
      ui/               Reusable pieces: buttons, eyebrow, badge logo, video player, paw trail
      icons/            SVG icons: paw, Instagram, Facebook, Yelp
      home/             One file per homepage section, plus its interactive parts
public/
  images/               Photos, badges, press logos, video covers, skyline
```

## Still to do before launch

- [ ] Build the Testimonials, About, and Contact pages
- [ ] Connect the postcard form to a form service
- [ ] Add Open Graph metadata once the live domain is known
- [ ] Confirm permission for the Ground Zero rescue dog photo in the Instagram grid
- [ ] Add scroll reveal motion across sections
- [ ] Pin exact package versions and set up linting
- [ ] Final desktop, tablet, and mobile check against the `CLAUDE.md` delivery checklist

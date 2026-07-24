# Nipun Chaudhari — Portfolio

Personal portfolio for Chaudhari Nipun Pankaj — B.Tech AI & Data Science student
at Sanjivani University, LLM intern at ethara.ai, and published AI researcher.

Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and a dark
glassmorphism design system.

## Tech stack

- **Framework:** Next.js 14 (App Router) + TypeScript
- **Styling:** Tailwind CSS, CSS variables for theming
- **Charts:** Recharts (skill radar), lazy-loaded client-side
- **Icons:** lucide-react
- **Contact form:** EmailJS (with a `mailto:` fallback if unconfigured)
- **Fonts:** Space Grotesk + Inter via `next/font/google`

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Copy `.env.local.example` to `.env.local` and fill in EmailJS credentials to
enable one-click sending on the Contact form:

```bash
cp .env.local.example .env.local
```

Get these from a free account at [emailjs.com](https://www.emailjs.com) (add
an email service + template, then grab the service ID, template ID, and
public key). Without them, the Contact form still works — it falls back to
a `mailto:` link.

## Project structure

```
src/
├── app/            Routes: home, /blog, sitemap.ts, robots.ts, not-found.tsx,
│                    opengraph-image.tsx
├── components/
│   ├── layout/      Navbar, CommandPalette (⌘K), LoadingScreen, Footer,
│   │                SiteChrome (composes all of the above)
│   ├── sections/    One component per homepage section
│   └── shared/      Reusable pieces (cards, counters, charts)
├── data/            Typed content — the single source of truth for every
│                    fact shown on the site (resume-derived, nothing invented)
├── types/           Shared TypeScript interfaces for the data layer
└── lib/              Utilities, nav config, site URL constant
```

Editing content (a new certificate, project, achievement, etc.) means editing
the relevant file in `src/data/` — components read from data and never hold
hardcoded facts.

## Before deploying

A few things still need your input — search the codebase for these or check
the running site:

- [ ] Add a real profile photo (`Hero.tsx` currently shows a monogram)
- [ ] Add your GitHub URL and any coding-profile links (`data/profile.ts`)
- [ ] Add real photos to `data/gallery.ts` (currently empty)
- [ ] Add real, consented testimonial quotes to `data/testimonials.ts` (currently empty)
- [ ] Confirm how the Tata Technologies InnoVent concepts should be framed (`data/projects.ts`)
- [ ] Set up EmailJS credentials (see above) for one-click contact form sending
- [ ] Update `SITE_URL` in `src/lib/site-config.ts` with your real deployed URL
- [ ] Run `npx shadcn@latest init` locally if you want to add shadcn/ui components later

## Deploying

**1. Push to GitHub**

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

**2. Deploy on Vercel**

- Go to [vercel.com/new](https://vercel.com/new) and import the GitHub repo
- Framework preset: Next.js (auto-detected)
- Add the same environment variables from `.env.local` in the Vercel project settings
- Deploy

**3. After deploying**

- Update `SITE_URL` in `src/lib/site-config.ts` to your real Vercel URL (or
  custom domain), commit, and redeploy — this keeps metadata, the sitemap,
  robots.txt, and structured data all pointing at the right place.

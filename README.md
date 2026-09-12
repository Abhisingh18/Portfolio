# Abhishek Singh — Portfolio

Personal portfolio for an AI/ML engineer. Next.js App Router, TypeScript,
Tailwind v4. Every section is its own statically prerendered route.

**Live:** https://portfolio-nine-ivory-61.vercel.app

## Running it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run start      # serve the production build
npm run lint
npm run typecheck
```

## Editing content

Nothing on the page is hardcoded in a component. Everything — copy, links,
metrics, images — lives in [`content/site.ts`](content/site.ts), typed so a
wrong field fails the build rather than the page.

| Export | Controls |
| --- | --- |
| `SITE` | Canonical URL, title, meta description |
| `PROFILE` | Contact details, intro, résumé path, availability badge |
| `STATS` | The four figures under the hero |
| `ROLES` | Work-experience entries (`current: true` marks the active role) |
| `PROJECTS` | Project grid — set `client` to move an entry into Client work |
| `AWARDS`, `SKILLS`, `EDUCATION` | Their respective sections |
| `AFFILIATIONS` | The marquee strip under the hero |
| `RND` | Research areas and engineering capabilities (the six focus cards) |
| `NEWS` | Dated updates on the home page |
| `PAGES` | The routes — label, URL, section number and home-index blurb |

Keep every number in `STATS` backed by something further down the page.

## Contact form

The form posts to a Server Action, so it works with JavaScript disabled.
Validation runs on the server and a hidden honeypot field absorbs bots.

With no email provider configured it falls back to opening the visitor's mail
client with the message pre-filled — a submission is never silently dropped.
To deliver messages to an inbox instead, add a [Resend](https://resend.com)
key:

```bash
# .env.local
RESEND_API_KEY=re_xxxxxxxx
CONTACT_TO=SinghAbhishek1571@gmail.com      # optional
CONTACT_FROM="Portfolio <hello@yourdomain>" # optional, needs a verified domain
```

## Media

Demo videos live in `public/media/` with poster frames in `public/posters/`.

They are served as static files rather than imported, and carry
`preload="metadata"`, so a visitor downloads a video only after pressing play.
Compress anything new before adding it:

```bash
ffmpeg -i raw.mp4 \
  -vf "scale='min(1280,iw)':-2,fps=24" \
  -c:v libx264 -preset slow -crf 30 -pix_fmt yuv420p \
  -movflags +faststart -an \
  public/media/<slug>.mp4

ffmpeg -ss 2 -i raw.mp4 -frames:v 1 -q:v 6 public/posters/<slug>.jpg
```

Then point the project's `video` and `poster` fields at them.

## Structure

```
app/
  layout.tsx        Chrome, fonts, metadata, JSON-LD
  page.tsx          Home — hero, current role, focus areas, and a
                    preview of projects/recognition linking out
  work/             ┐
  research/         │
  projects/         ├ one route per section, each with its own
  recognition/      │ <title> and description
  about/            │
  contact/          ┘
  actions.ts        Contact Server Action
  globals.css       Design tokens (Tailwind v4 @theme)
  sitemap.ts        Generated /sitemap.xml, lists every route
  robots.ts         Generated /robots.txt
components/
  ui/               Section, Reveal, PageShell, icons
  *.tsx             One file per section, rendered by its route
content/site.ts     All page content, typed
public/
  images/           Photography and logos
  media/            Compressed demo videos
  posters/          Video poster frames
```

### Home vs. routes

The home page previews each area and links out; the routes hold the full
content and stay canonical for it. Keep it that way — rendering everything
twice would make the two versions compete in search results.

### Adding a section

Add an entry to `PAGES` in `content/site.ts`, write the component in
`components/`, then create `app/<slug>/page.tsx` wrapping it in `PageShell`.
The header, footer, home index, sitemap and prev/next pager all read from
`PAGES`, so nothing else needs touching.

## Design notes

- The palette is near-monochrome on pure black. One violet accent carries the
  emphasis; a single teal is reserved for status and results. Adding more
  colour is the fastest way to make this look cheaper.
- `Reveal` animates with a data attribute rather than React state, so it costs
  no re-render and content stays visible without JavaScript.
- `og-image.jpg`, `favicon.ico` and `apple-touch-icon.png` are generated
  assets. Regenerate them if the headline stats or title change.

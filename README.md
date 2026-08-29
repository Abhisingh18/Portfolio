# Abhishek Singh — Portfolio

Personal portfolio for an AI/ML engineer. React + Vite + Tailwind, deployed on Vercel.

**Live:** https://portfolio-nine-ivory-61.vercel.app

## Running it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into dist/
npm run preview  # serve the production build
npm run lint
```

## Contact form

The form works with no setup: it opens the visitor's mail client with the
message pre-filled. To collect submissions in an inbox instead, create a
[Formspree](https://formspree.io) form and add its ID:

```bash
# .env
VITE_FORMSPREE_ID=xxxxxxxx
```

With the variable set, the form POSTs to Formspree and shows inline
success/error states. Without it, the mailto fallback is used — a message is
never silently dropped either way.

## Editing content

Almost everything on the page is data, not markup. Edit
[`src/constants/index.js`](src/constants/index.js):

| Export | Controls |
| --- | --- |
| `PROFILE` | Name, contact links, résumé path, availability badge |
| `STATS` | The four headline numbers under the hero |
| `EDUCATION` | Degree card in About |
| `EXPERIENCE` | Timeline entries (`current: true` marks the active role) |
| `PROJECTS` | Project grid — `freelance: true` moves an entry to the client-work section |
| `SKILLS`, `SERVICES`, `ACHIEVEMENTS` | Their respective sections |
| `NAV_LINKS` | Navbar and footer links |

Keep the numbers in `STATS` backed by something further down the page.

## Media

Demo videos live in `public/media/` with poster frames in `public/posters/`,
referenced through the `media()` helper in `src/constants/index.js`.

They are deliberately **not** imported through Vite. Importing them bundles
them into the build and, when a card autoplays, downloads tens of megabytes on
page load. Serving them from `public/` means a video is only fetched when a
visitor presses play.

To add a demo video, compress it first:

```bash
ffmpeg -i raw.mp4 \
  -vf "scale='min(1280,iw)':-2,fps=24" \
  -c:v libx264 -preset slow -crf 30 -pix_fmt yuv420p \
  -movflags +faststart -an \
  public/media/<slug>.mp4

ffmpeg -ss 2 -i raw.mp4 -frames:v 1 -q:v 6 public/posters/<slug>.jpg
```

Then add `...media("<slug>")` to the project entry.

## Structure

```
src/
  components/
    ui/          Section, ProjectCard, VideoModal — shared across sections
    *.jsx        One file per page section
  constants/     All page content
  lib/motion.js  Shared entrance animation
public/
  media/         Compressed demo videos (not bundled)
  posters/       Poster frames
```

## Notes

- `og-image.jpg`, `favicon.ico` and `apple-touch-icon.png` are generated
  assets; regenerate them if the headline stats or title change.
- `sitemap.xml`, `robots.txt` and the canonical/OG URLs in `index.html`
  hardcode the production domain. Update them together if it changes.

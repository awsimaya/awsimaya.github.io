# AGENTS.md

Context for AI agents working on this repo. This is the personal site for
Imaya Kumar Jagannathan, hosted at **imayakumar.com** (custom domain via
`CNAME`), served from GitHub Pages.

## What this site is

A single scrolling home page plus one separate page:

- `/` — one long page: Hero → About (impact stats) → Work (open source) →
  Speaking → Writing (articles/press) → Book → Recognition. Navigated via a
  sticky top nav with in-page anchor links (`#about`, `#work`, `#speaking`,
  `#writing`, `#book`, `#recognition`).
- `/resume` — a separate, printable resume page (own route, own "Download
  PDF" button that calls `window.print()`).

This was a deliberate design decision (2026): the site used to be four
routes (Home / Activities / Books / Resume). It was consolidated into one
page + Resume because the owner wanted something simpler to browse. **Two
things to preserve if you touch this again:**
1. Keep it a single page (don't reintroduce separate routes for
   Work/Speaking/etc.) unless the owner explicitly asks to split it up again.
2. Keep content complete — the owner explicitly chose to keep every
   speaking engagement / article / press mention fully listed rather than
   trimmed or collapsed. Don't quietly cut list items when editing a section.

## Stack

- Create React App (`react-scripts@3.0.1` — old; see Node version note
  below), `react-router-dom` v6, `styled-components` v6, `react-ga4` for
  pageview tracking, FontAwesome for icons.
- No test suite beyond the CRA default (`src/App.test.js` just checks the
  nav brand renders).

## Structure

- `src/pages/Home.js` — composes the section components in order. Add a new
  section here (and to `src/components/Navbar.js`'s `sections` array) if
  you add a new top-level section.
- `src/pages/Resume.js` — the resume page, self-contained, has its own
  print stylesheet (`@media print`).
- `src/sections/*.js` — one file per home-page section (`Hero`, `About`,
  `Work`, `Speaking`, `Writing`, `Book`, `Recognition`). **Content arrays
  (speaking engagements, articles, press mentions, chapters, awards, etc.)
  live inline in these files** — that's where to add/edit/remove an entry,
  not in a separate data file.
- `src/components/` — shared UI: `Navbar`, `Footer`, `SectionHeading`
  (eyebrow + title, used by every section), `LinkCard` (the flat
  title/meta/description card used for speaking engagements, webinars,
  videos, articles).
- `src/theme.js` — design tokens (colors, radii, spacing, breakpoints).

## Visual style

Deliberately flat and quiet: white/`bandBackground` surfaces, thin
borders, one primary accent (`accentBlue`), `accentOrange` reserved only
for the book's "Buy on Amazon" CTA. No gradients, no glass-blur, no
floating/pulsing animations, no per-category color-tinted cards — an
earlier version of the site had all of that and it was intentionally
stripped out for a calmer, easier-to-scan design. Don't add it back without
the owner asking.

## Running it locally

```
npm install
npm start        # dev server
npm run build    # production build to build/
```

Both `start` and `build` set `NODE_OPTIONS=--openssl-legacy-provider` in
`package.json`'s scripts — required because this react-scripts/webpack
version predates modern Node's default OpenSSL provider. Don't remove that
flag without testing a build.

**Node/npm may not be preinstalled** on a fresh machine. Installing it
(e.g. `sudo pacman -S nodejs npm` on Arch-based systems) needs a real
interactive terminal for the sudo password — it cannot be done from a
sandboxed/non-interactive agent shell. Ask the human to run it if `node`/
`npm` aren't found.

**`npm start`'s dev server can be unreliable when launched from an
automated/sandboxed shell** — in that environment, backgrounding it (`&`,
`disown`, or a tool's own background-job runner) sometimes let the
webpack-dev-server process exit shortly after "Starting the development
server..." with no error, even though `npm run build` compiled the exact
same code cleanly. If that happens, prefer verifying against the static
production build instead, which is simpler and doesn't depend on
long-running file-watcher/dev-server behavior:

```
npm run build
npx serve -s build -l 4173
```

Then drive `http://localhost:4173/` with a headless browser (Playwright
worked fine here: `npm install playwright` + `npx playwright install
chromium`, no `--with-deps` since that needs sudo) to screenshot and check
for console errors, rather than assuming a background dev server is
actually still alive.

## Branches, CI, deploy

- `main` — production; a push to `main` triggers
  `.github/workflows/deploy.yml`, which builds with **Node 16** and
  `npm install --legacy-peer-deps`, then publishes `build/` to the
  `gh-pages` branch (CNAME `imayakumar.com`) via `peaceiris/actions-gh-pages`.
- `dev` — active work branch.
- `revise2` — older branch, predates the single-page remodel.
- The repo's remote is `https://github.com/awsimaya/awsimaya.github.io.git`.
  A fresh clone/checkout has no git identity configured — set it with
  `git config --local user.name`/`user.email` (local, not `--global`)
  before committing. Likewise there are no stored push credentials on a
  fresh machine; pushing needs either the human's own authenticated
  terminal, or a short-lived token supplied just for that push (never put
  a token in `git remote set-url` or any committed file).

## Content ownership

The site's copy (bio, stats, speaking history, awards, book details, resume)
reflects the real career history of the site's owner. When adding new
entries (a new talk, a new article), match the existing tone and the data
shape already used in that section's array — don't invent achievements or
numbers.

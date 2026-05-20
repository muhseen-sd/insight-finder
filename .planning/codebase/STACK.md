# Technology Stack

**Analysis Date:** 2026-05-20

## Languages

**Primary:**
- JavaScript (ES6+) - All application logic in `script.js`
- HTML5 - Document structure in `index.html`
- CSS3 - Styling in `style.css`

**Secondary:**
- Not detected

## Runtime

**Environment:**
- Browser (client-side only) — no Node.js runtime required
- No package manager detected (no `package.json`)
- No lockfile present

## Frameworks

**Core:**
- None — vanilla JavaScript only. No frontend frameworks (React, Vue, Angular, Svelte) or UI libraries detected.

**Testing:**
- None — no test framework, test files, or test configuration detected.

**Build/Dev:**
- None — no bundlers (Webpack, Vite, Parcel), transpilers (Babel), or task runners detected. The application runs directly from source files.

## Key Dependencies

**Critical:**
- None — zero npm/pip/package dependencies. Pure vanilla HTML/CSS/JS.

**External Assets (loaded at runtime via CDN):**
- `covers.openlibrary.org` — OpenLibrary Covers API for fetching book cover images by ISBN
- `images.unsplash.com` — Unsplash for placeholder book cover images
- These are loaded dynamically via `<img>` `src` attributes in `script.js`; no SDK or library wrapper is used.

**Local Assets:**
- 9 image files in `images/` directory — PNG and WebP formats used for local book covers:
  - `cant_hurt_me.webp`
  - `ginamanufa.png`
  - `laws.webp`
  - `one_thing.png`
  - `one_thing2.png`
  - `one_thing3.webp`
  - `sealed.webp`
  - `tunaninka.png`
  - `unlock_it.png`

## Configuration

**Environment:**
- Not applicable — no environment configuration system present.
- No `.env` file or `.env.*` files detected.
- No build-time configuration.

**Build:**
- None — no build configuration files detected.

## Platform Requirements

**Development:**
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local HTTP server is not strictly required (can open `index.html` directly) but recommended for proper asset loading
- No language runtime or package manager required

**Production:**
- Any static web hosting (GitHub Pages, Netlify, Vercel, etc.)
- No server-side processing required

---

*Stack analysis: 2026-05-20*

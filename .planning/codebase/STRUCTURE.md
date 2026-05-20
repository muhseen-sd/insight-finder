# Codebase Structure

**Analysis Date:** 2026-05-20

## Directory Layout

```
InsightFilter/
├── .git/                          # Git repository metadata (auto-generated)
├── .planning/                     # GSD planning artifacts
│   └── codebase/                  # Codebase mapping documents ← you are here
├── images/                        # Local book cover image assets
│   ├── cant_hurt_me.webp
│   ├── ginamanufa.png
│   ├── laws.webp
│   ├── one_thing.png
│   ├── one_thing2.png
│   ├── one_thing3.webp
│   ├── sealed.webp
│   ├── tunaninka.png
│   └── unlock_it.png
├── index.html                     # Entry point — page shell & DOM structure
├── script.js                      # Application logic — data, render, filter
└── style.css                      # All visual presentation styling
```

## Directory Purposes

**Root directory `./`:**
- Purpose: Holds all project files flat (no `src/`, `dist/`, or `public/` subdirectories)
- Contains: 3 source files (`index.html`, `script.js`, `style.css`), 2 directories
- Key files: `index.html` (entry point), `script.js` (business logic), `style.css` (presentation)

**`images/`:**
- Purpose: Static local image assets used for book cover thumbnails
- Contains: 9 image files (`.webp` and `.png` formats)
- Key files: `cant_hurt_me.webp`, `laws.webp`, `sealed.webp`, `one_thing3.webp`, `ginamanufa.png`, `tunaninka.png`, `unlock_it.png`, `one_thing.png`, `one_thing2.png`
- Note: Some books reference remote images from `covers.openlibrary.org` and `images.unsplash.com` instead of local files

**`.planning/`:**
- Purpose: GSD workflow planning artifacts (not part of application runtime)
- Contains: `codebase/` subdirectory for architecture and structure analysis documents
- Generated: Yes (by `/gsd-map-codebase`)
- Committed: Yes

## Key File Locations

**Entry Point:**
- `index.html`: Single HTML page — opens directly in browser, no server required

**Configuration:**
- None. No `package.json`, `tsconfig.json`, `.eslintrc`, or any config files exist.
- The project has no build tooling, no runtime configuration, no environment variables.

**Core Logic:**
- `script.js`: All JavaScript — data model (line 29-48), render function (line 59-84), event listener (line 90-101)

**Presentation:**
- `style.css`: Complete stylesheet — CSS custom properties (line 3-11), grid layout (line 58-63), card components (line 66-156), footer (line 158-172)

**Images:**
- `images/`: 9 local image files for book covers; books 1, 2, 3, 8, 9, 12, 13, 14, 15 use remote URLs

## Naming Conventions

**Files:**
- `kebab-case` for all files: `index.html`, `script.js`, `style.css`
- Image files use `snake_case` with original names: `cant_hurt_me.webp`, `one_thing3.webp`, `the_one_thing.png`

**CSS Classes:**
- `kebab-case` with semantic naming: `.book-card`, `.card-cover`, `.card-details`, `.book-title`, `.book-author`, `.category-badge`, `.book-price`, `.site-footer`

**CSS IDs:**
- `kebab-case`: `#search-bar`, `#books-list`

**JavaScript Variables:**
- `camelCase` for variables and functions: `availableBooks`, `searchBar`, `booksList`, `displayBooks`, `filteredBook`, `searchText`, `htmlStrings`, `finalHTML`
- Descriptive names used throughout

**JavaScript Functions:**
- `camelCase` with verb-prefix: `displayBooks()` — renders the book list
- Arrow function used for `.map()` callback and `.filter()` callback

**HTML IDs and Attributes:**
- `kebab-case` for HTML `id` attributes: `search-bar`, `books-list`
- `kebab-case` for CSS classes in HTML: `book-card`, `card-cover`, `card-details`, `book-img`, `book-title`, `book-author`, `category-badge`, `book-price`, `site-footer`

## Where to Add New Code

**New Feature (e.g., category filter, price sort):**
- Primary code: `script.js` — add new event listeners, filtering/sorting functions, and state variables here
- Alternative: Split into separate `.js` files and add additional `<script>` tags in `index.html`

**New UI Component:**
- HTML template: Add markup inside `index.html` body
- Styling: Add CSS rules in `style.css` following the existing `book-card` component pattern
- JS behavior: Add logic in `script.js` — use `getElementById` or `querySelector` to wire up interactions

**New Images:**
- Place files in `images/` directory
- Reference in `script.js` `availableBooks[]` array via the `image` property of each book object

**Stylesheet Changes:**
- All styling goes in `style.css`
- Follow the existing CSS custom property pattern (`var(--primary-bg)`, etc.) defined in `:root`
- Respect the responsive grid pattern (`grid-template-columns: repeat(auto-fill, minmax(280px, 1fr))`) for new components

**New Data Fields:**
- Add properties to each object in `availableBooks[]` array in `script.js:29-48`
- Update the `displayBooks()` template string in `script.js:66-79` to render the new field

## Special Directories

**`.git/`:**
- Purpose: Git version control metadata
- Generated: Yes (by `git init`)
- Committed: No (auto-generated)

**`.planning/` (via GSD workflow):**
- Purpose: Planning artifacts — architecture documents, phase plans, reports
- Generated: Yes (by GSD commands like `/gsd-map-codebase`, `/gsd-plan-phase`)
- Committed: Yes (tracked alongside code for context persistence)

---

*Structure analysis: 2026-05-20*

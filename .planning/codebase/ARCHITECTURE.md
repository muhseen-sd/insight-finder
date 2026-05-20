<!-- refreshed: 2026-05-20 -->
# Architecture

**Analysis Date:** 2026-05-20

## System Overview

```text
┌──────────────────────────────────────────────────────────────────┐
│                     index.html  (Shell)                          │
│  Declares DOM structure, loads style.css & script.js             │
├────────────────────────────┬─────────────────────────────────────┤
│                            │                                     │
│         style.css          │          script.js                  │
│     (Presentation)         │       (Behavior/Logic)              │
│  ─ CSS custom properties   │  ─ Data model (availableBooks[])    │
│  ─ Grid layout for cards   │  ─ displayBooks() render function   │
│  ─ Card component styles   │  ─ searchBar "input" listener       │
│  ─ Hover/transition fx     │  ─ Filtering via Array.filter()     │
└────────────────────────────┴─────────────────────────────────────┘
         │                              │
         └──────────┬───────────────────┘
                    ▼
        ┌──────────────────────┐
        │   DOM (Browser)       │
        │  #books-list <ul>     │
        │  .book-card <div>     │
        └──────────────────────┘
```

## Component Responsibilities

| Component | Responsibility | File |
|-----------|----------------|------|
| HTML Shell | Declares page structure, links CSS and JS, defines the search input and books list container | `index.html` |
| CSS Stylesheet | All visual presentation: layout grid, card styling, color scheme via CSS custom properties, transitions, responsive breakpoints | `style.css` |
| JavaScript Logic | Data model, rendering, search/filter controller; no external dependencies | `script.js` |

## Pattern Overview

**Overall:** Vanilla single-page interactive filter — no framework, no build tooling.

**Key Characteristics:**
- Three-tier flat architecture: HTML (structure) → CSS (presentation) → JS (behavior)
- Data-driven DOM rendering: the `availableBooks` array is the single source of truth
- Reactive filtering via the `input` event: keystroke-triggered re-render replaces entire list
- No routing, no state management library, no server communication
- All logic resides in a single 226-line `script.js` file (including commented-out learning notes)

## Layers

**HTML Layer:**
- Purpose: Declares the static document structure and links external resources
- Location: `index.html`
- Contains: `#search-bar` input, `#books-list` container, footer disclaimer
- Depends on: CSS and JS files loaded via `<link>` and `<script>`
- Used by: browser rendering engine

**CSS Layer:**
- Purpose: Provides all visual styling including responsive grid layout, card components, typography, and hover interactions
- Location: `style.css`
- Contains: CSS custom properties (`:root`), grid layout, book-card component styles, transitions
- Depends on: Nothing (standalone stylesheet)
- Used by: `index.html` via `<link rel="stylesheet">`

**JavaScript Layer:**
- Purpose: Manages the book data model, renders HTML strings to DOM, handles user input for filtering
- Location: `script.js`
- Contains: `availableBooks[]` data array, `displayBooks()` render function, `input` event listener with `.filter()` logic
- Depends on: Browser DOM APIs (`getElementById`, `innerHTML`, `addEventListener`)
- Used by: `index.html` via `<script>` tag

## Data Flow

### Primary Request Path (Page Load)

1. Browser parses `index.html`, loads `style.css` and `script.js` (`index.html:7,22`)
2. `script.js` initializes `availableBooks[]` array (18 objects) (`script.js:29-48`)
3. `displayBooks(availableBooks)` called once immediately (`script.js:86`)
4. Inside `displayBooks`, `.map()` converts each book object to an HTML string (`script.js:62-80`)
5. HTML strings are `.join('')`ed and assigned to `booksList.innerHTML` (`script.js:82-83`)

### Search/Filter Flow

1. User types in `#search-bar` input field (`index.html:13`)
2. `input` event fires on `searchBar` (`script.js:90`)
3. `event.target.value` is read and converted to lowercase (`script.js:93`)
4. `availableBooks.filter(...)` runs, checking `book.name.toLowerCase().includes(searchText)` (`script.js:96-98`)
5. Filtered array passed to `displayBooks(filteredBook)` (`script.js:100`)
6. Full re-render of `#books-list` innerHTML with matching results

**State Management:**
- No persistent state — the source array `availableBooks` is never mutated
- Filtering is a pure read operation producing a new derived array
- On each keystroke the entire card grid re-renders (no virtual DOM diffing)

## Key Abstractions

**Book Data Model:**
- Purpose: Represents a book listing with all displayable properties
- Pattern: Plain JavaScript object literal with fields `id`, `name`, `category`, `author`, `price`, `image`
- Source: `script.js:29-48`

**Render Function (`displayBooks`):**
- Purpose: Pure function that accepts a books array and renders it to the DOM
- Pattern: `Array.map()` → string concatenation → `.innerHTML` assignment
- File: `script.js:59-84`

**Filter Controller (anonymous callback on `input` event):**
- Purpose: Captures user input, filters data, triggers re-render
- Pattern: Event listener + `Array.filter()` + `String.includes()` (case-insensitive)
- File: `script.js:90-101`

## Entry Points

**Page Load:**
- Location: `index.html` (opened in browser)
- Triggers: User navigates to the HTML file
- Responsibilities: Load assets, initialize data, render initial full book list

**User Search Input:**
- Location: `#search-bar` element in `index.html:13`
- Triggers: Any keystroke (via `input` DOM event)
- Responsibilities: Read input, filter data, re-render filtered results

## Architectural Constraints

- **No server-side:** Entirely client-side; no backend, no API calls, no database
- **No module system:** Single `script.js` file, no ES modules (`import`/`export`), everything in global scope
- **Single-threaded:** Runs in browser's main thread, synchronous DOM operations
- **Full re-render on every keystroke:** No incremental DOM updates; the entire grid is reconstructed on each filter
- **No package manager:** No `package.json`, `node_modules`, or build step — raw HTML/CSS/JS only

## Anti-Patterns

### Global Scope Pollution

**What happens:** All variables (`availableBooks`, `searchBar`, `booksList`) and functions (`displayBooks`) are declared in the global scope.
**Why it's wrong:** No encapsulation; any script could overwrite these variables. No module isolation.
**Do this instead:** Wrap in an IIFE or use ES module `<script type="module">` to keep the scope contained.

### InnerHTML with Untrusted Data

**What happens:** Book data (names, authors, etc.) is interpolated directly into HTML strings without sanitization (`script.js:66-79`).
**Why it's wrong:** If book data ever came from an external source, it would be vulnerable to XSS injection.
**Do this instead:** Use `document.createElement` and `.textContent` for user-facing text, or sanitize HTML entities in template strings.

### Large Commented-Out Learning Code

**What happens:** 87 lines of commented-out learning experiments at the end of `script.js:139-226` — nearly 40% of the file.
**Why it's wrong:** Bloat distracts from actual application logic; no clear separation between working code and scratch work.
**Do this instead:** Remove commented-out code; keep learning notes in a separate file or remove them entirely.

## Error Handling

**Strategy:** None implemented. Filtering a non-existent book name silently returns an empty array and renders an empty grid (no "no results" message).

**Patterns:**
- No try/catch blocks anywhere
- No null/undefined checks on DOM elements
- No fallback for missing book images (broken images show placeholder gray background)

## Cross-Cutting Concerns

**Logging:** None — no `console.log`, `console.warn`, or `console.error` in the active application code (only in commented-out learning code).

**Validation:** None — user input is applied directly to `.filter()` with no length checks or sanitization beyond `.toLowerCase()`.

**Accessibility:** Minimal — semantic HTML (`<ul>` for list), but no ARIA labels, no keyboard navigation enhancements, no focus management during re-render.

---

*Architecture analysis: 2026-05-20*

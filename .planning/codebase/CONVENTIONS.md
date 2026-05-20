# Coding Conventions

**Analysis Date:** 2026-05-20

## Naming Patterns

**Files:**
- `kebab-case` for all file names: `index.html`, `style.css`, `script.js`
- No framework-specific naming conventions detected

**Functions:**
- `camelCase` used for function names: `displayBooks()`, `squareNums()`, `cubeNums()`, `shortWords()`, `longWords()`, `adults()`
- Function names follow verb+noun pattern: `displayBooks`, `squareNums`, `cubeNums`
- Event handler callbacks are anonymous arrow functions defined inline

**Variables:**
- `camelCase` for all variable names (both `let` and `const`)
- Descriptive names used: `availableBooks`, `searchBar`, `booksList`, `htmlStrings`, `finalHTML`, `searchText`, `filteredBook`
- `const` preferred for DOM references and computed values: `const searchBar`, `const booksList`
- `let` used for mutable data: `let availableBooks`, `let htmlStrings`

**Types:**
- No TypeScript types used
- No JSDoc type annotations present
- Object shapes defined implicitly through literal construction

## Code Style

**Formatting:**
- No automated formatter configured (no `.prettierrc`, `biome.json`, or `.editorconfig` found)
- 4-space indentation used throughout
- Semicolons used at end of statements
- Commas used in trailing position in arrays and objects
- Curly braces on same line for blocks and functions

**Linting:**
- No linting configuration detected (no `.eslintrc*`, `eslint.config.*`)
- No `package.json` present — vanilla JS project without Node.js tooling

## Import Organization

**Order:**
- No import/export statements present — plain vanilla JavaScript
- All code defined in a single `script.js` file
- DOM loaded via `<script>` tag at end of `<body>` in `index.html`

**Path Aliases:**
- Not applicable — no module system or bundler in use

## Error Handling

**Patterns:**
- No explicit error handling (`try/catch` or `if/else` guards) present in the codebase
- `displayBooks()` assumes `booksArray` is a valid array and `booksList` DOM element exists — no null checks
- Event listener does not guard against `event.target.value` being null/undefined
- No fallback behavior if `getElementById` returns `null` (e.g., if DOM IDs change)

**Missing:**
- `displayBooks()` — called with `filteredBook` from `.filter()` which always returns an array, but no validation of DOM element existence
- `searchBar.addEventListener("input", ...)` — assumes `searchBar` is not null
- `book.image` URL is rendered directly — no error handling for broken image links

## Logging

**Framework:** None — `console.log` used for learning/debugging only

**Patterns:**
- `console.log(elders)`, `console.log(teenagers)` — used in commented-out learning section only
- No structured logging, no log levels, no error logging

## Comments

**When to Comment:**
- Top-of-file block comment describes high-level requirements and implementation plan (lines 1-26)
- Section header comments mark logical sections: `// Get the elements from HTML file`, `// Write the display function`
- Inline comments explain individual operations: `// Filter the book list...`, `// Local Currency Format`
- (Commented-out code) Large "Learning Phase" section (lines 140-226) contains tutorial-style code exercises

**JSDoc/TSDoc:**
- Not used anywhere in the codebase
- No function-level documentation comments

## Function Design

**Size:**
- Small single-purpose functions: `displayBooks()` (25 active lines), event callback (10 active lines)
- Helper functions in comments follow single-responsibility principle (e.g., `isEven`, `isOdd`, `shortWords`, `longWords`, `adults`, `squareNums`, `cubeNums`)

**Parameters:**
- Named parameters only — no destructuring, no default values, no rest params used
- `displayBooks(booksArray)` — single array parameter
- Helper functions use single element parameter: `function isEven(evenNum)`, `function shortWords(findWords)`

**Return Values:**
- `displayBooks()` returns `undefined` — acts as a void function that operates via DOM side-effect
- Filter/map callbacks return boolean or string values
- Arrow functions with implicit returns used in chained methods: `book => { return ... }`, `book.name.toLowerCase().includes(searchText)`

## Module Design

**Exports:**
- No ES module exports — plain script loaded globally via `<script>` tag
- All variables are in the global script scope
- Single-file architecture: all JS logic in `script.js`

**Barrel Files:**
- Not applicable

## HTML Conventions

- Semantic elements used: `<header>`, `<footer>`, `<h1>`, `<input>`, `<ul>`
- CSS classes follow `kebab-case`: `book-card`, `card-cover`, `card-details`, `book-title`, `book-author`, `category-badge`, `book-price`, `book-img`, `site-footer`
- `id` attributes use `kebab-case`: `search-bar`, `books-list`
- Single responsibility per HTML element — minimal nesting
- Footer uses `⚠️` emoji for visual disclaimer emphasis
- The `<ul id="books-list">` is repurposed as a grid container (CSS overrides default list styling), though cards rendered via JS create `<div>` children, not `<li>` children

## CSS Conventions

- CSS custom properties defined in `:root` for theming: `--primary-bg`, `--card-bg`, `--text-main`, `--text-muted`, `--accent-color`, `--shadow`, `--border-radius`
- Class-based selectors preferred over ID selectors for reusable styles
- BEM-like class naming: `.book-card`, `.book-title`, `.book-author`, `.book-img`, `.card-cover`, `.card-details`
- CSS Grid for layout (`#books-list` with `grid-template-columns: repeat(auto-fill, minmax(280px, 1fr))`)
- Transitions on hover states for card lift effect (`transform: translateY(-5px)`) and image zoom (`transform: scale(1.05)`)
- `box-sizing: border-box` global reset applied via universal selector
- No CSS preprocessor or postprocessor in use

## Git Conventions

- Conventional commit messages observed:
  - `b64dc19` — `Uploading an InsightFilter app...` (initial import)
  - `2f17598` — `Changeed some images` (note: typo in "Changed")
  - `995c942` — `corrected some spellings` (lowercase, past tense)
- No consistent commit message prefix convention (`feat:`, `fix:`, etc.)

---

*Convention analysis: 2026-05-20*

# Testing Patterns

**Analysis Date:** 2026-05-20

## Test Framework

**Runner:**
- No test framework detected
- No `package.json`, `jest.config.*`, `vitest.config.*`, or any test configuration present

**Assertion Library:**
- None detected

**Run Commands:**
```bash
# No test commands available — no test infrastructure configured
```

## Test File Organization

**Location:**
- No test files found anywhere in the codebase
- No test directory exists
- No pattern established for test file placement

**Naming:**
- No test files found — no naming convention established
- Common conventions that could be adopted: `*.test.js`, `*.spec.js`, or `__tests__/*.js`

**Structure:**
```
# Current state — no test structure exists
project-root/
├── index.html
├── style.css
└── script.js    # Uncovered by tests
```

## Test Structure

**Suite Organization:**
- No test suites exist
- No testing patterns established in the codebase

**Patterns:**
- Setup: Not applicable
- Teardown: Not applicable
- Assertion: Not applicable

## Mocking

**Framework:** None detected

**What to Mock (recommended for this codebase):**
- DOM elements — `document.getElementById` returning mock elements
- `booksList.innerHTML` — verify correct HTML string is rendered
- `event.target.value` — simulate search input values
- Book data — use a subset of test fixtures instead of the full 18-item array
- Image URLs — to avoid network-dependent tests

**What NOT to Mock (recommended):**
- Core filter/map logic — test these as pure functions by providing test arrays directly
- `toLocaleString()` — test the number formatting outputs end-to-end

## Fixtures and Factories

**Test Data:**
No test fixtures currently exist. The production data in `script.js` (lines 29-50) could serve as fixture data:

```javascript
// Example of current data that could be extracted as fixtures:
let availableBooks = [
    {id: 1, name: "Atomic Habit", category: "Habit", author: "James Clear", price: 7000, image: "..."},
    // ... 18 books total
];
```

**Recommendation:**
- Extract the `availableBooks` array into a separate data file (e.g., `data/books.js`) that can be imported by both the app and tests
- Create factory functions for generating minimal book objects in tests

## Coverage

**Requirements:** None — no coverage tool configured

**View Coverage:**
- No coverage reporting available
- Recommended tool: `c8` (for ES module projects) or built-in Jest/Vitest coverage

## Test Types

**Unit Tests:**
- **Scope:** Not present
- **What could be unit-tested:**
  - `displayBooks(booksArray)` — verify correct HTML string output and `innerHTML` assignment
  - `book.name.toLowerCase().includes(searchText)` filter logic — pure function test
  - `book.price.toLocaleString()` — currency formatting verification
  - `booksArray.map(...).join('')` — HTML template generation correctness

**Integration Tests:**
- **Scope:** Not present
- **What could be integration-tested:**
  - Search bar `input` event triggering correct filtered display
  - Full render cycle: data → displayBooks() → DOM update → user sees cards

**E2E Tests:**
- **Framework:** Not used
- **Recommended tool:** Playwright or Cypress for testing the complete user flow:
  1. Page loads and displays all 18 books
  2. Typing in search bar filters visible books in real-time
  3. Empty search shows no results (or all results)
  4. Case-insensitive matching works correctly

## Common Patterns

**Async Testing:**
No async operations exist in the current codebase — all operations are synchronous. Image loading via `<img>` tags occurs asynchronously in the browser but is not handled in JavaScript.

**Error Testing:**
No error paths exist in the current codebase. Potential error scenarios that could be tested:
- `booksArray` is `null` or `undefined`
- `booksList` DOM element doesn't exist
- Book objects missing required fields (name, category, author, price)
- `searchBar` element not found (returns `null`)

## Recommendations for Adding Tests

**If using plain JavaScript with Node.js:**
```
npm init -y
npm install --save-dev jest
# or
npm install --save-dev vitest
```

**If using a browser test runner:**
```
# Include QUnit or Mocha via CDN in a test HTML page
```

**Suggested first test file structure:**
```
project-root/
├── tests/
│   ├── displayBooks.test.js    # Tests for rendering logic
│   ├── filter.test.js           # Tests for search/filter logic
│   └── data/
│       └── fixtures.js          # Shared test fixtures
```

**What to test first (priority order):**
1. `displayBooks()` produces correct HTML structure for a given book array
2. Filter callback correctly matches book names case-insensitively
3. Empty/missing book array is handled gracefully
4. Number formatting (`toLocaleString`) produces correct Nigerian Naira format

---

*Testing analysis: 2026-05-20*

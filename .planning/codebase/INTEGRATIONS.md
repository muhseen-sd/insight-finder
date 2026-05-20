# External Integrations

**Analysis Date:** 2026-05-20

## APIs & External Services

**Image CDNs (book cover images used as `<img>` `src`):**
- **OpenLibrary Covers API** — `https://covers.openlibrary.org/b/isbn/{isbn}-M.jpg`
  - Used to fetch book cover images by ISBN for books in the dataset (`script.js` lines 30, 31, 32, 38, 39, 41, 43, 46, 47)
  - No SDK, no API key, no authentication required
  - Direct image URLs used in HTML `<img src="...">` tags
- **Unsplash** — `https://images.unsplash.com/photo-{id}?auto=format&fit=crop&q=80&w=600`
  - Used for two placeholder book cover images (`script.js` lines 41, 44)
  - No SDK, no API key, no authentication required
  - Direct image URLs used in HTML `<img src="...">` tags

## Data Storage

**Databases:**
- None — All data is hardcoded as a JavaScript array in `script.js` (`availableBooks`, lines 29–48). No database, no API backend, no server-side storage.

**File Storage:**
- Local filesystem only — 9 static image assets stored in `images/` directory. PNG and WebP formats.

**Caching:**
- Not applicable — no caching layer implemented. The browser's native HTTP cache handles any CDN-image caching.

## Authentication & Identity

**Auth Provider:**
- None — no authentication system. No user accounts, no login, no sessions.

## Monitoring & Observability

**Error Tracking:**
- None — no error tracking service (Sentry, LogRocket, etc.) detected.

**Logs:**
- No structured logging. No server-side logging (no backend). Browser console is the only debugging channel.

## CI/CD & Deployment

**Hosting:**
- Not configured — no deployment configuration detected. The project is local-only at this stage.

**CI Pipeline:**
- None — no CI configuration files detected (no GitHub Actions, Travis, CircleCI, etc.).

## Environment Configuration

**Required env vars:**
- None — the application has zero environment variable dependencies.

**Secrets location:**
- Not applicable — no secrets, API keys, or tokens used in this project.

## Webhooks & Callbacks

**Incoming:**
- None — no webhook endpoints. No backend server.

**Outgoing:**
- None — no outgoing webhooks or callback URLs configured.

---

*Integration audit: 2026-05-20*

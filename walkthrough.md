# Security Summary

- **Reviewed files**: 14 core backend, database, security rules, and frontend modules (`server.ts`, `server/security.ts`, `server/legalDb.ts`, `server/aiEngine.ts`, `server/importParser.ts`, `firestore.rules`, `firebase-blueprint.json`, `src/firebase.ts`, `src/contexts/FirebaseContext.tsx`, `src/services/cloudSync.ts`, `src/services/storage.ts`, `src/services/questionsService.ts`, `src/services/knowledgeBaseService.ts`, `src/components/LegalKnowledgeAdminView.tsx`, `src/components/Header.tsx`, `src/components/AccessAnywhereModal.tsx`) plus dependency advisories (`bun audit`).
- **Issues resolved**: 5 verified risks fixed directly across the server, parser, database layer, and administrative interface.
- **Database rules**: Firestore security rules passed rule validation (`npx eslint firestore.rules`, 0 errors/warnings) with strict owner-only isolation and verified-email checks.
- **Remaining dependency notice**: `bun audit` flags two advisories in the optional `@grpc/grpc-js@1.9.16` package bundled inside `firebase` (`@firebase/firestore`), which is only used for Node gRPC server connections; JurisMentor uses Firebase strictly inside the browser over HTTPS WebChannel, so that server gRPC transport is inactive at runtime.

| Finding | Severity | Resolution | Status |
| :--- | :--- | :--- | :--- |
| Unauthenticated Knowledge Base administrative edits | High | Added cryptographic Firebase ID token verification (`RS256` against Google public x509 certificates) and authorized admin email allowlist (`requireAdmin` + `ADMIN_EMAILS`) on all mutating `/api/kb/*` endpoints, plus Bearer auth headers and read-only session banner in the Admin console. | Resolved |
| Unfiltered request spreads, prototype-key pollution, and missing PDF/payload bounds | High | Replaced raw `req.body` spreads with strict allowlist validators (`server/security.ts`), bounded global JSON payload size to `1 MB` (`15 MB` scoped strictly to PDF/bulk imports), capped PDF extraction at `10 MB` / `%PDF-` magic header / `250` pages, and guarded `tutorCache` and CSV header parsing against `__proto__` / `constructor` / `prototype` keys. | Resolved |
| Stored unsafe external source links (`javascript:` / non-HTTP URLs) | High | Enforced `http:` / `https:` protocol validation (`sanitizeHttpUrl` on server ingestion/imports and `safeExternalHref` on rendered links in `LegalKnowledgeAdminView`). | Resolved |
| Missing rate limits and verbose upstream error disclosure on AI/TTS endpoints | Medium | Added per-IP sliding-window rate limiters (`trust proxy` aware) across `/api/tts*`, `/api/tutor`, `/api/performance/analyze-errors`, `/api/questions/auto-update`, and `/api/kb/*` mutations; removed `rawError` and internal `errorMessage` fields from public HTTP responses. | Resolved |
| Weak production check on source ZIP export and missing HTTP hardening headers | Medium | Added `X-Content-Type-Options: nosniff`, `Referrer-Policy`, `Permissions-Policy`, `Cross-Origin-Opener-Policy: same-origin-allow-popups`, disabled `X-Powered-By`, and strengthened `/api/export-project-zip` to block on `NODE_ENV=production`, Render/cloud env flags, `onrender.com` / `ais-pre-*` hosts, and secret key/cert extensions (`.env*`, `.pem`, `.key`, `.p12`). | Resolved |

## Safeguards Verified

| Safeguard | Scope | Status |
| :--- | :--- | :--- |
| Firebase Firestore owner isolation & schema validation | All user collections under `users/{userId}/*` | Verified (`npx eslint firestore.rules` clean; default-deny + `request.auth.uid == userId` + `email_verified`) |
| Preview iframe & Google popup sign-in compatibility | AI Studio preview iframe + Render web deployment | Verified (no `X-Frame-Options` block; `same-origin-allow-popups` enabled) |
| Client-side DOM & script injection hygiene | React components (`src/**`) | Verified (no `dangerouslySetInnerHTML`, `innerHTML`, `eval`, or client-exposed secret keys) |
| Server-side secret isolation | Gemini, OpenAI, Google Cloud TTS, and ElevenLabs API keys | Verified (all keys remain strictly in `process.env` on the Express server) |

---

## PoC Verification

### 1. Blocking Unauthenticated or Non-Admin Knowledge Base Mutations
- **Before**: Sending `PUT /api/kb/config` or `PATCH /api/kb/questions/:id/status` with `{ "status": "SUSPENSA" }` without credentials succeeded with HTTP `200`, altering the live question bank for all students.
- **After (`server/security.ts` + `server.ts`)**:
  1. Unauthenticated request without an `Authorization: Bearer <token>` header hits `requireAdmin`, which fails closed and responds with HTTP `401` (`Autenticação administrativa obrigatória`).
  2. Forged or tampered JWT tokens fail RSA-SHA256 signature verification against Google's official `securetoken@system.gserviceaccount.com` x509 certificates, or fail `aud` / `iss` / `exp` / `email_verified` checks, returning HTTP `401`.
  3. Valid Firebase tokens from a non-admin student account fail `isAdminEmail(user.email)` and receive HTTP `403` (`Acesso restrito ao administrador autorizado`).
  4. Valid tokens from an authorized admin account (`antonioclaudiofp@gmail.com` or `ADMIN_EMAILS`) pass `requireAdmin` seamlessly via `getAdminRequestHeaders()` in `knowledgeBaseService.ts`.

### 2. Blocking Prototype-Pollution Keys and Malformed Question/Config Payloads
- **Before**: Submitting `PUT /api/kb/questions/:id` with `{ "__proto__": { "polluted": true }, "correctAnswer": "Z" }` or importing a CSV with a `__proto__` header wrote unvalidated keys directly into `legal-knowledge-db.json` and object prototypes; calling `getTutorCache("__proto__")` resolved `Object.prototype` properties.
- **After (`server/security.ts`, `server/legalDb.ts`, `server/importParser.ts`)**:
  1. `sanitizeQuestionUpdatePayload` only copies allowlisted fields (`topic`, `subtopic`, `subject`, `statement`, `options`, `correctAnswer`, `justification`, `jurisprudence`, `professorTip`, `validationStatus`, `difficultyLevel`) and rejects invalid answers (`"Z"`) with HTTP `400`.
  2. `LegalDatabaseStore.isSafeCacheKey` rejects `"__proto__"`, `"constructor"`, and `"prototype"`, and uses `Object.hasOwn(this.db.tutorCache, key)`.
  3. `parseCsvRows` checks `isSafeObjectKey(header)` before assigning row properties, ignoring prototype-polluting column headers.

### 3. Rejecting Stored `javascript:` Links and Fake PDF Payloads
- **Before**: Posting `{ "title": "Norma Teste", "shortName": "NT", "discipline": "Direito Civil", "officialSourceUrl": "javascript:alert(document.domain)" }` stored an executable URI that was bound directly to `<a href={n.officialSourceUrl}>` in `LegalKnowledgeAdminView`. Sending arbitrary non-PDF base64 data to `/api/kb/import/extract-pdf` reached the PDF parser unconditionally.
- **After**:
  1. `validateNormPayload`, `validateArticlePayload`, `validateJurisprudencePayload`, and `processImportApi` pass URLs through `sanitizeHttpUrl`, coercing any non-`http:`/`https:` scheme to the safe official fallback URL (`https://www.planalto.gov.br/ccivil_03/`, etc.), and `safeExternalHref` applies the same check defensively before rendering `<a>` tags.
  2. `validatePdfBuffer` verifies decoded byte size (`<= 10 MB`) and checks for the `%PDF-` signature before invoking `extractTextFromPdfBuffer` (which caps traversal at `250` pages).

### 4. Protecting AI/TTS Quotas & Hiding Raw Upstream Errors
- **Before**: High-frequency requests to `/api/tts`, `/api/tutor`, or `/api/questions/auto-update` had no rate cap, and failed TTS calls returned upstream provider `rawError` strings directly in JSON responses.
- **After**:
  1. Per-IP sliding-window limiters (`createRateLimiter`) enforce `45/min` on `/api/tts*`, `30/min` on `/api/tutor`, `15/5min` on `/api/performance/analyze-errors`, and `12/10min` on `/api/questions/auto-update`, responding with HTTP `429` + `Retry-After` (and graceful local speech fallback for TTS).
  2. Upstream exception details stay on server logs only; public `/api/tts*`, `/api/tutor`, and `/api/kb/overview` responses return sanitized user-facing messages without `rawError` or `errorMessage`.

### 5. Locking Down Source ZIP Export in Deployed Environments
- **Before**: `/api/export-project-zip` checked only `process.env.NODE_ENV === 'production'`, which would fail to block downloads if an external host started the server without `NODE_ENV=production`.
- **After**: `isPublicProductionDeployment(req)` blocks export with HTTP `403` whenever `NODE_ENV=production`, `DISABLE_ZIP_EXPORT=true`, Render/Railway/Fly/Vercel platform variables are set, or the request `Host` / `X-Forwarded-Host` matches `.onrender.com` or `ais-pre-*`. Any `.env*` (except `.env.example`), `.pem`, `.key`, `.p12`, and `.log` files are skipped during packaging.

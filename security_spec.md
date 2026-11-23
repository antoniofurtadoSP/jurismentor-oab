# Security Specification & Dirty Dozen Invariants

## 1. Data Invariants
1. Every document under `/users/{userId}` and its subcollections belongs exclusively to `userId` and is strictly readable and writable only when `request.auth != null && request.auth.token.email_verified == true && request.auth.uid == userId`.
2. Parent existence is validated via `exists(/databases/$(database)/documents/users/$(userId))` when creating/updating subcollection records (Master Gate), or `existsAfter(...)` for atomic first-time batch creation.
3. No blanket `isSignedIn()` reads or unbounded `allow list` queries are permitted on `/users` or any subcollection (`allow list` always enforces `resource.data.ownerId == request.auth.uid`).
4. Temporal integrity: `createdAt` on create and `updatedAt` on create/update must equal `request.time` (server timestamps). `createdAt` and `ownerId`/`uid` are immutable on update.
5. All strings, maps, and arrays have strict `.size()` bounds and ID path variables match `^[a-zA-Z0-9_\-]+$` with length `<= 128`.

## 2. The "Dirty Dozen" Attack Payloads (Expected: PERMISSION_DENIED)
1. **Unauthenticated read/write** on `/users/uid1/studyProfile/main` -> DENIED.
2. **Cross-user get/list** by `uid2` on `/users/uid1/simuladoResults/sim1` -> DENIED.
3. **Unverified email write** (`email_verified == false`) on `/users/uid1` -> DENIED.
4. **Shadow/ghost field injection** (`{ ...validStudyProfile, isAdmin: true }`) -> DENIED via `keys().hasOnly(...)`.
5. **Identity spoofing** (`ownerId: "uid2"` inside `/users/uid1/questionMarks/q1`) -> DENIED (`data.ownerId == request.auth.uid`).
6. **Immutable ownerId mutation** on update of `simuladoResults` -> DENIED (`incoming().ownerId == existing().ownerId`).
7. **Forged client timestamp** (`updatedAt: "2020-01-01T00:00:00Z"`) instead of `request.time` -> DENIED.
8. **Path ID poisoning** (1500-char or invalid-char `{questionId}` like `q$1`) -> DENIED via `isValidId()`.
9. **Resource exhaustion string** (`title` > 200 chars in `simuladoResults`) -> DENIED via `.size()` limit.
10. **Unbounded array injection** (`queueRefs` with > 250 elements or non-map element in `activeSessions`) -> DENIED.
11. **Terminal outcome tampering**: mutating `simuladoResults/{id}` score fields after completion -> DENIED (results are immutable once recorded; only delete/recreate or read allowed).
12. **Blanket user directory enumeration**: `list` on `/users` -> DENIED.

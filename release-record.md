# Métis 0.1.0 rebrand verification

Date: 2026-11-12. Source baseline: `7ed4e6c7d11a736f78bc2379c0294b3b345112d0`.

## Delivered

Independent Métis identity across desktop, web, mobile, MCP, documentation, starter notes and package identifiers. The icon depicts one profile within another in pine green and ivory. Runtime storage, native bundle IDs and MCP ports are distinct from other applications. Automatic updates, mobile OTA and telemetry have no inherited service configuration. Onboarding uses a bundled starter vault with no remote Git dependency.

Original Git history, LICENSE and required attribution are preserved. A case-insensitive source scan found the former product names only on the credits page at site/landing/public/creditos.html. The original LICENSE is byte-for-byte unchanged. The Git upstream remote retains the source repository for maintenance.

## Local verification

| Check | Result |
| --- | --- |
| Frozen pnpm install | Passed |
| ESLint | Passed, zero errors or warnings |
| Desktop TypeScript/frontend build | Passed |
| Web build | Passed |
| Documentation build | Passed |
| Landing page build | Passed |
| Locale validation | 21 catalogs, 1,362 English keys |
| Frontend Vitest suite | 678 files, 6,394 passed, 1 skipped |
| Server/packages suite | 48 files, 1,033 passed, 2 skipped; 95.82% line coverage |
| Mobile typecheck and suite | Passed; 461 files, 2,773 tests passed |
| Rust library suite | 1,194 passed, 2 intentionally ignored subprocess helpers |
| Native integration suite | 5 passed: Git remote configuration and web/desktop persistence parity |
| MCP suite | 73 passed |
| Release/AppImage script tests | 16 passed |
| Pages verification script | Passed all checks |
| Development vault mock tests | 4 passed |
| Mobile fork isolation | 3 passed |
| Playwright Chrome smoke | 12 passed: creation, onboarding, autosave and note switching |
| macOS debug bundle | Built successfully: Métis.app, 104.02 MiB |
| Native launch | Observed Métis menus and welcome screen in the prior local build |
| Independent review | Follow-up approved; starter resolves 12 guides, manifest hashes valid, 71 icon files checked |

The final native/web builds include the retained whiteboard and opaque icon. The final native UI reinspection could not run because the computer-use connection closed; native launch was observed before that final packaging pass. Playwright used the installed Chrome browser because installation of the pinned Chromium did not finish. Smoke tests used disposable fixtures, not personal vaults.

## Distribution status and limits

The whiteboard is retained, with vendor license enforcement unchanged. Public application distribution awaits a free tldraw license and configuration of VITE_TLDRAW_LICENSE_KEY. No signed release, website deployment, app-store publication or OTA update was produced.

The macOS bundle is a local debug build. Windows/Linux packaging, physical iOS/Android behavior, notarization and signing are unverified. Mobile GitHub login requires a Métis-owned OAuth client; local folders remain usable. Optional AI services and hosting may have separate costs. GitHub CI results must be checked against the pushed commit; local results do not imply remote CI success.

## Git handoff

Rebrand commit: `31ab0159589f6a3fa36df87b380814199d807a7a`, pushed to main in https://github.com/hdoria/metis. The remote main SHA was confirmed with git ls-remote. Pre-commit ESLint and pre-push build, locale and mobile isolation gates passed.

## Landing and credits follow-up (2026-11-12)

Project provenance is now centralized in site/landing/public/creditos.html. The separate provenance documents were removed and inbound links updated. The root license and dependency notices are unchanged. The native bundle includes the credits page and LICENSE.txt; byte comparisons against their sources passed. Native package metadata and the demo persona now use the independent project identity.

The Portuguese landing contains an interactive note demonstration, accent-insensitive search, related-note navigation, FAQ and real repository links. It has its own test command and CI steps. Verification: landing TypeScript/build and explicit ESLint passed; 3 interaction tests passed; 23 focused mock tests passed; docs and macOS debug package builds passed. HTTP checks returned 200 for the landing, credits and license.

Independent review found no remaining issue after the dedicated landing test command was added to CI. The reviewer verified keyboard navigation, search, empty-state recovery, FAQ and links in installed Chrome, and no horizontal overflow at widths 320, 375, 390, 768 and 1440. Two 375px screenshots were inspected. The CUA host was unavailable; no WebKit or deployed-session visual inspection is claimed.

Hosted private preview: https://metis-segundo-cerebro.blackonyx2.chatgpt.site. The Sites deployment returned succeeded. Public application distribution is still pending the whiteboard license.

The earlier CI run exposed stale fixture expectations after an EOF blank line was removed. The source note is 455 bytes. The index golden now records that size, and the Markdown/Yjs snapshot no longer lists the removed blank-line difference. Two failures were reproduced before correction; 205 package tests and the focused Rust golden test passed afterward. No production logic changed for this correction.

## Vercel landing migration (2026-11-12)

Hugo selected the Popcode team. Production deployment `dpl_2cwVAWc8pfhRF85yGbaWsidr2biF` reached READY at https://metis-landing-roan.vercel.app. It publishes the landing built from main commit `e804c65102fa90fd75a5337fffcc767172e5627f`. The Vercel production build passed; unauthenticated HTTP requests returned 200 for the landing, credits, license, JavaScript, CSS, icon and font. Published HTML, credits and license matched their local artifacts byte for byte. No remote browser inspection is claimed.

Both metisapp.com.br and www.metisapp.com.br are attached to popcode/metis-landing, with ownership verified. DNS is still pending; the authoritative .br delegation now names Cloudflare. Exact CNAME recommendations are recorded in docs/hosting/vercel.md. Custom-domain HTTPS and the live www redirect remain unverified until those DNS records are applied.

The former Sites domain binding was removed, and listing its custom domains returned an empty array. Its owner-private preview remains available as historical fallback. The Sites manifest was archived. GitHub integration rejected the repository connection; deployments currently use the documented CLI workflow.

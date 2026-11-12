# Métis 0.1.0 rebrand verification

Date: 2026-11-12. Source baseline: `7ed4e6c7d11a736f78bc2379c0294b3b345112d0`.

## Delivered

Independent Métis identity across desktop, web, mobile, MCP, documentation, starter notes and package identifiers. The icon depicts one profile within another in pine green and ivory. Runtime storage, native bundle IDs and MCP ports are distinct from other applications. Automatic updates, mobile OTA and telemetry have no inherited service configuration. Onboarding uses a bundled starter vault with no remote Git dependency.

Original Git history, LICENSE and required attribution are preserved. A case-insensitive source scan found the former product names only in NOTICE and legal/UPSTREAM_TRADEMARKS.md. The original LICENSE is byte-for-byte unchanged. The Git upstream remote retains the source repository for maintenance.

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

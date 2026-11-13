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

## Custom-domain activation (2026-11-12)

After Hugo applied DNS, Vercel verified both hostnames as `configured-correctly`. Public resolvers 1.1.1.1 and 8.8.8.8 returned the expected Vercel addresses, and www returned the recommended CNAME. The initial HTTPS handshake had no certificate; `vercel certs issue metisapp.com.br www.metisapp.com.br --scope popcode` successfully issued the managed certificate for both names. TLS 1.3 and hostname validation then passed for both domains.

HTTPS requests for the landing, credits and license returned 200 and matched local artifacts. A request to `https://www.metisapp.com.br/creditos.html?check=domain` returned 308 to `https://metisapp.com.br/creditos.html?check=domain`, preserving path and query. These checks used public DNS addresses with curl's `--resolve`, without disabling certificate validation. The local system resolver still did not resolve the hostnames at verification time; universal propagation is not claimed. No application code or deployed artifact changed.

## Maintainer identity follow-up (2026-11-12)

Current-owner examples, demo notes, fixtures, mock data, design files and package author metadata now use Hugo Dória. The person fixture and its references use hugo-doria. Historical approvals keep their original context through the label upstream maintainer. Credits identify Hugo as the Métis maintainer and author of modifications; provenance, the original source revision and the link to its original trademark policy remain. LICENSE and Git history are unchanged.

The targeted scan found no remaining former-maintainer full name, personal slugs or account handles in tracked current source. Unrelated people and dependency authors are unchanged. Test results: 1,396 desktop tests, 233 mobile tests plus 37 after mention-prefix adjustments, 276 server/package tests, 3 web/index parity tests, 1,194 Rust library tests (2 ignored), 4 Rust parity tests and 3 landing tests passed. Mobile typecheck and landing build passed. UTF-8 fixture sizes, word counts and snippets were regenerated with the normal test harness.

Independent source review found no blocking issue, checked all 35 demo golden entries against physical files and 38 parity byte sizes, and found no behavioral changes beyond example and QA data. Native artifacts and live-site publication are recorded separately after verification.

## Local macOS release package and site update (2026-11-12)

Source commit `c80411d365072e4e1e0749fe1f428b1e5a91aa70` was pushed to main after ESLint and pre-push build, locale and mobile-isolation gates passed. The final native release build included the completed identity changes and regenerated MCP and agent documentation resources. Apple Silicon artifacts are in `src-tauri/target/release/bundle`: `macos/Métis.app` (42,254,738 bytes) and `dmg/Métis_0.1.0_aarch64.dmg` (23,116,257 bytes).

The DMG SHA-256 is `03d02f228b148c17cb7dd795f871f637b8c1d967a9e3d0de17ad6d849abeab07`. `codesign --verify --deep --strict` passed for the original app and the mounted copy. `hdiutil verify` passed; all 69 app files in the mounted DMG matched the source hashes. Credits, LICENSE and icon matched the repository. The binary is arm64 with minimum macOS 11.0; Info.plist retains the framework's default minimum of 10.13. No personal vaults were opened and no native runtime smoke test is claimed.

The signature is ad-hoc. No valid Apple signing identity is installed, notarization was not attempted, and `spctl` rejected the package as expected for this distribution state. The DMG is a local test artifact, not a public release. `docs/macos-local-build.md` records the installation workflow and Apple credentials needed for the next step.

Independent artifact review repeated signature, checksum, read-only mounting and all 69 file comparisons without discrepancies. It confirmed the packaged identity, license, credits and icon, and detached the volume afterward.

Vercel deployment `dpl_8XAnnF5HtAWH9GRg5bnYf7S13wrc` reached READY at https://metisapp.com.br. Its updated credits returned HTTPS 200 with certificate validation enabled and matched the current source byte for byte, including Hugo Dória as maintainer. The former personal identity is absent from that page. The public site does not distribute the local application package.

## License presentation follow-up (2026-11-12)

LICENSE includes a Métis notice naming Hugo Dória for modifications and new branding. The complete AGPL document, including its own copyright, remains byte-for-byte identical. Independent review confirmed the scoped notice and unchanged license body. A new file commit records the current maintainer's actual change without rewriting previous authorship.

GitHub's license detector rejected the notice when placed before the GNU text. Independent reproduction with Licensee 9.20.0 and 10.1.0 found 95.831% similarity for that layout and an exact AGPL-3.0 match when the same notice follows the complete original document. The notice was moved to that footer position to preserve automatic license detection.

The local app and DMG were repackaged with the updated license, retaining the same release executable and ad-hoc signing. The app's strict signature check passed and its bundled LICENSE.txt matched the source. The updated DMG is 23,116,285 bytes with SHA-256 `734e8873fe8d88548e1ebdad12a1118f1de18adf9f544c822ce6c3115fbea916`, superseding the earlier package hashes. Apple signing and notarization remain pending.

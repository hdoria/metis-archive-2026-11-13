# Integration audit — 2026-11-13

This audit covers the tracked configuration, the local production build, and the GitHub repository. It does not claim access to external SaaS dashboards or account-wide installations.

## Sentry setup update — 2026-11-13

Sentry is now configured in Popcode's `metis-desktop` (React) and `metis-native` (Rust) projects. Real test errors reached both projects with readable original frames and source context. The new production build embeds those owned destinations and retains per-user crash-reporting opt-in. PostHog remains unconfigured. This applies to the new build, not previously generated or installed packages; see [setup and verification](sentry-setup.md) and [local package versions](macos-local-build.md).

The initial audit below is preserved as a snapshot taken before provisioning. Its absent-DSN findings and recommendation to create Sentry projects have been superseded by this setup. Other integration findings remain unchanged.

## Runtime telemetry at initial audit

- Sentry integration exists in `src/lib/telemetry.ts` and `src-tauri/src/telemetry.rs`. JavaScript requires `VITE_SENTRY_DSN`; Rust embeds `SENTRY_DSN` at compile time. Both also require the user's crash-reporting opt-in. Neither value was present in the current build environment or effective production environment files.
- PostHog integration exists in `src/lib/telemetry.ts`. It requires `VITE_POSTHOG_KEY` and the user's analytics opt-in. No key was present. Its code defaults to `https://us.i.posthog.com`; `.env.example` suggests the EU host, but that example is not loaded as configuration. No project currently receives Métis product analytics from this build.
- The production frontend scan covered 1,568 JavaScript assets and found no Sentry DSN literals or PostHog project keys. This corroborates the configuration audit; it is not a full network capture of the installed native app.
- If enabled later, desktop PostHog explicitly disables autocapture, pageviews and session recording. Sentry disables default PII and applies a scrubber. These settings are not a claim that every possible error payload has been audited.
- Mobile analytics and crash reporting default to false. Mobile credentials come from `EXPO_PUBLIC_*` or the corresponding build configuration; no mobile telemetry project was provisioned by this task.
- The landing source contains no Sentry/PostHog initialization or analytics script. Hosting access logs are separate from application telemetry.

## tldraw evaluation telemetry

The provided key was cryptographically validated by the installed SDK 4.5.10 as an evaluation license expiring on 2026-11-27. The key remains outside Git. tldraw describes license keys as public, client-validated values in its [license documentation](https://tldraw.dev/community/license).

With the supplied evaluation license, the installed SDK's `LicenseManager` sends a licensing request in production HTTPS environments to `https://cdn.tldraw.com/4.5.10/watermarks/watermark-track.svg`. Its query fields are `version`, `license_type`, `license_id`, `sku`, `url` and `environment`. `license_id` is the ID encoded in the license; `url` is the full `window.location.href`, including any query or fragment. The actual installed source is authoritative for these fields; the general documentation describes trial collection more broadly. This request is independent of the Métis Sentry/PostHog switches.

A controlled execution of the unmodified SDK observed `licensed` for both `tauri://localhost` and an HTTPS production origin. It classified the Tauri origin as development and produced no licensing request there; the HTTPS case attempted the request above. The test intercepted transport and did not send the request externally. An isolated real `TldrawWhiteboard` browser smoke test also produced no external HTTP/WebSocket requests. These checks do not replace a native network capture.

## Repository services and accounts

| Integration | Observed state | Account action |
| --- | --- | --- |
| GitHub Actions | One active workflow, `.github/workflows/ci.yml`; read-only validation, no publishing or paid-service calls. Latest inspected run [passed](https://github.com/hdoria/metis/actions/runs/43336374680). Repository lists zero secrets, variables and environments. | Already uses `hdoria/metis`. |
| Codacy | `.codacy/codacy.config.json` uses local mode with null provider, organization and repository ID. Manual `pnpm codacy:gate`; not invoked by CI or hooks. | None for the current local workflow. |
| CodeScene / Verity | Local thresholds, exclusions and standards. No account endpoint or invocation from current CI/hooks. | None unless those services are adopted. |
| Husky | Local lint/build/localization and update-isolation checks. | No account migration. |
| Claude / Todoist commands | Two manual task commands contain fixed Todoist section IDs and remote POST operations using `TODOIST_API_KEY`. They are not called by the app or CI. Ownership of the IDs was not verified. | Remove or replace those IDs and use a Métis-owned account before invoking these commands. |
| Legacy demo server | `scripts/serve-demo.mjs` binds to `0.0.0.0:5173` and exposes a repository file-reading route without authentication. An old Tailscale hostname appears only in its startup log. This script is not part of the shipped app or current CI. | Review or retire it before use on a network; no remote account is contacted merely by that log. |
| CircleCI | No tracked `.circleci/` or `.chunk/` configuration. Several older documents still describe the previous release process. | Do not create accounts based on those historical descriptions. |
| Lara Translate | Manual translation command; requires `LARA_ACCESS_KEY_ID` and `LARA_ACCESS_KEY_SECRET` if used. | Métis-owned credentials only if translation automation is adopted. |
| Expo / mobile OTA | Owner, EAS project and Apple team are configurable through Métis variables. OTA stays disabled without its own project/profile. | Configure before mobile publishing. |
| Manual OTA publishing | `apps/mobile/scripts/publish-mobile-update.mjs` uploads Sentry sourcemaps and publishes EAS updates. It requires Expo, Sentry and PostHog configuration; the promotion script also expects a main-branch context. Neither is called by current CI. | Use owned destinations and revisit mandatory PostHog settings if analytics stays optional. |
| Manual web sourcemaps | `pnpm upload:web-sourcemaps` uses `SENTRY_URL`, organization/project and an auth token; it skips without that token. This is separate from user telemetry consent. | Configure owned destinations only if this deployment workflow is adopted. |
| Apple signing | Existing Popcode Developer ID and local Keychain notarization profile. | Already configured for the local Mac package. |
| Vercel / DNS | Existing `popcode/metis-landing`, official domain `metisapp.com.br`, Cloudflare DNS. Deployment uses the documented CLI flow. | Already configured; no GitHub autodeployment connection. |
| Payments | No Stripe, PayPal, Paddle or Lemon Squeezy integration found in the project's tracked implementation. | None. |

The executable workflow and hooks take precedence over outdated CircleCI descriptions in `docs/GETTING-STARTED.md`, `docs/ARCHITECTURE.md`, `docs/ABSTRACTIONS.md` and ADR 0268. `docs/web/telemetry.md` also describes an external web deployment, host and local credential paths that were not inspected or adopted. Those documents should be reconciled separately before relying on them for release operations.

All three tracked `.claude/commands` files were inspected. The ADR command is local; the other two contain the Todoist operations above. No executable Linear endpoint, token, team or project configuration was found; remaining Linear references are historical documentation.

Recommended next decisions: provision a Métis project in Popcode's Sentry account if crash reporting is wanted; keep PostHog optional until product analytics are needed. Codacy, CodeScene and Verity do not require account migration merely because their files remain in the repository. No account, consent setting or external service was changed during this audit.

Verification: 59 existing telemetry/configuration tests and 18 whiteboard tests passed. The new native build succeeded. Local sanitized evidence is retained under `src-tauri/target/metis-local-package/tldraw-evaluation-2026-11-13/`.

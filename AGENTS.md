# Métis

Free personal knowledge app. React 19 and TypeScript UI in src/, Tauri 2/Rust in src-tauri/, Expo mobile in apps/mobile/, web/server in apps/, MCP in mcp-server/.

## Workflow

Follow the user's global AGENTS.md. Plan before cross-cutting changes. Keep changes scoped. Run pnpm lint, pnpm build and relevant Vitest tests; run Rust checks for native changes and mobile checks for mobile changes. Use a fresh-context reviewer for release, updater, save and sync changes. Record actual test outcomes and platform limitations. Never claim unavailable checks passed.

## Identity and privacy

Use Métis in display text and metis in machine identifiers. Keep configuration in io.github.hdoria.metis. Never read another application's secrets or modify its settings. Test only disposable vaults. Preserve LICENSE and dependency licenses. Keep project provenance exclusively in site/landing/public/creditos.html, and include that page in distribution resources.

## Distribution

Origin is https://github.com/hdoria/metis. Use Conventional Commits and push verified work to main. GitHub CI validates the fork. Signing, update servers, mobile OTA and analytics require Métis-owned configuration; leave them disabled by default. External maintainers' Linear queues, paid analysis services and deployment credentials are not part of this fork's workflow.

## UI

Reuse existing components and locale catalogs. Apply docs/brand/metis.md. Keep locale placeholders intact. Add behavioral tests when changing logic; branding-only replacements rely on build, localization and visual checks.

# Métis development and distribution

CI validates desktop, web, server and mobile code on pushes and pull requests. It has read-only repository permissions and publishes no application, update or website.

Install Node.js 26, pnpm 10.33 and the Rust toolchain, then run `pnpm install --frozen-lockfile`. The local hooks lint before commit and check the desktop build, locales and mobile update isolation before push.

Desktop signing and update delivery are disabled until this project has its own release keys and endpoint. Mobile OTA is disabled without `METIS_EAS_PROJECT_ID`. To configure your own mobile distribution, set `METIS_EXPO_OWNER`, `METIS_EAS_PROJECT_ID`, and `METIS_APPLE_TEAM_ID` in your local environment or CI secrets. Never reuse another project's signing credentials or update project.

Analytics are optional and unconfigured. Public ingestion settings belong in the documented environment variables; private upload/signing credentials never belong in the app manifest or repository.

Mobile GitHub sign-in requires `EXPO_PUBLIC_GITHUB_CLIENT_ID` from your own GitHub OAuth application with device flow enabled. Without it, local folders still work and GitHub sign-in reports that it is not configured.

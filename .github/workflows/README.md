# Métis validation

`ci.yml` validates frontend, mobile and Rust changes. It does not publish builds, Pages, mobile updates or releases. Configure Métis-owned signing and distribution separately before enabling release automation.

Local entry points: `pnpm lint`, `pnpm build`, `pnpm build:web`, `pnpm l10n:validate`, `pnpm exec vitest run`, `pnpm mobile:typecheck`, `pnpm mobile:test`, and `cargo test --manifest-path src-tauri/Cargo.toml --locked -- --test-threads=4`.

# Integration cleanup and CI verification implementation plan

> **For agentic workers:** Follow the task ownership below and the project's AGENTS.md. Use systematic debugging for CI failures and independent final review. The user authorized execution; no additional approval gate is required for this scoped cleanup.

**Goal:** Remove obsolete account-bound tooling, document the actual workflow and verify CI on the final Métis commit.

**Architecture:** Retain the existing read-only GitHub Actions validation workflow. Diagnose missing push runs before changing triggers. Remove unused Todoist commands and the legacy network demo server; replace misleading operational documentation with the current local hooks, GitHub CI and local release process.

**Tech Stack:** React 19, TypeScript, Tauri 2/Rust, pnpm 10.33, Node 26, GitHub Actions.

**Spec:** User-approved priorities in the conversation and `docs/integrations-audit.md`. This is phase one: cleanup and CI. Release/updater automation and account provisioning for mobile or analytics remain separate tasks.

## Global constraints

- No credentials in Git, logs or reports; inspect credential mechanism metadata only.
- Preserve personal data, installed apps, signed artifacts and current consent settings.
- Keep release publishing and the desktop updater disabled in this phase.
- Preserve useful historical ADRs, marking superseded decisions explicitly.
- Work on the existing clean main checkout as authorized by the user's Git conventions; do not rewrite history.

## Review focus

- Deleted tooling must have no active callers or dangling developer instructions.
- Documentation must not imply that old CircleCI/release workflows still run.
- A dispatch or successful older commit does not prove the final SHA passed.
- GitHub trigger failures must be distinguished from job/test failures.
- No fix may weaken tests, repository permissions or telemetry privacy to pass CI.

### Task 1: Retire obsolete tooling and reconcile documentation

**Ownership:** cleanup worker: two Todoist command files, `scripts/serve-demo.mjs`, `docs/GETTING-STARTED.md`, `docs/ARCHITECTURE.md`, `docs/ABSTRACTIONS.md`, `docs/PERFORMANCE.md`, ADR 0268. Root: `.github/SETUP.md`, `docs/integrations-audit.md`, release record and this plan.

- [ ] Confirm references and consumers of the three files before removing them.
- [ ] Remove the unused commands/server; update current instructions, preserving historical context.
- [ ] Scan references and run `git diff --check`; do not add tests that merely mirror documentation or file deletion.

### Task 2: Diagnose and validate CI

**Ownership:** root; explorer supplies read-only workflow/code findings.

- [ ] Inspect GitHub repository/workflow state, exact commit, skip markers and authentication transport metadata without exposing secrets.
- [ ] Consult official GitHub trigger documentation and form an evidence-backed hypothesis.
- [ ] Exercise the existing read-only workflow through the appropriate supported event; fix actual failures at their source.
- [ ] Apply only changes justified by evidence. Record any external limitation separately from completed fixes.

### Task 3: Review and publish the verified change

- [ ] Fresh reviewer checks the final diff, deletion reachability and CI claims.
- [ ] Run repository-required lint/build/locales and focused checks; inspect all outputs.
- [ ] Commit using Conventional Commits, push main, verify remote SHA and inspect the CI run for that exact SHA.
- [ ] Record final outcome and remaining phase-two work.

**Stopping condition:** Cleanup is reviewed and pushed, with CI confirmed for the final SHA; otherwise stop only at a concrete external blocker that requires user action, documenting what remains unverified.

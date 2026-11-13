# Métis development and distribution

The `Métis CI` workflow validates desktop, web, server and mobile code. Its configured events are pushes to main, pull requests targeting main and manual dispatch. It has read-only repository permissions and publishes no application, update or website. Verify an actual run for the pushed commit; the presence of these triggers alone does not prove that GitHub started one.

Install Node.js 26, pnpm 10.33 and the Rust toolchain, then run `pnpm install --frozen-lockfile`. The local hooks lint before commit and check the desktop build, locales and mobile update isolation before push.

Local macOS packages are signed and notarized using Popcode's Developer ID and Keychain profile; see `docs/macos-local-build.md`. Automatic release publishing and desktop update delivery remain disabled until a separate release workflow, updater key and endpoint are configured. Mobile OTA is disabled without `METIS_EAS_PROJECT_ID`. To configure your own mobile distribution, set `METIS_EXPO_OWNER`, `METIS_EAS_PROJECT_ID`, and `METIS_APPLE_TEAM_ID` in your local environment or CI secrets. Never reuse another project's signing credentials or update project.

Desktop error reporting is configured in Popcode's Sentry account and still requires user opt-in; see `docs/sentry-setup.md`. Product analytics remain optional and unconfigured. Public ingestion settings belong in the documented environment variables; private upload/signing credentials never belong in the app manifest or repository.

Mobile GitHub sign-in requires `EXPO_PUBLIC_GITHUB_CLIENT_ID` from your own GitHub OAuth application with device flow enabled. Without it, local folders still work and GitHub sign-in reports that it is not configured.

## Verify CI delivery

A fork can retain GitHub's initial workflow activation gate even when the REST API reports Actions enabled and the workflow active. On 2026-11-13, the authenticated Actions page showed “Workflows aren't being run on this forked repository.” After reviewing the sole read-only validation workflow, enabling it through that banner produced “Actions Enabled.” This was the missing repository activation step; no workflow permissions or credentials were expanded.

For a newly created fork, inspect its Actions page for that activation banner before diagnosing YAML or changing credentials. Then push a normal commit and confirm a run with `event: push` for its exact SHA.

To start the existing read-only validation explicitly:

```sh
gh workflow run ci.yml --repo hdoria/metis --ref main
gh run list --repo hdoria/metis --workflow ci.yml --limit 5 \
  --json databaseId,headSha,event,status,conclusion,url
```

Compare `headSha` with `git rev-parse HEAD` and the remote main SHA. Watch the matching run with `gh run watch RUN_ID --repo hdoria/metis --exit-status`. A successful older run, local hook, or different SHA does not validate the current commit. Manual dispatch is supported by the existing workflow and does not enable public publishing or change credentials.

See [GitHub workflow triggers](https://docs.github.com/en/actions/how-tos/write-workflows/choose-when-workflows-run/trigger-a-workflow) for event semantics. In this investigation the SSH user was verified; the cause was the fork activation gate, not GitHub's `GITHUB_TOKEN` recursion rule.

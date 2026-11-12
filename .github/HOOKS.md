# Git hooks

Husky installs the hooks during `pnpm install`. The pre-commit hook runs ESLint. The pre-push hook checks the production desktop build, locale consistency and mobile update isolation. The GitHub workflow runs the broader test suites. No third-party paid analysis account is required.

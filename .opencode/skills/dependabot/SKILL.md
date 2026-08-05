---
name: dependabot
description: |
  Manage Dependabot configuration and vulnerability alerts for this repository.
  Use when updating .github/dependabot.yml, checking the dependency update
  schedule, adding/removing package groups, or responding to Dependabot PRs.
---

# Dependabot

Manages GitHub Dependabot for automated dependency updates and security patches.

## Configuration

Config lives at `.github/dependabot.yml`. Current setup:

- **Ecosystem**: npm
- **Directory**: `/` (root)
- **Schedule**: Weekly, Monday 09:00 Asia/Manila
- **Limit**: 10 open PRs
- **Strategy**: `increase` (bumps the version range)
- **Labels**: `dependencies`

### Package Groups

Dependabot groups related packages into single PRs to reduce noise:

- **react**: react, react-dom, react-router-dom, react-scripts
- **testing-library**: @testing-library/*

## Common Tasks

### Check Vulnerability Status
Run `gh repo view OverdriveNGain/portfolio` or visit:
https://github.com/OverdriveNGain/portfolio/security/dependabot

### Add a New Dependency Group
Edit `.github/dependabot.yml` → add to the `groups` map under the npm update:

```yaml
groups:
  example-group:
    patterns:
      - "example-package"
      - "example-package-*"
```

### Change Update Schedule
Edit the `schedule` block in `.github/dependabot.yml`.

### Update Open PR Limit
Set `open-pull-requests-limit` to a different number (GitHub defaults to 5).

## Rules
- Always check `package.json` before suggesting dependency changes.
- Group related packages to minimize PR noise.
- Dependabot config changes require a commit to `main`.

---
name: dependabot
description: |
  Manage Dependabot configuration and vulnerability alerts for this repository.
  Use when updating .github/dependabot.yml, checking the dependency update
  schedule, adding/removing package groups, triaging alerts, or responding to
  Dependabot PRs.
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

## Authentication

The GitHub API requires authentication to access Dependabot alerts. Try in this order:

1. **`gh` CLI** (preferred): `gh auth status` — if signed in, use `gh api` for all calls.
2. **Git credential fallback**: If `gh` is absent or not signed in, extract a token from git:
   ```bash
   TOKEN=$(git credential fill <<< "protocol=https
   host=github.com" 2>/dev/null | grep password= | cut -d= -f2)
   ```
   Then prefix curl calls with `-H "Authorization: token $TOKEN"`.
3. **Install `gh`**: `brew install gh` then `gh auth login`.

All API calls use `https://api.github.com/repos/OverdriveNGain/portfolio/dependabot/alerts`.

## Common Tasks

### List All Open Alerts
```bash
curl -s -H "Authorization: token $TOKEN" \
  -H "Accept: application/vnd.github+json" \
  "https://api.github.com/repos/OverdriveNGain/portfolio/dependabot/alerts?per_page=100&state=open"
```

### Fetch a Specific Alert by Number
```bash
curl -s -H "Authorization: token $TOKEN" \
  -H "Accept: application/vnd.github+json" \
  "https://api.github.com/repos/OverdriveNGain/portfolio/dependabot/alerts/5"
```
Use `| python3 -m json.tool` to pretty-print.

### Check Vulnerability Status
Visit https://github.com/OverdriveNGain/portfolio/security/dependabot (browser) or use the API above to list/filter alerts. Key fields per alert: `number`, `state`, `security_advisory.severity`, `security_advisory.summary`, `security_advisory.cve_id`, `security_vulnerability.package.name`, `security_vulnerability.vulnerable_version_range`, `security_vulnerability.first_patched_version`.

### Addressing an Alert

When fixing a specific Dependabot alert:

1. **Fetch alert details** using the API above. Note the package name, vulnerable range, and patched version.
2. **Trace the dependency path**: `npm ls <package>` to see which direct dependency pulls it in.
3. **Choose a fix strategy**:
   - **Transitive dep via a lockfile-only path**: Add an `"overrides"` field in `package.json` to force the patched version. Example: `"overrides": { "nth-check": "^2.0.1" }`.
   - **Direct or indirect dep that can be upgraded**: Update the version range in `dependencies` directly.
   - **Multiple vulns in one package**: An override fixes all instances at once.
4. **Apply and verify**: `npm install` then `npm run build`. Confirm `npm ls <package>` shows only the patched version.
5. **Commit and push**. Dependabot will re-scan and auto-resolve the alert on the default branch.

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
- Trace transitive dependencies with `npm ls <pkg>` before choosing a fix strategy.
- After applying an override or upgrade, always run `npm run build` to verify.
- Group related packages to minimize PR noise.
- Dependabot config changes require a commit to `main`.

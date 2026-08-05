#!/usr/bin/env bash
set -euo pipefail

REPO="OverdriveNGain/portfolio"
API_BASE="https://api.github.com/repos/$REPO/dependabot/alerts"

get_token() {
    if command -v gh &>/dev/null && gh auth status &>/dev/null 2>&1; then
        gh auth token
    else
        git credential fill <<< "protocol=https
host=github.com" 2>/dev/null | grep password= | cut -d= -f2
    fi
}

TOKEN=$(get_token)
if [ -z "$TOKEN" ]; then
    echo "ERROR: Could not get GitHub token. Install gh CLI or configure git credentials." >&2
    exit 1
fi

list_alerts() {
    local state="${1:-open}"
    curl -s -H "Authorization: token $TOKEN" \
        -H "Accept: application/vnd.github+json" \
        "$API_BASE?per_page=100&state=$state" | python3 -c "
import json, sys
data = json.load(sys.stdin)
if not isinstance(data, list):
    print(json.dumps(data, indent=2))
    sys.exit(1)
for a in data:
    adv = a.get('security_advisory', {})
    vuln = a.get('security_vulnerability', {})
    patched = vuln.get('first_patched_version', {})
    pv = patched.get('identifier', '?') if patched else '?'
    print(f\"#{a['number']}: [{adv.get('severity','?')}] {adv.get('summary','?')[:100]}\")
    print(f\"  pkg: {vuln.get('package',{}).get('name','?')} | range: {vuln.get('vulnerable_version_range','?')} | patched: {pv} | state: {a['state']}\")
"
}

get_alert() {
    local number="$1"
    curl -s -H "Authorization: token $TOKEN" \
        -H "Accept: application/vnd.github+json" \
        "$API_BASE/$number" | python3 -m json.tool
}

usage() {
    echo "Usage: $0 <command> [args]"
    echo ""
    echo "Commands:"
    echo "  list [state]       List alerts (state: open, fixed, dismissed). Default: open"
    echo "  get <number>       Get details for a specific alert by number"
    echo "  summary            Print summary: open, fixed, dismissed counts by severity"
    exit 1
}

case "${1:-}" in
    list)
        list_alerts "${2:-open}"
        ;;
    get)
        [ -n "${2:-}" ] || usage
        get_alert "$2"
        ;;
    summary)
        echo "Open alerts:"
        list_alerts open | grep "^#" || echo "  (none)"
        echo ""
        echo "Fixed alerts:"
        list_alerts fixed | grep "^#" || echo "  (none)"
        echo ""
        echo "Dismissed alerts:"
        list_alerts dismissed | grep "^#" || echo "  (none)"
        ;;
    *)
        usage
        ;;
esac

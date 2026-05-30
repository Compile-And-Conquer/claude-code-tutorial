#!/bin/bash
# PreToolUse hook for Ab Bekhoor
# Blocks writes to lib/main.dart and warns before pubspec.yaml edits.
#
# Register in .claude/settings.json:
# {
#   "hooks": {
#     "PreToolUse": [
#       {
#         "matcher": "Write|Edit",
#         "hooks": [{"type": "command", "command": "bash .claude/hooks/pre-write-hook.sh"}]
#       }
#     ]
#   }
# }

INPUT=$(cat)

# Extract file path from tool input JSON
FILE_PATH=$(echo "$INPUT" | python3 -c "
import sys, json
d = json.load(sys.stdin)
# Write tool uses 'file_path', Edit tool uses 'path' or 'file_path'
print(d.get('file_path') or d.get('path') or '')
" 2>/dev/null)

# Block all writes to lib/main.dart — edit this file manually
if [[ "$FILE_PATH" == *"lib/main.dart"* ]]; then
  echo '{"decision":"deny","reason":"lib/main.dart is protected from automated edits. Make this change manually or explicitly override this hook."}'
  exit 0
fi

# Warn before pubspec.yaml changes — Claude should not add packages without approval
if [[ "$FILE_PATH" == *"pubspec.yaml"* ]]; then
  echo '{"decision":"ask","reason":"About to modify pubspec.yaml. Confirm you approved this package change in the plan step."}'
  exit 0
fi

# Allow everything else
exit 0

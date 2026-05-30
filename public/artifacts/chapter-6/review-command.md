# /review

Run a structured code review on the current feature's changed files.

## Steps

1. Run `git diff --name-only HEAD` to identify changed files under `lib/`.
   If the diff is empty or unclear, ask me which files to review.

2. Load the reviewer instructions from `.claude/agents/reviewer.md`.

3. Review each changed file against:
   - Correctness of logic
   - Consistency with CLAUDE.md conventions (especially: AsyncNotifier pattern,
     Drift query patterns, no setState in Riverpod widgets)
   - Error and edge-case handling
   - Anything the reviewer definition flags

4. Return the structured verdict:

```
VERDICT: APPROVE | REQUEST_CHANGES | BLOCK

ISSUES (if any):
- [BLOCKING] File:line — description and what must change
- [NON-BLOCKING] File:line — description, can be addressed later

NOTES:
- Anything worth knowing that is not an issue
```

## Rules

- Do not fix issues — report them only.
- If `.claude/agents/reviewer.md` does not exist, say so and stop.
- If there are no changed files, say so and stop.

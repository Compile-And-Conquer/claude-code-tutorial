# /scaffold-feature

Drop this file at `.claude/commands/scaffold-feature.md` in your project root.
Then run `/scaffold-feature` inside a Claude Code session.

Chapter 6 covers custom commands in full — this is a working preview.

---

Plan and scaffold a new feature for Ab Bekhoor.

Before writing any code:

1. Ask me: what feature are we adding? Wait for my answer.
2. List every file you intend to create or modify, grouped by layer:
   - Data layer (Drift tables, repositories)
   - Domain layer (models, use cases)
   - Presentation layer (widgets, screens, providers)
3. For each file: state what it will contain and why it needs to change.
4. Identify any existing files this feature touches — do not rewrite them, only extend.
5. Flag any assumptions you're making about scope or implementation.

Stop. Wait for my approval before writing anything.

After I approve:
- Implement layer by layer: data first, then domain, then presentation.
- After each layer, pause and confirm it compiles before moving to the next.
- Do not add features beyond what I approved in the plan.
- If you hit a decision point mid-implementation, ask — don't guess.

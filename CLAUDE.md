# Claude Dev Guide — Project Memory

## Tech Stack

| Layer | Choice | Reason |
|---|---|---|
| Framework | Astro 4.x | Content-first, ships ~0 JS, MDX collections, trivial static deploy |
| Styles | Tailwind CSS v3 | Custom design tokens; no UI library — hand-rolled look |
| Content | MDX (`@astrojs/mdx`) | Enables Astro components inline in content pages |
| Deploy | Static → Vercel/Netlify/CF Pages | `output: 'static'` in astro.config.mjs |

## Design Tokens (Tailwind class names)

| Purpose | Class | Hex |
|---|---|---|
| Page background | `bg-canvas` | `#0c0e10` |
| Card/sidebar bg | `bg-surface` | `#141618` |
| Hover surface | `bg-surface-hi` | `#1e2124` |
| Borders | `border-rim` | `#252830` |
| Borders (active) | `border-rim-hi` | `#343840` |
| Body text | `text-prose` | `#d4d8de` |
| Muted text | `text-dim` | `#717882` |
| Accent | `text-amber` / `bg-amber` | `#e0823a` |
| Code background | `bg-code` | `#1a1d22` |
| Callout: tip | `text-tip` | `#3d9e6c` |
| Callout: warning | `text-warn` | `#d4a017` |
| Callout: pitfall | `text-danger` | `#c94f4f` |

Fonts: `font-sans` = Inter, `font-mono` = JetBrains Mono.

## Content Style Guide

**Voice:** Direct, slightly dry. Senior engineer writing notes for themselves.

**Never:** "powerful", "supercharge", "unlock", "leverage", emoji in headings, marketing language.

**Always:** Real commands, real prompts, specific failure modes. Cite `docs.anthropic.com/...` for non-obvious claims.

**Code blocks:**
- `bash` — shell commands
- `text` — prompts and raw output
- `ts` / `dart` / `go` — language code
- No triple-backtick HEREDOC for inline prose examples

## Page Structure (every MDX file)

```mdx
---
title: ""
tier: 1|2|3
order: 1-18
summary: "One sentence shown in sidebar and index cards."
---

**[Title]** — one-line definition.

## When to use it
## When NOT to use it
## Best practices
## Example
<details>
<summary>Common pitfall: [the mistake in 5 words]</summary>
Explanation and correct approach.
</details>
```

## Running Example Policy

Use the **Persian card games platform** (HOKM, PASUR, Shelem, 7-e-Khabis — Nakama backend, Flutter frontend) for:
- Subagents (05), MCP servers (06), Hooks (07), Custom commands (09)

Use a **generic realistic side-project** for everything else (e.g., a SaaS app with auth, a CLI tool, a mobile app). Don't force the card games example where it doesn't fit naturally.

## File Naming

Content files: `NN-kebab-case.mdx` with zero-padded order (01–18).
- `src/content/tier1/01-setup.mdx`
- `src/content/tier2/12-prompt-engineering.mdx`

## Adding a New Topic Page

1. Create `src/content/tierN/NN-slug.mdx` with correct frontmatter
2. Add a `{ href: '/tierN/NN-slug', title: '...', summary: '...' }` entry in `src/data/nav.ts`
3. The dynamic route `src/pages/tierN/[slug].astro` will pick it up automatically

## Components

| Component | Props | Purpose |
|---|---|---|
| `<Callout type="">` | `tip \| warning \| pitfall` | Highlighted info boxes in MDX |
| `<PromptBlock>` | — | Styled, copyable prompt snippet |
| `<CopyButton>` | — | Clipboard copy for code blocks (JS island) |

Native `<details><summary>` for collapsible pitfall boxes — zero JS, accessible.

## Dependencies >100KB

None currently. Any new dep over 100KB needs explicit user approval.

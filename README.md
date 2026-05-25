# Claude Dev Guide

Opinionated reference for developers building side projects with Claude. Deepest coverage on Claude Code — automation, agent guardrailing, and keeping sessions from going off the rails.

## Run locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:4321`.

## Build & preview

```bash
npm run build     # static output → dist/
npm run preview   # serve dist/ locally
```

## Deploy

The site outputs static HTML. No server required.

**Vercel:** Import the repo. Build command: `npm run build`. Output directory: `dist`. Done.

**Netlify:** Connect repo. Build command: `npm run build`. Publish directory: `dist`.

**Cloudflare Pages:** Connect repo. Build command: `npm run build`. Output directory: `dist`.

## Add a new topic page

1. Create a content file:

```
src/content/tier{1|2|3}/NN-slug.mdx
```

Use the next available order number, zero-padded. File name becomes the URL slug.

2. Add frontmatter:

```yaml
---
title: "Topic title"
tier: 1        # 1, 2, or 3
order: 19      # next sequential number
summary: "One sentence shown in sidebar and index cards."
---
```

3. Add to the nav in `src/data/nav.ts`:

```ts
{ href: '/tier1/NN-slug', title: 'Topic title', summary: '...', tier: 1, order: 19 }
```

4. The dynamic route `src/pages/tier{N}/[slug].astro` picks it up automatically.

## Content structure

Every article follows this template:

```mdx
**[Title]** — one-line definition.

## When to use it
## When NOT to use it  
## Best practices
## Example
<details>
<summary>Common pitfall: [5-word description]</summary>
Explanation and fix.
</details>
```

Available MDX components (no import needed — they're passed via `components` prop):
- `<Callout type="tip|warning|pitfall">` — highlighted info box
- `<PromptBlock>` — styled, copyable prompt template

## Voice guidelines

- Direct, dry. Senior engineer writing notes for themselves.
- No: "powerful," "supercharge," "unlock," emoji headers
- Yes: real commands, specific failure modes, concrete examples
- Cite `docs.anthropic.com/...` for non-obvious best-practice claims

See `CLAUDE.md` for full style guide and design token reference.

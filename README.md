# Claude Dev Guide

Opinionated field guide for developers building side projects with Claude. Two modes:

- **Tutorial** — 8 chapters building Ab Bekhoor (a Flutter water tracker) from idea to App Store. Introduces Claude Code features as the project needs them.
- **Reference** — 18 topics across Claude Code, agent craft, and the API. No order required.

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

## Site structure

```
/                       Two-path landing (Tutorial vs Reference)
/tutorial               Chapter timeline
/tutorial/[slug]        Individual chapter pages
/reference              Reference topic grid
/reference/tier1/[slug] Reference topic pages
/reference/tier2/[slug]
/reference/tier3/[slug]
```

## Add a new reference page

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

3. Add to nav in `src/data/nav.ts`:

```ts
{ href: '/reference/tier1/NN-slug', title: 'Topic title', summary: '...', tier: 1, order: 19 }
```

4. If the topic maps to a tutorial chapter, add it to `refToChapter` in `src/data/tutorial.ts`.

5. The dynamic route `src/pages/reference/tier{N}/[slug].astro` picks it up automatically.

## Add a new tutorial chapter

1. Create a content file:

```
src/content/tutorial/chN-slug.mdx
```

2. Add frontmatter:

```yaml
---
title: "Chapter title"
subtitle: "Feature being taught"
chapter: 8         # next chapter number
recap: "Two-sentence 'where you are' shown as a banner."
artifact:          # optional
  filename: "something.md"
  description: "What this file is."
  path: "/artifacts/chapter-8/something.md"
refLinks:          # optional — links to reference pages
  - href: "/reference/tier1/01-setup"
    title: "Setup & first steps"
---
```

3. Add to `src/data/tutorial.ts` chapters array.

4. Place any artifact files at `public/artifacts/chapter-N/`.

5. The dynamic route `src/pages/tutorial/[slug].astro` picks it up automatically.

## Content structure

**Reference articles** follow this template:

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

**Tutorial chapters** follow this 9-section flow:

```
Where you are   (frontmatter recap — rendered as banner)
The situation
First attempt (naïve)
Why it falls short
The fix
Step by step
Pitfalls        (<details> collapsibles)
Checkpoint
Next
```

Available MDX components (no import needed):
- `<Callout type="tip|warning|pitfall">` — highlighted info box
- `<PromptBlock>` — styled, copyable prompt template

## Voice guidelines

- Direct, dry. Senior engineer writing notes for themselves.
- No: "powerful," "supercharge," "unlock," emoji headers
- Yes: real commands, specific failure modes, concrete examples
- Cite `docs.anthropic.com/...` for non-obvious best-practice claims

See `CLAUDE.md` for full style guide and design token reference.

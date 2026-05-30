export interface Chapter {
  slug: string;
  chapter: number;
  title: string;
  subtitle: string;
  tier: 1 | 2 | 3;
  artifact?: string;
}

export const chapters: Chapter[] = [
  { slug: 'ch0-validate',      chapter: 0, title: 'Should I even build this?',                    subtitle: 'Validating an idea in claude.ai before writing code',           tier: 3 },
  { slug: 'ch1-day-one',       chapter: 1, title: 'Day one: getting Claude up to speed',          subtitle: 'Setup, CLAUDE.md, and scaffolding',                            tier: 1, artifact: 'claude-md.md' },
  { slug: 'ch2-first-feature', chapter: 2, title: 'Building the first feature without surprises', subtitle: 'Plan mode and slash commands',                                  tier: 1, artifact: 'scaffold-feature.md' },
  { slug: 'ch3-off-rails',     chapter: 3, title: 'When Claude goes off the rails',               subtitle: 'Permissions, allowed-tools, hooks, deny rules',                tier: 1, artifact: 'pre-write-hook.sh' },
  { slug: 'ch4-two-claudes',   chapter: 4, title: 'Two Claudes are better than one',              subtitle: 'Subagents for parallel work',                                   tier: 1, artifact: 'reviewer.md' },
  { slug: 'ch5-outside-world', chapter: 5, title: 'Giving Claude access to the outside world',    subtitle: 'MCP servers for live docs and DB inspection',                  tier: 1, artifact: 'mcp.json' },
  { slug: 'ch6-boring-parts',  chapter: 6, title: 'Automating the boring parts',                  subtitle: 'Custom commands, headless CI, cost discipline',                tier: 1, artifact: 'review-command.md' },
  { slug: 'ch7-ship',          chapter: 7, title: 'Shipping it',                                  subtitle: 'Research mode, App Store copy, anti-patterns recap',           tier: 2, artifact: 'appstore-prompt.md' },
];

export const refToChapter: Record<string, { chapter: number; slug: string; title: string }> = {
  '/reference/tier3/15-claudeai-features':   { chapter: 0, slug: 'ch0-validate',      title: 'Should I even build this?' },
  '/reference/tier1/01-setup':               { chapter: 1, slug: 'ch1-day-one',       title: 'Day one: getting Claude up to speed' },
  '/reference/tier1/02-claude-md':           { chapter: 1, slug: 'ch1-day-one',       title: 'Day one: getting Claude up to speed' },
  '/reference/tier1/04-plan-mode':           { chapter: 2, slug: 'ch2-first-feature', title: 'Building the first feature without surprises' },
  '/reference/tier1/03-slash-commands':      { chapter: 2, slug: 'ch2-first-feature', title: 'Building the first feature without surprises' },
  '/reference/tier1/08-permissions':         { chapter: 3, slug: 'ch3-off-rails',     title: 'When Claude goes off the rails' },
  '/reference/tier1/07-hooks':               { chapter: 3, slug: 'ch3-off-rails',     title: 'When Claude goes off the rails' },
  '/reference/tier1/05-subagents':           { chapter: 4, slug: 'ch4-two-claudes',   title: 'Two Claudes are better than one' },
  '/reference/tier1/06-mcp-servers':         { chapter: 5, slug: 'ch5-outside-world', title: 'Giving Claude access to the outside world' },
  '/reference/tier1/09-custom-commands':     { chapter: 6, slug: 'ch6-boring-parts',  title: 'Automating the boring parts' },
  '/reference/tier1/10-headless-mode':       { chapter: 6, slug: 'ch6-boring-parts',  title: 'Automating the boring parts' },
  '/reference/tier1/11-cost-context':        { chapter: 6, slug: 'ch6-boring-parts',  title: 'Automating the boring parts' },
  '/reference/tier2/13-guardrailing':        { chapter: 7, slug: 'ch7-ship',          title: 'Shipping it' },
  '/reference/tier2/14-anti-patterns':       { chapter: 7, slug: 'ch7-ship',          title: 'Shipping it' },
  '/reference/tier3/16-research-workflows':  { chapter: 7, slug: 'ch7-ship',          title: 'Shipping it' },
  '/reference/tier3/17-marketing-workflows': { chapter: 7, slug: 'ch7-ship',          title: 'Shipping it' },
};

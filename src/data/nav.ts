export interface NavItem {
  href: string;
  title: string;
  summary: string;
  tier: 1 | 2 | 3;
  order: number;
}

export interface NavGroup {
  label: string;
  tier: 1 | 2 | 3;
  items: NavItem[];
}

export const nav: NavGroup[] = [
  {
    label: 'Claude Code',
    tier: 1,
    items: [
      { href: '/reference/tier1/01-setup',            title: 'Setup & first steps',           summary: 'Install, login, working directory conventions.',                              tier: 1, order: 1  },
      { href: '/reference/tier1/02-claude-md',        title: 'CLAUDE.md',                     summary: 'Project memory: what to put in it, what to leave out.',                     tier: 1, order: 2  },
      { href: '/reference/tier1/03-slash-commands',   title: 'Slash commands',                summary: 'Built-in commands and when each one earns a keystroke.',                     tier: 1, order: 3  },
      { href: '/reference/tier1/04-plan-mode',        title: 'Plan mode',                     summary: 'How it works, when to invoke it, how to read plans critically.',             tier: 1, order: 4  },
      { href: '/reference/tier1/05-subagents',        title: 'Subagents',                     summary: 'Parallel work, specialization, isolation as a guardrail.',                   tier: 1, order: 5  },
      { href: '/reference/tier1/06-mcp-servers',      title: 'MCP servers',                   summary: 'Connecting external tools to Claude Code; when it helps vs hurts.',         tier: 1, order: 6  },
      { href: '/reference/tier1/07-hooks',            title: 'Hooks',                         summary: 'Shell commands that fire before/after tool calls.',                          tier: 1, order: 7  },
      { href: '/reference/tier1/08-permissions',      title: 'Permissions & allowed-tools',   summary: 'Scoping risky operations per-project.',                                      tier: 1, order: 8  },
      { href: '/reference/tier1/09-custom-commands',  title: 'Custom commands',               summary: 'Building your own slash commands for repeated workflows.',                   tier: 1, order: 9  },
      { href: '/reference/tier1/10-headless-mode',    title: 'Headless mode / CI',            summary: 'Non-interactive runs in pipelines and automation scripts.',                  tier: 1, order: 10 },
      { href: '/reference/tier1/11-cost-context',     title: 'Cost & context',                summary: 'Keeping sessions focused and token spend predictable.',                      tier: 1, order: 11 },
    ],
  },
  {
    label: 'Agent Craft',
    tier: 2,
    items: [
      { href: '/reference/tier2/12-prompt-engineering', title: 'Prompt engineering for agents', summary: 'System prompts, XML structure, few-shot, prefilling.',                    tier: 2, order: 12 },
      { href: '/reference/tier2/13-guardrailing',       title: 'Guardrailing patterns',         summary: 'Permission scoping, deny rules, test-first loops, eval harnesses.',       tier: 2, order: 13 },
      { href: '/reference/tier2/14-anti-patterns',      title: 'Anti-patterns',                 summary: 'Common mistakes that waste tokens or cause agents to go off the rails.',   tier: 2, order: 14 },
    ],
  },
  {
    label: 'Claude.ai & API',
    tier: 3,
    items: [
      { href: '/reference/tier3/15-claudeai-features',    title: 'claude.ai for developers',   summary: 'Projects, Artifacts, Skills, Connectors, Research mode.',                  tier: 3, order: 15 },
      { href: '/reference/tier3/16-research-workflows',   title: 'Research workflows',          summary: 'Competitor analysis, customer interview synthesis, ICP definition.',       tier: 3, order: 16 },
      { href: '/reference/tier3/17-marketing-workflows',  title: 'Marketing workflows',         summary: 'Landing page copy, SEO drafts, launch posts.',                             tier: 3, order: 17 },
      { href: '/reference/tier3/18-api-sdk-survey',       title: 'API/SDK survey',              summary: 'Models, caching, batch, tool use, extended thinking — what exists.',       tier: 3, order: 18 },
    ],
  },
];

export const tierMeta = {
  1: { label: 'T1', badge: 'bg-amber/10 text-amber',           description: 'Deep coverage' },
  2: { label: 'T2', badge: 'bg-blue-500/10 text-blue-400',     description: 'Strong coverage' },
  3: { label: 'T3', badge: 'bg-violet-500/10 text-violet-400', description: 'Survey' },
} as const;

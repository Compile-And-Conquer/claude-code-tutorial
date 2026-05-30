import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [tailwind(), mdx()],
  output: 'static',
  site: 'https://compile-and-conquer.github.io',
  base: '/claude-code-tutorial.github.io',
});

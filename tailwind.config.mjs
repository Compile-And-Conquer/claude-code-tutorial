/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        canvas:      '#0c0e10',
        surface:     '#141618',
        'surface-hi':'#1e2124',
        rim:         '#252830',
        'rim-hi':    '#343840',
        prose:       '#d4d8de',
        dim:         '#717882',
        amber:       '#e0823a',
        code:        '#1a1d22',
        tip:         '#3d9e6c',
        warn:        '#d4a017',
        danger:      '#c94f4f',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      maxWidth: {
        content: '72ch',
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': '#d4d8de',
            '--tw-prose-headings': '#e8ecf0',
            '--tw-prose-code': '#d4d8de',
            '--tw-prose-pre-bg': '#1a1d22',
            '--tw-prose-links': '#e0823a',
            '--tw-prose-bold': '#e8ecf0',
            '--tw-prose-counters': '#717882',
            '--tw-prose-bullets': '#343840',
            '--tw-prose-hr': '#252830',
            '--tw-prose-quotes': '#d4d8de',
            '--tw-prose-quote-borders': '#343840',
            '--tw-prose-th-borders': '#343840',
            '--tw-prose-td-borders': '#252830',
          },
        },
      },
    },
  },
  plugins: [],
};

// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://jaimecm02.github.io',
  base: '/HistaviWeb/',
  vite: {
    plugins: [tailwindcss()]
  }
});
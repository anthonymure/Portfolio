import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://example.com',
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    routing: { prefixDefaultLocale: false },
  },
});

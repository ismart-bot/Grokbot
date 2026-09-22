// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const site = process.env.SITE_URL || 'https://ariaappliancerepair.com';

export default defineConfig({
  site,
  trailingSlash: 'always',
  // Astro 7 defaults to JSX-style whitespace stripping; keep HTML-aware
  // compression so spaces between inline elements survive.
  compressHTML: true,
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/thank-you/'),
    }),
  ],
});

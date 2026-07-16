import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// site: switch to the custom domain in Task 13 after DNS is live.
export default defineConfig({
  site: 'https://jp-pr-art.github.io',
  integrations: [sitemap({ customPages: ['https://jp-pr-art.github.io/'] })],
});

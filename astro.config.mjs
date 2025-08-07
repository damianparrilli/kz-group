import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  server: {
    allowedHosts: [
      "forbes-luther-length-ascii.trycloudflare.com"
    ]
  }
});

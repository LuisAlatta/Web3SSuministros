import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Dominio de la empresa (ajustar si cambia)
const SITE = 'https://3s-suministros.com';

export default defineConfig({
  site: SITE,
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
  image: {
    // Permite optimización a AVIF/WebP con sharp
    responsiveStyles: true,
  },
  compressHTML: true,
});

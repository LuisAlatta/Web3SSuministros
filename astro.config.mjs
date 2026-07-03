import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// URL pública del sitio (ajustar cuando se conecte el dominio 3s-suministros.com)
const SITE = 'https://web3s-suministros.vercel.app';

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

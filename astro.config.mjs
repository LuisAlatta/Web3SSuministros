import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// URL pública del sitio (dominio propio ya conectado)
const SITE = 'https://3s-suministros.com';

export default defineConfig({
  site: SITE,
  // La sección "Novedades" fue reemplazada por "Importaciones".
  redirects: {
    '/novedades': '/importaciones',
    '/novedades/inspeccion-estrobos-izaje': '/importaciones',
    '/novedades/elegir-eslinga-sintetica': '/importaciones',
    '/novedades/hardpad-vs-madera': '/importaciones',
    '/novedades/kits-contencion-derrames': '/importaciones',
  },
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

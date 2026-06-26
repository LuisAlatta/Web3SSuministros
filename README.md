# Web 3S Suministros y Servicios del Sur

Sitio web informativo (one-page) construido con **Astro**, según el **Plan Profesional** de la cotización COT-002.

Dirección de diseño: **industrial heavy-duty** — negro carbón, textura de plancha estriada y ámbar de seguridad, fiel a la identidad de marca de la empresa.

## Stack

- **Astro 5** (salida estática, 0 KB de JS de framework)
- CSS con design tokens (sin frameworks de UI)
- Imágenes optimizadas a AVIF/WebP con `astro:assets`
- Fuentes self-hosted (Oswald + Inter) vía `@fontsource`

## Comandos

```bash
npm install        # instalar dependencias
npm run dev        # servidor de desarrollo (localhost:4321)
npm run build      # build de producción -> ./dist
npm run preview    # previsualizar el build
```

## Estructura

```
src/
├── data/          site.ts (contacto, redes, GA) · content.ts (categorías, marcas, productos)
├── styles/        tokens.css · global.css
├── layouts/       Base.astro (SEO, OG, JSON-LD, Analytics)
├── components/    Header · Footer · WhatsAppFab · Icon
└── sections/      Hero · Nosotros · Categorias · Marcas · Lineas · Catalogo · Contacto
public/
├── catalogos/     PDFs (catálogo 2024, izaje Bekaert, brochure)
└── favicon, og-image, robots.txt
```

## Secciones (Plan Profesional, 7 secciones)

Inicio · Nosotros · Categorías · **Marcas (Bekaert destacado)** · Líneas (Izaje + HARDPAD) · Catálogo + Galería + Testimonios · Contacto.

Incluye: botón flotante de WhatsApp con menú a 3 números, formulario (WhatsApp/correo), Google Maps, SEO + JSON-LD, animaciones al hacer scroll.

## Pendientes de configuración (editar y volver a publicar)

Todo lo editable está centralizado en `src/data/site.ts`:

1. **Redes sociales** — reemplazar `"#"` en `socials` por las URLs reales de Facebook/Instagram. (Mientras estén en `"#"`, los íconos se ocultan automáticamente.)
2. **Google Analytics** — pegar el ID `G-XXXXXXX` en `GA_MEASUREMENT_ID` para activar el seguimiento.
3. **Formulario** — actualmente envía por WhatsApp o abre el correo (`mailto`). Si más adelante se quiere recepción automática al correo, se puede conectar Web3Forms (gratis, sin backend).
4. **Dominio** — confirmado `https://3s-suministros.com` en `astro.config.mjs` y `site.ts`. Ajustar si cambia.
5. **Ficha de Google Business** — alta del negocio en Google (incluido en el alcance del plan).

## Datos de la empresa usados

- RUC: 20612191469
- WhatsApp: 986 759 523 · 903 306 833 · 968 833 381
- Correo: ventas@3s-suministros.com
- Dirección: Villa Aviación Mz. F Lt. 5, Cerro Colorado, Arequipa

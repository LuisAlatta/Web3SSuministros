/* Datos centrales de la empresa. Editar aquí actualiza todo el sitio. */

export const site = {
  name: "3S Suministros y Servicios del Sur",
  shortName: "3S Suministros",
  legalName: "3S Suministros y Servicios del Sur",
  ruc: "20612191469",
  tagline: "El socio estratégico para tu empresa",
  description:
    "Gestión de abastecimiento de suministros industriales en Arequipa. Representantes de Bekaert y distribuidores de marcas líderes para minería, construcción, petróleo, gas, energía e industria.",
  attention: "Sra. Naydu",
  email: "ventas@3s-suministros.com",
  emailAlt: "3S.Suministros24@gmail.com",
  domain: "https://web3s-suministros.vercel.app",
  address: {
    line: "Villa Aviación Mz. F Lt. 5",
    district: "Cerro Colorado",
    city: "Arequipa",
    country: "Perú",
    full: "Villa Aviación Mz. F Lt. 5, Cerro Colorado, Arequipa, Perú",
    mapsQuery: "Villa Aviación Mz. F Lt. 5, Cerro Colorado, Arequipa, Perú",
  },
  hours: "Lun a Vie 8:00 – 18:00 · Sáb 8:00 – 13:00",
} as const;

/* Números de WhatsApp (formato internacional para wa.me sin "+") */
export const whatsapps = [
  { label: "Ventas", display: "986 759 523", intl: "51986759523" },
  { label: "Comercial", display: "903 306 833", intl: "51903306833" },
] as const;

export const defaultWaMessage =
  "Hola 3S Suministros, vengo de la web y quisiera más información.";

export function waLink(intl: string, message: string = defaultWaMessage) {
  return `https://wa.me/${intl}?text=${encodeURIComponent(message)}`;
}

/* Redes sociales */
export const socials = [
  { label: "Facebook", url: "https://www.facebook.com/share/18r83L3S6p/", icon: "facebook" },
  { label: "TikTok", url: "https://www.tiktok.com/@3s.suministros.y2", icon: "tiktok" },
] as const;

/* Google Analytics — pegar el ID de medición (G-XXXXXXX) para activarlo */
export const GA_MEASUREMENT_ID = "";

export const nav = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Categorías", href: "/categorias" },
  { label: "Productos", href: "/productos" },
  { label: "Marcas", href: "/marcas" },
  { label: "Líneas", href: "/lineas" },
  { label: "Novedades", href: "/novedades" },
  { label: "Contacto", href: "/contacto" },
] as const;

/* Enlaces extra que no van en el menú principal pero sí en el footer */
export const navExtra = [
  { label: "Catálogo y galería", href: "/catalogo" },
] as const;

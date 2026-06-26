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
  domain: "https://3s-suministros.com",
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
  { label: "Atención", display: "968 833 381", intl: "51968833381" },
] as const;

export const defaultWaMessage =
  "Hola 3S Suministros, vengo de la web y quisiera más información.";

export function waLink(intl: string, message: string = defaultWaMessage) {
  return `https://wa.me/${intl}?text=${encodeURIComponent(message)}`;
}

/* Redes sociales — reemplazar "#" por las URLs reales cuando se tengan */
export const socials = [
  { label: "Facebook", url: "#", icon: "facebook" },
  { label: "Instagram", url: "#", icon: "instagram" },
] as const;

/* Google Analytics — pegar el ID de medición (G-XXXXXXX) para activarlo */
export const GA_MEASUREMENT_ID = "";

export const nav = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Categorías", href: "#categorias" },
  { label: "Marcas", href: "#marcas" },
  { label: "Líneas", href: "#lineas" },
  { label: "Catálogo", href: "#catalogo" },
  { label: "Contacto", href: "#contacto" },
] as const;

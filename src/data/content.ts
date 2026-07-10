/* Contenido editorial: sectores, categorías, marcas y líneas de producto.
   Tomado del brochure, catálogo 2024 y fichas técnicas de la empresa. */

export const sectores = [
  "Minería",
  "Construcción",
  "Petróleo, gas y energía",
  "Telecomunicaciones",
  "Pesca",
  "Agroindustria",
] as const;

export const normativas = ["ANSI", "OSHA", "ASTM", "EN", "NTP"] as const;

export const stats = [
  { value: "+60", label: "Años de trayectoria de marcas representadas" },
  { value: "5", label: "Normativas internacionales que cumplen nuestros productos" },
  { value: "100%", label: "Entregas a todo el Perú" },
] as const;

/* Las 6 categorías de negocio del catálogo */
export const categorias = [
  {
    id: "herramientas",
    title: "Herramientas",
    icon: "wrench",
    items: ["Manuales", "Eléctricas", "Hidráulicas", "Neumáticas"],
  },
  {
    id: "seguridad",
    title: "Seguridad Industrial",
    icon: "helmet",
    items: ["EPPs", "Contención de derrames"],
  },
  {
    id: "electricos",
    title: "Equipos Eléctricos",
    icon: "bolt",
    items: [
      "Cables eléctricos",
      "Iluminación",
      "Motores",
      "Accesorios para industria y hogar",
    ],
  },
  {
    id: "izaje",
    title: "Repuestos y Sistemas de Izaje",
    icon: "hook",
    items: [
      "Sistemas de izaje de cargas",
      "Ganchos, piñones, rotores",
      "Polipastos, frenos y ejes",
      "Bombas centrífugas y sumergibles",
      "Válvulas, tuberías y accesorios",
      "Compresores, filtros y mangueras",
    ],
  },
  {
    id: "transmision",
    title: "Transmisión de Potencia",
    icon: "gear",
    items: [
      "Cadenas y correas",
      "Acoples y ejes",
      "Chumaceras",
      "Motores AC/DC",
      "Reductores",
      "Rodamientos especiales",
    ],
  },
  {
    id: "ferreteria",
    title: "Ferretería en General",
    icon: "bolts",
    items: [
      "Pernos, tuercas y arandelas (acero negro / inox)",
      "Lonas Lonatex, sogas de nylon",
      "Pinturas ignífugas Titán",
      "Tubería PVC Pavco, mallas y cintillos",
      "Vigas metálicas y planchas de acero",
    ],
  },
] as const;

/* Marcas representadas — Bekaert destacado */
export const marcaPrincipal = {
  name: "Bekaert",
  fullName: "Bridon-Bekaert The Ropes Group",
  claim: "Representamos la marca para todo el mercado industrial",
  description:
    "Bekaert, a través de Bridon-Bekaert The Ropes Group, es el fabricante de cables de acero más grande y con mayor tecnología del mundo. Como sus representantes en el mercado industrial, abastecemos elementos de izaje con respaldo de calidad, trazabilidad y experiencia global.",
  points: [
    "El fabricante de cable de acero más grande del mundo",
    "Más de 60 años de trayectoria (desde 1960, grupo Bekaert)",
    "Presencia global: 19 plantas en 17 países",
    "Productos bajo normas ASME B30.9, OSHA y ASTM",
  ],
} as const;

export const marcasSecundarias = [
  { name: "Crosby", note: "Accesorios y casquillos certificados" },
  { name: "SuperLoop", note: "Estrobos de cable de acero" },
  { name: "StrongLoop", note: "Eslingas de alta resistencia" },
  { name: "Lonatex", note: "Lonas industriales" },
  { name: "Titán", note: "Pinturas ignífugas importadas" },
  { name: "Pavco", note: "Tubería y accesorios PVC" },
] as const;

/* Muro de marcas que distribuye 3S, agrupadas por rubro (según catálogo) */
export const marcasPorRubro = [
  {
    rubro: "Herramientas y medición",
    marcas: [
      { name: "Bosch", logo: "/marcas/bosch.png" },
      { name: "Makita", logo: "/marcas/makita.png" },
      { name: "DeWalt", logo: "/marcas/dewalt.webp" },
      { name: "Stanley", logo: "/marcas/stanley.png" },
      { name: "Milwaukee", logo: "/marcas/milwaukee.svg" },
      { name: "Truper", logo: "/marcas/truper.svg" },
      { name: "Bahco", logo: "/marcas/bahco.png" },
      { name: "Fluke", logo: "/marcas/fluke.png" },
      { name: "Mitutoyo", logo: "/marcas/mitutoyo.webp" },
    ],
  },
  {
    rubro: "Seguridad industrial (EPP)",
    marcas: [
      { name: "3M", logo: "/marcas/3m.webp" },
      { name: "MSA", logo: "/marcas/msa.png" },
      { name: "Steelpro", logo: "/marcas/steelpro.png" },
      { name: "DuPont Tyvek", logo: "/marcas/dupont-tyvek.png" },
      { name: "Ansell", logo: "/marcas/ansell.webp" },
      { name: "Delta Plus", logo: "/marcas/delta-plus.png" },
      { name: "Showa", logo: "/marcas/showa.webp" },
      { name: "Segpro", logo: "/marcas/segpro.png" },
    ],
  },
  {
    rubro: "Izaje y materiales",
    marcas: [
      { name: "Bekaert", logo: "/marcas/bekaert.png" },
      { name: "Crosby", logo: "/marcas/crosby.png" },
      { name: "SuperLoop", logo: null },
      { name: "StrongLoop", logo: null },
      { name: "Lonatex", logo: "/marcas/lonatex.png" },
      { name: "Titán", logo: null },
      { name: "Pavco", logo: "/marcas/pavco.png" },
    ],
  },
] as const;

/* Líneas destacadas */
export const lineaIzaje = {
  title: "Elementos de Izaje",
  brand: "Bekaert · Crosby",
  intro:
    "Estrobos, cadenas grado 8, eslingas y accesorios para maniobras de izaje, con factor de diseño y carga límite de trabajo (WLL) certificados.",
  features: [
    "Estrobos SuperLoop con casquillos Crosby S-505 (ASME B30.9-2)",
    "Cadenas de acero de aleación grado 8, tratadas térmicamente (carga de ruptura 4:1)",
    "Accesorios: grilletes, ganchos, guardacabos y terminales",
    "Criterios de inspección y descarte según norma",
  ],
} as const;

/* HARDPAD Crane — línea propia. Fuente: ficha técnica del cliente. */
export const hardpad = {
  title: "HARDPAD Crane",
  brand: "Línea propia 3S",
  intro:
    "Almohadillas de apoyo (PADS) en polietileno de ultra alto peso molecular (UHMW) para estabilizadores de grúas y maquinaria pesada. Distribuyen la carga de forma eficiente y protegen el equipo y el terreno bajo las cargas más extremas.",
  benefits: [
    { title: "Alta resistencia", desc: "Resiste impacto, desgaste y abrasión. No se agrieta ni fractura como la madera." },
    { title: "Durabilidad superior", desc: "Vida útil mucho mayor que la madera, reduciendo costos de reemplazo." },
    { title: "Resistente a la intemperie", desc: "No absorbe humedad, inmune a la corrosión, de −50 °C a +100 °C." },
    { title: "Liviano y manipulable", desc: "Más ligero que el acero o la madera tratada, con asas integradas." },
    { title: "Aislamiento eléctrico", desc: "Propiedad dieléctrica inherente del material para mayor seguridad." },
    { title: "Amigable y fácil de limpiar", desc: "100% reciclable y de superficie lisa, se limpia con agua a presión." },
  ],
  specs: [
    { modelo: "PDN-40", medida: "400 × 400 mm", alto: "50 mm", peso: "7.6 kg", carga: "12 TON" },
    { modelo: "PDN-50", medida: "500 × 500 mm", alto: "50 mm", peso: "12.2 kg", carga: "18 TON" },
    { modelo: "PDN-60", medida: "600 × 600 mm", alto: "60 mm", peso: "20.6 kg", carga: "25 TON" },
    { modelo: "PDN-80", medida: "800 × 800 mm", alto: "60 mm", peso: "39 kg", carga: "40 TON" },
    { modelo: "PDN-100", medida: "1000 × 1000 mm", alto: "60 mm", peso: "60 kg", carga: "50 TON" },
  ],
} as const;

/* Testimonios (placeholder editable) */
export const testimonios = [
  {
    quote:
      "Cumplen con los plazos de entrega y la calidad de los elementos de izaje nos da total tranquilidad en obra.",
    author: "Jefe de Logística",
    company: "Sector construcción",
  },
  {
    quote:
      "Encontramos un solo proveedor para herramientas, repuestos y seguridad. Nos simplificó el abastecimiento.",
    author: "Supervisor de Mantenimiento",
    company: "Sector minero",
  },
  {
    quote:
      "Las almohadillas HARDPAD reemplazaron la madera de nuestras grúas; más livianas y mucho más duraderas.",
    author: "Operador de Grúa",
    company: "Servicios de izaje",
  },
] as const;

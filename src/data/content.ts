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
      "Ganchos, piñones y rotores",
      "Polipastos, frenos y ejes",
      "Bombas centrífugas y sumergibles",
      "Válvulas: cheque, alivio y tipo mariposa",
      "Tuberías, accesorios y compresores",
      "Filtros de aire y de fluidos",
      "Mangueras, acoples, empaquetaduras y sellos",
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
      "Lonas Lonatex contra lluvias, sogas de nylon",
      "Trapo industrial, conos de seguridad y escaleras",
      "Pinturas ignífugas importadas Titán",
      "Tubería PVC Pavco, cintillos y mallas (acero o rachel)",
      "Vigas metálicas y planchas de acero",
    ],
  },
] as const;

/* Marcas representadas — Bekaert destacado */
export const marcaPrincipal = {
  name: "Bekaert",
  logo: "/marcas/bekaert.png",
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

/* Muro de marcas que distribuye 3S, agrupadas por rubro (según catálogo) */
export const marcasPorRubro = [
  {
    rubro: "Herramientas y medición",
    marcas: [
      { name: "Bosch", logo: "/marcas/bosch.png" },
      { name: "Makita", logo: "/marcas/makita.png" },
      { name: "Fluke", logo: "/marcas/fluke.png" },
      { name: "Stanley", logo: "/marcas/stanley.png" },
      { name: "Milwaukee", logo: "/marcas/milwaukee.svg" },
      { name: "Truper", logo: "/marcas/truper.svg" },
      { name: "Bahco", logo: "/marcas/bahco.png" },
      { name: "DeWalt", logo: "/marcas/dewalt.webp" },
      { name: "Mitutoyo", logo: "/marcas/mitutoyo.webp" },
    ],
  },
  {
    rubro: "Seguridad industrial (EPP)",
    marcas: [
      { name: "Segpro", logo: "/marcas/segpro.png" },
      { name: "MSA", logo: "/marcas/msa.png" },
      { name: "Ansell", logo: "/marcas/ansell.webp" },
      { name: "DuPont Tyvek", logo: "/marcas/dupont-tyvek.png" },
      { name: "Steelpro", logo: "/marcas/steelpro.png" },
      { name: "Delta Plus", logo: "/marcas/delta-plus.png" },
      { name: "Showa", logo: "/marcas/showa.webp" },
      { name: "3M", logo: "/marcas/3m.webp" },
    ],
  },
  {
    rubro: "Izaje y materiales",
    marcas: [
      { name: "Bekaert", logo: "/marcas/bekaert.png" },
      { name: "SuperLoop", logo: "/marcas/superloop.png" },
      { name: "Crosby", logo: "/marcas/crosby.png" },
      { name: "StrongLoop", logo: "/marcas/strongloop.png" },
      { name: "Pavco", logo: "/marcas/pavco.png" },
      { name: "Titán", logo: "/marcas/titan.png" },
      { name: "Lonatex", logo: "/marcas/lonatex.png" },
    ],
  },
] as const;

/* Líneas destacadas */

/* ELEMENTOS DE IZAJE — Bridon-Bekaert / Procables + accesorios Crosby.
   Fuente: catálogo técnico "Elementos de Izaje" Bridon-Bekaert, ed. 08/2020. */
export const izaje = {
  title: "Elementos de Izaje",
  brand: "Bridon-Bekaert · Procables · Crosby",
  intro:
    "Estrobos, cadenas grado 8, eslingas sintéticas y accesorios para maniobras de izaje, con factor de diseño y Carga Límite de Trabajo (WLL) certificados bajo norma internacional.",
  historia:
    "Procables S.A. —continuadora de Prolansa— inició operaciones en 1960 y desde 1994 forma parte del grupo Bekaert. En 2016 nace Bridon-Bekaert The Ropes Group, el mayor fabricante de cable de acero del mundo; desde 2018 es 100% propiedad de Bekaert. Como sus representantes, abastecemos izaje con respaldo global, trazabilidad y certificación.",
  presencia: "19 plantas de fabricación y distribución en 17 países",
  normas: ["ASME B30.9", "OSHA", "ASTM", "EN 1492", "WSTDA", "ISO 4878"],
  familias: [
    {
      id: "estrobos",
      name: "Estrobos SuperLoop",
      norm: "ASME B30.9-2",
      factor: "5:1",
      tagline: "Cable de alma de acero con casquillos Crosby S-505",
      desc:
        "Estrobos de cable de acero para izaje axial, en lazo o en U. Diámetros de 1/4\" a 3\", con guardacabo para proteger el ojo y mejorar la relación D/d.",
      bullets: [
        "Casquillos Crosby S-505 prensados (swage)",
        "Configuración de 1, 2, 3 y 4 ramales",
        "Etiqueta con WLL, factor de diseño y código de trazabilidad",
      ],
      tabla: {
        caption: "Carga Límite de Trabajo (WLL) en toneladas métricas · factor 5:1",
        cols: ["Ø plg", "Ø mm", "1 ramal axial", "2 ram. 60°", "45°", "30°"],
        rows: [
          ["1/4", "6,5", "0,60", "1,19", "1,03", "0,84"],
          ["3/8", "9,5", "1,32", "2,64", "2,28", "1,86"],
          ["1/2", "13", "2,50", "5,00", "4,33", "3,53"],
          ["5/8", "16", "3,80", "7,60", "6,57", "5,36"],
          ["3/4", "19", "5,46", "10,92", "9,45", "7,70"],
          ["1", "26", "9,72", "19,44", "16,82", "13,71"],
          ["1 1/4", "32", "15,18", "30,36", "26,26", "21,40"],
          ["1 1/2", "38", "21,90", "43,80", "37,89", "30,88"],
          ["2", "52", "37,10", "74,20", "64,18", "52,31"],
        ],
      },
    },
    {
      id: "cadenas",
      name: "Cadenas grado 8",
      norm: "ASME B30.9-1",
      factor: "4:1",
      tagline: "Acero de aleación tratado térmicamente",
      desc:
        "Cadenas de acero de aleación grado 8 (80) para maniobras de izaje en altura, patentadas con marca y grado en bajorrelieve. La carga de ruptura equivale a 4 veces la WLL.",
      bullets: [
        "Cumplen requerimientos de OSHA y ASTM",
        "Diámetros de 6 mm (7/32\") a 32 mm (1 1/4\")",
        "0% de estiramiento permitido en servicio",
      ],
      tabla: {
        caption: "Carga Límite de Trabajo (WLL) en toneladas métricas · factor 4:1",
        cols: ["Ø mm", "Ø plg", "1 ramal axial", "2 ram. 60°", "45°", "30°"],
        rows: [
          ["7", "1/4", "1,59", "2,77", "2,22", "1,59"],
          ["8", "5/16", "2,04", "3,54", "2,90", "2,04"],
          ["10", "3/8", "3,22", "5,58", "4,54", "3,22"],
          ["13", "1/2", "5,45", "9,43", "7,71", "5,45"],
          ["16", "5/8", "8,22", "14,20", "11,61", "8,22"],
          ["20", "3/4", "12,86", "22,23", "18,14", "12,84"],
          ["22", "7/8", "15,54", "26,85", "21,95", "15,52"],
          ["26", "1", "21,68", "37,47", "30,57", "21,64"],
          ["32", "1 1/4", "32,80", "56,79", "46,36", "32,80"],
        ],
      },
    },
    {
      id: "eslingas",
      name: "Eslingas sintéticas Strongloop",
      norm: "ASME B30.9-5",
      factor: "5:1",
      tagline: "Poliéster y Dyneema · fabricación peruana",
      desc:
        "Eslingas planas ojo-ojo, circulares sin fin, tubulares (roundslings) y trenzadas (braided). Fabricadas por Strongloop, división de Procables, y probadas en máquinas de tracción certificadas por Lloyd's Register de Londres.",
      bullets: [
        "Eslingas Dyneema ultralivianas para grandes cargas (hasta 150 ton)",
        "Elongación menor al 7% (poliéster) y 3,6% (Dyneema)",
        "Cumplen ASME B30.9, EN 1492 e ISO 4878",
        "Protectores de cantos vivos Triple A Plus®",
      ],
      colores: {
        caption: "Eslinga plana poliéster ojo-ojo · WLL axial (1 capa) en TM · factor 5:1",
        rows: [
          { color: "Violeta", hex: "#8b5cf6", ancho: "25 mm", wll: "0,7" },
          { color: "Verde", hex: "#22c55e", ancho: "50 mm", wll: "1,4" },
          { color: "Amarillo", hex: "#eab308", ancho: "75 mm", wll: "2,1" },
          { color: "Gris", hex: "#9ca3af", ancho: "100 mm", wll: "2,8" },
          { color: "Rojo", hex: "#ef4444", ancho: "125 mm", wll: "3,5" },
          { color: "Café", hex: "#92400e", ancho: "150 mm", wll: "4,2" },
          { color: "Azul", hex: "#3b82f6", ancho: "200 mm", wll: "5,3" },
          { color: "Naranja", hex: "#f97316", ancho: "250 mm", wll: "6,7" },
        ],
      },
    },
    {
      id: "trincaje",
      name: "Amarre y trincaje de carga",
      norm: "WSTDA T-2 · EN 12195-1",
      factor: "3:1",
      tagline: "Tensores tie-down para transporte",
      desc:
        "Sistemas de trincaje para asegurar carga en camiones, remolques y plataformas. Los tensores sujetan la carga a presión e impiden su movimiento en frenado, curvas y aceleración.",
      bullets: [
        "Cintas de 2\", 3\" y 4\" con carraca (ratchet)",
        "WLL de 1 360 a 2 995 kgf según ancho",
        "Frenado: sujeción mínima del 80% del peso de la carga",
      ],
    },
  ],
  accesorios: {
    title: "Accesorios Crosby",
    intro: "Complementos certificados para armar y conectar maniobras seguras.",
    items: [
      "Casquillos S-505",
      "Grilletes",
      "Ganchos",
      "Guardacabos",
      "Argollas maestras",
      "Terminales de vaciado G-416 / G-417",
      "Garras IP10",
    ],
  },
  inspeccion: [
    {
      grupo: "Estrobos de cable",
      puntos: [
        "Etiqueta ilegible o ausente",
        "Alambres rotos, deformaciones o aplastamiento",
        "Coloración por temperatura o salpicadura de soldadura",
        "Coca (pierde capacidad de levante)",
        "Corrosión notoria o daño en el ojo",
      ],
    },
    {
      grupo: "Cadenas grado 8",
      puntos: [
        "Cualquier estiramiento (debe ser 0%)",
        "Desgaste o abrasión entre eslabones",
        "Daño térmico con coloración azul",
        "Mellas, muescas, fisuras o soldadura",
        "Eslabón doblado o ramales de largo desigual",
      ],
    },
    {
      grupo: "Eslingas sintéticas",
      puntos: [
        "Etiqueta ilegible o perdida",
        "Desgaste, abrasión o tejido gastado",
        "Quemaduras por sol o soldadura",
        "Cortes, roturas o nudos en la cinta",
        "Presencia de químicos u oxidación",
      ],
    },
  ],
} as const;

/* CONTENCIÓN DE DERRAMES — absorbentes y kits. Fuente: brochure 3S. */
export const derrames = {
  title: "Contención de Derrames",
  brand: "Seguridad ambiental",
  intro:
    "Absorbentes, kits y contenedores para controlar derrames de hidrocarburos y químicos, proteger el terreno y responder con seguridad ambiental ante fugas.",
  productos: [
    {
      name: "Absorbentes universales",
      desc: "Absorben una amplia gama de líquidos, incluyendo aceite y químicos comunes.",
    },
    {
      name: "Absorbentes de químicos",
      desc: "Para líquidos químicos, ácidos y combustibles. Ideales en laboratorios, hospitales y plantas químicas.",
    },
    {
      name: "Absorbentes de aceite (Clot Oil)",
      desc: "Polipropileno hidrofóbico: repelen el agua y solo absorben aceite, ideales para derrames de petróleo.",
    },
    {
      name: "Rollo de paños X80 multiuso",
      desc: "Reutilizable y de alta absorción. 28×42 cm, 80 g/m², 50% pulpa + 50% poliéster, 80 u/rollo.",
    },
    {
      name: "Contenedor de aceites portátil",
      desc: "Piscina plegable de contención semipermanente y rentable. No requiere instalación.",
    },
    {
      name: "Tapetes para cilindro",
      desc: "Sobre la tapa de tambores de 55 galones, absorben goteos y fluidos de la operación diaria.",
    },
  ],
  kits: [
    {
      size: "Kit de derrame 50 L",
      items: [
        "1 bolsa con asa",
        "30 paños de 40×50 cm",
        "2 salchichas de 7,6 cm Ø × 120 cm",
        "2 almohadillas de 35×45 cm",
        "1 par de guantes",
        "2 bolsas de eliminación",
      ],
    },
    {
      size: "Kit de derrame 30 L",
      items: [
        "1 bolsa con asa",
        "20 paños de 40×50 cm",
        "1 salchicha de 7,6 cm Ø × 120 cm",
        "1 par de guantes",
        "Lentes goggles",
        "2 bolsas de eliminación",
      ],
    },
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

/* Sellos de confianza (fila de garantías) */
export const sellos = [
  {
    icon: "shield",
    title: "Marcas certificadas",
    desc: "Productos bajo normas ANSI, OSHA, ASTM, EN y NTP.",
  },
  {
    icon: "hook",
    title: "Representantes Bekaert",
    desc: "Elementos de izaje con respaldo global y trazabilidad.",
  },
  {
    icon: "truck",
    title: "Entregas a todo el Perú",
    desc: "Despachamos a mina, obra y planta en todo el país.",
  },
  {
    icon: "wrench",
    title: "Asesoría técnica",
    desc: "Te ayudamos a elegir el producto correcto para tu operación.",
  },
] as const;

/* Catálogo de productos para el buscador (/productos). Fuente: catálogo 2024,
   brochure y catálogo de izaje Bekaert. Tipos de producto, no SKUs. */
export const productosCategorias = [
  { key: "herramientas", label: "Herramientas", icon: "wrench" },
  { key: "seguridad", label: "Seguridad Industrial", icon: "helmet" },
  { key: "derrames", label: "Contención de Derrames", icon: "shield" },
  { key: "electricos", label: "Equipos Eléctricos", icon: "bolt" },
  { key: "izaje", label: "Izaje y Sistemas", icon: "hook" },
  { key: "transmision", label: "Transmisión de Potencia", icon: "gear" },
  { key: "ferreteria", label: "Ferretería", icon: "bolts" },
] as const;

export const productos = [
  // Herramientas y medición
  { name: "Taladros y rotomartillos", cat: "herramientas", marca: "Bosch" },
  { name: "Amoladoras angulares", cat: "herramientas", marca: "Makita" },
  { name: "Atornilladores inalámbricos", cat: "herramientas", marca: "DeWalt" },
  { name: "Llaves, dados y juegos de mano", cat: "herramientas", marca: "Stanley" },
  { name: "Sierras y equipos de demolición", cat: "herramientas", marca: "Milwaukee" },
  { name: "Herramienta manual en general", cat: "herramientas", marca: "Truper" },
  { name: "Llaves ajustables y de golpe", cat: "herramientas", marca: "Bahco" },
  { name: "Multímetros y pinzas amperimétricas", cat: "herramientas", marca: "Fluke" },
  { name: "Calibradores y micrómetros", cat: "herramientas", marca: "Mitutoyo" },
  // Seguridad industrial (EPP)
  { name: "Cascos de seguridad", cat: "seguridad", marca: "MSA" },
  { name: "Respiradores y mascarillas", cat: "seguridad", marca: "3M" },
  { name: "Guantes de protección", cat: "seguridad", marca: "Ansell" },
  { name: "Guantes recubiertos", cat: "seguridad", marca: "Showa" },
  { name: "Trajes y overoles Tyvek", cat: "seguridad", marca: "DuPont" },
  { name: "Lentes, caretas y protección facial", cat: "seguridad", marca: "Steelpro" },
  { name: "Arnés y líneas de vida", cat: "seguridad", marca: "MSA" },
  { name: "Calzado de seguridad", cat: "seguridad", marca: "Delta Plus" },
  { name: "Protección auditiva", cat: "seguridad", marca: "3M" },
  // Contención de derrames
  { name: "Paños absorbentes de aceite (Clot Oil)", cat: "derrames", marca: "" },
  { name: "Absorbentes universales", cat: "derrames", marca: "" },
  { name: "Absorbentes de químicos", cat: "derrames", marca: "" },
  { name: "Rollo de paños X80 multiuso", cat: "derrames", marca: "" },
  { name: "Kit de derrame 30 L y 50 L", cat: "derrames", marca: "" },
  { name: "Contenedor de aceites portátil", cat: "derrames", marca: "" },
  { name: "Tapetes absorbentes para cilindro", cat: "derrames", marca: "" },
  // Equipos eléctricos
  { name: "Cables eléctricos", cat: "electricos", marca: "" },
  { name: "Luminarias industriales", cat: "electricos", marca: "" },
  { name: "Motores eléctricos", cat: "electricos", marca: "" },
  { name: "Accesorios eléctricos (industria y hogar)", cat: "electricos", marca: "" },
  { name: "Tableros y arrancadores", cat: "electricos", marca: "" },
  // Izaje y sistemas
  { name: "Estrobos de cable SuperLoop", cat: "izaje", marca: "Bridon-Bekaert" },
  { name: "Cadenas de izaje grado 8", cat: "izaje", marca: "Bridon-Bekaert" },
  { name: "Eslingas sintéticas Strongloop", cat: "izaje", marca: "Bridon-Bekaert" },
  { name: "Eslingas Dyneema (roundslings)", cat: "izaje", marca: "Bridon-Bekaert" },
  { name: "Grilletes y ganchos", cat: "izaje", marca: "Crosby" },
  { name: "Guardacabos y casquillos S-505", cat: "izaje", marca: "Crosby" },
  { name: "Tensores de amarre (tie-down)", cat: "izaje", marca: "" },
  { name: "Almohadillas HARDPAD Crane", cat: "izaje", marca: "Línea propia 3S" },
  { name: "Polipastos, frenos y ejes", cat: "izaje", marca: "" },
  { name: "Ganchos, piñones y rotores", cat: "izaje", marca: "" },
  { name: "Bombas centrífugas y sumergibles", cat: "izaje", marca: "" },
  { name: "Válvulas (cheque, alivio y mariposa)", cat: "izaje", marca: "" },
  { name: "Compresores y filtros de aire/fluidos", cat: "izaje", marca: "" },
  // Transmisión de potencia
  { name: "Rodamientos especiales", cat: "transmision", marca: "" },
  { name: "Chumaceras", cat: "transmision", marca: "" },
  { name: "Cadenas y correas de transmisión", cat: "transmision", marca: "" },
  { name: "Acoples y ejes", cat: "transmision", marca: "" },
  { name: "Reductores", cat: "transmision", marca: "" },
  { name: "Motores AC / DC", cat: "transmision", marca: "" },
  // Ferretería en general
  { name: "Pernos, tuercas y arandelas (negro / inox)", cat: "ferreteria", marca: "" },
  { name: "Lonas contra lluvias", cat: "ferreteria", marca: "Lonatex" },
  { name: "Sogas de nylon", cat: "ferreteria", marca: "" },
  { name: "Trapo industrial", cat: "ferreteria", marca: "" },
  { name: "Conos de seguridad", cat: "ferreteria", marca: "" },
  { name: "Escaleras", cat: "ferreteria", marca: "" },
  { name: "Pinturas ignífugas importadas", cat: "ferreteria", marca: "Titán" },
  { name: "Tubería PVC y cintillos", cat: "ferreteria", marca: "Pavco" },
  { name: "Mallas de cerco (acero o rachel)", cat: "ferreteria", marca: "" },
  { name: "Vigas metálicas y planchas de acero", cat: "ferreteria", marca: "" },
] as const;

/* IMPORTACIONES — líneas de producto importadas y distribuidas por 3S.
   Fuentes: catálogos de fabricante HARDPAD/Yuanju (pads UHMW), NTNICE
   (absorbentes de hidrocarburos) y HEDA Shelves (racks), más certificados
   CPR/EN 1090 e ISO 9001 de HEDA. Información editable por el cliente. */
export const importaciones = {
  intro:
    "Importamos y distribuimos líneas de producto industrial de fabricantes internacionales seleccionados, con certificación de origen y stock en Perú. Estas son nuestras líneas de importación disponibles bajo pedido.",
  lineas: [
    {
      id: "pads",
      nombre: "Pads · Almohadillas estabilizadoras",
      marca: "HARDPAD — Polietileno UHMW",
      tagline: "Almohadillas de apoyo para estabilizadores de grúa y maquinaria pesada",
      resumen:
        "Almohadillas de apoyo (outrigger pads) fabricadas en polietileno de ultra alto peso molecular (UHMW) de color negro. Distribuyen la carga de los estabilizadores de grúas y maquinaria pesada de forma eficiente y protegen el equipo y el terreno, incluso bajo las cargas más extremas. Reemplazan a la madera con mayor resistencia y durabilidad.",
      img: "pads-producto",
      img2: "pads-uso",
      bullets: [
        "Alta resistencia al impacto, desgaste y abrasión: no se agrieta ni fractura como la madera.",
        "No absorbe humedad, inmune a la corrosión, uso de −50 °C a +100 °C.",
        "Liviano y con asas integradas para un transporte seguro y sencillo.",
        "Aislamiento eléctrico: propiedad dieléctrica inherente del material.",
        "100% reciclable y fácil de limpiar con agua a presión.",
      ],
      aplicaciones: [
        "Grúas móviles y torre",
        "Maquinaria pesada de construcción",
        "Vehículos de emergencia y bomberos",
        "Plataformas elevadoras",
        "Equipos de perforación",
        "Generadores y compresores",
      ],
      tabla: {
        caption: "Modelos disponibles (medida cuadrada A × B)",
        cols: ["Modelo", "Medida", "Alto", "Peso aprox.", "Capacidad de carga"],
        rows: [
          ["PDN-40", "400 × 400 mm", "50 mm", "7,6 kg", "12 TON"],
          ["PDN-50", "500 × 500 mm", "50 mm", "12,2 kg", "18 TON"],
          ["PDN-60", "600 × 600 mm", "60 mm", "20,6 kg", "25 TON"],
          ["PDN-80", "800 × 800 mm", "60 mm", "39 kg", "40 TON"],
          ["PDN-100", "1000 × 1000 mm", "60 mm", "60 kg", "50 TON"],
        ],
      },
    },
    {
      id: "panos",
      nombre: "Paños y absorbentes de hidrocarburos",
      marca: "NTNICE — Spill Control",
      tagline: "Control y contención de derrames de aceites, químicos y líquidos",
      resumen:
        "Absorbentes de polipropileno melt-blown para limpiar y contener derrames: paños (pads), rollos, barreras (booms), salchichas (socks), almohadas (pillows) y kits. Se ofrecen en tres líneas según el líquido a absorber.",
      img: "panos-oil",
      img2: "panos-caja",
      tipos: [
        {
          n: "Oil / Aceite",
          color: "Blanco",
          hex: "#e8eaed",
          d: "Hidrofóbicos: solo absorben hidrocarburos y repelen el agua. Ideales para derrames de petróleo, en agua o en superficie.",
        },
        {
          n: "Hazchem / Químicos",
          color: "Amarillo",
          hex: "#eab308",
          d: "Absorben líquidos químicos, ácidos y combustibles. Para laboratorios, hospitales y plantas químicas.",
        },
        {
          n: "Universal / Multiuso",
          color: "Gris",
          hex: "#9ca3af",
          d: "Absorben aceite y químicos comunes. Para pisos, plantas, manufactura y transporte.",
        },
      ],
      formatos: [
        "Paños (pads)",
        "Rollos",
        "Barreras flotantes (booms)",
        "Salchichas (socks)",
        "Almohadas (pillows)",
        "Tapetes para tapa de cilindro",
        "Kits portátiles y de tambor",
        "Mantas de aceite (blanket)",
      ],
      tabla: {
        caption: "Paños absorbentes · 40 × 50 cm",
        cols: ["Línea", "Código", "Gramaje", "Presentación"],
        rows: [
          ["Oil (aceite)", "OPDL / OPDS / OPDH", "Light · Standard · Heavy", "100–200 u/paq."],
          ["Hazchem (químico)", "HPDL / HPDS / HPDH", "Light · Standard · Heavy", "100–200 u/paq."],
          ["Universal", "UPDL / UPDS / UPDH", "Light · Standard · Heavy", "100–200 u/paq."],
          ["Manta de aceite", "OAB-1224", "Heavy · 1,2 × 2,4 m", "20 kg/bolsa"],
        ],
      },
    },
    {
      id: "racks",
      nombre: "Racks y estanterías de almacén",
      marca: "HEDA Shelves",
      tagline: "Sistemas de almacenaje para almacén, planta y logística",
      resumen:
        "Racks metálicos para almacenamiento industrial en distintas capacidades y configuraciones, desde estantería ligera hasta rack pesado selectivo para pallets, entrepisos y cantilever. Estructura de acero de fabricación certificada.",
      img: "racks-medium",
      img2: "racks-heavy",
      tipos: [
        {
          n: "Estantería ligera y media",
          d: "Para carga manual, repuestos y cajas. Niveles regulables en altura.",
        },
        {
          n: "Rack pesado / selectivo (pallet)",
          d: "Para pallets con montacargas. Series WH002 y WH003.",
        },
        {
          n: "Entrepisos (mezzanine)",
          d: "Aprovechan la altura del almacén con un segundo nivel de piso.",
        },
        { n: "Drive-in", d: "Alta densidad de almacenaje para gran volumen del mismo producto." },
        {
          n: "Cantilever (brazos)",
          d: "Para cargas largas: tubos, perfiles, madera y planchas.",
        },
      ],
      tabla: {
        caption: "Rack pesado / selectivo para pallets",
        cols: ["Serie", "Largo", "Ancho", "Alto", "Capacidad de carga"],
        rows: [
          ["WH002", "2000 – 2700 mm", "800 – 1200 mm", "2000 – 6000 mm", "1 – 3 TON"],
          ["WH003", "2300 – 3900 mm", "900 – 1200 mm", "2000 – 6500 mm", "1 – 4,5 TON"],
        ],
      },
      certs: [
        "CE · Reglamento CPR (UE) 305/2011 — EN 1090-1, componentes estructurales de acero (Cert. 2435-CPR-8605159).",
        "Sistema de gestión de calidad ISO 9001:2015 (Cert. 18624Q00169R0M).",
      ],
    },
  ],
  otras: {
    nombre: "Equipos y aceros industriales",
    resumen:
      "También importamos equipos y aceros industriales bajo pedido. Consúltanos por tu requerimiento específico y coordinamos la importación con respaldo, certificación y trazabilidad.",
  },
} as const;

/* Guías técnicas — se muestran DENTRO de cada producto/línea al que aplican.
   El campo `producto` enlaza cada guía con el id de su línea:
   "pads" y "panos" (página Importaciones) y "izaje" (página Líneas). */
export const guias = [
  {
    producto: "izaje",
    categoria: "Izaje seguro",
    lectura: 4,
    title: "Cómo inspeccionar y dar de baja un estrobo de izaje",
    resumen:
      "Los criterios de descarte que todo supervisor debe revisar antes de cada maniobra, según la norma ASME B30.9.",
    bloques: [
      {
        p: "Un estrobo de cable de acero es tan seguro como su última inspección. Antes de cada maniobra, revisa estos puntos: si el estrobo presenta cualquiera de ellos, debe salir de servicio de inmediato.",
      },
      { h: "1. Etiqueta de identificación" },
      {
        p: "La etiqueta debe indicar factor de diseño, Carga Límite de Trabajo (WLL), código de trazabilidad, largo y número de ramales. Si es ilegible o falta, el estrobo queda fuera de uso.",
      },
      { h: "2. Alambres rotos y deformaciones" },
      {
        p: "Da de baja el estrobo cuando existan alambres rotos, deformaciones o aplastamiento del cable.",
      },
      { h: "3. Daño por temperatura" },
      {
        p: "Cualquier cambio de coloración por temperatura o salpicadura de soldadura es motivo de descarte.",
      },
      { h: "4. Coca, corrosión y daño en el ojo" },
      {
        li: [
          "Un estrobo con coca pierde su capacidad de levante.",
          "El cable con corrosión notoria debe retirarse.",
          "Revisa deformaciones o alambres cortados en el ojo.",
          "Los accesorios (grilletes, ganchos) deben estar en buenas condiciones.",
        ],
      },
    ],
  },
  {
    producto: "izaje",
    categoria: "Izaje seguro",
    lectura: 5,
    title: "Poliéster o Dyneema: cómo elegir la eslinga sintética adecuada",
    resumen:
      "Factor de diseño, ángulos de trabajo y el código de colores que define la capacidad de cada eslinga plana.",
    bloques: [
      {
        p: "Las eslingas sintéticas Strongloop son livianas, flexibles y no dañan la carga. Elegir la correcta depende del peso, el ángulo de izaje y el entorno de trabajo.",
      },
      { h: "El factor de diseño" },
      {
        p: "En eslingas para izaje, la norma de EE. UU. define un factor de diseño de 5:1 y la europea de 7:1. Es el margen de seguridad sobre la carga de rotura.",
      },
      { h: "El ángulo importa (y mucho)" },
      {
        p: "El ángulo de trabajo normal es 60°. A menor ángulo, mayor es la pérdida de capacidad de la eslinga. Por eso una misma eslinga levanta menos peso mientras más abierta esté la maniobra.",
      },
      { h: "El código de colores" },
      {
        p: "Las eslingas planas de poliéster siguen un código de color por capacidad: violeta (1 ton), verde (2 ton), amarillo (3 ton), gris (4 ton), rojo (5 ton), café (6 ton), azul (8 ton) y naranja (10 ton).",
      },
      { h: "Cuando el peso es extremo: Dyneema" },
      {
        p: "Las eslingas tubulares de Dyneema son ultralivianas y diseñadas para grandes cargas (hasta 150 ton), con una elongación menor al 3,6%. Una maniobra de 30 ton que en cadena pesa 178 kg, en Dyneema pesa apenas 14 kg.",
      },
    ],
  },
  {
    producto: "pads",
    categoria: "HARDPAD",
    lectura: 3,
    title: "HARDPAD vs. madera: por qué cambiar las almohadillas de tu grúa",
    resumen:
      "Las almohadillas de apoyo en UHMW superan a la madera en resistencia, durabilidad y seguridad para estabilizadores de grúa.",
    bloques: [
      {
        p: "Las almohadillas HARDPAD están fabricadas en polietileno de ultra alto peso molecular (UHMW), un material ingenieril que distribuye la carga y protege el equipo y el terreno bajo las cargas más extremas.",
      },
      { h: "Ventajas sobre la madera" },
      {
        li: [
          "Alta resistencia al impacto, desgaste y abrasión: no se agrieta ni fractura como la madera.",
          "Vida útil mucho mayor, reduciendo costos de reemplazo.",
          "No absorbe humedad y es inmune a la corrosión (−50 °C a +100 °C).",
          "Mucho más liviana que el acero o la madera tratada, con asas integradas.",
          "Aislamiento eléctrico inherente para mayor seguridad.",
          "100% reciclable y fácil de limpiar con agua a presión.",
        ],
      },
      { h: "Modelos disponibles" },
      {
        p: "Contamos con medidas de 400×400 mm (12 ton) hasta 1000×1000 mm (50 ton). Elegimos contigo el modelo según la carga de tu estabilizador.",
      },
    ],
  },
  {
    producto: "panos",
    categoria: "Seguridad ambiental",
    lectura: 3,
    title: "Kits de contención de derrames: qué deben incluir y cuándo usarlos",
    resumen:
      "Absorbentes, salchichas y kits listos para responder ante fugas de hidrocarburos y químicos en tu operación.",
    bloques: [
      {
        p: "Un derrame de aceite o químico debe controlarse en minutos. Tener el kit correcto a la mano protege al personal, al terreno y evita sanciones ambientales.",
      },
      { h: "Tipos de absorbente" },
      {
        li: [
          "Absorbentes de aceite (Clot Oil): hidrofóbicos, repelen el agua y solo absorben hidrocarburos.",
          "Absorbentes universales: para aceite y químicos comunes.",
          "Absorbentes de químicos: para ácidos y combustibles en laboratorios y plantas.",
        ],
      },
      { h: "Qué incluye un kit" },
      {
        p: "El kit de 50 L trae 1 bolsa con asa, 30 paños de 40×50 cm, 2 salchichas de 7,6 cm Ø × 120 cm, 2 almohadillas, guantes y 2 bolsas de eliminación. El kit de 30 L es la versión compacta con lentes goggles incluidos.",
      },
    ],
  },
] as const;

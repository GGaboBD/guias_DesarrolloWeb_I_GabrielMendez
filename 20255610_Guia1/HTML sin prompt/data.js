// Datos oficiales y catálogo estructurado para Sushi Itto El Salvador

export const RESTAURANT_INFO = {
  name: "Sushi Itto El Salvador",
  shortName: "sushiitto",
  tagline: "Los Primeros en Sushi en El Salvador",
  phoneDelivery: "2243-1166",
  phoneFormatted: "+503 2243 1166",
  whatsapp: "+50378550000",
  socials: {
    instagram: "https://instagram.com/sushiittosv",
    facebook: "https://facebook.com/sushiIttosv",
    twitter: "https://twitter.com/SushiIttoESV",
    appStore: "https://apps.apple.com/sv/app/sushiitto-el-salvador",
    playStore: "https://play.google.com/store/apps/details?id=com.sushiittosv.deliveryapp"
  },
  deliveryHours: "Lunes a Domingo: 11:30 AM - 10:00 PM",
  currency: "USD",
  currencySymbol: "$"
};

export const PROMOTIONS = [
  {
    id: "promo-1",
    badge: "Especial de la Semana",
    title: "Roll del Día a $1.99",
    description: "De Lunes a Jueves disfruta de rollos seleccionados a precio irrepetible. ¡Consulta el roll de hoy!",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80",
    tag: "Ahorro",
    code: "ROLL199"
  },
  {
    id: "promo-2",
    badge: "2x1 Itto",
    title: "Miércoles de 2x1 en Rollos Especiales",
    description: "Pide uno de tus rollos favoritos de la casa y llévate el segundo de igual o menor precio totalmente gratis.",
    image: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=800&q=80",
    tag: "Favorito",
    code: "2X1MIERCOLES"
  },
  {
    id: "promo-3",
    badge: "Menú de Eventos",
    title: "Barco & Puente de Sushi para Fiestas",
    description: "Lleva la experiencia japonesa a tus celebraciones. Barcos desde 40 hasta 100 piezas con montaje exclusivo.",
    image: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=800&q=80",
    tag: "Eventos",
    code: "BARCOFIESTA"
  }
];

export const BRANCHES = [
  {
    id: "san-benito",
    name: "San Benito",
    zone: "Zona Rosa / San Salvador",
    address: "Blvd. El Hipódromo, No. 40, Col. San Benito, San Salvador",
    reference: "Frente a redondel Italia, cerca de Zona Rosa",
    phone: "2243-1166",
    hours: {
      weekdays: "11:30 AM - 10:00 PM",
      weekend: "11:30 AM - 11:00 PM"
    },
    isOpen: true,
    features: [
      "Planchas de Teppanyaki en vivo",
      "Terraza al aire libre",
      "Servicio a Domicilio",
      "Para llevar (Takeout)",
      "Valet Parking & Parqueo"
    ],
    googleMapsUrl: "https://maps.google.com/?q=Sushi+Itto+San+Benito+El+Salvador",
    wazeUrl: "https://waze.com/ul?q=Sushi+Itto+San+Benito",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "la-gran-via",
    name: "La Gran Vía",
    zone: "Antiguo Cuscatlán / Santa Tecla",
    address: "Carretera Panamericana y Calle Chiltiupán, Cd Merliot Local 400",
    reference: "Centro Comercial La Gran Vía, área peatonal gastronómica",
    phone: "2243-1166",
    hours: {
      weekdays: "11:30 AM - 10:00 PM",
      weekend: "11:30 AM - 11:00 PM"
    },
    isOpen: true,
    features: [
      "Planchas de Teppanyaki en vivo",
      "Terraza peatonal",
      "Servicio a Domicilio",
      "Para llevar (Takeout)",
      "Parqueo en centro comercial"
    ],
    googleMapsUrl: "https://maps.google.com/?q=Sushi+Itto+La+Gran+Via+El+Salvador",
    wazeUrl: "https://waze.com/ul?q=Sushi+Itto+La+Gran+Via",
    image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "multiplaza",
    name: "Multiplaza",
    zone: "Antiguo Cuscatlán",
    address: "Centro Comercial Multiplaza, Las Terrazas Planta Baja",
    reference: "Área Las Terrazas, acceso directo exterior",
    phone: "2243-1166",
    hours: {
      weekdays: "11:30 AM - 10:00 PM",
      weekend: "11:30 AM - 11:30 PM"
    },
    isOpen: true,
    features: [
      "Planchas de Teppanyaki en vivo",
      "Terraza lounge",
      "Servicio a Domicilio",
      "Para llevar (Takeout)",
      "Música en vivo fines de semana"
    ],
    googleMapsUrl: "https://maps.google.com/?q=Sushi+Itto+Multiplaza+El+Salvador",
    wazeUrl: "https://waze.com/ul?q=Sushi+Itto+Multiplaza",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "plaza-malta",
    name: "Plaza Malta",
    zone: "Santa Elena / Antiguo Cuscatlán",
    address: "Centro Comercial Plaza Malta, Segundo Nivel, Santa Elena",
    reference: "Frente a embajada de EE.UU. / Santa Elena",
    phone: "2243-1166",
    hours: {
      weekdays: "11:30 AM - 9:30 PM",
      weekend: "11:30 AM - 10:00 PM"
    },
    isOpen: true,
    features: [
      "Planchas de Teppanyaki en vivo",
      "Ambiente familiar y acogedor",
      "Servicio a Domicilio",
      "Para llevar (Takeout)",
      "Parqueo techado disponible"
    ],
    googleMapsUrl: "https://maps.google.com/?q=Sushi+Itto+Plaza+Malta+El+Salvador",
    wazeUrl: "https://waze.com/ul?q=Sushi+Itto+Plaza+Malta",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "bambu-city-center",
    name: "Bambu City Center",
    zone: "San Benito / San Salvador",
    address: "Blvd. El Hipódromo, Centro Comercial Bambu City Center, Nivel 2",
    reference: "Corredor gastronómico Bambu",
    phone: "2243-1166",
    hours: {
      weekdays: "11:30 AM - 10:00 PM",
      weekend: "11:30 AM - 10:30 PM"
    },
    isOpen: true,
    features: [
      "Planchas de Teppanyaki en vivo",
      "Diseño moderno vanguardista",
      "Servicio a Domicilio",
      "Para llevar (Takeout)",
      "Estación de coctelería y sakes"
    ],
    googleMapsUrl: "https://maps.google.com/?q=Sushi+Itto+Bambu+City+Center+El+Salvador",
    wazeUrl: "https://waze.com/ul?q=Sushi+Itto+Bambu+City+Center",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
  }
];

export const MENU_CATEGORIES = [
  { id: "all", name: "Todos", icon: "utensils" },
  { id: "rolls-especiales", name: "Rolls Especiales", icon: "sparkles" },
  { id: "rolls-clasicos", name: "Rolls Clásicos", icon: "fish" },
  { id: "teppanyaki", name: "Teppanyaki en Vivo", icon: "flame" },
  { id: "entradas", name: "Entradas & Kushiages", icon: "soup" },
  { id: "barcos-eventos", name: "Barcos & Combos", icon: "ship" },
  { id: "bebidas", name: "Bebidas & Cocteles", icon: "wine" },
  { id: "ninos", name: "Menú de Niños", icon: "smile" }
];

export const MENU_ITEMS = [
  // ROLLS ESPECIALES
  {
    id: "roll-itto",
    name: "Roll Itto Signature",
    category: "rolls-especiales",
    price: 11.95,
    pieces: 10,
    description: "Camarón tempura, queso crema y aguacate; cubierto con finas láminas de salmón fresco, salsa tampico spicy y ajonjolí negro.",
    badge: "⭐ Especialidad",
    tags: ["chef", "spicy"],
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "volcano-roll",
    name: "Volcano Lava Roll",
    category: "rolls-especiales",
    price: 12.50,
    pieces: 10,
    description: "Rollo empanizado relleno de cangrejo y aguacate, coronado con una explosión de mariscos horneados en salsa cremosa de chipotle spicy y cebollín.",
    badge: "🔥 Muy Picante",
    tags: ["spicy", "hot"],
    image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "dragon-roll",
    name: "Dragón Roll Imperial",
    category: "rolls-especiales",
    price: 12.95,
    pieces: 10,
    description: "Anguila glaseada y camarón empanizado, cubierto de láminas suaves de aguacate, salsa de anguila dulce y semillas de sésamo tostado.",
    badge: "Favorito",
    tags: ["chef"],
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "filadelfia-especial",
    name: "Filadelfia Especial Supreme",
    category: "rolls-especiales",
    price: 10.75,
    pieces: 10,
    description: "Generosa porción de salmón fresco noruego, queso crema philadelphia, pepino crujiente y aguacate, cubierto de masago naranja de alta calidad.",
    badge: "Clásico Itto",
    tags: ["chef"],
    image: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "crunch-tampico",
    name: "Crunchy Tampico Roll",
    category: "rolls-especiales",
    price: 9.95,
    pieces: 10,
    description: "Cangrejo kani, pepino y aguacate por dentro, capeado en tempura crocante por fuera y cubierto de la inconfundible ensalada Tampico de la casa.",
    badge: "Popular",
    tags: ["tempura"],
    image: "https://images.unsplash.com/photo-1615361200141-f45040f367be?auto=format&fit=crop&w=600&q=80"
  },

  // ROLLS CLASICOS
  {
    id: "california-roll",
    name: "California Roll Tradicional",
    category: "rolls-clasicos",
    price: 7.95,
    pieces: 10,
    description: "Kani (cangrejo), pepino fresco japonés y suave aguacate, con cobertura clásica de ajonjolí blanco y negro tostado.",
    badge: "Clásico",
    tags: ["tradicional"],
    image: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "spicy-tuna-roll",
    name: "Spicy Tuna Maki",
    category: "rolls-clasicos",
    price: 9.50,
    pieces: 10,
    description: "Tartar de atún aleta amarilla fresco aderezado con sriracha y aceite de sésamo picante, pepino y toque de cebollín.",
    badge: "Picante",
    tags: ["spicy"],
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "veggie-green-roll",
    name: "Midori Veggie Roll",
    category: "rolls-clasicos",
    price: 7.25,
    pieces: 10,
    description: "Espárrago fresco, aguacate, zanahoria juliana, pepino y queso crema suave, envuelto en alga nori y ajonjolí.",
    badge: "🌱 Vegetariano",
    tags: ["veggie"],
    image: "https://images.unsplash.com/photo-1623341214825-9f4f963727da?auto=format&fit=crop&w=600&q=80"
  },

  // TEPPANYAKI
  {
    id: "teppan-mixto",
    name: "Teppanyaki Mixto Res & Pollo",
    category: "teppanyaki",
    price: 15.95,
    pieces: 1,
    description: "Preparado en plancha en vivo con vegetales mixtos de temporada (calabaza, champiñones, cebolla y brotes de soya), bañado en salsa teriyaki de la casa. Incluye arroz Yakimeshi.",
    badge: "🔥 En Vivo",
    tags: ["chef", "hot"],
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "teppan-mar-tierra",
    name: "Teppanyaki Mar y Tierra Supremo",
    category: "teppanyaki",
    price: 18.50,
    pieces: 1,
    description: "Cortes de lomo de res tierno, camarones jumbo y salmón a la plancha con mantequilla de ajo y sake. Acompañado de vegetales y arroz yakimeshi con carne picada.",
    badge: "Gourmet",
    tags: ["chef"],
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "yakisoba-especial",
    name: "Yakisoba Itto de Mariscos",
    category: "teppanyaki",
    price: 13.95,
    pieces: 1,
    description: "Fideos soba japoneses salteados a fuego alto con calamar, camarón, cerdo crujiente, vegetales frescos y salsa tonkatsu dulce y ahumada.",
    badge: "Tradicional",
    tags: ["hot"],
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80"
  },

  // ENTRADAS & KUSHIAGES
  {
    id: "kushiage-queso",
    name: "Brochetas Kushiage de Queso (3 uds)",
    category: "entradas",
    price: 5.95,
    pieces: 3,
    description: "Crujientes brochetas de queso gouda empanizadas en fino panko japonés, servidas con salsa tártara agridulce y salsa kushiage tradicional.",
    badge: "Must Try",
    tags: ["popular"],
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "edamames-sea-salt",
    name: "Edamames al Vapor con Sal de Mar",
    category: "entradas",
    price: 4.95,
    pieces: 1,
    description: "Vainas de soya tiernas al vapor terminadas con escamas de sal marina o aderezo picante togarashi a elección.",
    badge: "🌱 Saludable",
    tags: ["veggie"],
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "gyozas-artesanales",
    name: "Gyozas Doradas de Cerdo (5 uds)",
    category: "entradas",
    price: 6.50,
    pieces: 5,
    description: "Empanaditas japonesas al vapor y selladas a la plancha, rellenas de cerdo especiado, jengibre y col, acompañadas de salsa ponzu cítrica.",
    badge: "Favorito",
    tags: ["hot"],
    image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=600&q=80"
  },

  // BARCOS & COMBOS
  {
    id: "barco-fiesta-40",
    name: "Barco Fiesta Itto (40 Piezas)",
    category: "barcos-eventos",
    price: 38.99,
    pieces: 40,
    description: "Espectacular montaje en barco de madera tradicional que incluye: 10 Filadelfia Especial, 10 Roll Itto, 10 California Roll y 10 Crunchy Tampico. Ideal para 3 a 4 personas.",
    badge: "🚢 Mejor Valor",
    tags: ["eventos", "chef"],
    image: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "gran-puente-80",
    name: "Gran Puente Imperial (80 Piezas)",
    category: "barcos-eventos",
    price: 74.99,
    pieces: 80,
    description: "El icónico puente de madera rojo de Sushi Itto cargado con una selección gourmet de 8 variedades de rollos, nigiris y sashimis frescos. Diseñado para eventos y reuniones.",
    badge: "👑 Estrella de Eventos",
    tags: ["eventos", "chef"],
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "combo-ejecutivo",
    name: "Combo Itto Bento Ejecutivo",
    category: "barcos-eventos",
    price: 9.99,
    pieces: 1,
    description: "Caja Bento completa con 5 piezas de California Roll, 1 brocheta Kushiage de queso, porción de Yakimeshi mixto y ensalada sunomono fresca.",
    badge: "Almuerzo",
    tags: ["popular"],
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
  },

  // BEBIDAS
  {
    id: "calpico-natural",
    name: "Calpico Japonés Tradicional",
    category: "bebidas",
    price: 3.25,
    pieces: 1,
    description: "Bebida láctea refrescante de fermentación natural originaria de Japón, servida con hielo y rodaja de limón.",
    badge: "Típico",
    tags: ["drink"],
    image: "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "cocktail-sake-mojito",
    name: "Sake Passion Mojito",
    category: "bebidas",
    price: 6.50,
    pieces: 1,
    description: "Exclusiva creación de mixología con sake Junmai frío, maracuyá salvadoreño, menta fresca, toque de limón y soda espumosa.",
    badge: "Coctel",
    tags: ["drink"],
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80"
  },

  // NIÑOS
  {
    id: "kids-combo-panda",
    name: "Combo Panda Infantil",
    category: "ninos",
    price: 6.95,
    pieces: 1,
    description: "Rollito baby sin alga exterior de jamón y queso crema (6 piezas), mini brocheta kushiage, papitas tempura y jugo natural.",
    badge: "🧒 Kids Fun",
    tags: ["ninos"],
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80"
  }
];

export const CATERING_PACKAGES = [
  {
    guestsMin: 10,
    guestsMax: 20,
    title: "Paquete Sakura Íntimo",
    pieces: "120 piezas surtidas",
    format: "1 Barco Grande de Madera + 1 Puente Tradicional",
    priceEst: 110,
    features: [
      "Montaje en vajilla de madera japonesa artesanal",
      "Surtido de salsas (Soya, Anguila, Tampico y Wasabi)",
      "Palillos descartables de bambú y servilletas",
      "Asesoría personalizada de selección de rollos"
    ]
  },
  {
    guestsMin: 21,
    guestsMax: 45,
    title: "Paquete Imperial Fiesta",
    pieces: "280 piezas surtidas",
    format: "2 Barcos Grandes + 2 Puentes + Estación de Brochetas Kushiages",
    priceEst: 245,
    features: [
      "Montaje temático japonés con decoración de bambú",
      "Surtido de 10 variedades de rollos especiales y tradicionales",
      "Opción de Chef de Sushi en vivo para armar rolls al momento",
      "Salsas gourmet y ensalada Tampico incluida"
    ]
  },
  {
    guestsMin: 46,
    guestsMax: 200,
    title: "Gran Banquete Teppanyaki & Sushi Gala",
    pieces: "600+ piezas a la medida",
    format: "Banquete Completo con Planchas Móviles de Teppanyaki en Vivo",
    priceEst: 520,
    features: [
      "Show cooking acrobático con maestros teppan frente a invitados",
      "Estación buffet caliente (arroz yakimeshi, carnes, mariscos)",
      "Coctelería de sakes y bebidas japonesas",
      "Coordinación integral para bodas y eventos corporativos"
    ]
  }
];

export const HISTORY_TIMELINE = [
  {
    year: "Pioneros",
    title: "Los Primeros en Sushi en El Salvador",
    description: "Sushi Itto abrió sus puertas como el primer restaurante especializado en sushi del país, democratizando la alta cocina japonesa y adaptándola con calidez al gusto salvadoreño."
  },
  {
    year: "Espectáculo",
    title: "El Fuego del Teppanyaki en Vivo",
    description: "Instalamos las primeras planchas de Teppanyaki con show cooking interactivo, convirtiendo las cenas en San Benito y La Gran Vía en una experiencia inolvidable para familias y amigos."
  },
  {
    year: "Tradición",
    title: "Barcos para Eventos y Domicilio 2243-1166",
    description: "Presentamos los célebres montajes de puentes y barcos de sushi para eventos corporativos y celebraciones en casa, junto con el servicio a domicilio más rápido de la capital."
  },
  {
    year: "Presente",
    title: "5 Sucursales y Nueva Experiencia Digital",
    description: "Hoy contamos con 5 sucursales líderes y renovamos nuestra experiencia digital con menús interactivos, pedidos fluidos y la misma devoción por la frescura de nuestros ingredientes."
  }
];

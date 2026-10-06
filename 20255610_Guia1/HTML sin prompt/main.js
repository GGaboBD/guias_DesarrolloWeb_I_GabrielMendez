// Archivo principal unificado sin dependencias externas para compatibilidad con protocolo file:// y http://

const RESTAURANT_INFO = {
  name: "Sushi Itto El Salvador",
  shortName: "sushiitto",
  tagline: "Los Primeros en Sushi en El Salvador",
  phoneDelivery: "2243-1166",
  phoneFormatted: "+503 2243 1166",
  whatsapp: "50322431166",
  socials: {
    instagram: "https://instagram.com/sushiittosv",
    facebook: "https://facebook.com/sushiIttosv",
    twitter: "https://twitter.com/SushiIttoESV",
    appStore: "https://apps.apple.com",
    playStore: "https://play.google.com"
  },
  deliveryHours: "Lunes a Domingo: 11:30 AM - 10:00 PM",
  currency: "USD",
  currencySymbol: "$"
};

const PROMOTIONS = [
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

const BRANCHES = [
  {
    id: "san-benito",
    name: "San Benito",
    zone: "Zona Rosa / San Salvador",
    address: "Blvd. El Hipódromo, No. 40, Col. San Benito, San Salvador",
    reference: "Frente a redondel Italia, corazón de Zona Rosa",
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

const MENU_CATEGORIES = [
  { id: "all", name: "Todos los Platillos", icon: "utensils" },
  { id: "rolls-especiales", name: "Rolls Especiales", icon: "sparkles" },
  { id: "rolls-clasicos", name: "Rolls Clásicos", icon: "fish" },
  { id: "teppanyaki", name: "Teppanyaki en Vivo", icon: "flame" },
  { id: "entradas", name: "Entradas & Kushiages", icon: "soup" },
  { id: "barcos-eventos", name: "Barcos & Combos", icon: "ship" },
  { id: "bebidas", name: "Bebidas & Cocteles", icon: "wine" },
  { id: "ninos", name: "Menú Infantil", icon: "smile" }
];

const MENU_ITEMS = [
  // ROLLS ESPECIALES
  {
    id: "roll-itto",
    name: "Roll Itto Signature",
    category: "rolls-especiales",
    price: 11.95,
    pieces: 10,
    description: "Camarón tempura, queso crema y aguacate; cubierto con láminas de salmón fresco, salsa tampico spicy y ajonjolí negro tostado.",
    badge: "⭐ Especialidad de la Casa",
    tags: ["chef", "spicy"],
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "volcano-roll",
    name: "Volcano Lava Roll",
    category: "rolls-especiales",
    price: 12.50,
    pieces: 10,
    description: "Rollo empanizado relleno de cangrejo y aguacate, coronado con mariscos horneados en salsa cremosa de chipotle spicy y cebollín fresco.",
    badge: "🔥 Picante & Caliente",
    tags: ["spicy", "hot"],
    image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "dragon-roll",
    name: "Dragón Roll Imperial",
    category: "rolls-especiales",
    price: 12.95,
    pieces: 10,
    description: "Anguila glaseada y camarón empanizado, cubierto de abanico de aguacate, salsa dulce de anguila y semillas de sésamo tostado.",
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
    description: "Generosa porción de salmón fresco noruego, queso crema philadelphia, pepino crujiente y aguacate, terminado con masago naranja.",
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
    description: "Cangrejo kani, pepino y aguacate por dentro, capeado en tempura crocante por fuera y cubierto de la inconfundible ensalada Tampico.",
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
    description: "Kani (cangrejo japonés), pepino crujiente y suave aguacate, con cobertura clásica de ajonjolí blanco y negro tostado.",
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
    description: "Tartar de atún aleta amarilla fresco aderezado con salsa sriracha, aceite de sésamo picante, pepino y cebollín fino.",
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
    description: "Espárrago fresco, aguacate tierno, zanahoria juliana, pepino y queso crema suave, envuelto en alga nori y ajonjolí.",
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
    description: "Preparado en plancha en vivo con vegetales mixtos de temporada (calabaza, champiñones, cebolla y soya), con salsa teriyaki. Incluye arroz Yakimeshi.",
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
    description: "Cortes de lomo de res tierno, camarones jumbo y salmón a la plancha con mantequilla de ajo y sake japonés. Con yakimeshi especial.",
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
    description: "Fideos soba japoneses salteados al wok caliente con calamar, camarón, vegetales frescos y salsa tonkatsu dulce y ahumada.",
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
    description: "Crujientes brochetas de queso gouda empanizadas en fino panko japonés, con salsa tártara agridulce y salsa kushiage tradicional.",
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
    description: "Vainas de soya tiernas al vapor terminadas con sal marina en escamas o togarashi japonés picante.",
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
    description: "Empanaditas al vapor y doradas a la plancha, rellenas de cerdo especiado, jengibre y col verde con salsa ponzu cítrica.",
    badge: "Favorito",
    tags: ["hot"],
    image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=600&q=80"
  },

  // BARCOS & COMBOS (Del banner de la foto del usuario)
  {
    id: "barco-fiesta-40",
    name: "Barco Fiesta Itto (40 Piezas)",
    category: "barcos-eventos",
    price: 38.99,
    pieces: 40,
    description: "Montaje artesanal en barco de madera con 10 Filadelfia Especial, 10 Roll Itto, 10 California Roll y 10 Crunchy Tampico. Ideal para 3-4 personas.",
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
    description: "El icónico puente rojo de Sushi Itto cargado con una selección de 8 variedades de rollos premium, nigiris y sashimis frescos para eventos.",
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
    description: "Bento Box con 5 California Roll, 1 brocheta Kushiage, Yakimeshi mixto con verduras y ensalada fresca.",
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
    description: "Bebida láctea refrescante de fermentación natural originaria de Japón, con hielo y rodaja de limón.",
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
    description: "Mixología de autor con sake Junmai, maracuyá fresco, hierbabuena, toque de lima y soda espumosa.",
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
    description: "Rollitos baby sin alga externa de queso y jamón (6 uds), mini kushiage, papitas crocantes y jugo natural.",
    badge: "🧒 Kids Fun",
    tags: ["ninos"],
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80"
  }
];

const HISTORY_TIMELINE = [
  {
    year: "Pioneros",
    title: "Primeros en Sushi en El Salvador",
    description: "Sushi Itto abrió sus puertas para enamorar al paladar salvadoreño con la frescura y maestría de la gastronomía japonesa combinada con toques cálidos occidentales."
  },
  {
    year: "Espectáculo",
    title: "El Fuego del Teppanyaki en Vivo",
    description: "Instalamos las primeras planchas de show cooking en San Benito y La Gran Vía, donde los chefs cocinan frente a ti con destreza y emoción."
  },
  {
    year: "Tradición",
    title: "Barcos para Eventos y Domicilio 2243-1166",
    description: "Convertimos los cumpleaños y eventos corporativos en momentos memorables con nuestros barcos y puentes de madera, y la central express de delivery a todo San Salvador."
  },
  {
    year: "Presente",
    title: "5 Sucursales & Experiencia Digital",
    description: "Hoy te recibimos en San Benito, La Gran Vía, Multiplaza, Plaza Malta y Bambu City Center con menús digitales interactivos y la misma devoción por la calidad de siempre."
  }
];

// Estado de la Aplicación
const state = {
  activeCategory: 'all',
  searchQuery: '',
  selectedDietTag: 'all',
  activeBranchId: 'san-benito',
  cart: [],
  orderType: 'delivery',
  selectedPickupBranch: 'san-benito',
  deliveryAddress: '',
  deliveryNotes: '',
  eventGuests: 25,
  isCartOpen: false,
  isReservationOpen: false,
  isMobileMenuOpen: false
};

function formatUSD(amount) {
  return `$${Number(amount).toFixed(2)}`;
}

function initLucide() {
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
  renderTopPromo();
  renderHeroSlides();
  renderPromotions();
  renderMenuCategories();
  renderMenuItems();
  renderEventCalculator();
  renderBranches();
  renderHistory();
  setupEventListeners();
  updateCartUI();
  initLucide();
});

// Render Ticker
function renderTopPromo() {
  const topBar = document.getElementById('top-bar-ticker');
  if (!topBar) return;
  topBar.innerHTML = `
    <div class="flex items-center space-x-6 text-xs font-medium text-gray-300">
      <span class="flex items-center gap-1.5 text-red-400 font-semibold">
        <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
        <span>Roll del Día a $1.99 (Lun - Jue)</span>
      </span>
      <span class="hidden md:inline-block text-gray-600">•</span>
      <span class="hidden md:flex items-center gap-1.5 text-gray-300">
        <i data-lucide="phone-call" class="w-3.5 h-3.5 text-emerald-400"></i>
        <span>Domicilio Express San Salvador: <strong class="text-white hover:text-red-400 transition-colors cursor-pointer" onclick="window.location.href='tel:+50322431166'">${RESTAURANT_INFO.phoneDelivery}</strong></span>
      </span>
      <span class="hidden lg:inline-block text-gray-600">•</span>
      <span class="hidden lg:flex items-center gap-1.5 text-gray-300">
        <i data-lucide="calendar" class="w-3.5 h-3.5 text-amber-400"></i>
        <span>Barcos y Puentes para Eventos Especiales</span>
      </span>
    </div>
  `;
  initLucide();
}

// Render Hero
function renderHeroSlides() {
  const heroContainer = document.getElementById('hero-carousel');
  if (!heroContainer) return;

  heroContainer.innerHTML = `
    <div class="relative w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-800/80 bg-gradient-to-r from-gray-950 via-gray-900 to-black">
      <div class="absolute inset-0 z-0 opacity-30 bg-cover bg-center mix-blend-luminosity" style="background-image: url('assets/media_1788482806954.png');"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/80 to-transparent z-10"></div>
      
      <div class="relative z-20 px-6 py-12 md:px-14 md:py-16 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div class="max-w-2xl text-left">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 border border-red-500/30 text-red-400 text-xs font-semibold mb-4 tracking-wider uppercase">
            <span class="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
            Los Primeros en Sushi en El Salvador
          </div>
          <h1 class="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-4">
            El auténtico arte del <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-red-600">Sushi & Teppanyaki</span>
          </h1>
          <p class="text-gray-300 text-base md:text-lg mb-8 leading-relaxed">
            Más de dos décadas fusionando la tradición milenaria japonesa con la pasión salvadoreña. Disfruta de rollos de autor, planchas de show cooking en vivo y barcos artesanales para tus mejores celebraciones.
          </p>

          <div class="flex flex-wrap gap-4 items-center">
            <a href="#menu" class="px-6 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold shadow-lg shadow-red-600/30 hover:shadow-red-600/50 transition-all flex items-center gap-2 text-sm md:text-base">
              <i data-lucide="utensils" class="w-4 h-4"></i>
              Explorar Menú Digital
            </a>
            <button onclick="window.openReservationModal()" class="px-6 py-3.5 rounded-xl bg-gray-800/90 hover:bg-gray-700 text-white font-semibold border border-gray-700 transition-all flex items-center gap-2 text-sm md:text-base">
              <i data-lucide="calendar-days" class="w-4 h-4 text-red-400"></i>
              Reservar Mesa o Teppan
            </button>
            <a href="tel:+50322431166" class="px-4 py-3.5 rounded-xl bg-emerald-600/20 border border-emerald-500/40 text-emerald-400 font-semibold hover:bg-emerald-600/30 transition-all flex items-center gap-2 text-sm md:text-base">
              <i data-lucide="phone" class="w-4 h-4"></i>
              2243-1166
            </a>
          </div>
        </div>

        <div class="w-full lg:w-5/12 flex justify-center">
          <div class="relative group w-full max-w-md">
            <div class="absolute -inset-1 bg-gradient-to-r from-red-600 to-purple-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition duration-500"></div>
            <div class="relative rounded-2xl overflow-hidden border border-gray-700/70 bg-gray-900 shadow-2xl">
              <img src="assets/banner_eventos.png" alt="Menú de Eventos Sushi Itto" class="w-full h-auto object-cover transform group-hover:scale-105 transition duration-700 max-h-[300px]" onerror="this.src='assets/media_1788482806954.png'"/>
              <div class="p-4 bg-gray-900/95 border-t border-gray-800 flex justify-between items-center">
                <div>
                  <h4 class="text-white font-bold text-sm">Menú de Eventos & Barcos</h4>
                  <p class="text-xs text-gray-400">Puentes tradicionales y barcos desde 40 piezas</p>
                </div>
                <a href="#eventos" class="px-3 py-1.5 text-xs font-semibold text-red-400 bg-red-500/10 border border-red-500/30 rounded-lg hover:bg-red-500/20 transition-all">
                  Ver Paquetes
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-800/80 bg-gray-950/90 px-6 py-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <div class="flex items-center justify-center gap-2 text-xs md:text-sm text-gray-300">
          <i data-lucide="map-pin" class="w-4 h-4 text-red-500"></i>
          <span><strong>5 Sucursales</strong> en El Salvador</span>
        </div>
        <div class="flex items-center justify-center gap-2 text-xs md:text-sm text-gray-300">
          <i data-lucide="flame" class="w-4 h-4 text-amber-500"></i>
          <span><strong>Planchas Teppanyaki</strong> en vivo</span>
        </div>
        <div class="flex items-center justify-center gap-2 text-xs md:text-sm text-gray-300">
          <i data-lucide="bike" class="w-4 h-4 text-emerald-500"></i>
          <span><strong>Delivery Express</strong>: 2243-1166</span>
        </div>
        <div class="flex items-center justify-center gap-2 text-xs md:text-sm text-gray-300">
          <i data-lucide="award" class="w-4 h-4 text-purple-400"></i>
          <span><strong>Calidad Certificada</strong></span>
        </div>
      </div>
    </div>
  `;
  initLucide();
}

// Render Promos
function renderPromotions() {
  const container = document.getElementById('promotions-container');
  if (!container) return;

  container.innerHTML = PROMOTIONS.map(promo => `
    <div class="glass-panel rounded-2xl overflow-hidden flex flex-col group hover:border-red-500/50 transition-all duration-300 shadow-lg">
      <div class="relative h-44 overflow-hidden">
        <img src="${promo.image}" alt="${promo.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
        <div class="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent"></div>
        <span class="absolute top-3 left-3 bg-red-600/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm">
          ${promo.badge}
        </span>
      </div>
      <div class="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 class="text-lg font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
            ${promo.title}
          </h3>
          <p class="text-sm text-gray-400 leading-relaxed">
            ${promo.description}
          </p>
        </div>
        <div class="mt-4 pt-4 border-t border-gray-800/80 flex items-center justify-between">
          <span class="text-xs font-mono text-gray-400 bg-gray-900 px-2 py-1 rounded border border-gray-800">
            Cupón: <strong class="text-red-400">${promo.code}</strong>
          </span>
          <button onclick="window.applyPromoCode('${promo.code}')" class="text-xs font-bold text-white bg-red-600 hover:bg-red-500 px-3 py-1.5 rounded-lg transition-all flex items-center gap-1">
            <span>Aprovechar</span>
            <i data-lucide="arrow-right" class="w-3 h-3"></i>
          </button>
        </div>
      </div>
    </div>
  `).join('');
  initLucide();
}

// Render Categorías
function renderMenuCategories() {
  const container = document.getElementById('menu-categories-bar');
  if (!container) return;

  container.innerHTML = MENU_CATEGORIES.map(cat => {
    const isActive = state.activeCategory === cat.id;
    return `
      <button 
        onclick="window.setMenuCategory('${cat.id}')"
        class="flex-shrink-0 px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-200 flex items-center gap-2 ${
          isActive 
            ? 'bg-red-600 text-white shadow-lg shadow-red-600/30' 
            : 'bg-gray-900/80 text-gray-300 hover:bg-gray-800 hover:text-white border border-gray-800'
        }"
      >
        <i data-lucide="${cat.icon}" class="w-4 h-4"></i>
        <span>${cat.name}</span>
      </button>
    `;
  }).join('');
  initLucide();
}

// Render Menu Items
function renderMenuItems() {
  const container = document.getElementById('menu-items-grid');
  if (!container) return;

  let filtered = MENU_ITEMS.filter(item => {
    const matchesCat = state.activeCategory === 'all' || item.category === state.activeCategory;
    const matchesSearch = !state.searchQuery || 
      item.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(state.searchQuery.toLowerCase());
    const matchesDiet = state.selectedDietTag === 'all' || item.tags.includes(state.selectedDietTag);
    return matchesCat && matchesSearch && matchesDiet;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center">
        <i data-lucide="search-x" class="w-12 h-12 text-gray-600 mx-auto mb-3"></i>
        <h4 class="text-lg font-bold text-gray-300">No se encontraron platillos</h4>
        <p class="text-xs text-gray-500 mt-1">Prueba con otro término de búsqueda o selecciona otra categoría.</p>
        <button onclick="window.resetMenuFilters()" class="mt-4 px-4 py-2 text-xs font-bold text-red-400 bg-red-500/10 border border-red-500/30 rounded-lg hover:bg-red-500/20">
          Ver todo el menú
        </button>
      </div>
    `;
    initLucide();
    return;
  }

  container.innerHTML = filtered.map(item => {
    const piecesText = item.pieces > 1 ? `${item.pieces} piezas` : '1 porción';
    return `
      <div class="glass-panel rounded-2xl overflow-hidden flex flex-col group hover:border-gray-600 transition-all duration-300 shadow-md">
        <div class="relative h-48 overflow-hidden bg-gray-900">
          <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy">
          <div class="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent"></div>
          
          <div class="absolute top-3 left-3 flex flex-wrap gap-1.5">
            <span class="bg-gray-900/90 text-gray-200 text-[11px] font-bold px-2 py-0.5 rounded-full border border-gray-700/80 backdrop-blur-sm">
              ${piecesText}
            </span>
            ${item.badge ? `
              <span class="bg-red-600/90 text-white text-[11px] font-bold px-2 py-0.5 rounded-full backdrop-blur-sm">
                ${item.badge}
              </span>
            ` : ''}
          </div>

          <div class="absolute bottom-3 right-3 bg-gray-950/90 px-2.5 py-1 rounded-lg border border-gray-800 text-amber-400 font-extrabold text-sm sm:text-base shadow">
            ${formatUSD(item.price)}
          </div>
        </div>

        <div class="p-5 flex-1 flex flex-col justify-between">
          <div>
            <h3 class="text-sm sm:text-base font-bold text-white mb-1.5 group-hover:text-red-400 transition-colors">
              ${item.name}
            </h3>
            <p class="text-xs text-gray-400 line-clamp-3 leading-relaxed">
              ${item.description}
            </p>
          </div>

          <div class="mt-4 pt-3 border-t border-gray-800/80 flex items-center justify-between gap-2">
            <div class="flex items-center text-[11px] text-gray-500 gap-1">
              <i data-lucide="shield-check" class="w-3.5 h-3.5 text-emerald-500"></i>
              <span>Fresco al instante</span>
            </div>

            <button 
              onclick="window.addToCart('${item.id}')"
              class="px-3.5 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs shadow-md shadow-red-600/20 hover:shadow-red-600/40 transition-all flex items-center gap-1.5"
            >
              <i data-lucide="plus" class="w-3.5 h-3.5"></i>
              <span>Añadir</span>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
  initLucide();
}

// Render Calculadora de Eventos
function renderEventCalculator() {
  const container = document.getElementById('event-calculator-container');
  if (!container) return;

  const guests = state.eventGuests;
  const pieces = guests * 8;
  const boats = Math.ceil(pieces / 40);
  const bridges = Math.floor(boats / 2);
  const pricePerGuest = 10.50;
  const estTotal = (guests * pricePerGuest).toFixed(2);

  container.innerHTML = `
    <div class="glass-panel p-6 md:p-8 rounded-2xl border border-gray-800">
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <span class="text-red-400 text-xs font-bold uppercase tracking-wider">Planificador en vivo</span>
          <h3 class="text-xl md:text-2xl font-bold text-white">Calculadora de Sushi para Eventos</h3>
          <p class="text-xs md:text-sm text-gray-400">Calcula la cantidad de piezas, barcos y montaje recomendado para tu celebración.</p>
        </div>
        <div class="bg-gray-900 border border-gray-700 px-4 py-2 rounded-xl text-center">
          <span class="text-xs text-gray-400 block">Invitados</span>
          <span class="text-2xl font-extrabold text-white">${guests} <small class="text-xs font-normal text-gray-400">personas</small></span>
        </div>
      </div>

      <div class="mb-8">
        <div class="flex justify-between text-xs text-gray-400 mb-2">
          <span>10 personas (reunión íntima)</span>
          <span>50 personas</span>
          <span>120 personas (banquete)</span>
        </div>
        <input 
          type="range" 
          min="10" 
          max="120" 
          step="5" 
          value="${guests}" 
          oninput="window.updateGuests(this.value)"
          class="w-full cursor-pointer accent-red-600"
        />
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div class="bg-gray-900/90 border border-gray-800 p-4 rounded-xl text-center">
          <div class="w-10 h-10 mx-auto mb-2 rounded-full bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-400">
            <i data-lucide="disc" class="w-5 h-5"></i>
          </div>
          <span class="text-xs text-gray-400 uppercase font-bold">Piezas Sugeridas</span>
          <p class="text-2xl font-extrabold text-white mt-1">${pieces} <span class="text-xs text-red-400 font-semibold">piezas</span></p>
          <span class="text-[11px] text-gray-500">~8 piezas por invitado</span>
        </div>

        <div class="bg-gray-900/90 border border-gray-800 p-4 rounded-xl text-center">
          <div class="w-10 h-10 mx-auto mb-2 rounded-full bg-amber-600/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <i data-lucide="ship" class="w-5 h-5"></i>
          </div>
          <span class="text-xs text-gray-400 uppercase font-bold">Montaje Recomendado</span>
          <p class="text-base sm:text-lg font-bold text-white mt-1">
            ${bridges > 0 ? `${bridges} Puente(s) + ` : ''}${boats - bridges} Barco(s)
          </p>
          <span class="text-[11px] text-gray-500">Vajilla de madera tradicional</span>
        </div>

        <div class="bg-gray-900/90 border border-gray-800 p-4 rounded-xl text-center">
          <div class="w-10 h-10 mx-auto mb-2 rounded-full bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <i data-lucide="dollar-sign" class="w-5 h-5"></i>
          </div>
          <span class="text-xs text-gray-400 uppercase font-bold">Presupuesto Estimado</span>
          <p class="text-2xl font-extrabold text-emerald-400 mt-1">$${estTotal} <span class="text-xs text-gray-400">USD</span></p>
          <span class="text-[11px] text-gray-500">Incluye salsas y palillos</span>
        </div>
      </div>

      <div class="flex flex-col sm:flex-row justify-between items-center gap-4 bg-gray-950 p-4 rounded-xl border border-gray-800">
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
            <i data-lucide="message-circle" class="w-4 h-4"></i>
          </div>
          <div>
            <p class="text-sm font-bold text-white">¿Deseas personalizar rollos o agregar Chef en vivo?</p>
            <p class="text-xs text-gray-400">Recibe una propuesta formal en WhatsApp al instante.</p>
          </div>
        </div>

        <button 
          onclick="window.quoteEventWhatsApp(${guests}, ${pieces}, ${estTotal})"
          class="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-600/30 transition-all flex items-center justify-center gap-2"
        >
          <i data-lucide="send" class="w-4 h-4"></i>
          <span>Solicitar Cotización Inmediata</span>
        </button>
      </div>
    </div>
  `;
  initLucide();
}

// Render Sucursales
function renderBranches() {
  const tabsContainer = document.getElementById('branches-tabs');
  const detailsContainer = document.getElementById('branch-details-card');
  if (!tabsContainer || !detailsContainer) return;

  tabsContainer.innerHTML = BRANCHES.map(branch => {
    const isSelected = state.activeBranchId === branch.id;
    return `
      <button 
        onclick="window.selectBranch('${branch.id}')"
        class="px-4 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all text-left flex items-center justify-between gap-2 ${
          isSelected 
            ? 'bg-red-600 text-white shadow-lg shadow-red-600/30' 
            : 'bg-gray-900/80 text-gray-300 hover:bg-gray-800 border border-gray-800'
        }"
      >
        <div class="flex items-center gap-2 truncate">
          <i data-lucide="map-pin" class="w-4 h-4 flex-shrink-0 ${isSelected ? 'text-white' : 'text-red-500'}"></i>
          <span class="truncate">${branch.name}</span>
        </div>
        <span class="w-2 h-2 rounded-full flex-shrink-0 ${branch.isOpen ? 'bg-emerald-400' : 'bg-red-400'}"></span>
      </button>
    `;
  }).join('');

  const activeBranch = BRANCHES.find(b => b.id === state.activeBranchId) || BRANCHES[0];

  detailsContainer.innerHTML = `
    <div class="glass-panel rounded-2xl overflow-hidden border border-gray-800 grid grid-cols-1 lg:grid-cols-12 gap-0 shadow-xl">
      <div class="lg:col-span-5 relative h-64 lg:h-auto min-h-[260px] bg-gray-900">
        <img src="${activeBranch.image}" alt="${activeBranch.name}" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-gray-950 via-transparent to-transparent"></div>
        <div class="absolute top-4 left-4">
          <span class="bg-emerald-600/90 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-white animate-pulse"></span>
            Abierto Ahora
          </span>
        </div>
      </div>

      <div class="lg:col-span-7 p-6 lg:p-8 flex flex-col justify-between">
        <div>
          <div class="flex justify-between items-start gap-4 mb-3">
            <div>
              <span class="text-xs font-bold text-red-400 uppercase tracking-wider">${activeBranch.zone}</span>
              <h3 class="text-2xl font-extrabold text-white">Sucursal ${activeBranch.name}</h3>
            </div>
            <div class="text-right">
              <span class="text-xs text-gray-400 block">Central de Pedidos</span>
              <a href="tel:+50322431166" class="text-base font-extrabold text-emerald-400 hover:underline">
                ${activeBranch.phone}
              </a>
            </div>
          </div>

          <p class="text-sm text-gray-300 mb-1 flex items-start gap-2">
            <i data-lucide="navigation" class="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5"></i>
            <span>${activeBranch.address}</span>
          </p>
          <p class="text-xs text-gray-400 mb-6 italic">
            Ref: ${activeBranch.reference}
          </p>

          <div class="bg-gray-900/90 border border-gray-800 rounded-xl p-4 mb-6">
            <h4 class="text-xs font-bold text-gray-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <i data-lucide="clock" class="w-3.5 h-3.5 text-amber-400"></i>
              <span>Horario de Atención</span>
            </h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-300">
              <div class="flex justify-between border-b border-gray-800 pb-1">
                <span class="text-gray-400">Lunes a Jueves:</span>
                <span class="font-semibold text-white">${activeBranch.hours.weekdays}</span>
              </div>
              <div class="flex justify-between border-b border-gray-800 pb-1">
                <span class="text-gray-400">Viernes a Domingo:</span>
                <span class="font-semibold text-white">${activeBranch.hours.weekend}</span>
              </div>
            </div>
          </div>

          <div class="mb-6">
            <h4 class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Servicios en Sucursal</h4>
            <div class="flex flex-wrap gap-2">
              ${activeBranch.features.map(feat => `
                <span class="px-2.5 py-1 rounded-lg bg-gray-800/80 border border-gray-700 text-xs text-gray-200 flex items-center gap-1.5">
                  <i data-lucide="check" class="w-3 h-3 text-red-400"></i>
                  <span>${feat}</span>
                </span>
              `).join('')}
            </div>
          </div>
        </div>

        <div class="pt-4 border-t border-gray-800 flex flex-wrap gap-3">
          <a 
            href="${activeBranch.googleMapsUrl}" 
            target="_blank" 
            class="px-4 py-2.5 rounded-xl bg-gray-800 hover:bg-gray-700 text-white font-semibold text-xs border border-gray-700 transition-all flex items-center gap-2"
          >
            <i data-lucide="map" class="w-4 h-4 text-red-400"></i>
            <span>Google Maps</span>
          </a>

          <a 
            href="${activeBranch.wazeUrl}" 
            target="_blank" 
            class="px-4 py-2.5 rounded-xl bg-gray-800 hover:bg-gray-700 text-white font-semibold text-xs border border-gray-700 transition-all flex items-center gap-2"
          >
            <i data-lucide="compass" class="w-4 h-4 text-sky-400"></i>
            <span>Waze</span>
          </a>

          <button 
            onclick="window.openReservationForBranch('${activeBranch.id}')"
            class="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs shadow-md shadow-red-600/20 transition-all flex items-center gap-2 ml-auto"
          >
            <i data-lucide="calendar" class="w-4 h-4"></i>
            <span>Reservar aquí</span>
          </button>
        </div>
      </div>
    </div>
  `;
  initLucide();
}

// Render Historia
function renderHistory() {
  const container = document.getElementById('history-timeline-container');
  if (!container) return;

  container.innerHTML = HISTORY_TIMELINE.map((item, index) => `
    <div class="relative pl-8 md:pl-0 md:grid md:grid-cols-2 md:gap-8 group">
      <div class="hidden md:flex items-center justify-end ${index % 2 === 0 ? 'order-1 text-right' : 'order-2 text-left'}">
        <div class="glass-panel p-6 rounded-2xl border border-gray-800 group-hover:border-red-500/40 transition-all">
          <span class="text-xs font-bold text-red-500 uppercase tracking-widest block mb-1">${item.year}</span>
          <h4 class="text-lg font-bold text-white mb-2">${item.title}</h4>
          <p class="text-xs text-gray-400 leading-relaxed">${item.description}</p>
        </div>
      </div>

      <div class="absolute left-0 top-2 md:static md:flex md:items-center md:justify-center ${index % 2 === 0 ? 'order-2' : 'order-1'}">
        <div class="w-8 h-8 rounded-full bg-gray-900 border-2 border-red-500 flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-red-500/20">
          ${index + 1}
        </div>
      </div>

      <div class="md:hidden glass-panel p-5 rounded-2xl border border-gray-800 mb-6">
        <span class="text-xs font-bold text-red-500 uppercase tracking-widest block mb-1">${item.year}</span>
        <h4 class="text-base font-bold text-white mb-1">${item.title}</h4>
        <p class="text-xs text-gray-400 leading-relaxed">${item.description}</p>
      </div>
    </div>
  `).join('');
  initLucide();
}

// Carrito
function addToCart(itemId) {
  const item = MENU_ITEMS.find(i => i.id === itemId);
  if (!item) return;

  const existing = state.cart.find(ci => ci.id === itemId);
  if (existing) {
    existing.quantity += 1;
  } else {
    state.cart.push({ ...item, quantity: 1 });
  }

  updateCartUI();
  showToast(`¡Agregado a tu orden: ${item.name}!`);
}

function updateCartQuantity(itemId, change) {
  const index = state.cart.findIndex(ci => ci.id === itemId);
  if (index === -1) return;

  state.cart[index].quantity += change;
  if (state.cart[index].quantity <= 0) {
    state.cart.splice(index, 1);
  }
  updateCartUI();
}

function removeFromCart(itemId) {
  state.cart = state.cart.filter(ci => ci.id !== itemId);
  updateCartUI();
}

function updateCartUI() {
  const badge = document.getElementById('cart-badge');
  const itemsContainer = document.getElementById('cart-items-list');
  const subtotalElem = document.getElementById('cart-subtotal');
  const totalElem = document.getElementById('cart-total');
  const deliveryFeeElem = document.getElementById('cart-delivery-fee');

  const totalCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  if (badge) {
    badge.innerText = totalCount;
    badge.classList.toggle('hidden', totalCount === 0);
  }

  const subtotal = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = state.orderType === 'delivery' ? (subtotal > 25 ? 0 : 2.00) : 0;
  const total = subtotal + deliveryFee;

  if (subtotalElem) subtotalElem.innerText = formatUSD(subtotal);
  if (deliveryFeeElem) {
    deliveryFeeElem.innerText = state.orderType === 'delivery' 
      ? (deliveryFee === 0 ? '¡Gratis!' : formatUSD(deliveryFee)) 
      : '$0.00';
  }
  if (totalElem) totalElem.innerText = formatUSD(total);

  if (!itemsContainer) return;

  if (state.cart.length === 0) {
    itemsContainer.innerHTML = `
      <div class="py-16 text-center text-gray-500">
        <i data-lucide="shopping-bag" class="w-12 h-12 mx-auto mb-3 opacity-30"></i>
        <p class="text-sm font-semibold text-gray-400">Tu orden está vacía</p>
        <p class="text-xs mt-1">Explora nuestro menú y añade tus rollos favoritos.</p>
      </div>
    `;
    initLucide();
    return;
  }

  itemsContainer.innerHTML = state.cart.map(item => `
    <div class="flex items-center justify-between gap-3 p-3 rounded-xl bg-gray-900/90 border border-gray-800">
      <img src="${item.image}" alt="${item.name}" class="w-14 h-14 rounded-lg object-cover flex-shrink-0">
      <div class="flex-1 min-w-0">
        <h5 class="text-xs font-bold text-white truncate">${item.name}</h5>
        <span class="text-xs font-extrabold text-amber-400 block">${formatUSD(item.price)}</span>
      </div>
      <div class="flex items-center gap-1.5 bg-gray-800 rounded-lg p-1 border border-gray-700">
        <button onclick="window.updateCartQuantity('${item.id}', -1)" class="w-6 h-6 rounded flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-700 text-xs font-bold">
          -
        </button>
        <span class="w-6 text-center text-xs font-bold text-white">${item.quantity}</span>
        <button onclick="window.updateCartQuantity('${item.id}', 1)" class="w-6 h-6 rounded flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-700 text-xs font-bold">
          +
        </button>
      </div>
      <button onclick="window.removeFromCart('${item.id}')" class="text-gray-500 hover:text-red-400 p-1">
        <i data-lucide="trash-2" class="w-4 h-4"></i>
      </button>
    </div>
  `).join('');
  initLucide();
}

function checkoutWhatsApp() {
  if (state.cart.length === 0) {
    showToast('Tu carrito está vacío. Agrega platillos antes de ordenar.', 'error');
    return;
  }

  const subtotal = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = state.orderType === 'delivery' ? (subtotal > 25 ? 0 : 2.00) : 0;
  const total = subtotal + deliveryFee;

  let message = `*🍱 PEDIDO SUSHI ITTO EL SALVADOR*\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `*Tipo:* ${state.orderType === 'delivery' ? '🛵 Entrega a Domicilio' : '🥡 Para Retirar en Sucursal'}\n`;
  
  if (state.orderType === 'pickup') {
    const branch = BRANCHES.find(b => b.id === state.selectedPickupBranch);
    message += `*Sucursal de Retiro:* ${branch ? branch.name : 'San Benito'}\n`;
  } else {
    message += `*Dirección:* ${state.deliveryAddress || 'A coordinar por este medio'}\n`;
  }

  if (state.deliveryNotes) {
    message += `*Notas/Instrucciones:* ${state.deliveryNotes}\n`;
  }

  message += `\n*Detalle de la orden:*\n`;
  state.cart.forEach(item => {
    message += `• ${item.quantity}x ${item.name} (${formatUSD(item.price * item.quantity)})\n`;
  });

  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `*Subtotal:* ${formatUSD(subtotal)}\n`;
  if (state.orderType === 'delivery') {
    message += `*Costo de Envío:* ${deliveryFee === 0 ? 'GRATIS' : formatUSD(deliveryFee)}\n`;
  }
  message += `*TOTAL A PAGAR:* ${formatUSD(total)} USD\n\n`;
  message += `_Por favor confirmar tiempo estimado de preparación y método de pago (Tarjeta / Efectivo / Bitcoin)._`;

  const encoded = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/50322431166?text=${encoded}`;
  window.open(whatsappUrl, '_blank');
}

function quoteEventWhatsApp(guests, pieces, estTotal) {
  let message = `*🚢 SOLICITUD DE COTIZACIÓN - MENÚ DE EVENTOS SUSHI ITTO*\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `Hola Sushi Itto El Salvador, me gustaría cotizar un montaje de sushi para mi evento especial:\n\n`;
  message += `👥 *Invitados estimados:* ${guests} personas\n`;
  message += `🍣 *Piezas estimadas:* ${pieces} piezas surtidas\n`;
  message += `💰 *Presupuesto referencial:* ~$${estTotal} USD\n\n`;
  message += `_Me gustaría recibir detalles sobre opciones de barcos, puentes y disponibilidad de Chef en vivo._`;

  const encoded = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/50322431166?text=${encoded}`;
  window.open(whatsappUrl, '_blank');
}

function submitReservation(event) {
  event.preventDefault();
  const branchSelect = document.getElementById('res-branch').value;
  const expSelect = document.getElementById('res-experience').value;
  const dateVal = document.getElementById('res-date').value;
  const timeVal = document.getElementById('res-time').value;
  const guestsVal = document.getElementById('res-guests').value;
  const nameVal = document.getElementById('res-name').value;
  const phoneVal = document.getElementById('res-phone').value;
  const notesVal = document.getElementById('res-notes').value;

  const branchObj = BRANCHES.find(b => b.id === branchSelect);
  const branchName = branchObj ? branchObj.name : branchSelect;

  let message = `*📅 RESERVACIÓN DE MESA - SUSHI ITTO*\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `*Nombre:* ${nameVal}\n`;
  message += `*Teléfono:* ${phoneVal}\n`;
  message += `*Sucursal:* ${branchName}\n`;
  message += `*Experiencia:* ${expSelect}\n`;
  message += `*Fecha:* ${dateVal}\n`;
  message += `*Hora:* ${timeVal}\n`;
  message += `*Personas:* ${guestsVal}\n`;
  if (notesVal) message += `*Notas:* ${notesVal}\n`;

  window.closeReservationModal();
  showToast(`¡Solicitud de reserva para ${nameVal} enviada con éxito!`);

  const encoded = encodeURIComponent(message);
  setTimeout(() => {
    window.open(`https://wa.me/50322431166?text=${encoded}`, '_blank');
  }, 800);
}

function setupEventListeners() {
  const searchInput = document.getElementById('menu-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      renderMenuItems();
    });
  }

  const dietButtons = document.querySelectorAll('[data-diet-filter]');
  dietButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      dietButtons.forEach(b => b.classList.remove('bg-red-600', 'text-white'));
      dietButtons.forEach(b => b.classList.add('bg-gray-800', 'text-gray-300'));
      btn.classList.remove('bg-gray-800', 'text-gray-300');
      btn.classList.add('bg-red-600', 'text-white');
      state.selectedDietTag = btn.dataset.dietFilter;
      renderMenuItems();
    });
  });

  const orderTypeRadios = document.querySelectorAll('input[name="order-type"]');
  orderTypeRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
      state.orderType = e.target.value;
      const pickupSection = document.getElementById('pickup-branch-section');
      const deliverySection = document.getElementById('delivery-address-section');
      if (pickupSection) pickupSection.classList.toggle('hidden', state.orderType !== 'pickup');
      if (deliverySection) deliverySection.classList.toggle('hidden', state.orderType !== 'delivery');
      updateCartUI();
    });
  });

  const addressInput = document.getElementById('cart-address-input');
  if (addressInput) {
    addressInput.addEventListener('input', (e) => {
      state.deliveryAddress = e.target.value;
    });
  }

  const notesInput = document.getElementById('cart-notes-input');
  if (notesInput) {
    notesInput.addEventListener('input', (e) => {
      state.deliveryNotes = e.target.value;
    });
  }

  const pickupBranchSelect = document.getElementById('cart-pickup-branch');
  if (pickupBranchSelect) {
    pickupBranchSelect.addEventListener('change', (e) => {
      state.selectedPickupBranch = e.target.value;
    });
  }
}

function showToast(message, type = 'success') {
  const toastContainer = document.getElementById('toast-container');
  if (!toastContainer) return;

  const toast = document.createElement('div');
  toast.className = `p-4 rounded-xl shadow-2xl flex items-center gap-3 text-xs sm:text-sm font-semibold text-white transition-all transform duration-300 translate-y-2 ${
    type === 'error' ? 'bg-red-700 border border-red-500' : 'bg-gray-900 border border-emerald-500/50 text-white'
  }`;
  toast.innerHTML = `
    <i data-lucide="${type === 'error' ? 'alert-circle' : 'check-circle-2'}" class="w-5 h-5 ${type === 'error' ? 'text-red-300' : 'text-emerald-400'}"></i>
    <span>${message}</span>
  `;
  toastContainer.appendChild(toast);
  initLucide();

  setTimeout(() => {
    toast.classList.remove('translate-y-2');
    toast.classList.add('translate-y-0');
  }, 10);

  setTimeout(() => {
    toast.classList.add('opacity-0', 'scale-95');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Ventana global
window.setMenuCategory = (catId) => {
  state.activeCategory = catId;
  renderMenuCategories();
  renderMenuItems();
};

window.resetMenuFilters = () => {
  state.activeCategory = 'all';
  state.searchQuery = '';
  state.selectedDietTag = 'all';
  const searchInput = document.getElementById('menu-search-input');
  if (searchInput) searchInput.value = '';
  renderMenuCategories();
  renderMenuItems();
};

window.selectBranch = (branchId) => {
  state.activeBranchId = branchId;
  renderBranches();
};

window.updateGuests = (val) => {
  state.eventGuests = Number(val);
  renderEventCalculator();
};

window.addToCart = addToCart;
window.updateCartQuantity = updateCartQuantity;
window.removeFromCart = removeFromCart;
window.checkoutWhatsApp = checkoutWhatsApp;
window.quoteEventWhatsApp = quoteEventWhatsApp;
window.submitReservation = submitReservation;

window.applyPromoCode = (code) => {
  showToast(`¡Cupón ${code} activado!`);
  window.openCart();
};

window.openCart = () => {
  state.isCartOpen = true;
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-overlay');
  if (drawer) drawer.classList.remove('translate-x-full');
  if (overlay) overlay.classList.remove('hidden');
};

window.closeCart = () => {
  state.isCartOpen = false;
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-overlay');
  if (drawer) drawer.classList.add('translate-x-full');
  if (overlay) overlay.classList.add('hidden');
};

window.openReservationModal = () => {
  const modal = document.getElementById('reservation-modal');
  if (modal) modal.classList.remove('hidden');
};

window.openReservationForBranch = (branchId) => {
  window.openReservationModal();
  const branchSelect = document.getElementById('res-branch');
  if (branchSelect) branchSelect.value = branchId;
};

window.closeReservationModal = () => {
  const modal = document.getElementById('reservation-modal');
  if (modal) modal.classList.add('hidden');
};

window.toggleMobileMenu = () => {
  state.isMobileMenuOpen = !state.isMobileMenuOpen;
  const drawer = document.getElementById('mobile-menu-drawer');
  if (drawer) drawer.classList.toggle('hidden', !state.isMobileMenuOpen);
};

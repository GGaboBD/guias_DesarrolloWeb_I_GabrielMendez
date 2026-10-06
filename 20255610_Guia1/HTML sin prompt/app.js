import {
  RESTAURANT_INFO,
  PROMOTIONS,
  BRANCHES,
  MENU_CATEGORIES,
  MENU_ITEMS,
  CATERING_PACKAGES,
  HISTORY_TIMELINE
} from './data.js';

// Estado global de la aplicación
const state = {
  activeCategory: 'all',
  searchQuery: '',
  selectedDietTag: 'all',
  activeBranchId: 'san-benito',
  cart: [],
  orderType: 'delivery', // 'delivery' | 'pickup'
  selectedPickupBranch: 'san-benito',
  deliveryAddress: '',
  deliveryNotes: '',
  eventGuests: 25,
  isCartOpen: false,
  isReservationOpen: false,
  isMobileMenuOpen: false
};

// Utilidad para formatear moneda USD
function formatUSD(amount) {
  return `$${Number(amount).toFixed(2)}`;
}

// Inicialización de la aplicación al cargar DOM
document.addEventListener('DOMContentLoaded', () => {
  initLucide();
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
});

function initLucide() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// 1. Barra superior de promociones
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

// 2. Hero Carousel / Banner
function renderHeroSlides() {
  const heroContainer = document.getElementById('hero-carousel');
  if (!heroContainer) return;

  heroContainer.innerHTML = `
    <div class="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-800/80 bg-gradient-to-r from-gray-950 via-gray-900 to-black">
      <div class="absolute inset-0 z-0 opacity-40 bg-cover bg-center mix-blend-luminosity" style="background-image: url('assets/media_1788482806954.png');"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/80 to-transparent z-10"></div>
      
      <div class="relative z-20 px-6 py-12 md:px-14 md:py-16 flex flex-col md:flex-row items-center justify-between gap-8">
        <div class="max-w-2xl text-left">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 border border-red-500/30 text-red-400 text-xs font-semibold mb-4 tracking-wider uppercase">
            <span class="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
            Los Primeros en Sushi en El Salvador
          </div>
          <h1 class="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-4">
            El auténtico arte del <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-red-600">Sushi & Teppanyaki</span>
          </h1>
          <p class="text-gray-300 text-base md:text-lg mb-8 leading-relaxed">
            Más de dos décadas fusionando la tradición milenaria japonesa con la pasión salvadoreña. Disfruta de rollos de autor, planchas en vivo y los famosos barcos para eventos especiales.
          </p>

          <div class="flex flex-wrap gap-4 items-center">
            <a href="#menu" class="px-6 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold shadow-lg shadow-red-600/30 hover:shadow-red-600/50 transition-all flex items-center gap-2 text-sm md:text-base">
              <i data-lucide="utensils" class="w-4 h-4"></i>
              Explorar Menú Digital
            </a>
            <button onclick="window.openReservationModal()" class="px-6 py-3.5 rounded-xl bg-gray-800/80 hover:bg-gray-700/80 text-white font-semibold border border-gray-700 transition-all flex items-center gap-2 text-sm md:text-base">
              <i data-lucide="calendar-days" class="w-4 h-4 text-red-400"></i>
              Reservar Mesa o Teppan
            </button>
            <a href="tel:+50322431166" class="px-4 py-3.5 rounded-xl bg-emerald-600/20 border border-emerald-500/40 text-emerald-400 font-semibold hover:bg-emerald-600/30 transition-all flex items-center gap-2 text-sm md:text-base">
              <i data-lucide="phone" class="w-4 h-4"></i>
              2243-1166
            </a>
          </div>
        </div>

        <div class="w-full md:w-5/12 flex justify-center">
          <div class="relative group">
            <div class="absolute -inset-1 bg-gradient-to-r from-red-600 to-purple-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition duration-500"></div>
            <div class="relative rounded-2xl overflow-hidden border border-gray-700/70 bg-gray-900 shadow-2xl">
              <img src="assets/banner_eventos.png" alt="Menú de Eventos Sushi Itto" class="w-full h-auto object-cover transform group-hover:scale-105 transition duration-700 max-h-[300px]" onerror="this.src='assets/media_1788482806954.png'"/>
              <div class="p-4 bg-gray-900/90 border-t border-gray-800 flex justify-between items-center">
                <div>
                  <h4 class="text-white font-bold text-sm">Menú de Eventos & Barcos</h4>
                  <p class="text-xs text-gray-400">Reserva tu montaje exclusivo para fiestas</p>
                </div>
                <a href="#eventos" class="px-3 py-1.5 text-xs font-semibold text-red-400 bg-red-500/10 border border-red-500/30 rounded-lg hover:bg-red-500/20 transition-all">
                  Cotizar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Barra inferior de garantías / atributos -->
      <div class="border-t border-gray-800/80 bg-gray-950/90 px-6 py-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <div class="flex items-center justify-center gap-2 text-xs md:text-sm text-gray-300">
          <i data-lucide="map-pin" class="w-4 h-4 text-red-500"></i>
          <span><strong>5 Sucursales</strong> en El Salvador</span>
        </div>
        <div class="flex items-center justify-center gap-2 text-xs md:text-sm text-gray-300">
          <i data-lucide="flame" class="w-4 h-4 text-amber-500"></i>
          <span><strong>Planchas de Teppanyaki</strong> en vivo</span>
        </div>
        <div class="flex items-center justify-center gap-2 text-xs md:text-sm text-gray-300">
          <i data-lucide="bike" class="w-4 h-4 text-emerald-500"></i>
          <span><strong>Delivery Express</strong>: 2243-1166</span>
        </div>
        <div class="flex items-center justify-center gap-2 text-xs md:text-sm text-gray-300">
          <i data-lucide="award" class="w-4 h-4 text-purple-400"></i>
          <span><strong>Ingredientes Frescos</strong> certificados</span>
        </div>
      </div>
    </div>
  `;
  initLucide();
}

// 3. Promociones destacadas
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

// 4. Categorías del Menú
function renderMenuCategories() {
  const container = document.getElementById('menu-categories-bar');
  if (!container) return;

  container.innerHTML = MENU_CATEGORIES.map(cat => {
    const isActive = state.activeCategory === cat.id;
    return `
      <button 
        onclick="window.setMenuCategory('${cat.id}')"
        class="flex-shrink-0 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center gap-2 ${
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

// 5. Items del Menú
function renderMenuItems() {
  const container = document.getElementById('menu-items-grid');
  if (!container) return;

  // Filtrado por categoría, búsqueda y diet tag
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
        <h4 class="text-lg font-bold text-gray-300">No encontramos platillos con esa búsqueda</h4>
        <p class="text-sm text-gray-500 mt-1">Intenta con otra palabra clave o selecciona otra categoría.</p>
        <button onclick="window.resetMenuFilters()" class="mt-4 px-4 py-2 text-xs font-bold text-red-400 bg-red-500/10 border border-red-500/30 rounded-lg hover:bg-red-500/20">
          Restablecer filtros
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

          <div class="absolute bottom-3 right-3 bg-gray-950/90 px-2.5 py-1 rounded-lg border border-gray-800 text-amber-400 font-extrabold text-base shadow">
            ${formatUSD(item.price)}
          </div>
        </div>

        <div class="p-5 flex-1 flex flex-col justify-between">
          <div>
            <h3 class="text-base font-bold text-white mb-1.5 group-hover:text-red-400 transition-colors">
              ${item.name}
            </h3>
            <p class="text-xs text-gray-400 line-clamp-3 leading-relaxed">
              ${item.description}
            </p>
          </div>

          <div class="mt-4 pt-3 border-t border-gray-800/80 flex items-center justify-between gap-2">
            <div class="flex items-center text-xs text-gray-500 gap-1">
              <i data-lucide="shield-check" class="w-3.5 h-3.5 text-emerald-500"></i>
              <span>Preparado al momento</span>
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

// 6. Calculadora interactiva de Eventos & Barcos
function renderEventCalculator() {
  const container = document.getElementById('event-calculator-container');
  if (!container) return;

  const guests = state.eventGuests;
  // Cálculo: aprox 8 a 10 piezas de sushi por persona si es banquete principal
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
          <p class="text-xs md:text-sm text-gray-400">Calcula la cantidad perfecta de piezas, barcos y montaje para tu fiesta o reunión.</p>
        </div>
        <div class="bg-gray-900 border border-gray-700 px-4 py-2 rounded-xl text-center">
          <span class="text-xs text-gray-400 block">Número de invitados</span>
          <span class="text-2xl font-extrabold text-white">${guests} <small class="text-xs font-normal text-gray-400">personas</small></span>
        </div>
      </div>

      <!-- Slider de invitados -->
      <div class="mb-8">
        <div class="flex justify-between text-xs text-gray-400 mb-2">
          <span>10 personas (reunión íntima)</span>
          <span>50 personas</span>
          <span>100+ personas (banquete)</span>
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

      <!-- Tarjetas de estimación -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div class="bg-gray-900/90 border border-gray-800 p-4 rounded-xl text-center">
          <div class="w-10 h-10 mx-auto mb-2 rounded-full bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-400">
            <i data-lucide="disc" class="w-5 h-5"></i>
          </div>
          <span class="text-xs text-gray-400 uppercase font-bold">Piezas Sugeridas</span>
          <p class="text-2xl font-extrabold text-white mt-1">${pieces} <span class="text-xs text-red-400 font-semibold">piezas</span></p>
          <span class="text-[11px] text-gray-500">~8 piezas por persona</span>
        </div>

        <div class="bg-gray-900/90 border border-gray-800 p-4 rounded-xl text-center">
          <div class="w-10 h-10 mx-auto mb-2 rounded-full bg-amber-600/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <i data-lucide="ship" class="w-5 h-5"></i>
          </div>
          <span class="text-xs text-gray-400 uppercase font-bold">Montaje Recomendado</span>
          <p class="text-lg font-bold text-white mt-1">
            ${bridges > 0 ? `${bridges} Puente(s) + ` : ''}${boats - bridges} Barco(s)
          </p>
          <span class="text-[11px] text-gray-500">Madera japonesa artesanal</span>
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

      <!-- Botón de acción para cotizar -->
      <div class="flex flex-col sm:flex-row justify-between items-center gap-4 bg-gray-950 p-4 rounded-xl border border-gray-800">
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
            <i data-lucide="message-circle" class="w-4 h-4"></i>
          </div>
          <div>
            <p class="text-sm font-bold text-white">¿Deseas personalizar rollos o incluir Chef en vivo?</p>
            <p class="text-xs text-gray-400">Enviamos la propuesta formal a tu WhatsApp en minutos.</p>
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

// 7. Directorio de Sucursales
function renderBranches() {
  const tabsContainer = document.getElementById('branches-tabs');
  const detailsContainer = document.getElementById('branch-details-card');
  if (!tabsContainer || !detailsContainer) return;

  // Render tabs
  tabsContainer.innerHTML = BRANCHES.map(branch => {
    const isSelected = state.activeBranchId === branch.id;
    return `
      <button 
        onclick="window.selectBranch('${branch.id}')"
        class="px-5 py-3 rounded-xl font-bold text-sm transition-all text-left flex items-center justify-between gap-3 ${
          isSelected 
            ? 'bg-red-600 text-white shadow-lg shadow-red-600/30' 
            : 'bg-gray-900/80 text-gray-300 hover:bg-gray-800 border border-gray-800'
        }"
      >
        <div class="flex items-center gap-2">
          <i data-lucide="map-pin" class="w-4 h-4 ${isSelected ? 'text-white' : 'text-red-500'}"></i>
          <span>${branch.name}</span>
        </div>
        <span class="w-2 h-2 rounded-full ${branch.isOpen ? 'bg-emerald-400' : 'bg-red-400'}"></span>
      </button>
    `;
  }).join('');

  // Render active branch
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

          <p class="text-sm text-gray-300 mb-2 flex items-start gap-2">
            <i data-lucide="navigation" class="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5"></i>
            <span>${activeBranch.address}</span>
          </p>
          <p class="text-xs text-gray-400 mb-6 italic">
            Ref: ${activeBranch.reference}
          </p>

          <!-- Horarios -->
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

          <!-- Amenidades / Servicios -->
          <div class="mb-6">
            <h4 class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Servicios Disponibles</h4>
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

        <!-- Botones de navegación y acción -->
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
            <span>Reservar en esta Sucursal</span>
          </button>
        </div>
      </div>
    </div>
  `;
  initLucide();
}

// 8. Historia & Tradición
function renderHistory() {
  const container = document.getElementById('history-timeline-container');
  if (!container) return;

  container.innerHTML = HISTORY_TIMELINE.map((item, index) => `
    <div class="relative pl-8 md:pl-0 md:grid md:grid-cols-2 md:gap-8 group">
      <!-- Línea indicadora -->
      <div class="hidden md:flex items-center justify-end ${index % 2 === 0 ? 'order-1 text-right' : 'order-2 text-left'}">
        <div class="glass-panel p-6 rounded-2xl border border-gray-800 group-hover:border-red-500/40 transition-all">
          <span class="text-xs font-bold text-red-500 uppercase tracking-widest block mb-1">${item.year}</span>
          <h4 class="text-lg font-bold text-white mb-2">${item.title}</h4>
          <p class="text-xs text-gray-400 leading-relaxed">${item.description}</p>
        </div>
      </div>

      <!-- Punto central -->
      <div class="absolute left-0 top-2 md:static md:flex md:items-center md:justify-center ${index % 2 === 0 ? 'order-2' : 'order-1'}">
        <div class="w-8 h-8 rounded-full bg-gray-900 border-2 border-red-500 flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-red-500/20">
          ${index + 1}
        </div>
      </div>

      <!-- Para móviles -->
      <div class="md:hidden glass-panel p-5 rounded-2xl border border-gray-800 mb-6">
        <span class="text-xs font-bold text-red-500 uppercase tracking-widest block mb-1">${item.year}</span>
        <h4 class="text-base font-bold text-white mb-1">${item.title}</h4>
        <p class="text-xs text-gray-400 leading-relaxed">${item.description}</p>
      </div>
    </div>
  `).join('');
  initLucide();
}

// 9. Lógica del Carrito y Pedidos
export function addToCart(itemId) {
  const item = MENU_ITEMS.find(i => i.id === itemId);
  if (!item) return;

  const existing = state.cart.find(ci => ci.id === itemId);
  if (existing) {
    existing.quantity += 1;
  } else {
    state.cart.push({ ...item, quantity: 1 });
  }

  updateCartUI();
  showToast(`¡Agregado al pedido: ${item.name}!`);
}

export function updateCartQuantity(itemId, change) {
  const index = state.cart.findIndex(ci => ci.id === itemId);
  if (index === -1) return;

  state.cart[index].quantity += change;
  if (state.cart[index].quantity <= 0) {
    state.cart.splice(index, 1);
  }
  updateCartUI();
}

export function removeFromCart(itemId) {
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

// Generación del pedido para WhatsApp
export function checkoutWhatsApp() {
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

// Cotización de eventos vía WhatsApp
export function quoteEventWhatsApp(guests, pieces, estTotal) {
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

// 10. Reservaciones
export function submitReservation(event) {
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

  // Cerrar modal
  window.closeReservationModal();

  showToast(`¡Solicitud de reserva para ${nameVal} enviada con éxito!`);

  // Opción de enviar también a WhatsApp
  const encoded = encodeURIComponent(message);
  setTimeout(() => {
    window.open(`https://wa.me/50322431166?text=${encoded}`, '_blank');
  }, 1000);
}

// Manejo de eventos de UI
function setupEventListeners() {
  // Búsqueda en menú
  const searchInput = document.getElementById('menu-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      renderMenuItems();
    });
  }

  // Selector de filtros dietéticos
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

  // Switcher orden: delivery vs pickup
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

// Helper toasts
function showToast(message, type = 'success') {
  const toastContainer = document.getElementById('toast-container');
  if (!toastContainer) return;

  const toast = document.createElement('div');
  toast.className = `p-4 rounded-xl shadow-2xl flex items-center gap-3 text-sm font-semibold text-white transition-all transform duration-300 translate-y-2 ${
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

// Exportar funciones globales a window para interactividad HTML
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
  showToast(`¡Cupón ${code} aplicado a tu orden!`);
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

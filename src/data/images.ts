/**
 * Image slots. Drop a real photo at public/images/<name>.jpg (or .webp/.png) and it replaces
 * the SVG product-geometry art in public/images/art/<name>.svg automatically on the next build.
 * Run `npm run images` afterwards to generate responsive WebP/AVIF variants.
 */
export interface ImageSlot {
  name: string;
  width: number;
  height: number;
  alt: string;
  usedOn: string;
  brief: string;
}

export const imageSlots: Record<string, ImageSlot> = {
  'hero-cooktop': {
    name: 'hero-cooktop',
    width: 1920,
    height: 1080,
    alt: 'Dark glass cooktop with a teal-lit burner ring',
    usedOn: 'Home hero (full-bleed, copy overlays the left 45%)',
    brief:
      'Real Aria job or product still: dark glass/induction cooktop, low-key light, subject weighted right. 2400×1350 min.',
  },
  'services-overview': {
    name: 'services-overview',
    width: 1200,
    height: 900,
    alt: 'Row of stainless kitchen appliance fronts in low light',
    usedOn: 'Services index hero',
    brief: 'Built-in kitchen appliance wall or stainless fronts, dark and even. 1600×1200 min.',
  },
  'about-diagnostics': {
    name: 'about-diagnostics',
    width: 1200,
    height: 900,
    alt: 'Close-up of an appliance control board with teal circuit traces',
    usedOn: 'About hero + home About teaser',
    brief:
      'Hands-on diagnosis close-up (meter on a control board, technician hands). No clipboard stock poses. 1600×1200 min.',
  },
  'service-area': {
    name: 'service-area',
    width: 1200,
    height: 900,
    alt: 'Abstract street-grid pattern with a teal location marker',
    usedOn: 'Service area hero',
    brief: 'Real Vaughan street or residential exterior (no other-city landmarks). 1600×1200 min.',
  },
  'service-refrigerator': {
    name: 'service-refrigerator',
    width: 1200,
    height: 900,
    alt: 'Brushed stainless French-door refrigerator with vertical handles',
    usedOn: '/services/refrigerator/ hero',
    brief: 'Stainless French-door or built-in fridge, tight crop on doors and handles. 1600×1200 min.',
  },
  'service-oven-stove': {
    name: 'service-oven-stove',
    width: 1200,
    height: 900,
    alt: 'Black glass electric cooktop with a lit element ring and touch controls',
    usedOn: '/services/oven-stove/ hero',
    brief: 'Electric smooth-top or wall oven. Never a gas burner or flame. 1600×1200 min.',
  },
  'service-washer': {
    name: 'service-washer',
    width: 1200,
    height: 900,
    alt: 'Front-load washer door with chrome ring and perforated drum',
    usedOn: '/services/washer/ hero',
    brief: 'Front-load washer porthole close-up, clean and dark. 1600×1200 min.',
  },
  'service-dryer': {
    name: 'service-dryer',
    width: 1200,
    height: 900,
    alt: 'Open dryer drum with perforated stainless interior and baffles',
    usedOn: '/services/dryer/ hero',
    brief: 'Electric dryer drum interior or door. No gas-dryer imagery. 1600×1200 min.',
  },
  'service-dishwasher': {
    name: 'service-dishwasher',
    width: 1200,
    height: 900,
    alt: 'Dishwasher interior with stainless racks and a spray arm',
    usedOn: '/services/dishwasher/ hero',
    brief: 'Open built-in dishwasher, racks and spray arm. 1600×1200 min.',
  },
  'service-range-hood': {
    name: 'service-range-hood',
    width: 1200,
    height: 900,
    alt: 'Stainless range hood from below with baffle filters and two lights',
    usedOn: '/services/range-hood/ hero',
    brief: 'Range hood underside with lights on, stainless baffles. 1600×1200 min.',
  },
  'service-steam-unit': {
    name: 'service-steam-unit',
    width: 1200,
    height: 900,
    alt: 'Soft layers of steam beside a steam-shower control panel',
    usedOn: '/services/steam-unit/ hero',
    brief: 'Residential steam shower control or generator — never a commercial spa. 1600×1200 min.',
  },
  'service-sauna-unit': {
    name: 'service-sauna-unit',
    width: 1200,
    height: 900,
    alt: 'Electric sauna heater with stacked stones against dark wood slats',
    usedOn: '/services/sauna-unit/ hero',
    brief: 'Home electric sauna heater with stones and control panel. 1600×1200 min.',
  },
};

export const variantWidths = [640, 1024, 1600, 2400];

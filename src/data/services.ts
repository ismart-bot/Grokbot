export type IconName =
  | 'refrigerator'
  | 'oven-stove'
  | 'washer'
  | 'dryer'
  | 'dishwasher'
  | 'range-hood'
  | 'steam-unit'
  | 'sauna-unit';

export interface QA {
  q: string;
  a: string;
}

export interface Service {
  num: string;
  slug: IconName;
  name: string;
  /** Lowercase noun used inside sentences and CTA labels (“Book fridge repair”). */
  noun: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  cardBlurb: string;
  covers: string[];
  heroLede: string;
  symptomsIntro: string;
  symptoms: { title: string; detail: string }[];
  included: string[];
  parts: string[];
  boundary: string;
  /** Short install scope for the services comparison table. */
  install: string;
  tip: string;
  process: { title: string; body: string }[];
  faqs: QA[];
  related: IconName[];
  imageAlt: string;
}

export const services: Service[] = [
  {
    num: '01',
    slug: 'refrigerator',
    name: 'Refrigerator',
    noun: 'fridge',
    h1: 'Refrigerator repair & install in Vaughan',
    metaTitle: 'Refrigerator Repair Vaughan | Fridge & Ice Maker Service | Aria',
    metaDescription:
      'Fridge running warm, frosting up or leaking? Aria repairs and installs refrigerators across Vaughan, Woodbridge included. Upfront quote, Mon–Sun 8am–10pm. Call +1-888-642-0352.',
    cardBlurb:
      'Warm fresh-food sections, frost on the back wall, noisy compressors, leaks and ice makers that quit — freestanding and built-in fridges.',
    covers: ['Cooling', 'Ice & water', 'Seals', 'Controls'],
    heroLede:
      'Warm milk, a frosted-over back wall or an ice maker that quit — we diagnose refrigerators on site in Vaughan homes (Woodbridge included), explain the fault in plain language and quote before any part is replaced.',
    symptomsIntro:
      'These are the fridge problems Vaughan households call about most. If one matches, a visit usually beats guessing at parts online.',
    symptoms: [
      {
        title: 'Fresh-food section running warm',
        detail:
          'Food spoiling early or drinks never cold. Often an evaporator fan, a defrost fault or a failing start relay rather than the compressor itself.',
      },
      {
        title: 'Frost or ice on the back wall',
        detail:
          'A white sheet of frost behind the panel blocks airflow. Usually points to the defrost heater, its thermostat, a timer or the control board.',
      },
      {
        title: 'Ice maker jammed, slow or silent',
        detail:
          'No ice, hollow cubes or a frozen chute. We check the water supply, fill valve, ice maker module and the usual freeze-up points.',
      },
      {
        title: 'Water pooling under or inside',
        detail:
          'A blocked defrost drain, cracked drain pan or leaking inlet line — worth stopping before it reaches cabinets or flooring.',
      },
      {
        title: 'Clicking, buzzing or never resting',
        detail:
          'A compressor that clicks on and off, a rattling fan, or a unit that runs constantly while barely cooling.',
      },
      {
        title: 'Door seals torn, warped or not closing',
        detail:
          'Warm air gets in, frost forms and energy use climbs. We replace gaskets and check hinge and door alignment.',
      },
    ],
    included: [
      'On-site diagnosis of cooling, airflow, defrost, controls and ice/water systems',
      'Plain-language explanation of the fault — and whether repair makes sense for your unit',
      'Clear parts and labour quote before any work; nothing is replaced until you approve',
      'Repair on the same visit when the part is available, or a booked return when it isn’t',
      'Temperature check after the repair, before we close the job',
      'Install and swap for freestanding units — levelling, door alignment, water-line connection to an existing shut-off',
    ],
    parts: [
      'Start relay & overload',
      'Evaporator fan',
      'Condenser fan',
      'Defrost heater & thermostat',
      'Main control board',
      'Thermistors & sensors',
      'Air damper',
      'Water inlet valve',
      'Ice maker module',
      'Door gaskets & hinges',
    ],
    boundary: 'Residential refrigerators only — no commercial display coolers or walk-ins.',
    install: 'Freestanding install & swap',
    tip:
      'Keep the doors closed — a closed fridge holds temperature far longer than you’d think. Health Canada recommends 4°C (40°F) or colder; if perishables have sat warmer than that for more than two hours, err on the side of throwing them out.',
    process: [
      {
        title: 'Book the window',
        body: 'Call or request with the brand and model if you have them — the sticker is usually inside the fresh-food door. We confirm a Vaughan window inside Monday–Sunday, 8am–10pm.',
      },
      {
        title: 'Diagnose + quote',
        body: 'We test cooling performance, fans, defrost and controls before touching a part, then quote parts and labour so you can decide.',
      },
      {
        title: 'Repair & verify',
        body: 'Approved work is completed — same visit when the part allows — and we confirm the unit is pulling down to temperature. Warranty terms are stated on your invoice.',
      },
    ],
    faqs: [
      {
        q: 'Is it worth repairing an older fridge?',
        a: 'Often, yes — fans, relays, defrost parts and seals are common fixes on units well past their first few years. If the repair is getting close to the cost of replacing, we’ll say so plainly so you can decide.',
      },
      {
        q: 'Do you repair French-door, side-by-side and built-in fridges?',
        a: 'Yes — freestanding, French-door, side-by-side, top- and bottom-freezer, and built-in residential units. Tell us the style on the call so we arrive prepared.',
      },
      {
        q: 'Can you fix my ice maker or water dispenser?',
        a: 'Yes. Ice makers and dispensers are among the most common fridge calls. We check the water supply, inlet valve, filter housing, the ice maker module and any freeze-ups in the fill tube or chute.',
      },
      {
        q: 'Do you install new refrigerators?',
        a: 'Yes, for freestanding units: placement, levelling, door alignment and connecting the water line to an existing shut-off valve, then a test run. Ask about built-in installs on the call so we can confirm the details first.',
      },
    ],
    related: ['oven-stove', 'dishwasher', 'range-hood'],
    imageAlt: 'Close-up of brushed stainless refrigerator doors with vertical handles',
  },
  {
    num: '02',
    slug: 'oven-stove',
    name: 'Oven & Stove',
    noun: 'oven',
    h1: 'Electric oven & stove repair in Vaughan',
    metaTitle: 'Oven & Stove Repair Vaughan | Electric Ranges & Wall Ovens | Aria',
    metaDescription:
      'Electric oven not heating, element out or controls acting up? Aria repairs electric ranges, cooktops and wall ovens across Vaughan. Electric only — no gas lines. Call +1-888-642-0352.',
    cardBlurb:
      'Electric ranges, cooktops and wall ovens — elements, temperature sensors, controls and doors. Electric only: we never touch gas lines.',
    covers: ['Elements', 'Sensors', 'Controls', 'Electric only'],
    heroLede:
      'Oven not reaching temperature, a cooktop element that stays cold or a control panel throwing error codes? We repair electric ranges, cooktops and wall ovens across Vaughan, quote before work, and never touch gas lines.',
    symptomsIntro: 'The electric oven and stove faults we see most often in Vaughan kitchens.',
    symptoms: [
      {
        title: 'Oven won’t heat, or heats slowly',
        detail:
          'Usually a failed bake or broil element, a temperature sensor out of range, or a control relay that no longer closes.',
      },
      {
        title: 'Temperature off — burning or undercooking',
        detail:
          'Recipes that used to work suddenly don’t. We test the sensor and compare real oven temperature against the display.',
      },
      {
        title: 'Cooktop element stays cold',
        detail:
          'One coil or radiant zone is dead while the others work — often the element, its burner switch or a burnt connection.',
      },
      {
        title: 'Error codes or unresponsive controls',
        detail:
          'F-codes, a blank display or buttons that don’t respond. We trace it to the board, touch panel or a sensor feeding it bad readings.',
      },
      {
        title: 'Door won’t close, lock or seal',
        detail:
          'Worn hinges, a broken door spring or a stuck self-clean lock let heat escape — and can stop the oven running at all.',
      },
      {
        title: 'Smooth-top zones cycling oddly',
        detail:
          'Zones that flicker, shut off mid-cook or crack across the glass need a safe diagnosis before you keep cooking on them.',
      },
    ],
    included: [
      'Diagnosis of elements, sensors, relays, burner switches and control boards',
      'Clear parts and labour quote before any work',
      'Door hinge, spring, gasket and lock repairs',
      'Oven run up to temperature after the repair, before we leave',
      'Plain-language advice on safe use until the repair is complete',
      'Electric range and wall-oven installs where a compatible electrical connection is already in place',
    ],
    parts: [
      'Bake & broil elements',
      'Oven temperature sensor',
      'Control board & relays',
      'Touch panel / keypad',
      'Surface elements',
      'Burner (infinite) switches',
      'Door hinges & springs',
      'Door lock assembly',
      'Convection fan motor',
      'Terminal block & wiring',
    ],
    boundary:
      'Electric only. We don’t service gas ranges or gas cooktops and never work on gas lines — those need a licensed gas technician.',
    install: 'Electric ranges & wall ovens on an existing connection',
    tip:
      'If an element is sparking, glowing in one spot, or you smell hot wiring, switch the range off at the breaker and don’t use it until it has been checked.',
    process: [
      {
        title: 'Book the window',
        body: 'Call with the brand, model and what it’s doing — error codes help. We confirm a Vaughan window inside Monday–Sunday, 8am–10pm.',
      },
      {
        title: 'Diagnose + quote',
        body: 'We test elements, sensors, switches and the control, explain the fault, and quote parts and labour before starting.',
      },
      {
        title: 'Repair & verify',
        body: 'Approved repairs are completed and the oven is run up to temperature before we leave. Warranty terms are stated on your invoice.',
      },
    ],
    faqs: [
      {
        q: 'Do you work on gas stoves?',
        a: 'No. Aria services electric ranges, cooktops and wall ovens only. We don’t install, move or repair gas lines or gas appliances — that needs a licensed gas technician.',
      },
      {
        q: 'My oven shows an error code — can you fix it?',
        a: 'Usually, yes. Write down the code and the model number before you call; it helps us narrow the fault and bring the likely parts.',
      },
      {
        q: 'Can you repair a cracked glass cooktop?',
        a: 'A cracked glass top is replaced rather than patched. We check whether the glass is available for your model and quote it before anything is ordered.',
      },
      {
        q: 'Do you install wall ovens?',
        a: 'Yes — electric wall ovens and ranges where a compatible electrical connection is already in place. If new wiring is needed, we tell you up front.',
      },
    ],
    related: ['range-hood', 'refrigerator', 'dishwasher'],
    imageAlt: 'Dark glass electric cooktop with a glowing radiant element ring',
  },
  {
    num: '03',
    slug: 'washer',
    name: 'Washer',
    noun: 'washer',
    h1: 'Washer repair & install in Vaughan',
    metaTitle: 'Washer Repair Vaughan | Front & Top-Load Washing Machines | Aria',
    metaDescription:
      'Washer won’t drain, spin or unlock? Aria repairs front-load and top-load washers across Vaughan and Woodbridge. Upfront quote before work. Call +1-888-642-0352, Mon–Sun 8am–10pm.',
    cardBlurb:
      'Won’t drain, won’t spin, door locked, leaking or walking across the floor — front- and top-load washers diagnosed before any part is ordered.',
    covers: ['Drain', 'Spin', 'Door lock', 'Leaks'],
    heroLede:
      'Drum full of water, a door that won’t unlock, or a spin cycle you can hear two floors up? We repair front-load and top-load washers across Vaughan, diagnose before quoting, and tell you straight whether it’s worth fixing.',
    symptomsIntro: 'The washer problems that fill our Vaughan call sheet week after week.',
    symptoms: [
      {
        title: 'Won’t drain — water left in the drum',
        detail:
          'Most often a blocked pump filter, a failed drain pump or a kinked hose. We clear it and find out why it happened.',
      },
      {
        title: 'Won’t spin, or spins weakly',
        detail:
          'Clothes come out soaked. Common causes: lid switch or door lock, drive belt, motor coupling or the balance sensor.',
      },
      {
        title: 'Door stuck locked — or won’t lock',
        detail:
          'Front-loaders that refuse to start or refuse to release. We test the lock assembly, latch and control signal.',
      },
      {
        title: 'Leaking onto the floor',
        detail:
          'A torn door boot, loose hoses, a cracked pump or detergent overflow — we find the source before it damages flooring.',
      },
      {
        title: 'Banging, grinding or walking',
        detail:
          'A loud spin or a machine that shifts across the floor points to bearings, suspension rods, shocks or levelling.',
      },
      {
        title: 'Error codes or won’t start',
        detail:
          'Blank display, flashing lights or a code mid-cycle. We check power, the lid or door circuit, sensors and the control board.',
      },
    ],
    included: [
      'Diagnosis of drain, spin, fill, door-lock and control systems',
      'Pump filter checked and drain path cleared when it’s blocked',
      'Clear parts and labour quote before any work',
      'Suspension, shock and levelling checks on noisy machines',
      'Test cycle after the repair — fill, wash, drain and spin',
      'Install and swap: hoses to your existing valves and drain, shipping bolts out, levelled and test-run',
    ],
    parts: [
      'Drain pump & filter',
      'Door lock / lid switch',
      'Door boot seal',
      'Drive belt & motor coupling',
      'Drum bearings',
      'Suspension rods & shocks',
      'Water inlet valve',
      'Water level sensor',
      'Control board',
      'Fill & drain hoses',
    ],
    boundary: 'Residential washers only — no coin-operated or commercial laundry equipment.',
    install: 'Install & swap on existing valves and drain',
    tip:
      'If it’s leaking, close the hot and cold taps behind the machine. If water is trapped in the drum, don’t force the door — we’ll drain it safely.',
    process: [
      {
        title: 'Book the window',
        body: 'Call with the brand and model (usually on a sticker inside the door or lid) and what it’s doing. We confirm a Vaughan window inside Monday–Sunday, 8am–10pm.',
      },
      {
        title: 'Diagnose + quote',
        body: 'We check the drain path, door lock, drive and controls, explain what failed, and quote parts and labour before starting.',
      },
      {
        title: 'Repair & verify',
        body: 'Approved work is completed and we run a full cycle — fill, wash, drain, spin — before we leave. Warranty terms are stated on your invoice.',
      },
    ],
    faqs: [
      {
        q: 'My washer is full of water — what should I do?',
        a: 'Turn it off, close the taps behind it and don’t force the door. Many front-loaders have a small drain hose behind the pump-filter panel; if you’re not comfortable using it, leave it for us.',
      },
      {
        q: 'Do you service front-load and top-load washers?',
        a: 'Both — including high-efficiency top-loaders and stacked washer-dryer units.',
      },
      {
        q: 'Why does my front-loader smell?',
        a: 'Usually residue in the door boot, pump filter or detergent dispenser. We check the drain path and seal during a visit and show you what to clean, and how often.',
      },
      {
        q: 'Can you install a new washer?',
        a: 'Yes. We connect it to your existing water valves and drain, remove the shipping bolts, level it and run a test cycle.',
      },
    ],
    related: ['dryer', 'dishwasher', 'refrigerator'],
    imageAlt: 'Front-load washer door with chrome ring and perforated steel drum',
  },
  {
    num: '04',
    slug: 'dryer',
    name: 'Dryer',
    noun: 'dryer',
    h1: 'Electric dryer repair & install in Vaughan',
    metaTitle: 'Dryer Repair Vaughan | Electric Dryers — No Heat, Noise, Long Cycles | Aria',
    metaDescription:
      'Electric dryer running cold, taking forever or squealing? Aria repairs electric dryers across Vaughan and checks the vent path while there. Call +1-888-642-0352, Mon–Sun 8am–10pm.',
    cardBlurb:
      'Electric dryers with no heat, long cycles, squeals or a drum that won’t turn — elements, sensors, belts and the vent path checked with care.',
    covers: ['Heat', 'Drum & belt', 'Sensors', 'Vent path'],
    heroLede:
      'Clothes still damp after two cycles, a drum that won’t turn, or a squeal you can hear upstairs? We repair electric dryers across Vaughan and check the vent path while we’re there — restricted airflow is one of the most common causes of slow drying.',
    symptomsIntro: 'Electric dryer faults we diagnose most often in Vaughan laundry rooms.',
    symptoms: [
      {
        title: 'Runs, but no heat',
        detail:
          'The drum tumbles cold. Usually a heating element, thermal fuse, high-limit thermostat or cycling thermostat.',
      },
      {
        title: 'Takes two or three cycles to dry',
        detail:
          'Often a restricted vent or lint build-up; sometimes a weak element or a moisture sensor misreading the load.',
      },
      {
        title: 'Drum won’t turn',
        detail:
          'The motor hums but nothing moves — commonly a broken belt, a failed idler pulley or a door switch.',
      },
      {
        title: 'Squealing, thumping or grinding',
        detail:
          'Worn drum rollers, idler pulley, glides or bearings. Noisy dryers almost always get louder, not quieter.',
      },
      {
        title: 'Shuts off early or won’t start',
        detail:
          'Door switch, start switch, thermal fuse, or a moisture sensor ending the cycle before the clothes are dry.',
      },
      {
        title: 'Too hot to touch, or scorching clothes',
        detail:
          'A failed cycling thermostat or a blocked vent. Stop using it and call — an overheating dryer is a fire risk.',
      },
    ],
    included: [
      'Diagnosis of heat, drive, sensor and control systems',
      'Vent path and lint-trap housing checked for restrictions',
      'Clear parts and labour quote before any work',
      'Belt, roller, idler and glide replacement on noisy or stalled drums',
      'Timed test cycle with heat confirmed before we leave',
      'Install and swap for electric dryers — existing outlet and vent, levelled and test-run',
    ],
    parts: [
      'Heating element',
      'Thermal fuse',
      'High-limit & cycling thermostats',
      'Drive belt',
      'Idler pulley',
      'Drum rollers & glides',
      'Door & start switches',
      'Moisture sensor',
      'Drive motor',
      'Timer / control board',
    ],
    boundary: 'Electric dryers only. We don’t service gas dryers or connect gas lines.',
    install: 'Electric dryers on an existing vent & outlet',
    tip:
      'Clean the lint screen before every load. If the dryer feels unusually hot or smells of scorching, stop using it and unplug it until it has been checked.',
    process: [
      {
        title: 'Book the window',
        body: 'Call with the brand, model and symptom — the model sticker is usually inside the door frame. We confirm a Vaughan window inside Monday–Sunday, 8am–10pm.',
      },
      {
        title: 'Diagnose + quote',
        body: 'We test heat, drive and sensors and check the vent path, explain the fault, and quote parts and labour before starting.',
      },
      {
        title: 'Repair & verify',
        body: 'Approved repairs are completed and we run a timed cycle with heat confirmed. Warranty terms are stated on your invoice.',
      },
    ],
    faqs: [
      {
        q: 'Do you repair gas dryers?',
        a: 'No — electric dryers only. Gas appliances and gas-line connections are outside our scope.',
      },
      {
        q: 'Why does my dryer take so long?',
        a: 'The most common cause is airflow: a packed lint-trap housing or a crushed or clogged vent. If airflow is fine, we test the element, thermostats and moisture sensor.',
      },
      {
        q: 'Is a noisy dryer dangerous?',
        a: 'Usually it’s wear — rollers, idler or glides — but it gets worse and can damage the drum or belt. Scorching smells or excessive heat are different: stop using it and call.',
      },
      {
        q: 'Can you install a stacked washer and dryer?',
        a: 'Yes, for electric dryers with an existing vent and outlet. We stack, level, connect and test both units.',
      },
    ],
    related: ['washer', 'dishwasher', 'steam-unit'],
    imageAlt: 'Open dryer drum with perforated stainless interior and baffles',
  },
  {
    num: '05',
    slug: 'dishwasher',
    name: 'Dishwasher',
    noun: 'dishwasher',
    h1: 'Dishwasher repair & install in Vaughan',
    metaTitle: 'Dishwasher Repair Vaughan | Leaks, Drain & Wash Problems | Aria',
    metaDescription:
      'Dishwasher leaking, not draining or leaving dishes dirty? Aria repairs and installs dishwashers across Vaughan, Woodbridge included. Upfront quote. Call +1-888-642-0352.',
    cardBlurb:
      'Leaks, standing water, poor wash results, drain backups and error codes on built-ins — repair, or honest repair-versus-replace advice.',
    covers: ['Leaks', 'Drain', 'Wash', 'Controls'],
    heroLede:
      'Water sitting in the bottom, a puddle under the toe-kick, or glasses coming out gritty? We repair built-in dishwashers across Vaughan, find the actual cause before quoting, and install new units on your existing water, drain and power.',
    symptomsIntro: 'The dishwasher faults Vaughan kitchens call us about most.',
    symptoms: [
      {
        title: 'Standing water after the cycle',
        detail:
          'A blocked filter, a clogged drain hose or air gap, or a drain pump that’s failing.',
      },
      {
        title: 'Leaking under the door or toe-kick',
        detail:
          'Door gasket, spray-arm seal, inlet valve or a loose hose — worth catching before it swells cabinets or flooring.',
      },
      {
        title: 'Dishes still dirty or gritty',
        detail:
          'Clogged spray arms, a weak wash pump, a blocked filter or water that isn’t getting hot enough.',
      },
      {
        title: 'Won’t fill or won’t start',
        detail:
          'Door latch, inlet valve, float switch or the control board — we trace it step by step.',
      },
      {
        title: 'Not drying',
        detail:
          'Heating element, vent or rinse-aid issues, or a fan that has quit on condensation-dry models.',
      },
      {
        title: 'Error codes, beeping or odd noises',
        detail:
          'Codes, a grinding pump or a clicking diverter. We read the code and test the part behind it.',
      },
    ],
    included: [
      'Diagnosis of fill, wash, drain, heat and control systems',
      'Filter, spray-arm and drain-path check on every visit',
      'Clear parts and labour quote before any work',
      'Door latch, gasket, hinge and spring repairs',
      'Full test cycle after the repair, with a leak check',
      'Install and swap on your existing water supply, drain and power — levelled, secured and tested',
    ],
    parts: [
      'Drain pump',
      'Wash (circulation) pump',
      'Water inlet valve',
      'Float & float switch',
      'Filter assembly',
      'Spray arms & seals',
      'Door latch & switch',
      'Door gasket & hinges',
      'Heating element',
      'Control board',
    ],
    boundary:
      'We connect to your existing plumbing and power. If a new supply line, drain relocation or new circuit is needed, we’ll tell you before booking.',
    install: 'Install & swap on existing water, drain & power',
    tip:
      'If it’s leaking, close the supply valve under the sink and switch off the dishwasher’s breaker or unplug it. Don’t run it again until it has been checked.',
    process: [
      {
        title: 'Book the window',
        body: 'Call with the brand and model (usually printed on the edge of the door) and what it’s doing. We confirm a Vaughan window inside Monday–Sunday, 8am–10pm.',
      },
      {
        title: 'Diagnose + quote',
        body: 'We check the filter, spray arms, pumps, valves and controls, explain what failed, and quote parts and labour before starting.',
      },
      {
        title: 'Repair & verify',
        body: 'Approved work is completed and we run a full cycle with a leak check. Warranty terms are stated on your invoice.',
      },
    ],
    faqs: [
      {
        q: 'Should I repair or replace my dishwasher?',
        a: 'If the tub and racks are in good shape, pumps, valves, latches and seals are usually worth repairing. If the tub is rusted through or the control board is no longer available, we’ll tell you.',
      },
      {
        q: 'Why is there water in the bottom?',
        a: 'A little water around the filter is normal on some models. A pool above the filter usually means a blocked filter, drain hose or air gap, or a weak drain pump.',
      },
      {
        q: 'Do you install dishwashers?',
        a: 'Yes — we remove the old unit, connect the new one to your existing water supply, drain and power, level and secure it, and run a test cycle.',
      },
    ],
    related: ['refrigerator', 'oven-stove', 'washer'],
    imageAlt: 'Dishwasher interior with stainless racks and a spray arm',
  },
  {
    num: '06',
    slug: 'range-hood',
    name: 'Range Hood',
    noun: 'range hood',
    h1: 'Range hood repair & install in Vaughan',
    metaTitle: 'Range Hood Repair Vaughan | Fans, Lights, Controls & Install | Aria',
    metaDescription:
      'Range hood loud, weak or dead? Aria repairs range hood fans, lights and controls and installs replacement hoods across Vaughan. Call +1-888-642-0352, Mon–Sun 8am–10pm.',
    cardBlurb:
      'Fan noise, dead lights, weak capture and controls that stopped responding — repair and replacement installs for residential hoods.',
    covers: ['Fans', 'Lights', 'Controls', 'Install'],
    heroLede:
      'A hood that roars but doesn’t pull smoke, lights that died, or buttons that do nothing? We repair under-cabinet, wall-mount, island and insert range hoods across Vaughan, and install replacements on your existing venting and power.',
    symptomsIntro: 'Range hood problems we fix most often above Vaughan cooktops.',
    symptoms: [
      {
        title: 'Loud, rattling or vibrating fan',
        detail:
          'Worn motor bearings, a loose or damaged blower wheel, or a damper flapping in the duct.',
      },
      {
        title: 'Weak suction — smoke and smell linger',
        detail:
          'Clogged grease filters, a tired motor, a stuck damper or ducting that’s crushed or undersized.',
      },
      {
        title: 'Fan won’t run at all',
        detail:
          'Switch, control board, motor, capacitor or power supply — we test the chain in order, not by swapping parts.',
      },
      {
        title: 'Lights out or flickering',
        detail:
          'Bulb, LED driver, socket or switch. Many hoods use model-specific LED modules we can source by part number.',
      },
      {
        title: 'Controls stuck or unresponsive',
        detail:
          'Touch panels and push-button switches wear out, especially above hot cooktops — or get stuck on one speed.',
      },
      {
        title: 'Grease dripping or backdraft',
        detail:
          'Saturated filters, or a damper that no longer closes and lets cold air and drips back into the kitchen.',
      },
    ],
    included: [
      'Diagnosis of motor, blower, switches, controls and lighting',
      'Filter and damper check, with cleaning advice for your model',
      'Clear parts and labour quote before any work',
      'Motor, blower, switch and LED module replacement',
      'Test on every speed and light setting after the repair',
      'Replacement installs on existing ducting and power — fit and venting confirmed on the call first',
    ],
    parts: [
      'Blower motor',
      'Blower wheel',
      'Run capacitor',
      'Speed switch / control board',
      'Touch panel',
      'LED modules & drivers',
      'Light sockets & switches',
      'Backdraft damper',
      'Grease & charcoal filters',
    ],
    boundary:
      'If a new hood needs new ducting or a new wall or roof opening, we tell you on the call so the right trade is involved from the start.',
    install: 'Replacement hoods on existing ducting & power',
    tip:
      'Soak metal grease filters in hot water with dish soap every month or two — clogged filters are one of the most common reasons a hood feels weak.',
    process: [
      {
        title: 'Book the window',
        body: 'Call with the brand, model and style (under-cabinet, wall, island or insert). We confirm a Vaughan window inside Monday–Sunday, 8am–10pm.',
      },
      {
        title: 'Diagnose + quote',
        body: 'We test the motor, blower, controls and lighting and check filters and damper, then quote parts and labour before starting.',
      },
      {
        title: 'Repair & verify',
        body: 'Approved work is completed and every speed and light is tested. Warranty terms are stated on your invoice.',
      },
    ],
    faqs: [
      {
        q: 'Can you install a new range hood?',
        a: 'Yes, where the ducting and power are already in place — like-for-like swaps and upgrades that fit the existing opening. We confirm size, venting and connection on the call before booking.',
      },
      {
        q: 'My hood is loud even on low — is it the motor?',
        a: 'Sometimes. It can also be a loose blower wheel, a damper chattering in the duct, or grease build-up throwing the wheel off balance. We diagnose before replacing anything.',
      },
      {
        q: 'Do you service recirculating (ductless) hoods?',
        a: 'Yes. We service ductless hoods too and can tell you which charcoal filters your model takes.',
      },
    ],
    related: ['oven-stove', 'refrigerator', 'dishwasher'],
    imageAlt: 'Stainless range hood seen from below with baffle filters and two lights',
  },
  {
    num: '07',
    slug: 'steam-unit',
    name: 'Steam Unit',
    noun: 'steam unit',
    h1: 'Residential steam unit repair in Vaughan',
    metaTitle: 'Steam Unit Repair Vaughan | Residential Steam Generators | Aria',
    metaDescription:
      'Home steam shower generator not heating, not filling or showing a fault? Aria repairs residential steam units across Vaughan. Residential only. Call +1-888-642-0352, Mon–Sun 8am–10pm.',
    cardBlurb:
      'Residential steam generators for home steam showers — no steam, slow heat-up, fill and drain faults, scale and controls. Not commercial systems.',
    covers: ['Heat', 'Fill & drain', 'Scale', 'Controls'],
    heroLede:
      'No steam, a long wait for it, or a control that keeps faulting? We repair residential steam generators for home steam showers across Vaughan — heating elements, fill and drain, scale, sensors and controls — and tell you plainly what’s worth fixing.',
    symptomsIntro: 'The steam unit faults homeowners describe to us most often.',
    symptoms: [
      {
        title: 'No steam at all',
        detail:
          'Element, contactor, water supply, or a safety cut-out that has tripped. We test each before quoting.',
      },
      {
        title: 'Takes far too long to steam',
        detail:
          'Scale on the element or in the tank, a partly failed element, or a low-water condition.',
      },
      {
        title: 'Won’t fill or won’t drain',
        detail:
          'The fill solenoid, auto-drain valve, water-level probe or a blocked inlet strainer.',
      },
      {
        title: 'Control shows a fault or goes blank',
        detail:
          'Wall control, cable, sensor or the generator’s board — we check the signal path end to end.',
      },
      {
        title: 'Spitting hot water at the steam head',
        detail:
          'Overfilling, a sagging steam line trapping condensate, or scale. Worth checking for comfort and safety.',
      },
      {
        title: 'Leaks or crusty scale at the generator',
        detail:
          'Mineral build-up, weeping fittings or a tired pressure-relief valve near the unit.',
      },
    ],
    included: [
      'Diagnosis of heating, fill, drain, sensors and controls',
      'Scale assessment, with maintenance advice to slow build-up',
      'Clear parts and labour quote before any work',
      'Element, valve, probe and control replacement where parts are available',
      'Full heat-up to steam after the repair',
      'Plain advice on what’s worth fixing on older units',
    ],
    parts: [
      'Heating elements',
      'Contactor / relay',
      'Water fill solenoid',
      'Auto-drain valve',
      'Water-level probe',
      'Pressure-relief valve',
      'Temperature sensor',
      'Wall control & cable',
      'Control board',
    ],
    boundary:
      'Residential steam units only — no commercial steam rooms or spa systems. If new plumbing or wiring to the unit is needed, we’ll say so up front.',
    install: 'Repair & parts replacement',
    tip:
      'If the unit is leaking or the breaker keeps tripping, switch it off at the breaker and close its water supply until it has been checked.',
    process: [
      {
        title: 'Book the window',
        body: 'Call with the brand, model and where the generator sits (vanity, closet, basement). We confirm a Vaughan window inside Monday–Sunday, 8am–10pm.',
      },
      {
        title: 'Diagnose + quote',
        body: 'We test elements, fill and drain, sensors and the control, assess scale, and quote parts and labour before starting.',
      },
      {
        title: 'Repair & verify',
        body: 'Approved work is completed and the unit is run up to steam before we leave. Warranty terms are stated on your invoice.',
      },
    ],
    faqs: [
      {
        q: 'What kind of steam units do you service?',
        a: 'Residential steam generators — the units behind home steam showers — and similar built-in residential steam appliances. Commercial steam rooms and spa systems are outside our scope.',
      },
      {
        q: 'Why does my steam shower take so long to heat up?',
        a: 'Scale on the heating elements is the usual cause, followed by a failing element or a fill problem. We check and explain whether descaling or a part is the fix.',
      },
      {
        q: 'Do you need access to the generator?',
        a: 'Yes. The generator is often in a vanity, closet, basement or attic space. Tell us where yours is when you call so we can plan the visit.',
      },
    ],
    related: ['sauna-unit', 'dryer', 'washer'],
    imageAlt: 'Steam rising in soft layers past a steam shower control panel',
  },
  {
    num: '08',
    slug: 'sauna-unit',
    name: 'Sauna Unit',
    noun: 'sauna heater',
    h1: 'Sauna heater & controls repair in Vaughan',
    metaTitle: 'Sauna Heater Repair Vaughan | Home Sauna Units & Controls | Aria',
    metaDescription:
      'Home sauna heater not heating, tripping or showing a control fault? Aria repairs residential electric sauna heaters and controls across Vaughan. Call +1-888-642-0352, Mon–Sun 8am–10pm.',
    cardBlurb:
      'Home sauna heaters and controls — no heat, slow heat-up, tripping breakers, sensors and control panels. Residential only; not HVAC.',
    covers: ['Heaters', 'Controls', 'Sensors', 'Residential'],
    heroLede:
      'Sauna not getting hot, heating slowly, or tripping the breaker? We repair residential electric sauna heaters and their controls across Vaughan — elements, contactors, sensors, high-limits and control panels — with a quote before any work.',
    symptomsIntro: 'Home sauna problems we’re asked to look at most often.',
    symptoms: [
      {
        title: 'Heater won’t come on',
        detail:
          'Control panel, contactor, a high-limit that needs resetting, or a tripped breaker — we trace the power path safely.',
      },
      {
        title: 'Heats slowly or never reaches temperature',
        detail:
          'One or more failed elements, a badly placed sensor, or stones packed too tightly for air to move.',
      },
      {
        title: 'Breaker trips at start-up',
        detail:
          'Often a shorted element or a wiring fault at the heater. Stop resetting it and call.',
      },
      {
        title: 'Control panel blank or showing a fault',
        detail:
          'Panel, cable, sensor or relay — we check the signal path from the panel to the heater.',
      },
      {
        title: 'Shuts off mid-session',
        detail:
          'Timer settings, a high-limit tripping early, or a sensor reading the room wrong.',
      },
      {
        title: 'Burning smell or visible damage',
        detail:
          'Beyond the normal first-use smell, burning odours mean switch off at the breaker until it has been inspected.',
      },
    ],
    included: [
      'Diagnosis of elements, contactors, sensors, high-limits and controls',
      'Stone and sensor placement checked against the heater’s guidance',
      'Clear parts and labour quote before any work',
      'Element, contactor, sensor and control replacement where parts are available',
      'Heat-up test after the repair',
      'Plain advice on safe use and routine care',
    ],
    parts: [
      'Heating elements',
      'Contactor',
      'High-limit safety',
      'Temperature sensor',
      'Control panel',
      'Control cable',
      'Timer / relay board',
      'Heater stones (restack)',
    ],
    boundary:
      'Residential sauna heaters and controls only — not HVAC, not commercial saunas or steam rooms, and no sauna-room construction. If a new circuit is needed, we’ll tell you.',
    install: 'Repair & parts replacement',
    tip:
      'If the breaker trips, don’t keep resetting it. Leave the heater off at the breaker until it has been checked.',
    process: [
      {
        title: 'Book the window',
        body: 'Call with the heater brand, model and control type. We confirm a Vaughan window inside Monday–Sunday, 8am–10pm.',
      },
      {
        title: 'Diagnose + quote',
        body: 'We test elements, contactor, sensors and controls, check stone and sensor placement, and quote parts and labour before starting.',
      },
      {
        title: 'Repair & verify',
        body: 'Approved work is completed and the room is brought up to temperature. Warranty terms are stated on your invoice.',
      },
    ],
    faqs: [
      {
        q: 'What sauna equipment do you work on?',
        a: 'Residential electric sauna heaters, their control panels and sensors. We don’t build sauna rooms, and commercial saunas are outside our scope.',
      },
      {
        q: 'Is a sauna heater part of HVAC?',
        a: 'No — and we don’t do HVAC. A sauna heater is a dedicated appliance; we repair the heater and its controls only.',
      },
      {
        q: 'Why does my sauna take so long to heat?',
        a: 'Usually a failed element, a sensor mounted in the wrong spot, or stones packed too tightly. We check each and explain the fix.',
      },
    ],
    related: ['steam-unit', 'dryer', 'range-hood'],
    imageAlt: 'Electric sauna heater with stacked stones against dark wood slats',
  },
];

export const serviceBySlug = (slug: string): Service => {
  const found = services.find((s) => s.slug === slug);
  if (!found) throw new Error(`Unknown service slug: ${slug}`);
  return found;
};

export const serviceHref = (slug: string) => `/services/${slug}/`;

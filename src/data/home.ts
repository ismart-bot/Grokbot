import type { IconName, QA } from './services';

export const homeSymptoms: { title: string; detail: string; service: IconName }[] = [
  {
    title: 'Fridge running warm or frosting up',
    detail:
      'Milk turning early, a sheet of frost on the back wall, or water under the crisper. Usually a fan, defrost or relay fault — often fixable in one visit.',
    service: 'refrigerator',
  },
  {
    title: 'Washer won’t drain or spin',
    detail:
      'Water left in the drum, soaked clothes or a door that stays locked. Pump, filter, belt or door-lock faults top the list.',
    service: 'washer',
  },
  {
    title: 'Dryer runs but stays cold',
    detail:
      'Two or three cycles to dry a load. We check the element, thermal fuse and thermostats — and the vent path while we’re there.',
    service: 'dryer',
  },
  {
    title: 'Oven won’t hold temperature',
    detail:
      'Burnt edges, raw middles or an element that no longer glows. Sensors, elements and relays on electric ranges and wall ovens.',
    service: 'oven-stove',
  },
  {
    title: 'Dishwasher leaks or leaves water',
    detail:
      'A puddle under the toe-kick or a pool in the tub. Filters, drain pumps, gaskets and inlet valves are the usual suspects.',
    service: 'dishwasher',
  },
  {
    title: 'Range hood loud, weak or dead',
    detail:
      'Smoke hanging in the kitchen, a rattling fan or lights that quit. Motors, blower wheels, switches and LED modules.',
    service: 'range-hood',
  },
];

export const homeProcess = [
  {
    title: 'Call or request',
    body: 'Tell us the appliance, what it’s doing and your neighbourhood. Brand and model help if you have them. We confirm a real window inside Monday–Sunday, 8am–10pm — same-day when the schedule allows.',
  },
  {
    title: 'On-site diagnosis → clear quote',
    body: 'A technician tests the appliance in your home, explains the fault in plain language, and quotes parts and labour before any work begins. You decide — no pressure, no surprise add-ons.',
  },
  {
    title: 'Repair → verified before we leave',
    body: 'Approved repairs are completed — often on the same visit when the part is available — then we run the appliance through its cycle. Parts & labour warranty terms are stated on your invoice.',
  },
];

export const callChecklist = [
  { label: 'Appliance & brand', detail: 'e.g. Samsung French-door fridge' },
  { label: 'Model number', detail: 'Sticker inside the door or on the back' },
  { label: 'What it’s doing', detail: 'Error code, noise, leak, no heat' },
  { label: 'Your neighbourhood', detail: 'Woodbridge, Maple, Concord…' },
];

export const promises = [
  {
    icon: 'shield',
    title: 'Parts & labour warranty',
    body: 'Every approved repair carries a parts and labour warranty. The terms are written on your invoice — clear before we leave, not buried in fine print you see later.',
    foot: 'Terms stated on your invoice',
  },
  {
    icon: 'bolt',
    title: 'Same-day when available',
    body: 'Call early and we’ll try to get there the same day. If the schedule is already full, we give you the next honest opening — never a fake ETA to hold the booking.',
    foot: 'Monday–Sunday, 8am–10pm',
  },
  {
    icon: 'pin',
    title: 'Vaughan-focused',
    body: 'We only book inside Vaughan — Woodbridge, Maple, Concord, Kleinburg and the rest of the city. Short drives mean more of the day goes into repairs, not traffic.',
    foot: 'Woodbridge included',
  },
] as const;

export const homeFaqs: QA[] = [
  {
    q: 'How fast can you come out in Vaughan?',
    a: 'Same-day when the schedule allows. Call as early as you can — we confirm a real window on the phone, inside Monday–Sunday, 8am–10pm. If today is full, we give you the next honest opening instead of a guess.',
  },
  {
    q: 'Which appliances do you repair?',
    a: 'Refrigerators, electric ovens and stoves, washers, dryers, dishwashers, range hoods, steam units and sauna units — repair and install. We don’t work on gas lines or gas appliances, and we don’t do HVAC, furnaces or air conditioning.',
  },
  {
    q: 'Do you quote before repairing?',
    a: 'Yes. The technician diagnoses on site, explains the fault in plain language and quotes parts and labour before starting. Nothing is replaced until you approve it.',
  },
  {
    q: 'What warranty do you provide?',
    a: 'Approved repairs come with a parts and labour warranty. The exact terms are written on your invoice, so you know what’s covered before we leave.',
  },
  {
    q: 'Do you cover Woodbridge — and are you open 24/7?',
    a: 'Woodbridge, yes — it’s a neighbourhood of Vaughan, and we cover the whole city. We’re not a 24/7 service and never claim to be: calls and bookings run Monday–Sunday, 8am–10pm.',
  },
];

export const brands = [
  'Samsung',
  'LG',
  'Whirlpool',
  'GE',
  'Bosch',
  'KitchenAid',
  'Maytag',
  'Frigidaire',
];

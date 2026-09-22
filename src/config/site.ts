/**
 * Business locks for Aria Appliance Repair (iSmart Leads CL-0008).
 * Every page reads NAP, hours and area from here — never hard-code them.
 * Locks: Vaughan only · Mon–Sun 8:00am–10:00pm (never 24/7) · no gas lines · no HVAC.
 */

export const site = {
  name: 'Aria Appliance Repair',
  shortName: 'Aria',
  variant: 'B',
  tagline: 'Residential appliance repair & install in Vaughan, Ontario',

  phone: {
    display: '+1-888-642-0352',
    href: 'tel:+18886420352',
    e164: '+18886420352',
  },

  email: 'contact@ariaappliancerepair.com',

  hours: {
    short: 'Mon–Sun 8am–10pm',
    long: 'Monday–Sunday, 8:00am–10:00pm',
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '08:00',
    closes: '22:00',
    openLabel: '8:00am',
    closeLabel: '10:00pm',
  },

  area: {
    city: 'Vaughan',
    province: 'Ontario',
    provinceCode: 'ON',
    country: 'CA',
    short: 'Vaughan only',
    /** Neighbourhoods inside City of Vaughan limits. Woodbridge is a neighbourhood, not a separate city. */
    neighbourhoods: [
      'Woodbridge',
      'Maple',
      'Concord',
      'Kleinburg',
      'Vellore Village',
      'Thornhill (Vaughan side)',
      'Vaughan Metropolitan Centre',
    ],
  },

  scope: {
    doesNot: [
      {
        title: 'No gas-line work',
        body: 'We don’t install, extend, move or certify gas lines. Oven and stove service is electric only.',
      },
      {
        title: 'No HVAC',
        body: 'Furnaces, air conditioners, heat pumps and ductwork are outside our appliance lane — we won’t quote them.',
      },
      {
        title: 'Vaughan only',
        body: 'We book inside Vaughan city limits, Woodbridge included. No region-wide or out-of-city calls.',
      },
    ],
  },

  /** Empty until the CRM is live. See README → “Request form / CRM”. */
  formEndpoint: (import.meta.env.PUBLIC_FORM_ENDPOINT ?? '').trim(),
  noindex: String(import.meta.env.PUBLIC_NOINDEX ?? '').trim() === 'true',
} as const;

export const nav = [
  { label: 'Services', href: '/services/' },
  { label: 'Service area', href: '/service-area/' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
] as const;

export const requestHref = '/contact/#request';

export const trustPoints = [
  { strong: 'Same-day', rest: 'when available' },
  { strong: 'Upfront quote', rest: 'before repair' },
  { strong: 'Parts & labour warranty', rest: 'on your invoice' },
] as const;

import type { APIRoute } from 'astro';
import { site } from '../config/site';

export const GET: APIRoute = ({ site: origin }) => {
  const sitemap = new URL('/sitemap-index.xml', origin ?? 'https://ariaappliancerepair.com').href;
  const body = site.noindex
    ? ['User-agent: *', 'Disallow: /', ''].join('\n')
    : ['User-agent: *', 'Allow: /', 'Disallow: /thank-you/', '', `Sitemap: ${sitemap}`, ''].join('\n');

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};

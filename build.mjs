// Static site generator: node build.mjs  →  outputs ./dist
import { mkdirSync, writeFileSync, rmSync, cpSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { brand } from './src/data/site.mjs';
import { services } from './src/data/services.mjs';
import { home } from './src/pages/home.mjs';
import { servicesPage, servicePage } from './src/pages/services.mjs';
import { about, work, pricingPage, contact, notFound } from './src/pages/other.mjs';

const here = dirname(fileURLToPath(import.meta.url));
const out = join(here, 'dist');

rmSync(out, { recursive: true, force: true });
mkdirSync(join(out, 'services'), { recursive: true });
cpSync(join(here, 'assets'), join(out, 'assets'), { recursive: true });

const pages = {
  'index.html': home(),
  'services.html': servicesPage(),
  'about.html': about(),
  'work.html': work(),
  'pricing.html': pricingPage(),
  'contact.html': contact(),
  '404.html': notFound(),
};
for (const s of services) pages[`services/${s.slug}.html`] = servicePage(s);

for (const [file, html] of Object.entries(pages)) writeFileSync(join(out, file), html);

const urls = Object.keys(pages).filter((p) => p !== '404.html');
writeFileSync(
  join(out, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map((u) => `  <url><loc>${brand.url}/${u === 'index.html' ? '' : u}</loc></url>`)
    .join('\n')}\n</urlset>\n`
);
writeFileSync(join(out, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${brand.url}/sitemap.xml\n`);

console.log(`Built ${Object.keys(pages).length} pages → dist/`);

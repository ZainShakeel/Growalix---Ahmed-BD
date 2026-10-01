import { icon } from '../icons.mjs';
import { page, ctaBand } from '../layout.mjs';
import { brand, faqs } from '../data/site.mjs';
import { studioSection, whySection, processSection, testimonialsSection, postsSection, faqSection, contactForm } from '../sections.mjs';
import { pageHero } from './services.mjs';

const d = (i) => `style="--d:${i * 80}ms"`;

export function about() {
  const root = '';
  const body = `${pageHero(root, [['About']], 'About us', 'A growth partner,<br><span class="text-gradient">not a vendor.</span>', `${brand.name} brings outreach, search, paid media, development and content under one roof — so every channel pushes in the same direction.`)}
${studioSection(root)}
${whySection()}
${processSection()}
${postsSection(root)}
${testimonialsSection()}
${ctaBand(root)}`;
  return page({ root, title: 'About', active: 'about', body, path: 'about.html' });
}

export function contact() {
  const root = '';
  const info = [
    ['mail', 'Email', brand.email, `mailto:${brand.email}`],
    ['phone', 'Phone', brand.phone, `tel:${brand.phone.replace(/[^+\d]/g, '')}`],
    ['whatsapp', 'WhatsApp', 'Chat with us', brand.whatsapp],
    ['mapPin', 'Location', brand.location],
    ['clock', 'Hours', brand.hours],
  ];
  const body = `${pageHero(root, [['Contact']], 'Contact', 'Let’s build your<br><span class="text-gradient">growth engine.</span>', 'Tell us about your business and goals. We reply within one business day with next steps and a free audit.')}
<section class="section" style="padding-top:1rem"><div class="container contact-grid">
  <div class="info-list">${info
    .map(([ic, label, value, href], i) => {
      const inner = `<span class="ic">${icon(ic)}</span><div><span>${label}</span><strong>${value}</strong></div>`;
      return href
        ? `<a class="card info-item reveal" ${d(i)} href="${href}"${href.startsWith('http') ? ' target="_blank" rel="noopener"' : ''}>${inner}</a>`
        : `<div class="card info-item reveal" ${d(i)}>${inner}</div>`;
    })
    .join('')}</div>
  ${contactForm(root, 'c')}
</div></section>
${faqSection(root, faqs)}`;
  return page({ root, title: 'Contact', active: 'contact', body, path: 'contact.html' });
}

export function notFound() {
  const root = '/';
  const body = `<section class="nf"><div class="container"><div class="big text-gradient">404</div><h1 class="h-md" style="margin-top:1rem">This page took a wrong turn.</h1><p class="muted" style="margin-top:1rem">The page you’re looking for doesn’t exist or has moved.</p><a class="btn btn-primary" style="margin-top:2rem" href="/index.html">Back to home ${icon('arrowUpRight')}</a></div></section>`;
  return page({ root, title: 'Page not found', body, path: '404.html' });
}

import { icon } from '../icons.mjs';
import { page, ctaBand } from '../layout.mjs';
import { brand, faqs } from '../data/site.mjs';
import { studioSection, workSection, whySection, processSection, testimonialsSection, pricingSection, faqSection, contactForm } from '../sections.mjs';
import { pageHero } from './services.mjs';

const d = (i) => `style="--d:${i * 80}ms"`;

export function about() {
  const root = '';
  const body = `${pageHero(root, [['About']], 'About us', 'A growth partner,<br><span class="text-gradient">not a vendor.</span>', `${brand.name} brings outreach, search, paid media, development and content under one roof — so every channel pushes in the same direction.`)}
${studioSection(root)}
${whySection()}
${processSection()}
${testimonialsSection()}
${ctaBand(root)}`;
  return page({ root, title: 'About', active: 'about', body, path: 'about.html' });
}

export function work() {
  const root = '';
  const body = `${pageHero(root, [['Work']], 'Selected work', 'Results that earned<br><span class="text-gradient">a second look.</span>', 'A snapshot of campaigns, launches and growth systems we have built across outreach, search, paid media and product.')}
${workSection(root, { head: false, linkToService: true })}
${testimonialsSection()}
${ctaBand(root, 'Your project could be next.', 'Share your goals and we’ll show you what a first 90 days with us looks like.')}`;
  return page({ root, title: 'Work', active: 'work', body, path: 'work.html' });
}

export function pricingPage() {
  const root = '';
  const body = `${pageHero(root, [['Pricing']], 'Pricing', 'Clear pricing,<br><span class="text-gradient">serious results.</span>', 'Simple monthly plans for growing teams. Need a single service or a one-off project? We quote those too — usually within 48 hours.')}
${pricingSection(root, { head: false })}
${faqSection(root)}
${ctaBand(root, 'Need a custom plan?', 'Mix and match any of our ten services. Tell us what you need and we’ll build a plan around your budget.')}`;
  return page({ root, title: 'Pricing', active: 'pricing', body, path: 'pricing.html' });
}

export function contact() {
  const root = '';
  const info = [
    ['mail', 'Email', brand.email, `mailto:${brand.email}`],
    ['phone', 'Phone', brand.phone, `tel:${brand.phone.replace(/\s/g, '')}`],
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

import { icon } from '../icons.mjs';
import { page, ambient, eyebrow, ctaBand } from '../layout.mjs';
import { services, serviceSteps } from '../data/services.mjs';
import { faqs } from '../data/site.mjs';
import { servicesSection, whySection, processSection, faqSection } from '../sections.mjs';

const d = (i) => `style="--d:${i * 80}ms"`;

export const pageHero = (root, crumbs, label, title, lead, extra = '') => `<section class="page-hero">${ambient}<div class="container">
  <nav class="crumbs reveal" aria-label="Breadcrumb"><a href="${root}index.html">Home</a>${crumbs.map(([t, h]) => `<span>/</span>${h ? `<a href="${h}">${t}</a>` : `<span>${t}</span>`}`).join('')}</nav>
  <div class="reveal">${eyebrow(label)}</div>
  <h1 class="h-xl reveal" ${d(1)}>${title}</h1>
  <p class="lead reveal" ${d(2)}>${lead}</p>${extra}
</div></section>`;

export function servicesPage() {
  const root = '';
  const body = `${pageHero(root, [['Services']], 'Services', 'Every growth channel,<br><span class="text-gradient">one expert team.</span>', 'Ten specialist services that work on their own — and work even better together. Pick one channel or let us run your entire growth engine.')}
${servicesSection(root, { head: false })}
${whySection()}
${processSection()}
${faqSection(root)}
${ctaBand(root)}`;
  return page({ root, title: 'Services', active: 'services', body, path: 'services.html', description: 'Email marketing, LinkedIn marketing, data extraction, lead generation, SEO/AEO/GEO, paid media, web & app development, content creation and YouTube automation.' });
}

export function servicePage(s) {
  const root = '../';
  const chipPos = ['top:6%;left:0', 'top:42%;right:-4%', 'bottom:6%;left:8%'];
  const hero = `<section class="page-hero">${ambient}<div class="container svc-hero-grid">
  <div>
    <nav class="crumbs reveal" aria-label="Breadcrumb"><a href="${root}index.html">Home</a><span>/</span><a href="${root}services.html">Services</a><span>/</span><span>${s.title}</span></nav>
    <div class="reveal">${eyebrow(s.tags.join(' · '))}</div>
    <h1 class="h-xl reveal" ${d(1)}>${s.headline} <span class="text-gradient">${s.highlight}</span></h1>
    <p class="lead reveal" ${d(2)}>${s.intro}</p>
    <div class="hero-actions reveal" ${d(3)}><a class="btn btn-primary" href="${root}contact.html">Get a free audit ${icon('arrowUpRight')}</a><a class="btn btn-ghost" href="${root}pricing.html">See pricing</a></div>
    <div class="svc-stats reveal" ${d(4)}>${s.stats.map(([v, l]) => `<div class="glass"><strong class="text-gradient">${v}</strong><span>${l}</span></div>`).join('')}</div>
  </div>
  <div class="svc-badge reveal" ${d(2)}><span class="glow"></span><span class="disc float-slow">${icon(s.icon)}</span>${s.tools
    .slice(0, 3)
    .map((t, i) => `<span class="chip glass float" style="${chipPos[i]};animation-delay:-${i * 2}s">${t}</span>`)
    .join('')}</div>
</div></section>`;

  const included = `<section class="section"><div class="container">
  <div class="section-head split"><div class="reveal">${eyebrow('What you get')}<h2 class="h-lg">Everything included in<br><span class="text-gradient">${s.title}.</span></h2></div><p class="lead reveal" ${d(1)}>A complete, done-for-you service — strategy, execution and reporting handled by specialists.</p></div>
  <div class="grid-3">${s.deliverables.map(([t, c], i) => `<div class="card deliv reveal" ${d(i % 3)}><span class="n">${String(i + 1).padStart(2, '0')}</span><h4>${t}</h4><p>${c}</p></div>`).join('')}</div>
</div></section>`;

  const tools = `<section class="section" style="padding-top:0"><div class="container">
  <div class="section-head center reveal">${eyebrow('Stack')}<h2 class="h-md" style="margin-top:1.25rem">Tools we use every day</h2></div>
  <div class="tools reveal" ${d(1)}>${s.tools.map((t) => `<span>${t}</span>`).join('')}</div>
</div></section>`;

  const others = `<section class="section" style="padding-top:0"><div class="container">
  <div class="section-head reveal">${eyebrow('Explore more')}<h2 class="h-lg">Services that pair <span class="text-gradient">well together.</span></h2></div>
  <div class="other-svcs">${services
    .filter((o) => o.slug !== s.slug)
    .map((o, i) => `<a class="card mini-svc reveal" ${d(i % 3)} href="${o.slug}.html"><span class="ic">${icon(o.icon)}</span><strong>${o.title}</strong>${icon('arrowUpRight', 'go')}</a>`)
    .join('')}</div>
</div></section>`;

  const body = `${hero}
${included}
${processSection({ steps: serviceSteps, label: 'How it works', title: `How we deliver <span class="text-gradient">${s.title.toLowerCase().replace('seo / aeo / geo', 'SEO, AEO &amp; GEO')}.</span>` })}
${tools}
${faqSection(root, faqs.slice(0, 4))}
${others}
${ctaBand(root, `Let’s talk ${s.title}.`, 'Tell us about your goals and we’ll send a tailored plan and quote within 48 hours.')}`;

  return page({ root, title: s.title, description: s.short, active: 'services', body, path: `services/${s.slug}.html` });
}

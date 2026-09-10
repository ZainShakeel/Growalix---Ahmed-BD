import { icon } from '../icons.mjs';
import { page, ambient, eyebrow, ctaBand } from '../layout.mjs';
import { heroVisual, heroStatsHtml, trusted, servicesSection, studioSection, workSection, whySection, processSection, testimonialsSection, pricingSection, postsSection, faqSection } from '../sections.mjs';

export function home() {
  const root = '';
  const body = `
<section class="hero">${ambient}
  <div class="container hero-grid">
    <div>
      <div class="reveal">${eyebrow('Digital growth agency')}</div>
      <h1 class="h-xl reveal" style="--d:80ms">We build <span class="text-gradient">growth engines</span> that compound.</h1>
      <p class="lead reveal" style="--d:160ms">Outreach, lead generation, search, paid media, web, apps and content — one expert team running every channel that grows your revenue.</p>
      <div class="hero-actions reveal" style="--d:240ms">
        <a class="btn btn-primary" href="contact.html">Book a strategy call ${icon('arrowUpRight')}</a>
        <a class="btn btn-ghost" href="#services"><span class="play-dot">${icon('play')}</span>Explore services</a>
      </div>
      ${heroStatsHtml()}
    </div>
    ${heroVisual()}
  </div>
</section>
${trusted()}
${servicesSection(root)}
${studioSection(root)}
${workSection(root)}
${whySection()}
${processSection()}
${testimonialsSection()}
${pricingSection(root)}
${postsSection(root)}
${faqSection(root)}
${ctaBand(root)}`;
  return page({ root, active: 'home', body, path: '' });
}

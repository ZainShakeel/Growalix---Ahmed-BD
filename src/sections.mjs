import { icon } from './icons.mjs';
import { eyebrow, mock, logoMark } from './layout.mjs';
import { services } from './data/services.mjs';
import { brand, heroStats, trustedBy, whyUs, results, process, timeline, testimonials, pricing, faqs, work, posts } from './data/site.mjs';

const d = (i, step = 80) => `style="--d:${i * step}ms"`;
const slugFor = { Outreach: 'email-marketing', 'Paid Media': 'paid-media', SEO: 'seo-geo-aeo', 'Web & App': 'web-app-development' };

// ---------- hero ----------
const spark = (pts) => `<svg viewBox="0 0 100 20" preserveAspectRatio="none"><path d="M${pts}" fill="none" stroke="#8b5cf6" stroke-width="2" stroke-linecap="round"/></svg>`;
const barHeights = [35, 52, 44, 60, 38, 70, 55, 48, 76, 62, 58, 84, 66, 72, 50, 88, 70, 64, 92, 78, 68, 95, 80, 74, 98, 86];

export function heroVisual() {
  const side = ['Overview', 'Campaigns', 'Leads', 'SEO & AEO', 'Paid media', 'Reports'];
  return `<div class="hero-visual reveal" ${d(3)}>
  <div class="frame glass float-slow">
    <div class="dash">
      <div class="dash-side">${side.map((s, i) => `<div class="row${i === 0 ? ' on' : ''}"><i></i>${s}</div>`).join('')}<div class="plan">Growth plan<br><span style="opacity:.7">Renews in 12 days</span><b>Upgrade</b></div></div>
      <div class="dash-main">
        <div class="dash-top"><strong>Growth Overview</strong><span class="pill">Export</span></div>
        <div class="kpis">
          <div class="kpi">Revenue<b>$48.2K</b>${spark('0 16 L20 13 L40 14 L60 8 L80 9 L100 3')}</div>
          <div class="kpi">Leads<b>2,480</b>${spark('0 14 L20 15 L40 10 L60 11 L80 6 L100 5')}</div>
          <div class="kpi">Reply rate<b>12.4%</b>${spark('0 12 L20 14 L40 9 L60 12 L80 7 L100 6')}</div>
          <div class="kpi">ROAS<b>4.6x</b>${spark('0 17 L20 12 L40 13 L60 9 L80 5 L100 4')}</div>
        </div>
        <div class="chart-card">Pipeline growth<div class="bars">${barHeights.map((h, i) => `<i style="height:${h}%;animation-delay:${i * 30}ms"></i>`).join('')}</div></div>
        <div class="dash-row">
          <div class="chart-card line-chart">Organic &amp; AI traffic<svg viewBox="0 0 200 70" preserveAspectRatio="none"><defs><linearGradient id="lcg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8b5cf6" stop-opacity=".4"/><stop offset="1" stop-color="#8b5cf6" stop-opacity="0"/></linearGradient></defs><path d="M0 60C20 55 30 40 50 45S80 25 100 30 140 10 160 18 190 5 200 8V70H0Z" fill="url(#lcg)"/><path d="M0 60C20 55 30 40 50 45S80 25 100 30 140 10 160 18 190 5 200 8" fill="none" stroke="#8b5cf6" stroke-width="2"/></svg></div>
          <div class="chart-card">Channel mix<div class="donut"></div></div>
        </div>
      </div>
    </div>
  </div>
  <div class="float-card glass tl float"><span class="ic">${icon('trendingUp')}</span><div><strong>+214%</strong><span>Pipeline growth</span></div></div>
  <div class="float-card glass br float" style="animation-delay:-3s"><span class="ic soft">${icon('zap')}</span><div><strong>7 days</strong><span>Avg. launch time</span></div></div>
  <span class="orb o1 float"></span><span class="orb o2 float-slow"></span><span class="orb o3 float-slow" style="animation-delay:-4s"></span>
</div>`;
}

export const heroStatsHtml = () =>
  `<div class="stats reveal" ${d(4)}>${heroStats
    .map((s) => `<div class="stat"><strong data-count="${s.value}" data-suffix="${s.suffix}" data-decimals="${s.decimals || 0}">${s.value}${s.suffix}</strong><span>${s.label}</span></div>`)
    .join('')}</div>`;

// ---------- marquee ----------
export const trusted = () =>
  `<section class="trusted"><p>Brands we have worked with</p><div class="marquee"><div class="marquee-track">${[...trustedBy, ...trustedBy]
    .map((t) => `<span>${t}</span>`)
    .join('')}</div></div></section>`;

// ---------- services ----------
export const serviceCard = (root, s, i) => `<a class="card service-card reveal" ${d(i % 3)} href="${root}services/${s.slug}.html">
  <span class="ic">${icon(s.icon)}</span>
  <div class="body"><h3>${s.title}</h3><p>${s.short}</p></div>
  <div class="foot"><span class="tags">${s.tags.join(' · ')}</span><span class="go">${icon('arrowUpRight')}</span></div>
</a>`;

export function servicesSection(root, { head = true } = {}) {
  return `<section class="section" id="services"><div class="container">
  ${head ? `<div class="section-head split"><div class="reveal">${eyebrow('Capabilities')}<h2 class="h-lg">Twelve services,<br><span class="text-gradient">one growth team.</span></h2></div><p class="lead reveal" ${d(1)}>Every channel your customers use — run by specialists who share one strategy, one dashboard and one goal: revenue.</p></div>` : ''}
  <div class="services-grid">
    ${services.map((s, i) => serviceCard(root, s, i)).join('')}
  </div>
</div></section>`;
}

// ---------- studio / about ----------
export function studioSection(root) {
  const chips = [
    ['mail', 'Email', 'top:12%;left:8%'],
    ['search', 'SEO / AEO', 'top:10%;right:8%'],
    ['megaphone', 'Paid media', 'top:46%;left:4%'],
    ['code', 'Web & apps', 'bottom:30%;right:5%'],
    ['youtube', 'YouTube', 'bottom:12%;left:10%'],
  ];
  return `<section class="section"><div class="container studio-grid">
  <div class="studio-visual reveal">
    <span class="ring" style="width:78%;aspect-ratio:1"></span><span class="ring" style="width:54%;aspect-ratio:1"></span>
    <span class="core float-slow">${logoMark()}</span>
    ${chips.map(([ic, t, pos], i) => `<span class="chip glass float" style="${pos};animation-delay:-${i * 1.3}s">${icon(ic)}${t}</span>`).join('')}
    <div class="studio-badge glass"><strong class="text-gradient">12</strong><span>Growth services</span></div>
  </div>
  <div>
    <div class="reveal">${eyebrow('The agency')}</div>
    <h2 class="h-lg reveal" ${d(1)} style="margin-top:1.5rem">A lean team with an <span class="text-gradient">unreasonable</span> standard.</h2>
    <p class="lead reveal" ${d(2)} style="margin-top:1.5rem">We started with one channel and one rule: never run a campaign we wouldn’t pay for ourselves. Today that rule covers twelve services — and it still kills more ideas than any deadline.</p>
    <div class="mv">
      <div class="card reveal" ${d(2)}>${icon('target')}<h4>Mission</h4><p>Turn marketing spend into measurable, compounding revenue.</p></div>
      <div class="card reveal" ${d(3)}>${icon('compass')}<h4>Vision</h4><p>Be the only growth partner a business ever needs.</p></div>
    </div>
    <ul class="timeline">${timeline.map((t, i) => `<li class="reveal" ${d(i)}><span class="yr">${t.year}</span><div><strong>${t.title}</strong><span>${t.copy}</span></div></li>`).join('')}</ul>
    <div class="award-pill reveal">${icon('shield')} Your accounts, your data — 100% ownership, always.</div>
  </div>
</div></section>`;
}

// ---------- work ----------
export function workCard(root, w, i, linkToService) {
  const href = linkToService ? `${root}services/${slugFor[w.cat]}.html` : `${root}work.html`;
  return `<a class="work-card reveal${w.size === 'tall' ? ' tall' : ''}" ${d(i % 2)} data-cat="${w.cat}" href="${href}">
  <div class="media">${mock(w.theme)}<span class="badge glass">${icon('award')}${w.cat}</span></div>
  <div class="info"><div><span class="result">${w.result}</span><h3>${w.title}</h3></div><span class="arrow">${icon('arrowUpRight')}</span></div>
</a>`;
}

export function workSection(root, { head = true, linkToService = false } = {}) {
  const cats = ['all', ...new Set(work.map((w) => w.cat))];
  const filters = `<div class="filters glass reveal" ${d(1)} data-filters>${cats.map((c, i) => `<button class="filter-btn${i === 0 ? ' on' : ''}" type="button" data-filter="${c}">${c === 'all' ? 'All' : c}</button>`).join('')}</div>`;
  const col = (items) => `<div class="col">${items.map((w) => workCard(root, w, work.indexOf(w), linkToService)).join('')}</div>`;
  return `<section class="section"><div class="container">
  <div class="section-head split">${head ? `<div class="reveal">${eyebrow('Selected work')}<h2 class="h-lg">Results that earned<br><span class="text-gradient">a second look.</span></h2></div>` : '<div></div>'}<div style="justify-self:end">${filters}</div></div>
  <div class="work-grid">${col([work[0], work[2]])}${col([work[1], work[3]])}</div>
</div></section>`;
}

// ---------- why us ----------
export const whySection = () => `<section class="section"><div class="container why-grid">
  <div>
    <div class="reveal">${eyebrow('Why Growalix')}</div>
    <h2 class="h-lg reveal" ${d(1)} style="margin-top:1.5rem">The reasons clients <span class="text-gradient">stay for years.</span></h2>
    <p class="lead reveal" ${d(2)} style="margin-top:1.5rem">Most of our engagements turn into long-term partnerships. Here is what every service is measured against.</p>
    <div class="result-card reveal" ${d(3)}>${results
      .map((r) => `<div class="result-row"><span class="ic">${icon(r.icon)}</span><div><strong>${r.title}</strong><span>${r.copy}</span></div></div>`)
      .join('')}</div>
  </div>
  <div class="feat-grid">${whyUs.map((w, i) => `<div class="card feat reveal" ${d(i % 2)}><span class="ic">${icon(w.icon)}</span><h4>${w.title}</h4><p>${w.copy}</p></div>`).join('')}</div>
</div></section>`;

// ---------- process ----------
export function processSection({ steps = process.map((p) => [p.title, p.copy]), title = 'A process with <span class="text-gradient">no black boxes.</span>', label = 'How we work' } = {}) {
  return `<section class="section process-wrap"><div class="container">
  <div class="section-head"><div class="reveal">${eyebrow(label)}<h2 class="h-lg" style="max-width:760px">${title}</h2></div></div>
  <div class="steps${steps.length === 4 ? ' four' : ''}">${steps
    .map(([t, c], i) => `<div class="step reveal" ${d(i)}><span class="num">${String(i + 1).padStart(2, '0')}</span><h4>${t}</h4><p>${c}</p><div class="prog"><i data-w="${Math.round(((i + 1) / steps.length) * 100)}"></i></div></div>`)
    .join('')}</div>
</div></section>`;
}

// ---------- testimonials ----------
export const testimonialsSection = () => `<section class="section testi"><div class="container testi-grid" data-slider>
  <div>
    <div class="reveal">${eyebrow('Client stories')}</div>
    <h2 class="h-lg reveal" ${d(1)} style="margin-top:1.5rem">Proof, in their<br><span class="text-gradient">own words.</span></h2>
    <div class="slider-nav reveal" ${d(2)}><button class="icon-btn" type="button" data-prev aria-label="Previous testimonial">${icon('arrowLeft')}</button><button class="icon-btn" type="button" data-next aria-label="Next testimonial">${icon('arrowRight')}</button></div>
  </div>
  <div class="reveal" ${d(2)}>
    <div class="slides">${testimonials
      .map((t) => `<figure class="slide glass"><div class="stars">${icon('star').repeat(5)}</div><blockquote>“${t.quote}”</blockquote><figcaption class="who"><span class="av">${t.initials}</span><div><strong>${t.name}</strong><span>${t.role}</span></div><span class="co">${t.company}</span></figcaption></figure>`)
      .join('')}</div>
    <div class="dots">${testimonials.map((_, i) => `<button type="button" aria-label="Go to testimonial ${i + 1}"></button>`).join('')}</div>
  </div>
</div></section>`;

// ---------- pricing ----------
export function pricingSection(root, { head = true } = {}) {
  return `<section class="section" id="pricing"><div class="container">
  <div class="section-head center" style="margin-bottom:0">${head ? `<div class="reveal">${eyebrow('Engagements')}<h2 class="h-lg">Pricing without the<br><span class="text-gradient">guesswork.</span></h2></div>` : ''}
  <div class="billing glass reveal" ${d(1)} data-billing><button type="button" class="on" data-mode="monthly">Monthly</button><button type="button" data-mode="yearly">Yearly<small>-20%</small></button></div></div>
  <div class="price-grid">${pricing
    .map(
      (p, i) => `<div class="card price-card${p.featured ? ' featured' : ''} reveal" ${d(i)}>
    ${p.featured ? `<span class="hot">${icon('sparkles')}Most chosen</span>` : ''}
    <h3>${p.name}</h3><p class="blurb">${p.blurb}</p>
    <div class="amount"><strong data-monthly="${p.monthly}">$${p.monthly.toLocaleString('en-US')}</strong><span>/mo</span></div>
    <ul>${p.features.map((f) => `<li><span class="ck">${icon('check')}</span>${f}</li>`).join('')}</ul>
    <a class="btn ${p.featured ? 'btn-white' : 'btn-primary'} btn-block" href="${root}contact.html">${p.cta}</a>
  </div>`
    )
    .join('')}</div>
  <p class="price-note">Month-to-month, cancel anytime. Ad spend and third-party tool subscriptions are billed separately.</p>
</div></section>`;
}

// ---------- insights ----------
const postSlug = { SEO: 'seo-geo-aeo', Outreach: 'email-marketing', 'Paid Media': 'paid-media' };
export const postsSection = (root) => `<section class="section" style="padding-top:0"><div class="container">
  <div class="section-head split"><div class="reveal">${eyebrow('Insights')}<h2 class="h-lg">Notes from the<br><span class="text-gradient">growth floor.</span></h2></div><div class="reveal" ${d(1)} style="justify-self:end"><a class="btn btn-ghost btn-sm" href="${root}services.html">All services ${icon('arrowUpRight')}</a></div></div>
  <div class="grid-3">${posts
    .map((p, i) => `<a class="card post-card reveal" ${d(i)} href="${root}services/${postSlug[p.tag]}.html"><div class="media">${mock(p.theme)}</div><div class="body"><div class="meta"><b>${p.tag}</b>${p.date}</div><h3>${p.title}</h3><span class="more">Explore the service ${icon('arrowUpRight')}</span></div></a>`)
    .join('')}</div>
</div></section>`;

// ---------- contact form (home + contact page) ----------
export function contactForm(root, id = 'f') {
  return `<form class="card form reveal" ${d(1)} data-contact-form data-to="${brand.email}"${brand.formEndpoint ? ` data-endpoint="${brand.formEndpoint}"` : ''} novalidate>
  <h2 class="h-md">Start a project</h2>
  <p class="muted" style="margin:.6rem 0 2rem">Fields marked * are required.</p>
  <div class="form-grid">
    <div class="field"><label for="${id}-name">Full name *</label><input id="${id}-name" name="name" autocomplete="name" required></div>
    <div class="field"><label for="${id}-email">Work email *</label><input id="${id}-email" name="email" type="email" autocomplete="email" required></div>
    <div class="field"><label for="${id}-company">Company / website</label><input id="${id}-company" name="company" autocomplete="organization"></div>
    <div class="field"><label for="${id}-budget">Monthly budget</label><select id="${id}-budget" name="budget"><option value="">Select a range</option><option>Under $1,000</option><option>$1,000 – $3,000</option><option>$3,000 – $7,500</option><option>$7,500+</option><option>One-off project</option></select></div>
    <fieldset class="field full" style="border:0;padding:0;margin:0"><legend style="font-size:.85rem;font-weight:600;margin-bottom:.6rem">Services you’re interested in</legend><div class="chips">${services
      .map((s, i) => `<label><input type="checkbox" id="${id}-s${i}" name="services" value="${s.title}"><span>${s.title}</span></label>`)
      .join('')}</div></fieldset>
    <div class="field full"><label for="${id}-msg">Tell us about your goals</label><textarea id="${id}-msg" name="message" placeholder="What are you selling, who to, and what does success look like in 90 days?"></textarea></div>
  </div>
  <button class="btn btn-primary" type="submit" style="margin-top:1.75rem">Send message ${icon('send')}</button>
  <p class="form-msg" role="status" aria-live="polite"></p>
</form>`;
}

export const contactFormSection = (root) => `<section class="section" id="start" style="padding-top:2rem"><div class="container">
  <div class="section-head center reveal">${eyebrow('Get started')}<h2 class="h-lg">Tell us what you need,<br><span class="text-gradient">we’ll map the plan.</span></h2><p class="lead">Send us your goals and we’ll reply within one business day with next steps and a free audit.</p></div>
  <div style="max-width:880px;margin-inline:auto">${contactForm(root, 'h')}</div>
</div></section>`;

// ---------- faq ----------
export const faqSection = (root, list = faqs) => `<section class="section" style="padding-top:0"><div class="container faq-grid">
  <div class="reveal"><h2 class="h-md">Frequently asked <span class="text-gradient">questions</span></h2><p class="muted" style="margin-top:1rem">Everything clients usually ask before the first call.</p><a class="btn btn-ghost btn-sm" style="margin-top:1.75rem" href="${root}contact.html">Ask us anything ${icon('arrowUpRight')}</a></div>
  <div class="faq reveal" ${d(1)}>${list.map((f, i) => `<details${i === 0 ? ' open' : ''}><summary>${f.q}${icon('chevronDown')}</summary><p>${f.a}</p></details>`).join('')}</div>
</div></section>`;

import { icon } from './icons.mjs';
import { brand } from './data/site.mjs';
import { services } from './data/services.mjs';

// Brand mark — same geometry as assets/logo.svg (unique gradient ids per use)
let markId = 0;
export function logoMark() {
  const id = `lg${markId++}`;
  return `<svg viewBox="0 0 112 112" aria-hidden="true"><defs>
<linearGradient id="${id}r" x1=".15" y1="0" x2=".85" y2="1"><stop offset="0" stop-color="#4B84FF"/><stop offset=".45" stop-color="#2454FF"/><stop offset="1" stop-color="#1330A8"/></linearGradient>
<linearGradient id="${id}a" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#2454FF"/><stop offset="1" stop-color="#5B90FF"/></linearGradient></defs>
<path fill="url(#${id}r)" d="M61.99 12.7A46 46 0 1 0 97.23 42.27L79.37 48.77A27 27 0 1 1 58.69 31.41Z"/>
<rect x="53" y="49" width="45" height="18" rx="3" fill="url(#${id}r)"/>
<path d="M38 77 83 32" stroke="url(#${id}a)" stroke-width="15" stroke-linecap="round" fill="none"/>
<polygon points="99,15 99,49 65,15" fill="url(#${id}a)"/></svg>`;
}

export const logo = (root) =>
  `<a href="${root}index.html" class="logo" aria-label="${brand.name} home">${logoMark()}<span><span class="a">${brand.nameA}</span><span class="b">${brand.nameB}</span></span></a>`;

const nav = [
  { label: 'Home', href: 'index.html', key: 'home' },
  { label: 'Services', href: 'services.html', key: 'services', dropdown: true },
  { label: 'Work', href: 'work.html', key: 'work' },
  { label: 'About', href: 'about.html', key: 'about' },
  { label: 'Pricing', href: 'pricing.html', key: 'pricing' },
  { label: 'Contact', href: 'contact.html', key: 'contact' },
];

function header(root, active) {
  const svcLinks = services
    .map((s) => `<a class="dd-item" href="${root}services/${s.slug}.html"><span class="ic">${icon(s.icon)}</span><span><strong>${s.title}</strong><span>${s.tags.join(' · ')}</span></span></a>`)
    .join('');
  const links = nav
    .map((n) =>
      n.dropdown
        ? `<li class="dropdown"><a class="dd-btn${active === n.key ? ' active' : ''}" href="${root}${n.href}">${n.label} ${icon('chevronDown')}</a><div class="dd-panel glass">${svcLinks}</div></li>`
        : `<li><a href="${root}${n.href}"${active === n.key ? ' class="active" aria-current="page"' : ''}>${n.label}</a></li>`
    )
    .join('');
  const mobile = nav
    .map((n) =>
      n.dropdown
        ? `<a href="${root}${n.href}">${n.label}</a><div class="sub">${services.map((s) => `<a href="${root}services/${s.slug}.html">${s.title}</a>`).join('')}</div>`
        : `<a href="${root}${n.href}">${n.label}</a>`
    )
    .join('');
  return `<header class="site-header"><div class="container"><div class="bar">
  ${logo(root)}
  <nav aria-label="Main"><ul class="nav-links">${links}</ul></nav>
  <div class="header-actions">
    <button class="icon-btn theme-toggle" type="button" data-theme-toggle aria-label="Toggle dark mode">${icon('sun', 'sun')}${icon('moon', 'moon')}</button>
    <a class="btn btn-primary btn-sm header-cta" href="${root}contact.html">Get a free audit</a>
    <button class="icon-btn menu-toggle" type="button" data-menu-toggle aria-label="Open menu" aria-expanded="false">${icon('menu', 'bars')}${icon('x', 'x')}</button>
  </div>
</div></div></header>
<nav class="mobile-nav glass" aria-label="Mobile">${mobile}<a class="btn btn-primary btn-block" href="${root}contact.html">Get a free audit</a></nav>`;
}

export function ctaBand(root, title = 'Ready to grow faster?', body = 'Book a free 30-minute growth audit. We’ll review your funnel and show you the three quickest wins — no strings attached.') {
  return `<section class="section" style="padding-block:4rem"><div class="container"><div class="cta-band reveal">
  <div><h2 class="h-lg">${title}</h2><p>${body}</p></div>
  <div class="actions"><a class="btn btn-white" href="${root}contact.html">Book a free audit ${icon('arrowUpRight')}</a><a class="btn btn-outline" href="${root}pricing.html">See pricing</a></div>
</div></div></section>`;
}

function footer(root) {
  const s = brand.socials;
  const col = (title, items) => `<div><h5>${title}</h5><ul>${items.map(([l, h]) => `<li><a href="${h}">${l}</a></li>`).join('')}</ul></div>`;
  return `<footer class="site-footer"><div class="container">
  <div class="foot-grid">
    <div class="foot-about">${logo(root)}<p>${brand.description}</p>
      <form class="news" data-newsletter><label class="sr-only" for="nl">Email</label><input id="nl" type="email" placeholder="Your email for growth tips"><button class="btn btn-primary btn-sm" type="submit">Subscribe</button></form>
      <div class="socials">
        <a href="${s.linkedin}" aria-label="LinkedIn" target="_blank" rel="noopener">${icon('linkedin')}</a>
        <a href="${s.instagram}" aria-label="Instagram" target="_blank" rel="noopener">${icon('instagram')}</a>
        <a href="${s.facebook}" aria-label="Facebook" target="_blank" rel="noopener">${icon('facebook')}</a>
        <a href="${s.youtube}" aria-label="YouTube" target="_blank" rel="noopener">${icon('youtube')}</a>
        <a href="${s.twitter}" aria-label="X / Twitter" target="_blank" rel="noopener">${icon('twitter')}</a>
      </div>
    </div>
    ${col('Services', services.slice(0, 5).map((x) => [x.title, `${root}services/${x.slug}.html`]))}
    ${col('More services', services.slice(5).map((x) => [x.title, `${root}services/${x.slug}.html`]))}
    ${col('Company', [['About', `${root}about.html`], ['Work', `${root}work.html`], ['Pricing', `${root}pricing.html`], ['Contact', `${root}contact.html`], [brand.email, `mailto:${brand.email}`]])}
  </div>
  <div class="foot-bottom"><span>© <span data-year>2026</span> ${brand.name}. All rights reserved.</span><span>${brand.location}</span></div>
  <div class="foot-word" aria-hidden="true">${brand.name}</div>
</div></footer>`;
}

export function page({ root = '', title, description = brand.description, active = '', body, path = '' }) {
  const full = title ? `${title} | ${brand.name}` : `${brand.name} — ${brand.tagline}`;
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${full}</title>
<meta name="description" content="${description}">
<link rel="canonical" href="${brand.url}/${path}">
<meta property="og:title" content="${full}">
<meta property="og:description" content="${description}">
<meta property="og:type" content="website">
<meta name="theme-color" content="#2454FF">
<link rel="icon" href="${root}assets/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="${root}assets/css/style.css">
<script>try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme: dark)').matches))document.documentElement.classList.add('dark')}catch(e){}</script>
</head>
<body>
${header(root, active)}
<main>
${body}
</main>
${footer(root)}
<script src="${root}assets/js/main.js" defer></script>
</body>
</html>
`;
}

// Shared visual blocks ----------------------------------------------------

export const ambient = `<div class="ambient" aria-hidden="true"><div class="blob b1"></div><div class="blob b2"></div><div class="blob b3"></div></div>`;

export const eyebrow = (t) => `<span class="eyebrow">${t}</span>`;

// Decorative UI mockups (no external images needed)
export function mock(theme) {
  if (theme === 'mail')
    return `<div class="mock t-mail"><div class="m-win m-mail"><div class="top"><i></i><i></i><i></i></div><ul>${[1, 2, 3, 4]
      .map((n) => `<li><span class="av"></span><span class="ln"><b></b><u></u></span>${n % 2 ? '<span class="tag">Replied</span>' : ''}</li>`)
      .join('')}</ul></div></div>`;
  if (theme === 'ads')
    return `<div class="mock t-ads"><div class="m-ad"><div class="post"><div class="img"></div><div class="cta"><span>Sponsored · 4.6x ROAS</span><b>Shop now</b></div></div><div class="roas">${[30, 45, 38, 60, 52, 75, 68, 90, 100]
      .map((h) => `<i style="height:${h}%"></i>`)
      .join('')}</div></div></div>`;
  if (theme === 'seo')
    return `<div class="mock t-seo"><div class="m-win"><div class="top"><i></i><i></i><i></i></div><div class="m-serp"><div class="q">${icon('search')} best growth agency</div><div class="ai"><b>AI OVERVIEW</b><div class="r" style="margin-top:6px"><u></u><u style="width:80%"></u></div></div>${[1, 2]
      .map(() => `<div class="r"><b></b><u></u><u style="width:70%"></u></div>`)
      .join('')}</div></div></div>`;
  return `<div class="mock t-app"><div class="m-phone"><div class="scr"><div class="notch"></div><span>Total bookings</span><span class="big">$24,850</span><div class="tile"></div><div class="row"><div class="tile"></div><div class="tile"></div></div><div class="tile"></div></div></div></div>`;
}

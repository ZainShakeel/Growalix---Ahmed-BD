import { icon } from './icons.mjs';
import { brand } from './data/site.mjs';
import { services } from './data/services.mjs';
import { leadPopup } from './sections.mjs';

// Brand mark — same geometry as assets/logo.svg (unique gradient ids per use)
let markId = 0;
export function logoMark() {
  const id = `lg${markId++}`;
  return `<svg viewBox="0 0 112 112" aria-hidden="true"><defs>
<linearGradient id="${id}r" x1=".1" y1="0" x2=".9" y2="1"><stop offset="0" stop-color="#854ff7"/><stop offset=".55" stop-color="#6D8CF8"/><stop offset="1" stop-color="#29bdfd"/></linearGradient>
<linearGradient id="${id}a" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#854ff7"/><stop offset="1" stop-color="#29bdfd"/></linearGradient></defs>
<path fill="url(#${id}r)" d="M61.99 12.7A46 46 0 1 0 97.23 42.27L79.37 48.77A27 27 0 1 1 58.69 31.41Z"/>
<rect x="53" y="49" width="45" height="18" rx="3" fill="url(#${id}r)"/>
<path d="M38 77 83 32" stroke="url(#${id}a)" stroke-width="15" stroke-linecap="round" fill="none"/>
<polygon points="99,15 99,49 65,15" fill="url(#${id}a)"/></svg>`;
}

// Full-colour wordmark supplied by the client. growalixlogo-sm.png is a
// 480×160 resize of the original growalixlogo.png (2172×724) — the header only
// ever renders it ~115px wide, so the small file keeps every page light while
// staying sharp on retina screens.
export const logo = (root) =>
  `<a href="${root}index.html" class="logo" aria-label="${brand.name} home"><img src="${root}assets/growalixlogo-sm.png" alt="${brand.name}" width="480" height="160" decoding="async"></a>`;

const nav = [
  { label: 'Home', href: 'index.html', key: 'home' },
  { label: 'Services', href: 'services.html', key: 'services', dropdown: true },
  { label: 'About', href: 'about.html', key: 'about' },
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
  <div class="actions"><a class="btn btn-white" href="${root}contact.html">Book a free audit ${icon('arrowUpRight')}</a><a class="btn btn-outline" href="${root}services.html">See services</a></div>
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
    ${col('Services', services.slice(0, 6).map((x) => [x.title, `${root}services/${x.slug}.html`]))}
    ${col('More services', services.slice(6).map((x) => [x.title, `${root}services/${x.slug}.html`]))}
    ${col('Company', [['About', `${root}about.html`], ['Contact', `${root}contact.html`], [brand.email, `mailto:${brand.email}`], [brand.phone, `tel:${brand.phone.replace(/[^+\d]/g, '')}`]])}
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
<meta name="theme-color" content="#854ff7">
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
${leadPopup(root)}
<script src="${root}assets/js/main.js" defer></script>
</body>
</html>
`;
}

// Shared visual blocks ----------------------------------------------------

export const ambient = `<div class="ambient" aria-hidden="true"><div class="blob b1"></div><div class="blob b2"></div><div class="blob b3"></div></div>`;

export const eyebrow = (t) => `<span class="eyebrow">${t}</span>`;

// Decorative illustrations for the case-study cards. Each one is a complete,
// self-contained SVG: all geometry and colour lives inside the markup, so it
// cannot be broken by unrelated stylesheet edits. Drawn on a 400×240 canvas
// and scaled to fill its container.
//
// `--mk-*` custom properties let the card theme the artwork (see .mock in the
// stylesheet); the fallbacks keep it correct if the SVG is ever used alone.
let mockId = 0;
export function mock(theme) {
  const u = `mk${mockId++}`;
  const open = `<svg class="mock" viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice" role="img" aria-hidden="true"><defs>
<linearGradient id="${u}g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#854ff7"/><stop offset="1" stop-color="#29bdfd"/></linearGradient>
<linearGradient id="${u}bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="var(--mk-bg-a,#f6f2ff)"/><stop offset="1" stop-color="var(--mk-bg-b,#eaf6ff)"/></linearGradient></defs>
<rect width="400" height="240" fill="url(#${u}bg)"/>`;
  const card = 'var(--mk-card,#fff)';
  const line = 'var(--mk-line,#dfd8f5)';
  const dim = 'var(--mk-dim,#efeaff)';

  // Email — an inbox where replies are coming back in.
  if (theme === 'mail') {
    const rows = [0, 1, 2].map((i) => {
      const y = 70 + i * 46;
      const replied = i !== 1;
      return `<rect x="40" y="${y}" width="320" height="36" rx="8" fill="${card}"/>
<circle cx="62" cy="${y + 18}" r="11" fill="url(#${u}g)" opacity="${replied ? 1 : 0.35}"/>
<rect x="82" y="${y + 10}" width="${replied ? 92 : 120}" height="6" rx="3" fill="${line}"/>
<rect x="82" y="${y + 22}" width="${replied ? 150 : 108}" height="5" rx="2.5" fill="${dim}"/>
${replied ? `<rect x="286" y="${y + 11}" width="56" height="15" rx="7.5" fill="url(#${u}g)" opacity=".16"/><path d="M299 18.5h8m-8 0 3-3m-3 3 3 3" transform="translate(0 ${y})" stroke="#854ff7" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/><rect x="311" y="${y + 15}" width="24" height="6" rx="3" fill="#854ff7" opacity=".5"/>` : ''}`;
    }).join('');
    return `${open}
<rect x="40" y="34" width="320" height="22" rx="8" fill="${card}"/>
<circle cx="56" cy="45" r="4" fill="url(#${u}g)"/><rect x="68" y="42" width="70" height="6" rx="3" fill="${line}"/>
${rows}
<g transform="translate(290 204)"><rect width="70" height="22" rx="11" fill="url(#${u}g)"/><rect x="16" y="9" width="38" height="4" rx="2" fill="#fff" opacity=".9"/></g>
</svg>`;
  }

  // LinkedIn — a profile card above a post that is gaining traction.
  if (theme === 'seo') {
    return `${open}
<rect x="36" y="28" width="328" height="74" rx="12" fill="${card}"/>
<rect x="36" y="28" width="328" height="26" rx="12" fill="url(#${u}g)" opacity=".18"/>
<circle cx="74" cy="62" r="20" fill="url(#${u}g)"/>
<path d="M68 70v-11m0-5.5v.01M80 70v-6a4 4 0 0 0-8 0v6" stroke="#fff" stroke-width="2.4" stroke-linecap="round" fill="none"/>
<rect x="104" y="52" width="104" height="7" rx="3.5" fill="${line}"/>
<rect x="104" y="66" width="150" height="5" rx="2.5" fill="${dim}"/>
<rect x="104" y="78" width="72" height="5" rx="2.5" fill="${dim}"/>
<rect x="36" y="116" width="328" height="96" rx="12" fill="${card}"/>
<rect x="56" y="134" width="180" height="6" rx="3" fill="${line}"/>
<rect x="56" y="150" width="260" height="5" rx="2.5" fill="${dim}"/>
<rect x="56" y="163" width="214" height="5" rx="2.5" fill="${dim}"/>
<g transform="translate(56 182)">
  <rect width="54" height="18" rx="9" fill="url(#${u}g)" opacity=".16"/>
  <path d="M13 12.5V8m5 4.5v-7m5 7V6" stroke="#854ff7" stroke-width="2" stroke-linecap="round" fill="none"/>
  <rect x="30" y="7" width="16" height="4" rx="2" fill="#854ff7" opacity=".55"/>
</g>
<g transform="translate(120 182)"><rect width="54" height="18" rx="9" fill="url(#${u}g)" opacity=".16"/><rect x="12" y="7" width="30" height="4" rx="2" fill="#854ff7" opacity=".45"/></g>
<path d="M248 196c14-4 26-14 32-28" stroke="url(#${u}g)" stroke-width="2.5" stroke-linecap="round" fill="none"/>
<path d="M276 164h8v8" stroke="url(#${u}g)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
</svg>`;
  }

  // Paid media — an ad creative beside a cost-per-lead curve that falls.
  return `${open}
<rect x="36" y="30" width="150" height="180" rx="12" fill="${card}"/>
<rect x="50" y="44" width="122" height="78" rx="8" fill="url(#${u}g)" opacity=".85"/>
<circle cx="86" cy="74" r="12" fill="#fff" opacity=".9"/>
<path d="M58 112l26-24 20 18 16-14 22 20" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" opacity=".9"/>
<rect x="50" y="134" width="88" height="6" rx="3" fill="${line}"/>
<rect x="50" y="148" width="58" height="5" rx="2.5" fill="${dim}"/>
<rect x="50" y="172" width="122" height="24" rx="12" fill="url(#${u}g)"/>
<rect x="88" y="182" width="46" height="5" rx="2.5" fill="#fff" opacity=".9"/>
<rect x="206" y="30" width="158" height="180" rx="12" fill="${card}"/>
<rect x="224" y="48" width="64" height="6" rx="3" fill="${line}"/>
<path d="M224 72c22 6 34 26 52 34s38 10 62 12" stroke="url(#${u}g)" stroke-width="3" stroke-linecap="round" fill="none"/>
<path d="M224 72c22 6 34 26 52 34s38 10 62 12v40H224z" fill="url(#${u}g)" opacity=".12"/>
<circle cx="338" cy="118" r="5" fill="#29bdfd"/>
${[64, 52, 56, 38, 42, 26].map((h, i) => `<rect x="${224 + i * 20}" y="${194 - h}" width="10" height="${h}" rx="4" fill="url(#${u}g)" opacity="${0.85 - i * 0.1}"/>`).join('')}
</svg>`;
}

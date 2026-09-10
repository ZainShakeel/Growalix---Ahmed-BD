// ─────────────────────────────────────────────────────────────
//  SITE CONFIG — edit brand details, contact info and copy here.
//  Values marked "PLACEHOLDER" must be replaced before launch.
// ─────────────────────────────────────────────────────────────

export const brand = {
  name: 'Growalix',
  nameA: 'Grow', // wordmark split (navy + blue), mirrors the logo
  nameB: 'alix',
  tagline: 'Digital growth agency',
  description:
    'Growalix is a full-service digital growth agency — email & LinkedIn outreach, lead generation, data extraction, SEO/AEO/GEO, paid media, web & app development, content and YouTube automation.',
  url: 'https://growalix.com', // PLACEHOLDER — production domain
  email: 'hello@growalix.com', // PLACEHOLDER
  phone: '+00 000 000 0000', // PLACEHOLDER
  whatsapp: 'https://wa.me/0000000000', // PLACEHOLDER
  // Optional form backend (e.g. 'https://formspree.io/f/xxxxxxx'). Empty = the
  // contact form opens the visitor's email app with the enquiry pre-filled.
  formEndpoint: '',
  location: 'Remote-first · Serving clients worldwide',
  hours: 'Mon – Sat · 9:00 – 18:00',
  socials: {
    linkedin: 'https://www.linkedin.com/', // PLACEHOLDER
    instagram: 'https://www.instagram.com/', // PLACEHOLDER
    facebook: 'https://www.facebook.com/', // PLACEHOLDER
    youtube: 'https://www.youtube.com/', // PLACEHOLDER
    twitter: 'https://x.com/', // PLACEHOLDER
  },
};

// PLACEHOLDER numbers — replace with the agency's real figures.
export const heroStats = [
  { value: 350, suffix: '+', label: 'Campaigns launched' },
  { value: 12, suffix: 'M+', label: 'Emails delivered' },
  { value: 4.9, suffix: '/5', label: 'Client rating', decimals: 1 },
  { value: 40, suffix: 'K+', label: 'Leads generated' },
];

export const trustedBy = ['HubSpot', 'Apollo', 'Shopify', 'Webflow', 'Meta', 'Google', 'LinkedIn', 'TikTok', 'Semrush', 'Clay'];

export const whyUs = [
  { icon: 'zap', title: 'Fast launch', copy: 'Campaigns live in days, not quarters.' },
  { icon: 'sparkles', title: 'AI-powered workflows', copy: 'Automation where it saves time, humans where it matters.' },
  { icon: 'users', title: 'Specialist team', copy: 'Each channel run by someone who lives in it.' },
  { icon: 'headphones', title: 'Always reachable', copy: 'A shared channel with real humans, not tickets.' },
  { icon: 'receipt', title: 'Transparent pricing', copy: 'Clear scope, clear price, no surprise invoices.' },
  { icon: 'chart', title: 'Result driven', copy: 'We report pipeline and revenue, not impressions.' },
];

export const scores = [
  { label: 'Campaign deliverability', value: 97 },
  { label: 'On-time delivery', value: 95 },
  { label: 'Client retention', value: 92 },
];

export const process = [
  { title: 'Discovery', copy: 'Goals, audience, offer and an honest audit.' },
  { title: 'Strategy', copy: 'Channel mix, KPIs and a 90-day roadmap.' },
  { title: 'Setup', copy: 'Tracking, tools, data and creative ready to go.' },
  { title: 'Launch', copy: 'Campaigns go live with daily monitoring.' },
  { title: 'Optimise', copy: 'A/B tests, bid shifts and copy iterations.' },
  { title: 'Scale', copy: 'Double down on what compounds, cut the rest.' },
];

export const timeline = [
  { year: '01', title: 'One channel, one client', copy: 'Started with cold email for a single SaaS brand.' },
  { year: '02', title: 'Outbound engine', copy: 'Added LinkedIn, data extraction and lead gen.' },
  { year: '03', title: 'Full-funnel agency', copy: 'SEO, paid media, web and app teams joined.' },
  { year: '04', title: 'AI-first growth', copy: 'AEO/GEO, automation and YouTube systems.' },
];

// PLACEHOLDER testimonials — replace with real, attributable client quotes.
export const testimonials = [
  {
    quote: 'Our outbound pipeline went from a trickle to 60+ qualified meetings a month. The email and LinkedIn system they built still runs on autopilot.',
    name: 'Client Name',
    role: 'Founder, B2B SaaS',
    initials: 'CN',
    company: 'COMPANY',
  },
  {
    quote: 'They rebuilt our site, fixed our SEO and restructured our Google and Meta ads. Cost per lead dropped by almost half within two months.',
    name: 'Client Name',
    role: 'Marketing Director, E-commerce',
    initials: 'CN',
    company: 'COMPANY',
  },
  {
    quote: 'The YouTube automation workflow freed up our whole team. Consistent uploads, better thumbnails and the channel finally grows every week.',
    name: 'Client Name',
    role: 'Creator & Educator',
    initials: 'CN',
    company: 'COMPANY',
  },
];

export const pricing = [
  {
    name: 'Starter',
    blurb: 'For startups testing their first growth channel.',
    monthly: 799,
    features: ['1 growth channel', 'Cold email or LinkedIn outreach', '1,000 verified leads / month', 'Monthly performance report', 'Email support'],
    cta: 'Start with Starter',
  },
  {
    name: 'Growth',
    blurb: 'For teams ready to build a multi-channel engine.',
    monthly: 1899,
    featured: true,
    features: ['3 growth channels', 'Email + LinkedIn + Paid media', '5,000 verified leads / month', 'SEO / AEO content plan', 'Weekly reporting & calls', 'Shared Slack / WhatsApp channel'],
    cta: 'Start with Growth',
  },
  {
    name: 'Scale',
    blurb: 'For brands that want a full growth department.',
    monthly: 3999,
    features: ['All 10 services available', 'Dedicated account manager', 'Web / app dev sprints', 'Content & YouTube automation', 'Custom dashboards', 'Priority 24/7 support'],
    cta: 'Talk to sales',
  },
];

export const faqs = [
  { q: 'How quickly can we start?', a: 'Most engagements kick off within 3–5 working days of signing. Outreach and paid campaigns typically go live in the first two weeks.' },
  { q: 'Do you work with in-house teams?', a: 'Yes. We can run a channel end-to-end or plug into your existing marketing team, sharing tools, dashboards and a common channel.' },
  { q: 'Can I pick only one service?', a: 'Absolutely. Every service can be booked on its own; bundles simply get better pricing and tighter cross-channel reporting.' },
  { q: 'Who owns the accounts, data and assets?', a: 'You do. Ad accounts, domains, lead lists, content and code are created in or transferred to your ownership.' },
  { q: 'How do you report results?', a: 'You get a live dashboard plus a weekly or monthly summary focused on pipeline, cost per lead, revenue and next actions.' },
];

// PLACEHOLDER case studies — illustrative results to be replaced with real projects.
export const work = [
  { cat: 'Outreach', title: 'Cold email engine for a B2B SaaS', result: '64 meetings / month', theme: 'mail', size: 'tall' },
  { cat: 'Paid Media', title: 'Meta + Google ads rebuild for D2C', result: '-47% cost per lead', theme: 'ads' },
  { cat: 'SEO', title: 'SEO + AEO content engine for a fintech', result: '+320% organic traffic', theme: 'seo' },
  { cat: 'Web & App', title: 'Booking app and marketing site', result: '4.8★ App Store rating', theme: 'app', size: 'tall' },
];

export const posts = [
  { tag: 'SEO', date: '02 Sep 2026', title: 'AEO & GEO: how to get your brand cited by AI search', theme: 'seo' },
  { tag: 'Outreach', date: '21 Aug 2026', title: 'The cold email setup that keeps you out of spam in 2026', theme: 'mail' },
  { tag: 'Paid Media', date: '08 Aug 2026', title: 'Why your TikTok ads burn budget — and the 3-step fix', theme: 'ads' },
];

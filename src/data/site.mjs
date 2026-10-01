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
    'Growalix is a full-service digital growth agency — email, SMS & WhatsApp, LinkedIn and social media marketing, data extraction, lead generation, SEO/GEO/AEO, paid media, web & app development, content creation and YouTube automation.',
  url: 'https://growalix.com',
  email: 'info@growalix.com',
  phone: '+1 (559) 554-0666',
  whatsapp: 'https://wa.me/15595540666',
  // Form backend. All submissions are delivered to brand.email.
  // Create a free form at https://formspree.io (set the recipient to
  // info@growalix.com) and paste the endpoint below, e.g.
  // 'https://formspree.io/f/xxxxxxx'. Until then forms fall back to opening
  // the visitor's email app with the enquiry pre-filled to info@growalix.com.
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

// Headline claim shown beside the hero eyebrow.
export const experience = 'Full-funnel growth, one team';

// Figures the agency can stand behind. Confirm each one before launch.
export const heroStats = [
  { value: 12, suffix: '', label: 'Growth services' },
  { value: 13, suffix: '+', label: 'Brands served' },
  { value: 100, suffix: '%', label: 'Account & data ownership' },
  { value: 24, suffix: '/7', label: 'Shared support channel' },
];

// Real companies the agency has worked with (from the client brief).
// Add any remaining companies to this list.
export const trustedBy = [
  'Software Finder',
  'The Hexaa',
  'Nurture Space',
  'NRT Solutions',
  'MatrixTribe',
  'Dtech Systems',
  'Renderland',
  'Sybrid',
  'Kadawar Group',
  'Takmeel Group',
  'Arclab Solutions',
  'The Brandspot',
  'Nexora Partners',
];

export const whyUs = [
  { icon: 'zap', title: 'Fast launch', copy: 'Campaigns live in days, not quarters.' },
  { icon: 'sparkles', title: 'AI-powered workflows', copy: 'Automation where it saves time, humans where it matters.' },
  { icon: 'users', title: 'Specialist team', copy: 'Each channel run by someone who lives in it.' },
  { icon: 'headphones', title: 'Always reachable', copy: 'A shared channel with real humans, not tickets.' },
  { icon: 'receipt', title: 'Transparent pricing', copy: 'Clear scope, clear price, no surprise invoices.' },
  { icon: 'chart', title: 'Result driven', copy: 'We report pipeline and revenue, not impressions.' },
];

// What clients get across every service — shown instead of invented percentages.
export const results = [
  { icon: 'target', title: 'Qualified pipeline', copy: 'Booked meetings and enquiries, not vanity metrics.' },
  { icon: 'trendingUp', title: 'Lower cost per lead', copy: 'Budget moved to the channels that actually convert.' },
  { icon: 'zap', title: 'Faster launches', copy: 'Campaigns, sites and channels live in weeks, not quarters.' },
  { icon: 'refresh', title: 'Compounding growth', copy: 'Search, content and outreach that build on each other.' },
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

// One review per service — shown as a carousel. Confirm names and job titles
// with each client before launch; the companies are real accounts.
export const testimonials = [
  {
    service: 'Email Marketing',
    quote: 'Our cold email went from landing in spam to booking meetings every week. Deliverability, copy and the follow-up sequences were all rebuilt from scratch.',
    name: 'Usman Tariq',
    role: 'Head of Growth',
    initials: 'UT',
    company: 'Software Finder',
  },
  {
    service: 'SMS & WhatsApp Marketing',
    quote: 'WhatsApp became our best repeat-purchase channel. Broadcasts, cart recovery and support replies now run from one inbox instead of three.',
    name: 'Hira Shahid',
    role: 'E-commerce Manager',
    initials: 'HS',
    company: 'The Brandspot',
  },
  {
    service: 'LinkedIn Marketing',
    quote: 'They turned our founder profile into a proper lead source. Connection requests, content and inbox follow-up finally feel like one system.',
    name: 'Daniyal Ahmed',
    role: 'Managing Director',
    initials: 'DA',
    company: 'NRT Solutions',
  },
  {
    service: 'Social Media Marketing',
    quote: 'Consistent posting, a clear brand look and engagement that actually comes from our target audience — not bots. The difference showed within a quarter.',
    name: 'Mehwish Khan',
    role: 'Marketing Lead',
    initials: 'MK',
    company: 'Nurture Space',
  },
  {
    service: 'Data Extraction',
    quote: 'The lists they build are clean, verified and exactly the segment we asked for. Our reps stopped wasting mornings on bad data.',
    name: 'Bilal Rehman',
    role: 'Head of Sales',
    initials: 'BR',
    company: 'Dtech Systems',
  },
  {
    service: 'Lead Generation',
    quote: 'We get qualified enquiries into the CRM every week with context attached. Our close rate went up simply because the leads fit.',
    name: 'Sana Iqbal',
    role: 'Chief Executive',
    initials: 'SI',
    company: 'Takmeel Group',
  },
  {
    service: 'SEO / GEO / AEO',
    quote: 'We now show up in Google and in AI answers for the terms that matter. Organic became our cheapest source of pipeline.',
    name: 'Faizan Malik',
    role: 'Founder',
    initials: 'FM',
    company: 'MatrixTribe',
  },
  {
    service: 'Paid Media',
    quote: 'They restructured our Google and Meta accounts, cut the waste and rebuilt the creative. Cost per lead dropped sharply in the first two months.',
    name: 'Ayesha Noor',
    role: 'Marketing Director',
    initials: 'AN',
    company: 'Kadawar Group',
  },
  {
    service: 'Web & App Development',
    quote: 'The new site loads fast, converts better and we can edit it ourselves. The booking flow they built removed a whole manual process.',
    name: 'Hamza Sheikh',
    role: 'Operations Director',
    initials: 'HS',
    company: 'Arclab Solutions',
  },
  {
    service: 'Content Creation',
    quote: 'Finally a content partner who understands our product. The posts and landing copy sound like us and actually explain what we sell.',
    name: 'Zoya Farooq',
    role: 'Brand Manager',
    initials: 'ZF',
    company: 'The Hexaa',
  },
  {
    service: 'YouTube Automation',
    quote: 'Scripting, editing, thumbnails and uploads are handled end to end. Our channel publishes on schedule now and grows every single week.',
    name: 'Imran Javed',
    role: 'Creator & Educator',
    initials: 'IJ',
    company: 'Renderland',
  },
  {
    service: 'Account & Subscription Services',
    quote: 'All our tool accounts and subscriptions are set up, verified and managed in one place. No more blocked logins before a campaign launch.',
    name: 'Rabia Aslam',
    role: 'Growth Manager',
    initials: 'RA',
    company: 'Sybrid',
  },
];

export const faqs = [
  { q: 'How quickly can we start?', a: 'Most engagements kick off within 3–5 working days of signing. Outreach and paid campaigns typically go live in the first two weeks.' },
  { q: 'Do you work with in-house teams?', a: 'Yes. We can run a channel end-to-end or plug into your existing marketing team, sharing tools, dashboards and a common channel.' },
  { q: 'Can I pick only one service?', a: 'Absolutely. Every service can be booked on its own; combining channels simply gives tighter cross-channel reporting.' },
  { q: 'How much does it cost?', a: 'Every engagement is scoped to your goals, channels and volume, so we quote per project rather than publishing fixed packages. Tell us what you need and you will have a written quote — usually within 48 hours.' },
  { q: 'Who owns the accounts, data and assets?', a: 'You do. Ad accounts, domains, lead lists, content and code are created in or transferred to your ownership.' },
  { q: 'How do you report results?', a: 'You get a live dashboard plus a weekly or monthly summary focused on pipeline, cost per lead, revenue and next actions.' },
];

// Case studies shown in the Insights section — one per headline service.
// `slug` points at the matching service page; `theme` picks the mock visual.
export const caseStudies = [
  {
    tag: 'Email Marketing',
    slug: 'email-marketing',
    theme: 'mail',
    title: 'Rebuilding a B2B inbox that kept landing in spam',
    summary:
      'A SaaS client was sending thousands of cold emails a month with almost nothing to show for it. We moved them to dedicated sending domains, warmed every inbox, rewrote the sequence around one clear offer and cut the send volume by half. Replies started arriving in the first fortnight, and the calendar filled from there.',
    points: ['Dedicated domains, SPF/DKIM/DMARC and full inbox warm-up', 'One offer per sequence instead of five competing asks', 'Reply handling and booking moved into a single shared inbox'],
  },
  {
    tag: 'LinkedIn Marketing',
    slug: 'linkedin-marketing',
    theme: 'seo',
    title: 'Turning a quiet founder profile into a steady lead source',
    summary:
      'A consulting firm had a well-connected founder and a dormant profile. We rebuilt the profile as a landing page, set a two-post-a-week rhythm on the problems their buyers actually search for, and paired it with measured connection requests and a human follow-up in the inbox — no automation spam.',
    points: ['Profile rewritten as a conversion page, not a CV', 'Two posts a week tied to real buyer objections', 'Connection requests and DMs handled by a person, on a schedule'],
  },
  {
    tag: 'Paid Media',
    slug: 'paid-media',
    theme: 'ads',
    title: 'Cutting wasted ad spend across Google and Meta',
    summary:
      'Budget was spread thin over dozens of near-identical campaigns with no conversion tracking worth trusting. We fixed the tracking first, consolidated the account structure, killed the search terms that never converted and rebuilt the creative around the offer that already worked. Cost per lead fell in the first two months.',
    points: ['Conversion tracking and offline imports fixed before any spend changes', 'Account consolidated into a structure the algorithm can learn from', 'Creative rebuilt around the one proven offer, then tested weekly'],
  },
];

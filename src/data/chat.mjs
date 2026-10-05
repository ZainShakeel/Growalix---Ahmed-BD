// ─────────────────────────────────────────────────────────────
//  CHAT ASSISTANT KNOWLEDGE BASE
//
//  The widget matches a visitor's question against the `match`
//  keywords below and replies with `answer`.
//
//  Scoring: every matched keyword adds its length, then the total is
//  multiplied by `weight` (default 1). Broad entries carry a weight
//  below 1 so a question like "Do you do LinkedIn?" answers about
//  LinkedIn rather than matching the generic "do you do".
//
//  To teach it something new, add an entry. Keep `match` lowercase.
// ─────────────────────────────────────────────────────────────

// Replies shown when nothing matches, cycled so it never repeats itself.
export const fallbacks = [
  'I can help with our services, how we work, timelines, reporting and getting started. Could you put that another way — or tell me which channel you’re thinking about?',
  'I don’t have a good answer for that one. Ask me about a specific service (email, LinkedIn, paid media, SEO, web, content), our process, or what working together looks like.',
  'That’s one for the team. Share your email below and someone will come back to you within a business day — or ask me something about our services meanwhile.',
];

export const greeting =
  'Hi! I’m the Growalix assistant. Ask me about any of our 12 services, how we work, or what a project looks like.';

// Shown as tappable chips under the greeting.
export const suggestions = ['What services do you offer?', 'How much does it cost?', 'How soon can we start?', 'How do you report results?'];

export const knowledge = [
  {
    match: ['service', 'services', 'offer', 'do you do', 'what do you', 'channels', 'capabilities'],
    weight: 0.5, // broad: a named service in the same sentence should win
    answer:
      'We run 12 growth services: Email Marketing, SMS & WhatsApp, LinkedIn Marketing, Social Media Marketing, Data Extraction, Lead Generation, SEO / GEO / AEO, Paid Media, Web & App Development, Content Creation, YouTube Automation, and Account & Subscription Services. Which one are you interested in?',
  },
  {
    match: ['price', 'pricing', 'cost', 'budget', 'how much', 'rate', 'charge', 'fee', 'quote', 'expensive'],
    answer:
      'We scope every engagement to your goals, channels and volume rather than selling fixed packages, so the price depends on what you need. Tell us the channel and rough monthly budget and you’ll have a written quote — usually within 48 hours.',
  },
  {
    match: ['start', 'begin', 'kick off', 'how soon', 'how fast', 'when can', 'timeline', 'how long', 'onboard'],
    answer:
      'Most engagements kick off within 3–5 working days of signing. Outreach and paid campaigns are usually live in the first two weeks; SEO and content compound over a longer run.',
  },
  {
    match: ['report', 'reporting', 'dashboard', 'results', 'metrics', 'kpi', 'track', 'measure'],
    answer:
      'You get a live dashboard plus a weekly or monthly summary. We report on pipeline, cost per lead, revenue and the next actions — not impressions and vanity metrics.',
  },
  {
    match: ['own', 'ownership', 'accounts', 'data', 'assets', 'who owns'],
    answer:
      'You do — 100%. Ad accounts, domains, lead lists, content and code are created in your name or transferred to you. Nothing is held hostage if we part ways.',
  },
  {
    match: ['process', 'how do you work', 'approach', 'method', 'steps', 'workflow'],
    answer:
      'Six steps: Discovery (goals, audience, honest audit) → Strategy (channel mix, KPIs, 90-day roadmap) → Setup (tracking, tools, creative) → Launch (daily monitoring) → Optimise (tests and iterations) → Scale (double down on what compounds).',
  },
  {
    match: ['email', 'cold email', 'outreach', 'inbox', 'newsletter', 'spam', 'deliverability'],
    weight: 1.6, // named service beats broader topic entries
    answer:
      'Email Marketing covers cold outreach, newsletters and automated flows — dedicated domains, inbox warm-up, SPF/DKIM/DMARC, sequence copy and reply handling. We rebuilt one SaaS client’s whole setup after their sends kept landing in spam; see the Email Marketing case study.',
  },
  {
    match: ['linkedin'],
    weight: 1.6, // named service beats broader topic entries
    answer:
      'LinkedIn Marketing covers profile optimisation, founder content and measured outreach — handled by a person, not automation spam. We turned a consulting firm’s dormant founder profile into a steady lead source; it’s one of our case studies.',
  },
  {
    match: ['paid', 'ads', 'advertising', 'google ads', 'meta', 'facebook ads', 'tiktok', 'ppc', 'roas', 'adwords'],
    weight: 1.6, // named service beats broader topic entries
    answer:
      'Paid Media covers Google, Meta, TikTok, LinkedIn and Amazon — tracking fixed first, then account structure, then creative. For one client we consolidated dozens of near-identical campaigns and cost per lead fell within two months.',
  },
  {
    match: ['seo', 'geo', 'aeo', 'rank', 'google', 'organic', 'search', 'chatgpt', 'perplexity', 'ai overview'],
    weight: 1.6, // named service beats broader topic entries
    answer:
      'SEO / GEO / AEO gets you ranking on Google and cited by ChatGPT, Perplexity and AI Overviews — technical fixes, content built around real buyer questions, and the structure AI answers pull from.',
  },
  {
    match: ['web', 'website', 'app', 'development', 'ecommerce', 'shopify', 'mobile app', 'redesign'],
    weight: 1.6, // named service beats broader topic entries
    answer:
      'Web & App Development covers marketing sites, e-commerce stores, web apps and mobile apps — designed, built, launched and maintained. Fast, editable by your team, and built to convert.',
  },
  {
    match: ['content', 'copywriting', 'copy', 'design', 'video', 'branding', 'blog'],
    weight: 1.6, // named service beats broader topic entries
    answer:
      'Content Creation covers copy, design, video and brand assets, produced consistently and tailored per channel — written by people who take the time to understand what you actually sell.',
  },
  {
    match: ['youtube', 'channel', 'thumbnail'],
    weight: 1.6, // named service beats broader topic entries
    answer:
      'YouTube Automation is done-for-you channel management: research, scripts, voice, editing, thumbnails, SEO and uploads — so the channel publishes on schedule without eating your team’s week.',
  },
  {
    match: ['sms', 'whatsapp', 'text message', 'broadcast'],
    weight: 1.6, // named service beats broader topic entries
    answer:
      'SMS & WhatsApp Marketing covers compliant campaigns, flows and chatbots that get read within minutes — broadcasts, cart recovery and support replies from one inbox.',
  },
  {
    match: ['lead', 'leads', 'lead gen', 'appointment', 'meetings', 'prospect', 'pipeline'],
    weight: 1.6, // named service beats broader topic entries
    answer:
      'Lead Generation covers ICP research, multi-channel outreach and appointment setting — qualified enquiries landing in your CRM with context attached, not raw lists.',
  },
  {
    match: ['data', 'scraping', 'extraction', 'list', 'database', 'crm'],
    weight: 1.6, // named service beats broader topic entries
    answer:
      'Data Extraction delivers clean, verified, CRM-ready data pulled from the platforms and websites that matter to you — so your reps stop wasting mornings on bad records.',
  },
  {
    match: ['social', 'instagram', 'facebook', 'posting', 'community'],
    weight: 1.6, // named service beats broader topic entries
    answer:
      'Social Media Marketing covers daily posting, creative design and community management across every major platform — consistent presence and engagement from your actual target audience.',
  },
  {
    match: ['account', 'subscription', 'tools', 'warm-up', 'software'],
    weight: 1.6, // named service beats broader topic entries
    answer:
      'Account & Subscription Services sources and manages premium tools, warm-up services and growth packages for you — so logins are never the thing blocking a campaign launch.',
  },
  {
    match: ['contact', 'email address', 'phone', 'call', 'reach', 'talk to', 'speak', 'human', 'number'],
    answer:
      'You can reach us at info@growalix.com or +1 (559) 554-0666 — WhatsApp works on that number too. Or leave your email here and we’ll come to you.',
  },
  {
    match: ['one service', 'only one', 'single', 'just one', 'pick one', 'bundle'],
    answer:
      'Yes — every service can be booked on its own. Combining channels just gives tighter cross-channel reporting; there’s no requirement to take more than you need.',
  },
  {
    match: ['in-house', 'team', 'existing', 'our marketing', 'work with'],
    answer:
      'Both work. We can run a channel end to end, or plug into your existing marketing team sharing tools, dashboards and a common channel.',
  },
  {
    match: ['audit', 'free', 'consultation', 'review'],
    answer:
      'We offer a free 30-minute growth audit — we review your funnel and show you the three quickest wins, no strings attached. Leave your email and we’ll set it up.',
  },
  {
    match: ['who are you', 'about', 'company', 'agency', 'growalix', 'experience'],
    weight: 0.5, // "about" appears in plenty of service questions too
    answer:
      'Growalix is a full-service digital growth agency. We started with one channel and one rule — never run a campaign we wouldn’t pay for ourselves — and that now covers 12 services with specialists running each one.',
  },
  {
    match: ['contract', 'commitment', 'cancel', 'lock', 'notice', 'minimum term', 'tied in'],
    answer:
      'No long lock-ins. Scope and terms are agreed up front, and most clients stay because the work compounds — not because a contract traps them.',
  },
  {
    match: ['example', 'examples', 'case study', 'case studies', 'portfolio', 'past work', 'previous work', 'samples', 'proof', 'results you got'],
    answer:
      'Yes — the Case Studies page walks through three engagements in detail: rebuilding a B2B email engine that kept landing in spam, turning a quiet founder LinkedIn profile into a lead source, and cutting wasted ad spend across Google and Meta. Each one covers what was broken and exactly what we changed.',
  },
  {
    match: ['different', 'why you', 'why choose', 'other agencies', 'competitors', 'better than', 'stand out', 'unique'],
    answer:
      'Three things clients tell us. One, specialists per channel rather than one generalist stretched across twelve. Two, you own every account, domain and asset outright. Three, we report pipeline and revenue instead of impressions — if a channel isn’t paying for itself we say so rather than quietly keep billing.',
  },
  {
    match: ['guarantee', 'guaranteed', 'promise', 'results guaranteed', 'roi guarantee'],
    answer:
      'We don’t promise a specific number — anyone who does is guessing. What we commit to is an honest audit before you spend anything, clear reporting on what is and isn’t working, and the discipline to cut what doesn’t pay rather than keep it running.',
  },
  {
    match: ['country', 'countries', 'location', 'based', 'where are you', 'timezone', 'time zone', 'remote', 'worldwide', 'international'],
    answer:
      'We’re remote-first and work with clients worldwide. Communication runs through a shared channel plus scheduled calls, so timezones have never been the blocker — we flex to yours.',
  },
  {
    match: ['pay', 'payment', 'invoice', 'billing', 'bank', 'wire', 'paypal', 'how do we pay'],
    answer:
      'Engagements are billed monthly in advance, with the scope and amount agreed in writing before anything starts. Ad spend and third-party tool subscriptions sit on your own accounts, so you’re never paying us a markup on them.',
  },
  {
    match: ['nda', 'confidential', 'confidentiality', 'contract sign', 'agreement', 'legal'],
    answer:
      'Happy to sign an NDA before we see anything sensitive — just send yours over, or we can provide one. A written scope of work covers every engagement either way.',
  },
  {
    match: ['not happy', 'unhappy', 'refund', 'money back', 'go wrong', 'dissatisfied', 'complaint', 'if it doesnt work'],
    answer:
      'Tell us early and we fix it — that’s what the weekly reporting is for, so problems surface in week two rather than month three. There are no long lock-ins, so if it still isn’t working you’re free to stop and you keep every account and asset.',
  },
  {
    match: ['communicate', 'communication', 'how often', 'meetings', 'calls', 'updates', 'talk', 'contact us', 'slack', 'check in'],
    answer:
      'You get a shared Slack or WhatsApp channel with real people on it, plus a weekly or monthly call depending on the engagement. No ticket queues, and no waiting days for an answer.',
  },
  {
    match: ['team', 'how big', 'who works', 'staff', 'people', 'specialists', 'freelancers', 'in house'],
    answer:
      'A lean senior team — each channel is run by someone who works in it daily rather than a generalist juggling all twelve. You deal with the people doing the work, not an account manager relaying messages.',
  },
  {
    match: ['small business', 'startup', 'small company', 'solo', 'budget is small', 'just starting'],
    answer:
      'Yes. Plenty of our clients start with a single channel and a modest budget, then add more once it’s paying for itself. We’ll tell you honestly if a budget is too small to work rather than take it anyway.',
  },
  {
    match: ['trial', 'pilot', 'test first', 'try before', 'small project', 'start small', 'start with a trial'],
    weight: 1.4, // "can we start with a trial" also hits the start-timing entry
    answer:
      'A single-channel engagement is the usual way in — it’s small enough to prove the approach and gives you real numbers before committing further. We also quote one-off projects.',
  },
  {
    match: ['access', 'logins', 'credentials', 'permissions', 'admin'],
    answer:
      'We work inside your accounts with the access level a given channel needs, never by creating assets we hold. Everything stays in your ownership from day one — that’s the point.',
  },
  {
    match: ['fix', 'existing', 'already running', 'take over', 'inherit', 'audit our', 'current campaigns'],
    answer:
      'Often the fastest win. We start with an audit of what’s already running — most accounts have budget leaking somewhere obvious — and fix that before proposing anything new.',
  },
  {
    match: ['industry', 'industries', 'niche', 'b2b', 'b2c', 'saas', 'ecommerce clients', 'sector', 'vertical', 'what kind of clients', 'who do you work with'],
    answer:
      'We work across B2B SaaS, professional services, e-commerce and local service businesses. The channel mix changes a lot between them, which is exactly what the discovery call is for.',
  },
  {
    match: ['use ai', 'using ai', 'ai tools', 'artificial intelligence', 'automation', 'automated', 'chatgpt tools', 'automate'],
    answer:
      'We use automation where it saves time — data work, reporting, parts of content production — and keep humans on strategy, copy and anything a client will read. The AI side also shows up in our SEO work: getting you cited by ChatGPT, Perplexity and AI Overviews.',
  },
  {
    match: ['hi', 'hello', 'hey', 'salam', 'assalam', 'good morning', 'good evening'],
    answer: 'Hello! What would you like to know — a particular service, how we work, or what getting started looks like?',
  },
  {
    match: ['thanks', 'thank you', 'thankyou', 'shukriya', 'great', 'perfect', 'ok thanks'],
    answer: 'Happy to help. Anything else you’d like to know?',
  },
];

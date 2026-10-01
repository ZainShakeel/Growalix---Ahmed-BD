/* Growalix — site interactions (no dependencies) */
(() => {
  const root = document.documentElement;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];

  // Theme toggle (initial theme is applied inline in <head> to avoid a flash)
  $$('[data-theme-toggle]').forEach((btn) =>
    btn.addEventListener('click', () => {
      const dark = root.classList.toggle('dark');
      try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch (e) {}
    })
  );

  // Header state on scroll
  const header = $('.site-header');
  const onScroll = () => header && header.classList.toggle('scrolled', window.scrollY > 12);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Mobile menu
  const menuBtn = $('[data-menu-toggle]');
  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      const open = document.body.classList.toggle('menu-open');
      menuBtn.setAttribute('aria-expanded', open);
    });
    $$('.mobile-nav a').forEach((a) => a.addEventListener('click', () => document.body.classList.remove('menu-open')));
  }

  // Count-up numbers
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const countUp = (el) => {
    if (reduceMotion) return; // keep the final value that is already rendered
    const target = parseFloat(el.dataset.count);
    const decimals = parseInt(el.dataset.decimals || '0', 10);
    const suffix = el.dataset.suffix || '';
    const start = performance.now();
    const dur = 1600;
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = (target * eased).toFixed(decimals) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  // Reveal on scroll + deferred animations
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target;
        el.classList.add('is-in');
        if (el.dataset.count) countUp(el);
        if (el.dataset.w) el.style.width = el.dataset.w + '%';
        io.unobserve(el);
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );
  $$('.reveal, [data-count], [data-w]').forEach((el) => io.observe(el));

  // Testimonial slider
  $$('[data-slider]').forEach((slider) => {
    const slides = $$('.slide', slider);
    const dots = $$('.dots button', slider);
    let i = 0;
    let timer;
    const go = (n) => {
      i = (n + slides.length) % slides.length;
      slides.forEach((s, k) => {
        s.classList.toggle('on', k === i);
        s.setAttribute('aria-hidden', k !== i);
      });
      dots.forEach((d, k) => d.classList.toggle('on', k === i));
    };
    const auto = () => { clearInterval(timer); timer = setInterval(() => go(i + 1), 6500); };
    $$('[data-prev]', slider).forEach((b) => b.addEventListener('click', () => { go(i - 1); auto(); }));
    $$('[data-next]', slider).forEach((b) => b.addEventListener('click', () => { go(i + 1); auto(); }));
    dots.forEach((d, k) => d.addEventListener('click', () => { go(k); auto(); }));
    go(0);
    auto();
  });

  // Lead popup — shown once per visitor, 3s after load.
  $$('[data-popup]').forEach((pop) => {
    const KEY = 'gx-popup-seen';
    let seen = false;
    try { seen = localStorage.getItem(KEY) === '1'; } catch (e) {}
    const close = () => {
      pop.hidden = true;
      document.body.classList.remove('no-scroll');
      try { localStorage.setItem(KEY, '1'); } catch (e) {}
    };
    const open = () => {
      if (pop.hidden === false) return;
      pop.hidden = false;
      document.body.classList.add('no-scroll');
      const first = $('input', pop);
      if (first) first.focus();
    };
    $$('[data-popup-close]', pop).forEach((b) => b.addEventListener('click', close));
    pop.addEventListener('click', (ev) => { if (ev.target === pop) close(); });
    document.addEventListener('keydown', (ev) => { if (ev.key === 'Escape' && !pop.hidden) close(); });
    // Mark as seen on submit so a converting visitor never sees it again.
    const form = $('[data-contact-form]', pop);
    if (form) form.addEventListener('submit', () => { try { localStorage.setItem(KEY, '1'); } catch (e) {} });
    if (!seen) setTimeout(open, 3000);
  });

  // Contact form → opens the visitor's email client with a pre-filled message.
  // To use a form backend (Formspree, Netlify Forms…), set data-endpoint on the form.
  $$('[data-contact-form]').forEach((form) => {
    const msg = $('.form-msg', form);
    form.addEventListener('submit', async (ev) => {
      ev.preventDefault();
      const data = new FormData(form);
      const name = (data.get('name') || '').trim();
      const email = (data.get('email') || '').trim();
      if (!name || !/^\S+@\S+\.\S+$/.test(email)) {
        msg.textContent = 'Please add your name and a valid email address.';
        msg.classList.add('err');
        return;
      }
      msg.classList.remove('err');
      const services = data.getAll('services').join(', ') || '—';
      const endpoint = form.dataset.endpoint;
      if (endpoint) {
        // Formspree conventions: subject line + reply-to on the delivered email.
        data.set('_subject', (form.dataset.subject || 'New project enquiry') + ' — ' + name);
        data.set('_replyto', email);
        try {
          const res = await fetch(endpoint, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
          if (!res.ok) throw new Error();
          form.reset();
          msg.textContent = 'Thanks! We’ll get back to you within one business day.';
        } catch (e) {
          msg.textContent = 'Something went wrong — please email us directly.';
          msg.classList.add('err');
        }
        return;
      }
      const body = [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${data.get('company') || '—'}`,
        `Budget: ${data.get('budget') || '—'}`,
        `Services: ${services}`,
        '',
        data.get('message') || '',
      ].join('\n');
      const to = form.dataset.to;
      const subject = (form.dataset.subject || 'New project enquiry') + ' — ' + name;
      window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      msg.textContent = 'Opening your email app… if nothing happens, email us at ' + to;
    });
  });

  // Newsletter (front-end only)
  $$('[data-newsletter]').forEach((f) =>
    f.addEventListener('submit', (ev) => {
      ev.preventDefault();
      const input = $('input', f);
      if (!/^\S+@\S+\.\S+$/.test(input.value)) { input.focus(); return; }
      input.value = '';
      input.placeholder = 'Thanks — you’re subscribed!';
    })
  );

  $$('[data-year]').forEach((el) => (el.textContent = new Date().getFullYear()));

  // ---- Chat assistant -----------------------------------------------------
  // Answers from the knowledge base in src/data/chat.mjs (serialised into the
  // page). After ASK_AFTER questions it asks for an email, then sends the whole
  // transcript to brand.email through the same Formspree endpoint the forms use.
  (function chat() {
    const panel = $('[data-chat]');
    const dataEl = $('[data-chat-data]');
    if (!panel || !dataEl) return;

    let kb;
    try { kb = JSON.parse(dataEl.textContent); } catch (e) { return; }

    const ASK_AFTER = 5;
    const log = $('[data-chat-log]', panel);
    const chips = $('[data-chat-chips]', panel);
    const form = $('[data-chat-form]', panel);
    const input = $('[data-chat-input]', panel);
    const openBtn = $('[data-chat-open]');
    const transcript = [];
    let asked = 0;       // visitor questions answered so far
    let stage = 'chat';  // 'chat' → 'email' → 'done'
    let fbIdx = 0;

    const scroll = () => { log.scrollTop = log.scrollHeight; };

    function add(text, who) {
      const row = document.createElement('div');
      row.className = 'msg ' + who;
      row.textContent = text;
      log.appendChild(row);
      scroll();
      return row;
    }

    // Shows the typing dots, then replaces them with the reply.
    function reply(text, delay) {
      const dots = document.createElement('div');
      dots.className = 'msg bot typing';
      dots.innerHTML = '<i></i><i></i><i></i>';
      log.appendChild(dots);
      scroll();
      setTimeout(() => {
        dots.remove();
        add(text, 'bot');
        transcript.push('Assistant: ' + text);
      }, delay || 500 + Math.random() * 400);
    }

    // Score each entry by its matching keywords. `weight` lets a specific topic
    // outrank a broad one: "Do you do LinkedIn?" hits both the generic services
    // entry ("do you do") and the LinkedIn entry, and should answer about
    // LinkedIn. Entries default to weight 1; broad ones are marked down in
    // src/data/chat.mjs.
    function answerFor(q) {
      const text = ' ' + q.toLowerCase().replace(/[^\w\s/&]/g, ' ') + ' ';
      let best = null;
      let bestScore = 0;
      for (const entry of kb.knowledge) {
        let score = 0;
        for (const k of entry.match) {
          if (text.includes(' ' + k) || text.includes(k + ' ')) score += k.length;
        }
        score *= entry.weight == null ? 1 : entry.weight;
        if (score > bestScore) { bestScore = score; best = entry; }
      }
      if (best) return best.answer;
      const f = kb.fallbacks[fbIdx % kb.fallbacks.length];
      fbIdx++;
      return f;
    }

    function showChips(list) {
      chips.innerHTML = '';
      (list || []).forEach((s) => {
        const b = document.createElement('button');
        b.type = 'button';
        b.className = 'chip-btn';
        b.textContent = s;
        b.addEventListener('click', () => { input.value = s; form.requestSubmit(); });
        chips.appendChild(b);
      });
    }

    function askForEmail() {
      stage = 'email';
      input.type = 'email';
      input.placeholder = 'you@company.com';
      showChips([]);
      reply('Before we go further — what’s the best email to reach you on? I’ll have someone follow up with answers specific to your business.', 700);
    }

    // Deliver the lead. Falls back to a mailto draft when no endpoint is set.
    function sendLead(email) {
      const body = [
        'New chat lead from the website',
        '',
        'Email: ' + email,
        'Page: ' + location.href,
        'Questions asked: ' + asked,
        '',
        '--- Conversation ---',
        ...transcript,
      ].join('\n');

      if (kb.endpoint) {
        const fd = new FormData();
        fd.set('name', 'Website chat visitor');
        fd.set('email', email);
        fd.set('_replyto', email);
        fd.set('_subject', 'New chat lead — ' + email);
        fd.set('message', body);
        fetch(kb.endpoint, { method: 'POST', body: fd, headers: { Accept: 'application/json' } }).catch(() => {});
        return true;
      }
      // No backend configured — open the operator's own mail client instead.
      window.location.href =
        'mailto:' + kb.email + '?subject=' + encodeURIComponent('New chat lead — ' + email) + '&body=' + encodeURIComponent(body);
      return false;
    }

    form.addEventListener('submit', (ev) => {
      ev.preventDefault();
      const val = input.value.trim();
      if (!val) return;
      add(val, 'me');
      input.value = '';

      if (stage === 'email') {
        if (!/^\S+@\S+\.\S+$/.test(val)) {
          reply('That doesn’t look like a valid email — mind checking it?');
          return;
        }
        transcript.push('Visitor email: ' + val);
        const sent = sendLead(val);
        stage = 'done';
        input.type = 'text';
        input.placeholder = 'Ask another question…';
        reply(
          sent
            ? 'Got it — thanks! Someone from the team will be in touch within one business day. Ask me anything else meanwhile.'
            : 'Thanks! I’ve opened an email for you to send. Ask me anything else meanwhile.',
          600
        );
        return;
      }

      transcript.push('Visitor: ' + val);
      asked++;
      reply(answerFor(val));
      showChips([]);
      if (stage === 'chat' && asked >= ASK_AFTER) setTimeout(askForEmail, 1400);
    });

    function open() {
      panel.hidden = false;
      openBtn.classList.add('on');
      openBtn.setAttribute('aria-expanded', 'true');
      if (!log.childElementCount) {
        add(kb.greeting, 'bot');
        transcript.push('Assistant: ' + kb.greeting);
        showChips(kb.suggestions);
      }
      setTimeout(() => input.focus(), 260);
    }
    function close() {
      panel.hidden = true;
      openBtn.classList.remove('on');
      openBtn.setAttribute('aria-expanded', 'false');
    }

    openBtn.addEventListener('click', () => (panel.hidden ? open() : close()));
    $$('[data-chat-close]', panel).forEach((b) => b.addEventListener('click', close));
    document.addEventListener('keydown', (ev) => { if (ev.key === 'Escape' && !panel.hidden) close(); });
  })();
})();

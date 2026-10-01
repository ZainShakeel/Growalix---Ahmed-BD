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
})();

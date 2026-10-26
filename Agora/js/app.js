/* Agora – Router und Kopfzeile */
window.AG = window.AG || {};

(function () {
  const main = document.getElementById('main');

  function parse() {
    let h = location.hash.replace(/^#/, '') || '/';
    let anchor = null;
    const ai = h.indexOf('#');
    if (ai >= 0) { anchor = h.slice(ai + 1); h = h.slice(0, ai); }
    const qi = h.indexOf('?');
    const path = (qi >= 0 ? h.slice(0, qi) : h).replace(/\/+$/, '') || '/';
    const query = qi >= 0 ? h.slice(qi + 1) : '';
    const parts = path.split('/').filter(Boolean);
    return { parts, query, anchor };
  }

  function route() {
    if (AG.views._cleanup) { AG.views._cleanup(); AG.views._cleanup = null; }
    AG.ui.closePopover();
    document.getElementById('nav').classList.remove('open');
    const { parts, query, anchor } = parse();
    const q = new URLSearchParams(query);
    const [p0, p1] = parts;
    let active = '';
    let title = 'Agora – Der europäische Politiktest';

    if (!p0) AG.views.home(main);
    else if (p0 === 'test') { AG.views.quiz(main, { mode: p1, edit: q.get('edit') === '1' }); active = 'test'; title = 'Test · Agora'; }
    else if (p0 === 'ergebnis') { AG.views.results(main, { query }); title = 'Dein Ergebnis · Agora'; }
    else if (p0 === 'entdecken') { AG.views.explore(main, { tab: p1, q: q.get('q') }); active = 'entdecken'; title = 'Entdecken · Agora'; }
    else if (p0 === 'profil') {
      AG.views.profile(main, { id: decodeURIComponent(p1 || '') });
      const e = AG.ui.BY_ID[decodeURIComponent(p1 || '')];
      active = 'entdecken'; title = (e ? e.name + ' · ' : '') + 'Agora';
    }
    else if (p0 === 'vergleich') { AG.views.compare(main, { query }); active = 'vergleich'; title = 'Vergleichen · Agora'; }
    else if (p0 === 'methodik') { AG.views.method(main); active = 'methodik'; title = 'Methodik · Agora'; }
    else AG.views.home(main);

    document.title = title;
    document.querySelectorAll('#nav a').forEach(a => a.classList.toggle('active', a.dataset.nav === active));
    if (anchor) setTimeout(() => { const t = document.getElementById(anchor); if (t) t.scrollIntoView({ behavior: 'smooth' }); }, 120);
    else window.scrollTo(0, 0);
  }

  /* Kopfzeile */
  AG.ui.renderCountryBtn();
  document.getElementById('countryBtn').addEventListener('click', ev => { ev.stopPropagation(); AG.ui.openCountryMenu(ev.currentTarget); });
  document.getElementById('menuBtn').addEventListener('click', () => document.getElementById('nav').classList.toggle('open'));
  const startBtn = document.getElementById('startBtn');
  startBtn.addEventListener('click', ev => {
    ev.preventDefault();
    if (location.hash === '' || location.hash === '#/' || location.hash === '#') {
      const m = document.getElementById('modes');
      if (m) m.scrollIntoView({ behavior: 'smooth' });
    } else location.hash = '#/#modes';
  });

  /* Logo im Kopf */
  const mark = document.getElementById('brandMark');
  mark.innerHTML = AG.AXES.map((a, i) => {
    const ang = -Math.PI / 2 + (i / 12) * Math.PI * 2;
    return `<circle cx="${15 + Math.cos(ang) * 11}" cy="${15 + Math.sin(ang) * 11}" r="2.1" fill="${a.color}"/>`;
  }).join('') + '<circle cx="15" cy="15" r="4" fill="none" stroke="#e7c46b" stroke-width="1.4"/>';

  /* Land beim ersten Besuch aus Browsersprache erraten */
  if (!AG.ui.store.get('country', null)) {
    const lang = (navigator.language || 'de-DE').split('-');
    const guess = (lang[1] || '').toUpperCase();
    const map = { de: 'DE', fr: 'FR', it: 'IT', es: 'ES', pl: 'PL', nl: 'NL', pt: 'PT', sv: 'SE', da: 'DK', fi: 'FI', cs: 'CZ', hu: 'HU', ro: 'RO', el: 'GR', en: 'GB' };
    const cc = AG.COUNTRIES.some(c => c.cc === guess) ? guess : map[lang[0]] || 'DE';
    AG.ui.store.set('country', cc);
    AG.ui.renderCountryBtn();
  }

  window.addEventListener('hashchange', route);
  route();
})();

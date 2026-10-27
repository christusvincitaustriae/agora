/* Agora – Datenbank entdecken, Profilseiten und Suchfeld mit Vorschlägen */
window.AG = window.AG || {};
AG.views = AG.views || {};

(function () {
  const norm = s => String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  const lastUser = () => {
    const last = AG.ui.store.get('last', null);
    return last ? AG.engine.decode(last.code) : null;
  };
  const searchText = e => norm([e.name, e.short, e.role, e.ideo, e.gov, e.period, e.cc && AG.ui.countryName(e.cc), AG.ui.subtitle(e)].join(' '));

  /* ---------- Suchfeld mit Vorschlägen ---------- */
  AG.views.attachSuggest = function (box, onPick, opts = {}) {
    if (!box) return;
    const input = box.querySelector('input');
    let list = null, items = [], act = -1;
    const close = () => { if (list) list.remove(); list = null; act = -1; };
    const draw = () => {
      const q = norm(input.value.trim());
      if (q.length < 2) { close(); return; }
      const pool = opts.filter ? AG.ALL.filter(opts.filter) : AG.ALL;
      items = pool.map(e => {
        const n = norm(e.name), s = norm(e.short);
        const score = n.startsWith(q) || s === q ? 0 : n.includes(q) ? 1 : searchText(e).includes(q) ? 2 : 9;
        return { e, score };
      }).filter(x => x.score < 9).sort((a, b) => a.score - b.score || a.e.name.localeCompare(b.e.name, 'de')).slice(0, 9).map(x => x.e);
      if (!list) { list = document.createElement('div'); list.className = 'suggest-list'; box.appendChild(list); }
      list.innerHTML = items.length ? items.map((e, i) => `<button data-i="${i}" class="${i === act ? 'act' : ''}">${AG.ui.avatar(e, 32)}<span><b>${AG.ui.esc(e.name)}</b><small>${AG.ui.esc(AG.ui.TYPE_LABEL[e.type])} · ${AG.ui.esc(AG.ui.subtitle(e))}</small></span></button>`).join('')
        : '<div class="muted" style="padding:12px;font-size:14px">Nichts gefunden.</div>';
    };
    input.addEventListener('input', () => { act = -1; draw(); });
    input.addEventListener('keydown', ev => {
      if (!list) return;
      if (ev.key === 'ArrowDown') { act = Math.min(items.length - 1, act + 1); draw(); ev.preventDefault(); }
      else if (ev.key === 'ArrowUp') { act = Math.max(0, act - 1); draw(); ev.preventDefault(); }
      else if (ev.key === 'Enter' && items[Math.max(0, act)]) { onPick(items[Math.max(0, act)]); input.value = ''; close(); }
      else if (ev.key === 'Escape') close();
    });
    box.addEventListener('mousedown', ev => {
      const b = ev.target.closest('[data-i]');
      if (!b) return;
      ev.preventDefault();
      onPick(items[+b.dataset.i]);
      input.value = '';
      close();
    });
    input.addEventListener('blur', () => setTimeout(close, 150));
  };

  /* ---------- Entdecken ---------- */
  const TABS = {
    ideologien: { label: 'Ideologien', list: () => AG.IDEOLOGIES, icon: 'sparkles' },
    personen: { label: 'Personen', list: () => AG.PERSONS, icon: 'users' },
    parteien: { label: 'Parteien', list: () => AG.PARTIES, icon: 'flag' },
    staaten: { label: 'Staaten', list: () => AG.STATES, icon: 'map' },
    geschichte: { label: 'Historische Staaten', list: () => AG.HIST_STATES, icon: 'hourglass' }
  };

  AG.views.explore = function (main, params) {
    const { esc } = AG.ui;
    const tab = TABS[params.tab] ? params.tab : 'ideologien';
    const user = lastUser();
    const st = { q: params.q || '', fam: null, cat: null, cc: '', ep: null, hist: false, sort: user ? 'match' : 'name', limit: 60 };

    const famChips = () => Object.entries(AG.FAMILIES).filter(([k]) => AG.IDEOLOGIES.some(i => i.fam === k))
      .map(([k, f]) => `<button class="chip" data-fam="${k}" style="--c:${f.color}"><span class="dot" style="background:${f.color}"></span>${esc(f.name)}</button>`).join('');
    const catChips = () => ['Aktuell', 'Historisch', 'Denker', 'Monarch', 'Aktivismus', 'Religion']
      .map(c => `<button class="chip" data-cat="${c}">${c}</button>`).join('');
    const epChips = () => ['EPP', 'SD', 'RE', 'GREEN', 'ECR', 'PFE', 'ESN', 'LEFT', 'NI', 'NONEU']
      .map(k => `<button class="chip" data-ep="${k}">${esc(AG.EP_GROUPS[k].split(' – ')[0])}</button>`).join('');
    const ccOptions = (list) => {
      const ccs = [...new Set(list.map(e => e.cc).filter(Boolean))];
      return `<option value="">Alle Länder</option>` + ccs.map(cc => ({ cc, n: AG.ui.countryName(cc) })).sort((a, b) => a.n.localeCompare(b.n, 'de')).map(c => `<option value="${c.cc}">${esc(c.n)}</option>`).join('');
    };
    const intros = {
      ideologien: 'Von Marxismus-Leninismus bis Anarchokapitalismus: jede Strömung mit Beschreibung und vollständigem Profil auf allen 12 Achsen.',
      personen: 'Aktive Politikerinnen und Politiker, historische Staatsleute, Monarchen und die großen Denker Europas.',
      parteien: 'Parteien aus über 40 europäischen Ländern – mit Fraktion im Europaparlament – sowie historische Parteien.',
      staaten: 'Die heutigen Staaten Europas, eingeordnet nach Regierungspolitik, Verfassung und Gesellschaft.',
      geschichte: 'Europas Staaten durch die Jahrhunderte – von der Athenischen Demokratie bis zum Ostblock.'
    };

    main.innerHTML = `
    <div class="view"><div class="wrap">
      <div class="page-head"><span class="eyebrow">Datenbank</span><h1>Entdecken</h1><p>${esc(intros[tab])}</p></div>
      <div class="tabs" style="margin-bottom:22px">${Object.entries(TABS).map(([k, t]) => `<button class="${k === tab ? 'on' : ''}" data-tab="${k}">${AG.icon(t.icon)} ${t.label} <span class="muted" style="font-weight:500">${t.list().length}</span></button>`).join('')}</div>
      <div class="toolbar">
        <div class="search">${AG.icon('search')}<input id="q" placeholder="In ${esc(TABS[tab].label)} suchen …" value="${esc(st.q)}"></div>
        ${tab === 'personen' || tab === 'parteien' ? `<select id="cc">${ccOptions(TABS[tab].list())}</select>` : ''}
        <select id="sort">${user ? '<option value="match">Übereinstimmung mit dir</option>' : ''}<option value="name">Name A–Z</option><option value="lr">Wirtschaft: Gemeinwohl → Markt</option><option value="auth">Staatsmacht: Freiheit → Ordnung</option><option value="eu">Europa: Integration → Souveränität</option></select>
      </div>
      <div class="filters">${tab === 'ideologien' ? famChips() : tab === 'personen' ? catChips() : tab === 'parteien' ? epChips() + '<button class="chip" data-hist="1">Historische Parteien</button>' : ''}</div>
      ${!user ? `<div class="resume" style="margin:0 0 22px">${AG.icon('info', 'gold')}<p>Mach den Test, um bei jedem Eintrag deine persönliche Übereinstimmung zu sehen.</p><a class="btn btn-sm btn-gold" href="#/#modes">Zum Test</a></div>` : ''}
      <div class="ent-grid" id="grid"></div>
      <div class="more" id="more"></div>
    </div></div>`;

    const grid = main.querySelector('#grid');
    const pctOf = user ? (() => { const m = {}; AG.engine.rank(TABS[tab].list(), user).forEach(x => (m[x.e.id] = x.pct)); return m; })() : {};

    function filtered() {
      const q = norm(st.q);
      let list = TABS[tab].list().filter(e => {
        if (q && !searchText(e).includes(q)) return false;
        if (st.fam && e.fam !== st.fam) return false;
        if (st.cc && e.cc !== st.cc) return false;
        if (st.cat) {
          if (st.cat === 'Aktuell' && e.era !== 'aktuell') return false;
          if (st.cat === 'Historisch' && !(e.era === 'historisch' && e.cat === 'Politik')) return false;
          if (!['Aktuell', 'Historisch'].includes(st.cat) && e.cat !== st.cat) return false;
        }
        if (tab === 'parteien') {
          if (st.ep && e.ep !== st.ep) return false;
          if (!!e.hist !== st.hist) return false;
        }
        return true;
      });
      const by = { lr: 0, auth: 1, eu: 2 }[st.sort];
      if (st.sort === 'match') list.sort((a, b) => pctOf[b.id] - pctOf[a.id]);
      else if (by !== undefined) list.sort((a, b) => (a.v[by] || 0) - (b.v[by] || 0));
      else list.sort((a, b) => a.name.localeCompare(b.name, 'de'));
      return list;
    }
    function draw() {
      const list = filtered();
      grid.innerHTML = list.slice(0, st.limit).map((e, i) => `<a class="ent" href="#/profil/${encodeURIComponent(e.id)}" style="animation-delay:${Math.min(i, 20) * 0.02}s">
        ${AG.ui.avatar(e, 46)}<span class="nm"><b>${esc(e.name)}</b><small>${esc(AG.ui.subtitle(e))}</small>${AG.ui.strip(e.v)}</span>
        ${user ? `<span class="p">${pctOf[e.id]}<small>%</small></span>` : ''}</a>`).join('') || `<div class="empty">Keine Einträge gefunden.</div>`;
      main.querySelector('#more').innerHTML = list.length > st.limit ? `<button class="btn btn-ghost" id="moreBtn">Mehr anzeigen (${list.length - st.limit} weitere)</button>` : '';
      const mb = main.querySelector('#moreBtn');
      if (mb) mb.addEventListener('click', () => { st.limit += 60; draw(); });
    }
    draw();

    main.querySelector('.tabs').addEventListener('click', ev => {
      const b = ev.target.closest('[data-tab]');
      if (b) location.hash = '#/entdecken/' + b.dataset.tab;
    });
    main.querySelector('#q').addEventListener('input', ev => { st.q = ev.target.value; st.limit = 60; draw(); });
    main.querySelector('#sort').addEventListener('change', ev => { st.sort = ev.target.value; draw(); });
    const ccSel = main.querySelector('#cc');
    if (ccSel) ccSel.addEventListener('change', ev => { st.cc = ev.target.value; st.limit = 60; draw(); });
    main.querySelector('.filters').addEventListener('click', ev => {
      const b = ev.target.closest('button');
      if (!b) return;
      if (b.dataset.fam) st.fam = st.fam === b.dataset.fam ? null : b.dataset.fam;
      if (b.dataset.cat) st.cat = st.cat === b.dataset.cat ? null : b.dataset.cat;
      if (b.dataset.ep) st.ep = st.ep === b.dataset.ep ? null : b.dataset.ep;
      if (b.dataset.hist) st.hist = !st.hist;
      main.querySelectorAll('.filters button').forEach(x => x.classList.toggle('on',
        (x.dataset.fam && x.dataset.fam === st.fam) || (x.dataset.cat && x.dataset.cat === st.cat) || (x.dataset.ep && x.dataset.ep === st.ep) || (x.dataset.hist && st.hist)));
      st.limit = 60;
      draw();
    });
  };

  /* ---------- Profilseite ---------- */
  AG.views.profile = function (main, params) {
    const { esc, avatar, subtitle } = AG.ui;
    const e = AG.ui.BY_ID[params.id];
    if (!e) { main.innerHTML = `<div class="view wrap empty"><h2>Profil nicht gefunden</h2><a class="btn btn-gold" style="margin-top:20px" href="#/entdecken">Zur Datenbank</a></div>`; return; }
    const user = lastUser();
    const last = AG.ui.store.get('last', null);
    const famKey = AG.ui.family(e);
    const fam = AG.FAMILIES[famKey] || { name: 'Europa', color: '#5a7bea' };
    const color = AG.ui.famColor(e);
    const mine = user ? AG.engine.rank([e], user)[0].pct : null;
    const near = (list, n = 5) => list.filter(x => x.id !== e.id)
      .map(x => ({ e: x, d: AG.engine.distance(e.v, x.v, null) })).sort((a, b) => a.d - b.d)
      .slice(0, n).map(x => ({ e: x.e, pct: AG.engine.matchPct(x.d) }));
    const farL = (list, n = 3) => list.filter(x => x.id !== e.id)
      .map(x => ({ e: x, d: AG.engine.distance(e.v, x.v, null) })).sort((a, b) => b.d - a.d)
      .slice(0, n).map(x => ({ e: x.e, pct: AG.engine.matchPct(x.d) }));
    const li = (x, i) => `<a class="rank-item" href="#/profil/${encodeURIComponent(x.e.id)}"><span class="n">${i + 1}</span>${avatar(x.e, 36)}
      <span class="nm"><b>${esc(x.e.name)}</b><small>${esc(subtitle(x.e))}</small></span><span class="p">${x.pct}%</span></a>`;
    const wl = AG.ui.wikiLink(e);

    const extra = [];
    if (e.type === 'person') extra.push(e.years, e.cat);
    if (e.type === 'party') { if (e.ep && AG.EP_GROUPS[e.ep] && !e.group) extra.push(AG.EP_GROUPS[e.ep]); if (e.hist) extra.push('Historisch'); }
    if (e.type === 'state') extra.push(e.eu ? 'EU-Mitglied' : 'Kein EU-Mitglied');
    if (e.type === 'histstate') extra.push(e.period);

    const desc = e.desc || e.ideo || '';
    const rows = AG.AXES.map((a, i) => {
      const v = e.v[i];
      if (v === null) return `<div class="axis-row" style="--c:${a.color}"><div class="top"><b>${esc(a.name)}</b><span class="bal">nicht bestimmend</span></div><div class="bar"><span class="mid"></span></div></div>`;
      const sp = AG.engine.poleSplit(v);
      const lean = Math.abs(v) <= 15 ? '<span class="bal">Ausgeglichen</span>' : `<span>${v < 0 ? sp.left : sp.right} % ${esc(v < 0 ? a.left : a.right)}</span>`;
      return `<div class="axis-row" style="--c:${a.color}"><div class="top"><b>${esc(a.name)}</b>${lean}</div>
        <div class="bar"><span class="mid"></span><span class="fill" style="left:50%;width:0" data-l="${v < 0 ? 50 + v / 2 : 50}" data-w="${Math.abs(v) / 2}"></span>
        ${user ? `<span class="ghost" style="left:${(user.scores[i] + 100) / 2}%;--gc:#e7c46b" title="Du"></span>` : ''}
        <span class="knob" style="left:50%" data-k="${(v + 100) / 2}"></span></div>
        <div class="poles"><span>${esc(a.left)}</span><span>${esc(AG.engine.bandLabel(i, v))}</span><span>${esc(a.right)}</span></div></div>`;
    }).join('');

    main.innerHTML = `
    <div class="view"><div class="wrap">
      <div class="profile-head">
        ${e.type === 'ideology' ? AG.ui.emblem(e, 120) : avatar(e, 120, 'xl')}
        <div class="info">
          <div class="meta" style="margin:0"><span class="chip">${esc(AG.ui.TYPE_LABEL[e.type])}</span>
            <span class="chip"><span class="dot" style="background:${color}"></span>${esc(fam.name)}</span>
            ${e.cc && e.type !== 'state' ? `<span class="chip">${esc(AG.ui.countryName(e.cc))}</span>` : ''}
            ${extra.filter(Boolean).map(x => `<span class="chip">${esc(x)}</span>`).join('')}</div>
          <h1>${esc(e.name)}</h1>
          <div class="muted">${esc(subtitle(e))}</div>
          ${desc ? `<p class="d">${esc(desc)}</p>` : ''}
          ${e.quote ? `<p class="d" style="font-family:var(--serif);font-style:italic;color:var(--text2)">„${esc(e.quote)}"</p>` : ''}
          <div class="hero-cta" style="margin-top:20px">
            ${user ? `<a class="btn btn-gold btn-sm" href="#/vergleich?ids=du,${encodeURIComponent(e.id)}&du=${encodeURIComponent(last.code)}">${AG.icon('layers')} Mit mir vergleichen</a>` : `<a class="btn btn-gold btn-sm" href="#/#modes">Test machen und vergleichen</a>`}
            <a class="btn btn-ghost btn-sm" href="#/vergleich?ids=${encodeURIComponent(e.id)}">${AG.icon('users')} Mit anderen vergleichen</a>
            ${wl ? `<a class="btn btn-ghost btn-sm" href="${esc(wl)}" target="_blank" rel="noopener">${AG.icon('book')} Wikipedia</a>` : ''}
          </div>
        </div>
        ${mine !== null ? `<div class="match-badge">${AG.charts.ring(mine, color, 110)}<small>Übereinstimmung mit dir</small></div>` : ''}
      </div>
      <div class="res-grid" style="margin-top:0">
        <section class="card span-7"><h3 class="ttl">Profil auf 12 Achsen</h3><p class="sub">${user ? 'Goldener Punkt: deine Position.' : 'Position auf jeder Achse zwischen den beiden Polen.'}</p>
          <div class="axis-rows" style="grid-template-columns:1fr">${rows}</div></section>
        <section class="card span-5 radar"><h3 class="ttl">Netz</h3><p class="sub">Innen linker, außen rechter Pol.</p>
          ${AG.charts.radar(user ? [{ v: user.scores, color: '#e7c46b' }, { v: e.v, color }] : [{ v: e.v, color }])}
          <div class="legend">${user ? '<span><i style="background:#e7c46b"></i>Du</span>' : ''}<span><i style="background:${color}"></i>${esc(e.name)}</span></div>
          <div class="compass" style="margin-top:20px">${AG.charts.compass(user ? user.scores : null, 'econ', 'auth', [{ v: e.v, label: e.name, color, big: true }])}</div></section>
        <section class="card span-6"><h3 class="ttl">Verwandte Ideologien</h3><p class="sub">Strömungen mit dem ähnlichsten Profil.</p>
          <div class="rank-list">${near(AG.IDEOLOGIES).map(li).join('')}</div>
          <div class="far"><span class="lbl">Gegensätze</span>${farL(AG.IDEOLOGIES).map(x => `<a href="#/profil/${encodeURIComponent(x.e.id)}">${esc(x.e.name)} · ${x.pct}%</a>`).join('')}</div></section>
        <section class="card span-6"><h3 class="ttl">Ähnliche Personen</h3><p class="sub">Politiker und Denker mit ähnlichen Positionen.</p>
          <div class="rank-list">${near(AG.PERSONS).map(li).join('')}</div></section>
        <section class="card span-6"><h3 class="ttl">Ähnliche Parteien</h3><p class="sub">Europaweit.</p>
          <div class="rank-list">${near(AG.PARTIES.filter(p => !p.group)).map(li).join('')}</div></section>
        <section class="card span-6"><h3 class="ttl">Ähnliche Staaten</h3><p class="sub">Heute und in der Geschichte.</p>
          <div class="rank-list">${near([...AG.STATES, ...AG.HIST_STATES]).map(li).join('')}</div></section>
      </div>
    </div></div>`;

    AG.charts.animateRings(main);
    requestAnimationFrame(() => setTimeout(() => {
      main.querySelectorAll('.fill[data-w]').forEach(el => { el.style.left = el.dataset.l + '%'; el.style.width = el.dataset.w + '%'; });
      main.querySelectorAll('.knob[data-k]').forEach(el => (el.style.left = el.dataset.k + '%'));
    }, 200));
  };
})();

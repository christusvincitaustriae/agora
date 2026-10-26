/* Agora – Ergebnisseite */
window.AG = window.AG || {};
AG.views = AG.views || {};

AG.views.results = function (main, params) {
  const { esc, store, avatar, subtitle, countryName } = AG.ui;
  const E = AG.engine;
  const user = E.decode(params.query || '');
  if (!user) {
    main.innerHTML = `<div class="view wrap empty"><h2>Kein gültiges Ergebnis</h2><p style="margin:12px 0 22px">Der Link ist unvollständig oder beschädigt.</p><a class="btn btn-gold" href="#/">Zur Startseite</a></div>`;
    return;
  }
  const code = E.encode(user);
  const last = store.get('last', null);
  const own = !!(last && last.code === code);
  const S = user.scores;

  /* ---------- Ranglisten ---------- */
  const R = {
    ideo: E.rank(AG.IDEOLOGIES, user),
    polNow: E.rank(AG.PERSONS.filter(p => p.era === 'aktuell'), user),
    polHist: E.rank(AG.PERSONS.filter(p => p.era === 'historisch' && p.cat !== 'Denker'), user),
    thinkers: E.rank(AG.PERSONS.filter(p => p.cat === 'Denker'), user),
    persons: E.rank(AG.PERSONS, user),
    parties: E.rank(AG.PARTIES.filter(p => !p.group && !p.hist), user),
    partiesHist: E.rank(AG.PARTIES.filter(p => p.hist), user),
    groups: E.rank(AG.PARTIES.filter(p => p.group), user),
    states: E.rank(AG.STATES, user),
    hist: E.rank(AG.HIST_STATES, user)
  };
  const top = R.ideo[0];
  const fam = AG.FAMILIES[top.e.fam];
  const spec = E.spectrumText(S);
  const rad = E.radicalism(S);
  const so = E.standout(S);
  const values = E.values(S);

  /* ---------- Bausteine ---------- */
  const href = e => '#/profil/' + encodeURIComponent(e.id);
  const pctBar = p => `<span class="pb"><i style="width:0" data-w="${p}"></i></span>`;
  const rankItem = (x, n) => `<a class="rank-item" href="${href(x.e)}">
      <span class="n">${n}</span>${avatar(x.e, 38)}
      <span class="nm"><b>${esc(x.e.name)}${x.e.ep && x.e.type === 'party' && !x.e.group ? `<span class="ep-badge">${esc(epShort(x.e.ep))}</span>` : ''}</b><small>${esc(subtitle(x.e))}</small></span>
      ${pctBar(x.pct)}<span class="p">${x.pct}%</span></a>`;
  const epShort = k => ({ EPP: 'EVP', SD: 'S&D', RE: 'Renew', GREEN: 'Grüne', ECR: 'EKR', PFE: 'PfE', ESN: 'ESN', LEFT: 'Linke', NI: 'FL', NONEU: '' }[k] || '');

  function topPick(x, kicker) {
    return `<a class="top-pick" href="${href(x.e)}">
      ${avatar(x.e, 76, 'lg')}
      <div class="info"><span class="kick">${esc(kicker)}</span>
        <h4>${esc(x.e.name)}</h4><p>${esc(subtitle(x.e))}</p></div>
      <div class="pct">${x.pct}<small>%</small></div></a>`;
  }
  function byDim(list, excludeId) {
    return `<div class="by-dim">${Object.values(AG.DIMENSIONS).map(d => {
      const r = E.rank(list, user, d.axes).filter(x => x.e.id !== excludeId)[0];
      return r ? `<a class="bd" href="${href(r.e)}"><span class="l">${esc(d.label)}</span><span class="r">${avatar(r.e, 34)}<b>${esc(r.e.name)}</b><span>${r.pct}%</span></span></a>` : '';
    }).join('')}</div>`;
  }
  function far(ranked, n = 3) {
    return `<div class="far"><span class="lbl">Am weitesten entfernt</span>${ranked.slice(-n).reverse().map(x => `<a href="${href(x.e)}">${esc(x.e.name)} · ${x.pct}%</a>`).join('')}</div>`;
  }
  function block(title, sub, ranked, kicker, opts = {}) {
    const list = opts.list || ranked.map(x => x.e);
    return `
      ${topPick(ranked[0], kicker)}
      ${opts.noDim ? '' : `<div class="sub" style="margin:18px 0 8px;font-size:11px;letter-spacing:.14em;text-transform:uppercase;font-weight:700">Auch nah – nach Dimension</div>${byDim(list, ranked[0].e.id)}`}
      <div class="rank-list" style="margin-top:16px">${ranked.slice(1, opts.n || 8).map((x, i) => rankItem(x, i + 2)).join('')}</div>
      ${opts.noFar ? '' : far(ranked)}`;
  }

  /* Achsen-Zeilen */
  const axisRows = AG.AXES.map((a, i) => {
    const v = S[i];
    const sp = E.poleSplit(v);
    const lean = Math.abs(v) <= 15 ? `<span class="bal">Ausgeglichen</span>` : `<span>${v < 0 ? sp.left : sp.right} % ${esc(v < 0 ? a.left : a.right)}</span>`;
    const left = v < 0 ? 50 + v / 2 : 50;
    const width = Math.abs(v) / 2;
    const lowConf = user.conf[i] < 0.5;
    return `<div class="axis-row" style="--c:${a.color}">
      <div class="top"><b>${esc(a.name)}${user.priorities.includes(a.id) ? ` <span title="Herzensthema" style="color:var(--gold)">♥</span>` : ''}${lowConf ? '<span class="conf">· wenig Daten</span>' : ''}</b>${lean}</div>
      <div class="bar"><span class="mid"></span><span class="fill" style="left:50%;width:0" data-l="${left}" data-w="${width}"></span><span class="knob" style="left:50%" data-k="${(v + 100) / 2}"></span></div>
      <div class="poles"><span class="${v < -15 ? 'on' : ''}">${AG.icon(a.iconL)}${esc(a.left)}</span><span>${esc(E.bandLabel(i, v))}</span><span class="${v > 15 ? 'on' : ''}">${esc(a.right)}${AG.icon(a.iconR)}</span></div>
    </div>`;
  }).join('');

  /* Besonderheiten */
  const ua = AG.AXES[so.unusual.i], uv = S[so.unusual.i];
  const ta = AG.AXES[so.typical.i];
  const morePole = uv >= 0 ? ua.right : ua.left;
  const morePct = Math.round(so.unusual.lessExtreme * 100);
  const median = (i, color) => {
    const med = so.stats[i].median;
    return `<div class="bar" style="--c:${color}"><span class="mid"></span><span class="ghost" style="left:${(med + 100) / 2}%;--gc:#8b93a3" title="Median der Ideologien"></span><span class="knob" style="left:${(S[i] + 100) / 2}%"></span></div>
      <div class="poles" style="display:flex;justify-content:space-between;margin-top:8px;font-size:12px;color:var(--muted)"><span>${esc(AG.AXES[i].left)}</span><span>○ Median · ● Du</span><span>${esc(AG.AXES[i].right)}</span></div>`;
  };

  /* Kompass-Punkte: alle Ideologien blass, Top 5 beschriftet */
  const topIds = R.ideo.slice(0, 5).map(x => x.e.id);
  const cPoints = AG.IDEOLOGIES.map(i => ({ v: i.v, label: i.name, color: AG.FAMILIES[i.fam].color, big: topIds.includes(i.id) }));

  const country = AG.ui.getCountry();

  main.innerHTML = `
  <div class="view results"><div class="wrap">
    <div class="res-head">
      <div><span class="eyebrow">${own ? 'Analyse abgeschlossen' : 'Geteiltes Ergebnis'}</span><h1>${own ? 'Dein politisches Profil' : 'Politisches Profil'}</h1></div>
      <div class="res-actions no-print">
        <button class="btn btn-soft btn-sm" data-act="share">${AG.icon('share')} Teilen</button>
        <button class="btn btn-soft btn-sm" data-act="png">${AG.icon('image')} Als Bild</button>
        <button class="btn btn-soft btn-sm" data-act="pdf">${AG.icon('printer')} PDF</button>
        <a class="btn btn-gold btn-sm" href="#/">${AG.icon('refresh')} Neuer Test</a>
      </div>
    </div>

    <section class="hero-res reveal" style="--fc:${fam.color}">
      <div class="main">
        <span class="fam">${AG.icon(top.e.icon)} ${esc(fam.name)}</span>
        <h2>${esc(top.e.name)}</h2>
        <div class="quote">„${esc(top.e.quote)}"</div>
        <p class="desc">${esc(top.e.desc)}</p>
        <p class="desc" style="margin-top:14px;color:var(--text2)">${esc(E.portrait(S))}</p>
        <a class="btn btn-ghost btn-sm" style="margin-top:20px" href="${href(top.e)}">Mehr über ${esc(top.e.name)} ${AG.icon('arrowRight')}</a>
      </div>
      <div class="side">
        <div class="ring-wrap">${AG.charts.ring(top.pct, fam.color)}<div><div class="lbl">Übereinstimmung</div><div style="font-size:15px;margin-top:4px;color:var(--text2)">mit deiner Ideologie</div></div></div>
        <div><div class="lbl">Einordnung</div><div style="font-family:var(--serif);font-size:22px;margin-top:4px">${esc(spec.side)} · ${esc(spec.ax)}</div>
          <div class="muted" style="font-size:14px">Profilschärfe: ${esc(rad.label)} (${rad.value}/100)</div></div>
        <div><div class="lbl" style="margin-bottom:8px">Ebenfalls passend</div>
          <div class="mini-list">${R.ideo.slice(1, 4).map(x => `<a class="row" href="${href(x.e)}">${AG.ui.emblem(x.e, 28)}<span>${esc(x.e.name)}</span><b>${x.pct}%</b></a>`).join('')}</div></div>
        <div><div class="lbl" style="margin-bottom:8px">Deine Spitzenreiter</div>
          <div class="mini-list">
            ${[['Partei in ' + countryName(country), partyRank(country)[0]], ['Politiker', R.polNow[0]], ['Staat', R.states[0]], ['Historisch', R.hist[0]]].filter(x => x[1]).map(([k, x]) =>
              `<a class="row" href="${href(x.e)}">${avatar(x.e, 28)}<span><small class="muted" style="display:block;font-size:11px">${esc(k)}</small>${esc(x.e.name)}</span><b>${x.pct}%</b></a>`).join('')}
          </div></div>
      </div>
    </section>

    <div class="res-grid">
      <section class="card span-12 reveal">
        <div class="card-head"><div><h3 class="ttl">Deine 12 Achsen</h3><p class="sub">Wo du auf jeder Achse stehst – in Prozent zwischen den beiden Polen.</p></div>
          ${own ? `<a class="btn btn-ghost btn-sm no-print" href="#/test/${user.mode || 'standard'}?edit=1">${AG.icon('edit')} Antworten bearbeiten</a>` : ''}</div>
        <div class="axis-rows">${axisRows}</div>
      </section>

      <section class="card span-12 reveal">
        <h3 class="ttl">Was dich auszeichnet</h3><p class="sub">Verglichen mit allen ${AG.IDEOLOGIES.length} Ideologien der Datenbank.</p>
        <div class="standout">
          <div class="so hl"><span class="k">Deine ungewöhnlichste Position</span><h4>${esc(ua.name)}</h4>
            <div class="big">${morePct}%</div><p>der Ideologien neigen weniger stark zu „${esc(morePole)}" als du.</p>${median(so.unusual.i, ua.color)}</div>
          <div class="so"><span class="k">Deine typischste Position</span><h4>${esc(ta.name)}</h4>
            <div class="big" style="font-size:34px">${Math.abs(S[so.typical.i] - so.stats[so.typical.i].median) < 10 ? 'Am Median' : 'Nah am Median'}</div><p>Hier denkst du wie die Mehrheit der politischen Strömungen.</p>${median(so.typical.i, ta.color)}</div>
          <div class="so"><span class="k">Profilschärfe</span><h4>${esc(rad.label)}</h4>
            <div class="big">${rad.value}<span style="font-size:20px;color:var(--muted)">/100</span></div><p>Wie weit deine Antworten im Schnitt von der Mitte entfernt sind.</p>
            <div class="bar" style="--c:var(--gold);margin-top:14px"><span class="fill" style="left:0;width:0" data-l="0" data-w="${rad.value}"></span></div></div>
        </div>
      </section>

      <section class="card span-12 reveal">
        <h3 class="ttl">Deine Werte</h3><p class="sub">Dein Profil, übersetzt in acht Politikfelder.</p>
        <div class="values">${values.map(v => `<div class="value"><small>${esc(v.k)}</small><b>${esc(v.v)}</b></div>`).join('')}</div>
      </section>

      <section class="card span-12 reveal">
        <div class="card-head"><div><h3 class="ttl">Politische Kompasse</h3><p class="sub">Dein Standort zwischen den Ideologien. Blasse Punkte: alle Ideologien; beschriftet: deine fünf nächsten.</p></div></div>
        <div class="compass-wrap">
          <div class="compass">${AG.charts.compass(S, 'econ', 'auth', cPoints)}<div class="cap">Klassischer Kompass: <b>${esc(spec.side)}</b>, ${esc(spec.ax)}</div></div>
          <div class="compass">${AG.charts.compass(S, 'eu', 'cult', cPoints, { colors: ['#9b6fd6', '#4b5ea8', '#57b87a', '#e9a23b'] })}<div class="cap">Europa-Kompass: <b>${esc(E.bandLabel(2, S[2]))}</b> und <b>${esc(E.bandLabel(3, S[3]).toLowerCase())}</b></div></div>
        </div>
      </section>

      <section class="card span-5 reveal radar">
        <h3 class="ttl">Dein Netz</h3><p class="sub">Innen der linke, außen der rechte Pol jeder Achse. Gestrichelt: die Mitte.</p>
        ${AG.charts.radar([{ v: S, color: '#e7c46b' }, { v: top.e.v, color: fam.color }])}
        <div class="legend"><span><i style="background:#e7c46b"></i>Du</span><span><i style="background:${fam.color}"></i>${esc(top.e.name)}</span></div>
      </section>

      <section class="card span-7 reveal">
        <h3 class="ttl">Kompatible Ideologien</h3><p class="sub">Strömungen, die deinem Profil ebenfalls nahekommen.</p>
        <div class="ideo-cards">${R.ideo.slice(1, 7).map(x => {
          const f = AG.FAMILIES[x.e.fam];
          return `<a class="ideo-card" href="${href(x.e)}" style="--fc:${f.color}"><div class="t">${AG.ui.emblem(x.e, 40)}<span class="pct">${x.pct}%</span></div>
            <div><h4>${esc(x.e.name)}</h4><span class="fam-s">${esc(f.name)}</span></div><p>${esc(x.e.desc)}</p></a>`;
        }).join('')}</div>
        <div class="far" style="margin-top:20px"><span class="lbl">Genaue Gegensätze</span>${R.ideo.slice(-4).reverse().map(x => `<a href="${href(x.e)}">${esc(x.e.name)} · ${x.pct}%</a>`).join('')}</div>
      </section>

      <section class="card span-12 reveal party-rank" id="countrySec"></section>

      <section class="card span-6 reveal">
        <h3 class="ttl">${AG.icon('stars', 'gold')} Europäisches Parlament</h3><p class="sub">Welche Fraktion vertritt deine Positionen?</p>
        ${topPick(R.groups[0], 'Deine Fraktion')}
        <div class="rank-list">${R.groups.slice(1).map((x, i) => rankItem(x, i + 2)).join('')}</div>
      </section>

      <section class="card span-6 reveal">
        <h3 class="ttl">${AG.icon('users', 'gold')} Politiker Europas</h3><p class="sub">Aktive Politikerinnen und Politiker aus ganz Europa.</p>
        ${block('', '', R.polNow, 'Am nächsten', { n: 7 })}
      </section>

      <section class="card span-6 reveal">
        <div class="card-head"><div><h3 class="ttl">${AG.icon('map', 'gold')} Staaten Europas</h3><p class="sub" id="stSub">Welcher Staat denkt wie du?</p></div>
          <div class="tabs no-print" data-tabs="st"><button class="on" data-t="now">Heute</button><button data-t="hist">Historisch</button></div></div>
        <div data-pane="st-now">${block('', '', R.states, 'Dein Staat heute', { n: 7 })}</div>
        <div data-pane="st-hist" hidden>${block('', '', R.hist, 'Dein historischer Staat', { n: 7 })}</div>
      </section>

      <section class="card span-6 reveal">
        <div class="card-head"><div><h3 class="ttl">${AG.icon('scroll', 'gold')} Geschichte & Ideen</h3><p class="sub">Staatsleute vergangener Epochen und große Denker.</p></div>
          <div class="tabs no-print" data-tabs="hp"><button class="on" data-t="pol">Staatsleute</button><button data-t="den">Denker</button></div></div>
        <div data-pane="hp-pol">${block('', '', R.polHist, 'Historische Persönlichkeit', { n: 7 })}</div>
        <div data-pane="hp-den" hidden>${block('', '', R.thinkers, 'Dein Denker', { n: 7 })}</div>
      </section>

      <section class="card span-6 reveal">
        <h3 class="ttl">${AG.icon('flag', 'gold')} Parteien in ganz Europa</h3><p class="sub">Die nächsten Parteien über alle Länder hinweg.</p>
        <div class="rank-list">${R.parties.slice(0, 10).map((x, i) => rankItem(x, i + 1)).join('')}</div>
        ${far(R.parties)}
      </section>

      <section class="card span-6 reveal">
        <h3 class="ttl">${AG.icon('hourglass', 'gold')} Historische Parteien</h3><p class="sub">Parteien, die es heute nicht mehr gibt – zur Einordnung.</p>
        <div class="rank-list">${R.partiesHist.slice(0, 6).map((x, i) => rankItem(x, i + 1)).join('')}</div>
        <div style="margin-top:22px"><h3 class="ttl" style="font-size:20px">Deine Herzensthemen</h3>
          <p class="sub" style="margin-bottom:10px">${user.priorities.length ? 'Diese Achsen wurden beim Vergleich stärker gewichtet:' : 'Du hast keine Herzensthemen gewählt – alle Achsen zählen gleich.'}</p>
          <div style="display:flex;gap:8px;flex-wrap:wrap">${user.priorities.map(id => { const a = AG.AXES[AG.AXIS_INDEX[id]]; return `<span class="chip" style="color:${a.color}">${AG.icon(a.iconL)}${esc(a.name)}</span>`; }).join('')}</div></div>
      </section>

      <section class="card span-12 reveal no-print">
        <h3 class="ttl">Vergleiche dich</h3><p class="sub">Mit einer Ideologie, Person, Partei oder einem Staat – oder mit dem Ergebnis eines Freundes.</p>
        <div class="two">
          <div><div class="suggest" id="cmpSearch"><div class="search">${AG.icon('search')}<input placeholder="z. B. Willy Brandt, Liberalismus, ÖVP, Schweiz …"></div></div>
            <p class="muted" style="font-size:13px;margin-top:8px">Öffnet den Achsen-Vergleich Seite an Seite.</p></div>
          <div><div class="share-box"><input id="friendLink" placeholder="Ergebnis-Link eines Freundes einfügen"><button class="btn btn-soft btn-sm" id="friendGo">Vergleichen</button></div>
            <p class="muted" style="font-size:13px;margin-top:8px">Dein eigener Link steht unten bei „Teilen".</p></div>
        </div>
      </section>

      <section class="card span-12 reveal no-print">
        <h3 class="ttl">Herunterladen & Teilen</h3><p class="sub">Nimm dein Ergebnis mit.</p>
        <div class="export-grid">
          <button class="export" data-act="png">${AG.icon('image')}<b>Ergebniskarte (PNG)</b><small>Kompakte Zusammenfassung als Bild – ideal für soziale Medien.</small></button>
          <button class="export" data-act="pdf">${AG.icon('printer')}<b>Vollständiger Bericht (PDF)</b><small>Die komplette Auswertung zum Drucken oder Speichern.</small></button>
          <button class="export" data-act="txt">${AG.icon('scroll')}<b>Zusammenfassung (Text)</b><small>Alle Achsen und Spitzenreiter als Textdatei.</small></button>
          <button class="export" data-act="json">${AG.icon('json')}<b>Rohdaten (JSON)</b><small>Achsenwerte, Antworten und Ranglisten für eigene Auswertungen.</small></button>
        </div>
        <div class="share-box" style="margin-top:16px"><input id="shareLink" readonly value="${esc(location.href.split('#')[0] + '#/ergebnis?' + code)}"><button class="btn btn-gold btn-sm" data-act="copy">${AG.icon('copy')} Link kopieren</button></div>
      </section>

      ${own && last.answers ? `
      <section class="card span-12 reveal">
        <div class="card-head"><div><h3 class="ttl">Deine Antworten</h3><p class="sub">${Object.keys(last.answers).length} beantwortete Aussagen · ★ = als wichtig markiert</p></div>
          <a class="btn btn-ghost btn-sm no-print" href="#/test/${user.mode || 'standard'}?edit=1">${AG.icon('edit')} Bearbeiten</a></div>
        <div class="answers-review">${AG.QUESTIONS.filter(q => q.id in last.answers).map(q => {
          const a = AG.ANSWERS.find(x => x.v === last.answers[q.id]);
          const tone = { pos2: '#6fcf97', pos1: '#a8dcb0', neu: '#9aa3b2', neg1: '#f0a79b', neg2: '#ef7a7a' }[a.tone];
          return `<div class="ar"><span class="q">${last.important && last.important[q.id] ? '<span class="imp">★ </span>' : ''}${esc(q.text)}</span><span class="a" style="--tone:${tone}">${esc(a.label)}</span></div>`;
        }).join('')}</div>
      </section>` : ''}
    </div>
  </div></div>`;

  /* ---------- Länder-Abschnitt (neu zeichnen bei Länderwechsel) ---------- */
  function partyRank(cc) { return E.rank(AG.PARTIES.filter(p => p.cc === cc && !p.hist && !p.group), user); }
  function drawCountry() {
    const cc = AG.ui.getCountry();
    const pr = partyRank(cc);
    const pol = E.rank(AG.PERSONS.filter(p => p.cc === cc && p.era === 'aktuell'), user);
    const polH = E.rank(AG.PERSONS.filter(p => p.cc === cc && p.era === 'historisch'), user);
    const st = AG.STATES.find(s => s.cc === cc);
    const stPct = st ? E.rank([st], user)[0].pct : null;
    const fl = AG.ui.flagUrl(cc);
    const sec = main.querySelector('#countrySec');
    sec.innerHTML = `
      <div class="card-head"><div><h3 class="ttl">${fl ? `<img src="${esc(fl)}" alt="" style="width:34px;height:23px;border-radius:5px;object-fit:cover" referrerpolicy="no-referrer">` : ''} In ${esc(countryName(cc))}</h3>
        <p class="sub">Parteien und Politiker deines Landes, sortiert nach Übereinstimmung${stPct !== null ? ` · Übereinstimmung mit ${esc(countryName(cc))} als Staat: <b style="color:var(--text)">${stPct}%</b>` : ''}.</p></div>
        <button class="btn btn-ghost btn-sm no-print" id="ccPick">${AG.icon('globe')} Land wechseln</button></div>
      <div class="split">
        <div>${pr.length ? `${topPick(pr[0], 'Deine Partei')}<div class="rank-list">${pr.slice(1).map((x, i) => rankItem(x, i + 2)).join('')}</div>` : '<p class="muted">Für dieses Land sind noch keine Parteien hinterlegt.</p>'}</div>
        <div><div class="lbl" style="font-size:11px;letter-spacing:.14em;text-transform:uppercase;font-weight:700;color:var(--muted);margin-bottom:10px">Politikerinnen & Politiker</div>
          ${pol.length ? `<div class="rank-list">${pol.slice(0, 7).map((x, i) => rankItem(x, i + 1)).join('')}</div>` : '<p class="muted">Für dieses Land sind noch keine aktiven Politiker hinterlegt.</p>'}
          ${polH.length ? `<div class="lbl" style="font-size:11px;letter-spacing:.14em;text-transform:uppercase;font-weight:700;color:var(--muted);margin:20px 0 10px">Aus der Geschichte</div><div class="rank-list">${polH.slice(0, 5).map((x, i) => rankItem(x, i + 1)).join('')}</div>` : ''}</div>
      </div>`;
    sec.querySelector('#ccPick').addEventListener('click', ev => { ev.stopPropagation(); AG.ui.openCountryMenu(ev.currentTarget); });
    animateBars(sec);
  }
  drawCountry();
  const onCountry = () => drawCountry();
  window.addEventListener('agora:country', onCountry);
  AG.views._cleanup = () => window.removeEventListener('agora:country', onCountry);

  /* ---------- Interaktion ---------- */
  function animateBars(root) {
    requestAnimationFrame(() => setTimeout(() => {
      root.querySelectorAll('.pb i[data-w]').forEach(el => (el.style.width = el.dataset.w + '%'));
    }, 60));
  }
  main.querySelectorAll('[data-tabs]').forEach(t => t.addEventListener('click', ev => {
    const b = ev.target.closest('button');
    if (!b) return;
    const k = t.dataset.tabs;
    t.querySelectorAll('button').forEach(x => x.classList.toggle('on', x === b));
    main.querySelectorAll(`[data-pane^="${k}-"]`).forEach(p => (p.hidden = p.dataset.pane !== `${k}-${b.dataset.t}`));
    animateBars(main);
  }));

  const data = { user, code, R, top, spec, rad, values, own, last, country: AG.ui.getCountry(), partyRank };
  main.addEventListener('click', async ev => {
    const b = ev.target.closest('[data-act]');
    if (!b) return;
    const act = b.dataset.act;
    const link = location.href.split('#')[0] + '#/ergebnis?' + code;
    if (act === 'copy') { if (await AG.ui.copy(link)) AG.ui.toast('Link kopiert'); }
    else if (act === 'share') {
      if (navigator.share) { try { await navigator.share({ title: 'Mein Agora-Ergebnis: ' + top.e.name, url: link }); } catch (e) { } }
      else if (await AG.ui.copy(link)) AG.ui.toast('Link kopiert – jetzt einfügen und teilen');
    }
    else if (act === 'png') AG.exporter.png({ ...data, country: AG.ui.getCountry() });
    else if (act === 'pdf') AG.exporter.pdf();
    else if (act === 'json') AG.exporter.json({ ...data, country: AG.ui.getCountry() });
    else if (act === 'txt') AG.exporter.text({ ...data, country: AG.ui.getCountry() });
  });

  /* Vergleichssuche */
  AG.views.attachSuggest(main.querySelector('#cmpSearch'), e => { location.hash = `#/vergleich?ids=du,${encodeURIComponent(e.id)}&du=${encodeURIComponent(code)}`; });
  main.querySelector('#friendGo').addEventListener('click', () => {
    const v = main.querySelector('#friendLink').value.trim();
    const m = v.match(/ergebnis\?(.+)$/);
    const fu = m && E.decode(m[1]);
    if (!fu) { AG.ui.toast('Das ist kein gültiger Ergebnis-Link', 'info'); return; }
    location.hash = `#/vergleich?ids=du,freund&du=${encodeURIComponent(code)}&freund=${encodeURIComponent(E.encode(fu))}`;
  });

  /* Animationen starten */
  AG.ui.reveal(main);
  AG.charts.animateRings(main);
  requestAnimationFrame(() => setTimeout(() => {
    main.querySelectorAll('.fill[data-w]').forEach(el => { el.style.left = el.dataset.l + '%'; el.style.width = el.dataset.w + '%'; });
    main.querySelectorAll('.knob[data-k]').forEach(el => (el.style.left = el.dataset.k + '%'));
    animateBars(main);
  }, 250));
};

/* Agora – Vergleich Seite an Seite (bis zu fünf Profile) */
window.AG = window.AG || {};
AG.views = AG.views || {};

AG.views.compare = function (main, params) {
  const { esc, avatar } = AG.ui;
  const q = new URLSearchParams(params.query || '');
  const last = AG.ui.store.get('last', null);
  const COLORS = ['#e7c46b', '#7d97ff', '#ef7a7a', '#6fcf97', '#d77bd0'];
  const ids = (q.get('ids') || '').split(',').map(decodeURIComponent).filter(Boolean).slice(0, 5);

  const items = ids.map(id => {
    if (id === 'du' || id === 'freund') {
      const code = q.get(id) || (id === 'du' && last ? last.code : null);
      const u = code && AG.engine.decode(code);
      if (!u) return null;
      return { id, code, name: id === 'du' ? 'Du' : 'Freund/in', v: u.scores, sub: id === 'du' ? 'Dein Ergebnis' : 'Geteiltes Ergebnis', av: `<div class="avatar fallback round" style="width:30px;height:30px;background:linear-gradient(145deg,#e7c46b,#9a7a2c);font-size:12px">${id === 'du' ? 'DU' : 'FR'}</div>` };
    }
    const e = AG.ui.BY_ID[id];
    return e ? { id, e, name: e.name, v: e.v, sub: AG.ui.subtitle(e), av: avatar(e, 30) } : null;
  }).filter(Boolean);
  items.forEach((it, i) => (it.color = COLORS[i]));

  function urlFor(list) {
    const p = new URLSearchParams();
    p.set('ids', list.map(x => x.id).join(','));
    list.forEach(x => { if (x.code) p.set(x.id, x.code); });
    return '#/vergleich?' + p.toString().replace(/%2C/g, ',');
  }

  const canAddMe = last && !items.some(x => x.id === 'du');
  let body = '';
  if (items.length < 2) {
    body = `<div class="card empty" style="padding:50px">${AG.icon('layers', 'gold')}<h3 style="font-size:24px;margin:12px 0 8px">Wähle mindestens zwei Profile</h3>
      <p>Suche oben nach Ideologien, Personen, Parteien oder Staaten${canAddMe ? ' – oder füge dein eigenes Ergebnis hinzu' : ''}.</p>
      <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin-top:22px">
        ${[['liberalismus', 'sozialdemokratie'], ['merkel', 'thatcher'], ['st-ch', 'st-fr'], ['hs-venedig', 'hs-athen']].map(p =>
          `<a class="chip" href="#/vergleich?ids=${p.join(',')}">${p.map(id => esc(AG.ui.BY_ID[id].name)).join(' vs. ')}</a>`).join('')}</div></div>`;
  } else {
    const A = items[0], B = items[1];
    const diffs = AG.AXES.map((a, i) => ({ a, i, d: A.v[i] === null || B.v[i] === null ? null : Math.abs(A.v[i] - B.v[i]) })).filter(x => x.d !== null);
    const most = diffs.slice().sort((x, y) => y.d - x.d).slice(0, 3);
    const least = diffs.slice().sort((x, y) => x.d - y.d).slice(0, 3);
    const rows = AG.AXES.map((a, i) => `<div class="cmp-row"><div class="top"><b style="color:${a.color}">${esc(a.name)}</b><span class="muted">${esc(a.left)} ↔ ${esc(a.right)}</span></div>
      <div class="bar"><span class="mid"></span>${items.map(it => it.v[i] === null ? '' : `<span class="ghost" style="left:${(it.v[i] + 100) / 2}%;--gc:${it.color};width:14px;height:14px;border-width:3px;background:${it.color}" title="${esc(it.name)}: ${it.v[i]}"></span>`).join('')}</div></div>`).join('');
    body = `
      <div class="res-grid" style="margin-top:0">
        <section class="card span-6 radar"><h3 class="ttl">Netzdiagramm</h3><p class="sub">Alle Profile übereinandergelegt.</p>
          ${AG.charts.radar(items.map(it => ({ v: it.v, color: it.color })))}
          <div class="legend">${items.map(it => `<span><i style="background:${it.color}"></i>${esc(it.name)}</span>`).join('')}</div></section>
        <section class="card span-6"><h3 class="ttl">Übereinstimmung</h3><p class="sub">Paarweise in Prozent.</p>
          <div style="overflow-x:auto"><table class="matrix"><tr><th></th>${items.map(it => `<th style="color:${it.color}">${esc(it.name)}</th>`).join('')}</tr>
          ${items.map(r => `<tr><th style="color:${r.color};text-align:left">${esc(r.name)}</th>${items.map(c => `<td class="v">${r === c ? '–' : AG.engine.compare(r.v, c.v) + '%'}</td>`).join('')}</tr>`).join('')}</table></div>
          <div class="two" style="gap:12px;margin-top:22px">
            <div class="so"><span class="k">Größte Unterschiede</span>${most.map(x => `<p style="margin-top:8px"><b style="color:${x.a.color}">${esc(x.a.name)}</b> · ${x.d} Punkte</p>`).join('')}</div>
            <div class="so"><span class="k">Größte Gemeinsamkeiten</span>${least.map(x => `<p style="margin-top:8px"><b style="color:${x.a.color}">${esc(x.a.name)}</b> · ${x.d} Punkte</p>`).join('')}</div>
          </div>
          <p class="muted" style="font-size:13px;margin-top:12px">Bezogen auf ${esc(A.name)} und ${esc(B.name)}.</p></section>
        <section class="card span-12"><h3 class="ttl">Achse für Achse</h3><p class="sub">Jeder Punkt ist ein Profil.</p>
          <div class="legend" style="justify-content:flex-start;margin:-6px 0 18px">${items.map(it => `<span><i style="background:${it.color};border-radius:50%"></i>${esc(it.name)}</span>`).join('')}</div>
          <div class="cmp-table">${rows}</div></section>
        <section class="card span-6"><h3 class="ttl">Kompass</h3>${AG.charts.compass(null, 'econ', 'auth', items.map(it => ({ v: it.v, label: it.name, color: it.color, big: true })))}</section>
        <section class="card span-6"><h3 class="ttl">Europa-Kompass</h3>${AG.charts.compass(null, 'eu', 'cult', items.map(it => ({ v: it.v, label: it.name, color: it.color, big: true })), { colors: ['#9b6fd6', '#4b5ea8', '#57b87a', '#e9a23b'] })}</section>
      </div>`;
  }

  main.innerHTML = `
  <div class="view"><div class="wrap">
    <div class="page-head"><span class="eyebrow">Vergleichen</span><h1>Seite an Seite</h1><p>Lege bis zu fünf Profile übereinander – Ideologien, Personen, Parteien, Staaten, dein Ergebnis oder das eines Freundes.</p></div>
    <div class="cmp-pick">
      ${items.map((it, i) => `<span class="cmp-chip" style="--c:${it.color}">${it.av}${esc(it.name)}<button data-rm="${i}" title="Entfernen">${AG.icon('x')}</button></span>`).join('')}
      ${items.length < 5 ? `<div class="suggest" id="cmpAdd"><div class="search">${AG.icon('search')}<input placeholder="Profil hinzufügen …"></div></div>` : ''}
      ${canAddMe && items.length < 5 ? `<button class="btn btn-soft btn-sm" id="addMe">${AG.icon('sparkles')} Mein Ergebnis</button>` : ''}
    </div>
    ${body}
  </div></div>`;

  main.querySelectorAll('[data-rm]').forEach(b => b.addEventListener('click', () => {
    location.hash = urlFor(items.filter((_, i) => i !== +b.dataset.rm));
  }));
  AG.views.attachSuggest(main.querySelector('#cmpAdd'), e => {
    if (items.some(x => x.id === e.id)) return;
    location.hash = urlFor([...items, { id: e.id }]);
  });
  const am = main.querySelector('#addMe');
  if (am) am.addEventListener('click', () => { location.hash = urlFor([{ id: 'du', code: last.code }, ...items]); });
};

/* Agora – Testablauf: Fragen → Herzensthemen → Analyse → Ergebnis */
window.AG = window.AG || {};
AG.views = AG.views || {};

AG.views.quiz = function (main, params) {
  const { esc, store } = AG.ui;
  const mode = AG.MODES[params.mode] ? params.mode : 'standard';
  const qs = AG.engine.questionsFor(mode);

  /* Fortschritt laden (oder letzte Antworten zum Bearbeiten) */
  let st = store.get('progress', null);
  if (params.edit) {
    const last = store.get('last', null);
    st = { mode, answers: (last && last.answers) || {}, important: (last && last.important) || {}, idx: 0, priorities: (last && last.priorities) || [] };
  } else if (!st || st.mode !== mode) {
    st = { mode, answers: {}, important: {}, idx: 0, priorities: [] };
  }
  st.idx = Math.min(st.idx || 0, qs.length - 1);
  let auto = store.get('autoAdvance', true);
  let dir = 'r';
  let busy = false;
  const save = () => store.set('progress', st);

  function render() {
    const q = qs[st.idx];
    const axisKey = Object.keys(q.fx).sort((a, b) => Math.abs(q.fx[b]) - Math.abs(q.fx[a]))[0];
    const axis = AG.AXES[AG.AXIS_INDEX[axisKey]];
    const answered = Object.keys(st.answers).filter(id => qs.some(x => x.id === id)).length;
    const cur = st.answers[q.id];
    main.innerHTML = `
    <div class="view quiz">
      <div class="quiz-top"><span>Frage <b>${st.idx + 1}</b> von ${qs.length} · ${esc(AG.MODES[mode].name)}</span><span>${Math.round((answered / qs.length) * 100)} % beantwortet</span></div>
      <div class="progress"><i style="width:${(st.idx / qs.length) * 100}%"></i></div>
      <div class="qcard in-${dir}" data-n="${String(st.idx + 1).padStart(2, '0')}">
        <div class="qmeta">
          <span class="chip topic" style="--c:${axis.color}">${AG.icon(axis.iconL)}${esc(q.topic)}</span>
          <button class="chip" id="hintBtn">${AG.icon('info')}Worum geht’s?</button>
          <button class="chip imp ${st.important[q.id] ? 'on' : ''}" id="impBtn" title="Antwort zählt 1,6-fach (Taste W)">${AG.icon('starLine')}Wichtig</button>
        </div>
        <h2 class="qtext">${esc(q.text)}</h2>
        <div class="hint" id="hint"><div>${AG.icon('info')}<span>${esc(q.hint)}</span></div></div>
        <div class="answers">
          ${AG.ANSWERS.map((a, i) => `<button class="ans ${cur === a.v ? 'sel' : ''}" data-v="${a.v}" data-tone="${a.tone}"><span class="key">${i + 1}</span>${esc(a.label)}<span class="mark"></span></button>`).join('')}
        </div>
      </div>
      <div class="quiz-nav">
        <button class="btn btn-ghost btn-sm" id="backBtn" ${st.idx === 0 ? 'disabled' : ''}>${AG.icon('arrowLeft')} Zurück</button>
        <label class="toggle"><input type="checkbox" id="autoT" ${auto ? 'checked' : ''}><span class="sw"></span>Automatisch weiter</label>
        <button class="btn btn-soft btn-sm" id="nextBtn">${cur === undefined ? 'Überspringen' : 'Weiter'} ${AG.icon('arrowRight')}</button>
      </div>
      <p class="kbd-hint">Tastatur: 1–5 antworten · ← zurück · → weiter · W wichtig · H Hinweis</p>
    </div>`;
    requestAnimationFrame(() => {
      const bar = main.querySelector('.progress i');
      if (bar) bar.style.width = ((st.idx + (cur !== undefined ? 1 : 0)) / qs.length) * 100 + '%';
    });

    main.querySelectorAll('.ans').forEach(b => b.addEventListener('click', () => answer(parseFloat(b.dataset.v))));
    main.querySelector('#hintBtn').addEventListener('click', toggleHint);
    main.querySelector('#impBtn').addEventListener('click', toggleImp);
    main.querySelector('#backBtn').addEventListener('click', back);
    main.querySelector('#nextBtn').addEventListener('click', next);
    main.querySelector('#autoT').addEventListener('change', e => { auto = e.target.checked; store.set('autoAdvance', auto); });
  }

  function toggleHint() { const h = main.querySelector('#hint'); if (h) h.classList.toggle('open'); }
  function toggleImp() {
    const q = qs[st.idx];
    st.important[q.id] = !st.important[q.id];
    if (!st.important[q.id]) delete st.important[q.id];
    save();
    main.querySelector('#impBtn').classList.toggle('on', !!st.important[q.id]);
  }
  function answer(v) {
    if (busy) return;
    const q = qs[st.idx];
    st.answers[q.id] = v;
    save();
    main.querySelectorAll('.ans').forEach(b => b.classList.toggle('sel', parseFloat(b.dataset.v) === v));
    const nb = main.querySelector('#nextBtn');
    if (nb) nb.innerHTML = 'Weiter ' + AG.icon('arrowRight');
    const bar = main.querySelector('.progress i');
    if (bar) bar.style.width = ((st.idx + 1) / qs.length) * 100 + '%';
    if (auto) { busy = true; setTimeout(() => { busy = false; next(); }, 360); }
  }
  function next() {
    if (st.idx < qs.length - 1) { st.idx++; dir = 'r'; save(); render(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
    else priorities();
  }
  function back() {
    if (st.idx > 0) { st.idx--; dir = 'l'; save(); render(); }
  }

  /* Schritt 2: Herzensthemen */
  function priorities() {
    st.priorities = st.priorities || [];
    const draw = () => {
      main.innerHTML = `
      <div class="view quiz">
        <div class="quiz-top"><span>Fast geschafft</span><span>Letzter Schritt</span></div>
        <div class="progress"><i style="width:100%"></i></div>
        <div class="qcard in-r" data-n="★">
          <div class="qmeta"><span class="chip">${AG.icon('heart')}Herzensthemen</span></div>
          <h2 class="qtext">Welche Themen sind dir besonders wichtig?</h2>
          <p class="muted">Wähle bis zu drei. Sie zählen beim Vergleich mit Parteien, Politikern und Staaten stärker. Du kannst auch keines wählen.</p>
          <div class="prio-grid">
            ${AG.AXES.map(a => `<button class="prio ${st.priorities.includes(a.id) ? 'on' : ''}" data-id="${a.id}" style="--c:${a.color}">
              <span class="pi">${AG.icon(a.iconL)}</span><span>${esc(a.name)}<small>${esc(a.left)} ↔ ${esc(a.right)}</small></span></button>`).join('')}
          </div>
          <div class="quiz-nav" style="margin-top:6px">
            <button class="btn btn-ghost btn-sm" id="pBack">${AG.icon('arrowLeft')} Zurück zu den Fragen</button>
            <button class="btn btn-gold" id="pGo">Ergebnis anzeigen ${AG.icon('sparkles')}</button>
          </div>
        </div>
      </div>`;
      main.querySelectorAll('.prio').forEach(b => b.addEventListener('click', () => {
        const id = b.dataset.id;
        if (st.priorities.includes(id)) st.priorities = st.priorities.filter(x => x !== id);
        else if (st.priorities.length < 3) st.priorities.push(id);
        else AG.ui.toast('Höchstens drei Herzensthemen', 'info');
        save();
        main.querySelectorAll('.prio').forEach(x => x.classList.toggle('on', st.priorities.includes(x.dataset.id)));
      }));
      main.querySelector('#pBack').addEventListener('click', () => { dir = 'l'; render(); });
      main.querySelector('#pGo').addEventListener('click', finish);
    };
    draw();
    window.scrollTo({ top: 0 });
  }

  /* Schritt 3: Analyse-Animation, dann Ergebnis speichern */
  function finish() {
    const answeredCount = qs.filter(q => q.id in st.answers).length;
    if (answeredCount < Math.ceil(qs.length * 0.4)) {
      AG.ui.toast('Bitte beantworte mindestens 40 % der Fragen', 'info');
      return;
    }
    const answers = {};
    qs.forEach(q => { if (q.id in st.answers) answers[q.id] = st.answers[q.id]; });
    const r = AG.engine.computeScores(answers, st.important);
    const user = { scores: r.scores, conf: r.conf, priorities: st.priorities, mode };
    const code = AG.engine.encode(user);
    const top = AG.engine.rank(AG.IDEOLOGIES, user)[0];
    const rec = { code, answers, important: st.important, priorities: st.priorities, mode, date: Date.now(), ideology: top.e.name };
    store.set('last', rec);
    const hist = store.get('history', []).filter(h => h.code !== code);
    hist.unshift({ code, date: rec.date, ideology: top.e.name, mode });
    store.set('history', hist.slice(0, 12));
    store.del('progress');

    const steps = ['Antworten werden gewichtet …', '12 Achsen werden berechnet …', `Vergleich mit ${AG.ALL.length} Profilen …`, 'Dein Porträt entsteht …'];
    main.innerHTML = `<div class="view analyzing"><div>
      <svg viewBox="0 0 160 160"><g class="spin">${AG.AXES.map((a, i) => {
        const ang = (i / 12) * Math.PI * 2;
        return `<circle cx="${80 + Math.cos(ang) * 60}" cy="${80 + Math.sin(ang) * 60}" r="6" fill="${a.color}"><animate attributeName="r" values="3;7;3" dur="1.2s" begin="${i * 0.1}s" repeatCount="indefinite"/></circle>`;
      }).join('')}</g><circle cx="80" cy="80" r="22" fill="none" stroke="#e7c46b" stroke-width="2" stroke-dasharray="4 5"/></svg>
      <h2>Wir analysieren dein Profil</h2><p id="anaTxt">${steps[0]}</p></div></div>`;
    window.scrollTo({ top: 0 });
    let k = 0;
    const t = setInterval(() => {
      k++;
      const p = document.getElementById('anaTxt');
      if (p && steps[k]) p.textContent = steps[k];
      if (k >= steps.length) { clearInterval(t); location.hash = '#/ergebnis?' + code; }
    }, 520);
  }

  /* Tastatur */
  function onKey(e) {
    if (!document.body.contains(main.querySelector('.answers'))) return;
    if (e.target.matches('input, textarea')) return;
    if (e.key >= '1' && e.key <= '5') answer(AG.ANSWERS[+e.key - 1].v);
    else if (e.key === 'ArrowLeft') back();
    else if (e.key === 'ArrowRight') next();
    else if (e.key.toLowerCase() === 'w') toggleImp();
    else if (e.key.toLowerCase() === 'h') toggleHint();
  }
  document.addEventListener('keydown', onKey);
  AG.views._cleanup = () => document.removeEventListener('keydown', onKey);

  if (params.priorities) priorities(); else render();
};

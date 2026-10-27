/* Agora – Startseite */
window.AG = window.AG || {};
AG.views = AG.views || {};

AG.views.home = function (main) {
  const { esc, store } = AG.ui;
  const total = AG.ALL.length;
  const progress = store.get('progress', null);
  const last = store.get('last', null);

  /* Orbit-Grafik: 12 Achsen als Knoten auf einem Ring */
  const nodes = AG.AXES.map((a, i) => {
    const ang = -Math.PI / 2 + (i / 12) * Math.PI * 2;
    return { a, x: 250 + Math.cos(ang) * 190, y: 250 + Math.sin(ang) * 190, lx: 50 + Math.cos(ang) * 47, ly: 50 + Math.sin(ang) * 47 };
  });
  const dots = Array.from({ length: 46 }, (_, i) => {
    const ang = (i / 46) * Math.PI * 2;
    return `<circle cx="${250 + Math.cos(ang) * 120}" cy="${250 + Math.sin(ang) * 120}" r="${i % 5 === 0 ? 2.4 : 1.4}" fill="#e7c46b" fill-opacity="${i % 5 === 0 ? 0.8 : 0.35}"/>`;
  }).join('');
  const orbit = `
    <div class="orbit">
      <svg viewBox="0 0 500 500" aria-hidden="true">
        <defs><radialGradient id="og" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#e7c46b" stop-opacity=".16"/><stop offset="1" stop-color="#e7c46b" stop-opacity="0"/></radialGradient></defs>
        <circle cx="250" cy="250" r="230" fill="url(#og)"/>
        <circle cx="250" cy="250" r="190" fill="none" stroke="rgba(255,255,255,.08)"/>
        <circle cx="250" cy="250" r="150" fill="none" stroke="rgba(255,255,255,.05)" stroke-dasharray="2 6"/>
        <g class="orb2">${dots}</g>
        <g class="orb1">
          ${nodes.map((n, i) => `<line x1="250" y1="250" x2="${n.x}" y2="${n.y}" stroke="${n.a.color}" stroke-opacity=".12"/>`).join('')}
          ${nodes.map(n => `<circle class="node" cx="${n.x}" cy="${n.y}" r="9" fill="${n.a.color}"><animate attributeName="r" values="7;10;7" dur="${4 + (n.x % 3)}s" repeatCount="indefinite"/></circle>
            <circle cx="${n.x}" cy="${n.y}" r="18" fill="${n.a.color}" fill-opacity=".12"/>`).join('')}
        </g>
      </svg>
      <div class="orbit-center"><div><div class="big">12</div><div class="small">Achsen · ein Europa</div></div></div>
      ${nodes.filter((_, i) => i % 2 === 0).map((n, k) => `<span class="orbit-label" style="left:${n.lx}%;top:${n.ly}%;animation-delay:${k * 0.6}s">${esc(n.a.name)}</span>`).join('')}
    </div>`;

  const modeCard = (key, rec) => {
    const m = AG.MODES[key];
    const n = AG.engine.questionsFor(key).length;
    const descs = {
      kurz: 'Ein schneller erster Eindruck deiner Haltung – ideal für zwischendurch.',
      standard: 'Die empfohlene Version: genug Fragen für ein belastbares Profil auf allen 12 Achsen.',
      praezise: 'Jede Achse wird mehrfach gemessen. Für alle, die es ganz genau wissen wollen.'
    };
    return `<a class="mode ${rec ? 'rec' : ''}" href="#/test/${key}">
      ${rec ? '<span class="tag">Empfohlen</span>' : ''}
      <span class="lvl">${esc(m.name)}</span>
      <div class="count">${n}<small>Fragen</small></div>
      <div class="bars">${[1, 2, 3].map(i => `<i class="${i <= m.tier ? 'on' : ''}"></i>`).join('')}</div>
      <div class="prec">${esc(m.precision)}</div>
      <p class="desc">${descs[key]}</p>
      <div class="go"><span>${AG.icon('clock')} ca. ${m.minutes} Minuten</span>${AG.icon('arrowRight')}</div>
    </a>`;
  };

  const features = [
    ['sparkles', 'Deine Ideologie', `Aus ${AG.IDEOLOGIES.length} Strömungen – von Christdemokratie bis Anarchosyndikalismus – die, die dich am besten beschreibt.`],
    ['flag', 'Deine Partei', 'Wähle dein Land und sieh, welche Parteien zu dir passen – in Prozent, mit EU-Fraktion.'],
    ['users', 'Politiker & Denker', 'Welche Politikerinnen, Staatsleute und Philosophen Europas denken wie du?'],
    ['map', 'Dein Staat', 'Welcher heutige europäische Staat kommt deinen Vorstellungen am nächsten?'],
    ['hourglass', 'Historische Staaten', 'Von der Athenischen Demokratie bis zur Bonner Republik: Wo hättest du dich zu Hause gefühlt?'],
    ['stars', 'EU-Parlament', 'Welche Fraktion im Europäischen Parlament vertritt deine Positionen am ehesten?'],
    ['compass', 'Kompass & Netz', 'Zwei politische Kompasse und ein Netzdiagramm aller 12 Achsen.'],
    ['download', 'Teilen & Speichern', 'Als Bild, PDF oder Datei herunterladen, per Link teilen und mit Freunden vergleichen.']
  ];

  const faqs = [
    ['Warum ein eigener Test für Europa?', 'Viele Politiktests sind auf die USA zugeschnitten. Agora misst, was in Europa wirklich umstritten ist: EU-Integration, Migration, Russland und NATO, Laizität, Regionalismus, Monarchie oder Klimapolitik – und vergleicht dich mit europäischen Parteien, Politikern und Staaten.'],
    ['Werden meine Antworten gespeichert oder übertragen?', 'Nein. Die gesamte Auswertung läuft in deinem Browser. Antworten werden nur lokal auf deinem Gerät gespeichert, damit du später weitermachen kannst. Es gibt kein Konto, kein Tracking und keinen Server, der deine Antworten sieht.'],
    ['Wie wird mein Ergebnis berechnet?', 'Jede Aussage wirkt auf eine oder mehrere der 12 Achsen. Aus deinen Antworten entsteht ein Profil mit 12 Werten zwischen −100 und +100. Dieses wird mit jedem Profil der Datenbank verglichen – Achsen mit mehr Antworten und deine Herzensthemen zählen dabei stärker. Details stehen auf der Seite „Methodik".'],
    ['Wie genau sind die Profile von Parteien und Politikern?', 'Die Positionen sind redaktionelle Einschätzungen auf Basis von Programmen, Abstimmungsverhalten und öffentlichen Aussagen. Sie sind sorgfältig, aber nicht unfehlbar – betrachte die Ergebnisse als Orientierung, nicht als Wahlempfehlung.'],
    ['Was bedeutet „Wichtig" bei einer Frage?', 'Markierst du eine Frage als wichtig, zählt deine Antwort darauf 1,6-fach. Am Ende kannst du außerdem bis zu drei Herzensthemen wählen, die beim Vergleich mit Parteien und Politikern stärker gewichtet werden.'],
    ['Kann ich den Test wiederholen oder Antworten ändern?', 'Ja. Du kannst jederzeit zurückspringen, Fragen überspringen und nach dem Ergebnis deine Antworten bearbeiten. Frühere Ergebnisse findest du auf dieser Seite wieder.'],
    ['Ist der Test neutral?', 'Alle Aussagen sind so formuliert, dass Zustimmung mal in die eine, mal in die andere Richtung zeigt. Es gibt keine richtigen oder falschen Antworten – und kein Ergebnis ist „besser" als ein anderes.']
  ];

  main.innerHTML = `
  <div class="view">
    <section class="hero">
      <div class="wrap hero-grid">
        <div>
          <span class="eyebrow">Der europäische Politiktest</span>
          <h1>Wo stehst du <em>in Europa?</em></h1>
          <p class="lead">Zwölf Achsen statt links und rechts. Finde heraus, welche Ideologie dich beschreibt, welche Partei in deinem Land zu dir passt und welcher Staat – heute oder in der Geschichte – deinen Vorstellungen am nächsten kommt.</p>
          <div class="hero-cta">
            <a class="btn btn-gold" href="#modes" data-scroll>Test starten ${AG.icon('arrowRight')}</a>
            <a class="btn btn-ghost" href="#achsen" data-scroll>Die 12 Achsen</a>
          </div>
          <div class="hero-meta">
            <span>${AG.icon('heart')} Kostenlos</span>
            <span>${AG.icon('lock')} Anonym – alles bleibt im Browser</span>
            <span>${AG.icon('clock')} 4 bis 11 Minuten</span>
          </div>
          ${progress && progress.answers && Object.keys(progress.answers).length ? `
          <div class="resume">${AG.icon('refresh', 'gold')}<p>Du hast einen Test begonnen (${Object.keys(progress.answers).length} von ${AG.engine.questionsFor(progress.mode).length} Fragen, ${esc(AG.MODES[progress.mode].name)}).</p>
            <a class="btn btn-sm btn-gold" href="#/test/${progress.mode}">Fortsetzen</a></div>` : last ? `
          <div class="resume">${AG.icon('sparkles', 'gold')}<p>Dein letztes Ergebnis: <b>${esc(last.ideology || '')}</b> · ${new Date(last.date).toLocaleDateString('de-DE')}</p>
            <a class="btn btn-sm btn-gold" href="#/ergebnis?${last.code}">Ansehen</a></div>` : ''}
        </div>
        ${orbit}
      </div>
      <div class="wrap">
        <div class="stats">
          <div class="stat reveal"><b data-count="65">0</b><span>Aussagen zu Europas Streitfragen</span></div>
          <div class="stat reveal"><b data-count="12">0</b><span>unabhängige Achsen</span></div>
          <div class="stat reveal"><b data-count="${total}">0</b><span>Profile: Ideologien, Personen, Parteien, Staaten</span></div>
          <div class="stat reveal"><b data-count="${AG.COUNTRIES.length}">0</b><span>Länder mit Parteien-Ranking</span></div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        <div class="section-head reveal"><span class="eyebrow">Was du erfährst</span><h2>Ein vollständiges Porträt deiner Überzeugungen</h2>
          <p>Mehr als ein Punkt auf einer Karte: Agora zeigt dir, mit wem, wo und wie stark deine Ideen übereinstimmen.</p></div>
        <div class="grid features">
          ${features.map(f => `<div class="feature reveal"><div class="fi">${AG.icon(f[0])}</div><h3>${f[1]}</h3><p>${f[2]}</p></div>`).join('')}
        </div>
      </div>
    </section>

    <section class="section" id="achsen">
      <div class="wrap">
        <div class="section-head reveal"><span class="eyebrow">Die 12 Achsen</span><h2>Politik ist mehr als links und rechts</h2>
          <p>Jede Achse misst eine eigene Grundfrage der europäischen Politik. Zusammen ergeben sie dein persönliches Profil.</p></div>
        <div class="grid axes-grid">
          ${AG.AXES.map((a, i) => `<div class="axis-card reveal" style="--c:${a.color}">
            <span class="num">${String(i + 1).padStart(2, '0')}</span><h3>${esc(a.name)}</h3>
            <div class="poles"><span>${AG.icon(a.iconL)}${esc(a.left)}</span><i></i><span>${esc(a.right)}${AG.icon(a.iconR)}</span></div>
            <p>${esc(a.desc)}</p></div>`).join('')}
        </div>
      </div>
    </section>

    <section class="section" id="modes">
      <div class="wrap">
        <div class="section-head reveal"><span class="eyebrow">Wähle die Tiefe</span><h2>Wie genau soll dein Ergebnis werden?</h2>
          <p>Alle Versionen nutzen dieselben 12 Achsen und dieselbe Datenbank. Mehr Fragen bedeuten ein präziseres Profil.</p></div>
        <div class="grid modes">${modeCard('kurz')}${modeCard('standard', true)}${modeCard('praezise')}</div>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        <div class="section-head reveal"><span class="eyebrow">Häufige Fragen</span><h2>Gut zu wissen</h2></div>
        <div class="faq reveal">
          ${faqs.map(f => `<details><summary>${esc(f[0])}${AG.icon('chevronDown')}</summary><p>${esc(f[1])}</p></details>`).join('')}
        </div>
      </div>
    </section>
  </div>`;

  main.querySelectorAll('[data-scroll]').forEach(a => a.addEventListener('click', ev => {
    ev.preventDefault();
    const t = document.querySelector(a.getAttribute('href'));
    if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }));
  AG.ui.reveal(main);
  const so = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { AG.ui.countUp(e.target, +e.target.dataset.count); so.unobserve(e.target); }
  }));
  main.querySelectorAll('[data-count]').forEach(el => so.observe(el));
};

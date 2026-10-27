/* Agora – Berechnungslogik
   1. Antworten → Achsenwerte (-100…+100) und Aussagekraft je Achse (0…1)
   2. Gewichteter Abstand zu jedem Profil der Datenbank → Übereinstimmung in %
   3. Ableitungen: Etiketten, Werte-Profil, Besonderheiten, Ranglisten */
window.AG = window.AG || {};

AG.engine = (function () {
  const AX = AG.AXES;
  const N = AX.length;
  const IMPORTANT = 1.6;   // Gewicht einer als "wichtig" markierten Frage
  const PRIORITY = 1.5;    // Gewicht einer als Herzensthema gewählten Achse
  const SATURATION = 4;    // ab dieser Summe an Fragegewicht gilt eine Achse als voll aussagekräftig

  function questionsFor(mode) {
    const tier = (AG.MODES[mode] || AG.MODES.standard).tier;
    return AG.QUESTIONS.filter(q => q.t <= tier);
  }

  /* answers: { qid: -1 … 1 } (fehlend = übersprungen), important: { qid: true } */
  function computeScores(answers, important) {
    const num = new Array(N).fill(0);
    const den = new Array(N).fill(0);
    AG.QUESTIONS.forEach(q => {
      if (!(q.id in answers)) return;
      const v = answers[q.id];
      const f = important && important[q.id] ? IMPORTANT : 1;
      for (const key in q.fx) {
        const i = AG.AXIS_INDEX[key];
        const w = q.fx[key];
        num[i] += v * w * f;
        den[i] += Math.abs(w) * f;
      }
    });
    const scores = num.map((n, i) => (den[i] ? Math.round((n / den[i]) * 100) : 0));
    const conf = den.map(d => Math.min(1, d / SATURATION));
    return { scores, conf };
  }

  /* Gewichte je Achse: Aussagekraft × Herzensthema */
  function axisWeights(user) {
    return AX.map((a, i) => {
      let w = user.conf ? user.conf[i] : 1;
      if (user.priorities && user.priorities.includes(a.id)) w *= PRIORITY;
      return w;
    });
  }

  /* Gewichteter quadratischer Mittelwert der Differenzen (0 … 200) */
  function distance(u, v, weights, axisFilter) {
    let s = 0, ws = 0;
    for (let i = 0; i < N; i++) {
      if (v[i] === null || v[i] === undefined) continue;
      if (axisFilter && !axisFilter.includes(AX[i].id)) continue;
      const w = weights ? weights[i] : 1;
      if (!w) continue;
      const d = u[i] - v[i];
      s += w * d * d;
      ws += w;
    }
    return ws ? Math.sqrt(s / ws) : 200;
  }

  /* Abstand → Übereinstimmung. Glockenkurve: 0 → 100 %, 40 → 80 %, 85 → 37 % */
  function matchPct(d) {
    return Math.max(0, Math.min(100, Math.round(100 * Math.exp(-Math.pow(d / 85, 2)))));
  }

  function rank(list, user, axisFilter) {
    const w = axisWeights(user);
    return list
      .map(e => {
        const d = distance(user.scores, e.v, w, axisFilter);
        return { e, d, pct: matchPct(d) };
      })
      .sort((a, b) => a.d - b.d);
  }

  /* Vergleich zweier beliebiger Profile (ohne Nutzergewichtung) */
  function compare(a, b) {
    return matchPct(distance(a, b, null));
  }

  /* -------- Etiketten -------- */
  function bandIndex(score) {
    if (score < -70) return 0;
    if (score < -40) return 1;
    if (score < -15) return 2;
    if (score <= 15) return 3;
    if (score <= 40) return 4;
    if (score <= 70) return 5;
    return 6;
  }
  function bandLabel(axisIdx, score) { return AX[axisIdx].bands[bandIndex(score)]; }
  function intensity(score) {
    const a = Math.abs(score);
    if (a <= 15) return 'Ausgeglichen';
    if (a <= 40) return 'Leicht';
    if (a <= 70) return 'Deutlich';
    return 'Stark';
  }
  /* Prozent-Darstellung wie "68 % Markt" */
  function poleSplit(score) {
    const right = Math.round((score + 100) / 2);
    return { left: 100 - right, right };
  }

  /* -------- Werte-Profil (8 Bereiche) -------- */
  function values(s) {
    const [econ, auth, eu, cult, nat, mig, eco, rel, geo, reg, dem, chg] = s;
    const out = [];

    let st;
    if (auth > 55 && dem > 30) st = 'Autoritärer Etatismus';
    else if (auth > 55 && dem < -30) st = 'Plebiszitärer Autoritarismus';
    else if (auth > 55) st = 'Starker Staat';
    else if (auth < -55 && dem < -30) st = 'Basisdemokratie';
    else if (auth < -55) st = 'Bürgerliche Freiheit';
    else if (dem > 50) st = 'Expertenherrschaft';
    else if (dem < -50) st = 'Direkte Demokratie';
    else if (auth > 20) st = 'Wehrhafte Demokratie';
    else st = 'Liberale Demokratie';
    out.push({ k: 'Staat & Macht', v: st });

    let ec;
    if (econ < -65) ec = eco < -40 ? 'Ökosozialismus' : 'Sozialismus';
    else if (econ < -25) ec = eco < -40 ? 'Grüner Sozialstaat' : 'Starker Sozialstaat';
    else if (econ <= 25) ec = eco < -40 ? 'Ökosoziale Marktwirtschaft' : 'Soziale Marktwirtschaft';
    else if (econ <= 65) ec = eco < -40 ? 'Grüne Marktwirtschaft' : 'Marktwirtschaft';
    else ec = 'Laissez-faire-Kapitalismus';
    out.push({ k: 'Wirtschaft', v: ec });

    const euL = eu < -60 ? 'Europäischer Bundesstaat' : eu < -20 ? 'Vertiefte Integration' : eu <= 20 ? 'Pragmatische EU' : eu <= 60 ? 'Europa der Vaterländer' : 'EU-Austritt';
    out.push({ k: 'Europa', v: euL });

    let so;
    if (cult < -50) so = 'Progressivismus';
    else if (cult < -15) so = 'Gesellschaftsliberal';
    else if (cult <= 15) so = 'Gemäßigt';
    else if (cult <= 50) so = rel > 40 ? 'Christlich-konservativ' : 'Wertkonservativ';
    else so = rel > 50 ? 'Religiöser Traditionalismus' : 'Traditionalismus';
    out.push({ k: 'Gesellschaft', v: so });

    let mi;
    if (mig < -50 && nat < -30) mi = 'Kosmopolitismus';
    else if (mig < -20) mi = 'Offene Gesellschaft';
    else if (mig > 60 && nat > 60) mi = 'Nationale Abschottung';
    else if (mig > 30 && nat > 30) mi = 'Assimilationismus';
    else if (mig > 30) mi = 'Gesteuerte Zuwanderung';
    else mi = 'Ausgewogene Migration';
    out.push({ k: 'Migration & Identität', v: mi });

    const gL = geo < -60 ? 'Atlantizismus' : geo < -20 ? 'Westbindung' : geo <= 20 ? 'Europäische Autonomie' : geo <= 60 ? 'Neutralität' : 'Multipolarismus';
    out.push({ k: 'Außenpolitik', v: gL });

    const rL = reg < -60 ? 'Zentralismus' : reg < -20 ? 'Einheitsstaat' : reg <= 20 ? 'Ausgewogener Staatsaufbau' : reg <= 60 ? 'Föderalismus' : 'Regionalismus';
    out.push({ k: 'Staatsaufbau', v: rL });

    const cL = chg < -60 ? 'Revolution' : chg < -20 ? 'Radikaler Wandel' : chg <= 20 ? 'Pragmatismus' : chg <= 60 ? 'Reformismus' : 'Bewahrung & Stabilität';
    out.push({ k: 'Methode', v: cL });
    return out;
  }

  /* -------- Was dich auszeichnet -------- */
  function standout(s) {
    const ideos = AG.IDEOLOGIES;
    const stats = AX.map((a, i) => {
      const vals = ideos.map(x => x.v[i]).filter(x => x !== null);
      const below = vals.filter(x => x < s[i]).length;
      const above = vals.filter(x => x > s[i]).length;
      const pct = (below + (vals.length - below - above) / 2) / vals.length;
      const sorted = vals.slice().sort((x, y) => x - y);
      const median = sorted[Math.floor(sorted.length / 2)];
      /* Anteil der Ideologien, die weniger stark zum Pol des Nutzers neigen */
      const lessExtreme = (s[i] >= 0 ? below : above) / vals.length;
      return { i, pct, median, lessExtreme, dev: Math.abs(pct - 0.5) };
    });
    const unusual = stats.slice().sort((a, b) => b.dev - a.dev)[0];
    const typical = stats.slice().sort((a, b) => Math.abs(s[a.i] - a.median) - Math.abs(s[b.i] - b.median))[0];
    return { unusual, typical, stats };
  }

  /* Radikalität: mittlere Auslenkung */
  function radicalism(s) {
    const m = s.reduce((a, b) => a + Math.abs(b), 0) / s.length;
    let label = 'Gemäßigt';
    if (m > 65) label = 'Sehr radikal';
    else if (m > 45) label = 'Ausgeprägt';
    else if (m > 25) label = 'Profiliert';
    return { value: Math.round(m), label };
  }

  /* Klassische Links-rechts-Einordnung (für den Kompass-Text) */
  function spectrumText(s) {
    const [econ, auth, , cult] = s;
    const lr = econ * 0.6 + cult * 0.4;
    let side = 'Mitte';
    if (lr < -55) side = 'Linksaußen';
    else if (lr < -25) side = 'Links';
    else if (lr < -8) side = 'Mitte-links';
    else if (lr <= 8) side = 'Mitte';
    else if (lr <= 25) side = 'Mitte-rechts';
    else if (lr <= 55) side = 'Rechts';
    else side = 'Rechtsaußen';
    const ax = auth > 40 ? 'autoritär' : auth < -40 ? 'freiheitlich' : 'gemäßigt';
    return { side, ax };
  }

  /* Kurzporträt in ganzen Sätzen */
  function portrait(s) {
    const idx = s.map((v, i) => ({ v, i })).sort((a, b) => Math.abs(b.v) - Math.abs(a.v));
    const strongest = idx.slice(0, 3).filter(x => Math.abs(x.v) > 15);
    const middle = idx.filter(x => Math.abs(x.v) <= 15).map(x => AX[x.i].name);
    const parts = strongest.map(x => {
      const a = AX[x.i];
      const pole = x.v < 0 ? a.left : a.right;
      return `${intensity(x.v).toLowerCase()} in Richtung „${pole}" (${a.name})`;
    });
    let txt = '';
    if (parts.length) txt += `Deine stärksten Überzeugungen: Du tendierst ${parts.join(', ')}. `;
    if (middle.length) txt += `Ausgeglichen bist du bei: ${middle.slice(0, 4).join(', ')}.`;
    return txt.trim();
  }

  /* -------- Ergebnis-Link (kompakt kodiert) -------- */
  function encode(user) {
    const s = user.scores.map(v => (v + 100).toString(36).padStart(2, '0')).join('');
    const c = user.conf.map(v => Math.round(v * 9)).join('');
    const p = (user.priorities || []).map(id => AG.AXIS_INDEX[id].toString(16)).join('');
    return `s=${s}&c=${c}` + (p ? `&p=${p}` : '') + (user.mode ? `&m=${user.mode}` : '');
  }
  function decode(str) {
    const q = new URLSearchParams(str);
    const s = q.get('s');
    if (!s || s.length !== N * 2) return null;
    const scores = [];
    for (let i = 0; i < N; i++) {
      const v = parseInt(s.substr(i * 2, 2), 36) - 100;
      if (isNaN(v) || v < -100 || v > 100) return null;
      scores.push(v);
    }
    const c = q.get('c') || '';
    const conf = scores.map((_, i) => (c[i] ? parseInt(c[i], 10) / 9 : 1));
    const p = q.get('p') || '';
    const priorities = p.split('').map(h => AX[parseInt(h, 16)]).filter(Boolean).map(a => a.id);
    return { scores, conf, priorities, mode: q.get('m') || null };
  }

  return { questionsFor, computeScores, axisWeights, distance, matchPct, rank, compare, bandIndex, bandLabel,
    intensity, poleSplit, values, standout, radicalism, spectrumText, portrait, encode, decode };
})();

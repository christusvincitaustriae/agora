/* Agora – Export: Ergebniskarte (PNG), PDF (Druck), Text, JSON */
window.AG = window.AG || {};

AG.exporter = (function () {
  const dateStr = () => new Date().toLocaleDateString('de-DE', { day: '2-digit', month: 'long', year: 'numeric' });

  function topEntries(d) {
    const pr = d.partyRank(d.country);
    return [
      ['Partei in ' + AG.ui.countryName(d.country), pr[0]],
      ['EU-Fraktion', d.R.groups[0]],
      ['Politiker/in', d.R.polNow[0]],
      ['Staat heute', d.R.states[0]],
      ['Historischer Staat', d.R.hist[0]],
      ['Denker/in', d.R.thinkers[0]]
    ].filter(x => x[1]);
  }

  function wrap(ctx, text, maxW) {
    const words = text.split(' ');
    const lines = [];
    let line = '';
    words.forEach(w => {
      const t = line ? line + ' ' + w : w;
      if (ctx.measureText(t).width > maxW && line) { lines.push(line); line = w; } else line = t;
    });
    if (line) lines.push(line);
    return lines;
  }
  function rr(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  }

  async function png(d) {
    try { await document.fonts.ready; } catch (e) { }
    const W = 1080, H = 1350;
    const c = document.createElement('canvas');
    c.width = W; c.height = H;
    const ctx = c.getContext('2d');
    const fam = AG.FAMILIES[d.top.e.fam];
    const serif = '"Fraunces", Georgia, serif';
    const sans = '"Manrope", "Segoe UI", sans-serif';

    /* Hintergrund */
    ctx.fillStyle = '#0a0d13'; ctx.fillRect(0, 0, W, H);
    let g = ctx.createRadialGradient(150, 120, 0, 150, 120, 760);
    g.addColorStop(0, fam.color + '55'); g.addColorStop(1, 'rgba(10,13,19,0)');
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
    g = ctx.createRadialGradient(W, H, 0, W, H, 700);
    g.addColorStop(0, 'rgba(231,196,107,0.18)'); g.addColorStop(1, 'rgba(10,13,19,0)');
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);

    /* Kopf: Logo */
    AG.AXES.forEach((a, i) => {
      const ang = -Math.PI / 2 + (i / 12) * Math.PI * 2;
      ctx.beginPath(); ctx.arc(92 + Math.cos(ang) * 20, 92 + Math.sin(ang) * 20, 4.2, 0, Math.PI * 2);
      ctx.fillStyle = a.color; ctx.fill();
    });
    ctx.fillStyle = '#ece8e1'; ctx.font = `500 40px ${serif}`; ctx.fillText('Agora', 132, 106);
    ctx.fillStyle = '#8b93a3'; ctx.font = `700 17px ${sans}`;
    ctx.textAlign = 'right'; ctx.fillText('DER EUROPÄISCHE POLITIKTEST', W - 70, 100); ctx.textAlign = 'left';

    /* Ideologie */
    ctx.fillStyle = fam.color; ctx.font = `800 19px ${sans}`;
    ctx.fillText(fam.name.toUpperCase(), 70, 200);
    ctx.fillStyle = '#ece8e1';
    let fs = 78;
    ctx.font = `500 ${fs}px ${serif}`;
    while (ctx.measureText(d.top.e.name).width > W - 330 && fs > 44) { fs -= 4; ctx.font = `500 ${fs}px ${serif}`; }
    const nameLines = wrap(ctx, d.top.e.name, W - 330);
    nameLines.forEach((l, i) => ctx.fillText(l, 70, 280 + i * fs * 1.05));
    let y = 280 + (nameLines.length - 1) * fs * 1.05;

    /* Ring */
    const cx = W - 160, cy = 245, r = 80;
    ctx.lineWidth = 14; ctx.strokeStyle = 'rgba(255,255,255,0.08)';
    ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.stroke();
    ctx.strokeStyle = fam.color; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.arc(cx, cy, r, -Math.PI / 2, -Math.PI / 2 + (Math.PI * 2 * d.top.pct) / 100); ctx.stroke();
    ctx.fillStyle = '#ece8e1'; ctx.font = `500 48px ${serif}`; ctx.textAlign = 'center';
    ctx.fillText(d.top.pct + '%', cx, cy + 16);
    ctx.fillStyle = '#8b93a3'; ctx.font = `700 14px ${sans}`; ctx.fillText('ÜBEREINSTIMMUNG', cx, cy + r + 40);
    ctx.textAlign = 'left';

    /* Zitat */
    y += 60;
    ctx.fillStyle = fam.color; ctx.fillRect(70, y - 26, 4, 0);
    ctx.font = `italic 400 27px ${serif}`; ctx.fillStyle = '#c3c7cf';
    const ql = wrap(ctx, '„' + d.top.e.quote + '"', W - 160).slice(0, 3);
    ctx.fillStyle = fam.color; ctx.fillRect(70, y - 28, 4, ql.length * 38);
    ctx.fillStyle = '#c3c7cf';
    ql.forEach((l, i) => ctx.fillText(l, 92, y + i * 38));
    y += ql.length * 38 + 30;

    ctx.fillStyle = '#8b93a3'; ctx.font = `600 20px ${sans}`;
    ctx.fillText(`${d.spec.side} · ${d.spec.ax} · Profilschärfe ${d.rad.label.toLowerCase()}`, 70, y);
    y += 46;

    /* Achsen */
    const colW = (W - 140 - 50) / 2;
    AG.AXES.forEach((a, i) => {
      const col = i % 2, row = Math.floor(i / 2);
      const x = 70 + col * (colW + 50), yy = y + row * 74;
      const v = d.user.scores[i];
      ctx.fillStyle = '#ece8e1'; ctx.font = `700 19px ${sans}`; ctx.fillText(a.name, x, yy);
      const sp = AG.engine.poleSplit(v);
      const lab = Math.abs(v) <= 15 ? 'Ausgeglichen' : `${v < 0 ? sp.left : sp.right}% ${v < 0 ? a.left : a.right}`;
      ctx.fillStyle = Math.abs(v) <= 15 ? '#8b93a3' : a.color; ctx.font = `700 16px ${sans}`; ctx.textAlign = 'right';
      ctx.fillText(lab, x + colW, yy); ctx.textAlign = 'left';
      rr(ctx, x, yy + 16, colW, 9, 4.5); ctx.fillStyle = 'rgba(255,255,255,0.07)'; ctx.fill();
      const l = v < 0 ? (50 + v / 2) / 100 : 0.5, w = Math.abs(v) / 200;
      if (w > 0.005) { rr(ctx, x + colW * l, yy + 16, colW * w, 9, 4.5); ctx.fillStyle = a.color; ctx.fill(); }
      ctx.fillStyle = 'rgba(255,255,255,0.25)'; ctx.fillRect(x + colW / 2, yy + 12, 1.5, 17);
      ctx.beginPath(); ctx.arc(x + colW * ((v + 100) / 200), yy + 20.5, 9, 0, Math.PI * 2);
      ctx.fillStyle = '#0a0d13'; ctx.fill(); ctx.lineWidth = 4; ctx.strokeStyle = a.color; ctx.stroke();
    });
    y += 6 * 74 + 10;

    /* Spitzenreiter */
    const tops = topEntries(d);
    const tw = (W - 140 - 2 * 16) / 3, th = 104;
    tops.forEach(([k, x], i) => {
      const col = i % 3, row = Math.floor(i / 3);
      const tx = 70 + col * (tw + 16), ty = y + row * (th + 16);
      rr(ctx, tx, ty, tw, th, 18); ctx.fillStyle = 'rgba(255,255,255,0.04)'; ctx.fill();
      ctx.strokeStyle = 'rgba(255,255,255,0.08)'; ctx.lineWidth = 1.5; ctx.stroke();
      ctx.fillStyle = '#8b93a3'; ctx.font = `700 13px ${sans}`; ctx.fillText(k.toUpperCase(), tx + 20, ty + 32);
      ctx.fillStyle = '#ece8e1'; ctx.font = `600 21px ${sans}`;
      let name = x.e.short && x.e.type === 'party' && x.e.name.length > 22 ? x.e.short : x.e.name;
      while (ctx.measureText(name).width > tw - 100 && name.length > 4) name = name.slice(0, -2);
      if (name !== (x.e.short && x.e.type === 'party' && x.e.name.length > 22 ? x.e.short : x.e.name)) name += '…';
      ctx.fillText(name, tx + 20, ty + 70);
      ctx.fillStyle = '#e7c46b'; ctx.font = `500 26px ${serif}`; ctx.textAlign = 'right';
      ctx.fillText(x.pct + '%', tx + tw - 20, ty + 70); ctx.textAlign = 'left';
    });

    /* Fuß */
    ctx.fillStyle = '#5d6575'; ctx.font = `600 16px ${sans}`;
    ctx.fillText(`${dateStr()} · ${AG.MODES[d.user.mode] ? AG.MODES[d.user.mode].name + '-Test' : 'Agora'} · 12 Achsen`, 70, H - 56);
    ctx.textAlign = 'right'; ctx.fillText('Mach den Test: Agora – Wo stehst du in Europa?', W - 70, H - 56); ctx.textAlign = 'left';

    c.toBlob(b => { AG.ui.download('agora-ergebnis.png', b); AG.ui.toast('Ergebniskarte gespeichert'); }, 'image/png');
  }

  function pdf() {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
    document.querySelectorAll('[data-pane]').forEach(el => (el.hidden = false));
    AG.ui.toast('Im Druckdialog „Als PDF speichern" wählen', 'info');
    setTimeout(() => window.print(), 400);
  }

  function text(d) {
    const L = [];
    const line = '─'.repeat(56);
    L.push('AGORA – DER EUROPÄISCHE POLITIKTEST', 'Ergebnis vom ' + dateStr(), line, '');
    L.push('IDEOLOGIE: ' + d.top.e.name + ` (${d.top.pct} % Übereinstimmung)`);
    L.push('Familie: ' + AG.FAMILIES[d.top.e.fam].name);
    L.push('„' + d.top.e.quote + '"', '', d.top.e.desc, '');
    L.push('Einordnung: ' + d.spec.side + ', ' + d.spec.ax + ' · Profilschärfe: ' + d.rad.label + ` (${d.rad.value}/100)`, '');
    L.push('DIE 12 ACHSEN', line);
    AG.AXES.forEach((a, i) => {
      const v = d.user.scores[i];
      const sp = AG.engine.poleSplit(v);
      const pos = Math.round((v + 100) / 200 * 20);
      const bar = '·'.repeat(pos) + '●' + '·'.repeat(20 - pos);
      L.push(`${a.name.padEnd(14)} ${a.left.padStart(12)} [${bar}] ${a.right.padEnd(14)} ${Math.abs(v) <= 15 ? 'ausgeglichen' : (v < 0 ? sp.left : sp.right) + ' % ' + (v < 0 ? a.left : a.right)}`);
    });
    L.push('', 'DEINE WERTE', line);
    d.values.forEach(v => L.push(`${v.k.padEnd(24)} ${v.v}`));
    L.push('', 'SPITZENREITER', line);
    topEntries(d).forEach(([k, x]) => L.push(`${k.padEnd(26)} ${x.e.name} – ${x.pct} %`));
    L.push('', 'KOMPATIBLE IDEOLOGIEN', line);
    d.R.ideo.slice(1, 8).forEach((x, i) => L.push(`${i + 2}. ${x.e.name} – ${x.pct} %`));
    L.push('', 'GEGENSÄTZE: ' + d.R.ideo.slice(-3).reverse().map(x => x.e.name).join(', '));
    L.push('', 'PARTEIEN IN ' + AG.ui.countryName(d.country).toUpperCase(), line);
    d.partyRank(d.country).forEach((x, i) => L.push(`${i + 1}. ${x.e.name}${x.e.short ? ' (' + x.e.short + ')' : ''} – ${x.pct} %`));
    L.push('', 'POLITIKER EUROPAS', line);
    d.R.polNow.slice(0, 8).forEach((x, i) => L.push(`${i + 1}. ${x.e.name} (${AG.ui.countryName(x.e.cc)}) – ${x.pct} %`));
    L.push('', 'STAATEN HEUTE', line);
    d.R.states.slice(0, 5).forEach((x, i) => L.push(`${i + 1}. ${x.e.name} – ${x.pct} %`));
    L.push('', 'HISTORISCHE STAATEN', line);
    d.R.hist.slice(0, 5).forEach((x, i) => L.push(`${i + 1}. ${x.e.name} (${x.e.period}) – ${x.pct} %`));
    L.push('', line, 'Ergebnis-Link: ' + location.href.split('#')[0] + '#/ergebnis?' + d.code);
    L.push('Hinweis: Die Profile von Parteien, Personen und Staaten sind redaktionelle Einschätzungen und keine Wahlempfehlung.');
    AG.ui.download('agora-zusammenfassung.txt', new Blob(['﻿' + L.join('\r\n')], { type: 'text/plain;charset=utf-8' }));
    AG.ui.toast('Zusammenfassung gespeichert');
  }

  function json(d) {
    const pick = list => list.slice(0, 15).map(x => ({ id: x.e.id, name: x.e.name, match: x.pct }));
    const out = {
      app: 'Agora – Der europäische Politiktest', date: new Date().toISOString(), mode: d.user.mode,
      axes: AG.AXES.map((a, i) => ({ id: a.id, name: a.name, left: a.left, right: a.right, score: d.user.scores[i], confidence: +d.user.conf[i].toFixed(2), label: AG.engine.bandLabel(i, d.user.scores[i]) })),
      priorities: d.user.priorities,
      ideology: { name: d.top.e.name, match: d.top.pct },
      values: d.values,
      rankings: {
        ideologies: pick(d.R.ideo), politicians: pick(d.R.polNow), historical: pick(d.R.polHist), thinkers: pick(d.R.thinkers),
        partiesCountry: pick(d.partyRank(d.country)), partiesEurope: pick(d.R.parties), epGroups: pick(d.R.groups),
        states: pick(d.R.states), historicalStates: pick(d.R.hist)
      },
      answers: d.own && d.last ? AG.QUESTIONS.filter(q => q.id in d.last.answers).map(q => ({ id: q.id, text: q.text, answer: d.last.answers[q.id], important: !!(d.last.important || {})[q.id] })) : undefined,
      link: location.href.split('#')[0] + '#/ergebnis?' + d.code
    };
    AG.ui.download('agora-ergebnis.json', new Blob([JSON.stringify(out, null, 2)], { type: 'application/json' }));
    AG.ui.toast('Rohdaten gespeichert');
  }

  return { png, pdf, text, json };
})();

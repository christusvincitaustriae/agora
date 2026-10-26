/* Agora – Diagramme als SVG (Netzdiagramm, Kompass) */
window.AG = window.AG || {};

AG.charts = (function () {
  const esc = s => AG.ui.esc(s);

  /* Netzdiagramm: Mitte = linker Pol (-100), Rand = rechter Pol (+100) */
  function radar(series, opts = {}) {
    const S = 520, C = S / 2, R = 180, n = AG.AXES.length;
    const pt = (i, v) => {
      const a = -Math.PI / 2 + (i / n) * Math.PI * 2;
      const r = ((v + 100) / 200) * R;
      return [C + Math.cos(a) * r, C + Math.sin(a) * r];
    };
    let g = '';
    [-100, -50, 0, 50, 100].forEach(v => {
      const poly = AG.AXES.map((_, i) => pt(i, v).join(',')).join(' ');
      g += `<polygon points="${poly}" fill="none" stroke="rgba(255,255,255,${v === 0 ? 0.22 : 0.07})" ${v === 0 ? 'stroke-dasharray="4 4"' : ''}/>`;
    });
    AG.AXES.forEach((a, i) => {
      const [x, y] = pt(i, 100);
      g += `<line x1="${C}" y1="${C}" x2="${x}" y2="${y}" stroke="rgba(255,255,255,.07)"/>`;
      const [lx, ly] = pt(i, 122);
      const anchor = Math.abs(lx - C) < 12 ? 'middle' : lx < C ? 'end' : 'start';
      g += `<text x="${lx}" y="${ly}" text-anchor="${anchor}" font-size="18" font-weight="700" fill="${a.color}">${esc(a.name)}</text>`;
      g += `<text x="${lx}" y="${ly + 19}" text-anchor="${anchor}" font-size="13.5" fill="#8b93a3">${esc(a.left)} ↔ ${esc(a.right)}</text>`;
    });
    series.forEach((s, k) => {
      const pts = s.v.map((v, i) => pt(i, v === null ? 0 : v));
      const poly = pts.map(p => p.join(',')).join(' ');
      g += `<polygon class="rd-shape" points="${poly}" fill="${s.color}" fill-opacity="${series.length > 1 ? 0.1 : 0.18}" stroke="${s.color}" stroke-width="2.2" stroke-linejoin="round" style="animation-delay:${k * 0.15}s"/>`;
      pts.forEach(p => (g += `<circle cx="${p[0]}" cy="${p[1]}" r="3.4" fill="${s.color}"/>`));
    });
    return `<svg viewBox="-95 -5 ${S + 190} ${S + 20}" role="img" aria-label="Netzdiagramm der 12 Achsen">
      <style>.rd-shape{transform-origin:${C}px ${C}px;animation:rdIn 1.1s cubic-bezier(.22,1,.36,1) both}@keyframes rdIn{from{transform:scale(.2);opacity:0}}</style>${g}</svg>`;
  }

  /* Kompass: x- und y-Achse frei wählbar. points: [{v, label, color, big}] */
  function compass(user, xAxis, yAxis, points, opts = {}) {
    const S = 420, P = 34, W = S - 2 * P;
    const xi = AG.AXIS_INDEX[xAxis], yi = AG.AXIS_INDEX[yAxis];
    const ax = AG.AXES[xi], ay = AG.AXES[yi];
    const X = v => P + ((v + 100) / 200) * W;
    const Y = v => P + ((100 - v) / 200) * W;
    const q = opts.colors || ['#d1495b', '#5a8ee6', '#57b87a', '#e9a23b']; // oben-links, oben-rechts, unten-links, unten-rechts
    const mix = (a, b, t) => {
      const pa = parseInt(a.slice(1), 16), pb = parseInt(b.slice(1), 16);
      const ch = s => [(s >> 16) & 255, (s >> 8) & 255, s & 255];
      const A = ch(pa), B = ch(pb);
      return `rgb(${A.map((x, i) => Math.round(x + (B[i] - x) * t)).join(',')})`;
    };
    let g = '';
    const N = 10, cw = W / N;
    for (let r = 0; r < N; r++) for (let c = 0; c < N; c++) {
      const tx = (c + 0.5) / N, ty = (r + 0.5) / N;
      const top = mix(q[0], q[1], tx), bot = mix(q[2], q[3], tx);
      const toHex = s => '#' + s.match(/\d+/g).map(n => (+n).toString(16).padStart(2, '0')).join('');
      const col = mix(toHex(top), toHex(bot), ty);
      const dist = Math.max(Math.abs(tx - 0.5), Math.abs(ty - 0.5));
      g += `<rect x="${P + c * cw + 1}" y="${P + r * cw + 1}" width="${cw - 2}" height="${cw - 2}" rx="3" fill="${col}" fill-opacity="${0.1 + dist * 0.32}"/>`;
    }
    g += `<line x1="${X(0)}" y1="${P}" x2="${X(0)}" y2="${S - P}" stroke="rgba(255,255,255,.35)"/>`;
    g += `<line x1="${P}" y1="${Y(0)}" x2="${S - P}" y2="${Y(0)}" stroke="rgba(255,255,255,.35)"/>`;
    const lbl = (x, y, t, anchor, rot) => `<text x="${x}" y="${y}" text-anchor="${anchor}" font-size="11" font-weight="700" letter-spacing="1.5" fill="#8b93a3" ${rot ? `transform="rotate(${rot} ${x} ${y})"` : ''}>${esc(t.toUpperCase())}</text>`;
    g += lbl(S / 2, P - 12, ay.right, 'middle');
    g += lbl(S / 2, S - P + 22, ay.left, 'middle');
    g += lbl(P - 14, S / 2, ax.left, 'middle', -90);
    g += lbl(S - P + 14, S / 2, ax.right, 'middle', 90);

    const placed = user ? [[X(user[xi]), Y(user[yi]) - 15]] : [];
    (points || []).forEach(p => {
      if (p.v[xi] === null || p.v[yi] === null) return;
      const x = X(p.v[xi]), y = Y(p.v[yi]);
      g += `<circle cx="${x}" cy="${y}" r="${p.big ? 5 : 3}" fill="${p.color || '#fff'}" fill-opacity="${p.big ? 0.95 : 0.4}"><title>${esc(p.label)}</title></circle>`;
      if (p.big) {
        let ly = y + 4;
        for (let k = 0; k < 6 && placed.some(([px, py]) => Math.abs(py - ly) < 13 && Math.abs(px - x) < 120); k++) ly += 13;
        placed.push([x + 8, ly]);
        g += `<text x="${x + 8}" y="${ly}" font-size="11.5" font-weight="600" fill="#ece8e1" paint-order="stroke" stroke="#0a0d13" stroke-width="3">${esc(p.label)}</text>`;
      }
    });
    if (user) {
      const ux = X(user[xi]), uy = Y(user[yi]);
      g += `<circle cx="${ux}" cy="${uy}" r="16" fill="#e7c46b" fill-opacity=".18"><animate attributeName="r" values="10;20;10" dur="2.6s" repeatCount="indefinite"/><animate attributeName="fill-opacity" values=".35;.05;.35" dur="2.6s" repeatCount="indefinite"/></circle>`;
      g += `<circle cx="${ux}" cy="${uy}" r="7.5" fill="#e7c46b" stroke="#0a0d13" stroke-width="2.5"/>`;
      g += `<text x="${ux}" y="${uy - 15}" text-anchor="middle" font-size="12" font-weight="800" fill="#e7c46b" paint-order="stroke" stroke="#0a0d13" stroke-width="3">${esc(opts.youLabel || 'Du')}</text>`;
    }
    return `<svg viewBox="0 0 ${S} ${S}" role="img" aria-label="Kompass ${esc(ax.name)} und ${esc(ay.name)}">${g}</svg>`;
  }

  /* Ring mit Prozentwert */
  function ring(pct, color = '#e7c46b', size = 104) {
    const r = 42, c = 2 * Math.PI * r;
    return `<svg class="ring" viewBox="0 0 100 100" style="width:${size}px;height:${size}px">
      <circle class="track" cx="50" cy="50" r="${r}"/>
      <circle class="val" cx="50" cy="50" r="${r}" stroke="${color}" stroke-dasharray="${c}" stroke-dashoffset="${c}" data-target="${c * (1 - pct / 100)}"/>
      <text x="50" y="50">${pct}%</text></svg>`;
  }
  function animateRings(root) {
    requestAnimationFrame(() => setTimeout(() => {
      root.querySelectorAll('.ring .val').forEach(el => (el.style.strokeDashoffset = el.dataset.target));
    }, 80));
  }

  return { radar, compass, ring, animateRings };
})();

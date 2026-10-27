/* Agora – gemeinsame UI-Helfer: Datenindex, Bilder, Speicher, Länder-Menü, Toast */
window.AG = window.AG || {};

AG.ui = (function () {
  /* ---------- Datenindex ---------- */
  const ALL = [...AG.IDEOLOGIES, ...AG.PERSONS, ...AG.PARTIES, ...AG.STATES, ...AG.HIST_STATES];
  const BY_ID = {};
  ALL.forEach(e => (BY_ID[e.id] = e));
  const STATE_BY_CC = {};
  AG.STATES.forEach(s => (STATE_BY_CC[s.cc] = s));
  AG.ALL = ALL;

  /* Familie für Personen/Staaten = Familie der nächstgelegenen Ideologie */
  const famCache = {};
  function family(e) {
    if (e.fam && AG.FAMILIES[e.fam]) return e.fam;
    if (famCache[e.id]) return famCache[e.id];
    let best = null, bd = 1e9;
    AG.IDEOLOGIES.forEach(i => {
      const d = AG.engine.distance(e.v, i.v, null);
      if (d < bd) { bd = d; best = i; }
    });
    return (famCache[e.id] = best ? best.fam : 'mitte');
  }
  const famColor = e => (e.fam === 'eu' ? '#5a7bea' : (AG.FAMILIES[family(e)] || {}).color || '#888');

  const TYPE_LABEL = { ideology: 'Ideologie', person: 'Person', party: 'Partei', state: 'Staat', histstate: 'Historischer Staat' };

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }

  function countryName(cc) {
    if (cc === 'EU') return 'Europa';
    return STATE_BY_CC[cc] ? STATE_BY_CC[cc].name : cc;
  }
  function flagUrl(cc) {
    const s = STATE_BY_CC[cc];
    if (!s) return null;
    const m = AG.MEDIA && AG.MEDIA['File:' + s.flag];
    return m ? m.img : null;
  }

  function imageOf(e) {
    const M = AG.MEDIA || {};
    if (e.type === 'ideology') return null;
    if ((e.type === 'state' || e.type === 'histstate') && e.flag && M['File:' + e.flag]) return M['File:' + e.flag].img;
    if (e.wiki && M[e.wiki] && M[e.wiki].img) {
      const src = M[e.wiki].img;
      /* Bei Parteien nur Logos (SVG/PNG) – Fotos von Parteitagen o. Ä. wären irreführend */
      if (e.type === 'party' && /\.jpe?g(\?|$)/i.test(src.split('/').pop())) return null;
      return src;
    }
    return null;
  }
  function wikiLink(e) {
    if (!e.wiki) return null;
    const M = AG.MEDIA || {};
    const de = M[e.wiki] && M[e.wiki].de;
    if (de) return 'https://de.wikipedia.org/wiki/' + encodeURIComponent(de.replace(/ /g, '_'));
    return 'https://en.wikipedia.org/wiki/' + e.wiki;
  }

  function initials(e) {
    if (e.type === 'party') return (e.short || e.name).slice(0, 9);
    const parts = e.name.replace(/[„"“()]/g, '').split(/\s+/).filter(w => w.length > 2 || /^[A-ZÄÖÜ]/.test(w));
    return ((parts[0] || '')[0] || '') + ((parts[parts.length - 1] || '')[0] || '');
  }

  function fallbackHtml(e, cls, size) {
    const c = famColor(e);
    const txt = esc(initials(e));
    const fs = e.type === 'party' ? Math.max(9, Math.min(15, size / Math.max(3, txt.length) * 1.5)) : size * 0.36;
    const dim = /flag/.test(cls) ? '' : `width:${size}px;height:${size}px;`;
    return `<div class="avatar fallback ${cls}" style="${dim}background:linear-gradient(145deg, ${c}, ${shade(c, -35)});font-size:${fs}px">${txt}</div>`;
  }

  /* Emblem (für Ideologien) */
  function emblem(e, size) {
    const c = famColor(e);
    return `<div class="emblem" style="width:${size}px;height:${size}px;border-radius:${Math.round(size * 0.28)}px;background:linear-gradient(145deg, ${c}, ${shade(c, -45)})">${AG.icon(e.icon || 'star')}</div>`;
  }

  /* Avatar: Bild, Flagge, Logo oder Ersatzgrafik */
  function avatar(e, size = 42, extra = '') {
    if (e.type === 'ideology') return emblem(e, size);
    const isFlag = e.type === 'state' || (e.type === 'histstate' && e.flag);
    const isLogo = e.type === 'party';
    const cls = [isFlag ? 'flag' : '', isLogo ? 'logo' : '', e.type === 'person' ? 'round' : '', extra].join(' ');
    const src = imageOf(e);
    const style = isFlag ? '' : `style="width:${size}px;height:${size}px"`;
    if (!src) return fallbackHtml(e, cls.replace('logo', ''), size);
    return `<img class="avatar ${cls}" ${style} src="${esc(src)}" alt="" loading="lazy" referrerpolicy="no-referrer" data-fid="${esc(e.id)}" data-fs="${size}" onerror="AG.ui.imgFail(this)">`;
  }
  function imgFail(img) {
    const e = BY_ID[img.dataset.fid];
    if (!e) { img.remove(); return; }
    const size = +img.dataset.fs || 42;
    const tmp = document.createElement('div');
    tmp.innerHTML = fallbackHtml(e, img.className.replace('avatar', '').replace('logo', ''), size);
    img.replaceWith(tmp.firstChild);
  }

  function shade(hex, pct) {
    const n = parseInt(hex.slice(1), 16);
    const f = v => Math.max(0, Math.min(255, Math.round(v + (pct / 100) * (pct < 0 ? v : 255 - v))));
    return '#' + [n >> 16, (n >> 8) & 255, n & 255].map(f).map(v => v.toString(16).padStart(2, '0')).join('');
  }

  function subtitle(e) {
    switch (e.type) {
      case 'ideology': return AG.FAMILIES[e.fam].name;
      case 'person': return `${e.role} · ${countryName(e.cc)}`;
      case 'party': return e.group ? 'Fraktion im Europäischen Parlament' : `${e.short ? e.short + ' · ' : ''}${countryName(e.cc)}${e.hist ? ' · historisch' : ''}`;
      case 'state': return e.gov;
      case 'histstate': return `${e.period} · ${e.gov}`;
    }
    return '';
  }

  /* Mini-Leiste der 12 Achsen in Achsenfarbe (Deckkraft = Ausprägung) */
  function strip(v) {
    return `<div class="strip">${AG.AXES.map((a, i) => {
      const x = v[i];
      if (x === null) return `<i style="background:rgba(255,255,255,.06)"></i>`;
      return `<i title="${a.name}: ${x < 0 ? a.left : a.right} ${Math.abs(x)}" style="background:${a.color};opacity:${0.18 + Math.abs(x) / 125}; transform:scaleY(${x < 0 ? -1 : 1})"></i>`;
    }).join('')}</div>`;
  }

  /* ---------- Speicher (localStorage, fehlertolerant) ---------- */
  const store = {
    get(k, d) { try { const v = localStorage.getItem('agora.' + k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem('agora.' + k, JSON.stringify(v)); } catch (e) { /* privat/voll */ } },
    del(k) { try { localStorage.removeItem('agora.' + k); } catch (e) { } }
  };

  /* ---------- Land ---------- */
  function getCountry() { return store.get('country', 'DE'); }
  function setCountry(cc) {
    store.set('country', cc);
    renderCountryBtn();
    window.dispatchEvent(new CustomEvent('agora:country', { detail: cc }));
  }
  function renderCountryBtn() {
    const btn = document.getElementById('countryBtn');
    if (!btn) return;
    const cc = getCountry();
    const f = flagUrl(cc);
    btn.innerHTML = `${f ? `<img class="flag" src="${esc(f)}" alt="" referrerpolicy="no-referrer">` : ''}<span class="cname">${esc(countryName(cc))}</span>${AG.icon('chevronDown')}`;
  }
  function openCountryMenu(anchor, onPick) {
    closePopover();
    const pop = document.createElement('div');
    pop.className = 'popover';
    pop.id = 'popover';
    const cur = getCountry();
    pop.innerHTML = `<div class="search">${AG.icon('search')}<input placeholder="Land suchen …" aria-label="Land suchen"></div>
      <div class="country-list"></div>`;
    document.body.appendChild(pop);
    const r = anchor.getBoundingClientRect();
    pop.style.top = r.bottom + 8 + 'px';
    pop.style.left = Math.max(12, Math.min(window.innerWidth - pop.offsetWidth - 12, r.right - pop.offsetWidth)) + 'px';
    const list = pop.querySelector('.country-list');
    const input = pop.querySelector('input');
    const draw = q => {
      q = (q || '').toLowerCase();
      list.innerHTML = AG.COUNTRIES.filter(c => c.name.toLowerCase().includes(q)).map(c => {
        const f = flagUrl(c.cc);
        return `<button class="country-item ${c.cc === cur ? 'sel' : ''}" data-cc="${c.cc}">${f ? `<img src="${esc(f)}" alt="" loading="lazy" referrerpolicy="no-referrer">` : ''}${esc(c.name)}<span class="eu">${c.eu ? 'EU' : ''}</span></button>`;
      }).join('') || '<div class="muted" style="padding:12px">Kein Land gefunden.</div>';
    };
    draw('');
    input.addEventListener('input', () => draw(input.value));
    list.addEventListener('click', ev => {
      const b = ev.target.closest('[data-cc]');
      if (!b) return;
      setCountry(b.dataset.cc);
      closePopover();
      if (onPick) onPick(b.dataset.cc);
    });
    setTimeout(() => input.focus(), 30);
    setTimeout(() => document.addEventListener('click', outside), 0);
    function outside(ev) { if (!pop.contains(ev.target)) { closePopover(); document.removeEventListener('click', outside); } }
  }
  function closePopover() { const p = document.getElementById('popover'); if (p) p.remove(); }

  /* ---------- Toast ---------- */
  let toastT;
  function toast(msg, icon = 'check') {
    let t = document.getElementById('toast');
    if (!t) { t = document.createElement('div'); t.id = 'toast'; t.className = 'toast'; document.body.appendChild(t); }
    t.innerHTML = AG.icon(icon) + esc(msg);
    t.classList.add('show');
    clearTimeout(toastT);
    toastT = setTimeout(() => t.classList.remove('show'), 2600);
  }

  /* ---------- Scroll-Animationen ---------- */
  let io;
  function reveal(root) {
    if (!('IntersectionObserver' in window)) { root.querySelectorAll('.reveal').forEach(el => el.classList.add('in')); return; }
    if (!io) io = new IntersectionObserver(entries => entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
    }), { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    root.querySelectorAll('.reveal').forEach(el => io.observe(el));
  }

  /* Zahlen hochzählen */
  function countUp(el, to, ms = 1300) {
    const t0 = performance.now();
    const step = t => {
      const k = Math.min(1, (t - t0) / ms);
      el.textContent = Math.round(to * (1 - Math.pow(1 - k, 3)));
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  async function copy(text) {
    try { await navigator.clipboard.writeText(text); return true; }
    catch (e) {
      const ta = document.createElement('textarea');
      ta.value = text; document.body.appendChild(ta); ta.select();
      let ok = false; try { ok = document.execCommand('copy'); } catch (er) { }
      ta.remove(); return ok;
    }
  }

  function download(name, blob) {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = name;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
  }

  return { ALL, BY_ID, esc, family, famColor, countryName, flagUrl, imageOf, wikiLink, avatar, emblem, imgFail, shade, subtitle, strip,
    store, getCountry, setCountry, renderCountryBtn, openCountryMenu, closePopover, toast, reveal, countUp, copy, download, TYPE_LABEL };
})();

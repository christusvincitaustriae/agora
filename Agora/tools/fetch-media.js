/* Holt Bild-URLs (Porträts, Parteilogos, Flaggen) und deutsche Artikeltitel von Wikipedia / Wikimedia Commons
   und schreibt sie nach js/data/media.js. Die Bilder selbst werden von upload.wikimedia.org eingebunden.
   Aufruf: node tools/fetch-media.js */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ctx = {}; ctx.window = ctx; vm.createContext(ctx);
for (const f of ['axes', 'ideologies', 'persons-current', 'persons-historic', 'parties', 'states'])
  vm.runInContext(fs.readFileSync(path.join(__dirname, '..', 'js', 'data', f + '.js'), 'utf8'), ctx);
const AG = ctx.AG;

const UA = 'AgoraPolitiktest/1.0 (local educational project; contact: none)';
const sleep = ms => new Promise(r => setTimeout(r, ms));

/* curl statt fetch: Wikimedia drosselt Node-Anfragen deutlich schneller */
const { execFileSync } = require('child_process');
async function api(host, params) {
  const url = `https://${host}/w/api.php?` + new URLSearchParams({ format: 'json', formatversion: '2', ...params });
  for (let attempt = 0; attempt < 5; attempt++) {
    try {
      return JSON.parse(execFileSync('curl', ['-s', '-f', '-A', UA, url], { maxBuffer: 1e8 }).toString());
    } catch (e) {
      console.log('  Anfrage fehlgeschlagen – neuer Versuch');
      await sleep(5000 * (attempt + 1));
    }
  }
  throw new Error('API-Fehler ' + url);
}

const chunk = (arr, n) => Array.from({ length: Math.ceil(arr.length / n) }, (_, i) => arr.slice(i * n, i * n + n));
const norm = t => decodeURIComponent(t).replace(/_/g, ' ');

async function articles(titles) {
  const out = {};
  for (const part of chunk(titles, 40)) {
    const data = await api('en.wikipedia.org', {
      action: 'query', titles: part.map(norm).join('|'), redirects: '1',
      prop: 'pageimages|langlinks', piprop: 'thumbnail', pithumbsize: '320', pilimit: 'max',
      lllang: 'de', lllimit: 'max'
    });
    const back = {};
    for (const t of part) back[norm(t)] = t;
    const follow = name => {
      for (const n of data.query.normalized || []) if (n.to === name && back[n.from]) return back[n.from];
      for (const r of data.query.redirects || []) if (r.to === name) {
        if (back[r.from]) return back[r.from];
        for (const n of data.query.normalized || []) if (n.to === r.from && back[n.from]) return back[n.from];
      }
      return back[name];
    };
    for (const p of data.query.pages) {
      const key = follow(p.title);
      if (!key) continue;
      out[key] = { img: p.thumbnail ? p.thumbnail.source : null, de: p.langlinks && p.langlinks[0] ? p.langlinks[0].title : null, missing: !!p.missing };
    }
    await sleep(1200);
  }
  return out;
}

async function files(names) {
  const out = {};
  for (const part of chunk(names, 40)) {
    const data = await api('commons.wikimedia.org', {
      action: 'query', titles: part.map(n => 'File:' + norm(n)).join('|'),
      prop: 'imageinfo', iiprop: 'url', iiurlwidth: '320'
    });
    const back = {};
    for (const n of part) back['File:' + norm(n)] = n;
    for (const nn of data.query.normalized || []) if (back[nn.from]) back[nn.to] = back[nn.from];
    for (const p of data.query.pages) {
      const key = back[p.title];
      if (!key) continue;
      out[key] = p.imageinfo ? p.imageinfo[0].thumburl : null;
    }
    await sleep(1200);
  }
  return out;
}

(async () => {
  const entities = [...AG.PERSONS, ...AG.PARTIES, ...AG.STATES, ...AG.HIST_STATES];
  const titles = [...new Set(entities.map(e => e.wiki).filter(Boolean))];
  const flags = [...new Set([...AG.STATES, ...AG.HIST_STATES].map(e => e.flag).filter(Boolean))];
  console.log(`Artikel: ${titles.length}, Flaggen: ${flags.length}`);

  /* Vorhandene Ergebnisse wiederverwenden – nur Fehlendes neu abfragen (schont das API-Limit) */
  const mediaFile = path.join(__dirname, '..', 'js', 'data', 'media.js');
  let media = {};
  if (fs.existsSync(mediaFile) && !process.argv.includes('--neu')) {
    const c2 = {}; c2.window = c2; vm.createContext(c2);
    vm.runInContext(fs.readFileSync(mediaFile, 'utf8'), c2);
    media = c2.AG.MEDIA || {};
  }
  const todoTitles = titles.filter(t => !media[t]);
  const todoFlags = flags.filter(f => !media['File:' + f]);
  console.log(`Neu abzufragen: ${todoTitles.length} Artikel, ${todoFlags.length} Flaggen`);

  const art = await articles(todoTitles);
  const fl = await files(todoFlags);
  let missing = [];
  for (const t of todoTitles) {
    const a = art[t];
    if (!a || a.missing) { missing.push(t); continue; }
    media[t] = { img: a.img, de: a.de };
  }
  const flagMissing = [];
  for (const f of todoFlags) {
    if (fl[f]) media['File:' + f] = { img: fl[f] }; else flagMissing.push(f);
  }

  /* Zweiter Durchgang: fehlende Bilder (v. a. Parteilogos) über die deutsche Wikipedia */
  const noImg = titles.filter(t => media[t] && !media[t].img && media[t].de && !media[t].deTried);
  if (noImg.length) {
    console.log(`Deutsche Wikipedia für ${noImg.length} Einträge ohne Bild …`);
    for (const part of chunk(noImg, 40)) {
      const data = await api('de.wikipedia.org', {
        action: 'query', titles: part.map(t => media[t].de).join('|'), redirects: '1',
        prop: 'pageimages', piprop: 'thumbnail', pithumbsize: '320', pilimit: 'max'
      });
      const byDe = {};
      part.forEach(t => (byDe[media[t].de] = t));
      const resolve = n => {
        for (const r of data.query.redirects || []) if (r.to === n && byDe[r.from]) return byDe[r.from];
        for (const r of data.query.normalized || []) if (r.to === n && byDe[r.from]) return byDe[r.from];
        return byDe[n];
      };
      for (const p of data.query.pages) {
        const t = resolve(p.title);
        if (t && p.thumbnail) media[t].img = p.thumbnail.source;
      }
      part.forEach(t => (media[t].deTried = true));
      await sleep(1500);
    }
  }
  const withImg = titles.filter(t => media[t] && media[t].img).length;
  const flagOk = flags.filter(f => media['File:' + f]).length;
  console.log(`Artikel mit Bild: ${withImg}/${titles.length}`);
  console.log(`Flaggen gefunden: ${flagOk}/${flags.length}`);
  if (missing.length) console.log('Artikel nicht gefunden:', missing.join(', '));
  if (flagMissing.length) console.log('Flaggen nicht gefunden:', flagMissing.join(', '));

  const js = '/* Automatisch erzeugt von tools/fetch-media.js – Bildquellen: Wikipedia / Wikimedia Commons */\n' +
    'window.AG = window.AG || {};\nAG.MEDIA = ' + JSON.stringify(media) + ';\n';
  fs.writeFileSync(path.join(__dirname, '..', 'js', 'data', 'media.js'), js);
  console.log('Geschrieben: js/data/media.js');
})();

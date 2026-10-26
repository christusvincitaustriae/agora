/* Prüft Datenbank und Berechnungslogik:
   - alle Vektoren haben 12 Werte im gültigen Bereich, IDs sind eindeutig
   - simuliert für jede Ideologie einen "idealen" Testteilnehmer und prüft, ob die Ideologie wiedergefunden wird
   Aufruf: node tools/validate.js */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ctx = { window: {}, console };
ctx.window = ctx;
vm.createContext(ctx);
const files = ['axes', 'questions', 'ideologies', 'persons-current', 'persons-historic', 'parties', 'states'];
for (const f of files) vm.runInContext(fs.readFileSync(path.join(__dirname, '..', 'js', 'data', f + '.js'), 'utf8'), ctx);
vm.runInContext(fs.readFileSync(path.join(__dirname, '..', 'js', 'engine.js'), 'utf8'), ctx);
const AG = ctx.AG;

let errors = 0;
const all = [...AG.IDEOLOGIES, ...AG.PERSONS, ...AG.PARTIES, ...AG.STATES, ...AG.HIST_STATES];
const ids = new Set();
for (const e of all) {
  if (ids.has(e.id)) { console.log('Doppelte ID:', e.id); errors++; }
  ids.add(e.id);
  if (!Array.isArray(e.v) || e.v.length !== 12) { console.log('Vektorlänge falsch:', e.id, e.v && e.v.length); errors++; continue; }
  for (const x of e.v) if (x !== null && (typeof x !== 'number' || x < -100 || x > 100)) { console.log('Wert ungültig:', e.id, x); errors++; }
}
for (const q of AG.QUESTIONS) for (const k in q.fx) if (!(k in AG.AXIS_INDEX)) { console.log('Unbekannte Achse', q.id, k); errors++; }

console.log('Einträge:', {
  ideologien: AG.IDEOLOGIES.length, personen: AG.PERSONS.length, parteien: AG.PARTIES.length,
  staaten: AG.STATES.length, historisch: AG.HIST_STATES.length, gesamt: all.length
});
for (const m of Object.keys(AG.MODES)) {
  const qs = AG.engine.questionsFor(m);
  const cover = AG.AXES.map(a => qs.reduce((s, q) => s + Math.abs(q.fx[a.id] || 0), 0).toFixed(1));
  console.log(`Modus ${m}: ${qs.length} Fragen, Gewicht je Achse: ${cover.join(' ')}`);
}

const steps = [1, 0.5, 0, -0.5, -1];
function simulate(profile, mode) {
  const answers = {};
  for (const q of AG.engine.questionsFor(mode)) {
    let s = 0, w = 0;
    for (const k in q.fx) {
      const val = profile[AG.AXIS_INDEX[k]];
      if (val === null) continue;
      s += (val / 100) * q.fx[k];
      w += Math.abs(q.fx[k]);
    }
    const ideal = w ? s / w : 0;
    answers[q.id] = steps.reduce((best, x) => (Math.abs(x - ideal) < Math.abs(best - ideal) ? x : best), 0);
  }
  return AG.engine.computeScores(answers, {});
}

for (const mode of Object.keys(AG.MODES)) {
  let top1 = 0, top3 = 0, pcts = [];
  const misses = [];
  for (const ideo of AG.IDEOLOGIES) {
    const user = simulate(ideo.v, mode);
    const r = AG.engine.rank(AG.IDEOLOGIES, user);
    const pos = r.findIndex(x => x.e.id === ideo.id);
    if (pos === 0) top1++;
    if (pos < 3) top3++;
    else misses.push(`${ideo.name} → ${r[0].e.name} (Platz ${pos + 1})`);
    pcts.push(r[0].pct);
  }
  const n = AG.IDEOLOGIES.length;
  console.log(`\n[${mode}] Ideologie wiedergefunden: Top1 ${(100 * top1 / n).toFixed(0)} %, Top3 ${(100 * top3 / n).toFixed(0)} %, Ø Top-Match ${(pcts.reduce((a, b) => a + b, 0) / n).toFixed(0)} %`);
  if (mode === 'praezise' && misses.length) console.log('  Nicht in Top 3:', misses.slice(0, 15).join('; '));
}

/* Nutzer genau in der Mitte */
const mid = AG.engine.rank(AG.IDEOLOGIES, { scores: new Array(12).fill(0), conf: new Array(12).fill(1) });
console.log('\nNeutraler Nutzer →', mid.slice(0, 3).map(x => `${x.e.name} ${x.pct}%`).join(', '));

process.exitCode = errors ? 1 : 0;
console.log(errors ? `\n${errors} Fehler` : '\nKeine Datenfehler.');

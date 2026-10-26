/* Agora – Methodik & Transparenz */
window.AG = window.AG || {};
AG.views = AG.views || {};

AG.views.method = function (main) {
  const { esc } = AG.ui;
  const counts = { i: AG.IDEOLOGIES.length, p: AG.PERSONS.length, pa: AG.PARTIES.length, s: AG.STATES.length, h: AG.HIST_STATES.length };
  main.innerHTML = `
  <div class="view"><div class="wrap">
    <div class="page-head"><span class="eyebrow">Methodik</span><h1>So rechnet Agora</h1>
      <p>Transparenz ist uns wichtig. Hier steht, wie aus deinen Antworten ein Profil wird – und wie es mit der Datenbank verglichen wird.</p></div>
    <div class="prose">
      <h2>1. Zwölf Achsen</h2>
      <p>Jede Achse reicht von −100 (linker Pol) bis +100 (rechter Pol). Die Bezeichnungen „links" und „rechts" sind dabei rein grafisch gemeint – „Säkular" ist nicht links und „Regional" nicht rechts.</p>
      <ul>${AG.AXES.map(a => `<li><b style="color:${a.color}">${esc(a.name)}</b>: ${esc(a.left)} ↔ ${esc(a.right)}</li>`).join('')}</ul>

      <h2>2. Aussagen und Gewichte</h2>
      <p>Jede der ${AG.QUESTIONS.length} Aussagen wirkt auf eine oder mehrere Achsen. Ein Gewicht von <code>+2</code> bedeutet: volle Zustimmung schiebt dich kräftig zum rechten Pol dieser Achse, volle Ablehnung kräftig zum linken. Viele Aussagen haben Nebenwirkungen mit kleinerem Gewicht – wer etwa der Aussage „Europa ist im Kern eine christlich geprägte Zivilisation" zustimmt, rückt vor allem auf der Religions-Achse, ein wenig aber auch auf den Achsen Gesellschaft und Identität.</p>
      <p>Die Antwortskala wird so übersetzt: <code>Stimme voll zu = +1</code>, <code>eher zu = +0,5</code>, <code>neutral = 0</code>, <code>eher nicht = −0,5</code>, <code>gar nicht = −1</code>. Übersprungene Fragen zählen gar nicht, neutrale Antworten ziehen dich zur Mitte.</p>
      <div class="formula">Achsenwert = 100 × Σ (Antwort × Gewicht × Wichtigkeit) ÷ Σ (|Gewicht| × Wichtigkeit)</div>
      <p>Als „wichtig" markierte Fragen zählen 1,6-fach. Die drei Testlängen sind ineinander verschachtelt: Der Standardtest enthält alle Fragen des Kompakttests, der Präzisionstest alle Fragen des Standardtests. So wird jede Achse im Kompakttest mindestens zweimal, im Präzisionstest fünf- bis sechsmal gemessen.</p>

      <h2>3. Aussagekraft je Achse</h2>
      <p>Nicht jede Achse ist gleich gut vermessen – vor allem im Kompakttest. Agora berechnet daher für jede Achse eine Aussagekraft zwischen 0 und 1 (Summe der beantworteten Fragegewichte, gesättigt ab 4). Achsen mit wenig Daten zählen beim Vergleich entsprechend weniger und sind auf der Ergebnisseite als „wenig Daten" markiert.</p>

      <h2>4. Vergleich mit der Datenbank</h2>
      <p>Die Datenbank enthält ${counts.i} Ideologien, ${counts.p} Personen, ${counts.pa} Parteien und Fraktionen, ${counts.s} heutige und ${counts.h} historische Staaten – insgesamt ${AG.ALL.length} Profile mit je 12 Werten. Für jedes Profil berechnet Agora den gewichteten Abstand zu dir:</p>
      <div class="formula">Abstand = √( Σ wᵢ × (duᵢ − profilᵢ)² ÷ Σ wᵢ )<br>wᵢ = Aussagekraft der Achse × 1,5 (falls Herzensthema)<br>Übereinstimmung = 100 % × e^(−(Abstand ÷ 85)²)</div>
      <p>Die Glockenkurve sorgt dafür, dass kleine Abweichungen kaum ins Gewicht fallen, grundlegende Gegensätze aber deutlich. Ein Abstand von 40 Punkten entspricht etwa 80 %, ein Abstand von 85 Punkten etwa 37 %. Achsen, die für ein historisches Profil keinen Sinn ergeben (etwa „Außenpolitik" für die Athenische Demokratie), werden ausgelassen.</p>
      <p>„Auch nah – nach Dimension" wiederholt diese Rechnung nur für eine Gruppe von Achsen: <i>politisch</i> (Staatsmacht, Demokratie, Staatsaufbau, Wandel, Europa), <i>gesellschaftlich</i> (Gesellschaft, Religion, Identität, Migration) und <i>wirtschaftlich</i> (Wirtschaft, Umwelt).</p>

      <h2>5. Qualitätsprüfung</h2>
      <p>Ein Prüfskript (<code>tools/validate.js</code>) simuliert für jede Ideologie einen Testteilnehmer, der genau nach deren Überzeugungen antwortet. In allen drei Testlängen landet die richtige Ideologie in rund 95 % der Fälle auf Platz 1 und in 100 % der Fälle unter den ersten drei.</p>

      <h2>6. Woher kommen die Profile?</h2>
      <p>Die Positionen von Parteien, Personen und Staaten sind redaktionelle Einschätzungen auf Grundlage von Parteiprogrammen, Abstimmungsverhalten, Regierungshandeln, öffentlichen Aussagen und politikwissenschaftlicher Literatur (z. B. Chapel Hill Expert Survey). Heutige Staaten werden nach Regierungspolitik, Verfassung und gesellschaftlichem Klima eingeordnet, historische Staaten nach ihrer Herrschaftsordnung. Solche Einordnungen sind immer vereinfachend – nutze die Ergebnisse als Denkanstoß, nicht als Wahlempfehlung.</p>

      <h2>7. Datenschutz</h2>
      <p>Agora läuft vollständig in deinem Browser. Antworten werden ausschließlich lokal gespeichert (localStorage), damit du einen Test fortsetzen und frühere Ergebnisse wiederfinden kannst. Es werden keine Antworten an einen Server gesendet. Porträts, Flaggen und Logos werden von Wikimedia Commons geladen; Bildrechte liegen bei den jeweiligen Urhebern (Lizenzangaben auf Wikimedia Commons).</p>
      <p style="margin-top:26px"><button class="btn btn-ghost btn-sm" id="clearData">${AG.icon('x')} Alle lokal gespeicherten Ergebnisse löschen</button></p>
    </div>
  </div></div>`;
  main.querySelector('#clearData').addEventListener('click', () => {
    if (!confirm('Alle lokal gespeicherten Antworten und Ergebnisse löschen?')) return;
    ['progress', 'last', 'history'].forEach(k => AG.ui.store.del(k));
    AG.ui.toast('Lokale Daten gelöscht');
  });
};

/* Agora – die 12 europäischen Achsen.
   Jeder Wert liegt zwischen -100 (linker Pol) und +100 (rechter Pol). */
window.AG = window.AG || {};

AG.AXES = [
  { id: 'econ', name: 'Wirtschaft', left: 'Gemeinwohl', right: 'Markt', color: '#e0795b',
    iconL: 'people', iconR: 'chart',
    desc: 'Soll der Staat Wirtschaft lenken, umverteilen und Schlüsselbranchen besitzen – oder sollen freie Märkte, Wettbewerb und Privateigentum den Ton angeben?',
    bands: ['Kollektivistisch', 'Sozialistisch', 'Sozial', 'Ausgeglichen', 'Wirtschaftsliberal', 'Marktliberal', 'Laissez-faire'] },
  { id: 'auth', name: 'Staatsmacht', left: 'Freiheit', right: 'Ordnung', color: '#7b8cff',
    iconL: 'feather', iconR: 'shield',
    desc: 'Wie viel Kontrolle, Überwachung und Strafe darf der Staat ausüben – und wie viel persönliche Freiheit und Privatsphäre steht dem Einzelnen zu?',
    bands: ['Staatsfern', 'Freiheitlich', 'Bürgerrechtlich', 'Ausgeglichen', 'Ordnungsbewusst', 'Autoritär', 'Totalitär'] },
  { id: 'eu', name: 'Europa', left: 'Integration', right: 'Souveränität', color: '#f2c14e',
    iconL: 'stars', iconR: 'flag',
    desc: 'Vereinigte Staaten von Europa oder ein Europa der Vaterländer? Misst deine Haltung zur Europäischen Union und zur Abgabe nationaler Kompetenzen.',
    bands: ['Föderalistisch', 'Pro-europäisch', 'EU-freundlich', 'Ausgeglichen', 'EU-kritisch', 'Souveränistisch', 'EU-Austritt'] },
  { id: 'cult', name: 'Gesellschaft', left: 'Progressiv', right: 'Traditionell', color: '#d77bd0',
    iconL: 'spark', iconR: 'home',
    desc: 'Gesellschaftlicher Wandel, Selbstbestimmung und Vielfalt der Lebensformen – oder Familie, Sitte und überlieferte Werte?',
    bands: ['Avantgardistisch', 'Progressiv', 'Liberal', 'Ausgeglichen', 'Wertkonservativ', 'Traditionell', 'Reaktionär'] },
  { id: 'nat', name: 'Identität', left: 'Weltoffen', right: 'National', color: '#5fb3c8',
    iconL: 'globe', iconR: 'castle',
    desc: 'Siehst du dich als Weltbürger in einer vernetzten Welt – oder steht die eigene Nation, ihre Kultur und Sprache an erster Stelle?',
    bands: ['Kosmopolitisch', 'Weltoffen', 'Offen', 'Ausgeglichen', 'Patriotisch', 'Nationalistisch', 'Ultranational'] },
  { id: 'mig', name: 'Migration', left: 'Offen', right: 'Begrenzt', color: '#e6a15a',
    iconL: 'door', iconR: 'wall',
    desc: 'Offene Grenzen, Asyl und Zuwanderung als Bereicherung – oder strikte Begrenzung, Kontrolle und Assimilation?',
    bands: ['Grenzenlos', 'Offen', 'Aufnahmebereit', 'Ausgeglichen', 'Steuernd', 'Restriktiv', 'Abschottend'] },
  { id: 'eco', name: 'Umwelt', left: 'Ökologie', right: 'Wachstum', color: '#6cc488',
    iconL: 'leaf', iconR: 'factory',
    desc: 'Hat Klima- und Naturschutz Vorrang, auch auf Kosten von Wohlstand – oder sind Industrie, Energie und Wachstum wichtiger?',
    bands: ['Tiefenökologisch', 'Ökologisch', 'Umweltbewusst', 'Ausgeglichen', 'Wachstumsorientiert', 'Industriell', 'Produktivistisch'] },
  { id: 'rel', name: 'Religion', left: 'Säkular', right: 'Religiös', color: '#b49af0',
    iconL: 'atom', iconR: 'cross',
    desc: 'Strikte Trennung von Kirche und Staat – oder soll Glaube das öffentliche Leben und die Politik prägen?',
    bands: ['Antiklerikal', 'Laizistisch', 'Säkular', 'Ausgeglichen', 'Religionsfreundlich', 'Religiös', 'Theokratisch'] },
  { id: 'geo', name: 'Außenpolitik', left: 'Westbindung', right: 'Multipolar', color: '#5a8ee6',
    iconL: 'anchor', iconR: 'compass',
    desc: 'NATO, transatlantische Partnerschaft und wehrhafte Verteidigung – oder Neutralität, Blockfreiheit und Annäherung an andere Mächte?',
    bands: ['Atlantizistisch', 'Westgebunden', 'Bündnistreu', 'Ausgeglichen', 'Eigenständig', 'Blockfrei', 'Antiwestlich'] },
  { id: 'reg', name: 'Staatsaufbau', left: 'Zentral', right: 'Regional', color: '#c9a36b',
    iconL: 'target', iconR: 'nodes',
    desc: 'Ein starker, einheitlicher Zentralstaat – oder Macht bei Regionen, Gemeinden und Minderheiten bis hin zur Selbstbestimmung?',
    bands: ['Zentralistisch', 'Einheitsstaatlich', 'Gemäßigt zentral', 'Ausgeglichen', 'Föderal', 'Regionalistisch', 'Separatistisch'] },
  { id: 'dem', name: 'Demokratie', left: 'Basis', right: 'Repräsentation', color: '#ef6f8a',
    iconL: 'hands', iconR: 'pillar',
    desc: 'Direkte Demokratie, Volksabstimmungen und Misstrauen gegenüber Eliten – oder Parlamente, Experten und starke Institutionen?',
    bands: ['Basisdemokratisch', 'Direktdemokratisch', 'Volksnah', 'Ausgeglichen', 'Institutionell', 'Expertokratisch', 'Elitär'] },
  { id: 'chg', name: 'Wandel', left: 'Umbruch', right: 'Reform', color: '#9fb0c4',
    iconL: 'bolt', iconR: 'steps',
    desc: 'Muss das System von Grund auf umgestürzt werden – oder gelingt Veränderung nur schrittweise, durch Kompromiss und Reform?',
    bands: ['Revolutionär', 'Radikal', 'Systemkritisch', 'Ausgeglichen', 'Reformorientiert', 'Gemäßigt', 'Bewahrend'] }
];

AG.AXIS_INDEX = {};
AG.AXES.forEach((a, i) => (AG.AXIS_INDEX[a.id] = i));

/* Dimensionen für "Auch nah – nach Dimension" */
AG.DIMENSIONS = {
  politisch:    { label: 'Politisch',    axes: ['auth', 'dem', 'reg', 'chg', 'eu'] },
  gesellschaft: { label: 'Gesellschaftlich', axes: ['cult', 'rel', 'nat', 'mig'] },
  wirtschaft:   { label: 'Wirtschaftlich', axes: ['econ', 'eco'] }
};

/* Politische Familien (für Farben, Filter und Badges) */
AG.FAMILIES = {
  radlinks:    { name: 'Radikale Linke',  color: '#d1495b' },
  links:       { name: 'Linke',           color: '#ec7a8c' },
  gruen:       { name: 'Grün & Ökologisch', color: '#57b87a' },
  mitte:       { name: 'Mitte & Liberal', color: '#f2c14e' },
  rechts:      { name: 'Konservative Rechte', color: '#5a8ee6' },
  rechtsaussen:{ name: 'Extreme Rechte & Reaktion', color: '#4b5ea8' },
  dritte:      { name: 'Dritte Position', color: '#9b6fd6' },
  libertaer:   { name: 'Libertär',        color: '#e9a23b' },
  anarch:      { name: 'Anarchismus',     color: '#8a8f99' },
  regional:    { name: 'Regionalismus',   color: '#c9a36b' }
};

/* Europäisches Parlament – Fraktionen (Wahlperiode 2024–2029) */
AG.EP_GROUPS = {
  EPP:   'EVP – Europäische Volkspartei',
  SD:    'S&D – Sozialdemokraten',
  RE:    'Renew Europe – Liberale',
  GREEN: 'Grüne/EFA',
  ECR:   'EKR – Europäische Konservative und Reformer',
  PFE:   'PfE – Patrioten für Europa',
  ESN:   'ESN – Europa der souveränen Nationen',
  LEFT:  'Die Linke im EP',
  NI:    'Fraktionslos',
  NONEU: 'Kein EU-Mitglied'
};

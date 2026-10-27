/* Agora – Ideologien
   Vektor-Reihenfolge: [Wirtschaft, Staatsmacht, Europa, Gesellschaft, Identität, Migration,
                        Umwelt, Religion, Außenpolitik, Staatsaufbau, Demokratie, Wandel]
   -100 = linker Pol, +100 = rechter Pol, null = für diese Ideologie nicht bestimmend. */
window.AG = window.AG || {};

(function () {
  const L = [];
  const I = (id, name, fam, icon, v, desc, quote) => L.push({ id, type: 'ideology', name, fam, icon, v, desc, quote });

  /* ---------------- Radikale Linke ---------------- */
  I('marxismus-leninismus', 'Marxismus-Leninismus', 'radlinks', 'star', [-95, 85, 60, -10, 10, 20, 60, -95, 90, -80, 50, -95],
    'Revolutionäre Strömung, die durch eine Avantgardepartei die Diktatur des Proletariats errichten will – mit Planwirtschaft, Kollektivierung und Einparteienstaat. Staatsideologie der Sowjetunion und des Ostblocks.',
    'Nur eine disziplinierte Partei der Arbeiterklasse kann den Kapitalismus stürzen und den Sozialismus aufbauen.');
  I('stalinismus', 'Stalinismus', 'radlinks', 'star', [-100, 100, 70, 20, 45, 50, 80, -90, 95, -100, 60, -100],
    'Herrschaftsform unter Josef Stalin: „Sozialismus in einem Land", Personenkult, Zwangskollektivierung, forcierte Industrialisierung und massenhafte Repression.',
    'Der Aufbau des Sozialismus verlangt eiserne Disziplin, einen starken Staat und Wachsamkeit gegenüber allen Feinden.');
  I('trotzkismus', 'Trotzkismus', 'radlinks', 'star', [-95, 60, -20, -50, -80, -60, 30, -90, 70, -60, 10, -95],
    'Strömung nach Leo Trotzki, die die „permanente Revolution" und den proletarischen Internationalismus vertritt und die stalinistische Bürokratie scharf kritisiert.',
    'Die Revolution darf nicht an Landesgrenzen haltmachen – sie muss weltweit und permanent sein.');
  I('maoismus', 'Maoismus', 'radlinks', 'star', [-95, 90, 70, 0, 30, 30, 40, -95, 95, -70, 0, -100],
    'Chinesische Variante des Marxismus nach Mao Zedong mit Fokus auf Bauernschaft, Massenmobilisierung, Volkskrieg und permanenter Kulturrevolution. In Europa vor allem in Studentenbewegungen der 1970er präsent.',
    'Die Massen sind die wahren Helden – die Revolution muss immer wieder gegen die Bürokratie erneuert werden.');
  I('hoxhaismus', 'Hoxhaismus', 'radlinks', 'star', [-100, 100, 95, 20, 70, 80, 70, -100, 100, -95, 60, -90],
    'Strenge antirevisionistische Linie Enver Hoxhas in Albanien: totale Isolation, Staatsatheismus und Bruch mit Moskau wie mit Peking.',
    'Wir bauen den reinen Sozialismus aus eigener Kraft – ohne Kompromisse mit Revisionisten oder Imperialisten.');
  I('titoismus', 'Titoismus', 'radlinks', 'star', [-70, 75, 40, -10, -20, 0, 50, -90, 60, 40, 30, -50],
    'Jugoslawischer Sonderweg unter Josip Broz Tito: sozialistische Arbeiterselbstverwaltung, Föderalismus der Völker und Blockfreiheit zwischen Ost und West.',
    'Sozialismus ja – aber auf unserem eigenen Weg, weder von Moskau noch von Washington diktiert.');
  I('jakobinismus', 'Jakobinismus', 'radlinks', 'fire', [-30, 85, -10, -80, 60, 0, 30, -100, 30, -100, -50, -100],
    'Radikal-republikanische Strömung der Französischen Revolution um Robespierre: Volkssouveränität, Tugendrepublik, Zentralismus und revolutionärer Terror gegen die alte Ordnung.',
    'Die Republik der Gleichen muss gegen ihre Feinde mit unbeugsamer Tugend verteidigt werden.');
  I('linkskommunismus', 'Räte- & Linkskommunismus', 'radlinks', 'fist', [-100, 20, 0, -60, -90, -60, 20, -90, 70, 10, -80, -100],
    'Kommunistische Strömung, die Parteiherrschaft und Parlamentarismus ablehnt und die Macht direkt in die Hände von Arbeiterräten legen will.',
    'Alle Macht den Räten – nicht der Partei, nicht dem Parlament.');
  I('eurokommunismus', 'Eurokommunismus', 'radlinks', 'rose', [-75, 10, -10, -40, -30, -30, 0, -60, 30, -20, 10, 10],
    'Westeuropäischer Reformkommunismus der 1970er (PCI, PCE), der sich von Moskau löste und den Sozialismus auf demokratischem, pluralistischem Weg erreichen wollte.',
    'Sozialismus und Freiheit gehören zusammen – wir erreichen ihn durch Wahlen, nicht durch Panzer.');
  I('antiimperialismus', 'Antiimperialismus', 'radlinks', 'fist', [-70, 30, 70, -10, 30, -20, 0, -40, 100, 0, -30, -70],
    'Linke Weltanschauung, die vor allem die Vorherrschaft der USA und der NATO bekämpft und sich mit „Gegenmächten" des globalen Südens solidarisiert.',
    'Der wahre Feind des Friedens ist der westliche Imperialismus.');
  I('ökosozialismus', 'Ökosozialismus', 'radlinks', 'leaf', [-80, -10, -20, -70, -60, -70, -90, -70, 40, 10, -40, -60],
    'Verbindung von Marxismus und Ökologie: Der Kapitalismus mit seinem Wachstumszwang gilt als Hauptursache der Klimakrise und soll durch eine demokratische Planwirtschaft ersetzt werden.',
    'Die Klimakrise lässt sich nicht im Kapitalismus lösen – wir brauchen einen Systemwechsel.');

  /* ---------------- Linke ---------------- */
  I('demokratischer-sozialismus', 'Demokratischer Sozialismus', 'links', 'rose', [-70, -20, -10, -60, -40, -50, -40, -60, 30, -10, -20, -30],
    'Will die kapitalistische Wirtschaftsordnung durch demokratische Mittel überwinden: Vergesellschaftung großer Konzerne, starke Gewerkschaften und umfassender Sozialstaat.',
    'Demokratie darf nicht am Werkstor enden – auch die Wirtschaft muss den Menschen gehören.');
  I('sozialdemokratie', 'Sozialdemokratie', 'links', 'rose', [-40, 0, -40, -35, -25, -20, -20, -40, -40, -10, 30, 60],
    'Große Volksströmung der europäischen Linken: soziale Marktwirtschaft mit starkem Sozialstaat, Tarifpartnerschaft, Umverteilung und schrittweiser Reform innerhalb der Demokratie.',
    'Ich will eine gerechte Gesellschaft, in der niemand zurückgelassen wird – durch Reformen, nicht durch Revolution.');
  I('dritter-weg', 'Dritter Weg', 'links', 'rose', [5, 10, -55, -30, -30, -10, 0, -40, -65, -10, 50, 70],
    'Modernisierte Sozialdemokratie der 1990er (Blair, Schröder): Versöhnung von Markt und sozialer Gerechtigkeit, „Fördern und Fordern", Globalisierung als Chance.',
    'Wirtschaftliche Dynamik und soziale Gerechtigkeit sind kein Widerspruch.');
  I('nordisches-modell', 'Nordisches Modell', 'links', 'rose', [-30, 10, -10, -30, 0, 10, -10, -50, -30, -20, 30, 80],
    'Skandinavisches „Volksheim": hohe Steuern, universeller Sozialstaat, starke Gewerkschaften und offene Märkte bei großem gesellschaftlichem Vertrauen.',
    'Ein starker Sozialstaat und eine wettbewerbsfähige Wirtschaft machen gemeinsam ein gutes Land.');
  I('labourismus', 'Labourismus', 'links', 'fist', [-55, 5, 10, -10, 0, 10, 20, -30, -30, -20, 0, 30],
    'Gewerkschaftsnahe Arbeiterpolitik, die Löhne, Industriejobs und soziale Sicherheit der arbeitenden Klasse in den Mittelpunkt stellt – oft kulturell bodenständig.',
    'Politik muss zuerst für die arbeitenden Menschen da sein, die dieses Land am Laufen halten.');
  I('austromarxismus', 'Austromarxismus', 'links', 'rose', [-70, 10, -10, -40, -40, -10, 20, -70, 10, 10, 10, 0],
    'Österreichische Schule des Marxismus (Otto Bauer, Max Adler) im „Roten Wien": demokratischer Weg zum Sozialismus, Gemeindebauten, Kultur- und Nationalitätenautonomie.',
    'Der Sozialismus kommt durch die Mehrheit – und baut dabei Wohnungen, Schulen und Bäder für alle.');
  I('christlicher-sozialismus', 'Christlicher Sozialismus', 'links', 'cross', [-50, 0, -20, 10, -10, -30, -20, 70, -10, 10, 10, 20],
    'Verbindet christliche Nächstenliebe und Soziallehre mit sozialistischen Forderungen nach Gerechtigkeit, Gemeineigentum und Solidarität mit den Armen.',
    'Das Evangelium verpflichtet uns zur Parteinahme für die Armen und gegen die Herrschaft des Geldes.');
  I('progressivismus', 'Progressivismus', 'links', 'spark', [-30, -10, -50, -70, -50, -50, -50, -60, -40, -10, 20, 20],
    'Setzt auf gesellschaftlichen Fortschritt, Gleichstellung, Minderheitenrechte, Klimaschutz und einen aktiven, investierenden Staat.',
    'Die Gesellschaft soll gerechter, offener und vielfältiger werden – und die Politik muss diesen Wandel vorantreiben.');
  I('neue-linke', 'Neue Linke', 'links', 'fist', [-60, -50, -10, -80, -60, -70, -40, -80, 50, 30, -60, -60],
    'Aus 1968 hervorgegangene Linke, die neben Klassenfragen Emanzipation, Antiautoritarismus, Feminismus, Antirassismus und Basisbewegungen betont.',
    'Das Private ist politisch – Befreiung beginnt im Alltag, nicht erst nach der Revolution.');
  I('intersektionale-linke', 'Intersektionaler Feminismus', 'links', 'spark', [-60, -10, -40, -100, -80, -90, -60, -80, 30, 0, -30, -60],
    'Betont das Zusammenwirken verschiedener Diskriminierungen (Geschlecht, Herkunft, Klasse, Sexualität) und fordert tiefgreifende gesellschaftliche Umgestaltung.',
    'Niemand ist frei, solange nicht alle frei sind – Unterdrückung hat viele Gesichter.');
  I('linkspopulismus', 'Linkspopulismus', 'links', 'fist', [-65, 10, 40, -30, 0, -20, -20, -40, 50, -10, -80, -50],
    'Stellt „das Volk" gegen „die Oligarchie" und mobilisiert gegen Sparpolitik und Brüsseler Eliten – etwa Podemos, La France insoumise oder Syriza in ihren Anfängen.',
    'Die da oben haben Europa an die Banken verkauft – holen wir uns die Demokratie zurück!');
  I('linkskonservatismus', 'Linkskonservatismus', 'links', 'wheat', [-50, 30, 50, 20, 40, 50, 30, -10, 70, -20, -50, -10],
    'Verbindet linke Wirtschafts- und Sozialpolitik mit kultureller Bodenständigkeit, Migrationsbegrenzung und außenpolitischer Distanz zu NATO und USA.',
    'Soziale Gerechtigkeit braucht einen handlungsfähigen Nationalstaat, Frieden mit den Nachbarn und Respekt vor normalen Leuten.');
  I('marktsozialismus', 'Marktsozialismus', 'links', 'gear', [-40, 0, -10, -40, -30, -30, -20, -50, 10, 10, 0, 10],
    'Wirtschaft mit Märkten und Wettbewerb, in der Unternehmen jedoch den Beschäftigten oder der Gesellschaft gehören – etwa als Genossenschaften.',
    'Märkte können nützlich sein – aber die Betriebe sollten denen gehören, die darin arbeiten.');
  I('kooperativismus', 'Genossenschaftsbewegung', 'links', 'hands', [-50, -30, -10, -20, -20, -20, -40, -20, 0, 60, -40, 40],
    'Organisiert Wirtschaft in freiwilligen, demokratisch geführten Genossenschaften – von Raiffeisen bis Mondragón.',
    'Gemeinsam wirtschaften, gemeinsam entscheiden – einer für alle, alle für einen.');
  I('pazifismus', 'Pazifismus', 'links', 'dove', [-30, -50, -30, -40, -60, -50, -40, -30, 80, 30, -20, 20],
    'Lehnt Krieg, Aufrüstung und militärische Gewalt grundsätzlich ab und setzt auf Diplomatie, Abrüstung und gewaltfreie Konfliktlösung.',
    'Frieden schaffen ohne Waffen – jeder Krieg ist eine Niederlage der Menschlichkeit.');
  I('linker-separatismus', 'Linker Regionalnationalismus', 'regional', 'flag', [-50, -10, -50, -50, 30, -40, -40, -50, 0, 100, -30, -30],
    'Verbindet das Streben nach Unabhängigkeit einer Region oder Nation ohne Staat (z. B. Baskenland, Katalonien, Irland) mit linker Sozialpolitik und Pro-Europäismus.',
    'Unser Volk soll frei über seine Zukunft entscheiden – als sozialer, offener Staat in Europa.');

  /* ---------------- Grün & Ökologisch ---------------- */
  I('grüne-politik', 'Grüne Politik', 'gruen', 'leaf', [-35, -25, -55, -65, -50, -55, -90, -50, -35, 20, -10, 30],
    'Ökologie, soziale Gerechtigkeit, Basisdemokratie und Gewaltfreiheit sind die vier Säulen der grünen Bewegung, die seit den 1980ern in ganz Europa Parlamente erobert hat.',
    'Wir haben die Erde nur von unseren Kindern geborgt – Klimaschutz ist die soziale Frage unseres Jahrhunderts.');
  I('ökoliberalismus', 'Grünliberalismus', 'gruen', 'leaf', [25, -30, -65, -60, -50, -40, -70, -60, -55, 10, 30, 50],
    'Will Umweltschutz mit Marktmechanismen erreichen – CO₂-Preise statt Verbote, Innovation statt Verzicht – kombiniert mit gesellschaftlicher Liberalität.',
    'Der Markt kann das Klima retten, wenn wir ihm die richtigen Preise geben.');
  I('postwachstum', 'Postwachstum', 'gruen', 'leaf', [-70, -20, -20, -50, -50, -50, -100, -60, 30, 40, -50, -40],
    'Hält dauerhaftes Wirtschaftswachstum für ökologisch unmöglich und will Wohlstand neu definieren: weniger Konsum, kürzere Arbeitszeit, lokale Kreisläufe.',
    'Genug ist genug – ein gutes Leben braucht nicht immer mehr, sondern anders.');
  I('tiefenökologie', 'Tiefenökologie', 'gruen', 'mountain', [-40, -20, 0, -30, -40, -20, -100, -20, 30, 60, -50, -60],
    'Philosophie nach Arne Næss, die der Natur einen Eigenwert unabhängig vom menschlichen Nutzen zuspricht und eine radikale Abkehr von der Industriegesellschaft fordert.',
    'Der Mensch ist nicht die Krone der Schöpfung, sondern ein Teil des Lebensnetzes.');
  I('bioregionalismus', 'Bioregionalismus', 'gruen', 'mountain', [-30, -50, -10, -40, -40, -30, -90, -30, 30, 90, -60, -30],
    'Will Politik und Wirtschaft nach natürlichen Regionen (Flusstälern, Ökosystemen) statt nach Nationalstaaten organisieren – kleinräumig und selbstverwaltet.',
    'Wir sollten dort entscheiden, wo wir leben – im Einklang mit unserem Tal, unserem Fluss, unserem Land.');
  I('ökokonservatismus', 'Ökokonservatismus', 'gruen', 'oak', [-10, 20, 10, 50, 30, 30, -60, 40, 0, 40, 0, 40],
    'Bewahrung der Schöpfung als konservative Aufgabe: Heimat, Landschaft und bäuerliche Kultur schützen, skeptisch gegenüber Konsumismus und Globalisierung.',
    'Wer die Heimat liebt, muss auch ihre Wälder, Felder und Flüsse bewahren.');
  I('ökoautoritarismus', 'Ökoautoritarismus', 'gruen', 'leaf', [-60, 80, -20, 0, -10, 20, -100, -40, 20, -60, 60, -40],
    'Hält Demokratie für zu langsam, um die Klimakrise zu bewältigen, und fordert einen starken Staat, der Konsum und Produktion streng reguliert.',
    'Wenn der Planet brennt, können wir uns endlose Debatten nicht mehr leisten.');
  I('tierrechtspolitik', 'Tierrechtspolitik', 'gruen', 'leaf', [-40, -20, -30, -60, -40, -40, -95, -50, -10, 0, -20, 20],
    'Stellt den Schutz und die Rechte von Tieren ins Zentrum der Politik – etwa die niederländische Partij voor de Dieren oder die deutsche Tierschutzpartei.',
    'Eine Gesellschaft erkennt man daran, wie sie mit den Schwächsten umgeht – auch mit den Tieren.');

  /* ---------------- Mitte & Liberal ---------------- */
  I('liberalismus', 'Liberalismus', 'mitte', 'torch', [40, -35, -45, -40, -30, -10, 10, -50, -55, 10, 40, 60],
    'Freiheit des Individuums in Wirtschaft, Gesellschaft und Politik: Rechtsstaat, Marktwirtschaft, Bürgerrechte, Toleranz und offene Gesellschaft.',
    'Jeder Mensch soll sein Leben frei gestalten können – solange er die Freiheit anderer nicht verletzt.');
  I('sozialliberalismus', 'Sozialliberalismus', 'mitte', 'torch', [-10, -35, -60, -55, -45, -35, -30, -55, -55, 0, 30, 60],
    'Liberalismus, der echte Freiheit erst durch soziale Absicherung, Bildungschancen und einen aktiven Staat für gewährleistet hält.',
    'Freiheit ist nur dann echt, wenn alle die Chance haben, sie auch zu nutzen.');
  I('klassischer-liberalismus', 'Klassischer Liberalismus', 'mitte', 'scales', [70, -50, -10, -10, -10, -10, 30, -40, -40, 30, 40, 50],
    'Tradition von Locke, Smith und Mill: begrenzter Staat, Freihandel, Eigentumsrechte, Gewaltenteilung und Freiheit von staatlicher Bevormundung.',
    'Der Staat soll Leben, Freiheit und Eigentum schützen – und sich ansonsten zurückhalten.');
  I('ordoliberalismus', 'Ordoliberalismus', 'mitte', 'scales', [40, 10, -20, 0, -10, 10, 20, -10, -50, 0, 50, 80],
    'Deutsche „Freiburger Schule" und Grundlage der Sozialen Marktwirtschaft: Wettbewerb mit klarem staatlichem Ordnungsrahmen, Preisstabilität und solide Finanzen.',
    'Der Staat setzt die Spielregeln, der Markt spielt das Spiel – so entsteht Wohlstand für alle.');
  I('neoliberalismus', 'Neoliberalismus', 'mitte', 'chart', [80, 10, -40, -10, -30, -20, 50, -20, -70, -20, 60, 50],
    'Politik der Deregulierung, Privatisierung, Haushaltsdisziplin und Freihandels, die seit den 1980ern weltweit prägend wurde.',
    'Wettbewerb, offene Märkte und schlanke Staaten sind der Motor des Fortschritts.');
  I('zentrismus', 'Zentrismus', 'mitte', 'scales', [5, 5, -30, -5, -5, 5, 0, -10, -40, 0, 30, 90],
    'Pragmatische Politik der Mitte, die Extreme meidet, auf Ausgleich setzt und Lösungen je nach Sachlage von links wie rechts übernimmt.',
    'Die Wahrheit liegt meist in der Mitte – wir brauchen Lösungen, keine Ideologien.');
  I('radikaler-zentrismus', 'Radikaler Zentrismus', 'mitte', 'bolt', [10, 0, -50, -20, -20, 0, 0, -30, -40, 0, 40, -10],
    'Will das Links-rechts-Schema sprengen und mit mutigen, unkonventionellen Reformen das politische System grundlegend modernisieren.',
    'Weder links noch rechts – sondern nach vorne, und zwar mit Tempo.');
  I('pro-europäismus', 'Progressiver Pro-Europäismus', 'mitte', 'stars', [25, 15, -80, -25, -20, 5, 0, -50, -50, -30, 60, 40],
    'Setzt auf ein souveränes, handlungsfähiges Europa mit eigener Verteidigung, Industriepolitik und Reformen – verbunden mit wirtschaftsliberaler Modernisierung.',
    'Nur ein vereintes, starkes Europa kann im Wettbewerb mit den USA und China bestehen.');
  I('europäischer-föderalismus', 'Europäischer Föderalismus', 'mitte', 'stars', [5, -10, -100, -40, -80, -40, -20, -40, -60, 20, 30, 30],
    'Ziel sind die Vereinigten Staaten von Europa: ein europäischer Bundesstaat mit Regierung, Parlament und gemeinsamer Außen- und Verteidigungspolitik.',
    'Die Nationalstaaten Europas sind zu klein für die Welt von morgen – unsere Zukunft ist eine europäische Föderation.');
  I('liberaler-internationalismus', 'Liberaler Internationalismus', 'mitte', 'globe', [30, -10, -60, -40, -60, -30, 0, -40, -90, 0, 40, 40],
    'Internationale Ordnung auf Basis von Völkerrecht, multilateralen Institutionen, Freihandel und Bündnissen der Demokratien.',
    'Demokratien müssen zusammenstehen und eine regelbasierte Weltordnung verteidigen.');
  I('technokratie', 'Technokratie', 'mitte', 'atom', [10, 40, -60, -20, -30, 0, 30, -60, -40, -50, 100, 30],
    'Regierung durch Experten und Fachwissen statt durch Parteipolitik und Volksstimmung – Entscheidungen sollen wissenschaftlich begründet sein.',
    'Gute Politik ist eine Frage von Kompetenz und Evidenz, nicht von Beliebtheit.');
  I('kommunitarismus', 'Kommunitarismus', 'mitte', 'hands', [-10, 10, -10, 10, 10, 0, -10, 10, -10, 40, -10, 40],
    'Betont Gemeinschaft, Bürgersinn und gemeinsame Werte gegenüber dem reinen Individualismus – sowohl gegen Marktradikalismus als auch gegen anonymen Staat.',
    'Wir sind keine isolierten Einzelnen – Familie, Nachbarschaft und Gemeinde machen uns erst zu Bürgern.');
  I('laizistischer-republikanismus', 'Laizistischer Republikanismus', 'mitte', 'torch', [0, 30, -20, -40, 40, 0, 20, -90, -20, -80, 40, 40],
    'Französische Tradition der „République une et indivisible": strikte Trennung von Religion und Staat, gleiche Bürger ohne Gruppenrechte, starker Zentralstaat.',
    'Die Republik kennt nur Bürger – keine Konfessionen, keine Gemeinschaften, keine Privilegien.');
  I('regionalismus', 'Föderalismus & Regionalismus', 'regional', 'nodes', [0, -10, -30, 0, -10, 0, -10, 0, -30, 90, -10, 40],
    'Will Macht möglichst bürgernah verteilen: starke Regionen, Gemeindeautonomie und Subsidiarität in einem „Europa der Regionen".',
    'Was vor Ort entschieden werden kann, soll auch vor Ort entschieden werden.');
  I('bürgerlicher-regionalnationalismus', 'Bürgerlicher Regionalnationalismus', 'regional', 'flag', [40, 20, -20, 20, 40, 30, 10, 0, -30, 100, 20, 20],
    'Wirtschaftsliberale und gemäßigt konservative Unabhängigkeits- oder Autonomiebewegungen wie die flämische N-VA, die katalanische Junts oder die baskische PNV.',
    'Unsere Region kann sich selbst besser regieren – fleißig, eigenständig und europäisch.');
  I('feminismus', 'Liberaler Feminismus', 'mitte', 'spark', [0, -30, -50, -80, -40, -40, -30, -60, -40, 0, 30, 40],
    'Gleichberechtigung von Frauen und Männern durch gleiche Rechte, Chancen und Repräsentation – innerhalb der liberalen Demokratie.',
    'Frauen sollen dieselben Chancen haben wie Männer – im Beruf, in der Politik und zu Hause.');
  I('piratenpolitik', 'Piratenpolitik', 'mitte', 'atom', [-10, -80, -40, -60, -50, -40, -20, -60, -20, 30, -70, 20],
    'Netzpolitische Bewegung für digitale Bürgerrechte, Datenschutz, Transparenz, freies Wissen und Mitbestimmung über das Internet.',
    'Freiheit im Netz ist Freiheit überhaupt – Überwachung ist kein Sicherheitskonzept.');
  I('technoprogressivismus', 'Technoprogressivismus', 'mitte', 'atom', [10, -20, -60, -80, -70, -40, 60, -90, -40, 0, 60, -30],
    'Setzt auf Wissenschaft, Technik und künstliche Intelligenz als Mittel menschlicher Befreiung – bis hin zum Transhumanismus.',
    'Technologie kann Krankheit, Armut und sogar das Altern besiegen – wenn wir es wagen.');
  I('anti-establishment-zentrismus', 'Populismus der Mitte', 'mitte', 'hands', [-10, 0, 20, -10, 10, 10, -30, -30, 20, 10, -90, -30],
    'Bewegungen jenseits von links und rechts, die vor allem gegen die „Kaste" der etablierten Politik antreten – wie die frühe Fünf-Sterne-Bewegung in Italien.',
    'Die alten Parteien sind das Problem – die Bürger sollen selbst entscheiden.');

  /* ---------------- Konservative Rechte ---------------- */
  I('konservatismus', 'Konservatismus', 'rechts', 'oak', [35, 40, 10, 60, 40, 40, 30, 40, -50, 0, 50, 70],
    'Bewahrung bewährter Institutionen, Traditionen und Werte; skeptisch gegenüber radikalem Wandel, für Ordnung, Familie, Eigentum und nationale Identität.',
    'Was über Generationen gewachsen ist, verdient Respekt – Veränderung ja, aber mit Augenmaß.');
  I('liberalkonservatismus', 'Liberalkonservatismus', 'rechts', 'oak', [55, 25, -20, 30, 20, 30, 30, 10, -60, 0, 50, 70],
    'Verbindet freie Marktwirtschaft und Eigenverantwortung mit gemäßigt konservativen Werten – das Leitbild vieler bürgerlicher Volksparteien.',
    'Freie Märkte und starke Werte gehören zusammen.');
  I('christdemokratie', 'Christdemokratie', 'rechts', 'cross', [15, 20, -50, 40, 10, 20, 10, 60, -60, 10, 50, 80],
    'Politik auf Grundlage des christlichen Menschenbilds und der katholischen Soziallehre: Soziale Marktwirtschaft, Subsidiarität, Familie und europäische Einigung.',
    'Der Mensch in seiner Würde steht im Mittelpunkt – getragen von christlichen Werten und einem geeinten Europa.');
  I('paternalistischer-konservatismus', 'Paternalistischer Konservatismus', 'rechts', 'crown', [-10, 40, 10, 55, 40, 30, 20, 40, -40, -20, 60, 70],
    'Konservatismus nach Disraeli („One Nation"): Die Oberschicht trägt Verantwortung für die Armen; Sozialreformen sollen den Zusammenhalt der Nation sichern.',
    'Ich will eine Nation, in der verantwortungsvolle Eliten die Schwachen schützen und die Klassen zusammenhalten.');
  I('christlicher-konservatismus', 'Christlicher Konservatismus', 'rechts', 'cross', [30, 50, 30, 90, 50, 50, 30, 95, -20, 0, 40, 40],
    'Stellt Glauben, Lebensschutz und traditionelle Familie ins Zentrum der Politik und wendet sich gegen Säkularisierung und gesellschaftliche Liberalisierung.',
    'Ohne Gott und Familie verliert eine Gesellschaft ihr Fundament.');
  I('nationalkonservatismus', 'Nationalkonservatismus', 'rechts', 'eagle', [25, 60, 70, 75, 75, 80, 40, 50, -10, -10, 0, 30],
    'Verbindet konservative Werte mit starker Betonung nationaler Souveränität, Identität und Grenzen – skeptisch gegenüber EU-Zentralismus und Migration.',
    'Unsere Nation, unsere Werte, unsere Grenzen – darüber entscheiden wir selbst.');
  I('illiberale-demokratie', 'Illiberale Demokratie', 'rechts', 'eagle', [10, 75, 65, 80, 85, 95, 40, 60, 40, -60, -20, 10],
    'Regierungsmodell, das sich auf Wahlsiege beruft, aber Gewaltenteilung, unabhängige Medien und Justiz einschränkt – im Namen christlicher und nationaler Werte.',
    'Die Mehrheit hat gewählt – nicht Brüssel, nicht die Medien, nicht die Richter.');
  I('thatcherismus', 'Thatcherismus', 'rechts', 'chart', [85, 55, 50, 40, 45, 40, 50, 20, -80, -60, 40, 10],
    'Politik Margaret Thatchers: Privatisierung, Entmachtung der Gewerkschaften, Steuersenkungen, harte Hand bei Recht und Ordnung, Atlantizismus und EU-Skepsis.',
    'Es gibt so etwas wie Gesellschaft nicht – es gibt Individuen und Familien, die Verantwortung übernehmen.');
  I('gaullismus', 'Gaullismus', 'rechts', 'flag', [0, 55, 40, 40, 65, 40, 40, 20, 20, -60, 20, 30],
    'Politik Charles de Gaulles: nationale Größe und Unabhängigkeit Frankreichs, starke Präsidialmacht, eigene Atommacht und Distanz zu den USA.',
    'Frankreich kann nicht Frankreich sein ohne Größe – und ohne Unabhängigkeit.');
  I('neokonservatismus', 'Neokonservatismus', 'rechts', 'eagle', [60, 60, 10, 50, 40, 40, 40, 40, -100, -30, 50, 30],
    'Verbindet Marktwirtschaft und traditionelle Werte mit einer offensiven Außenpolitik, die Demokratie und westliche Interessen auch militärisch verteidigt.',
    'Freiheit muss notfalls auch mit Stärke verteidigt werden.');
  I('konstitutioneller-monarchismus', 'Konstitutioneller Monarchismus', 'rechts', 'crown', [20, 30, 0, 60, 50, 30, 20, 50, -30, -20, 90, 70],
    'Befürwortet eine Monarchie als überparteiliches Staatsoberhaupt und Symbol der Kontinuität, eingebettet in eine parlamentarische Verfassung.',
    'Eine Krone über den Parteien gibt der Nation Halt und Würde.');
  I('euroskeptizismus', 'Bürgerlicher Euroskeptizismus', 'rechts', 'flag', [45, 30, 80, 30, 50, 50, 30, 10, -30, 10, -20, 30],
    'Wirtschaftsliberale Kritik an der EU als bürokratisch, undemokratisch und überreguliert – bis hin zum Austritt nach britischem Vorbild.',
    'Handel mit Europa ja – Regieren aus Brüssel nein.');
  I('agrarismus', 'Agrarismus', 'rechts', 'wheat', [10, 10, 40, 60, 40, 40, 40, 50, 0, 60, -20, 50],
    'Politik für Bauern und ländlichen Raum: Familienbetriebe, Landbesitz, Dezentralität und bodenständige Werte – historisch stark in Mittel- und Osteuropa.',
    'Wer das Land bestellt, ernährt die Nation – und verdient Respekt und Mitsprache.');
  I('traditionalismus', 'Traditionalistischer Konservatismus', 'rechts', 'oak', [20, 50, 20, 85, 50, 40, 0, 70, 0, 40, 70, 80],
    'Konservatismus nach Edmund Burke: Gesellschaft als Vertrag zwischen Toten, Lebenden und Ungeborenen; Achtung vor Religion, Hierarchie und organisch Gewachsenem.',
    'Die Weisheit der Jahrhunderte wiegt mehr als die Theorien einer einzigen Generation.');
  I('paläokonservatismus', 'Paläokonservatismus', 'rechts', 'oak', [40, 40, 80, 90, 70, 90, 20, 70, 70, 60, 0, 10],
    'Strenger Kulturkonservatismus mit Ablehnung von Interventionismus, Masseneinwanderung, Globalisierung und supranationalen Organisationen.',
    'Keine fremden Kriege, keine offenen Grenzen – bewahren wir, was unsere Vorfahren uns hinterlassen haben.');

  /* ---------------- Extreme Rechte & Reaktion ---------------- */
  I('rechtspopulismus', 'Rechtspopulismus', 'rechtsaussen', 'megaphone', [20, 55, 80, 60, 75, 95, 60, 30, 30, 0, -80, -20],
    'Stellt das „einfache Volk" gegen „korrupte Eliten", lehnt Einwanderung, Islam und EU-Zentralismus ab und fordert mehr direkte Demokratie.',
    'Wir holen uns unser Land zurück – von den Eliten, die das Volk vergessen haben.');
  I('identitäre-bewegung', 'Identitäre Bewegung', 'rechtsaussen', 'flag', [10, 50, 60, 70, 95, 100, 10, 10, 60, 40, -50, -60],
    'Neurechte Bewegung, die „ethnokulturelle Identität" bewahren will, vor einem „Großen Austausch" warnt und „Remigration" fordert.',
    'Jedes Volk hat das Recht, seine Identität zu bewahren.');
  I('neue-rechte', 'Neue Rechte', 'rechtsaussen', 'book', [-10, 60, -10, 70, 70, 85, -20, -20, 80, 60, 30, -40],
    'Intellektuelle Strömung um Alain de Benoist („Nouvelle Droite"), die mit „Metapolitik" kulturelle Hegemonie anstrebt: Ethnopluralismus, Antiliberalismus, Antiamerikanismus und ein „Europa der Völker".',
    'Bevor sich die Politik ändert, muss sich die Kultur ändern.');
  I('völkischer-nationalismus', 'Völkischer Nationalismus', 'rechtsaussen', 'eagle', [0, 85, 100, 85, 100, 100, 20, 10, 70, -60, -20, -80],
    'Definiert die Nation über Abstammung und „Blut", nicht über Staatsbürgerschaft – ein Kernelement des deutschen Rechtsextremismus seit dem 19. Jahrhundert.',
    'Das Volk ist eine Schicksalsgemeinschaft der Abstammung.');
  I('ultranationalismus', 'Ultranationalismus', 'rechtsaussen', 'eagle', [10, 85, 100, 70, 100, 100, 60, 30, 40, -60, -10, -60],
    'Extreme Überhöhung der eigenen Nation über alle anderen Werte, oft verbunden mit Feindbildern, Gebietsansprüchen und Ablehnung internationaler Bindungen.',
    'Die Nation steht über allem.');
  I('faschismus', 'Faschismus', 'rechtsaussen', 'fasces', [-10, 100, 90, 70, 100, 90, 60, 10, 80, -100, 40, -90],
    'Totalitäre Ideologie Mussolinis: Kult der Nation und des Führers, Einparteienstaat, Korporatismus, Militarismus und gewaltsame Unterdrückung jeder Opposition.',
    'Alles im Staat, nichts außerhalb des Staates, nichts gegen den Staat.');
  I('nationalsozialismus', 'Nationalsozialismus', 'rechtsaussen', 'eagle', [-10, 100, 90, 80, 100, 100, 60, -20, 80, -100, 40, -100],
    'Rassistische, antisemitische und totalitäre Ideologie Hitlers, die zu Weltkrieg und Holocaust führte. Steht in Deutschland und Österreich unter Verbot.',
    'Rassenwahn, Führerkult und Vernichtungskrieg – die verbrecherischste Ideologie der europäischen Geschichte.');
  I('klerikalfaschismus', 'Klerikalfaschismus', 'rechtsaussen', 'cross', [-5, 90, 80, 90, 80, 70, 30, 95, 40, -80, 60, -40],
    'Autoritäre Regime, die faschistische Herrschaftsmethoden mit katholischer Kirchenbindung verbinden – etwa der österreichische Ständestaat oder die Slowakei Tisos.',
    'Ein christlicher Staat, gebaut auf Stände, Autorität und Glauben.');
  I('francoismus', 'Francoismus', 'rechtsaussen', 'cross', [10, 95, 70, 95, 90, 80, 50, 95, 30, -100, 70, -30],
    'Diktatur Francisco Francos in Spanien (1939–1975): Nationalkatholizismus, Zentralismus, Antikommunismus und Unterdrückung regionaler Sprachen.',
    'Ein Spanien, groß und frei – unter Gott und einem Caudillo.');
  I('integralismus', 'Integraler Nationalismus', 'rechtsaussen', 'crown', [0, 80, 80, 95, 95, 80, 30, 85, 50, 10, 80, -50],
    'Lehre Charles Maurras’ und der Action française: Monarchie, Katholizismus als Ordnungsprinzip, Nation über allem und Ablehnung der Republik.',
    'Die Nation zuerst – und die Monarchie als ihre natürliche Ordnung.');
  I('absolutismus', 'Absolutismus', 'rechtsaussen', 'crown', [0, 100, null, 90, 30, 40, 20, 80, null, -100, 100, 30],
    'Herrschaftsform, in der der Monarch „von Gottes Gnaden" ungeteilte Macht ausübt – wie unter Ludwig XIV. oder Peter dem Großen.',
    'Der Staat bin ich.');
  I('feudalismus', 'Feudalismus', 'rechtsaussen', 'castle', [-20, 85, null, 90, 10, 40, 0, 90, null, 90, 100, 90],
    'Mittelalterliche Ordnung aus Lehensbeziehungen zwischen Herrschern, Adel und Bauern, gestützt auf Grundbesitz, Stände und Kirche.',
    'Jeder Stand an seinem Platz – Treue gegen Schutz, wie es Gott gefügt hat.');
  I('theokratie', 'Christliche Theokratie', 'rechtsaussen', 'cross', [20, 85, 60, 100, 60, 60, 10, 100, 20, -20, 60, -20],
    'Herrschaft nach religiösem Gesetz, in der die Kirche oder religiöse Autoritäten die Politik bestimmen.',
    'Gottes Gesetz steht über jedem menschlichen Gesetz.');
  I('islamismus', 'Islamismus', 'rechtsaussen', 'moon', [-10, 90, 70, 100, -20, 0, 20, 100, 90, -20, 60, -80],
    'Politische Ideologie, die Staat und Gesellschaft nach einer strengen Auslegung der Scharia ordnen will.',
    'Die Souveränität gehört Gott allein.');
  I('eurasismus', 'Eurasismus', 'rechtsaussen', 'compass', [-20, 90, 100, 90, 80, 60, 40, 80, 100, -40, 40, -50],
    'Russische Großraumideologie (Dugin), die ein orthodox-traditionalistisches „Eurasien" gegen den liberalen Westen und die „atlantische" Welt stellt.',
    'Die Welt muss multipolar werden – gegen die Hegemonie des liberalen Westens.');
  I('europa-nationalismus', 'Europa-Nationalismus', 'rechtsaussen', 'stars', [10, 70, -80, 70, 40, 90, 30, 20, 80, -20, 20, -60],
    'Pan-europäischer Nationalismus (Oswald Mosleys „Europe a Nation"): Europa als eine weiße Nation, abgeschottet gegen Einwanderung und unabhängig von den USA.',
    'Europa ist unsere Nation – vereint, stark und unabhängig von Amerika und Russland.');
  I('neoreaktion', 'Neoreaktion', 'rechtsaussen', 'atom', [80, 90, 50, 60, 30, 60, 70, -20, 30, 40, 100, -80],
    'Antidemokratische Denkschule (Curtis Yarvin, Nick Land), die Demokratie durch einen Staat ersetzen will, der wie ein Unternehmen von einem CEO-Monarchen geführt wird.',
    'Demokratie ist gescheitert – Staaten sollten geführt werden wie Unternehmen.');

  /* ---------------- Dritte Position ---------------- */
  I('nationalbolschewismus', 'Nationalbolschewismus', 'dritte', 'star', [-70, 95, 100, 70, 95, 85, 40, 0, 100, -80, 10, -95],
    'Synthese aus Kommunismus und extremem Nationalismus, entstanden in Weimar (Niekisch) und im postsowjetischen Russland (Limonow).',
    'Rote Wirtschaft, schwarze Ordnung – gegen den liberalen Westen.');
  I('strasserismus', 'Strasserismus', 'dritte', 'fist', [-60, 85, 90, 70, 100, 95, 40, 0, 80, -50, -20, -90],
    'Nach den Brüdern Strasser benannter „linker" Flügel des frühen Nationalsozialismus mit antikapitalistischer Rhetorik und völkischem Nationalismus.',
    'Nationale Revolution gegen Kapital und Marxismus zugleich.');
  I('nationalsyndikalismus', 'Nationalsyndikalismus', 'dritte', 'gear', [-50, 85, 80, 80, 95, 80, 40, 50, 60, -60, -10, -80],
    'Verbindet Nationalismus mit syndikalistischer Wirtschaftsordnung in staatlich gelenkten Einheitsgewerkschaften – etwa die spanische Falange.',
    'Die Nation ist eine Gemeinschaft der Arbeit – nicht der Klassen.');
  I('korporatismus', 'Korporatismus', 'dritte', 'gear', [-20, 70, 40, 60, 60, 40, 40, 40, 20, -30, 40, 0],
    'Gesellschaft als Organismus aus Berufsständen: Arbeitgeber und Arbeitnehmer werden unter staatlicher Aufsicht in Korporationen zusammengeführt statt im Klassenkampf.',
    'Kapital und Arbeit gehören an einen Tisch – unter dem Dach der Nation.');
  I('distributismus', 'Distributismus', 'dritte', 'wheat', [-30, 0, 10, 75, 30, 20, -30, 90, 0, 70, 0, 20],
    'Katholische Wirtschaftslehre (Chesterton, Belloc): Eigentum an Produktionsmitteln soll möglichst breit gestreut sein – Kleinbetriebe, Handwerk, Familienhöfe.',
    'Nicht wenige Kapitalisten und nicht der Staat – möglichst viele Eigentümer.');
  I('dritte-position', 'Dritte Position', 'dritte', 'bolt', [-40, 70, 80, 60, 90, 90, 0, 0, 80, 0, -30, -70],
    'Nachkriegsströmung, die „weder Kapitalismus noch Kommunismus" will und einen national-revolutionären dritten Weg propagiert.',
    'Weder Washington noch Moskau – eine nationale Revolution für die Völker.');
  I('sozialer-nationalismus', 'Sozialer Nationalismus', 'dritte', 'flag', [-50, 40, 70, 30, 80, 60, 20, 0, 60, -30, -30, -20],
    'Verbindet soziale Umverteilung und Schutz der heimischen Arbeiter mit nationaler Souveränität und Ablehnung globalisierter Märkte.',
    'Unsere Arbeitsplätze, unser Sozialstaat, unsere Nation – zuerst.');
  I('bonapartismus', 'Bonapartismus', 'dritte', 'crown', [0, 80, 20, 40, 70, 30, 40, 30, 30, -90, -60, -20],
    'Plebiszitäre Herrschaft nach Napoleon: Ein charismatischer Führer regiert gestützt auf Volksabstimmungen, Armee und zentralisierte Verwaltung über den Parteien.',
    'Das Volk hat gesprochen – und es hat mir die Führung anvertraut.');
  I('kemalismus', 'Kemalismus', 'dritte', 'sun', [-20, 80, -10, -50, 90, 30, 50, -90, -20, -90, 40, -60],
    'Gründungsideologie der modernen Türkei: Republikanismus, Nationalismus, Laizismus, Etatismus, Populismus und Reformismus („sechs Pfeile").',
    'Die Nation kann nur durch radikale Modernisierung und Säkularisierung stark werden.');
  I('panslawismus', 'Panslawismus', 'dritte', 'compass', [-10, 70, 90, 70, 80, 50, 40, 70, 90, -50, 30, -30],
    'Bewegung zur kulturellen und politischen Einheit aller slawischen Völker, historisch oft unter russischer Führung.',
    'Alle slawischen Völker sind Brüder – vereint sind wir stark.');

  /* ---------------- Libertär ---------------- */
  I('libertarismus', 'Libertarismus', 'libertaer', 'coin', [90, -80, 50, 0, -20, -30, 60, -30, 40, 60, -20, 0],
    'Maximale individuelle Freiheit und minimaler Staat: freie Märkte, niedrige Steuern, keine Bevormundung – in Wirtschaft wie im Privatleben.',
    'Mein Leben, mein Eigentum, meine Entscheidung – der Staat hat sich herauszuhalten.');
  I('minarchismus', 'Minarchismus', 'libertaer', 'shield', [95, -70, 60, 10, 0, 0, 60, -20, 40, 40, 0, 0],
    'Der Staat soll sich auf Polizei, Gerichte und Landesverteidigung beschränken („Nachtwächterstaat") – alles andere regeln Markt und Zivilgesellschaft.',
    'Der Staat ist ein Nachtwächter – nicht mehr und nicht weniger.');
  I('paläolibertarismus', 'Paläolibertarismus', 'libertaer', 'coin', [95, -60, 90, 70, 40, 60, 60, 50, 60, 80, -30, -20],
    'Verbindet radikalen Marktliberalismus mit kulturellem Konservatismus, Dezentralisierung und Ablehnung von Zentralbanken und supranationalen Institutionen.',
    'Freie Märkte, starke Familien, kleine Gemeinschaften – und kein Brüssel, kein Washington.');
  I('linkslibertarismus', 'Linkslibertarismus', 'libertaer', 'feather', [-40, -80, -20, -70, -70, -70, -40, -70, 20, 50, -50, -20],
    'Verbindet radikale persönliche Freiheit mit sozialer Gleichheit: gegen Staatsgewalt wie gegen Konzernmacht.',
    'Frei von Staat und Kapital – Freiheit muss für alle gleich sein.');
  I('georgismus', 'Georgismus', 'libertaer', 'mountain', [30, -50, -10, -30, -30, -40, -30, -30, 0, 30, 0, 40],
    'Nach Henry George: Boden gehört allen – deshalb soll vor allem Grund und Boden besteuert werden, während Arbeit und Kapital steuerfrei bleiben.',
    'Was der Mensch erarbeitet, gehört ihm – der Boden aber gehört uns allen.');
  I('objektivismus', 'Objektivismus', 'libertaer', 'tower', [100, -60, 20, -30, -40, -30, 80, -100, -30, 40, 60, 0],
    'Philosophie Ayn Rands: rationaler Egoismus, Laissez-faire-Kapitalismus und Ablehnung jedes Altruismus und jeder Religion.',
    'Ich lebe nicht für andere und verlange nicht, dass andere für mich leben.');
  I('kryptoliberalismus', 'Digitaler Libertarismus', 'libertaer', 'coin', [80, -90, 40, -30, -60, -50, 50, -60, 20, 80, -20, -50],
    'Freiheit durch Technologie: Kryptowährungen, Verschlüsselung und dezentrale Netzwerke sollen staatliche Kontrolle über Geld und Daten überflüssig machen.',
    'Code ist Gesetz – und Bitcoin ist Freiheit.');
  I('anarchokapitalismus', 'Anarchokapitalismus', 'anarch', 'coin', [100, -100, 80, 0, -50, -40, 70, -30, 50, 100, -30, -40],
    'Will den Staat vollständig abschaffen und alle Leistungen – auch Sicherheit und Recht – durch freiwillige Verträge auf freien Märkten ersetzen.',
    'Steuern sind Raub – eine Gesellschaft freier Verträge braucht keinen Staat.');

  /* ---------------- Anarchismus ---------------- */
  I('anarchokommunismus', 'Anarchokommunismus', 'anarch', 'anarchy', [-100, -100, 0, -70, -90, -90, -40, -90, 70, 100, -100, -100],
    'Herrschaftsfreie Gesellschaft ohne Staat, Geld und Privateigentum, in der freie Kommunen nach dem Prinzip „Jeder nach seinen Fähigkeiten, jedem nach seinen Bedürfnissen" leben.',
    'Weder Gott noch Herr – eine Welt freier, gleicher Gemeinschaften.');
  I('anarchosyndikalismus', 'Anarchosyndikalismus', 'anarch', 'gear', [-90, -95, 0, -50, -80, -70, 0, -80, 60, 90, -90, -90],
    'Revolutionäre Gewerkschaften sollen durch Generalstreik Kapital und Staat überwinden und die Wirtschaft selbst verwalten – wie die spanische CNT 1936.',
    'Die Befreiung der Arbeiter kann nur das Werk der Arbeiter selbst sein.');
  I('mutualismus', 'Mutualismus', 'anarch', 'hands', [-40, -90, 0, -40, -60, -60, -20, -60, 40, 90, -80, -30],
    'Anarchistische Lehre Proudhons: Gegenseitigkeit, Genossenschaften, Volksbanken mit zinslosem Kredit und freier Austausch zwischen Produzenten.',
    'Eigentum ist Diebstahl – aber Besitz durch eigene Arbeit ist Freiheit.');
  I('grüner-anarchismus', 'Grüner Anarchismus', 'anarch', 'leaf', [-80, -100, 10, -60, -70, -60, -100, -60, 60, 100, -90, -90],
    'Verbindet Anarchismus mit radikaler Ökologie; manche Strömungen kritisieren Zivilisation und Industrie insgesamt.',
    'Die Herrschaft über die Natur und die Herrschaft über Menschen haben dieselbe Wurzel.');
  I('individualanarchismus', 'Individualanarchismus', 'anarch', 'feather', [20, -100, 30, -60, -60, -60, 0, -80, 40, 100, -60, -50],
    'Stellt den souveränen Einzelnen über jede Gemeinschaft und Institution – nach Max Stirner und Benjamin Tucker.',
    'Ich habe meine Sache auf nichts gestellt – außer auf mich selbst.');
  I('kommunalismus', 'Libertärer Kommunalismus', 'anarch', 'nodes', [-80, -80, -10, -60, -60, -70, -80, -80, 50, 100, -100, -60],
    'Murray Bookchins Konzept direkter Demokratie in Bürgerversammlungen, die sich föderal vernetzen – Inspiration für die Selbstverwaltung in Rojava.',
    'Die Macht gehört in die Versammlungen der Nachbarschaft.');
  I('christlicher-anarchismus', 'Christlicher Anarchismus', 'anarch', 'dove', [-60, -90, 0, 20, -60, -70, -40, 90, 60, 90, -70, -10],
    'Gründet die Ablehnung staatlicher Gewalt auf die Bergpredigt – prominent vertreten von Leo Tolstoi.',
    'Wer Christus folgt, kann keinem Staat dienen, der auf Gewalt beruht.');

  /* ---------------- Ergänzungen: weitere Strömungen ---------------- */
  I('luxemburgismus', 'Luxemburgismus', 'radlinks', 'fist', [-95, -20, -10, -60, -80, -60, 0, -90, 60, 0, -60, -90],
    'Revolutionärer Marxismus nach Rosa Luxemburg: Spontaneität der Massen, Rätedemokratie und scharfe Kritik an der Diktatur einer Avantgardepartei.',
    'Freiheit ist immer die Freiheit der Andersdenkenden – auch im Sozialismus.');
  I('nationalkommunismus', 'Nationalkommunismus', 'radlinks', 'star', [-80, 90, 80, 20, 85, 70, 70, -80, 80, -80, 40, -60],
    'Verbindet sozialistische Planwirtschaft mit betontem Nationalismus und Personenkult – etwa im Rumänien Ceaușescus.',
    'Der Sozialismus muss die Größe und Unabhängigkeit unserer Nation verwirklichen.');
  I('autonomismus', 'Autonomismus', 'radlinks', 'fist', [-90, -80, -20, -70, -80, -80, -30, -90, 60, 70, -90, -90],
    'Aus dem italienischen Operaismo hervorgegangene Bewegung, die auf Selbstorganisation, Hausbesetzungen und Verweigerung der Lohnarbeit setzt – ohne Partei und Staat.',
    'Wir warten nicht auf die Revolution – wir nehmen uns Räume und organisieren uns selbst.');
  I('guevarismus', 'Guevarismus', 'radlinks', 'star', [-95, 70, 30, -20, -30, 0, 20, -90, 100, -30, -20, -100],
    'Revolutionstheorie nach Che Guevara: Guerillakampf als Funke der Revolution, Internationalismus und der „neue Mensch".',
    'Seien wir realistisch, versuchen wir das Unmögliche.');
  I('fabianismus', 'Fabianismus', 'links', 'rose', [-50, 10, -20, -30, -20, -10, 0, -40, -30, -20, 60, 90],
    'Britische Tradition des schrittweisen, expertengeleiteten Sozialismus – Wegbereiter der Labour Party und des Wohlfahrtsstaats.',
    'Der Sozialismus kommt nicht über Nacht, sondern Gesetz um Gesetz.');
  I('solidarismus', 'Solidarismus', 'links', 'hands', [-30, 20, -20, 30, 10, 0, 0, 30, -20, 0, 20, 60],
    'Gesellschaftslehre zwischen Liberalismus und Sozialismus: Menschen sind einander durch gegenseitige Verpflichtung verbunden, der Staat organisiert diese Solidarität.',
    'Niemand lebt für sich allein – wir schulden einander Solidarität.');
  I('ökofeminismus', 'Ökofeminismus', 'gruen', 'leaf', [-60, -30, -30, -90, -60, -60, -90, -60, 40, 30, -40, -40],
    'Sieht in der Ausbeutung der Natur und der Unterdrückung von Frauen dieselbe patriarchale Logik und verbindet beide Kämpfe.',
    'Die Befreiung der Frau und die Rettung der Erde sind ein und derselbe Kampf.');
  I('klimagerechtigkeit', 'Klimagerechtigkeitsbewegung', 'gruen', 'leaf', [-70, -20, -40, -70, -70, -70, -100, -70, 20, 10, -50, -80],
    'Aktivistische Bewegung (Fridays for Future, Extinction Rebellion), die die Klimakrise als Frage globaler und sozialer Gerechtigkeit begreift und radikales Handeln fordert.',
    'Es gibt keinen Planeten B – und wer am wenigsten verursacht hat, leidet am meisten.');
  I('ökomodernismus', 'Ökomodernismus', 'gruen', 'atom', [20, 0, -60, -40, -40, -20, -40, -50, -60, 0, 60, 40],
    'Will Umwelt und Klima durch Technik schützen statt durch Verzicht: Kernkraft, Gentechnik, Städte und Innovation sollen die Natur entlasten.',
    'Nicht weniger Fortschritt rettet die Natur – sondern besserer.');
  I('christlich-sozial', 'Christlich-soziale Bewegung', 'mitte', 'cross', [-20, 20, -40, 50, 10, 0, -10, 80, -40, 20, 40, 70],
    'Arbeitnehmerflügel der Christdemokratie in der Tradition von Bischof Ketteler und Karl Lueger: Sozialpolitik aus christlicher Verantwortung.',
    'Der Mensch geht vor dem Kapital – das lehrt uns das Evangelium.');
  I('atlantizismus', 'Atlantizismus', 'mitte', 'anchor', [30, 30, -50, 0, 0, 10, 20, 0, -100, 0, 60, 60],
    'Überzeugung, dass Europas Sicherheit und Wohlstand auf dem engen Bündnis mit Nordamerika beruhen – NATO, Freihandel und gemeinsame Werte.',
    'Europa und Amerika sind stärker zusammen – die NATO ist unsere Lebensversicherung.');
  I('neutralismus', 'Neutralismus', 'mitte', 'dove', [10, 10, 40, 20, 30, 30, 0, 10, 80, 40, 0, 70],
    'Will das eigene Land aus Militärbündnissen und Konflikten der Großmächte heraushalten – nach dem Vorbild der Schweiz oder des neutralen Österreichs.',
    'Unsere Stärke ist es, mit allen zu reden und mit niemandem Krieg zu führen.');
  I('konkordanz', 'Konkordanzdemokratie', 'regional', 'nodes', [10, 0, 30, 10, 20, 20, -10, 10, 40, 90, -60, 90],
    'Schweizer Modell: Alle großen Kräfte regieren gemeinsam, Kantone und Gemeinden sind stark, das Volk hat per Referendum das letzte Wort.',
    'Bei uns regieren alle mit – und das Volk entscheidet.');
  I('europa-der-regionen', 'Europa der Regionen', 'regional', 'stars', [-10, -20, -80, -30, -30, -20, -30, -20, -40, 100, 0, 30],
    'Will die Nationalstaaten zugunsten eines föderalen Europas starker Regionen schwächen – Leitbild vieler Regionalparteien der Europäischen Freien Allianz.',
    'Nicht Paris, Madrid oder Rom – Europa und unsere Region sollen entscheiden.');
  I('wohlfahrtschauvinismus', 'Wohlfahrtschauvinismus', 'rechts', 'home', [-30, 50, 60, 30, 80, 95, 30, 10, -40, -20, -50, 10],
    'Verteidigt einen großzügigen Sozialstaat – aber nur für die eigenen Staatsbürger. Typisch für die Rechte in Skandinavien.',
    'Unser Sozialstaat ist für unsere Leute da – nicht für die ganze Welt.');
  I('orthodoxer-konservatismus', 'Orthodoxer Konservatismus', 'rechts', 'cross', [-10, 70, 60, 95, 80, 60, 10, 100, 60, -40, 40, 20],
    'Konservatismus in Ost- und Südosteuropa, der Nation, orthodoxe Kirche und Familie als Einheit versteht und dem westlichen Liberalismus skeptisch gegenübersteht.',
    'Glaube, Volk und Familie sind die drei Säulen, auf denen unsere Nation steht.');
  I('legitimismus', 'Legitimismus', 'rechts', 'crown', [10, 70, 30, 90, 40, 40, 0, 90, null, 40, 100, 40],
    'Hält allein die rechtmäßige, angestammte Dynastie für legitime Herrscherin – etwa Habsburg- oder Bourbonen-Legitimisten.',
    'Die Krone gehört dem rechtmäßigen Erben – nicht dem Parlament und nicht dem Volk.');
  I('agrarpopulismus', 'Agrarpopulismus', 'rechts', 'wheat', [0, 30, 50, 50, 50, 60, 60, 40, -20, 60, -70, 0],
    'Bauernproteste gegen Umweltauflagen und „die Städter in Brüssel" – wie die niederländische BBB oder die Bauernbewegungen von 2024.',
    'Ohne Bauern kein Essen – und ohne uns entscheidet ihr nicht über unser Land.');
  I('unionismus', 'Unionismus', 'rechts', 'flag', [20, 50, 40, 60, 70, 50, 30, 60, -60, -80, 30, 40],
    'Verteidigt die Einheit eines bestehenden Staates gegen Separatismus – etwa die Union Nordirlands mit Großbritannien oder die Einheit Spaniens.',
    'Unser Land ist eins und unteilbar.');
  I('postfaschismus', 'Postfaschismus', 'rechtsaussen', 'flag', [10, 60, 40, 70, 85, 90, 40, 50, -20, -40, -10, 0],
    'Parteien mit faschistischen Wurzeln, die sich auf demokratische Spielregeln eingelassen haben und heute nationalkonservativ auftreten.',
    'Gott, Vaterland, Familie – in einer Demokratie, aber ohne Scham für unsere Herkunft.');
  I('konservative-revolution', 'Konservative Revolution', 'rechtsaussen', 'book', [-20, 80, 40, 80, 85, 60, -20, 30, 60, -20, 60, -80],
    'Antidemokratische Denkströmung der Weimarer Zeit (Spengler, Jünger, Moeller van den Bruck), die eine neue, autoritäre und völkische Ordnung forderte.',
    'Konservativ sein heißt, Dinge zu schaffen, die es wert sind, erhalten zu werden.');
  I('irredentismus', 'Irredentismus', 'rechtsaussen', 'flag', [0, 70, 60, 70, 100, 80, 40, 50, 40, -60, -20, -50],
    'Fordert die Vereinigung aller Gebiete, in denen Angehörige der eigenen Nation leben – vom „Großungarn" bis zur „Großserbien"-Idee.',
    'Was einst unser war, soll wieder zu uns gehören.');
  I('ökofaschismus', 'Ökofaschismus', 'rechtsaussen', 'leaf', [-20, 95, 60, 70, 95, 100, -90, 0, 60, -30, 0, -90],
    'Verbindet radikalen Naturschutz mit völkischem Nationalismus, Abschottung und Autoritarismus – eine gefährliche Randströmung.',
    'Blut und Boden – die Natur des Volkes muss geschützt werden.');
  I('peronismus', 'Peronismus', 'dritte', 'sun', [-40, 60, 50, 40, 70, 40, 40, 50, 60, -40, -60, -20],
    'Argentinische Bewegung Juan und Eva Peróns: soziale Gerechtigkeit, wirtschaftliche Unabhängigkeit, starke Gewerkschaften und ein charismatischer Führer über den Parteien.',
    'Soziale Gerechtigkeit, wirtschaftliche Freiheit, politische Souveränität.');
  I('fusionismus', 'Fusionismus', 'libertaer', 'coin', [70, 20, 50, 60, 40, 40, 50, 50, -50, 30, 10, 30],
    'Bündnis von Marktliberalen und Wertkonservativen: freie Wirtschaft verbunden mit traditioneller Moral und Religion.',
    'Freiheit braucht Tugend – und Tugend braucht Freiheit.');
  I('bleeding-heart', 'Sozialer Libertarismus', 'libertaer', 'feather', [60, -70, -20, -50, -50, -50, 20, -50, -20, 40, 10, 30],
    'Libertarismus, der freie Märkte gerade deshalb verteidigt, weil sie den Ärmsten am meisten helfen – offen für ein Grundeinkommen und offene Grenzen.',
    'Freie Märkte sind das beste Mittel gegen Armut – und offene Grenzen gehören dazu.');
  I('agorismus', 'Agorismus', 'anarch', 'coin', [100, -100, 50, -20, -50, -40, 40, -50, 40, 100, -50, -90],
    'Will den Staat durch Schattenwirtschaft, Gegenökonomie und freiwilligen Tausch aushöhlen statt durch Wahlen.',
    'Wir wählen nicht – wir handeln am Staat vorbei.');
  I('anarchafeminismus', 'Anarchafeminismus', 'anarch', 'anarchy', [-80, -100, 0, -100, -90, -90, -50, -90, 60, 100, -100, -90],
    'Sieht im Patriarchat die Urform jeder Herrschaft und will mit ihm zugleich Staat und Kapitalismus überwinden.',
    'Solange das Patriarchat besteht, ist keine Gesellschaft frei.');
  I('plattformismus', 'Plattformismus', 'anarch', 'anarchy', [-100, -90, 0, -60, -90, -80, -20, -90, 70, 90, -90, -100],
    'Organisatorischer Anarchismus nach Machno und Arschinow: theoretische Einheit und kollektive Disziplin in einer anarchistischen Föderation.',
    'Ohne Organisation bleibt der Anarchismus ein schöner Traum.');
  I('anarchopazifismus', 'Anarchopazifismus', 'anarch', 'dove', [-60, -100, 0, -50, -80, -70, -50, -60, 90, 100, -80, -20],
    'Lehnt jede Form von Gewalt ab – auch die revolutionäre – und will den Staat durch gewaltfreien Widerstand überwinden.',
    'Man kann keine gewaltfreie Welt mit Gewalt erschaffen.');

  AG.IDEOLOGIES = L;
})();

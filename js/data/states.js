/* Agora – Staaten Europas (heute) und historische Staaten
   Heutige Staaten: Profil aus Regierungspolitik, Verfassung, Gesellschaft und öffentlicher Meinung (Stand 2025/26).
   Historische Staaten: Profil der jeweiligen Herrschaftsordnung. null = Achse für diese Epoche nicht sinnvoll. */
window.AG = window.AG || {};

(function () {
  const C = [];
  /* S(code, Name, Flaggen-Datei auf Wikimedia Commons, Wikipedia-Titel, Regierungsform, Vektor, Beschreibung, EU?) */
  const S = (cc, name, flag, wiki, gov, v, desc, eu) =>
    C.push({ id: 'st-' + cc.toLowerCase(), type: 'state', era: 'heute', cc, name, flag, wiki, gov, v, desc, eu: !!eu });

  S('DE', 'Deutschland', 'Flag_of_Germany.svg', 'Germany', 'Föderale parlamentarische Republik', [10, 15, -60, -25, -20, 30, -20, -20, -80, 60, 50, 80],
    'Föderale Konsensdemokratie mit Sozialer Marktwirtschaft, starken Ländern und einer Erinnerungskultur, die Nationalismus misstraut.', true);
  S('AT', 'Österreich', 'Flag_of_Austria.svg', 'Austria', 'Föderale parlamentarische Republik', [5, 25, -30, 10, 20, 60, -20, 20, 40, 60, 30, 80],
    'Neutraler Bundesstaat mit Sozialpartnerschaft, katholischer Prägung und kritischer Haltung zur Migration.', true);
  S('CH', 'Schweiz', 'Flag_of_Switzerland.svg', 'Switzerland', 'Direktdemokratischer Bundesstaat', [40, 0, 90, 0, 30, 40, -20, 0, 50, 100, -90, 90],
    'Neutrale Willensnation mit Kantonsföderalismus, Volksabstimmungen und bewusster Distanz zur EU.');
  S('FR', 'Frankreich', 'Flag_of_France.svg', 'France', 'Semipräsidentielle Republik', [-20, 30, -60, -30, 30, 20, 0, -90, -40, -80, 50, 40],
    'Zentralistische, laizistische Republik mit starkem Präsidenten, großem Staatssektor und Streikkultur.', true);
  S('IT', 'Italien', 'Flag_of_Italy.svg', 'Italy', 'Parlamentarische Republik', [0, 30, -40, 30, 30, 70, 10, 50, -60, 0, 20, 40],
    'Gründungsmitglied der EU mit katholischer Prägung, regionalen Gegensätzen und einer nationalkonservativen Regierung.', true);
  S('ES', 'Spanien', 'Flag_of_Spain.svg', 'Spain', 'Parlamentarische Monarchie', [-10, 10, -70, -60, 0, -20, -30, -40, -50, 70, 40, 50],
    'Gesellschaftlich sehr progressive Monarchie mit starken autonomen Gemeinschaften und Regionalnationalismen.', true);
  S('PT', 'Portugal', 'Flag_of_Portugal.svg', 'Portugal', 'Semipräsidentielle Republik', [-10, 10, -70, -30, 10, 0, -20, 20, -60, -50, 40, 70],
    'Proeuropäischer Einheitsstaat, Pionier der Drogenentkriminalisierung, migrationsfreundlich und atlantisch.', true);
  S('GB', 'Vereinigtes Königreich', 'Flag_of_the_United_Kingdom.svg', 'United_Kingdom', 'Parlamentarische Monarchie', [30, 30, 80, -20, 30, 40, 0, -10, -90, 0, 50, 70],
    'Mutterland des Parlamentarismus, nach dem Brexit außerhalb der EU, eng mit den USA verbunden.');
  S('IE', 'Irland', 'Flag_of_Ireland.svg', 'Republic_of_Ireland', 'Parlamentarische Republik', [20, 0, -60, -30, 20, 0, 0, 10, 30, -60, 40, 80],
    'Neutrale, wirtschaftsliberale Republik, die sich vom katholischen Konservatismus zur liberalen Gesellschaft wandelte.', true);
  S('NL', 'Niederlande', 'Flag_of_the_Netherlands.svg', 'Netherlands', 'Parlamentarische Monarchie', [30, 0, -30, -60, -10, 50, 0, -50, -80, -10, 50, 70],
    'Handelsnation mit liberaler Tradition (Sterbehilfe, Drogenpolitik) und zunehmend restriktiver Migrationspolitik.', true);
  S('BE', 'Belgien', 'Flag_of_Belgium_(civil).svg', 'Belgium', 'Föderale parlamentarische Monarchie', [0, 10, -80, -60, -30, 30, -20, -40, -70, 90, 40, 60],
    'Hochgradig föderalisierter Staat zwischen Flandern und Wallonie, Sitz der EU-Institutionen.', true);
  S('LU', 'Luxemburg', 'Flag_of_Luxembourg.svg', 'Luxembourg', 'Parlamentarische Monarchie', [30, 0, -90, -50, -40, -30, 0, -20, -70, -30, 60, 80],
    'Reiches Großherzogtum und Finanzplatz, Herzkammer der europäischen Integration.', true);
  S('DK', 'Dänemark', 'Flag_of_Denmark.svg', 'Denmark', 'Parlamentarische Monarchie', [-10, 20, -10, -50, 30, 90, -50, -20, -90, 20, 40, 80],
    'Wohlfahrtsstaat mit Vorreiterrolle beim Klimaschutz und einer der strengsten Asylpolitiken Europas.', true);
  S('SE', 'Schweden', 'Flag_of_Sweden.svg', 'Sweden', 'Parlamentarische Monarchie', [-20, 10, -40, -70, -10, 60, -50, -70, -90, 30, 40, 80],
    'Säkulares Volksheim, sehr progressive Gesellschaft, seit 2024 NATO-Mitglied mit verschärfter Migrationspolitik.', true);
  S('NO', 'Norwegen', 'Flag_of_Norway.svg', 'Norway', 'Parlamentarische Monarchie', [-30, 0, 70, -60, 20, 30, 20, -40, -80, 20, 40, 80],
    'Ölreicher Sozialstaat mit gigantischem Staatsfonds, NATO-Gründungsmitglied, aber zweimal gegen den EU-Beitritt.');
  S('FI', 'Finnland', 'Flag_of_Finland.svg', 'Finland', 'Parlamentarische Republik', [-10, 10, -40, -40, 20, 50, -40, -30, -90, 10, 40, 80],
    'Bildungsnation und wehrhafte Demokratie an der russischen Grenze, seit 2023 in der NATO.', true);
  S('IS', 'Island', 'Flag_of_Iceland.svg', 'Iceland', 'Parlamentarische Republik', [0, -20, 60, -70, 20, 20, -50, -40, -30, -20, 0, 80],
    'Kleine, sehr gleichberechtigte Inselrepublik ohne Armee, aber NATO-Mitglied und nicht in der EU.');
  S('PL', 'Polen', 'Flag_of_Poland.svg', 'Poland', 'Parlamentarische Republik', [-10, 40, -20, 50, 60, 70, 40, 60, -100, -50, 0, 40],
    'Katholisch geprägter Frontstaat der NATO mit starkem Wirtschaftswachstum und tief gespaltener Politik.', true);
  S('CZ', 'Tschechien', 'Flag_of_the_Czech_Republic.svg', 'Czech_Republic', 'Parlamentarische Republik', [10, 10, -10, -20, 30, 80, 20, -80, -70, -20, 20, 70],
    'Eine der säkularsten Gesellschaften der Welt, industriestark, EU-skeptisch und migrationskritisch.', true);
  S('SK', 'Slowakei', 'Flag_of_Slovakia.svg', 'Slovakia', 'Parlamentarische Republik', [-20, 50, 0, 40, 50, 80, 20, 40, 50, -30, -30, 30],
    'Euro-Land mit linkspopulistisch-nationaler Regierung und ausgeprägter Russland-Nähe in Teilen der Gesellschaft.', true);
  S('HU', 'Ungarn', 'Flag_of_Hungary.svg', 'Hungary', 'Parlamentarische Republik', [0, 70, 60, 80, 85, 95, 40, 60, 60, -80, -20, 20],
    'Unter Fidesz zum Modell der „illiberalen Demokratie" umgebaut: christlich-national, zentralistisch, Brüssel-kritisch.', true);
  S('RO', 'Rumänien', 'Flag_of_Romania.svg', 'Romania', 'Semipräsidentielle Republik', [10, 30, -50, 60, 40, 50, 20, 80, -80, -60, 30, 50],
    'Tief orthodoxer, proeuropäischer und NATO-treuer Staat mit starkem nationalistischem Lager.', true);
  S('BG', 'Bulgarien', 'Flag_of_Bulgaria.svg', 'Bulgaria', 'Parlamentarische Republik', [20, 40, -40, 50, 40, 60, 20, 40, -30, -60, 10, 40],
    'Ärmstes EU-Land mit niedriger Flat Tax, orthodoxer Kultur und historischer Nähe zu Russland.', true);
  S('HR', 'Kroatien', 'Flag_of_Croatia.svg', 'Croatia', 'Parlamentarische Republik', [10, 30, -50, 50, 50, 50, 10, 70, -70, -30, 30, 60],
    'Katholisch-konservatives Land, seit 2023 in Euro und Schengen.', true);
  S('SI', 'Slowenien', 'Flag_of_Slovenia.svg', 'Slovenia', 'Parlamentarische Republik', [-10, 10, -60, -30, 10, 20, -30, -30, -50, -10, 30, 60],
    'Wohlhabender Alpen-Adria-Staat zwischen Mitteleuropa und Balkan, gesellschaftlich liberal.', true);
  S('GR', 'Griechenland', 'Flag_of_Greece.svg', 'Greece', 'Parlamentarische Republik', [10, 40, -40, 40, 60, 60, 20, 70, -70, -70, 40, 50],
    'Wiege der Demokratie, orthodox geprägt, zentralistisch und nach der Schuldenkrise wieder auf Wachstumskurs.', true);
  S('CY', 'Zypern', 'Flag_of_Cyprus.svg', 'Cyprus', 'Präsidialrepublik', [10, 30, -50, 40, 50, 60, 10, 70, 10, -70, 30, 50],
    'Geteilte Insel, orthodox, neutral, mit starkem Finanz- und Schifffahrtssektor.', true);
  S('MT', 'Malta', 'Flag_of_Malta.svg', 'Malta', 'Parlamentarische Republik', [0, 20, -50, -20, 20, 50, 20, 60, 40, -80, 30, 60],
    'Kleinster EU-Staat, katholisch und neutral, zugleich Vorreiter bei LGBT-Rechten und Cannabis.', true);
  S('EE', 'Estland', 'Flag_of_Estonia.svg', 'Estonia', 'Parlamentarische Republik', [50, 10, -50, -30, 40, 50, 0, -60, -100, -20, 40, 70],
    'Digitalster Staat Europas, wirtschaftsliberal und entschieden antirussisch.', true);
  S('LV', 'Lettland', 'Flag_of_Latvia.svg', 'Latvia', 'Parlamentarische Republik', [30, 30, -40, 30, 50, 60, 10, 10, -100, -50, 30, 60],
    'Baltischer Staat mit großer russischsprachiger Minderheit und klarem Westkurs.', true);
  S('LT', 'Litauen', 'Flag_of_Lithuania.svg', 'Lithuania', 'Semipräsidentielle Republik', [20, 30, -50, 30, 50, 50, 10, 30, -100, -50, 30, 60],
    'Katholisch geprägter baltischer Staat, Vorreiter der Unterstützung der Ukraine und Taiwans.', true);
  S('UA', 'Ukraine', 'Flag_of_Ukraine.svg', 'Ukraine', 'Semipräsidentielle Republik (Kriegsrecht)', [20, 60, -80, 30, 70, 20, 20, 30, -100, -40, 0, 20],
    'Verteidigt sich seit 2014 und vollumfänglich seit 2022 gegen Russland; EU-Beitrittskandidat.');
  S('MD', 'Moldau', 'Flag_of_Moldova.svg', 'Moldova', 'Parlamentarische Republik', [-10, 30, -70, 40, 0, 10, 0, 60, -80, -20, 30, 40],
    'Kleiner Kandidatenstaat zwischen Rumänien und Ukraine, gespalten zwischen EU-Kurs und russischem Einfluss.');
  S('RS', 'Serbien', 'Flag_of_Serbia.svg', 'Serbia', 'Parlamentarische Republik', [0, 60, 10, 50, 70, 40, 40, 60, 50, -60, -30, 30],
    'Orthodoxer Kandidatenstaat, der zwischen Brüssel, Moskau und Peking balanciert.');
  S('BA', 'Bosnien und Herzegowina', 'Flag_of_Bosnia_and_Herzegovina.svg', 'Bosnia_and_Herzegovina', 'Föderale Republik', [-10, 30, -30, 40, 60, 40, 20, 60, 0, 80, 0, 30],
    'Kompliziertes Dayton-System aus zwei Entitäten und drei konstituierenden Völkern.');
  S('ME', 'Montenegro', 'Flag_of_Montenegro.svg', 'Montenegro', 'Parlamentarische Republik', [0, 30, -60, 30, 20, 30, 20, 50, -60, -50, 20, 50],
    'Kleines NATO-Mitglied an der Adria, Spitzenreiter im EU-Beitrittsprozess.');
  S('MK', 'Nordmazedonien', 'Flag_of_North_Macedonia.svg', 'North_Macedonia', 'Parlamentarische Republik', [0, 30, -60, 40, 40, 30, 20, 50, -60, -50, 20, 50],
    'NATO-Mitglied, das für die EU-Perspektive sogar seinen Namen änderte.');
  S('AL', 'Albanien', 'Flag_of_Albania.svg', 'Albania', 'Parlamentarische Republik', [20, 40, -70, 20, 40, 20, 20, -30, -80, -60, 30, 40],
    'Religiös tolerantes, sehr proamerikanisches Land auf dem Weg in die EU.');
  S('XK', 'Kosovo', 'Flag_of_Kosovo.svg', 'Kosovo', 'Parlamentarische Republik', [0, 30, -80, 30, 60, 20, 20, 20, -90, -50, 10, 40],
    'Jüngster Staat Europas, extrem proamerikanisch und proeuropäisch.');
  S('TR', 'Türkei', 'Flag_of_Turkey.svg', 'Turkey', 'Präsidialrepublik', [0, 80, 30, 70, 85, 50, 60, 70, 50, -80, -50, 10],
    'NATO-Mitglied mit autoritärem Präsidialsystem, islamisch-konservativer Regierung und eigenständiger Außenpolitik.');
  S('RU', 'Russland', 'Flag_of_Russia.svg', 'Russia', 'Autoritäre Präsidialrepublik', [10, 95, 100, 70, 85, 60, 80, 60, 100, -70, 60, 20],
    'Autoritärer Großmachtstaat, der einen Angriffskrieg gegen die Ukraine führt und sich als Gegenpol zum Westen versteht.');
  S('BY', 'Belarus', 'Flag_of_Belarus.svg', 'Belarus', 'Diktatur', [-50, 95, 90, 50, 50, 70, 60, 30, 100, -90, 40, 30],
    'Letzte Diktatur Europas, eng an Russland gebunden, mit staatlich dominierter Wirtschaft.');
  S('GE', 'Georgien', 'Flag_of_Georgia.svg', 'Georgia_(country)', 'Parlamentarische Republik', [0, 60, 10, 70, 60, 50, 40, 80, 50, -60, -20, 10],
    'Orthodoxer Kandidatenstaat im Kaukasus, dessen Regierung sich zunehmend von der EU abwendet.');
  S('AM', 'Armenien', 'Flag_of_Armenia.svg', 'Armenia', 'Parlamentarische Republik', [0, 30, -20, 60, 70, 40, 20, 80, 10, -70, 20, 50],
    'Ältester christlicher Staat der Welt, löst sich schrittweise von Russland.');
  S('AZ', 'Aserbaidschan', 'Flag_of_Azerbaijan.svg', 'Azerbaijan', 'Autoritäre Präsidialrepublik', [10, 90, 60, 60, 80, 60, 90, 30, 60, -80, 60, 20],
    'Ölreicher, autoritär regierter Staat mit säkularer schiitischer Bevölkerung.');
  S('LI', 'Liechtenstein', 'Flag_of_Liechtenstein.svg', 'Liechtenstein', 'Konstitutionelle Monarchie mit direkter Demokratie', [50, 30, 40, 40, 30, 60, 0, 60, 20, 60, 0, 90],
    'Fürstentum mit starkem Monarchen, Volksrechten, Finanzplatz und EWR-Mitgliedschaft.');
  S('MC', 'Monaco', 'Flag_of_Monaco.svg', 'Monaco', 'Konstitutionelle Monarchie', [80, 40, 60, 50, 20, 50, 30, 80, 0, -80, 90, 90],
    'Steuerparadies und katholisches Fürstentum der Grimaldis an der Côte d’Azur.');
  S('AD', 'Andorra', 'Flag_of_Andorra.svg', 'Andorra', 'Parlamentarisches Kofürstentum', [40, 10, 40, 30, 30, 50, 0, 60, 20, 30, 30, 90],
    'Pyrenäenstaat mit zwei Staatsoberhäuptern: dem französischen Präsidenten und dem Bischof von Urgell.');
  S('SM', 'San Marino', 'Flag_of_San_Marino.svg', 'San_Marino', 'Parlamentarische Republik', [10, 10, 40, 30, 30, 40, 0, 60, 10, 0, 0, 90],
    'Älteste noch bestehende Republik der Welt, regiert von zwei Capitani Reggenti.');
  S('VA', 'Vatikanstadt', 'Flag_of_Vatican_City.svg', 'Vatican_City', 'Absolute Wahlmonarchie (Theokratie)', [0, 80, 30, 100, 0, 40, -40, 100, 30, -100, 100, 90],
    'Kleinster Staat der Welt, Sitz des Papstes und der katholischen Weltkirche.');

  AG.STATES = C;

  /* ---------------- Historische Staaten ---------------- */
  const HS = [];
  const X = (id, name, period, flag, wiki, gov, v, desc) =>
    HS.push({ id: 'hs-' + id, type: 'histstate', era: 'historisch', name, period, flag, wiki, gov, v, desc });

  X('athen', 'Athenische Demokratie', '508–322 v. Chr.', null, 'Athenian_democracy', 'Direkte Demokratie', [10, 10, null, 40, 60, 70, 0, 60, null, 0, -100, -20],
    'Volksversammlung und Losverfahren: Die erste Demokratie der Geschichte – allerdings nur für freie männliche Bürger.');
  X('sparta', 'Sparta', 'ca. 900–192 v. Chr.', null, 'Sparta', 'Militärische Oligarchie mit Doppelkönigtum', [-50, 95, null, 90, 80, 100, 0, 70, null, -50, 70, 40],
    'Kriegerstaat mit kollektiver Erziehung, Heloten-Sklaverei und strenger Abschottung.');
  X('rom-republik', 'Römische Republik', '509–27 v. Chr.', null, 'Roman_Republic', 'Aristokratische Republik', [10, 50, null, 70, 60, 30, 10, 70, null, -20, 70, 50],
    'Senat, Konsuln und Volkstribunen: Vorbild der Gewaltenteilung und des Republikanismus.');
  X('rom-reich', 'Römisches Reich', '27 v. Chr.–476 n. Chr.', 'Vexilloid_of_the_Roman_Empire.svg', 'Roman_Empire', 'Kaiserliche Monarchie', [0, 85, -50, 70, 20, 20, 30, 70, null, -60, 90, 40],
    'Vielvölkerreich unter einem Kaiser, das Recht, Straßen und Latein über ganz Europa verbreitete.');
  X('byzanz', 'Byzantinisches Reich', '330–1453', null, 'Byzantine_Empire', 'Kaiserliche Theokratie', [-10, 90, -40, 95, 0, 30, 0, 100, null, -80, 100, 70],
    'Christliches Ostrom mit Kaiser als Stellvertreter Gottes und zentraler Bürokratie.');
  X('franken', 'Frankenreich', '481–843', null, 'Francia', 'Feudale Monarchie', [0, 80, -70, 90, 0, 30, 0, 100, null, -30, 100, 0],
    'Unter Karl dem Großen vereinte das Frankenreich große Teile Westeuropas – Keimzelle Frankreichs und Deutschlands.');
  X('cordoba', 'Kalifat von Córdoba', '929–1031', null, 'Caliphate_of_Córdoba', 'Kalifat', [20, 80, null, 70, -20, 20, 10, 90, null, -20, 100, 60],
    'Blütezeit von al-Andalus mit Wissenschaft, Handel und Zusammenleben von Muslimen, Christen und Juden.');
  X('hrr', 'Heiliges Römisches Reich', '962–1806', 'Banner_of_the_Holy_Roman_Emperor_with_haloes_(1400-1806).svg', 'Holy_Roman_Empire', 'Wahlmonarchie, Fürstenbund', [-10, 60, -60, 90, -30, 30, 0, 95, null, 100, 100, 90],
    'Lockerer Verband hunderter Territorien unter einem gewählten Kaiser – das „Alte Reich" der Deutschen.');
  X('island-freistaat', 'Isländischer Freistaat', '930–1262', null, 'Icelandic_Commonwealth', 'Staatenlose Thing-Ordnung', [60, -80, null, 60, 50, 40, 0, 40, null, 100, -50, 70],
    'Gemeinwesen ohne König und Exekutive, mit privat durchgesetztem Recht – Liebling der Libertären.');
  X('venedig', 'Republik Venedig', '697–1797', 'Flag_of_Most_Serene_Republic_of_Venice.svg', 'Republic_of_Venice', 'Aristokratische Handelsrepublik', [70, 60, null, 60, 40, 0, 30, 60, null, -20, 100, 90],
    'Die „Serenissima": Seemacht, Handelsimperium und über tausend Jahre stabile Adelsrepublik unter einem Dogen.');
  X('hanse', 'Hanse', 'ca. 1150–1669', null, 'Hanseatic_League', 'Städtebund', [90, 20, -60, 40, -30, -20, 30, 40, null, 100, 80, 90],
    'Bund freier Handelsstädte von Brügge bis Nowgorod – ein früher Binnenmarkt.');
  X('eidgenossenschaft', 'Alte Eidgenossenschaft', '1291–1798', null, 'Old_Swiss_Confederacy', 'Bund souveräner Orte', [30, 30, null, 80, 30, 40, 0, 90, null, 100, -80, 90],
    'Bund freier Talschaften und Städte mit Landsgemeinden – Wurzel der modernen Schweiz.');
  X('florenz', 'Republik Florenz', '1115–1532', null, 'Republic_of_Florence', 'Oligarchische Republik', [60, 60, null, 40, 30, 0, 20, 60, null, -20, 90, 70],
    'Wiege der Renaissance, beherrscht von Kaufleuten, Zünften und der Bankiersfamilie Medici.');
  X('ragusa', 'Republik Ragusa', '1358–1808', 'Flag_of_the_Republic_of_Ragusa.svg', 'Republic_of_Ragusa', 'Aristokratische Handelsrepublik', [60, 40, null, 70, 20, 10, 10, 80, null, -20, 90, 90],
    'Dubrovniks Stadtstaat schaffte früh den Sklavenhandel ab: „Libertas" war sein Motto.');
  X('polen-litauen', 'Polen-Litauen', '1569–1795', null, 'Polish–Lithuanian_Commonwealth', 'Adelsrepublik mit Wahlkönigtum', [10, 10, -50, 80, 0, 0, 0, 90, null, 90, 60, 70],
    'Vielvölkerstaat mit Wahlkönig, „goldener Freiheit" des Adels, Liberum Veto und religiöser Toleranz.');
  X('kirchenstaat', 'Kirchenstaat', '756–1870', 'Flag_of_the_Papal_States_(1825-1870).svg', 'Papal_States', 'Theokratische Wahlmonarchie', [-10, 90, null, 100, 0, 50, 0, 100, null, -60, 100, 90],
    'Weltliches Herrschaftsgebiet der Päpste in Mittelitalien.');
  X('spanien-habsburg', 'Spanisches Weltreich', '1492–1700', 'Flag_of_Cross_of_Burgundy.svg', 'Spanish_Empire', 'Katholische Universalmonarchie', [0, 90, -30, 100, 60, 70, 30, 100, null, -40, 100, 60],
    'Erstes globales Imperium, Vorkämpfer der Gegenreformation mit Inquisition.');
  X('niederlande-republik', 'Republik der Sieben Vereinigten Niederlande', '1581–1795', 'Statenvlag.svg', 'Dutch_Republic', 'Föderale Handelsrepublik', [70, -10, null, 30, 20, -20, 30, 60, null, 90, 80, 80],
    'Goldenes Zeitalter von Handel, Kunst und Toleranz – Zufluchtsort für Verfolgte aus ganz Europa.');
  X('schweden-grossmacht', 'Schwedisches Großreich', '1611–1721', null, 'Swedish_Empire', 'Absolute Monarchie', [10, 80, null, 80, 60, 30, 30, 90, null, -60, 90, 50],
    'Lutherische Militärmacht, die den Ostseeraum beherrschte.');
  X('osmanisches-reich', 'Osmanisches Reich', '1299–1922', 'Flag_of_the_Ottoman_Empire.svg', 'Ottoman_Empire', 'Sultanat / Kalifat', [0, 90, -30, 90, -20, 0, 20, 95, null, -30, 100, 50],
    'Vielvölkerreich, das jahrhundertelang Südosteuropa beherrschte, mit Millet-System für religiöse Gemeinschaften.');
  X('ancien-regime', 'Königreich Frankreich (Ancien Régime)', '987–1792', 'Royal_Standard_of_the_King_of_France.svg', 'Kingdom_of_France', 'Absolute Monarchie', [10, 100, null, 90, 50, 40, 30, 95, null, -100, 100, 70],
    'Monarchie „von Gottes Gnaden", die unter Ludwig XIV. zum Inbegriff des Absolutismus wurde.');
  X('jakobiner', 'Erste Französische Republik', '1792–1804', 'Flag_of_France_(1794–1815,_1830–1974,_2020–present).svg', 'French_First_Republic', 'Revolutionäre Republik', [-30, 85, -10, -80, 60, 0, 30, -100, 30, -100, -50, -100],
    'Republik der Revolution: Menschenrechte, Abschaffung der Monarchie – und die Schreckensherrschaft.');
  X('napoleon', 'Erstes Französisches Kaiserreich', '1804–1815', 'Flag_of_France_(1794–1815,_1830–1974,_2020–present).svg', 'First_French_Empire', 'Plebiszitäres Kaisertum', [0, 90, -30, 20, 70, 0, 50, 0, 40, -100, -30, -60],
    'Napoleons Reich exportierte Code civil und Verwaltungsreformen mit Waffengewalt über den Kontinent.');
  X('preussen', 'Königreich Preußen', '1701–1918', 'Flag_of_Prussia_(1892-1918).svg', 'Kingdom_of_Prussia', 'Militärmonarchie', [10, 85, null, 80, 60, 40, 50, 70, null, -70, 90, 40],
    'Beamten- und Militärstaat mit Pflichtethos, Religionstoleranz und Bildungsreformen.');
  X('kaiserreich', 'Deutsches Kaiserreich', '1871–1918', 'Flag_of_Germany_(1867–1918).svg', 'German_Empire', 'Konstitutionelle Monarchie', [10, 75, 30, 75, 80, 50, 60, 50, 30, 30, 80, 50],
    'Bismarcks Reich: Industriegroßmacht mit Sozialversicherung, Obrigkeitsstaat und Weltmachtstreben.');
  X('oesterreich-ungarn', 'Österreich-Ungarn', '1867–1918', 'Flag_of_Austria-Hungary_(1869-1918).svg', 'Austria-Hungary', 'Doppelmonarchie', [10, 70, -40, 85, -30, 20, 10, 85, null, -20, 100, 80],
    'Vielvölkerstaat der Habsburger mit zwölf Nationalitäten – für manche ein Vorläufer der EU.');
  X('zarenreich', 'Russisches Zarenreich', '1721–1917', 'Flag_of_Russia.svg', 'Russian_Empire', 'Autokratie', [0, 95, null, 90, 70, 40, 30, 95, 60, -90, 100, 80],
    'Orthodoxe Autokratie, die vom Baltikum bis zum Pazifik reichte.');
  X('britisches-weltreich', 'Britisches Weltreich', '1707–1997', 'Flag_of_the_United_Kingdom.svg', 'British_Empire', 'Parlamentarische Monarchie & Kolonialreich', [40, 60, null, 70, 70, 30, 60, 50, null, -40, 90, 60],
    'Größtes Imperium der Geschichte, Motor von Freihandel und Industrialisierung.');
  X('pariser-kommune', 'Pariser Kommune', '1871', null, 'Paris_Commune', 'Rätedemokratie', [-90, -40, null, -60, -30, -30, 0, -100, null, 100, -90, -100],
    'Revolutionäre Selbstregierung von Paris für 72 Tage – Vorbild für Marxisten und Anarchisten.');
  X('rsfsr', 'Sowjetrussland', '1917–1922', 'Flag_of_the_Russian_Soviet_Federative_Socialist_Republic_(1918–1937).svg', 'Russian_Soviet_Federative_Socialist_Republic', 'Revolutionäre Räterepublik', [-100, 90, 40, -50, -50, 0, 40, -100, 80, -70, 40, -100],
    'Der revolutionäre Staat Lenins zwischen Oktoberrevolution und Gründung der UdSSR.');
  X('machnowschtschina', 'Freies Territorium (Machnowschtschina)', '1918–1921', 'Flag_of_the_Makhnovshchina.svg', 'Makhnovshchina', 'Anarchistische Selbstverwaltung', [-100, -100, 0, -50, -80, -50, 0, -90, 50, 100, -100, -100],
    'Anarchistisches Gebiet in der Südukraine unter Nestor Machno.');
  X('weimar', 'Weimarer Republik', '1918–1933', 'Flag_of_Germany_(3-2_aspect_ratio).svg', 'Weimar_Republic', 'Parlamentarische Republik', [-10, -10, -20, -30, 20, 20, 20, -20, 20, 30, 40, 40],
    'Erste deutsche Demokratie, kulturell blühend, politisch zerrissen und an ihren Feinden gescheitert.');
  X('erste-republik-at', 'Erste Republik Österreich', '1918–1933', 'Flag_of_Austria.svg', 'First_Austrian_Republic', 'Parlamentarische Republik', [-10, 20, -20, 30, 30, 30, 10, 50, 0, 40, 30, 30],
    'Zwischen „Rotem Wien" und katholischem Land tief gespaltene junge Republik.');
  X('tschechoslowakei-1', 'Erste Tschechoslowakische Republik', '1918–1938', 'Flag_of_the_Czech_Republic.svg', 'First_Czechoslovak_Republic', 'Parlamentarische Republik', [0, 10, -30, -10, 40, 20, 10, 0, -40, -30, 40, 70],
    'Einzige stabile Demokratie Mitteleuropas der Zwischenkriegszeit.');
  X('spanien-2-republik', 'Zweite Spanische Republik', '1931–1939', 'Flag_of_Spain_(1931–1939).svg', 'Second_Spanish_Republic', 'Parlamentarische Republik', [-40, 0, -20, -50, 0, 0, 10, -80, 0, 50, -20, -40],
    'Reformrepublik mit Frauenwahlrecht und Bodenreform, untergegangen im Bürgerkrieg.');
  X('anarchistisches-katalonien', 'Revolutionäres Katalonien', '1936–1939', 'Flag_of_the_CNT.svg', 'Revolutionary_Catalonia', 'Anarchistische Kollektive', [-100, -90, 0, -60, -80, -50, 0, -100, 50, 100, -100, -100],
    'Kollektivierte Betriebe und Milizen der CNT während des Spanischen Bürgerkriegs.');
  X('irischer-freistaat', 'Irischer Freistaat', '1922–1937', 'Flag_of_Ireland.svg', 'Irish_Free_State', 'Dominion, parlamentarische Monarchie', [0, 40, null, 80, 80, 40, 0, 95, 30, -50, 40, 30],
    'Katholisch-nationaler Vorgängerstaat der Republik Irland.');
  X('horthy', 'Königreich Ungarn (Horthy-Ära)', '1920–1944', 'Flag_of_Hungary_(1915-1918;_1919-1946).svg', 'Kingdom_of_Hungary_(1920–1946)', 'Autoritäre Regentschaft', [10, 80, 60, 85, 90, 80, 30, 85, 50, -70, 70, 10],
    'Königreich ohne König unter Reichsverweser Horthy: revisionistisch, autoritär, antisemitisch.');
  X('sanacja', 'Zweite Polnische Republik', '1918–1939', 'Flag_of_Poland.svg', 'Second_Polish_Republic', 'Autoritäre Präsidialrepublik', [0, 80, 30, 50, 70, 40, 20, 50, -40, -80, 50, -10],
    'Wiedergeborenes Polen, ab 1926 unter dem autoritären Sanacja-Regime Piłsudskis.');
  X('staendestaat', 'Bundesstaat Österreich (Ständestaat)', '1934–1938', 'Flag_of_Austria.svg', 'Federal_State_of_Austria', 'Austrofaschistische Diktatur', [0, 90, 60, 85, 60, 60, 30, 95, 20, -60, 60, -40],
    'Katholisch-autoritärer Ständestaat von Dollfuß und Schuschnigg.');
  X('faschistisches-italien', 'Faschistisches Italien', '1922–1943', 'Flag_of_Italy_(1861–1946).svg', 'Kingdom_of_Italy', 'Faschistische Diktatur', [-10, 100, 80, 60, 100, 70, 70, 30, 70, -100, 20, -90],
    'Mussolinis Einparteienstaat mit Korporatismus, Kolonialkriegen und Bündnis mit Hitler.');
  X('drittes-reich', 'Deutsches Reich (NS-Staat)', '1933–1945', null, 'Nazi_Germany', 'Totalitäre Diktatur', [-10, 100, 90, 80, 100, 100, 60, -10, 80, -100, 30, -100],
    'Hitlers Diktatur, verantwortlich für den Zweiten Weltkrieg und die Ermordung von Millionen Menschen im Holocaust.');
  X('metaxas', 'Griechenland unter Metaxas', '1936–1941', 'Flag_of_Greece_(1828-1978).svg', '4th_of_August_Regime', 'Autoritäre Diktatur', [10, 95, 40, 90, 90, 60, 30, 90, 0, -90, 70, -30],
    'Das „Regime des 4. August": nationalistisch, antikommunistisch und orthodox.');
  X('vichy', 'Vichy-Frankreich', '1940–1944', 'Flag_of_France.svg', 'Vichy_France', 'Autoritärer Kollaborationsstaat', [10, 95, 60, 95, 80, 80, 0, 80, 50, -60, 70, -30],
    '„Travail, Famille, Patrie": Pétains Kollaborationsregime im besetzten Frankreich.');
  X('ndh', 'Unabhängiger Staat Kroatien', '1941–1945', null, 'Independent_State_of_Croatia', 'Faschistischer Satellitenstaat', [0, 100, 70, 90, 100, 100, 30, 90, 80, -90, 20, -90],
    'Ustascha-Regime unter Ante Pavelić, verantwortlich für Völkermord an Serben, Juden und Roma.');
  X('franco-spanien', 'Spanien unter Franco', '1939–1975', 'Flag_of_Spain_(1945–1977).svg', 'Francoist_Spain', 'Nationalkatholische Diktatur', [10, 100, 70, 95, 90, 80, 50, 95, 30, -100, 60, -30],
    'Nach dem Bürgerkrieg errichtete Diktatur mit Zensur, Zentralismus und Kirchenbindung.');
  X('estado-novo', 'Estado Novo (Portugal)', '1933–1974', 'Flag_of_Portugal.svg', 'Estado_Novo_(Portugal)', 'Korporatistische Diktatur', [10, 95, 60, 95, 85, 60, 0, 95, -20, -90, 80, 20],
    'Salazars katholisch-korporatistischer „Neuer Staat", beendet durch die Nelkenrevolution.');
  X('udssr', 'Sowjetunion', '1922–1991', 'Flag_of_the_Soviet_Union.svg', 'Soviet_Union', 'Kommunistischer Einparteienstaat', [-100, 95, 70, 10, 40, 60, 80, -90, 100, -100, 60, -60],
    'Erster sozialistischer Staat der Welt, Supermacht des Kalten Kriegs.');
  X('ddr', 'Deutsche Demokratische Republik', '1949–1990', 'Flag_of_East_Germany.svg', 'East_Germany', 'Sozialistischer Einparteienstaat', [-95, 90, 60, 0, 20, 80, 60, -90, 100, -90, 60, -50],
    'SED-Staat mit Mauer, Stasi und Planwirtschaft – friedlich überwunden 1989.');
  X('brd-bonn', 'Bonner Republik', '1949–1990', 'Flag_of_Germany.svg', 'West_Germany', 'Föderale parlamentarische Republik', [20, 20, -70, 30, 0, 10, 30, 30, -90, 70, 60, 80],
    'Westdeutschland: Wirtschaftswunder, Westbindung und stabile Kanzlerdemokratie.');
  X('vr-polen', 'Volksrepublik Polen', '1947–1989', 'Flag_of_Poland.svg', 'Polish_People%27s_Republic', 'Sozialistischer Einparteienstaat', [-80, 80, 60, 30, 40, 60, 60, -40, 90, -80, 50, -30],
    'Sozialistischer Staat, in dem die katholische Kirche und Solidarność zu Gegenmächten wurden.');
  X('cssr', 'Tschechoslowakische Sozialistische Republik', '1948–1989', 'Flag_of_the_Czech_Republic.svg', 'Czechoslovak_Socialist_Republic', 'Sozialistischer Einparteienstaat', [-90, 85, 60, 10, 20, 70, 60, -80, 100, -60, 60, -40],
    'Nach dem Prager Frühling 1968 „normalisierter" Satellitenstaat Moskaus.');
  X('ungarn-vr', 'Volksrepublik Ungarn', '1949–1989', 'Flag_of_Hungary_(1949-1956).svg', 'Hungarian_People%27s_Republic', 'Sozialistischer Einparteienstaat', [-70, 70, 50, 10, 30, 60, 50, -60, 90, -70, 50, 10],
    'Nach dem Aufstand 1956 entwickelte Kádár den „Gulaschkommunismus" – die „lustigste Baracke im Lager".');
  X('rumaenien-sr', 'Sozialistische Republik Rumänien', '1965–1989', 'Flag_of_Romania_(1965-1989).svg', 'Socialist_Republic_of_Romania', 'Personalistische Diktatur', [-100, 100, 80, 40, 70, 80, 80, -90, 30, -100, 60, -60],
    'Ceaușescus nationalkommunistische Diktatur mit Personenkult und Securitate.');
  X('bulgarien-vr', 'Volksrepublik Bulgarien', '1946–1990', 'Flag_of_Bulgaria_(1971-1990).svg', 'People%27s_Republic_of_Bulgaria', 'Sozialistischer Einparteienstaat', [-90, 90, 60, 20, 40, 70, 70, -80, 100, -90, 60, -40],
    'Treuester Verbündeter Moskaus, unter Todor Schiwkow fast 35 Jahre regiert.');
  X('jugoslawien', 'SFR Jugoslawien', '1945–1992', 'Flag_of_Yugoslavia_(1946-1992).svg', 'Socialist_Federal_Republic_of_Yugoslavia', 'Sozialistische Föderation', [-70, 80, 30, -10, -30, 20, 50, -90, 50, 40, 30, -50],
    'Titos blockfreier Vielvölkerstaat mit Arbeiterselbstverwaltung – zerfallen in blutigen Kriegen.');
  X('albanien-vr', 'Sozialistische Volksrepublik Albanien', '1946–1991', 'Flag_of_Albania_(1946–1992).svg', 'People%27s_Socialist_Republic_of_Albania', 'Stalinistische Diktatur', [-100, 100, 100, 30, 70, 90, 70, -100, 100, -100, 60, -90],
    'Hoxhas abgeschottete Bunker-Diktatur, offiziell erster atheistischer Staat der Welt.');
  X('schweden-volksheim', 'Schweden (Volksheim-Ära)', '1932–1976', 'Flag_of_Sweden.svg', 'Folkhemmet', 'Sozialdemokratische Monarchie', [-50, 20, 30, -30, 20, 10, 40, -60, 30, -50, 50, 80],
    'Vier Jahrzehnte sozialdemokratischer Regierung schufen den Prototyp des skandinavischen Wohlfahrtsstaats.');
  X('thatcher-gb', 'Großbritannien (Thatcher-Ära)', '1979–1990', 'Flag_of_the_United_Kingdom.svg', 'Premiership_of_Margaret_Thatcher', 'Parlamentarische Monarchie', [70, 50, 30, 40, 50, 40, 50, 20, -90, -60, 50, 30],
    'Privatisierung, Deregulierung und Bergarbeiterstreik: das Labor des Neoliberalismus.');

  AG.HIST_STATES = HS;

  /* Länder für das Länder-Menü (Parteien & Politiker) */
  AG.COUNTRIES = C.filter(s => !['VA', 'MC', 'AD', 'SM', 'LI', 'AZ', 'AM', 'BY'].includes(s.cc))
    .map(s => ({ cc: s.cc, name: s.name, flag: s.flag, eu: s.eu }))
    .sort((a, b) => a.name.localeCompare(b.name, 'de'));
})();

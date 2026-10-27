/* Agora – historische Persönlichkeiten, Staatsleute und Denker Europas
   Positionen sind redaktionelle Einschätzungen und beziehen sich auf die jeweilige Zeit. */
window.AG = window.AG || {};
AG.PERSONS = AG.PERSONS || [];

(function () {
  const H = (id, name, cc, role, years, cat, wiki, v, desc) =>
    AG.PERSONS.push({ id, type: 'person', era: 'historisch', name, cc, role, years, cat, wiki, v, desc });

  /* ---------- Staatsleute des 20. Jahrhunderts ---------- */
  H('merkel', 'Angela Merkel', 'DE', 'Bundeskanzlerin 2005–2021', '1954–', 'Politik', 'Angela_Merkel', [10, 15, -60, -5, -25, -40, -10, 20, -60, 0, 60, 90],
    'Physikerin und Krisenmanagerin, prägte als „Mutti" der Nation eine Ära des Ausgleichs – von der Eurokrise bis zur Flüchtlingsaufnahme 2015.');
  H('kohl', 'Helmut Kohl', 'DE', 'Bundeskanzler 1982–1998', '1930–2017', 'Politik', 'Helmut_Kohl', [20, 25, -85, 40, 0, 20, 20, 50, -70, 10, 60, 70],
    'Kanzler der Einheit und Wegbereiter des Euro; sah die europäische Einigung als Frage von Krieg und Frieden.');
  H('brandt', 'Willy Brandt', 'DE', 'Bundeskanzler 1969–1974', '1913–1992', 'Politik', 'Willy_Brandt', [-40, -15, -50, -30, -20, -20, -10, -30, 20, 0, 20, 60],
    'Friedensnobelpreisträger, dessen Ostpolitik und Kniefall von Warschau Versöhnung symbolisierten. „Mehr Demokratie wagen".');
  H('adenauer', 'Konrad Adenauer', 'DE', 'Bundeskanzler 1949–1963', '1876–1967', 'Politik', 'Konrad_Adenauer', [25, 40, -70, 65, 20, 40, 30, 70, -90, 30, 60, 70],
    'Erster Bundeskanzler, verankerte die junge Bundesrepublik im Westen und in der europäischen Einigung.');
  H('schmidt', 'Helmut Schmidt', 'DE', 'Bundeskanzler 1974–1982', '1918–2015', 'Politik', 'Helmut_Schmidt', [-15, 30, -55, 0, 0, 30, 20, -20, -80, -10, 70, 80],
    'Pragmatischer „Macher" der SPD, standhaft gegen den RAF-Terror und Verfechter des NATO-Doppelbeschlusses.');
  H('erhard', 'Ludwig Erhard', 'DE', 'Bundeskanzler 1963–1966', '1897–1977', 'Politik', 'Ludwig_Erhard', [50, 0, -30, 20, 0, 20, 30, 30, -70, 10, 50, 70],
    'Vater des Wirtschaftswunders und der Sozialen Marktwirtschaft: „Wohlstand für alle".');
  H('schroeder', 'Gerhard Schröder', 'DE', 'Bundeskanzler 1998–2005', '1944–', 'Politik', 'Gerhard_Schröder', [0, 20, -30, -20, 0, 0, 20, -40, 40, -10, 50, 50],
    'Reformkanzler der Agenda 2010, sagte Nein zum Irakkrieg; später umstritten wegen seiner Nähe zu Putin.');
  H('fischer', 'Joschka Fischer', 'DE', 'Außenminister 1998–2005', '1948–', 'Politik', 'Joschka_Fischer', [-20, -10, -80, -50, -50, -40, -50, -60, -70, 0, 30, 50],
    'Vom Straßenkämpfer zum Außenminister, plädierte für eine europäische Föderation.');
  H('stresemann', 'Gustav Stresemann', 'DE', 'Reichskanzler & Außenminister', '1878–1929', 'Politik', 'Gustav_Stresemann', [30, 10, -40, 10, 20, 0, 20, 0, -20, 0, 50, 70],
    'Friedensnobelpreisträger der Weimarer Republik, Architekt der deutsch-französischen Annäherung.');
  H('ebert', 'Friedrich Ebert', 'DE', 'Reichspräsident 1919–1925', '1871–1925', 'Politik', 'Friedrich_Ebert', [-30, 30, 0, -10, 20, 0, 20, -30, 0, -20, 50, 70],
    'Sozialdemokrat, erster demokratischer Staatschef Deutschlands, verteidigte die Republik gegen links und rechts.');
  H('bismarck', 'Otto von Bismarck', 'DE', 'Reichskanzler 1871–1890', '1815–1898', 'Politik', 'Otto_von_Bismarck', [-10, 75, null, 70, 70, 40, 50, 40, null, -50, 60, 40],
    'Der „Eiserne Kanzler" einte Deutschland durch „Blut und Eisen" und schuf zugleich die erste Sozialversicherung.');
  H('honecker', 'Erich Honecker', 'DE', 'Staatsratsvorsitzender der DDR', '1912–1994', 'Politik', 'Erich_Honecker', [-95, 90, 60, 0, 20, 80, 60, -90, 100, -90, 60, -60],
    'Führte die DDR von 1971 bis zum Mauerfall; verantwortlich für Schießbefehl und Stasi-Staat.');
  H('hitler', 'Adolf Hitler', 'DE', 'Diktator des Deutschen Reiches', '1889–1945', 'Politik', 'Adolf_Hitler', [-10, 100, 90, 80, 100, 100, 60, -10, 80, -100, 30, -100],
    'Führer der NSDAP, verantwortlich für den Zweiten Weltkrieg und den Holocaust an sechs Millionen Juden.');
  H('kreisky', 'Bruno Kreisky', 'AT', 'Bundeskanzler 1970–1983', '1911–1990', 'Politik', 'Bruno_Kreisky', [-50, 0, -20, -20, -10, -20, 10, -30, 30, 0, 30, 60],
    'Sozialdemokratischer „Sonnenkönig", modernisierte Österreich und machte Wien zum Ort internationaler Diplomatie.');
  H('haider', 'Jörg Haider', 'AT', 'FPÖ-Obmann & Landeshauptmann', '1950–2008', 'Politik', 'Jörg_Haider', [30, 40, 80, 40, 80, 90, 40, 10, 30, 50, -90, -50],
    'Charismatischer Rechtspopulist, führte die FPÖ 2000 erstmals in eine Regierung.');
  H('renner', 'Karl Renner', 'AT', 'Staatskanzler & Bundespräsident', '1870–1950', 'Politik', 'Karl_Renner', [-40, 10, -20, -20, 10, 0, 10, -40, 20, 10, 30, 60],
    'Sozialdemokrat und zweimaliger Gründervater der Republik Österreich (1918 und 1945).');
  H('dollfuss', 'Engelbert Dollfuß', 'AT', 'Bundeskanzler 1932–1934', '1892–1934', 'Politik', 'Engelbert_Dollfuss', [0, 90, 60, 85, 60, 60, 30, 95, 20, -60, 60, -40],
    'Schaltete das Parlament aus und errichtete den austrofaschistischen Ständestaat; von Nationalsozialisten ermordet.');
  H('de-gaulle', 'Charles de Gaulle', 'FR', 'Präsident 1959–1969', '1890–1970', 'Politik', 'Charles_de_Gaulle', [0, 60, 50, 50, 80, 30, 40, 40, 30, -70, 10, 20],
    'Anführer des Freien Frankreichs und Gründer der Fünften Republik; Verfechter eines „Europas der Vaterländer".');
  H('mitterrand', 'François Mitterrand', 'FR', 'Präsident 1981–1995', '1916–1996', 'Politik', 'François_Mitterrand', [-45, 20, -70, -20, 0, -20, 0, -40, -30, -30, 50, 40],
    'Sozialist, schaffte die Todesstrafe ab und trieb mit Kohl den Vertrag von Maastricht voran.');
  H('chirac', 'Jacques Chirac', 'FR', 'Präsident 1995–2007', '1932–2019', 'Politik', 'Jacques_Chirac', [10, 30, -40, 20, 30, 20, 20, 0, 10, -40, 40, 50],
    'Gaullist, der Frankreichs Mitschuld am Holocaust anerkannte und sich dem Irakkrieg widersetzte.');
  H('sarkozy', 'Nicolas Sarkozy', 'FR', 'Präsident 2007–2012', '1955–', 'Politik', 'Nicolas_Sarkozy', [50, 60, -30, 30, 40, 60, 40, 10, -70, -40, 30, 30],
    'Energiegeladener Konservativer, führte Frankreich zurück in die NATO-Kommandostruktur.');
  H('hollande', 'François Hollande', 'FR', 'Präsident 2012–2017', '1954–', 'Politik', 'François_Hollande', [-30, 10, -65, -40, -20, -10, -20, -60, -60, -30, 50, 70],
    'Sozialist, unter dem Ehe für alle und Pariser Klimaabkommen kamen.');
  H('petain', 'Philippe Pétain', 'FR', 'Staatschef des Vichy-Regimes', '1856–1951', 'Politik', 'Philippe_Pétain', [10, 95, 60, 95, 80, 80, 0, 80, 50, -60, 70, -30],
    'Held von Verdun, später Chef des Kollaborationsregimes von Vichy: „Arbeit, Familie, Vaterland".');
  H('schuman', 'Robert Schuman', 'FR', 'Gründervater Europas', '1886–1963', 'Politik', 'Robert_Schuman', [20, 10, -95, 40, -30, 0, 20, 70, -60, 0, 60, 70],
    'Tiefgläubiger Katholik, dessen Erklärung vom 9. Mai 1950 die Montanunion und damit die heutige EU begründete.');
  H('monnet', 'Jean Monnet', 'FR', 'Vordenker der europäischen Einigung', '1888–1979', 'Politik', 'Jean_Monnet', [20, 10, -100, -10, -60, -10, 30, -20, -60, -20, 80, 60],
    'Unternehmer und Diplomat, Architekt der schrittweisen, institutionellen Integration Europas.');
  H('veil', 'Simone Veil', 'FR', 'Präsidentin des Europaparlaments', '1927–2017', 'Politik', 'Simone_Veil', [10, -10, -90, -50, -40, -20, 0, -20, -60, 0, 50, 70],
    'Auschwitz-Überlebende, setzte die Legalisierung der Abtreibung in Frankreich durch und wurde erste direkt gewählte EP-Präsidentin.');
  H('jaures', 'Jean Jaurès', 'FR', 'Sozialistenführer', '1859–1914', 'Politik', 'Jean_Jaurès', [-70, -10, -30, -30, -50, -30, 0, -60, 80, 0, 0, 20],
    'Humanistischer Sozialist und Pazifist, kurz vor Ausbruch des Ersten Weltkriegs ermordet.');
  H('mussolini', 'Benito Mussolini', 'IT', 'Faschistischer Diktator', '1883–1945', 'Politik', 'Benito_Mussolini', [-10, 100, 80, 60, 100, 70, 70, 30, 70, -100, 20, -90],
    'Vom Sozialisten zum „Duce": Begründer des Faschismus und Verbündeter Hitlers.');
  H('berlusconi', 'Silvio Berlusconi', 'IT', 'Ministerpräsident (mehrfach)', '1936–2023', 'Politik', 'Silvio_Berlusconi', [60, 30, 0, 30, 30, 50, 40, 30, 30, -10, -40, 0],
    'Medienunternehmer, der mit Forza Italia die italienische Politik drei Jahrzehnte prägte.');
  H('prodi', 'Romano Prodi', 'IT', 'Premier & Kommissionspräsident', '1939–', 'Politik', 'Romano_Prodi', [0, 10, -90, 0, -20, -20, 0, 30, -50, 0, 60, 70],
    'Katholischer Ökonom des Ulivo-Bündnisses, führte Italien in den Euro.');
  H('berlinguer', 'Enrico Berlinguer', 'IT', 'Generalsekretär der PCI', '1922–1984', 'Politik', 'Enrico_Berlinguer', [-70, 0, -30, -30, -30, -20, 0, -50, 10, -10, 10, 20],
    'Kopf des Eurokommunismus und Verfechter des „historischen Kompromisses" mit der Democrazia Cristiana.');
  H('de-gasperi', 'Alcide De Gasperi', 'IT', 'Ministerpräsident 1945–1953', '1881–1954', 'Politik', 'Alcide_De_Gasperi', [10, 20, -85, 50, 0, 20, 20, 80, -80, 10, 50, 80],
    'Christdemokrat und Gründervater Europas, verankerte Italien im Westen.');
  H('garibaldi', 'Giuseppe Garibaldi', 'IT', 'Held des Risorgimento', '1807–1882', 'Politik', 'Giuseppe_Garibaldi', [-20, 30, null, -20, 70, 0, 0, -80, null, -80, -50, -80],
    'Revolutionär und Freischärler, dessen „Zug der Tausend" die Einigung Italiens erzwang.');
  H('mazzini', 'Giuseppe Mazzini', 'IT', 'Republikaner & Denker', '1805–1872', 'Denker', 'Giuseppe_Mazzini', [-20, -10, -60, -10, 50, 0, 0, 0, null, -40, -40, -60],
    'Vordenker der italienischen Einheit und eines „Jungen Europa" freier, verbrüderter Nationen.');
  H('spinelli', 'Altiero Spinelli', 'IT', 'Föderalist, Autor des Manifests von Ventotene', '1907–1986', 'Politik', 'Altiero_Spinelli', [-30, 0, -100, -30, -80, -30, 0, -60, -40, 10, 10, -30],
    'Schrieb im faschistischen Inselgefängnis das Manifest für ein freies und vereintes Europa.');
  H('franco', 'Francisco Franco', 'ES', 'Diktator Spaniens 1939–1975', '1892–1975', 'Politik', 'Francisco_Franco', [10, 100, 70, 95, 90, 80, 50, 95, 30, -100, 60, -30],
    'General, der nach dem Bürgerkrieg eine nationalkatholische Diktatur errichtete.');
  H('gonzalez', 'Felipe González', 'ES', 'Ministerpräsident 1982–1996', '1942–', 'Politik', 'Felipe_González', [-10, 10, -70, -30, -20, 0, 0, -40, -50, 0, 50, 60],
    'Sozialist, der Spanien nach der Diktatur in EU und NATO führte.');
  H('aznar', 'José María Aznar', 'ES', 'Ministerpräsident 1996–2004', '1953–', 'Politik', 'José_María_Aznar', [60, 50, -30, 40, 40, 50, 40, 40, -90, -40, 40, 50],
    'Konservativer Atlantiker, unterstützte den Irakkrieg an der Seite von Bush und Blair.');
  H('durruti', 'Buenaventura Durruti', 'ES', 'Anarchistischer Revolutionär', '1896–1936', 'Aktivismus', 'Buenaventura_Durruti', [-100, -100, 0, -60, -90, -80, 0, -100, 60, 100, -100, -100],
    'Legendärer Anführer der anarchistischen Milizen im Spanischen Bürgerkrieg.');
  H('ibarruri', 'Dolores Ibárruri', 'ES', '„La Pasionaria", PCE', '1895–1989', 'Politik', 'Dolores_Ibárruri', [-95, 70, 30, -30, -20, 0, 30, -90, 90, -40, 0, -90],
    'Kommunistische Ikone des Bürgerkriegs: „¡No pasarán!"');
  H('salazar', 'António de Oliveira Salazar', 'PT', 'Diktator Portugals 1932–1968', '1889–1970', 'Politik', 'António_de_Oliveira_Salazar', [10, 95, 60, 95, 85, 60, 0, 95, -20, -90, 80, 20],
    'Ökonomieprofessor und Gründer des autoritär-katholischen „Estado Novo".');
  H('soares', 'Mário Soares', 'PT', 'Präsident & Premier Portugals', '1924–2017', 'Politik', 'Mário_Soares', [-20, -10, -70, -30, -20, -20, -10, -30, -60, -10, 40, 60],
    'Vater der portugiesischen Demokratie nach der Nelkenrevolution.');
  H('thatcher', 'Margaret Thatcher', 'GB', 'Premierministerin 1979–1990', '1925–2013', 'Politik', 'Margaret_Thatcher', [90, 60, 60, 50, 60, 50, 50, 30, -90, -80, 40, 0],
    'Die „Eiserne Lady" privatisierte, brach die Macht der Gewerkschaften und prägte eine ganze Epoche.');
  H('blair', 'Tony Blair', 'GB', 'Premierminister 1997–2007', '1953–', 'Politik', 'Tony_Blair', [10, 40, -60, -30, -20, -10, 0, 0, -100, 10, 60, 40],
    'Erfinder von „New Labour" und des Dritten Wegs, umstritten wegen des Irakkriegs.');
  H('churchill', 'Winston Churchill', 'GB', 'Premierminister 1940–45, 1951–55', '1874–1965', 'Politik', 'Winston_Churchill', [20, 40, -30, 60, 60, 30, 30, 20, -90, -30, 70, 40],
    'Kriegspremier, der Großbritannien gegen Hitler führte und 1946 die „Vereinigten Staaten von Europa" forderte.');
  H('attlee', 'Clement Attlee', 'GB', 'Premierminister 1945–1951', '1883–1967', 'Politik', 'Clement_Attlee', [-70, 10, 0, -10, 0, 0, 20, 0, -80, -50, 40, 30],
    'Labour-Premier, der den National Health Service schuf und Schlüsselindustrien verstaatlichte.');
  H('mosley', 'Oswald Mosley', 'GB', 'Gründer der British Union of Fascists', '1896–1980', 'Politik', 'Oswald_Mosley', [-20, 90, -60, 70, 80, 90, 50, 0, 60, -70, 20, -90],
    'Britischer Faschistenführer, propagierte nach dem Krieg „Europa als eine Nation".');
  H('powell', 'Enoch Powell', 'GB', 'Konservativer Politiker', '1912–1998', 'Politik', 'Enoch_Powell', [70, 40, 80, 70, 85, 100, 30, 40, 30, -30, -30, 10],
    'Klassischer Gelehrter und Monetarist, berüchtigt für die „Rivers of Blood"-Rede gegen Einwanderung.');
  H('collins', 'Michael Collins', 'IE', 'Irischer Revolutionär', '1890–1922', 'Politik', 'Michael_Collins_(Irish_leader)', [-10, 40, null, 30, 80, 0, 0, 60, 30, -20, -30, -60],
    'Guerillaführer im irischen Unabhängigkeitskrieg und Mitbegründer des Irischen Freistaats.');
  H('palme', 'Olof Palme', 'SE', 'Ministerpräsident Schwedens', '1927–1986', 'Politik', 'Olof_Palme', [-60, 0, 0, -50, -30, -40, -20, -70, 50, -30, 30, 40],
    'Ikone des demokratischen Sozialismus und der Blockfreiheit, 1986 ermordet.');
  H('kekkonen', 'Urho Kekkonen', 'FI', 'Präsident Finnlands 1956–1982', '1900–1986', 'Politik', 'Urho_Kekkonen', [-10, 50, 20, 20, 30, 20, 20, 0, 60, -20, 50, 40],
    'Navigierte Finnland mit Neutralität zwischen den Blöcken („Finnlandisierung").');
  H('walesa', 'Lech Wałęsa', 'PL', 'Gründer der Solidarność, Präsident', '1943–', 'Politik', 'Lech_Wałęsa', [10, 0, -60, 50, 30, 10, 0, 90, -90, 10, -40, 0],
    'Werftelektriker, der mit der Gewerkschaft Solidarność den Kommunismus in Polen zu Fall brachte.');
  H('pilsudski', 'Józef Piłsudski', 'PL', 'Staatschef der Zweiten Republik', '1867–1935', 'Politik', 'Józef_Piłsudski', [0, 80, 30, 40, 70, 20, 20, 30, -50, -80, 40, -20],
    'Marschall und Gründervater des unabhängigen Polens, regierte nach 1926 autoritär.');
  H('havel', 'Václav Havel', 'CZ', 'Präsident der Tschechoslowakei/Tschechiens', '1936–2011', 'Politik', 'Václav_Havel', [10, -50, -70, -20, -30, -30, -20, 0, -80, 20, 10, 40],
    'Dramatiker und Dissident, Symbolfigur der Samtenen Revolution: „Versuch, in der Wahrheit zu leben".');
  H('masaryk', 'Tomáš Garrigue Masaryk', 'CZ', 'Gründer der Tschechoslowakei', '1850–1937', 'Politik', 'Tomáš_Garrigue_Masaryk', [0, 10, -40, 0, 40, 0, 0, 10, -40, -20, 40, 60],
    'Philosoph-Präsident der demokratischen Ersten Republik.');
  H('ceausescu', 'Nicolae Ceaușescu', 'RO', 'Diktator Rumäniens', '1918–1989', 'Politik', 'Nicolae_Ceaușescu', [-100, 100, 80, 40, 70, 80, 80, -90, 30, -100, 60, -60],
    'Errichtete einen bizarren Personenkult und einen der repressivsten Staaten des Ostblocks.');
  H('tito', 'Josip Broz Tito', 'RS', 'Staatschef Jugoslawiens', '1892–1980', 'Politik', 'Josip_Broz_Tito', [-75, 85, 30, -10, -30, 20, 50, -90, 60, 30, 30, -60],
    'Partisanenführer, der Jugoslawien unabhängig von Moskau führte und die Blockfreienbewegung mitbegründete.');
  H('milosevic', 'Slobodan Milošević', 'RS', 'Präsident Serbiens/Jugoslawiens', '1941–2006', 'Politik', 'Slobodan_Milošević', [-40, 85, 60, 40, 90, 50, 50, 30, 80, -80, -20, -40],
    'Nationalistischer Machthaber während der Jugoslawienkriege, starb vor dem Urteil in Den Haag.');
  H('tudjman', 'Franjo Tuđman', 'HR', 'Erster Präsident Kroatiens', '1922–1999', 'Politik', 'Franjo_Tuđman', [10, 70, 20, 70, 90, 60, 30, 70, -40, -60, 30, -30],
    'Ex-Partisanengeneral und Historiker, führte Kroatien in die Unabhängigkeit.');
  H('hoxha', 'Enver Hoxha', 'AL', 'Diktator Albaniens 1944–1985', '1908–1985', 'Politik', 'Enver_Hoxha', [-100, 100, 100, 30, 70, 90, 70, -100, 100, -100, 60, -90],
    'Stalinist, der Albanien völlig isolierte und 1967 zum ersten atheistischen Staat der Welt erklärte.');
  H('metaxas', 'Ioannis Metaxas', 'GR', 'Diktator Griechenlands 1936–1941', '1871–1941', 'Politik', 'Ioannis_Metaxas', [10, 95, 40, 90, 90, 60, 30, 90, 0, -90, 70, -30],
    'Errichtete das autoritäre „Regime des 4. August"; sein „Ochi" gegen Mussolini wird bis heute gefeiert.');
  H('papandreou', 'Andreas Papandreou', 'GR', 'Gründer der PASOK', '1919–1996', 'Politik', 'Andreas_Papandreou', [-60, 20, 30, -20, 40, 0, 10, -20, 50, -30, -20, 0],
    'Charismatischer Linkspopulist, der Griechenland nach der Junta prägte.');
  H('ataturk', 'Mustafa Kemal Atatürk', 'TR', 'Gründer der Republik Türkei', '1881–1938', 'Politik', 'Mustafa_Kemal_Atatürk', [-20, 80, -10, -50, 90, 30, 60, -90, -20, -90, 50, -70],
    'Schuf aus den Trümmern des Osmanischen Reichs einen laizistischen Nationalstaat.');
  H('lenin', 'Wladimir Lenin', 'RU', 'Führer der Oktoberrevolution', '1870–1924', 'Politik', 'Vladimir_Lenin', [-100, 90, 40, -40, -50, 0, 50, -100, 80, -70, 60, -100],
    'Begründer der Sowjetunion und des Marxismus-Leninismus.');
  H('stalin', 'Josef Stalin', 'RU', 'Diktator der Sowjetunion', '1878–1953', 'Politik', 'Joseph_Stalin', [-100, 100, 70, 20, 40, 60, 80, -90, 100, -100, 60, -100],
    'Verantwortlich für Gulag, Großen Terror und Hungersnöte – und für den Sieg über Hitler-Deutschland.');
  H('trotzki', 'Leo Trotzki', 'RU', 'Revolutionär & Gründer der Roten Armee', '1879–1940', 'Politik', 'Leon_Trotsky', [-100, 70, -20, -50, -90, -60, 40, -100, 70, -70, 30, -100],
    'Theoretiker der permanenten Revolution, von Stalin verbannt und in Mexiko ermordet.');
  H('gorbatschow', 'Michail Gorbatschow', 'RU', 'Letzter Staatschef der Sowjetunion', '1931–2022', 'Politik', 'Mikhail_Gorbachev', [-50, 10, -30, -20, -30, 0, -10, -60, -10, 10, 30, 10],
    'Leitete mit Glasnost und Perestroika das friedliche Ende des Kalten Kriegs ein.');
  H('peter-der-grosse', 'Peter der Große', 'RU', 'Zar von Russland', '1672–1725', 'Monarch', 'Peter_the_Great', [0, 100, null, -20, 50, 0, 60, 40, null, -100, 100, -60],
    'Modernisierte Russland mit Gewalt nach westeuropäischem Vorbild und gründete Sankt Petersburg.');
  H('napoleon', 'Napoleon Bonaparte', 'FR', 'Kaiser der Franzosen', '1769–1821', 'Monarch', 'Napoleon', [0, 90, -30, 20, 70, 0, 50, 0, null, -100, -30, -60],
    'Revolutionsgeneral und Kaiser, der Europa eroberte und mit dem Code civil das moderne Recht prägte.');
  H('ludwig-xiv', 'Ludwig XIV.', 'FR', 'König von Frankreich', '1638–1715', 'Monarch', 'Louis_XIV', [10, 100, null, 80, 60, 30, 40, 90, null, -100, 100, 40],
    'Der „Sonnenkönig", Inbegriff des Absolutismus: „L’État, c’est moi".');
  H('robespierre', 'Maximilien de Robespierre', 'FR', 'Jakobinerführer', '1758–1794', 'Politik', 'Maximilien_Robespierre', [-40, 85, null, -60, 60, 0, 0, -100, null, -100, -40, -100],
    'Wortführer der Jakobiner und Organisator der Schreckensherrschaft; selbst unter der Guillotine gestorben.');
  H('franz-joseph', 'Franz Joseph I.', 'AT', 'Kaiser von Österreich', '1830–1916', 'Monarch', 'Franz_Joseph_I_of_Austria', [10, 70, -40, 85, -30, 20, 10, 85, null, -20, 100, 80],
    'Regierte 68 Jahre den Vielvölkerstaat Österreich-Ungarn.');
  H('maria-theresia', 'Maria Theresia', 'AT', 'Herrscherin der Habsburgermonarchie', '1717–1780', 'Monarch', 'Maria_Theresa', [0, 70, null, 80, 0, 0, 0, 80, null, -60, 100, 40],
    'Reformerin des aufgeklärten Absolutismus, führte die allgemeine Schulpflicht ein.');
  H('elisabeth-ii', 'Elisabeth II.', 'GB', 'Königin des Vereinigten Königreichs', '1926–2022', 'Monarch', 'Elizabeth_II', [10, 30, 0, 60, 50, 20, 10, 60, -60, 0, 90, 90],
    'Am längsten regierende britische Monarchin, Symbol von Kontinuität und Pflichterfüllung.');
  H('karl-der-grosse', 'Karl der Große', 'FR', 'Kaiser des Frankenreichs', '747–814', 'Monarch', 'Charlemagne', [0, 80, -70, 90, 0, 30, 0, 100, null, -30, 100, 0],
    'Der „Vater Europas" vereinte große Teile des Kontinents unter christlicher Herrschaft.');

  /* ---------- Ergänzungen: Baltikum, Skandinavien, Balkan ---------- */
  H('meri', 'Lennart Meri', 'EE', 'Präsident Estlands 1992–2001', '1929–2006', 'Politik', 'Lennart_Meri', [30, 10, -60, 20, 60, 20, -10, 0, -100, 0, 50, 60],
    'Schriftsteller und Filmemacher, der Estland nach der Unabhängigkeit nach Westen führte.');
  H('ulmanis', 'Kārlis Ulmanis', 'LV', 'Staatschef Lettlands 1934–1940', '1877–1942', 'Politik', 'Kārlis_Ulmanis', [0, 80, null, 50, 80, 50, 0, 40, null, -60, 40, -20],
    'Gründervater Lettlands, regierte nach seinem Putsch 1934 autoritär.');
  H('landsbergis', 'Vytautas Landsbergis', 'LT', 'Erster Staatschef Litauens nach 1990', '1932–', 'Politik', 'Vytautas_Landsbergis', [20, 30, -50, 50, 70, 30, 0, 60, -100, 0, 30, 30],
    'Musikwissenschaftler, der 1990 die Unabhängigkeit Litauens von der Sowjetunion ausrief.');
  H('smetona', 'Antanas Smetona', 'LT', 'Präsident Litauens 1926–1940', '1874–1944', 'Politik', 'Antanas_Smetona', [0, 80, null, 70, 85, 50, 0, 70, null, -60, 40, -10],
    'Errichtete nach einem Putsch ein autoritär-nationalistisches Regime.');
  H('fogh', 'Anders Fogh Rasmussen', 'DK', 'Staatsminister & NATO-Generalsekretär', '1953–', 'Politik', 'Anders_Fogh_Rasmussen', [60, 30, -30, 0, 10, 40, 30, 0, -100, 0, 50, 60],
    'Liberaler Atlantiker, führte Dänemark in den Irakkrieg und später die NATO.');
  H('hansson', 'Per Albin Hansson', 'SE', 'Ministerpräsident 1932–1946', '1885–1946', 'Politik', 'Per_Albin_Hansson', [-50, 20, null, -20, 20, 10, 40, -50, 60, -40, 50, 80],
    'Vater des schwedischen „Volksheims" und der Neutralitätspolitik im Zweiten Weltkrieg.');
  H('brundtland', 'Gro Harlem Brundtland', 'NO', 'Ministerpräsidentin Norwegens', '1939–', 'Politik', 'Gro_Harlem_Brundtland', [-30, 0, -50, -40, -20, 0, -40, -40, -80, -10, 50, 80],
    'Ärztin und Sozialdemokratin, prägte mit dem Brundtland-Bericht den Begriff der Nachhaltigkeit.');
  H('quisling', 'Vidkun Quisling', 'NO', 'Kollaborationsregierung 1942–1945', '1887–1945', 'Politik', 'Vidkun_Quisling', [-10, 95, 80, 70, 90, 80, 30, 30, 90, -90, 20, -80],
    'Faschistischer Kollaborateur der deutschen Besatzer, dessen Name zum Synonym für Verrat wurde.');
  H('mannerheim', 'Carl Gustaf Emil Mannerheim', 'FI', 'Marschall & Präsident Finnlands', '1867–1951', 'Politik', 'Carl_Gustaf_Emil_Mannerheim', [10, 70, null, 60, 70, 30, 0, 40, -60, -40, 70, 30],
    'Oberbefehlshaber im Winter- und Fortsetzungskrieg, rettete Finnlands Unabhängigkeit.');
  H('dindic', 'Zoran Đinđić', 'RS', 'Ministerpräsident Serbiens 2001–2003', '1952–2003', 'Politik', 'Zoran_Đinđić', [40, 10, -70, 0, 30, 10, 10, 0, -60, 0, 30, 20],
    'Reformer, der Milošević an Den Haag auslieferte und 2003 ermordet wurde.');
  H('izetbegovic', 'Alija Izetbegović', 'BA', 'Präsident Bosniens 1990–1996', '1925–2003', 'Politik', 'Alija_Izetbegović', [0, 40, null, 60, 50, 20, 0, 85, -60, -50, 10, 20],
    'Führte Bosnien-Herzegowina durch den Krieg und in die Unabhängigkeit.');
  H('rugova', 'Ibrahim Rugova', 'XK', 'Erster Präsident des Kosovo', '1944–2006', 'Politik', 'Ibrahim_Rugova', [10, -20, -60, 30, 70, 10, 0, 20, -90, -20, 10, 60],
    'Der „Gandhi des Balkans" setzte auf gewaltfreien Widerstand gegen Belgrad.');
  H('schiwkow', 'Todor Schiwkow', 'BG', 'Staatschef Bulgariens 1954–1989', '1911–1998', 'Politik', 'Todor_Zhivkov', [-90, 90, 60, 20, 40, 70, 70, -80, 100, -90, 60, -40],
    'Am längsten regierender Machthaber des Ostblocks, treuer Gefolgsmann Moskaus.');
  H('simeon', 'Simeon Sakskoburggotski', 'BG', 'Zar & Ministerpräsident Bulgariens', '1937–', 'Monarch', 'Simeon_Saxe-Coburg-Gotha', [50, 20, -50, 40, 30, 20, 20, 40, -70, 0, 60, 70],
    'Als Kind Zar, später demokratisch gewählter Ministerpräsident – ein Unikum in Europa.');
  H('karamanlis', 'Konstantinos Karamanlis', 'GR', 'Premier & Präsident Griechenlands', '1907–1998', 'Politik', 'Konstantinos_Karamanlis', [30, 40, -60, 50, 50, 30, 30, 60, -70, -50, 50, 60],
    'Führte Griechenland nach dem Ende der Junta zurück zur Demokratie und in die EG.');
  H('venizelos', 'Eleftherios Venizelos', 'GR', 'Ministerpräsident Griechenlands', '1864–1936', 'Politik', 'Eleftherios_Venizelos', [20, 40, null, 10, 80, 20, 20, 30, -60, -50, 40, 20],
    'Liberaler Modernisierer und Verfechter der „Großen Idee" eines erweiterten Griechenlands.');
  H('makarios', 'Makarios III.', 'CY', 'Erzbischof & erster Präsident Zyperns', '1913–1977', 'Religion', 'Makarios_III', [-10, 60, null, 70, 70, 30, 0, 100, 50, -60, 40, 10],
    'Orthodoxer Erzbischof, Unabhängigkeitsführer und blockfreier Staatschef.');

  /* ---------- Denkerinnen und Denker ---------- */
  H('marx', 'Karl Marx', 'DE', 'Philosoph & Ökonom', '1818–1883', 'Denker', 'Karl_Marx', [-100, 30, 0, -40, -100, -50, 30, -100, 60, -60, -30, -100],
    'Autor des „Kapitals" und des „Kommunistischen Manifests": „Proletarier aller Länder, vereinigt euch!"');
  H('engels', 'Friedrich Engels', 'DE', 'Philosoph & Unternehmer', '1820–1895', 'Denker', 'Friedrich_Engels', [-100, 30, 0, -50, -90, -50, 20, -100, 60, -50, -30, -90],
    'Fabrikantensohn, Mitautor des Kommunistischen Manifests und Herausgeber des „Kapitals".');
  H('luxemburg', 'Rosa Luxemburg', 'DE', 'Sozialistin & Theoretikerin', '1871–1919', 'Denker', 'Rosa_Luxemburg', [-100, -30, 0, -60, -90, -70, 0, -100, 60, -20, -70, -100],
    'Revolutionärin und Kritikerin Lenins: „Freiheit ist immer die Freiheit der Andersdenkenden."');
  H('gramsci', 'Antonio Gramsci', 'IT', 'Marxistischer Philosoph', '1891–1937', 'Denker', 'Antonio_Gramsci', [-95, 30, 0, -50, -60, -40, 10, -90, 60, -20, -40, -80],
    'Mitbegründer der PCI, entwickelte im Gefängnis die Theorie der kulturellen Hegemonie.');
  H('bernstein', 'Eduard Bernstein', 'DE', 'Theoretiker des Revisionismus', '1850–1932', 'Denker', 'Eduard_Bernstein', [-50, -10, -20, -30, -30, -20, 0, -50, 0, 0, 30, 90],
    'Wandte die Sozialdemokratie vom Revolutionsgedanken zur schrittweisen Reform.');
  H('kropotkin', 'Pjotr Kropotkin', 'RU', 'Anarchistischer Denker', '1842–1921', 'Denker', 'Peter_Kropotkin', [-100, -100, 0, -60, -90, -80, -60, -100, 50, 100, -100, -80],
    'Fürst und Geograf, Theoretiker des Anarchokommunismus und der „gegenseitigen Hilfe".');
  H('bakunin', 'Michail Bakunin', 'RU', 'Revolutionär & Anarchist', '1814–1876', 'Denker', 'Mikhail_Bakunin', [-90, -100, 0, -60, -80, -70, 0, -100, 60, 100, -100, -100],
    'Rivale von Marx in der Ersten Internationale: „Die Lust der Zerstörung ist eine schaffende Lust."');
  H('proudhon', 'Pierre-Joseph Proudhon', 'FR', 'Erster bekennender Anarchist', '1809–1865', 'Denker', 'Pierre-Joseph_Proudhon', [-50, -90, 0, 0, -30, -20, 0, -80, 30, 100, -80, -60],
    'Autor von „Was ist Eigentum?", Begründer des Mutualismus und Föderalismus.');
  H('tolstoi', 'Leo Tolstoi', 'RU', 'Schriftsteller & christlicher Anarchist', '1828–1910', 'Denker', 'Leo_Tolstoy', [-60, -90, 0, 40, -50, -50, -70, 90, 60, 90, -70, -10],
    'Autor von „Krieg und Frieden", predigte Gewaltlosigkeit und ein Leben nach der Bergpredigt.');
  H('owen', 'Robert Owen', 'GB', 'Frühsozialist & Unternehmer', '1771–1858', 'Denker', 'Robert_Owen', [-80, -30, 0, -30, -40, -30, -20, -60, 0, 60, -30, 10],
    'Fabrikant und Gründer von Musterkolonien, Pionier der Genossenschaftsbewegung.');
  H('smith', 'Adam Smith', 'GB', 'Ökonom & Moralphilosoph', '1723–1790', 'Denker', 'Adam_Smith', [70, -30, null, 10, -20, -30, 20, 0, null, 0, 40, 70],
    'Vater der Volkswirtschaftslehre und der „unsichtbaren Hand" des Marktes.');
  H('locke', 'John Locke', 'GB', 'Philosoph der Aufklärung', '1632–1704', 'Denker', 'John_Locke', [50, -60, null, 0, 0, 0, 0, 30, null, 0, 40, 30],
    'Begründer des Liberalismus: natürliche Rechte auf Leben, Freiheit und Eigentum.');
  H('hobbes', 'Thomas Hobbes', 'GB', 'Staatsphilosoph', '1588–1679', 'Denker', 'Thomas_Hobbes', [10, 95, null, 40, 30, 20, 10, 0, null, -90, 60, 50],
    'Autor des „Leviathan": Nur ein allmächtiger Staat beendet den Krieg aller gegen alle.');
  H('mill', 'John Stuart Mill', 'GB', 'Liberaler Philosoph', '1806–1873', 'Denker', 'John_Stuart_Mill', [30, -80, 0, -60, -50, -40, -30, -60, -20, 30, 50, 60],
    'Verfasser von „Über die Freiheit", Vorkämpfer des Frauenwahlrechts.');
  H('burke', 'Edmund Burke', 'GB', 'Vater des Konservatismus', '1729–1797', 'Denker', 'Edmund_Burke', [20, 30, null, 90, 40, 30, 0, 70, null, 30, 80, 100],
    'Warnte in seinen „Betrachtungen über die Französische Revolution" vor radikalem Umsturz.');
  H('hayek', 'Friedrich August von Hayek', 'AT', 'Ökonom, Nobelpreisträger', '1899–1992', 'Denker', 'Friedrich_Hayek', [85, -40, -20, 10, -20, -20, 40, 0, -40, 50, 50, 70],
    'Autor von „Der Weg zur Knechtschaft", Vordenker des Neoliberalismus.');
  H('mises', 'Ludwig von Mises', 'AT', 'Ökonom der Österreichischen Schule', '1881–1973', 'Denker', 'Ludwig_von_Mises', [100, -50, 0, 0, -40, -50, 50, -30, -20, 40, 40, 40],
    'Radikaler Verteidiger des Laissez-faire und Kritiker jeder Planwirtschaft.');
  H('keynes', 'John Maynard Keynes', 'GB', 'Ökonom', '1883–1946', 'Denker', 'John_Maynard_Keynes', [-20, 0, -30, -40, -30, -10, 0, -50, -40, -30, 80, 70],
    'Begründer des Keynesianismus: Der Staat soll in Krisen durch Ausgaben die Nachfrage stützen.');
  H('popper', 'Karl Popper', 'AT', 'Philosoph', '1902–1994', 'Denker', 'Karl_Popper', [20, -40, -40, -40, -50, -20, 0, -50, -40, 0, 50, 90],
    'Verteidiger der „offenen Gesellschaft" gegen Platon, Hegel und Marx; Plädoyer für Stückwerk-Reform.');
  H('arendt', 'Hannah Arendt', 'DE', 'Politische Theoretikerin', '1906–1975', 'Denker', 'Hannah_Arendt', [0, -50, -30, -20, -40, -50, 0, -30, -20, 40, -40, 30],
    'Analysierte „Elemente und Ursprünge totaler Herrschaft" und prägte die „Banalität des Bösen".');
  H('habermas', 'Jürgen Habermas', 'DE', 'Philosoph', '1929–', 'Denker', 'Jürgen_Habermas', [-30, -30, -90, -50, -80, -50, -20, -40, -60, 0, 20, 60],
    'Theoretiker der deliberativen Demokratie und des „Verfassungspatriotismus", glühender Europäer.');
  H('kant', 'Immanuel Kant', 'DE', 'Philosoph der Aufklärung', '1724–1804', 'Denker', 'Immanuel_Kant', [10, -20, -80, -10, -60, -40, 0, 0, -30, 0, 40, 60],
    'Entwarf in „Zum ewigen Frieden" einen Völkerbund freier Republiken.');
  H('hegel', 'G. W. F. Hegel', 'DE', 'Philosoph', '1770–1831', 'Denker', 'Georg_Wilhelm_Friedrich_Hegel', [0, 60, null, 50, 60, 20, 0, 40, null, -50, 70, 50],
    'Sah im Staat die „Wirklichkeit der sittlichen Idee" und die Geschichte als Fortschritt der Freiheit.');
  H('nietzsche', 'Friedrich Nietzsche', 'DE', 'Philosoph', '1844–1900', 'Denker', 'Friedrich_Nietzsche', [0, 30, -40, 40, -50, 0, 0, -100, null, 0, 100, -90],
    'Verkündete den „Tod Gottes" und die „Umwertung aller Werte"; verachtete Nationalismus und Antisemitismus.');
  H('weber', 'Max Weber', 'DE', 'Soziologe', '1864–1920', 'Denker', 'Max_Weber', [20, 30, null, 0, 50, 0, 10, -20, null, -30, 80, 60],
    'Begründer der Soziologie, Theoretiker von Bürokratie und charismatischer Herrschaft.');
  H('schmitt', 'Carl Schmitt', 'DE', 'Staatsrechtler', '1888–1985', 'Denker', 'Carl_Schmitt', [0, 90, 40, 70, 80, 40, 0, 60, 60, -70, 60, -50],
    '„Souverän ist, wer über den Ausnahmezustand entscheidet" – Kronjurist des Dritten Reichs.');
  H('rousseau', 'Jean-Jacques Rousseau', 'FR', 'Philosoph', '1712–1778', 'Denker', 'Jean-Jacques_Rousseau', [-40, 10, null, -20, 40, 0, -50, 20, null, 30, -100, -60],
    'Theoretiker des Gesellschaftsvertrags und der Volkssouveränität: „Der Mensch ist frei geboren …"');
  H('montesquieu', 'Montesquieu', 'FR', 'Staatstheoretiker', '1689–1755', 'Denker', 'Montesquieu', [20, -20, null, 20, 20, 0, 0, 10, null, 50, 60, 80],
    'Vater der Gewaltenteilung in „Vom Geist der Gesetze".');
  H('voltaire', 'Voltaire', 'FR', 'Philosoph der Aufklärung', '1694–1778', 'Denker', 'Voltaire', [40, -50, null, -70, -30, -20, 0, -100, null, 0, 70, 40],
    'Kämpfer gegen Kirche und Intoleranz: „Écrasez l’infâme!"');
  H('de-maistre', 'Joseph de Maistre', 'FR', 'Gegenrevolutionärer Denker', '1753–1821', 'Denker', 'Joseph_de_Maistre', [0, 100, null, 100, 40, 40, 0, 100, null, -20, 100, 90],
    'Verteidigte Thron und Altar gegen die Aufklärung – Stammvater des Traditionalismus.');
  H('tocqueville', 'Alexis de Tocqueville', 'FR', 'Politischer Denker', '1805–1859', 'Denker', 'Alexis_de_Tocqueville', [30, -40, null, 30, 10, 0, 0, 40, null, 70, 30, 80],
    'Analysierte in „Über die Demokratie in Amerika" Chancen und Gefahren der Gleichheit.');
  H('beauvoir', 'Simone de Beauvoir', 'FR', 'Philosophin & Feministin', '1908–1986', 'Denker', 'Simone_de_Beauvoir', [-60, -40, 0, -90, -60, -40, 0, -100, 40, 0, -20, -40],
    '„Man wird nicht als Frau geboren, man wird es" – Grundlagentext des modernen Feminismus.');
  H('sartre', 'Jean-Paul Sartre', 'FR', 'Existenzialist', '1905–1980', 'Denker', 'Jean-Paul_Sartre', [-80, -20, 0, -70, -60, -40, 0, -100, 70, 0, -60, -80],
    'Existenzialistischer Philosoph und engagierter Linksintellektueller, lehnte den Nobelpreis ab.');
  H('foucault', 'Michel Foucault', 'FR', 'Philosoph', '1926–1984', 'Denker', 'Michel_Foucault', [-40, -90, 0, -90, -70, -50, 0, -80, 40, 50, -60, -60],
    'Analysierte Macht, Wissen, Gefängnis und Sexualität – Leitfigur des Poststrukturalismus.');
  H('camus', 'Albert Camus', 'FR', 'Schriftsteller & Philosoph', '1913–1960', 'Denker', 'Albert_Camus', [-40, -60, -40, -40, -40, -30, 0, -60, -20, 30, -20, 30],
    'Philosoph der Revolte und Gegner jedes Totalitarismus – auch des sowjetischen.');
  H('piketty', 'Thomas Piketty', 'FR', 'Ökonom', '1971–', 'Denker', 'Thomas_Piketty', [-75, -10, -70, -50, -50, -40, -50, -60, -30, 0, 20, 10],
    'Autor von „Das Kapital im 21. Jahrhundert", fordert globale Vermögensteuern.');
  H('benoist', 'Alain de Benoist', 'FR', 'Vordenker der Nouvelle Droite', '1943–', 'Denker', 'Alain_de_Benoist', [-20, 40, -20, 60, 60, 80, -40, -40, 90, 90, 0, -30],
    'Philosoph des Ethnopluralismus und eines antiliberalen „Europas der Regionen".');
  H('evola', 'Julius Evola', 'IT', 'Traditionalistischer Esoteriker', '1898–1974', 'Denker', 'Julius_Evola', [-10, 90, 0, 100, 40, 80, -20, 80, 90, 0, 100, -100],
    'Radikal-traditionalistischer Denker, der „gegen die moderne Welt" revoltierte.');
  H('machiavelli', 'Niccolò Machiavelli', 'IT', 'Staatstheoretiker', '1469–1527', 'Denker', 'Niccolò_Machiavelli', [0, 70, null, 30, 80, 0, 0, -40, null, -40, 40, -40],
    'Autor von „Der Fürst", Begründer der modernen politischen Wissenschaft.');
  H('aquin', 'Thomas von Aquin', 'IT', 'Kirchenlehrer', '1225–1274', 'Denker', 'Thomas_Aquinas', [-20, 50, null, 95, 0, 0, 0, 100, null, 20, 80, 80],
    'Verband aristotelische Philosophie und christliche Theologie; Grundlage der katholischen Soziallehre.');
  H('erasmus', 'Erasmus von Rotterdam', 'NL', 'Humanist', '1466–1536', 'Denker', 'Erasmus', [0, -20, -80, 20, -80, -20, 0, 70, null, 0, 60, 80],
    'Fürst der Humanisten und Pazifist, Namensgeber des europäischen Austauschprogramms.');
  H('platon', 'Platon', 'GR', 'Philosoph', '428–348 v. Chr.', 'Denker', 'Plato', [-50, 90, null, 60, 30, 40, 0, 40, null, -60, 100, -40],
    'Entwarf in der „Politeia" einen Staat, regiert von Philosophenkönigen.');
  H('aristoteles', 'Aristoteles', 'GR', 'Philosoph', '384–322 v. Chr.', 'Denker', 'Aristotle', [0, 50, null, 70, 20, 30, 0, 40, null, 20, 80, 80],
    'Nannte den Menschen ein „politisches Lebewesen" und suchte die beste Verfassung in der Mitte.');
  H('coudenhove', 'Richard Coudenhove-Kalergi', 'AT', 'Begründer der Paneuropa-Union', '1894–1972', 'Denker', 'Richard_von_Coudenhove-Kalergi', [10, 10, -100, 10, -70, -20, 0, 20, -40, 0, 70, 30],
    'Visionär eines vereinten Europas schon in den 1920er-Jahren.');
  H('chesterton', 'G. K. Chesterton', 'GB', 'Schriftsteller & Distributist', '1874–1936', 'Denker', 'G._K._Chesterton', [-30, 0, null, 80, 40, 20, -40, 95, null, 80, -20, 30],
    'Katholischer Essayist, der weder Kapitalismus noch Sozialismus, sondern breit gestreutes Eigentum wollte.');
  H('scruton', 'Roger Scruton', 'GB', 'Konservativer Philosoph', '1944–2020', 'Denker', 'Roger_Scruton', [20, 30, 60, 90, 60, 70, -30, 60, -30, 30, 40, 90],
    'Philosoph der Schönheit und der „oikophilie", der Liebe zum Zuhause.');
  H('orwell', 'George Orwell', 'GB', 'Schriftsteller', '1903–1950', 'Denker', 'George_Orwell', [-60, -60, 0, -20, 0, -20, 0, -60, -50, 20, -60, -40],
    'Demokratischer Sozialist und Autor von „1984" und „Farm der Tiere" – Warner vor Totalitarismus jeder Couleur.');
  H('russell', 'Bertrand Russell', 'GB', 'Philosoph & Friedensaktivist', '1872–1970', 'Denker', 'Bertrand_Russell', [-40, -50, -30, -60, -80, -40, 0, -100, 80, 30, 40, 30],
    'Logiker, Atheist und Pazifist, Mitbegründer der Bewegung für nukleare Abrüstung.');
  H('rand', 'Ayn Rand', 'RU', 'Schriftstellerin & Philosophin', '1905–1982', 'Denker', 'Ayn_Rand', [100, -60, null, -40, -30, -40, 80, -100, -40, 30, 60, -20],
    'In Sankt Petersburg geboren, begründete in den USA den Objektivismus („Atlas wirft die Welt ab").');
  H('hoppe', 'Hans-Hermann Hoppe', 'DE', 'Ökonom', '1949–', 'Denker', 'Hans-Hermann_Hoppe', [100, -80, 90, 80, 40, 90, 60, 40, 40, 100, 90, -30],
    'Anarchokapitalistischer Vordenker, der Monarchie für weniger schlimm hält als Demokratie.');
  H('dugin', 'Alexander Dugin', 'RU', 'Philosoph des Neo-Eurasismus', '1962–', 'Denker', 'Aleksandr_Dugin', [-20, 90, 100, 95, 70, 60, 40, 80, 100, -40, 40, -60],
    'Vordenker eines antiwestlichen, orthodox-imperialen „Eurasiens".');
  H('solschenizyn', 'Alexander Solschenizyn', 'RU', 'Schriftsteller, Nobelpreisträger', '1918–2008', 'Denker', 'Aleksandr_Solzhenitsyn', [10, 40, 60, 90, 70, 50, -30, 90, 60, 60, -20, 20],
    'Enthüllte mit dem „Archipel Gulag" das sowjetische Lagersystem; später orthodox-konservativer Kritiker des Westens.');
  H('zizek', 'Slavoj Žižek', 'SI', 'Philosoph', '1949–', 'Denker', 'Slavoj_Žižek', [-90, 10, 0, -30, -40, -20, 0, -90, 20, 0, -30, -90],
    'Provokanter Hegelianer und Lacanianer, der „den Kommunismus wieder denken" will.');
})();

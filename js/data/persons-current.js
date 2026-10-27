/* Agora – Politikerinnen und Politiker der Gegenwart
   P(id, Name, Land, Rolle, Lebensdaten, Kategorie, Wikipedia-Titel (en), Vektor, Beschreibung)
   Positionen sind redaktionelle Einschätzungen auf Basis öffentlicher Aussagen, Programme und Regierungshandeln. */
window.AG = window.AG || {};
AG.PERSONS = AG.PERSONS || [];

(function () {
  const P = (id, name, cc, role, years, cat, wiki, v, desc) =>
    AG.PERSONS.push({ id, type: 'person', era: 'aktuell', name, cc, role, years, cat, wiki, v, desc });

  /* Deutschland */
  P('merz', 'Friedrich Merz', 'DE', 'Bundeskanzler, CDU', '1955–', 'Politik', 'Friedrich_Merz', [45, 40, -30, 40, 30, 55, 30, 30, -80, 0, 50, 60],
    'Wirtschaftsliberaler Christdemokrat, der die CDU nach der Ära Merkel wieder konservativer ausrichtete und 2025 Bundeskanzler wurde.');
  P('scholz', 'Olaf Scholz', 'DE', 'Bundeskanzler 2021–2025, SPD', '1958–', 'Politik', 'Olaf_Scholz', [-25, 10, -50, -35, -20, 0, -20, -40, -55, -10, 50, 80],
    'Pragmatischer Sozialdemokrat, führte die Ampelkoalition und prägte den Begriff der „Zeitenwende".');
  P('klingbeil', 'Lars Klingbeil', 'DE', 'Vizekanzler & SPD-Vorsitzender', '1978–', 'Politik', 'Lars_Klingbeil', [-25, 10, -55, -35, -20, 0, -20, -40, -65, -10, 50, 75],
    'Sozialdemokrat aus Niedersachsen, steht für eine sicherheitspolitisch wehrhafte, regierungsorientierte SPD.');
  P('weidel', 'Alice Weidel', 'DE', 'Co-Vorsitzende der AfD', '1979–', 'Politik', 'Alice_Weidel', [50, 55, 85, 55, 80, 95, 70, 0, 50, 10, -80, -40],
    'Ökonomin und Gesicht der AfD; verbindet wirtschaftsliberale Positionen mit harter Migrations- und EU-Kritik.');
  P('hoecke', 'Björn Höcke', 'DE', 'AfD-Landeschef Thüringen', '1972–', 'Politik', 'Björn_Höcke', [-10, 80, 90, 85, 100, 100, 40, 20, 80, -30, -70, -80],
    'Führungsfigur des völkisch-nationalistischen Flügels der AfD, vom Verfassungsschutz als rechtsextrem eingestuft.');
  P('habeck', 'Robert Habeck', 'DE', 'Vizekanzler 2021–2025, Grüne', '1969–', 'Politik', 'Robert_Habeck', [-15, -5, -70, -55, -45, -35, -75, -45, -70, 0, 30, 60],
    'Schriftsteller und grüner Realpolitiker, Wirtschafts- und Klimaschutzminister in der Ampelkoalition.');
  P('baerbock', 'Annalena Baerbock', 'DE', 'Außenministerin 2021–2025, Grüne', '1980–', 'Politik', 'Annalena_Baerbock', [-15, -5, -75, -60, -50, -40, -75, -40, -90, 0, 30, 55],
    'Vertrat eine „wertegeleitete" Außenpolitik und klare Unterstützung der Ukraine; seit 2025 Präsidentin der UN-Generalversammlung.');
  P('wagenknecht', 'Sahra Wagenknecht', 'DE', 'Gründerin des BSW', '1969–', 'Politik', 'Sahra_Wagenknecht', [-55, 35, 60, 15, 45, 60, 30, -20, 90, -20, -40, -10],
    'Ehemalige Linken-Politikerin, die mit dem BSW linke Wirtschaftspolitik, Migrationsbegrenzung und Russland-Diplomatie verbindet.');
  P('lindner', 'Christian Lindner', 'DE', 'Finanzminister 2021–2024, FDP', '1979–', 'Politik', 'Christian_Lindner', [70, -20, -30, -25, -10, 25, 40, -30, -70, 10, 40, 60],
    'Langjähriger FDP-Chef, Verfechter von Schuldenbremse, Steuersenkungen und Bürgerrechten.');
  P('soeder', 'Markus Söder', 'DE', 'Bayerischer Ministerpräsident, CSU', '1967–', 'Politik', 'Markus_Söder', [25, 50, 0, 50, 40, 60, 20, 50, -60, 60, 0, 50],
    'Machtbewusster CSU-Vorsitzender mit wechselnden Akzenten zwischen Volksnähe, Heimat und Ordnungspolitik.');
  P('reichinnek', 'Heidi Reichinnek', 'DE', 'Fraktionschefin der Linken', '1988–', 'Politik', 'Heidi_Reichinnek', [-75, -20, -30, -75, -60, -70, -60, -80, 40, 0, -30, -40],
    'Junge Linken-Politikerin, die mit Social-Media-Auftritten zur Wiederbelebung ihrer Partei beitrug.');
  P('steinmeier', 'Frank-Walter Steinmeier', 'DE', 'Bundespräsident', '1956–', 'Politik', 'Frank-Walter_Steinmeier', [-20, 10, -60, -20, -20, -10, -20, -10, -40, 0, 70, 90],
    'Sozialdemokrat und ehemaliger Außenminister; als Bundespräsident Mahner für Zusammenhalt und Demokratie.');
  P('von-der-leyen', 'Ursula von der Leyen', 'DE', 'Präsidentin der EU-Kommission', '1958–', 'Politik', 'Ursula_von_der_Leyen', [20, 20, -90, 0, -30, 10, -30, 30, -90, -10, 70, 60],
    'Christdemokratin, steht an der Spitze der EU-Kommission – vom Green Deal bis zur Aufrüstung Europas.');

  /* Österreich */
  P('stocker', 'Christian Stocker', 'AT', 'Bundeskanzler, ÖVP', '1960–', 'Politik', 'Christian_Stocker', [35, 40, -20, 40, 35, 60, 20, 40, -40, 20, 40, 60],
    'Jurist aus Wiener Neustadt, führt seit 2025 die erste Dreierkoalition aus ÖVP, SPÖ und NEOS.');
  P('kickl', 'Herbert Kickl', 'AT', 'Obmann der FPÖ', '1968–', 'Politik', 'Herbert_Kickl', [10, 60, 85, 65, 85, 100, 50, 20, 70, 0, -90, -50],
    'Ehemaliger Innenminister, Stratege des rechtspopulistischen Kurses der FPÖ und selbsternannter „Volkskanzler".');
  P('babler', 'Andreas Babler', 'AT', 'Vizekanzler & SPÖ-Vorsitzender', '1973–', 'Politik', 'Andreas_Babler', [-65, -10, -20, -50, -30, -40, -40, -50, 30, 0, -20, -10],
    'Ehemaliger Bürgermeister von Traiskirchen, steht für einen deutlich linken Kurs der Sozialdemokratie.');
  P('meinl-reisinger', 'Beate Meinl-Reisinger', 'AT', 'Außenministerin, NEOS', '1978–', 'Politik', 'Beate_Meinl-Reisinger', [55, -20, -80, -50, -40, -10, -10, -50, -70, 10, 40, 40],
    'Liberale Pro-Europäerin, Vorsitzende der NEOS und Verfechterin von Bildungs- und Transparenzreformen.');
  P('kurz', 'Sebastian Kurz', 'AT', 'Bundeskanzler 2017–2021, ÖVP', '1986–', 'Politik', 'Sebastian_Kurz', [45, 45, 0, 40, 40, 80, 30, 30, -30, 10, 10, 30],
    'Wandelte die ÖVP zur „neuen Volkspartei" mit harter Migrationspolitik; trat 2021 nach Korruptionsermittlungen zurück.');
  P('van-der-bellen', 'Alexander Van der Bellen', 'AT', 'Bundespräsident', '1944–', 'Politik', 'Alexander_Van_der_Bellen', [-10, -20, -80, -50, -50, -40, -60, -40, -30, 0, 60, 70],
    'Ökonom und ehemaliger Grünen-Chef; als Bundespräsident Hüter der Verfassung und überzeugter Europäer.');
  P('kogler', 'Werner Kogler', 'AT', 'Vizekanzler 2020–2025, Grüne', '1961–', 'Politik', 'Werner_Kogler', [-30, -20, -50, -50, -40, -40, -80, -30, -10, 10, 10, 50],
    'Führte die Grünen 2019 zurück ins Parlament und in die erste türkis-grüne Koalition.');

  /* Schweiz */
  P('blocher', 'Christoph Blocher', 'CH', 'SVP-Vordenker, Unternehmer', '1940–', 'Politik', 'Christoph_Blocher', [60, 40, 100, 60, 80, 90, 40, 30, 60, 70, -90, 40],
    'Industrieller und Architekt des Aufstiegs der SVP; kämpfte erfolgreich gegen den EWR-Beitritt der Schweiz.');
  P('keller-sutter', 'Karin Keller-Sutter', 'CH', 'Bundesrätin, FDP', '1963–', 'Politik', 'Karin_Keller-Sutter', [55, 10, 40, 10, 20, 40, 20, 0, 20, 60, 30, 80],
    'Freisinnige Finanzministerin und Bundespräsidentin 2025, steht für solide Finanzen und Schweizer Eigenständigkeit.');

  /* Frankreich */
  P('macron', 'Emmanuel Macron', 'FR', 'Präsident der Französischen Republik', '1977–', 'Politik', 'Emmanuel_Macron', [30, 20, -80, -20, -10, 20, 0, -50, -40, -40, 70, 30],
    'Gründer von „En Marche!", wirbt für ein „souveränes Europa" mit eigener Verteidigung und wirtschaftsliberalen Reformen.');
  P('le-pen', 'Marine Le Pen', 'FR', 'Fraktionschefin des Rassemblement National', '1968–', 'Politik', 'Marine_Le_Pen', [-20, 50, 70, 40, 85, 95, 40, -10, 40, -40, -70, -30],
    'Machte die Partei ihres Vaters salonfähig; verbindet Sozialprotektionismus mit nationaler Souveränität und Einwanderungsstopp.');
  P('bardella', 'Jordan Bardella', 'FR', 'Präsident des Rassemblement National', '1995–', 'Politik', 'Jordan_Bardella', [0, 55, 65, 45, 85, 95, 50, 0, 20, -30, -70, -30],
    'Junger Shootingstar des RN, Fraktionschef der Patrioten im Europaparlament.');
  P('melenchon', 'Jean-Luc Mélenchon', 'FR', 'Gründer von La France insoumise', '1951–', 'Politik', 'Jean-Luc_Mélenchon', [-85, 10, 60, -50, 0, -40, -60, -90, 70, -60, -80, -80],
    'Volkstribun der radikalen Linken; fordert eine „Sechste Republik", Bruch mit den EU-Verträgen und NATO-Austritt.');
  P('glucksmann', 'Raphaël Glucksmann', 'FR', 'Europaabgeordneter, Place Publique', '1979–', 'Politik', 'Raphaël_Glucksmann', [-35, -10, -85, -50, -40, -40, -60, -50, -90, 0, 40, 50],
    'Sozialdemokratischer Essayist, entschiedener Pro-Europäer und Unterstützer der Ukraine.');
  P('zemmour', 'Éric Zemmour', 'FR', 'Gründer von Reconquête', '1958–', 'Politik', 'Éric_Zemmour', [30, 60, 70, 85, 95, 100, 40, 40, 40, -50, -50, -60],
    'Publizist, der vor dem „Großen Austausch" warnt und eine nationalkonservative Union der Rechten anstrebt.');
  P('maréchal', 'Marion Maréchal', 'FR', 'Europaabgeordnete, Identité-Libertés', '1989–', 'Politik', 'Marion_Maréchal', [40, 60, 70, 90, 90, 100, 40, 80, 30, 0, -30, -40],
    'Enkelin Jean-Marie Le Pens, katholisch-konservativ und wirtschaftsliberaler als ihre Tante.');
  P('attal', 'Gabriel Attal', 'FR', 'Premierminister 2024, Renaissance', '1989–', 'Politik', 'Gabriel_Attal', [25, 20, -75, -40, -20, 10, 0, -50, -50, -40, 60, 40],
    'Jüngster Premierminister der Fünften Republik und Generalsekretär von Macrons Partei.');
  P('philippe', 'Édouard Philippe', 'FR', 'Bürgermeister von Le Havre, Horizons', '1970–', 'Politik', 'Édouard_Philippe', [40, 30, -60, -10, 0, 30, 10, -40, -60, -30, 60, 60],
    'Mitte-rechts-Politiker und ehemaliger Premier, Gründer der Partei Horizons.');
  P('roussel', 'Fabien Roussel', 'FR', 'Generalsekretär der PCF', '1969–', 'Politik', 'Fabien_Roussel', [-80, 20, 40, -20, 30, 10, 30, -80, 50, -40, -20, -30],
    'Kommunist mit Arbeiterprofil, der auch Atomkraft und „gutes französisches Essen" verteidigt.');

  /* Italien */
  P('meloni', 'Giorgia Meloni', 'IT', 'Ministerpräsidentin, Fratelli d’Italia', '1977–', 'Politik', 'Giorgia_Meloni', [20, 55, 30, 70, 75, 90, 40, 60, -60, -20, 0, 20],
    'Erste Regierungschefin Italiens; nationalkonservativ in Gesellschaftsfragen, aber atlantisch und pragmatisch in Brüssel.');
  P('salvini', 'Matteo Salvini', 'IT', 'Vizepremier, Lega', '1973–', 'Politik', 'Matteo_Salvini', [20, 50, 60, 60, 70, 95, 50, 40, 40, 50, -80, -20],
    'Formte die einst separatistische Lega Nord zu einer national-populistischen Partei um.');
  P('schlein', 'Elly Schlein', 'IT', 'Vorsitzende des Partito Democratico', '1985–', 'Politik', 'Elly_Schlein', [-50, -20, -60, -75, -50, -60, -70, -60, -40, 10, 10, 20],
    'Führte den PD auf einen klar progressiven Kurs: Mindestlohn, Klimaschutz und Bürgerrechte.');
  P('conte', 'Giuseppe Conte', 'IT', 'Präsident des Movimento 5 Stelle', '1964–', 'Politik', 'Giuseppe_Conte', [-30, 10, 0, -20, 0, 10, -30, -10, 40, 0, -50, 0],
    'Jurist und zweimaliger Premier, führte die Fünf Sterne nach links und zu Kritik an Waffenlieferungen.');
  P('draghi', 'Mario Draghi', 'IT', 'EZB-Präsident & Premier a. D.', '1947–', 'Politik', 'Mario_Draghi', [30, 20, -90, -20, -30, 0, 0, -30, -70, -30, 100, 60],
    'Der „Retter des Euro" („Whatever it takes") und Autor des Berichts zur Wettbewerbsfähigkeit Europas.');
  P('tajani', 'Antonio Tajani', 'IT', 'Außenminister, Forza Italia', '1953–', 'Politik', 'Antonio_Tajani', [30, 30, -70, 40, 20, 40, 20, 50, -70, 0, 50, 70],
    'Ehemaliger Präsident des Europaparlaments, führt Forza Italia als proeuropäische Kraft der Mitte-rechts-Koalition.');
  P('grillo', 'Beppe Grillo', 'IT', 'Komiker, Gründer der Fünf Sterne', '1948–', 'Aktivismus', 'Beppe_Grillo', [-20, -30, 30, -20, 0, 20, -50, -40, 40, 40, -100, -60],
    'Gründete mit dem „Vaffa-Day" eine Protestbewegung gegen die politische „Kaste".');

  /* Spanien & Portugal */
  P('sanchez', 'Pedro Sánchez', 'ES', 'Ministerpräsident, PSOE', '1972–', 'Politik', 'Pedro_Sánchez', [-35, 0, -75, -55, -30, -30, -50, -60, -50, 30, 40, 40],
    'Sozialist, regiert mit linken und regionalistischen Partnern; setzt auf Sozialreformen und Dialog mit Katalonien.');
  P('feijoo', 'Alberto Núñez Feijóo', 'ES', 'Vorsitzender des Partido Popular', '1961–', 'Politik', 'Alberto_Núñez_Feijóo', [35, 35, -40, 30, 30, 40, 20, 30, -60, -20, 40, 70],
    'Gemäßigter Konservativer aus Galicien, Oppositionsführer gegen Sánchez.');
  P('abascal', 'Santiago Abascal', 'ES', 'Vorsitzender von Vox', '1976–', 'Politik', 'Santiago_Abascal', [30, 70, 60, 85, 95, 95, 60, 70, -10, -90, -30, -30],
    'Führt die nationalkonservative Vox; strikt gegen katalanischen Separatismus und Einwanderung.');
  P('ayuso', 'Isabel Díaz Ayuso', 'ES', 'Präsidentin der Region Madrid, PP', '1978–', 'Politik', 'Isabel_Díaz_Ayuso', [70, 30, -20, 30, 30, 30, 40, 30, -60, 30, -20, 30],
    'Populäre Liberalkonservative mit dem Slogan „Libertad", bekannt für Steuersenkungen und Konfrontation mit Madrid-Zentrale.');
  P('yolanda-diaz', 'Yolanda Díaz', 'ES', 'Arbeitsministerin, Sumar', '1971–', 'Politik', 'Yolanda_Díaz', [-70, -20, -50, -70, -40, -60, -70, -80, 10, 30, -20, 10],
    'Linke Arbeitsrechtlerin, setzte Arbeitsmarktreform und Mindestlohnerhöhungen durch.');
  P('iglesias', 'Pablo Iglesias', 'ES', 'Mitgründer von Podemos', '1978–', 'Politik', 'Pablo_Iglesias_Turrión', [-75, 0, 0, -70, -20, -50, -50, -80, 50, 50, -70, -60],
    'Politikwissenschaftler und linkspopulistischer Anführer der Empörten-Bewegung.');
  P('puigdemont', 'Carles Puigdemont', 'ES', 'Präsident von Junts per Catalunya', '1962–', 'Politik', 'Carles_Puigdemont', [20, 0, -40, -20, 40, 0, -30, -20, -40, 100, -40, -40],
    'Ehemaliger katalanischer Regionalpräsident, organisierte 2017 das Unabhängigkeitsreferendum und floh ins Exil.');
  P('junqueras', 'Oriol Junqueras', 'ES', 'Vorsitzender der ERC', '1969–', 'Politik', 'Oriol_Junqueras', [-35, -10, -50, -40, 30, -30, -40, 40, -30, 100, -20, -20],
    'Katholischer Linksrepublikaner und Historiker, saß für das Referendum 2017 im Gefängnis.');
  P('montenegro', 'Luís Montenegro', 'PT', 'Premierminister, PSD', '1973–', 'Politik', 'Luís_Montenegro', [40, 30, -50, 30, 20, 30, 20, 30, -60, -10, 50, 70],
    'Führt die bürgerliche Demokratische Allianz und eine Mitte-rechts-Regierung in Lissabon.');
  P('ventura', 'André Ventura', 'PT', 'Vorsitzender von Chega', '1983–', 'Politik', 'André_Ventura', [30, 70, 40, 70, 85, 95, 50, 60, -20, -30, -90, -40],
    'Ehemaliger Fußballkommentator, machte Chega zur zweitstärksten Kraft Portugals.');
  P('costa', 'António Costa', 'PT', 'Präsident des Europäischen Rates', '1961–', 'Politik', 'António_Costa', [-25, 5, -80, -40, -30, -40, -30, -40, -60, -10, 50, 70],
    'Langjähriger sozialistischer Premier Portugals, seit 2024 Präsident des Europäischen Rates.');

  /* Vereinigtes Königreich & Irland */
  P('starmer', 'Keir Starmer', 'GB', 'Premierminister, Labour', '1962–', 'Politik', 'Keir_Starmer', [-15, 20, -30, -25, 0, 30, -20, -30, -80, -20, 60, 80],
    'Ehemaliger Generalstaatsanwalt, führte Labour 2024 mit einem Mitte-Kurs zurück an die Macht.');
  P('badenoch', 'Kemi Badenoch', 'GB', 'Vorsitzende der Conservative Party', '1980–', 'Politik', 'Kemi_Badenoch', [60, 40, 70, 40, 60, 60, 50, 0, -70, -20, 30, 30],
    'Konservative „Kulturkämpferin" und Brexit-Befürworterin, führt die Tories in der Opposition.');
  P('farage', 'Nigel Farage', 'GB', 'Vorsitzender von Reform UK', '1964–', 'Politik', 'Nigel_Farage', [55, 45, 100, 40, 80, 90, 60, 20, 10, -10, -80, -30],
    'Treibende Kraft des Brexit, heute Anführer der rechtspopulistischen Reform UK.');
  P('corbyn', 'Jeremy Corbyn', 'GB', 'Labour-Vorsitzender 2015–2020', '1949–', 'Politik', 'Jeremy_Corbyn', [-80, -20, 40, -60, -40, -60, -50, -50, 80, 0, -30, -40],
    'Sozialist und Friedensaktivist, verschob Labour nach links; heute unabhängiger Abgeordneter.');
  P('johnson', 'Boris Johnson', 'GB', 'Premierminister 2019–2022', '1964–', 'Politik', 'Boris_Johnson', [30, 30, 80, 10, 60, 30, 20, 10, -80, -30, -40, 0],
    'Exzentrischer Konservativer, setzte mit „Get Brexit Done" den EU-Austritt durch.');
  P('sunak', 'Rishi Sunak', 'GB', 'Premierminister 2022–2024', '1980–', 'Politik', 'Rishi_Sunak', [50, 40, 70, 30, 50, 60, 40, 40, -80, -20, 40, 50],
    'Ehemaliger Investmentbanker und Schatzkanzler, erster britischer Premier hinduistischen Glaubens.');
  P('davey', 'Ed Davey', 'GB', 'Vorsitzender der Liberal Democrats', '1965–', 'Politik', 'Ed_Davey', [10, -20, -80, -50, -40, -40, -50, -20, -80, 20, 30, 60],
    'Liberaldemokrat, der für eine Wiederannäherung an die EU und Umweltschutz eintritt.');
  P('sturgeon', 'Nicola Sturgeon', 'GB', 'Erste Ministerin Schottlands 2014–2023', '1970–', 'Politik', 'Nicola_Sturgeon', [-35, 0, -80, -60, 30, -50, -50, -50, -60, 100, 20, 30],
    'Führte die SNP über Jahre und kämpfte für ein zweites Unabhängigkeitsreferendum.');
  P('polanski', 'Zack Polanski', 'GB', 'Vorsitzender der Green Party', '1982–', 'Politik', 'Zack_Polanski', [-70, -30, -60, -80, -60, -70, -90, -70, -10, 20, -40, -30],
    'Ökopopulist, der die englischen Grünen mit Vermögensteuer-Forderungen nach links rückte.');
  P('martin', 'Micheál Martin', 'IE', 'Taoiseach, Fianna Fáil', '1960–', 'Politik', 'Micheál_Martin', [5, 15, -60, 10, 10, 10, 0, 20, -30, -10, 50, 70],
    'Zentristischer Regierungschef Irlands, Verfechter der irischen Neutralität und europäischen Integration.');
  P('mcdonald', 'Mary Lou McDonald', 'IE', 'Präsidentin von Sinn Féin', '1969–', 'Politik', 'Mary_Lou_McDonald', [-60, 0, -30, -60, 50, -40, -40, -30, 40, 40, -40, -20],
    'Führt die linksnationalistische Sinn Féin, die eine Wiedervereinigung Irlands anstrebt.');

  /* Benelux */
  P('de-wever', 'Bart De Wever', 'BE', 'Premierminister, N-VA', '1970–', 'Politik', 'Bart_De_Wever', [45, 40, 10, 30, 60, 70, 30, 10, -60, 100, 30, 40],
    'Flämischer Nationalist und langjähriger Bürgermeister von Antwerpen, seit 2025 belgischer Premier.');
  P('van-grieken', 'Tom Van Grieken', 'BE', 'Vorsitzender des Vlaams Belang', '1986–', 'Politik', 'Tom_Van_Grieken', [10, 60, 70, 60, 90, 100, 40, 20, 20, 100, -80, -40],
    'Führt die rechtsextreme Unabhängigkeitspartei Flanderns zu Rekordergebnissen.');
  P('hedebouw', 'Raoul Hedebouw', 'BE', 'Vorsitzender der PTB-PVDA', '1977–', 'Politik', 'Raoul_Hedebouw', [-85, 10, 40, -40, -30, -40, -30, -80, 60, -20, -40, -60],
    'Marxistischer Volkstribun, einer der wenigen Politiker, die in Flandern und Wallonien gleichermaßen antreten.');
  P('verhofstadt', 'Guy Verhofstadt', 'BE', 'Premier 1999–2008, Föderalist', '1953–', 'Politik', 'Guy_Verhofstadt', [40, -20, -100, -50, -60, -30, 0, -60, -70, 10, 50, 30],
    'Liberaler Vorkämpfer für die „Vereinigten Staaten von Europa".');
  P('wilders', 'Geert Wilders', 'NL', 'Gründer der PVV', '1963–', 'Politik', 'Geert_Wilders', [20, 60, 90, 0, 80, 100, 60, -20, -30, -10, -80, -40],
    'Islamkritischer Rechtspopulist, gewann 2023 die niederländische Parlamentswahl.');
  P('rutte', 'Mark Rutte', 'NL', 'NATO-Generalsekretär', '1967–', 'Politik', 'Mark_Rutte', [50, 30, -30, -20, 0, 30, 30, -30, -90, 0, 50, 80],
    'Am längsten amtierender Premier der Niederlande (VVD), seit 2024 an der Spitze der NATO.');
  P('jetten', 'Rob Jetten', 'NL', 'Vorsitzender von D66', '1987–', 'Politik', 'Rob_Jetten', [30, -30, -90, -70, -50, -30, -60, -70, -70, 10, 40, 50],
    'Linksliberaler Pro-Europäer, führte D66 bei der Wahl 2025 zum Sieg.');
  P('timmermans', 'Frans Timmermans', 'NL', 'Architekt des Green Deal', '1961–', 'Politik', 'Frans_Timmermans', [-40, -10, -85, -60, -50, -50, -80, -40, -70, 0, 40, 50],
    'Sozialdemokrat und ehemaliger EU-Kommissionsvize, führte später das rot-grüne Bündnis GL-PvdA.');
  P('baudet', 'Thierry Baudet', 'NL', 'Gründer des Forum voor Democratie', '1983–', 'Politik', 'Thierry_Baudet', [40, 50, 100, 70, 80, 95, 60, 10, 80, 0, -60, -60],
    'Rechtsnationaler Intellektueller, EU-Gegner und Kritiker der Russland-Sanktionen.');
  P('omtzigt', 'Pieter Omtzigt', 'NL', 'Gründer von NSC', '1974–', 'Politik', 'Pieter_Omtzigt', [10, 20, 0, 30, 30, 50, 0, 60, -50, 20, -30, 40],
    'Christdemokratischer Aufklärer der Kinderbetreuungsgeld-Affäre, gründete den „Neuen Gesellschaftsvertrag".');
  P('juncker', 'Jean-Claude Juncker', 'LU', 'Präsident der EU-Kommission 2014–2019', '1954–', 'Politik', 'Jean-Claude_Juncker', [10, 10, -90, -10, -40, -20, 0, 30, -60, 0, 70, 70],
    'Christsozialer Luxemburger und Urgestein der europäischen Integration.');

  /* Nordeuropa */
  P('frederiksen', 'Mette Frederiksen', 'DK', 'Staatsministerin, Socialdemokratiet', '1977–', 'Politik', 'Mette_Frederiksen', [-25, 40, -20, 0, 30, 80, -30, -20, -90, -20, 50, 70],
    'Verbindet klassische Sozialdemokratie mit einer der strengsten Migrationspolitiken Europas.');
  P('akesson', 'Jimmie Åkesson', 'SE', 'Vorsitzender der Sverigedemokraterna', '1979–', 'Politik', 'Jimmie_Åkesson', [-10, 50, 60, 50, 85, 95, 50, 20, -40, -30, -60, -20],
    'Machte die Schwedendemokraten von einer Randpartei zur Stütze der Regierung.');
  P('kristersson', 'Ulf Kristersson', 'SE', 'Ministerpräsident, Moderaterna', '1963–', 'Politik', 'Ulf_Kristersson', [50, 35, -30, 10, 10, 50, 20, 0, -90, 0, 50, 70],
    'Führte Schweden in die NATO und setzt auf Härte bei Kriminalität und Migration.');
  P('andersson', 'Magdalena Andersson', 'SE', 'Vorsitzende der Socialdemokraterna', '1967–', 'Politik', 'Magdalena_Andersson', [-30, 10, -40, -40, -20, 10, -30, -50, -80, -20, 50, 70],
    'Erste Ministerpräsidentin Schwedens, beantragte 2022 den NATO-Beitritt.');
  P('store', 'Jonas Gahr Støre', 'NO', 'Ministerpräsident, Arbeiderpartiet', '1960–', 'Politik', 'Jonas_Gahr_Støre', [-25, 10, -40, -40, -20, 0, -20, -40, -80, -10, 50, 80],
    'Pragmatischer Sozialdemokrat, verwaltet den größten Staatsfonds der Welt.');
  P('listhaug', 'Sylvi Listhaug', 'NO', 'Vorsitzende der Fremskrittspartiet', '1977–', 'Politik', 'Sylvi_Listhaug', [60, 40, 60, 40, 60, 85, 70, 40, -60, 0, -50, 10],
    'Rechtspopulistin mit wirtschaftsliberalem Profil und strengen Positionen zur Migration.');
  P('marin', 'Sanna Marin', 'FI', 'Ministerpräsidentin 2019–2023', '1985–', 'Politik', 'Sanna_Marin', [-40, -10, -50, -70, -40, -40, -60, -60, -90, 0, 30, 50],
    'Jüngste Regierungschefin der Welt bei Amtsantritt, führte Finnland in die NATO.');
  P('stubb', 'Alexander Stubb', 'FI', 'Präsident der Republik Finnland', '1968–', 'Politik', 'Alexander_Stubb', [50, 10, -80, -30, -30, 0, 0, -20, -100, 0, 60, 60],
    'Liberalkonservativer Europäer und Atlantiker, Gesprächspartner Washingtons in Ukraine-Fragen.');
  P('purra', 'Riikka Purra', 'FI', 'Vorsitzende der Perussuomalaiset', '1977–', 'Politik', 'Riikka_Purra', [40, 50, 80, 40, 80, 95, 60, 10, -80, 0, -40, 0],
    'Finanzministerin und Chefin der Finnen-Partei, verbindet Migrationskritik mit klarem NATO-Kurs.');
  P('kallas', 'Kaja Kallas', 'EE', 'EU-Außenbeauftragte', '1977–', 'Politik', 'Kaja_Kallas', [55, 10, -60, -40, -20, 20, 0, -30, -100, 0, 50, 50],
    'Estnische Liberale, entschiedene Stimme gegen Russlands Expansionspolitik.');

  /* Mittel- und Osteuropa */
  P('orban', 'Viktor Orbán', 'HU', 'Langjähriger Ministerpräsident, Fidesz', '1963–', 'Politik', 'Viktor_Orbán', [10, 75, 65, 80, 85, 95, 40, 60, 70, -60, -20, 10],
    'Vom liberalen Dissidenten zum Architekten der „illiberalen Demokratie" und Gegenspieler Brüssels.');
  P('magyar', 'Péter Magyar', 'HU', 'Vorsitzender der Tisza-Partei', '1981–', 'Politik', 'Péter_Magyar', [10, 20, -30, 30, 40, 60, 0, 20, -40, 0, -50, 0],
    'Ehemaliger Fidesz-Insider, der mit der Tisza-Partei zur stärksten Oppositionskraft gegen Orbán wurde.');
  P('tusk', 'Donald Tusk', 'PL', 'Ministerpräsident, Bürgerkoalition', '1957–', 'Politik', 'Donald_Tusk', [30, 20, -80, -20, -10, 50, 0, 0, -100, -10, 50, 60],
    'Ehemaliger Präsident des Europäischen Rates, steht für Rechtsstaatlichkeit und harte Linie gegenüber Moskau.');
  P('kaczynski', 'Jarosław Kaczyński', 'PL', 'Vorsitzender der PiS', '1949–', 'Politik', 'Jarosław_Kaczyński', [-30, 70, 60, 85, 85, 90, 60, 90, -90, -70, -40, 0],
    'Strippenzieher der polnischen Rechten: katholisch-national, sozialstaatlich und streng antirussisch.');
  P('nawrocki', 'Karol Nawrocki', 'PL', 'Präsident der Republik Polen', '1983–', 'Politik', 'Karol_Nawrocki', [-10, 60, 60, 85, 85, 90, 60, 90, -80, -50, -50, 0],
    'Historiker, von der PiS unterstützt, seit 2025 polnisches Staatsoberhaupt.');
  P('mentzen', 'Sławomir Mentzen', 'PL', 'Co-Vorsitzender der Konfederacja', '1986–', 'Politik', 'Sławomir_Mentzen', [85, 10, 80, 70, 70, 80, 70, 70, -20, 20, -60, -40],
    'Steuerberater und Libertär-Konservativer, besonders populär bei jungen Polen.');
  P('fico', 'Robert Fico', 'SK', 'Ministerpräsident der Slowakei, Smer', '1964–', 'Politik', 'Robert_Fico', [-30, 60, 40, 60, 60, 85, 40, 30, 80, -40, -40, 0],
    'Linkspopulist mit nationalkonservativem Kurs und Nähe zu Moskau; überlebte 2024 ein Attentat.');
  P('babis', 'Andrej Babiš', 'CZ', 'Ministerpräsident, ANO', '1954–', 'Politik', 'Andrej_Babiš', [10, 45, 50, 30, 50, 90, 40, 0, 10, -50, -60, 0],
    'Milliardär und Agrarunternehmer, führt die populistische ANO und gewann die Wahl 2025.');
  P('fiala', 'Petr Fiala', 'CZ', 'Ministerpräsident 2021–2025, ODS', '1964–', 'Politik', 'Petr_Fiala', [40, 20, -30, 30, 20, 50, 20, 30, -90, 0, 50, 70],
    'Politikwissenschaftler und Liberalkonservativer, entschiedener Unterstützer der Ukraine.');
  P('dan', 'Nicușor Dan', 'RO', 'Präsident Rumäniens', '1969–', 'Politik', 'Nicușor_Dan', [30, 10, -60, 0, 0, 20, -20, 20, -80, 0, 30, 50],
    'Mathematiker und ehemaliger Bürgermeister von Bukarest, gewann 2025 als proeuropäischer Unabhängiger.');
  P('simion', 'George Simion', 'RO', 'Vorsitzender der AUR', '1986–', 'Politik', 'George_Simion', [10, 65, 60, 85, 95, 70, 60, 90, 10, -50, -80, -30],
    'Nationalist und Anhänger einer Vereinigung mit Moldau, verlor 2025 die Präsidentschaftsstichwahl.');
  P('georgescu', 'Călin Georgescu', 'RO', 'Ehemaliger Präsidentschaftskandidat', '1962–', 'Politik', 'Călin_Georgescu', [-20, 70, 80, 90, 95, 80, 0, 95, 90, -30, -70, -80],
    'Mystisch-nationalistischer Außenseiter, dessen Wahlsieg 2024 wegen Einflussnahme annulliert wurde.');
  P('vucic', 'Aleksandar Vučić', 'RS', 'Präsident Serbiens', '1970–', 'Politik', 'Aleksandar_Vučić', [0, 70, 0, 50, 80, 60, 60, 50, 60, -60, -30, 10],
    'Dominanter Machtpolitiker, laviert zwischen EU-Beitritt und Nähe zu Russland und China.');
  P('rama', 'Edi Rama', 'AL', 'Ministerpräsident Albaniens', '1964–', 'Politik', 'Edi_Rama', [10, 40, -70, -20, 20, 10, 10, -50, -80, -20, 30, 30],
    'Künstler und Sozialist, der Albanien eng an EU und NATO führt.');
  P('plenkovic', 'Andrej Plenković', 'HR', 'Ministerpräsident Kroatiens, HDZ', '1970–', 'Politik', 'Andrej_Plenković', [25, 30, -60, 40, 30, 40, 10, 50, -80, -10, 50, 70],
    'Proeuropäischer Christdemokrat, führte Kroatien in Euro und Schengen.');
  P('jansa', 'Janez Janša', 'SI', 'Vorsitzender der SDS', '1958–', 'Politik', 'Janez_Janša', [30, 60, 30, 70, 80, 90, 50, 60, -80, -40, -50, -20],
    'Mehrfacher Premier Sloweniens, Verbündeter Orbáns mit scharfer Medienkritik.');
  P('mitsotakis', 'Kyriakos Mitsotakis', 'GR', 'Ministerpräsident, Nea Dimokratia', '1968–', 'Politik', 'Kyriakos_Mitsotakis', [45, 35, -50, 20, 30, 60, 20, 40, -80, -30, 60, 60],
    'Reformorientierter Liberalkonservativer, führte Griechenland aus der Schuldenkrise.');
  P('tsipras', 'Alexis Tsipras', 'GR', 'Ministerpräsident 2015–2019', '1974–', 'Politik', 'Alexis_Tsipras', [-60, 0, 0, -50, -10, -40, -30, -50, 20, -10, -40, -30],
    'Führte Syriza gegen die Sparpolitik der Troika – und unterschrieb am Ende doch das dritte Rettungspaket.');
  P('varoufakis', 'Yanis Varoufakis', 'GR', 'Ökonom, Gründer von DiEM25', '1961–', 'Politik', 'Yanis_Varoufakis', [-60, -30, -60, -60, -50, -60, -50, -70, 40, 10, -40, -40],
    'Ehemaliger Finanzminister und „libertärer Marxist", wirbt für eine radikale Demokratisierung der EU.');
  P('zelensky', 'Wolodymyr Selenskyj', 'UA', 'Präsident der Ukraine', '1978–', 'Politik', 'Volodymyr_Zelenskyy', [30, 50, -80, -10, 60, 30, 20, 10, -100, -20, -20, 30],
    'Ehemaliger Schauspieler, der als Kriegspräsident zum Symbol des ukrainischen Widerstands wurde.');
  P('sandu', 'Maia Sandu', 'MD', 'Präsidentin der Republik Moldau', '1972–', 'Politik', 'Maia_Sandu', [10, 10, -80, -10, 0, 20, -10, 20, -100, 0, 40, 60],
    'Ökonomin und Anti-Korruptions-Reformerin, die Moldau auf EU-Kurs führt.');
  P('erdogan', 'Recep Tayyip Erdoğan', 'TR', 'Präsident der Türkei', '1954–', 'Politik', 'Recep_Tayyip_Erdoğan', [10, 85, 30, 80, 85, 40, 60, 85, 60, -70, -50, -20],
    'Islamisch-konservativer Machtpolitiker, der die Türkei in ein Präsidialsystem umbaute.');
  P('putin', 'Wladimir Putin', 'RU', 'Präsident Russlands', '1952–', 'Politik', 'Vladimir_Putin', [10, 95, 100, 80, 90, 60, 80, 60, 100, -90, 60, 10],
    'Ehemaliger KGB-Offizier, regiert Russland autoritär und führt seit 2022 einen Angriffskrieg gegen die Ukraine.');
  P('lukaschenko', 'Aljaksandr Lukaschenka', 'BY', 'Machthaber in Belarus', '1954–', 'Politik', 'Alexander_Lukashenko', [-50, 95, 90, 60, 60, 70, 60, 30, 100, -90, 30, 20],
    'Regiert Belarus seit 1994 mit harter Hand, oft „letzter Diktator Europas" genannt.');
  P('nawalny', 'Alexei Nawalny', 'RU', 'Oppositionsführer', '1976–2024', 'Aktivismus', 'Alexei_Navalny', [20, -30, -20, 0, 40, 60, 0, 0, -60, 20, -50, -30],
    'Antikorruptionsaktivist und wichtigster Gegenspieler Putins; starb 2024 in einem Straflager.');
  P('thunberg', 'Greta Thunberg', 'SE', 'Klimaaktivistin', '2003–', 'Aktivismus', 'Greta_Thunberg', [-70, -40, -30, -70, -80, -80, -100, -80, 30, 20, -60, -80],
    'Startete mit ihrem „Schulstreik fürs Klima" die globale Bewegung Fridays for Future.');
  P('papst-franziskus', 'Papst Franziskus', 'VA', 'Papst 2013–2025', '1936–2025', 'Religion', 'Pope_Francis', [-40, 0, -20, 30, -50, -60, -70, 100, 30, 0, 30, 60],
    'Erster Papst aus Lateinamerika; setzte Schwerpunkte bei Armut, Migration und Bewahrung der Schöpfung.');
  /* ---------- Ergänzungen: Baltikum ---------- */
  P('michal', 'Kristen Michal', 'EE', 'Premierminister, Reformierakond', '1975–', 'Politik', 'Kristen_Michal', [55, 15, -60, -30, 10, 30, 10, -40, -100, 0, 50, 60],
    'Wirtschaftsliberaler Nachfolger von Kaja Kallas an der Spitze der estnischen Regierung.');
  P('karis', 'Alar Karis', 'EE', 'Präsident Estlands', '1958–', 'Politik', 'Alar_Karis', [10, 0, -60, -20, 20, 0, -20, -30, -90, 0, 60, 80],
    'Molekularbiologe und überparteiliches Staatsoberhaupt.');
  P('helme', 'Martin Helme', 'EE', 'Vorsitzender der EKRE', '1976–', 'Politik', 'Martin_Helme', [20, 65, 85, 75, 95, 100, 50, 30, -50, -10, -70, -40],
    'Nationalkonservativer Hardliner, ehemaliger Finanzminister Estlands.');
  P('silina', 'Evika Siliņa', 'LV', 'Ministerpräsidentin, Jaunā Vienotība', '1975–', 'Politik', 'Evika_Siliņa', [25, 20, -60, 0, 30, 40, 0, 10, -100, 0, 50, 60],
    'Juristin und Christdemokratin, führt eine Mitte-Regierung in Riga.');
  P('rinkevics', 'Edgars Rinkēvičs', 'LV', 'Präsident Lettlands', '1973–', 'Politik', 'Edgars_Rinkēvičs', [30, 30, -60, -30, 40, 40, 0, 0, -100, 0, 60, 60],
    'Langjähriger Außenminister, erstes offen homosexuelles Staatsoberhaupt eines EU-Landes.');
  P('karins', 'Krišjānis Kariņš', 'LV', 'Ministerpräsident 2019–2023', '1964–', 'Politik', 'Krišjānis_Kariņš', [40, 20, -60, 0, 30, 40, 10, 20, -100, 0, 50, 60],
    'In den USA aufgewachsener Liberalkonservativer, führte Lettland durch Pandemie und Kriegsbeginn.');
  P('nauseda', 'Gitanas Nausėda', 'LT', 'Präsident Litauens', '1964–', 'Politik', 'Gitanas_Nausėda', [10, 30, -40, 40, 50, 40, -10, 40, -100, 0, 30, 60],
    'Ökonom und parteiloser Präsident mit sozialkonservativem Profil und harter Linie gegenüber Russland.');
  P('ruginiene', 'Inga Ruginienė', 'LT', 'Premierministerin, LSDP', '1981–', 'Politik', 'Inga_Ruginienė', [-35, 10, -40, -10, 20, 20, -10, 0, -90, 0, 30, 60],
    'Gewerkschafterin, seit 2025 sozialdemokratische Regierungschefin Litauens.');
  P('simonyte', 'Ingrida Šimonytė', 'LT', 'Premierministerin 2020–2024', '1974–', 'Politik', 'Ingrida_Šimonytė', [50, 10, -60, -30, 30, 30, 0, 10, -100, 0, 50, 60],
    'Liberale Ökonomin der Vaterlandsunion, Vorreiterin der Unterstützung für die Ukraine und Taiwan.');
  P('zemaitaitis', 'Remigijus Žemaitaitis', 'LT', 'Vorsitzender von Nemuno aušra', '1982–', 'Politik', 'Remigijus_Žemaitaitis', [-10, 50, 50, 60, 75, 70, 30, 40, -10, -20, -80, -30],
    'Umstrittener Rechtspopulist, gegen den wegen antisemitischer Äußerungen ermittelt wurde.');

  /* ---------- Ergänzungen: Skandinavien & Island ---------- */
  P('lokke', 'Lars Løkke Rasmussen', 'DK', 'Außenminister, Moderaterne', '1964–', 'Politik', 'Lars_Løkke_Rasmussen', [30, 20, -50, -20, 0, 50, 0, -20, -90, 0, 60, 70],
    'Zweimaliger Staatsminister, gründete die Moderaten als Kraft der Mitte.');
  P('vestager', 'Margrethe Vestager', 'DK', 'EU-Kommissarin 2014–2024', '1968–', 'Politik', 'Margrethe_Vestager', [30, 0, -80, -50, -30, -20, -30, -50, -80, 0, 60, 60],
    'Sozialliberale Wettbewerbshüterin, die sich mit Apple, Google und Co. anlegte.');
  P('kjaersgaard', 'Pia Kjærsgaard', 'DK', 'Gründerin der Dansk Folkeparti', '1947–', 'Politik', 'Pia_Kjærsgaard', [-10, 50, 80, 50, 85, 100, 40, 30, -50, -10, -50, 0],
    'Prägte mit der Dänischen Volkspartei die strenge Migrationspolitik Dänemarks.');
  P('busch', 'Ebba Busch', 'SE', 'Vizepremierministerin, Kristdemokraterna', '1987–', 'Politik', 'Ebba_Busch', [35, 40, 0, 60, 30, 60, 20, 80, -80, 0, 40, 60],
    'Christdemokratische Energieministerin, setzt auf Kernkraft und Recht und Ordnung.');
  P('dadgostar', 'Nooshi Dadgostar', 'SE', 'Vorsitzende der Vänsterpartiet', '1985–', 'Politik', 'Nooshi_Dadgostar', [-80, -20, 40, -70, -40, -60, -70, -80, 40, 0, -30, -30],
    'Linke Politikerin mit Fokus auf Mieten und Sozialstaat.');
  P('bildt', 'Carl Bildt', 'SE', 'Ministerpräsident 1991–1994', '1949–', 'Politik', 'Carl_Bildt', [50, 20, -60, -10, -10, 0, 10, 0, -100, 0, 60, 60],
    'Liberalkonservativer Diplomat und einflussreicher Kommentator europäischer Außenpolitik.');
  P('solberg', 'Erna Solberg', 'NO', 'Ministerpräsidentin 2013–2021, Høyre', '1961–', 'Politik', 'Erna_Solberg', [45, 30, -60, -10, 0, 30, 20, -10, -90, 0, 50, 70],
    'Die „Eiserne Erna" führte Norwegen acht Jahre lang an der Spitze einer bürgerlichen Koalition.');
  P('vedum', 'Trygve Slagsvold Vedum', 'NO', 'Vorsitzender der Senterpartiet', '1978–', 'Politik', 'Trygve_Slagsvold_Vedum', [-10, 20, 80, 30, 50, 50, 0, 20, -60, 80, -20, 40],
    'Bauernsohn und Verteidiger des ländlichen Norwegens, entschiedener Gegner eines EU-Beitritts.');
  P('orpo', 'Petteri Orpo', 'FI', 'Ministerpräsident, Kokoomus', '1969–', 'Politik', 'Petteri_Orpo', [45, 30, -40, 10, 10, 40, 20, 10, -90, 0, 50, 70],
    'Liberalkonservativer Regierungschef einer Koalition mit den Finnen.');
  P('lindtman', 'Antti Lindtman', 'FI', 'Vorsitzender der SDP', '1982–', 'Politik', 'Antti_Lindtman', [-35, 10, -50, -40, -10, 0, -30, -40, -90, 0, 40, 70],
    'Pragmatischer Sozialdemokrat und Oppositionsführer in Helsinki.');
  P('li-andersson', 'Li Andersson', 'FI', 'Europaabgeordnete, Vasemmistoliitto', '1987–', 'Politik', 'Li_Andersson', [-75, -20, -10, -70, -40, -60, -80, -70, -60, 10, -20, 0],
    'Ehemalige Bildungsministerin und Vorsitzende des Beschäftigungsausschusses im EU-Parlament.');
  P('niinisto', 'Sauli Niinistö', 'FI', 'Präsident Finnlands 2012–2024', '1948–', 'Politik', 'Sauli_Niinistö', [30, 30, -30, 10, 30, 40, 0, 0, -80, 0, 50, 70],
    'Führte Finnland 2023 in die NATO und verfasste einen Bericht zur Krisenvorsorge der EU.');
  P('frostadottir', 'Kristrún Frostadóttir', 'IS', 'Premierministerin, Samfylkingin', '1988–', 'Politik', 'Kristrún_Frostadóttir', [-30, 0, -30, -40, -20, 0, -30, -50, -60, 0, 40, 60],
    'Ökonomin, die die isländischen Sozialdemokraten 2024 zum Wahlsieg führte.');
  P('jakobsdottir', 'Katrín Jakobsdóttir', 'IS', 'Premierministerin 2017–2024', '1976–', 'Politik', 'Katrín_Jakobsdóttir', [-50, -20, 30, -60, -20, -40, -70, -60, 30, 10, 10, 60],
    'Links-grüne Regierungschefin, die eine breite Koalition über die Lager hinweg führte.');

  /* ---------- Ergänzungen: Balkan & Südosteuropa ---------- */
  P('milanovic', 'Zoran Milanović', 'HR', 'Präsident Kroatiens', '1966–', 'Politik', 'Zoran_Milanović', [-20, 20, 20, 20, 50, 40, 0, -20, 50, -20, -20, 20],
    'Ehemaliger sozialdemokratischer Premier mit zunehmend populistischem, NATO-kritischem Kurs.');
  P('golob', 'Robert Golob', 'SI', 'Ministerpräsident, Gibanje Svoboda', '1967–', 'Politik', 'Robert_Golob', [-30, 0, -60, -50, -30, -20, -50, -50, -40, 0, 20, 40],
    'Energiemanager, der mit der Freiheitsbewegung 2022 Janez Janša ablöste.');
  P('pirc-musar', 'Nataša Pirc Musar', 'SI', 'Präsidentin Sloweniens', '1968–', 'Politik', 'Nataša_Pirc_Musar', [0, -20, -60, -40, -20, -20, -30, -40, -30, 0, 40, 60],
    'Juristin und Datenschützerin, erste Präsidentin Sloweniens.');
  P('brnabic', 'Ana Brnabić', 'RS', 'Parlamentspräsidentin, SNS', '1975–', 'Politik', 'Ana_Brnabić', [10, 60, -10, 20, 70, 50, 50, 0, 50, -60, -20, 20],
    'Langjährige Premierministerin und engste Vertraute Vučićs.');
  P('seselj', 'Vojislav Šešelj', 'RS', 'Vorsitzender der Radikalen Partei', '1954–', 'Politik', 'Vojislav_Šešelj', [0, 80, 90, 70, 100, 80, 40, 70, 100, -60, -40, -40],
    'Ultranationalist, vom UN-Tribunal wegen Kriegsverbrechen verurteilt.');
  P('dodik', 'Milorad Dodik', 'BA', 'Langjähriger Präsident der Republika Srpska', '1959–', 'Politik', 'Milorad_Dodik', [-10, 70, 40, 50, 90, 50, 30, 70, 80, 100, -20, -10],
    'Serbischer Nationalist, der die Abspaltung der Republika Srpska androht und Moskau nahesteht.');
  P('dukanovic', 'Milo Đukanović', 'ME', 'Präsident & Premier Montenegros (mehrfach)', '1962–', 'Politik', 'Milo_Đukanović', [10, 50, -60, -10, 40, 20, 20, -20, -90, -50, 20, 30],
    'Dominierte drei Jahrzehnte lang die Politik Montenegros und führte das Land in die Unabhängigkeit und die NATO.');
  P('milatovic', 'Jakov Milatović', 'ME', 'Präsident Montenegros', '1986–', 'Politik', 'Jakov_Milatović', [30, 10, -70, 0, 10, 20, 0, 20, -50, -20, -10, 30],
    'Ökonom und Mitgründer von „Europa jetzt!", besiegte 2023 Đukanović.');
  P('mickoski', 'Hristijan Mickoski', 'MK', 'Ministerpräsident, VMRO-DPMNE', '1977–', 'Politik', 'Hristijan_Mickoski', [20, 50, -10, 60, 80, 50, 40, 70, -40, -60, -20, 20],
    'Nationalkonservativer Regierungschef, der den Namensstreit mit Griechenland wieder aufleben ließ.');
  P('zaev', 'Zoran Zaev', 'MK', 'Ministerpräsident 2017–2022', '1974–', 'Politik', 'Zoran_Zaev', [-20, 10, -80, -30, -10, 0, -20, -20, -90, -20, 30, 50],
    'Sozialdemokrat, der mit dem Prespa-Abkommen den Weg in die NATO frei machte.');
  P('berisha', 'Sali Berisha', 'AL', 'Vorsitzender der Demokratischen Partei', '1944–', 'Politik', 'Sali_Berisha', [40, 50, -60, 30, 50, 20, 30, 10, -90, -40, -40, 10],
    'Herzchirurg, erster nichtkommunistischer Präsident Albaniens und langjähriger Gegenspieler Ramas.');
  P('kurti', 'Albin Kurti', 'XK', 'Ministerpräsident, Vetëvendosje', '1975–', 'Politik', 'Albin_Kurti', [-40, 30, -60, -10, 80, 10, 0, -20, -80, -50, -40, -30],
    'Ehemaliger Studentenaktivist, linksnationalistischer Regierungschef des Kosovo.');
  P('osmani', 'Vjosa Osmani', 'XK', 'Präsidentin des Kosovo', '1982–', 'Politik', 'Vjosa_Osmani', [10, 20, -80, 0, 60, 10, 0, 0, -100, -30, 10, 40],
    'Juristin und entschieden proamerikanische Präsidentin.');
  P('borisov', 'Bojko Borissow', 'BG', 'Vorsitzender der GERB', '1959–', 'Politik', 'Boyko_Borisov', [20, 50, -40, 30, 30, 60, 30, 20, -60, -40, 10, 40],
    'Ehemaliger Feuerwehrmann und Leibwächter, dreimaliger Ministerpräsident Bulgariens.');
  P('kostadinov', 'Kostadin Kostadinow', 'BG', 'Vorsitzender von Wasraschdane', '1979–', 'Politik', 'Kostadin_Kostadinov', [-20, 70, 90, 80, 95, 90, 50, 70, 100, -60, -70, -50],
    'Prorussischer Nationalist, der gegen Euro, EU und NATO mobilisiert.');
  P('velopoulos', 'Kyriakos Velopoulos', 'GR', 'Vorsitzender der Elliniki Lysi', '1965–', 'Politik', 'Kyriakos_Velopoulos', [10, 70, 70, 90, 95, 95, 50, 90, 40, -40, -70, -30],
    'Nationalistischer Fernsehverkäufer, der mit „Briefen von Jesus" Schlagzeilen machte.');
  P('christodoulides', 'Nikos Christodoulides', 'CY', 'Präsident Zyperns', '1973–', 'Politik', 'Nikos_Christodoulides', [20, 30, -50, 30, 50, 60, 10, 60, -40, -60, 40, 60],
    'Diplomat und Mitte-rechts-Politiker, der Zypern stärker an den Westen bindet.');

  P('papst-leo', 'Papst Leo XIV.', 'VA', 'Papst seit 2025', '1955–', 'Religion', 'Pope_Leo_XIV', [-30, 10, -20, 50, -40, -40, -50, 100, 20, 0, 50, 70],
    'Erster Papst aus den USA, Augustiner und langjähriger Missionar in Peru.');
})();

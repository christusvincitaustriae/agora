/* Agora – Parteien Europas
   Y(id, Name, Kürzel, Land, EP-Fraktion, Familie, Wikipedia-Titel (en), Vektor, Ausrichtung, historisch?) */
window.AG = window.AG || {};

(function () {
  const L = [];
  const Y = (id, name, short, cc, ep, fam, wiki, v, ideo, hist) =>
    L.push({ id, type: 'party', name, short, cc, ep, fam, wiki, v, ideo, hist: !!hist });

  /* Europaweit */
  Y('volt', 'Volt Europa', 'Volt', 'EU', 'GREEN', 'mitte', 'Volt_Europa', [10, -30, -100, -60, -70, -40, -60, -60, -80, 10, 30, 40], 'Paneuropäisch, föderalistisch, progressiv');

  /* Deutschland */
  Y('de-cdu', 'Christlich Demokratische Union', 'CDU', 'DE', 'EPP', 'rechts', 'Christian_Democratic_Union_of_Germany', [35, 35, -50, 35, 20, 50, 20, 40, -80, 10, 50, 70], 'Christdemokratisch, Mitte-rechts');
  Y('de-csu', 'Christlich-Soziale Union in Bayern', 'CSU', 'DE', 'EPP', 'rechts', 'Christian_Social_Union_in_Bavaria', [30, 45, -20, 55, 40, 60, 20, 60, -70, 60, 30, 60], 'Christlich-konservativ, bayerischer Regionalismus');
  Y('de-spd', 'Sozialdemokratische Partei Deutschlands', 'SPD', 'DE', 'SD', 'links', 'Social_Democratic_Party_of_Germany', [-35, 10, -60, -40, -20, 0, -30, -40, -60, 0, 50, 70], 'Sozialdemokratisch, Mitte-links');
  Y('de-afd', 'Alternative für Deutschland', 'AfD', 'DE', 'ESN', 'rechtsaussen', 'Alternative_for_Germany', [30, 60, 85, 70, 85, 100, 70, 10, 60, 10, -80, -50], 'Rechtspopulistisch bis rechtsextrem');
  Y('de-gruene', 'Bündnis 90/Die Grünen', 'Grüne', 'DE', 'GREEN', 'gruen', 'Alliance_90/The_Greens', [-30, -15, -75, -65, -55, -55, -85, -45, -75, 10, 30, 50], 'Grün, linksliberal, proeuropäisch');
  Y('de-fdp', 'Freie Demokratische Partei', 'FDP', 'DE', 'RE', 'mitte', 'Free_Democratic_Party_(Germany)', [65, -25, -40, -35, -20, 20, 40, -40, -70, 10, 40, 60], 'Liberal, wirtschaftsliberal');
  Y('de-linke', 'Die Linke', 'Linke', 'DE', 'LEFT', 'radlinks', 'The_Left_(Germany)', [-75, -20, -20, -70, -60, -70, -60, -80, 50, 0, -30, -40], 'Demokratisch-sozialistisch');
  Y('de-bsw', 'Bündnis Sahra Wagenknecht', 'BSW', 'DE', 'NI', 'links', 'Sahra_Wagenknecht_Alliance', [-55, 35, 50, 20, 45, 65, 40, -20, 90, -20, -40, -10], 'Linkskonservativ, linkspopulistisch');
  Y('de-fw', 'Freie Wähler', 'FW', 'DE', 'RE', 'mitte', 'Free_Voters', [20, 20, -10, 30, 20, 40, 10, 20, -50, 70, -30, 60], 'Bürgerlich, kommunalpolitisch, regional');
  Y('de-oedp', 'Ökologisch-Demokratische Partei', 'ÖDP', 'DE', 'GREEN', 'gruen', 'Ecological_Democratic_Party', [-20, 0, -30, 20, -10, -10, -80, 40, -10, 40, -20, 40], 'Wertkonservativ-ökologisch');
  Y('de-tierschutz', 'Partei Mensch Umwelt Tierschutz', 'Tierschutzpartei', 'DE', 'LEFT', 'gruen', 'Human_Environment_Animal_Protection_Party', [-40, -20, -30, -50, -40, -40, -95, -40, -10, 0, -10, 20], 'Tierrechte, Umweltschutz');
  Y('de-piraten', 'Piratenpartei Deutschland', 'Piraten', 'DE', 'GREEN', 'mitte', 'Pirate_Party_Germany', [-10, -80, -50, -60, -50, -40, -30, -60, -20, 30, -70, 20], 'Netzpolitik, Bürgerrechte');
  Y('de-partei', 'Die PARTEI', 'PARTEI', 'DE', 'NI', 'links', 'Die_PARTEI', [-40, -40, -40, -60, -60, -50, -40, -60, -20, 0, -40, -40], 'Satirepartei');
  Y('de-nsdap', 'Nationalsozialistische Deutsche Arbeiterpartei', 'NSDAP', 'DE', null, 'rechtsaussen', 'Nazi_Party', [-10, 100, 90, 80, 100, 100, 60, -20, 80, -100, 30, -100], 'Nationalsozialistisch (1920–1945)', true);
  Y('de-kpd', 'Kommunistische Partei Deutschlands', 'KPD', 'DE', null, 'radlinks', 'Communist_Party_of_Germany', [-100, 80, 30, -30, -40, 0, 40, -100, 90, -70, 30, -100], 'Marxistisch-leninistisch (1918–1956)', true);
  Y('de-sed', 'Sozialistische Einheitspartei Deutschlands', 'SED', 'DE', null, 'radlinks', 'Socialist_Unity_Party_of_Germany', [-95, 90, 60, 0, 20, 80, 60, -90, 100, -90, 60, -50], 'Staatspartei der DDR (1946–1989)', true);
  Y('de-zentrum', 'Deutsche Zentrumspartei', 'Zentrum', 'DE', null, 'rechts', 'Centre_Party_(Germany)', [-10, 20, null, 60, 20, 10, 0, 90, null, 40, 40, 70], 'Politischer Katholizismus (1870–1933)', true);

  /* Österreich */
  Y('at-oevp', 'Österreichische Volkspartei', 'ÖVP', 'AT', 'EPP', 'rechts', 'Austrian_People%27s_Party', [35, 40, -30, 45, 35, 60, 20, 45, -30, 30, 40, 60], 'Christdemokratisch, konservativ');
  Y('at-spoe', 'Sozialdemokratische Partei Österreichs', 'SPÖ', 'AT', 'SD', 'links', 'Social_Democratic_Party_of_Austria', [-50, 0, -40, -40, -25, -20, -30, -40, 20, 0, 30, 50], 'Sozialdemokratisch');
  Y('at-fpoe', 'Freiheitliche Partei Österreichs', 'FPÖ', 'AT', 'PFE', 'rechtsaussen', 'Freedom_Party_of_Austria', [15, 60, 85, 65, 85, 100, 50, 25, 70, 10, -90, -50], 'Rechtspopulistisch, nationalkonservativ');
  Y('at-gruene', 'Die Grünen – Die Grüne Alternative', 'Grüne', 'AT', 'GREEN', 'gruen', 'The_Greens_–_The_Green_Alternative', [-35, -20, -65, -60, -50, -50, -85, -40, -20, 10, 10, 40], 'Grün, progressiv');
  Y('at-neos', 'NEOS – Das Neue Österreich', 'NEOS', 'AT', 'RE', 'mitte', 'NEOS_–_The_New_Austria_and_Liberal_Forum', [55, -25, -85, -50, -40, -10, -10, -50, -70, 10, 40, 40], 'Liberal, proeuropäisch');
  Y('at-kpoe', 'Kommunistische Partei Österreichs', 'KPÖ', 'AT', 'NI', 'radlinks', 'Communist_Party_of_Austria', [-80, -20, 0, -50, -40, -40, -50, -70, 50, 20, -30, -30], 'Kommunistisch, kommunalpolitisch');
  Y('at-vf', 'Vaterländische Front', 'VF', 'AT', null, 'rechtsaussen', 'Fatherland_Front_(Austria)', [0, 90, 60, 85, 60, 60, 30, 95, 20, -60, 60, -40], 'Austrofaschistisch (1933–1938)', true);

  /* Schweiz */
  Y('ch-svp', 'Schweizerische Volkspartei', 'SVP', 'CH', 'NONEU', 'rechts', 'Swiss_People%27s_Party', [55, 40, 100, 60, 80, 90, 40, 30, 70, 70, -80, 40], 'Nationalkonservativ, EU-ablehnend');
  Y('ch-sp', 'Sozialdemokratische Partei der Schweiz', 'SP', 'CH', 'NONEU', 'links', 'Social_Democratic_Party_of_Switzerland', [-60, -30, -60, -60, -50, -50, -60, -60, 20, 30, -30, 30], 'Sozialdemokratisch');
  Y('ch-fdp', 'FDP.Die Liberalen', 'FDP', 'CH', 'NONEU', 'mitte', 'FDP.The_Liberals', [55, 0, -10, 0, 10, 30, 20, -10, 0, 60, 20, 70], 'Liberal, wirtschaftsfreundlich');
  Y('ch-mitte', 'Die Mitte', 'Mitte', 'CH', 'NONEU', 'mitte', 'The_Centre_(political_party)', [10, 20, -20, 30, 20, 30, 0, 40, 10, 60, 10, 80], 'Christlich-zentristisch');
  Y('ch-gruene', 'Grüne Schweiz', 'Grüne', 'CH', 'NONEU', 'gruen', 'Green_Party_of_Switzerland', [-50, -40, -60, -70, -60, -60, -90, -60, 20, 30, -30, 20], 'Grün, links');
  Y('ch-glp', 'Grünliberale Partei', 'GLP', 'CH', 'NONEU', 'gruen', 'Green_Liberal_Party_of_Switzerland', [30, -30, -60, -50, -40, -30, -60, -50, -20, 30, 20, 50], 'Grünliberal');

  /* Frankreich */
  Y('fr-ren', 'Renaissance', 'RE', 'FR', 'RE', 'mitte', 'Renaissance_(French_political_party)', [30, 20, -80, -30, -20, 10, 0, -50, -50, -40, 70, 40], 'Liberal, zentristisch, proeuropäisch');
  Y('fr-rn', 'Rassemblement National', 'RN', 'FR', 'PFE', 'rechtsaussen', 'National_Rally', [-10, 55, 65, 45, 85, 95, 50, -10, 30, -40, -70, -30], 'Rechtspopulistisch, souveränistisch');
  Y('fr-lfi', 'La France insoumise', 'LFI', 'FR', 'LEFT', 'radlinks', 'La_France_Insoumise', [-85, 0, 50, -60, -20, -50, -70, -90, 70, -50, -80, -80], 'Linkspopulistisch, ökosozialistisch');
  Y('fr-lr', 'Les Républicains', 'LR', 'FR', 'EPP', 'rechts', 'The_Republicans_(France)', [40, 50, 0, 45, 50, 70, 40, 20, -50, -40, 30, 40], 'Gaullistisch, konservativ');
  Y('fr-ps', 'Parti socialiste', 'PS', 'FR', 'SD', 'links', 'Socialist_Party_(France)', [-40, 0, -70, -45, -30, -20, -50, -60, -60, -20, 40, 60], 'Sozialdemokratisch');
  Y('fr-eelv', 'Les Écologistes', 'EELV', 'FR', 'GREEN', 'gruen', 'The_Ecologists', [-50, -30, -70, -75, -60, -60, -90, -70, -40, 30, -10, 10], 'Grün, links');
  Y('fr-pcf', 'Parti communiste français', 'PCF', 'FR', 'LEFT', 'radlinks', 'French_Communist_Party', [-80, 10, 30, -30, 10, -10, 10, -80, 50, -40, -20, -30], 'Kommunistisch');
  Y('fr-rec', 'Reconquête', 'REC', 'FR', 'ESN', 'rechtsaussen', 'Reconquête', [30, 60, 70, 85, 95, 100, 40, 40, 40, -50, -50, -60], 'Nationalistisch, identitär');
  Y('fr-hor', 'Horizons', 'HOR', 'FR', 'RE', 'mitte', 'Horizons_(political_party)', [40, 30, -60, -15, 0, 30, 10, -40, -60, -30, 60, 60], 'Liberal-konservativ, zentristisch');
  Y('fr-modem', 'Mouvement démocrate', 'MoDem', 'FR', 'RE', 'mitte', 'Democratic_Movement_(France)', [10, 10, -85, -10, -20, 0, -10, -20, -60, 0, 50, 70], 'Christlich-sozial, zentristisch');
  Y('fr-af', 'Action française', 'AF', 'FR', null, 'rechtsaussen', 'Action_Française', [0, 80, null, 95, 95, 80, 30, 85, null, 10, 80, -50], 'Royalistisch, integral-nationalistisch', true);

  /* Italien */
  Y('it-fdi', 'Fratelli d’Italia', 'FdI', 'IT', 'ECR', 'rechts', 'Brothers_of_Italy', [20, 55, 30, 70, 80, 90, 40, 60, -60, -20, 0, 20], 'Nationalkonservativ');
  Y('it-lega', 'Lega', 'Lega', 'IT', 'PFE', 'rechtsaussen', 'Lega_(political_party)', [25, 50, 60, 60, 70, 95, 50, 40, 40, 60, -70, -20], 'Rechtspopulistisch, föderalistisch');
  Y('it-fi', 'Forza Italia', 'FI', 'IT', 'EPP', 'rechts', 'Forza_Italia_(2013)', [45, 30, -60, 35, 20, 50, 30, 50, -60, 0, 30, 60], 'Liberalkonservativ, christdemokratisch');
  Y('it-pd', 'Partito Democratico', 'PD', 'IT', 'SD', 'links', 'Democratic_Party_(Italy)', [-35, -10, -75, -55, -40, -40, -60, -30, -60, 0, 30, 50], 'Sozialdemokratisch, progressiv');
  Y('it-m5s', 'Movimento 5 Stelle', 'M5S', 'IT', 'LEFT', 'mitte', 'Five_Star_Movement', [-35, 0, 0, -30, 0, 10, -50, -30, 50, 10, -70, -20], 'Populistisch, sozial, ökologisch');
  Y('it-avs', 'Alleanza Verdi e Sinistra', 'AVS', 'IT', 'GREEN', 'gruen', 'Greens_and_Left_Alliance', [-70, -30, -50, -70, -60, -70, -90, -70, 30, 10, -30, -30], 'Grün-links');
  Y('it-azione', 'Azione', 'Azione', 'IT', 'RE', 'mitte', 'Action_(Italy)', [40, 10, -80, -30, -10, 20, 20, -30, -70, -20, 60, 60], 'Liberal, zentristisch');
  Y('it-europa', '+Europa', '+Europa', 'IT', 'RE', 'mitte', 'More_Europe', [30, -40, -95, -70, -60, -50, -30, -70, -80, 0, 40, 40], 'Liberal, föderalistisch');
  Y('it-pnf', 'Partito Nazionale Fascista', 'PNF', 'IT', null, 'rechtsaussen', 'National_Fascist_Party', [-10, 100, 80, 60, 100, 70, 70, 30, 70, -100, 20, -90], 'Faschistisch (1921–1943)', true);
  Y('it-pci', 'Partito Comunista Italiano', 'PCI', 'IT', null, 'radlinks', 'Italian_Communist_Party', [-70, 10, -20, -30, -20, -20, 0, -50, 30, -10, 10, 10], 'Eurokommunistisch (1921–1991)', true);
  Y('it-dc', 'Democrazia Cristiana', 'DC', 'IT', null, 'rechts', 'Christian_Democracy_(Italy)', [10, 20, -80, 50, 0, 10, 20, 80, -80, 10, 50, 80], 'Christdemokratisch (1943–1994)', true);

  /* Spanien */
  Y('es-psoe', 'Partido Socialista Obrero Español', 'PSOE', 'ES', 'SD', 'links', 'Spanish_Socialist_Workers%27_Party', [-35, 0, -75, -55, -30, -30, -50, -60, -50, 30, 40, 40], 'Sozialdemokratisch');
  Y('es-pp', 'Partido Popular', 'PP', 'ES', 'EPP', 'rechts', 'People%27s_Party_(Spain)', [40, 35, -50, 35, 30, 40, 30, 40, -60, -20, 40, 70], 'Konservativ, christdemokratisch');
  Y('es-vox', 'Vox', 'Vox', 'ES', 'PFE', 'rechtsaussen', 'Vox_(political_party)', [30, 70, 60, 85, 95, 95, 60, 70, 0, -90, -40, -30], 'Nationalkonservativ, zentralistisch');
  Y('es-sumar', 'Sumar', 'Sumar', 'ES', 'LEFT', 'links', 'Sumar_(electoral_platform)', [-70, -20, -50, -75, -40, -65, -80, -80, 10, 40, -30, 0], 'Links, ökologisch');
  Y('es-podemos', 'Podemos', 'Podemos', 'ES', 'LEFT', 'radlinks', 'Podemos_(Spanish_political_party)', [-80, -10, -10, -75, -30, -70, -70, -80, 60, 50, -70, -50], 'Linkspopulistisch');
  Y('es-erc', 'Esquerra Republicana de Catalunya', 'ERC', 'ES', 'GREEN', 'regional', 'Republican_Left_of_Catalonia', [-40, -10, -60, -50, 30, -40, -50, -50, -30, 100, -30, -10], 'Linksrepublikanisch, katalanische Unabhängigkeit');
  Y('es-junts', 'Junts per Catalunya', 'Junts', 'ES', 'NI', 'regional', 'Together_for_Catalonia_(2020)', [30, 10, -40, 0, 50, 20, -20, -10, -40, 100, -20, -20], 'Bürgerlich, katalanische Unabhängigkeit');
  Y('es-pnv', 'Partido Nacionalista Vasco', 'PNV', 'ES', 'RE', 'regional', 'Basque_Nationalist_Party', [20, 20, -60, 10, 40, 0, -10, 20, -50, 100, 30, 80], 'Christdemokratisch, baskischer Nationalismus');
  Y('es-bildu', 'EH Bildu', 'Bildu', 'ES', 'LEFT', 'regional', 'EH_Bildu', [-70, -10, -30, -60, 40, -50, -60, -70, 40, 100, -40, -40], 'Linksnationalistisch, baskische Unabhängigkeit');
  Y('es-falange', 'Falange Española de las JONS', 'Falange', 'ES', null, 'dritte', 'FET_y_de_las_JONS', [-30, 90, 70, 90, 95, 80, 40, 90, 50, -90, 20, -80], 'Nationalsyndikalistisch (1934–1977)', true);
  Y('es-cnt', 'CNT-FAI', 'CNT', 'ES', null, 'anarch', 'Confederación_Nacional_del_Trabajo', [-100, -100, 0, -60, -90, -80, 0, -100, 60, 100, -100, -100], 'Anarchosyndikalistisch (Bürgerkrieg)', true);

  /* Portugal */
  Y('pt-psd', 'Partido Social Democrata', 'PSD', 'PT', 'EPP', 'rechts', 'Social_Democratic_Party_(Portugal)', [35, 30, -55, 30, 20, 30, 20, 30, -60, -10, 50, 70], 'Liberalkonservativ, Mitte-rechts');
  Y('pt-ps', 'Partido Socialista', 'PS', 'PT', 'SD', 'links', 'Socialist_Party_(Portugal)', [-30, 0, -75, -40, -30, -40, -30, -40, -60, -10, 50, 60], 'Sozialdemokratisch');
  Y('pt-chega', 'Chega', 'Chega', 'PT', 'PFE', 'rechtsaussen', 'Chega_(political_party)', [30, 70, 40, 70, 85, 95, 50, 60, -20, -30, -90, -40], 'Rechtspopulistisch');
  Y('pt-il', 'Iniciativa Liberal', 'IL', 'PT', 'RE', 'libertaer', 'Liberal_Initiative', [80, -30, -50, -40, -20, 0, 40, -40, -70, 20, 30, 40], 'Klassisch-liberal');
  Y('pt-be', 'Bloco de Esquerda', 'BE', 'PT', 'LEFT', 'radlinks', 'Left_Bloc', [-75, -20, -30, -75, -50, -70, -60, -80, 40, 10, -40, -40], 'Demokratisch-sozialistisch');
  Y('pt-pcp', 'Partido Comunista Português', 'PCP', 'PT', 'LEFT', 'radlinks', 'Portuguese_Communist_Party', [-90, 20, 70, -10, 30, 0, 10, -80, 80, -30, -10, -50], 'Marxistisch-leninistisch');
  Y('pt-livre', 'Livre', 'Livre', 'PT', 'GREEN', 'gruen', 'LIVRE', [-50, -30, -80, -70, -60, -60, -80, -70, -50, 10, -10, 10], 'Grün-links, proeuropäisch');

  /* Vereinigtes Königreich */
  Y('gb-labour', 'Labour Party', 'Labour', 'GB', 'NONEU', 'links', 'Labour_Party_(UK)', [-25, 20, -30, -30, 0, 20, -30, -30, -80, -10, 50, 70], 'Sozialdemokratisch, Mitte-links');
  Y('gb-con', 'Conservative Party', 'Tories', 'GB', 'NONEU', 'rechts', 'Conservative_Party_(UK)', [50, 40, 70, 30, 50, 60, 40, 20, -80, -20, 40, 50], 'Konservativ, wirtschaftsliberal');
  Y('gb-reform', 'Reform UK', 'Reform', 'GB', 'NONEU', 'rechtsaussen', 'Reform_UK', [55, 50, 100, 40, 80, 95, 70, 20, 0, -20, -80, -30], 'Rechtspopulistisch');
  Y('gb-libdem', 'Liberal Democrats', 'Lib Dems', 'GB', 'NONEU', 'mitte', 'Liberal_Democrats_(UK)', [5, -25, -80, -55, -40, -40, -50, -40, -80, 40, 30, 60], 'Sozialliberal, proeuropäisch');
  Y('gb-snp', 'Scottish National Party', 'SNP', 'GB', 'NONEU', 'regional', 'Scottish_National_Party', [-35, 0, -75, -55, 30, -50, -50, -50, -60, 100, 20, 20], 'Sozialdemokratisch, schottische Unabhängigkeit');
  Y('gb-green', 'Green Party of England and Wales', 'Greens', 'GB', 'NONEU', 'gruen', 'Green_Party_of_England_and_Wales', [-70, -30, -60, -80, -60, -70, -90, -70, -10, 30, -40, -20], 'Grün, ökopopulistisch');
  Y('gb-plaid', 'Plaid Cymru', 'Plaid', 'GB', 'NONEU', 'regional', 'Plaid_Cymru', [-45, -10, -70, -50, 30, -50, -60, -50, -40, 100, 0, 20], 'Walisischer Nationalismus, links');
  Y('gb-dup', 'Democratic Unionist Party', 'DUP', 'GB', 'NONEU', 'rechts', 'Democratic_Unionist_Party', [20, 50, 70, 90, 60, 60, 40, 90, -60, -40, 10, 20], 'Unionistisch, protestantisch-konservativ');
  Y('gb-buf', 'British Union of Fascists', 'BUF', 'GB', null, 'rechtsaussen', 'British_Union_of_Fascists', [-20, 95, null, 70, 90, 90, 50, 10, 50, -80, 20, -90], 'Faschistisch (1932–1940)', true);

  /* Irland */
  Y('ie-ff', 'Fianna Fáil', 'FF', 'IE', 'RE', 'mitte', 'Fianna_Fáil', [0, 20, -60, 0, 10, 20, 0, 10, -20, 0, 50, 70], 'Zentristisch, republikanisch');
  Y('ie-fg', 'Fine Gael', 'FG', 'IE', 'EPP', 'rechts', 'Fine_Gael', [25, 20, -70, -20, 0, 20, 0, 0, -40, -10, 50, 70], 'Liberalkonservativ, christdemokratisch');
  Y('ie-sf', 'Sinn Féin', 'SF', 'IE', 'LEFT', 'links', 'Sinn_Féin', [-55, 0, -30, -55, 50, -20, -40, -30, 40, 60, -30, -20], 'Linksnationalistisch, irische Einheit');
  Y('ie-socdem', 'Social Democrats', 'SocDem', 'IE', 'NI', 'links', 'Social_Democrats_(Ireland)', [-45, -20, -60, -60, -30, -40, -60, -50, 20, 0, 10, 50], 'Sozialdemokratisch, progressiv');

  /* Belgien */
  Y('be-nva', 'Nieuw-Vlaamse Alliantie', 'N-VA', 'BE', 'ECR', 'regional', 'New_Flemish_Alliance', [45, 40, 10, 30, 60, 70, 30, 10, -60, 100, 30, 40], 'Flämisch-nationalistisch, konservativ');
  Y('be-vb', 'Vlaams Belang', 'VB', 'BE', 'PFE', 'rechtsaussen', 'Vlaams_Belang', [15, 60, 75, 60, 90, 100, 40, 20, 30, 100, -80, -40], 'Rechtsextrem, flämischer Separatismus');
  Y('be-mr', 'Mouvement Réformateur', 'MR', 'BE', 'RE', 'mitte', 'Reformist_Movement', [55, 30, -60, 0, 10, 40, 30, -30, -70, -30, 40, 60], 'Liberal, Mitte-rechts');
  Y('be-ps', 'Parti Socialiste', 'PS', 'BE', 'SD', 'links', 'Socialist_Party_(Belgium)', [-55, 0, -60, -40, -30, -30, -40, -60, -30, -30, 30, 40], 'Sozialdemokratisch');
  Y('be-ptb', 'PTB-PVDA', 'PVDA', 'BE', 'LEFT', 'radlinks', 'Workers%27_Party_of_Belgium', [-85, 10, 40, -40, -30, -40, -30, -80, 60, -40, -40, -60], 'Marxistisch');
  Y('be-vooruit', 'Vooruit', 'Vooruit', 'BE', 'SD', 'links', 'Vooruit_(political_party)', [-35, 10, -60, -30, -10, 10, -30, -50, -60, 0, 40, 60], 'Sozialdemokratisch');
  Y('be-cdv', 'Christen-Democratisch en Vlaams', 'CD&V', 'BE', 'EPP', 'rechts', 'Christian_Democratic_and_Flemish', [10, 20, -70, 20, 10, 20, 0, 50, -70, 40, 40, 80], 'Christdemokratisch');
  Y('be-engages', 'Les Engagés', 'LE', 'BE', 'EPP', 'mitte', 'Les_Engagés', [0, 20, -60, 10, 0, 10, -20, 30, -60, 0, 40, 70], 'Zentristisch, christlich-humanistisch');
  Y('be-groen', 'Groen / Ecolo', 'Groen', 'BE', 'GREEN', 'gruen', 'Groen_(political_party)', [-45, -20, -75, -70, -60, -60, -90, -60, -50, 0, 10, 40], 'Grün');

  /* Niederlande */
  Y('nl-pvv', 'Partij voor de Vrijheid', 'PVV', 'NL', 'PFE', 'rechtsaussen', 'Party_for_Freedom', [15, 60, 90, 10, 80, 100, 60, -10, 0, 0, -80, -40], 'Rechtspopulistisch, islamkritisch');
  Y('nl-vvd', 'Volkspartij voor Vrijheid en Democratie', 'VVD', 'NL', 'RE', 'mitte', 'People%27s_Party_for_Freedom_and_Democracy', [55, 35, -30, -20, 0, 40, 30, -40, -80, 0, 50, 70], 'Wirtschaftsliberal');
  Y('nl-glpvda', 'GroenLinks–PvdA', 'GL-PvdA', 'NL', 'SD', 'links', 'GroenLinks–PvdA', [-45, -20, -75, -70, -60, -60, -80, -60, -60, 10, 30, 40], 'Rot-grün');
  Y('nl-d66', 'Democraten 66', 'D66', 'NL', 'RE', 'mitte', 'Democrats_66', [30, -30, -90, -75, -50, -30, -60, -80, -70, 10, 40, 50], 'Linksliberal, proeuropäisch');
  Y('nl-cda', 'Christen-Democratisch Appèl', 'CDA', 'NL', 'EPP', 'rechts', 'Christian_Democratic_Appeal', [15, 25, -60, 30, 10, 30, 0, 60, -70, 20, 50, 80], 'Christdemokratisch');
  Y('nl-nsc', 'Nieuw Sociaal Contract', 'NSC', 'NL', 'EPP', 'rechts', 'New_Social_Contract', [10, 20, 0, 30, 30, 50, 0, 60, -60, 20, -30, 40], 'Christlich-sozial, reformorientiert');
  Y('nl-bbb', 'BoerBurgerBeweging', 'BBB', 'NL', 'EPP', 'rechts', 'Farmer–Citizen_Movement', [20, 30, 50, 50, 50, 70, 70, 40, -40, 60, -60, 20], 'Agrarpopulistisch');
  Y('nl-sp', 'Socialistische Partij', 'SP', 'NL', 'LEFT', 'radlinks', 'Socialist_Party_(Netherlands)', [-75, 0, 40, -30, 0, -10, -30, -60, 40, 10, -40, -10], 'Sozialistisch');
  Y('nl-fvd', 'Forum voor Democratie', 'FvD', 'NL', 'ESN', 'rechtsaussen', 'Forum_for_Democracy', [40, 50, 100, 80, 85, 100, 60, 30, 90, 10, -60, -70], 'Rechtsnational, EU-feindlich');
  Y('nl-pvdd', 'Partij voor de Dieren', 'PvdD', 'NL', 'LEFT', 'gruen', 'Party_for_the_Animals', [-50, -20, -30, -60, -40, -40, -100, -60, 0, 10, -20, 0], 'Tierrechte, ökologisch');
  Y('nl-sgp', 'Staatkundig Gereformeerde Partij', 'SGP', 'NL', 'ECR', 'rechts', 'Reformed_Political_Party', [30, 50, 50, 100, 40, 60, 20, 100, -60, 10, 60, 90], 'Calvinistisch-orthodox');

  /* Luxemburg */
  Y('lu-csv', 'Chrëschtlech-Sozial Vollekspartei', 'CSV', 'LU', 'EPP', 'rechts', 'Christian_Social_People%27s_Party', [10, 20, -80, 20, -20, 0, 0, 30, -60, 0, 60, 80], 'Christdemokratisch');
  Y('lu-dp', 'Demokratesch Partei', 'DP', 'LU', 'RE', 'mitte', 'Democratic_Party_(Luxembourg)', [40, 0, -80, -40, -40, -10, 0, -40, -60, 0, 50, 70], 'Liberal');
  Y('lu-lsap', 'Lëtzebuerger Sozialistesch Aarbechterpartei', 'LSAP', 'LU', 'SD', 'links', 'Luxembourg_Socialist_Workers%27_Party', [-35, 0, -80, -40, -40, -20, -20, -50, -60, 0, 40, 70], 'Sozialdemokratisch');
  Y('lu-adr', 'Alternativ Demokratesch Reformpartei', 'ADR', 'LU', 'ECR', 'rechts', 'Alternative_Democratic_Reform_Party', [30, 40, 60, 50, 60, 70, 40, 30, -30, 0, -40, 30], 'Nationalkonservativ');

  /* Dänemark */
  Y('dk-s', 'Socialdemokratiet', 'S', 'DK', 'SD', 'links', 'Social_Democrats_(Denmark)', [-25, 40, -20, 0, 30, 80, -30, -20, -90, -20, 50, 70], 'Sozialdemokratisch, migrationskritisch');
  Y('dk-v', 'Venstre', 'V', 'DK', 'RE', 'mitte', 'Venstre_(Denmark)', [45, 30, -40, 10, 20, 60, 30, -10, -90, 0, 50, 70], 'Liberal-konservativ');
  Y('dk-sf', 'Socialistisk Folkeparti', 'SF', 'DK', 'GREEN', 'gruen', 'Green_Left_(Denmark)', [-55, -20, -50, -65, -30, -20, -80, -60, -80, 10, 20, 40], 'Grün-sozialistisch');
  Y('dk-la', 'Liberal Alliance', 'LA', 'DK', 'RE', 'libertaer', 'Liberal_Alliance_(Denmark)', [85, -30, 10, -10, 10, 50, 40, -30, -80, 20, 30, 40], 'Klassisch-liberal');
  Y('dk-m', 'Moderaterne', 'M', 'DK', 'RE', 'mitte', 'Moderates_(Denmark)', [20, 20, -50, -20, 0, 40, 0, -30, -90, 0, 60, 70], 'Zentristisch');
  Y('dk-df', 'Dansk Folkeparti', 'DF', 'DK', 'PFE', 'rechtsaussen', 'Danish_People%27s_Party', [-10, 50, 80, 50, 85, 100, 40, 30, -50, -10, -50, 0], 'Rechtspopulistisch, sozialkonservativ');
  Y('dk-dd', 'Danmarksdemokraterne', 'DD', 'DK', 'ECR', 'rechts', 'Denmark_Democrats', [20, 40, 60, 40, 70, 90, 50, 20, -60, 40, -50, 10], 'Nationalkonservativ, ländlich');
  Y('dk-el', 'Enhedslisten', 'EL', 'DK', 'LEFT', 'radlinks', 'Red–Green_Alliance_(Denmark)', [-85, -30, 50, -75, -50, -60, -80, -80, 40, 20, -40, -40], 'Rot-grün, sozialistisch');
  Y('dk-rv', 'Radikale Venstre', 'RV', 'DK', 'RE', 'mitte', 'Danish_Social_Liberal_Party', [20, -20, -75, -60, -50, -40, -50, -60, -80, 0, 40, 60], 'Sozialliberal');

  /* Schweden */
  Y('se-s', 'Socialdemokraterna', 'S', 'SE', 'SD', 'links', 'Swedish_Social_Democratic_Party', [-30, 10, -40, -40, -20, 20, -30, -50, -80, -20, 50, 70], 'Sozialdemokratisch');
  Y('se-m', 'Moderaterna', 'M', 'SE', 'EPP', 'rechts', 'Moderate_Party', [55, 35, -40, 0, 10, 60, 20, -10, -90, 0, 50, 70], 'Liberalkonservativ');
  Y('se-sd', 'Sverigedemokraterna', 'SD', 'SE', 'ECR', 'rechtsaussen', 'Sweden_Democrats', [-10, 55, 60, 50, 85, 100, 50, 20, -50, -30, -60, -20], 'Nationalkonservativ, rechtspopulistisch');
  Y('se-v', 'Vänsterpartiet', 'V', 'SE', 'LEFT', 'radlinks', 'Left_Party_(Sweden)', [-80, -20, 40, -70, -40, -60, -70, -80, 40, 0, -30, -30], 'Sozialistisch, feministisch');
  Y('se-c', 'Centerpartiet', 'C', 'SE', 'RE', 'mitte', 'Centre_Party_(Sweden)', [50, -20, -60, -40, -30, -30, -40, -30, -80, 60, 20, 60], 'Agrarliberal, grünliberal');
  Y('se-kd', 'Kristdemokraterna', 'KD', 'SE', 'EPP', 'rechts', 'Christian_Democrats_(Sweden)', [35, 40, 0, 60, 30, 60, 20, 80, -80, 0, 40, 70], 'Christdemokratisch, konservativ');
  Y('se-l', 'Liberalerna', 'L', 'SE', 'RE', 'mitte', 'Liberals_(Sweden)', [40, 10, -75, -40, -20, 40, 10, -50, -90, 0, 50, 70], 'Liberal');
  Y('se-mp', 'Miljöpartiet de gröna', 'MP', 'SE', 'GREEN', 'gruen', 'Green_Party_(Sweden)', [-50, -30, -40, -75, -60, -70, -95, -60, -50, 20, -20, 20], 'Grün');

  /* Finnland */
  Y('fi-sdp', 'Suomen Sosialidemokraattinen Puolue', 'SDP', 'FI', 'SD', 'links', 'Social_Democratic_Party_of_Finland', [-35, 0, -50, -50, -30, -20, -40, -50, -90, 0, 40, 70], 'Sozialdemokratisch');
  Y('fi-kok', 'Kansallinen Kokoomus', 'KOK', 'FI', 'EPP', 'rechts', 'National_Coalition_Party', [45, 30, -50, 0, 10, 40, 20, 0, -90, 0, 50, 70], 'Liberalkonservativ');
  Y('fi-ps', 'Perussuomalaiset', 'PS', 'FI', 'ECR', 'rechtsaussen', 'Finns_Party', [30, 50, 80, 40, 85, 95, 60, 20, -80, 0, -40, 0], 'Nationalistisch, rechtspopulistisch');
  Y('fi-kesk', 'Suomen Keskusta', 'KESK', 'FI', 'RE', 'mitte', 'Centre_Party_(Finland)', [10, 20, 0, 30, 30, 30, 10, 20, -80, 80, 0, 70], 'Agrarisch-zentristisch');
  Y('fi-vihr', 'Vihreä liitto', 'VIHR', 'FI', 'GREEN', 'gruen', 'Green_League', [-30, -30, -60, -75, -50, -50, -90, -60, -80, 10, 20, 40], 'Grün');
  Y('fi-vas', 'Vasemmistoliitto', 'VAS', 'FI', 'LEFT', 'radlinks', 'Left_Alliance_(Finland)', [-75, -20, 10, -70, -40, -60, -80, -70, -40, 10, -20, 0], 'Links-grün');
  Y('fi-rkp', 'Svenska folkpartiet', 'SFP', 'FI', 'RE', 'regional', 'Swedish_People%27s_Party_of_Finland', [30, 0, -60, -20, -40, -10, 0, -10, -90, 30, 40, 70], 'Liberal, schwedischsprachige Minderheit');

  /* Norwegen & Island */
  Y('no-ap', 'Arbeiderpartiet', 'Ap', 'NO', 'NONEU', 'links', 'Labour_Party_(Norway)', [-30, 10, -30, -30, -10, 10, -10, -40, -80, -10, 50, 70], 'Sozialdemokratisch');
  Y('no-h', 'Høyre', 'H', 'NO', 'NONEU', 'rechts', 'Conservative_Party_(Norway)', [45, 30, -60, -10, 0, 30, 20, -10, -90, 0, 50, 70], 'Liberalkonservativ');
  Y('no-frp', 'Fremskrittspartiet', 'FrP', 'NO', 'NONEU', 'libertaer', 'Progress_Party_(Norway)', [65, 40, 60, 30, 60, 85, 80, 20, -70, 0, -50, 10], 'Rechtsliberal-populistisch');
  Y('no-sp', 'Senterpartiet', 'Sp', 'NO', 'NONEU', 'mitte', 'Centre_Party_(Norway)', [-10, 20, 80, 30, 50, 50, 0, 20, -60, 80, -20, 40], 'Agrarisch, EU-skeptisch');
  Y('no-sv', 'Sosialistisk Venstreparti', 'SV', 'NO', 'NONEU', 'radlinks', 'Socialist_Left_Party_(Norway)', [-70, -20, 40, -70, -50, -60, -80, -80, 20, 20, -20, 0], 'Sozialistisch, grün');
  Y('no-krf', 'Kristelig Folkeparti', 'KrF', 'NO', 'NONEU', 'rechts', 'Christian_Democratic_Party_(Norway)', [10, 20, -20, 70, 20, 10, -30, 90, -70, 10, 40, 70], 'Christdemokratisch');
  Y('no-r', 'Rødt', 'R', 'NO', 'NONEU', 'radlinks', 'Red_Party_(Norway)', [-85, -10, 70, -60, -30, -40, -60, -70, 40, 10, -40, -30], 'Marxistisch');
  Y('no-mdg', 'Miljøpartiet De Grønne', 'MDG', 'NO', 'NONEU', 'gruen', 'Green_Party_(Norway)', [-40, -20, -50, -70, -60, -60, -100, -60, -50, 30, -20, 10], 'Grün');
  Y('is-d', 'Sjálfstæðisflokkurinn', 'D', 'IS', 'NONEU', 'rechts', 'Independence_Party_(Iceland)', [55, 20, 70, 10, 40, 40, 40, 0, -60, 0, 30, 70], 'Liberalkonservativ, EU-skeptisch');
  Y('is-s', 'Samfylkingin', 'S', 'IS', 'NONEU', 'links', 'Social_Democratic_Alliance', [-30, 0, -60, -40, -30, -20, -30, -50, -60, 0, 40, 60], 'Sozialdemokratisch');

  /* Polen */
  Y('pl-ko', 'Koalicja Obywatelska', 'KO', 'PL', 'EPP', 'mitte', 'Civic_Coalition_(Poland)', [30, 20, -80, -30, -10, 50, 0, 0, -100, -10, 50, 60], 'Liberal-zentristisch, proeuropäisch');
  Y('pl-pis', 'Prawo i Sprawiedliwość', 'PiS', 'PL', 'ECR', 'rechts', 'Law_and_Justice', [-30, 70, 60, 85, 85, 90, 60, 90, -90, -70, -40, 0], 'Nationalkonservativ, katholisch, sozial');
  Y('pl-konf', 'Konfederacja Wolność i Niepodległość', 'Konfederacja', 'PL', 'ESN', 'libertaer', 'Confederation_Liberty_and_Independence', [80, 30, 80, 75, 80, 85, 70, 70, -20, 20, -60, -40], 'Libertär-nationalistisch');
  Y('pl-kkp', 'Konfederacja Korony Polskiej', 'KKP', 'PL', 'NI', 'rechtsaussen', 'Confederation_of_the_Polish_Crown', [60, 70, 95, 95, 90, 90, 70, 100, 50, 0, -30, -60], 'Monarchistisch, katholisch-traditionalistisch');
  Y('pl-lewica', 'Nowa Lewica', 'Lewica', 'PL', 'SD', 'links', 'New_Left_(Poland)', [-50, -20, -70, -70, -40, -30, -50, -80, -80, 0, 20, 40], 'Sozialdemokratisch, säkular');
  Y('pl-psl', 'Polskie Stronnictwo Ludowe', 'PSL', 'PL', 'EPP', 'rechts', 'Polish_People%27s_Party', [0, 30, -50, 50, 30, 40, 20, 70, -80, 40, 20, 70], 'Agrarisch, christdemokratisch');
  Y('pl-p2050', 'Polska 2050', 'PL2050', 'PL', 'RE', 'mitte', 'Poland_2050', [20, 10, -70, -10, 0, 30, -50, 10, -90, 10, 10, 50], 'Zentristisch, grün-christlich');
  Y('pl-razem', 'Partia Razem', 'Razem', 'PL', 'NI', 'radlinks', 'Left_Together', [-80, -30, -50, -75, -50, -50, -70, -80, -60, 10, -20, 0], 'Demokratisch-sozialistisch');

  /* Tschechien & Slowakei */
  Y('cz-ano', 'ANO 2011', 'ANO', 'CZ', 'PFE', 'mitte', 'ANO_2011', [10, 45, 50, 30, 50, 90, 40, 0, 10, -50, -60, 0], 'Populistisch, technokratisch');
  Y('cz-ods', 'Občanská demokratická strana', 'ODS', 'CZ', 'ECR', 'rechts', 'Civic_Democratic_Party_(Czech_Republic)', [60, 20, 30, 20, 30, 60, 40, 10, -80, 0, 40, 60], 'Liberalkonservativ, euroskeptisch');
  Y('cz-stan', 'Starostové a nezávislí', 'STAN', 'CZ', 'EPP', 'mitte', 'Mayors_and_Independents', [20, 0, -50, -10, 0, 30, 0, 0, -80, 70, 20, 60], 'Liberal, kommunalpolitisch');
  Y('cz-pirati', 'Česká pirátská strana', 'Piráti', 'CZ', 'GREEN', 'mitte', 'Czech_Pirate_Party', [0, -60, -50, -60, -40, -20, -30, -60, -80, 30, -40, 40], 'Piratenpartei, liberal');
  Y('cz-spd', 'Svoboda a přímá demokracie', 'SPD', 'CZ', 'ESN', 'rechtsaussen', 'Freedom_and_Direct_Democracy', [10, 60, 95, 60, 90, 100, 50, 10, 60, -20, -90, -40], 'Rechtspopulistisch, direktdemokratisch');
  Y('cz-kdu', 'KDU-ČSL', 'KDU', 'CZ', 'EPP', 'rechts', 'KDU-ČSL', [10, 20, -50, 50, 10, 30, 0, 80, -80, 20, 40, 70], 'Christdemokratisch');
  Y('cz-stacilo', 'Stačilo!', 'Stačilo', 'CZ', 'NI', 'radlinks', 'Stačilo!', [-80, 40, 80, 20, 50, 60, 30, -70, 90, -40, -40, -30], 'Linksnationalistisch, kommunistisch');
  Y('cz-motoriste', 'Motoristé sobě', 'Motoristé', 'CZ', 'PFE', 'libertaer', 'Motorists_for_Themselves', [60, 10, 70, 30, 40, 70, 90, 0, -20, 0, -40, -20], 'Anti-Green-Deal, rechtsliberal');
  Y('cz-kscm', 'Komunistická strana Československa', 'KSČ', 'CZ', null, 'radlinks', 'Communist_Party_of_Czechoslovakia', [-90, 85, 60, 10, 20, 70, 60, -80, 100, -60, 60, -40], 'Staatspartei der ČSSR (1921–1992)', true);
  Y('sk-smer', 'SMER – sociálna demokracia', 'Smer', 'SK', 'NI', 'links', 'Direction_–_Social_Democracy', [-30, 60, 40, 60, 60, 85, 40, 30, 80, -40, -40, 0], 'Linksnationalistisch, populistisch');
  Y('sk-ps', 'Progresívne Slovensko', 'PS', 'SK', 'RE', 'mitte', 'Progressive_Slovakia', [20, -20, -80, -60, -40, -20, -40, -50, -90, 0, 30, 40], 'Liberal, proeuropäisch');
  Y('sk-hlas', 'HLAS – sociálna demokracia', 'Hlas', 'SK', 'NI', 'links', 'Voice_–_Social_Democracy', [-30, 30, 10, 30, 30, 60, 20, 20, 30, -20, 0, 40], 'Sozialdemokratisch, national');
  Y('sk-republika', 'Hnutie Republika', 'Republika', 'SK', 'ESN', 'rechtsaussen', 'Republic_(Slovak_political_party)', [0, 70, 90, 80, 90, 100, 60, 60, 80, -40, -70, -60], 'Rechtsextrem, nationalistisch');
  Y('sk-sas', 'Sloboda a Solidarita', 'SaS', 'SK', 'ECR', 'libertaer', 'Freedom_and_Solidarity', [70, -30, 0, -20, 0, 40, 30, -40, -70, 10, 0, 20], 'Liberal-libertär');
  Y('sk-kdh', 'Kresťanskodemokratické hnutie', 'KDH', 'SK', 'EPP', 'rechts', 'Christian_Democratic_Movement', [10, 30, -30, 80, 30, 50, 10, 90, -70, 0, 30, 60], 'Christdemokratisch, konservativ');

  /* Ungarn */
  Y('hu-fidesz', 'Fidesz – Ungarischer Bürgerbund', 'Fidesz', 'HU', 'PFE', 'rechts', 'Fidesz', [10, 75, 65, 80, 85, 95, 40, 60, 70, -60, -20, 10], 'Nationalkonservativ, illiberal');
  Y('hu-tisza', 'Tisza – Respekt und Freiheit', 'Tisza', 'HU', 'EPP', 'rechts', 'Respect_and_Freedom_Party', [10, 20, -30, 30, 40, 60, 0, 20, -40, 0, -50, 0], 'Mitte-rechts, Anti-Korruption');
  Y('hu-mh', 'Mi Hazánk Mozgalom', 'Mi Hazánk', 'HU', 'ESN', 'rechtsaussen', 'Our_Homeland_Movement', [-10, 80, 90, 90, 100, 100, 50, 70, 90, -50, -70, -70], 'Rechtsextrem');
  Y('hu-dk', 'Demokratikus Koalíció', 'DK', 'HU', 'SD', 'links', 'Democratic_Coalition_(Hungary)', [-40, 0, -80, -40, -30, -20, -30, -40, -80, 0, 30, 30], 'Sozialliberal');
  Y('hu-momentum', 'Momentum Mozgalom', 'Momentum', 'HU', 'RE', 'mitte', 'Momentum_Movement', [30, -30, -90, -60, -40, -20, -40, -50, -90, 10, 10, 20], 'Liberal, proeuropäisch');
  Y('hu-arrow', 'Pfeilkreuzlerpartei', 'Nyilas', 'HU', null, 'rechtsaussen', 'Arrow_Cross_Party', [-20, 100, 90, 85, 100, 100, 40, 50, 80, -90, -20, -100], 'Faschistisch (1935–1945)', true);

  /* Rumänien, Bulgarien, Moldau */
  Y('ro-psd', 'Partidul Social Democrat', 'PSD', 'RO', 'SD', 'links', 'Social_Democratic_Party_(Romania)', [-20, 40, -30, 40, 40, 40, 20, 70, -60, -40, 10, 40], 'Sozialdemokratisch, sozialkonservativ');
  Y('ro-pnl', 'Partidul Național Liberal', 'PNL', 'RO', 'EPP', 'rechts', 'National_Liberal_Party_(Romania)', [40, 20, -60, 20, 20, 30, 20, 40, -80, -10, 40, 60], 'Liberalkonservativ');
  Y('ro-usr', 'Uniunea Salvați România', 'USR', 'RO', 'RE', 'mitte', 'Save_Romania_Union', [30, -20, -80, -30, -20, 0, -30, -20, -90, 20, 0, 30], 'Liberal, Anti-Korruption');
  Y('ro-aur', 'Alianța pentru Unirea Românilor', 'AUR', 'RO', 'ECR', 'rechtsaussen', 'Alliance_for_the_Union_of_Romanians', [10, 65, 60, 85, 95, 70, 60, 90, 20, -50, -80, -30], 'Nationalistisch, orthodox-konservativ');
  Y('ro-sos', 'S.O.S. România', 'SOS', 'RO', 'ESN', 'rechtsaussen', 'S.O.S._Romania', [-20, 70, 90, 90, 95, 80, 50, 95, 90, -50, -80, -70], 'Ultranationalistisch');
  Y('ro-udmr', 'Ungarischer Demokratischer Verband', 'UDMR', 'RO', 'EPP', 'regional', 'Democratic_Alliance_of_Hungarians_in_Romania', [20, 20, -50, 40, 30, 20, 10, 60, -40, 100, 30, 80], 'Christdemokratisch, ungarische Minderheit');
  Y('ro-legion', 'Eiserne Garde', 'Garda de Fier', 'RO', null, 'rechtsaussen', 'Iron_Guard', [-10, 100, 90, 100, 100, 100, 30, 100, 90, -80, -30, -100], 'Klerikalfaschistisch (1927–1941)', true);
  Y('bg-gerb', 'GERB', 'GERB', 'BG', 'EPP', 'rechts', 'GERB', [20, 40, -40, 30, 30, 50, 20, 30, -60, -30, 30, 50], 'Mitte-rechts, populistisch');
  Y('bg-ppdb', 'PP–DB', 'PP-DB', 'BG', 'RE', 'mitte', 'We_Continue_the_Change–Democratic_Bulgaria', [20, -10, -80, -20, 0, 20, -20, -10, -90, 0, 10, 30], 'Liberal, Anti-Korruption');
  Y('bg-vaz', 'Wasraschdane', 'Vazrazhdane', 'BG', 'ESN', 'rechtsaussen', 'Revival_(Bulgaria)', [-20, 70, 90, 80, 95, 90, 50, 70, 100, -60, -70, -50], 'Ultranationalistisch, prorussisch');
  Y('bg-bsp', 'Bulgarische Sozialistische Partei', 'BSP', 'BG', 'SD', 'links', 'Bulgarian_Socialist_Party', [-50, 40, 40, 40, 50, 50, 30, 30, 80, -40, -10, 20], 'Sozialistisch, sozialkonservativ');
  Y('md-pas', 'Partidul Acțiune și Solidaritate', 'PAS', 'MD', 'NONEU', 'mitte', 'Party_of_Action_and_Solidarity', [10, 10, -80, -10, 0, 20, -10, 20, -100, 0, 40, 60], 'Proeuropäisch, Mitte-rechts');

  /* Griechenland, Zypern, Malta */
  Y('gr-nd', 'Nea Dimokratia', 'ND', 'GR', 'EPP', 'rechts', 'New_Democracy_(Greece)', [45, 40, -50, 30, 40, 60, 20, 50, -80, -40, 50, 60], 'Liberalkonservativ');
  Y('gr-syriza', 'SYRIZA', 'SYRIZA', 'GR', 'LEFT', 'links', 'Syriza', [-55, 0, -30, -50, -20, -40, -30, -50, 0, -20, -20, 0], 'Linkssozialistisch');
  Y('gr-pasok', 'PASOK – KINAL', 'PASOK', 'GR', 'SD', 'links', 'PASOK_–_Movement_for_Change', [-30, 10, -60, -30, 0, -10, -20, -30, -60, -20, 40, 60], 'Sozialdemokratisch');
  Y('gr-kke', 'Kommounistiko Komma Elladas', 'KKE', 'GR', 'NI', 'radlinks', 'Communist_Party_of_Greece', [-100, 60, 90, 0, 40, 40, 40, -80, 90, -60, 0, -80], 'Marxistisch-leninistisch');
  Y('gr-el', 'Elliniki Lysi', 'EL', 'GR', 'ECR', 'rechtsaussen', 'Greek_Solution', [10, 70, 70, 90, 95, 95, 50, 90, 40, -40, -70, -30], 'Nationalistisch, orthodox');
  Y('gr-pe', 'Plefsi Eleftherias', 'PE', 'GR', 'NI', 'links', 'Course_of_Freedom', [-60, -10, 60, -30, 40, 20, -40, -30, 60, -20, -70, -60], 'Linkspopulistisch, souveränistisch');
  Y('gr-gd', 'Chrysi Avgi', 'XA', 'GR', null, 'rechtsaussen', 'Golden_Dawn_(Greece)', [-20, 95, 90, 90, 100, 100, 40, 80, 80, -80, -20, -90], 'Neonazistisch (2020 als kriminelle Vereinigung verurteilt)', true);
  Y('cy-disy', 'Dimokratikos Synagermos', 'DISY', 'CY', 'EPP', 'rechts', 'Democratic_Rally', [40, 30, -60, 30, 40, 50, 20, 50, -50, -40, 40, 60], 'Liberalkonservativ');
  Y('cy-akel', 'AKEL', 'AKEL', 'CY', 'LEFT', 'radlinks', 'Progressive_Party_of_Working_People', [-75, 20, 0, -20, 0, -20, 0, -60, 60, -40, 0, 0], 'Kommunistisch');
  Y('cy-elam', 'ELAM', 'ELAM', 'CY', 'ECR', 'rechtsaussen', 'ELAM_(Cyprus)', [10, 70, 60, 80, 95, 100, 50, 80, 30, -60, -50, -50], 'Nationalistisch');
  Y('mt-pl', 'Partit Laburista', 'PL', 'MT', 'SD', 'links', 'Labour_Party_(Malta)', [-20, 30, -50, -20, 20, 40, 20, 30, 30, -60, 40, 60], 'Sozialdemokratisch');
  Y('mt-pn', 'Partit Nazzjonalista', 'PN', 'MT', 'EPP', 'rechts', 'Nationalist_Party_(Malta)', [30, 30, -60, 40, 20, 40, 20, 70, -20, -40, 40, 70], 'Christdemokratisch');

  /* Baltikum */
  Y('ee-ref', 'Eesti Reformierakond', 'Reform', 'EE', 'RE', 'mitte', 'Estonian_Reform_Party', [65, 20, -60, -30, 10, 30, 20, -40, -100, 0, 50, 60], 'Wirtschaftsliberal');
  Y('ee-isamaa', 'Isamaa', 'Isamaa', 'EE', 'EPP', 'rechts', 'Isamaa', [40, 40, 10, 50, 70, 70, 30, 20, -100, 0, 30, 50], 'Nationalkonservativ');
  Y('ee-ekre', 'Eesti Konservatiivne Rahvaerakond', 'EKRE', 'EE', 'ESN', 'rechtsaussen', 'Conservative_People%27s_Party_of_Estonia', [20, 60, 80, 70, 95, 100, 50, 30, -60, -10, -70, -40], 'Nationalkonservativ, rechtspopulistisch');
  Y('ee-kesk', 'Eesti Keskerakond', 'Kesk', 'EE', 'RE', 'mitte', 'Estonian_Centre_Party', [-20, 20, -20, 20, 0, 10, 0, 0, -30, 10, 10, 50], 'Zentristisch, populistisch');
  Y('lv-jv', 'Jaunā Vienotība', 'JV', 'LV', 'EPP', 'rechts', 'New_Unity', [30, 20, -60, 0, 30, 40, 10, 10, -100, 0, 50, 60], 'Liberalkonservativ');
  Y('lv-na', 'Nacionālā apvienība', 'NA', 'LV', 'ECR', 'rechts', 'National_Alliance_(Latvia)', [20, 50, 30, 60, 90, 80, 30, 40, -100, -20, -20, 20], 'Nationalkonservativ');
  Y('lv-stab', 'Stabilitātei!', 'S!', 'LV', 'ESN', 'rechtsaussen', 'For_Stability!', [0, 40, 30, 50, 0, 60, 30, 40, 60, -20, -60, 0], 'Populistisch, russischsprachige Wähler');
  Y('lt-lsdp', 'Lietuvos socialdemokratų partija', 'LSDP', 'LT', 'SD', 'links', 'Social_Democratic_Party_of_Lithuania', [-30, 10, -50, -20, 10, 20, -20, -10, -90, 0, 30, 60], 'Sozialdemokratisch');
  Y('lt-tslkd', 'Tėvynės sąjunga', 'TS-LKD', 'LT', 'EPP', 'rechts', 'Homeland_Union', [40, 30, -50, 30, 50, 40, 20, 40, -100, -20, 40, 60], 'Christdemokratisch, konservativ');
  Y('lt-na', 'Nemuno aušra', 'NA', 'LT', 'NI', 'rechtsaussen', 'Dawn_of_Nemunas', [-10, 50, 50, 60, 70, 70, 30, 40, -20, -20, -80, -30], 'Rechtspopulistisch');

  /* Kroatien & Slowenien */
  Y('hr-hdz', 'Hrvatska demokratska zajednica', 'HDZ', 'HR', 'EPP', 'rechts', 'Croatian_Democratic_Union', [25, 35, -50, 50, 40, 50, 20, 70, -70, -20, 40, 60], 'Christdemokratisch, konservativ');
  Y('hr-sdp', 'Socijaldemokratska partija Hrvatske', 'SDP', 'HR', 'SD', 'links', 'Social_Democratic_Party_of_Croatia', [-35, 0, -60, -40, -20, -20, -20, -40, -60, 0, 30, 50], 'Sozialdemokratisch');
  Y('hr-mozemo', 'Možemo!', 'Možemo', 'HR', 'GREEN', 'gruen', 'We_Can!_(Croatia)', [-55, -30, -60, -70, -40, -50, -80, -60, -30, 30, -30, 0], 'Grün-links');
  Y('hr-dp', 'Domovinski pokret', 'DP', 'HR', 'ECR', 'rechtsaussen', 'Homeland_Movement', [20, 50, 50, 80, 85, 80, 40, 80, -40, -30, -50, -20], 'Nationalkonservativ');
  Y('hr-ustasa', 'Ustascha-Bewegung', 'Ustaše', 'HR', null, 'rechtsaussen', 'Ustaše', [0, 100, 70, 90, 100, 100, 30, 90, 80, -90, 20, -90], 'Faschistisch (1929–1945)', true);
  Y('si-sds', 'Slovenska demokratska stranka', 'SDS', 'SI', 'EPP', 'rechts', 'Slovenian_Democratic_Party', [30, 60, 30, 70, 80, 90, 50, 60, -80, -30, -50, -20], 'Nationalkonservativ, rechtspopulistisch');
  Y('si-gs', 'Gibanje Svoboda', 'GS', 'SI', 'RE', 'mitte', 'Freedom_Movement', [-30, 0, -60, -50, -30, -20, -50, -50, -40, 0, 20, 40], 'Grünliberal, Mitte-links');

  /* Westbalkan, Osteuropa, Türkei */
  Y('rs-sns', 'Srpska napredna stranka', 'SNS', 'RS', 'NONEU', 'rechts', 'Serbian_Progressive_Party', [0, 70, 0, 50, 80, 60, 60, 50, 60, -60, -30, 10], 'Nationalkonservativ, populistisch');
  Y('al-ps', 'Partia Socialiste e Shqipërisë', 'PS', 'AL', 'NONEU', 'links', 'Socialist_Party_of_Albania', [10, 40, -70, -20, 20, 10, 10, -50, -80, -20, 30, 30], 'Sozialdemokratisch, proeuropäisch');
  Y('ua-sn', 'Sluha narodu', 'SN', 'UA', 'NONEU', 'mitte', 'Servant_of_the_People_(political_party)', [30, 40, -80, -10, 50, 30, 20, 0, -100, -20, -30, 20], 'Zentristisch, proeuropäisch');
  Y('ua-es', 'Jewropejska Solidarnist', 'YeS', 'UA', 'NONEU', 'rechts', 'European_Solidarity', [30, 40, -80, 20, 70, 30, 20, 30, -100, -20, 20, 30], 'Liberalkonservativ, proeuropäisch');
  Y('ge-gd', 'Georgischer Traum', 'GD', 'GE', 'NONEU', 'rechts', 'Georgian_Dream', [0, 60, 40, 70, 60, 60, 40, 80, 70, -50, -20, 10], 'Nationalkonservativ, zunehmend autoritär');
  Y('tr-akp', 'Adalet ve Kalkınma Partisi', 'AKP', 'TR', 'NONEU', 'rechts', 'Justice_and_Development_Party_(Turkey)', [10, 85, 30, 80, 85, 40, 60, 85, 60, -70, -50, -20], 'Islamisch-konservativ');
  Y('tr-chp', 'Cumhuriyet Halk Partisi', 'CHP', 'TR', 'NONEU', 'links', 'Republican_People%27s_Party', [-30, 20, -40, -30, 50, 40, 20, -80, -30, -60, 20, 40], 'Kemalistisch, sozialdemokratisch');
  Y('ru-er', 'Einiges Russland', 'ER', 'RU', 'NONEU', 'rechtsaussen', 'United_Russia', [10, 90, 100, 80, 90, 60, 80, 60, 100, -90, 60, 30], 'Staatspartei, nationalkonservativ');
  Y('su-kpdsu', 'Kommunistische Partei der Sowjetunion', 'KPdSU', 'RU', null, 'radlinks', 'Communist_Party_of_the_Soviet_Union', [-100, 95, 70, 10, 40, 60, 80, -90, 100, -90, 60, -60], 'Staatspartei der UdSSR (1912–1991)', true);

  /* ---------- Ergänzungen: Baltikum ---------- */
  Y('ee-e200', 'Eesti 200', 'E200', 'EE', 'RE', 'mitte', 'Estonia_200', [45, 0, -70, -50, -10, 30, -20, -40, -100, 10, 30, 40], 'Liberal, proeuropäisch');
  Y('ee-sde', 'Sotsiaaldemokraatlik Erakond', 'SDE', 'EE', 'SD', 'links', 'Social_Democratic_Party_(Estonia)', [-25, 0, -60, -40, 20, 20, -30, -40, -100, 0, 40, 60], 'Sozialdemokratisch');
  Y('ee-parempoolsed', 'Parempoolsed', 'Parempoolsed', 'EE', 'NI', 'rechts', 'Parempoolsed', [60, 10, -40, 0, 40, 50, 10, -20, -100, 0, 40, 40], 'Liberalkonservativ');
  Y('lv-prog', 'Progresīvie', 'PRO', 'LV', 'SD', 'links', 'The_Progressives_(Latvia)', [-30, -10, -70, -60, 0, 0, -60, -50, -100, 0, 30, 40], 'Sozialdemokratisch, grün-progressiv');
  Y('lv-zzs', 'Zaļo un Zemnieku savienība', 'ZZS', 'LV', 'RE', 'mitte', 'Union_of_Greens_and_Farmers', [-10, 30, 0, 40, 50, 50, -10, 30, -60, 40, 0, 60], 'Agrarisch, konservativ-grün');
  Y('lv-lpv', 'Latvija pirmajā vietā', 'LPV', 'LV', 'ECR', 'rechts', 'Latvia_First', [30, 50, 40, 60, 50, 60, 30, 50, -40, 0, -60, 0], 'Rechtspopulistisch, sozialkonservativ');
  Y('lv-as', 'Apvienotais saraksts', 'AS', 'LV', 'ECR', 'rechts', 'United_List_(Latvia)', [20, 30, 0, 30, 50, 50, 30, 20, -90, 40, 10, 40], 'Konservativ, regional');
  Y('lt-ls', 'Liberalų sąjūdis', 'LS', 'LT', 'RE', 'mitte', 'Liberals%27_Movement_(Lithuania)', [50, -20, -70, -50, 10, 20, 0, -40, -100, 0, 30, 50], 'Liberal');
  Y('lt-lvzs', 'Lietuvos valstiečių ir žaliųjų sąjunga', 'LVŽS', 'LT', 'ECR', 'rechts', 'Lithuanian_Farmers_and_Greens_Union', [-30, 40, 30, 60, 50, 60, 0, 60, -60, 0, -30, 20], 'Agrarisch, sozialkonservativ');
  Y('lt-lp', 'Laisvės partija', 'LP', 'LT', 'RE', 'mitte', 'Freedom_Party_(Lithuania)', [40, -50, -70, -80, -20, 0, -20, -60, -100, 0, 20, 30], 'Linksliberal');
  Y('lt-dv', 'Demokratai „Vardan Lietuvos"', 'DVL', 'LT', 'RE', 'mitte', 'Union_of_Democrats_%22For_Lithuania%22', [0, 20, -40, 10, 30, 30, 0, 20, -90, 0, 20, 60], 'Zentristisch');
  Y('lt-awpl', 'Wahlaktion der Polen in Litauen', 'LLRA', 'LT', 'ECR', 'regional', 'Electoral_Action_of_Poles_in_Lithuania_–_Christian_Families_Alliance', [-10, 40, 20, 80, 10, 40, 0, 90, -40, 90, 10, 60], 'Christlich-konservativ, polnische Minderheit');

  /* ---------- Ergänzungen: Skandinavien & Island ---------- */
  Y('dk-k', 'Det Konservative Folkeparti', 'K', 'DK', 'EPP', 'rechts', 'Conservative_People%27s_Party_(Denmark)', [55, 40, -20, 30, 40, 70, 20, 20, -90, 0, 50, 70], 'Konservativ');
  Y('dk-alt', 'Alternativet', 'ALT', 'DK', 'GREEN', 'gruen', 'The_Alternative_(Denmark)', [-50, -30, -60, -70, -60, -60, -100, -60, -40, 20, -40, 10], 'Grün, Postwachstum');
  Y('fi-kd', 'Kristillisdemokraatit', 'KD', 'FI', 'EPP', 'rechts', 'Christian_Democrats_(Finland)', [10, 30, -20, 70, 30, 40, 0, 90, -90, 10, 40, 70], 'Christdemokratisch');
  Y('fi-liike', 'Liike Nyt', 'Liik', 'FI', 'NI', 'libertaer', 'Movement_Now', [70, 0, 30, 20, 40, 60, 40, 0, -80, 10, -60, 0], 'Wirtschaftsliberal, populistisch');
  Y('no-v', 'Venstre', 'V', 'NO', 'NONEU', 'mitte', 'Liberal_Party_(Norway)', [30, -20, -60, -50, -40, -40, -60, -40, -80, 30, 30, 60], 'Sozialliberal');
  Y('is-b', 'Framsóknarflokkurinn', 'B', 'IS', 'NONEU', 'mitte', 'Progressive_Party_(Iceland)', [10, 20, 60, 20, 40, 40, 30, 10, -50, 30, 10, 70], 'Agrarisch-zentristisch');
  Y('is-v', 'Vinstrihreyfingin – grænt framboð', 'VG', 'IS', 'NONEU', 'gruen', 'Left-Green_Movement', [-60, -20, 40, -60, -20, -40, -80, -60, 40, 20, 0, 40], 'Grün-sozialistisch');
  Y('is-c', 'Viðreisn', 'C', 'IS', 'NONEU', 'mitte', 'Viðreisn', [40, -20, -70, -40, -30, -20, -20, -40, -70, 0, 30, 60], 'Liberal, proeuropäisch');
  Y('is-f', 'Flokkur fólksins', 'F', 'IS', 'NONEU', 'links', 'People%27s_Party_(Iceland)', [-40, 30, 60, 30, 40, 60, 20, 20, -30, 0, -60, 30], 'Sozialpopulistisch');
  Y('is-m', 'Miðflokkurinn', 'M', 'IS', 'NONEU', 'rechts', 'Centre_Party_(Iceland)', [20, 40, 80, 40, 60, 70, 40, 20, -40, 20, -50, 20], 'Nationalkonservativ, populistisch');
  Y('is-p', 'Píratar', 'P', 'IS', 'NONEU', 'mitte', 'Pirate_Party_(Iceland)', [-10, -80, -40, -70, -50, -40, -40, -70, -20, 30, -80, 0], 'Piratenpartei, Basisdemokratie');

  /* ---------- Ergänzungen: Balkan & Südosteuropa ---------- */
  Y('si-sd', 'Socialni demokrati', 'SD', 'SI', 'SD', 'links', 'Social_Democrats_(Slovenia)', [-35, 0, -60, -40, -20, -20, -30, -40, -50, 0, 30, 50], 'Sozialdemokratisch');
  Y('si-levica', 'Levica', 'Levica', 'SI', 'LEFT', 'radlinks', 'The_Left_(Slovenia)', [-80, -30, 0, -70, -40, -60, -80, -80, 50, 10, -40, -40], 'Demokratisch-sozialistisch');
  Y('si-nsi', 'Nova Slovenija', 'NSi', 'SI', 'EPP', 'rechts', 'New_Slovenia', [30, 30, -50, 60, 40, 50, 10, 80, -70, 0, 30, 60], 'Christdemokratisch');
  Y('hr-most', 'Most', 'Most', 'HR', 'ECR', 'rechts', 'The_Bridge_(Croatia)', [10, 30, 10, 60, 60, 60, 10, 60, -40, 30, -60, 0], 'Konservativ, Anti-Establishment');
  Y('rs-sps', 'Socijalistička partija Srbije', 'SPS', 'RS', 'NONEU', 'links', 'Socialist_Party_of_Serbia', [-30, 60, 20, 40, 70, 40, 50, 40, 70, -50, 0, 20], 'Sozialistisch-national');
  Y('rs-ssp', 'Stranka slobode i pravde', 'SSP', 'RS', 'NONEU', 'mitte', 'Party_of_Freedom_and_Justice', [10, 0, -60, -20, 30, 20, -20, 10, -50, 0, -10, 20], 'Proeuropäisch, Mitte-links');
  Y('rs-zlf', 'Zeleno-levi front', 'ZLF', 'RS', 'NONEU', 'gruen', 'Green–Left_Front', [-55, -30, -50, -60, -10, -30, -80, -50, 0, 30, -40, -20], 'Grün-links, Bürgerbewegung');
  Y('rs-srs', 'Srpska radikalna stranka', 'SRS', 'RS', 'NONEU', 'rechtsaussen', 'Serbian_Radical_Party', [0, 80, 90, 70, 100, 80, 40, 70, 100, -60, -40, -40], 'Ultranationalistisch, prorussisch');
  Y('ba-sda', 'Stranka demokratske akcije', 'SDA', 'BA', 'NONEU', 'rechts', 'Party_of_Democratic_Action', [0, 40, -50, 50, 40, 20, 10, 80, -60, -60, 10, 40], 'Bosniakisch-konservativ');
  Y('ba-snsd', 'Savez nezavisnih socijaldemokrata', 'SNSD', 'BA', 'NONEU', 'rechtsaussen', 'Alliance_of_Independent_Social_Democrats', [-10, 70, 40, 50, 90, 50, 30, 70, 80, 100, -10, 0], 'Serbisch-nationalistisch, separatistisch');
  Y('ba-hdzbih', 'HDZ Bosne i Hercegovine', 'HDZ BiH', 'BA', 'NONEU', 'rechts', 'Croatian_Democratic_Union_of_Bosnia_and_Herzegovina', [10, 40, -40, 60, 80, 40, 10, 80, -50, 90, 10, 30], 'Kroatisch-konservativ');
  Y('ba-sdp', 'Socijaldemokratska partija BiH', 'SDP BiH', 'BA', 'NONEU', 'links', 'Social_Democratic_Party_of_Bosnia_and_Herzegovina', [-35, 10, -70, -30, -40, 0, -20, -40, -70, -70, 30, 50], 'Sozialdemokratisch, multiethnisch');
  Y('me-pes', 'Pokret Evropa sad!', 'PES', 'ME', 'NONEU', 'mitte', 'Europe_Now!', [30, 10, -70, -10, 10, 20, 0, 10, -60, -20, -20, 30], 'Zentristisch, proeuropäisch');
  Y('me-dps', 'Demokratska partija socijalista', 'DPS', 'ME', 'NONEU', 'links', 'Democratic_Party_of_Socialists_of_Montenegro', [0, 40, -70, -20, 40, 20, 20, -20, -90, -40, 30, 40], 'Sozialdemokratisch, montenegrinisch-national');
  Y('mk-vmro', 'VMRO-DPMNE', 'VMRO', 'MK', 'NONEU', 'rechts', 'VMRO-DPMNE', [20, 50, -20, 60, 80, 50, 40, 70, -40, -60, -10, 20], 'Nationalkonservativ');
  Y('mk-sdsm', 'Socijaldemokratski sojuz na Makedonija', 'SDSM', 'MK', 'NONEU', 'links', 'Social_Democratic_Union_of_Macedonia', [-20, 10, -70, -30, 0, 0, -20, -30, -80, -30, 30, 50], 'Sozialdemokratisch, proeuropäisch');
  Y('mk-dui', 'Demokratische Union für Integration', 'DUI', 'MK', 'NONEU', 'regional', 'Democratic_Union_for_Integration', [0, 30, -70, 30, 20, 0, 10, 40, -80, 90, 20, 40], 'Albanische Minderheit, proeuropäisch');
  Y('al-pd', 'Partia Demokratike e Shqipërisë', 'PD', 'AL', 'NONEU', 'rechts', 'Democratic_Party_of_Albania', [40, 30, -70, 30, 40, 20, 30, 10, -90, -30, -20, 20], 'Konservativ');
  Y('xk-vv', 'Lëvizja Vetëvendosje', 'VV', 'XK', 'NONEU', 'links', 'Vetëvendosje', [-40, 20, -60, -10, 80, 10, 0, -20, -80, -50, -40, -30], 'Linksnationalistisch');
  Y('xk-ldk', 'Lidhja Demokratike e Kosovës', 'LDK', 'XK', 'NONEU', 'rechts', 'Democratic_League_of_Kosovo', [20, 20, -80, 20, 60, 10, 10, 20, -90, -30, 10, 50], 'Mitte-rechts, proeuropäisch');
  Y('xk-pdk', 'Partia Demokratike e Kosovës', 'PDK', 'XK', 'NONEU', 'rechts', 'Democratic_Party_of_Kosovo', [10, 40, -70, 20, 70, 10, 20, 10, -90, -40, 0, 30], 'Mitte-rechts');
  Y('bg-itn', 'Ima takaw narod', 'ITN', 'BG', 'ECR', 'rechts', 'There_Is_Such_a_People', [20, 30, -10, 30, 50, 50, 20, 30, 0, -20, -60, 0], 'Populistisch');
  Y('gr-niki', 'Niki', 'Niki', 'GR', 'NI', 'rechtsaussen', 'Victory_(Greek_political_party)', [0, 60, 40, 95, 90, 90, 40, 100, 50, -30, -40, -10], 'Orthodox-nationalistisch');
  Y('cy-diko', 'Dimokratiko Komma', 'DIKO', 'CY', 'SD', 'mitte', 'Democratic_Party_(Cyprus)', [-10, 30, -30, 40, 60, 50, 10, 70, 0, -50, 30, 50], 'Zentristisch, national');
  Y('yu-skj', 'Bund der Kommunisten Jugoslawiens', 'SKJ', 'RS', null, 'radlinks', 'League_of_Communists_of_Yugoslavia', [-70, 80, null, -10, -30, 20, 50, -90, 50, 40, 30, -50], 'Titoistisch (1919–1990)', true);
  Y('al-pps', 'Partei der Arbeit Albaniens', 'PPSh', 'AL', null, 'radlinks', 'Party_of_Labour_of_Albania', [-100, 100, 100, 30, 70, 90, 70, -100, 100, -100, 60, -90], 'Stalinistisch-hoxhaistisch (1941–1991)', true);

  /* Fraktionen des Europäischen Parlaments */
  const G = (id, name, short, wiki, v, ideo) => L.push({ id, type: 'party', name, short, cc: 'EU', ep: short, fam: 'eu', wiki, v, ideo, group: true });
  G('ep-epp', 'Europäische Volkspartei', 'EPP', 'European_People%27s_Party_Group', [30, 30, -60, 30, 15, 40, 20, 40, -80, 0, 50, 70], 'Christdemokratisch, Mitte-rechts – größte Fraktion');
  G('ep-sd', 'Progressive Allianz der Sozialdemokraten', 'SD', 'Progressive_Alliance_of_Socialists_and_Democrats', [-35, 0, -70, -45, -30, -25, -40, -45, -60, 0, 40, 60], 'Sozialdemokratisch');
  G('ep-renew', 'Renew Europe', 'RE', 'Renew_Europe', [35, 0, -80, -40, -30, 0, -10, -50, -80, 0, 50, 60], 'Liberal, zentristisch');
  G('ep-greens', 'Die Grünen/Europäische Freie Allianz', 'GREEN', 'Greens–European_Free_Alliance', [-40, -25, -75, -70, -60, -60, -90, -60, -60, 40, 10, 30], 'Grün und regionalistisch');
  G('ep-ecr', 'Europäische Konservative und Reformer', 'ECR', 'European_Conservatives_and_Reformists_Group', [35, 45, 50, 60, 60, 80, 50, 50, -60, -10, 0, 30], 'Nationalkonservativ, euroskeptisch');
  G('ep-pfe', 'Patrioten für Europa', 'PFE', 'Patriots_for_Europe', [10, 60, 75, 65, 85, 95, 60, 30, 40, -20, -70, -30], 'Rechtspopulistisch, souveränistisch');
  G('ep-esn', 'Europa der souveränen Nationen', 'ESN', 'Europe_of_Sovereign_Nations_Group', [20, 65, 90, 70, 95, 100, 60, 20, 60, -10, -70, -50], 'Rechtsnationalistisch');
  G('ep-left', 'Die Linke im Europäischen Parlament', 'LEFT', 'The_Left_in_the_European_Parliament', [-80, -15, 0, -65, -40, -55, -60, -75, 50, 0, -30, -40], 'Sozialistisch, links');

  AG.PARTIES = L;
})();

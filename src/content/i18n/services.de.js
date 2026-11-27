/* Leistungsseiten – Deutsch. Gleiche Struktur wie die italienischen Inhalte in ../services.js */
export default {
  hosting: {
    slug: 'hosting-und-server',
    title: 'Hosting und Server',
    metaTitle: 'Managed Hosting und Server für Unternehmen | Sodano Consulting',
    metaDesc: 'Managed Hosting und Server für Websites, Webanwendungen und Unternehmenssoftware: Einrichtung, Updates, Sicherheit und Betreuung durch das Team, das die Software entwickelt.',
    lead: 'Wir hosten und betreuen Websites, Webanwendungen und Unternehmenssoftware auf Servern, die für Ihr Projekt konfiguriert sind. Sie kümmern sich um Ihre Arbeit, wir um die Technik.',
    intro: [
      'Eine Website oder eine Unternehmensanwendung läuft nur dann gut, wenn ihre Umgebung gepflegt wird: aktuelle Versionen, gültige Zertifikate, passende Ressourcen und Sicherheitsprüfungen. Wenn etwas ausfällt, zählt, wer eingreift und wie gut er das Projekt kennt.',
      'Unser Vorteil: Hosting und Entwicklung liegen im selben Team. Wer den Server betreut, kennt die Anwendungen darauf, und wer sie entwickelt, weiß, wie sie konfiguriert sind. Kein Hin und Her zwischen verschiedenen Dienstleistern.'
    ],
    includes: [
      { t: 'Hosting für Websites und Webanwendungen', d: 'Speicherplatz, Domains, SSL/TLS-Zertifikate und eine Umgebung, die auf Ihre Technologien abgestimmt ist.' },
      { t: 'Anwendungsumgebungen', d: 'PHP, Node.js und Laravel mit Deployment aus Git-Repositorys: Jede Code-Änderung geht geordnet online.' },
      { t: 'Updates und Sicherheit', d: 'Systemwartung, Web Application Firewall und Bedrohungsscans auf dem Server.' },
      { t: 'Backup', d: 'Backup-Pläne, abgestimmt darauf, wie wichtig Ihre Daten sind und wie oft sie sich ändern.' },
      { t: 'Umzüge', d: 'Ist Ihr Projekt bereits anderswo online, planen wir den Umzug gemeinsam und halten Ausfallzeiten so kurz wie möglich.' }
    ],
    approach: [
      'Wir gehen davon aus, was auf dem Server laufen soll: Eine Unternehmenswebsite, ein Onlineshop, eine Software mit vielen Nutzern oder eine Anwendung, die Daten mit anderen Systemen austauscht, haben sehr unterschiedliche Anforderungen. Danach wählen wir Umgebung und Ressourcen – ohne Überdimensionierung und ohne Engpässe.',
      'Nach dem Start bleiben wir Ihr Ansprechpartner: Updates, Kontrollen und Eingriffe laufen über uns, von unseren Büros in Valenzano (Bari) und Rom aus.'
    ],
    tech: [
      { group: 'Sprachen und Laufzeitumgebungen', items: [{ name: 'PHP 8.4' }, { name: 'Node.js 20, 22 und 24' }] },
      { group: 'Frameworks und Werkzeuge', items: [{ name: 'Laravel' }, { name: 'Composer' }, { name: 'Git' }] },
      { group: 'Datenbanken', items: [{ name: 'MySQL / MariaDB' }, { name: 'PostgreSQL' }] },
      { group: 'Automatisierung', items: [{ name: 'n8n' }] },
      { group: 'Sicherheit', items: [{ name: 'SSL/TLS-Zertifikate' }, { name: 'Web Application Firewall' }, { name: 'Imunify' }] }
    ],
    faq: [
      { q: 'Kann ich eine bereits laufende Website zu Ihnen umziehen?', a: 'Ja. Zuerst prüfen wir, wie sie aufgebaut ist und wo sie heute liegt, dann vereinbaren wir Zeitpunkt und Vorgehen, damit die Unterbrechung möglichst kurz bleibt.' },
      { q: 'Meine Software nutzt Laravel oder Node.js: Können Sie sie hosten?', a: 'Beides gehört zu den unterstützten Technologien. Hat das Projekt besondere Anforderungen, etwa dauerhaft laufende Dienste oder viele Ressourcen, besprechen wir das vorab, um die passende Konfiguration zu wählen.' },
      { q: 'Wer greift ein, wenn etwas nicht funktioniert?', a: 'Unser Team – dieselben Leute, die den Server kennen und, wenn wir sie entwickelt haben, auch Ihre Anwendung.' },
      { q: 'Was kostet das?', a: 'Das hängt davon ab, was auf dem Server laufen soll und welchen Betreuungsumfang Sie brauchen. Nach einem ersten Gespräch erstellen wir ein individuelles Angebot.' }
    ]
  },
  webapp: {
    slug: 'web-apps-und-verwaltungssoftware',
    sig: {
      kind: 'beforeAfter',
      title: 'Von so zu so',
      beforeLabel: 'Vorher',
      before: ['Tabellen, die per E-Mail verschickt werden', 'Daten, die von Hand von einem Programm ins andere kopiert werden', 'Jeder mit seiner eigenen Version der Zahlen', 'Berichte, die am Monatsende zusammengestellt werden'],
      afterLabel: 'Mit maßgeschneiderter Software',
      after: ['Ein Ort für alle Daten und Vorgänge', 'Informationen fließen automatisch zwischen den Systemen', 'Alle sehen dieselben, aktuellen Daten', 'Dashboards jederzeit bereit']
    },
    title: 'Web-Apps und Verwaltungssoftware',
    metaTitle: 'Individuelle Web-Apps und Unternehmenssoftware | Sodano Consulting',
    metaDesc: 'Maßgeschneiderte Verwaltungssoftware und Webanwendungen für Unternehmen und öffentliche Verwaltungen: digitale Prozesse, Daten an einem Ort, Anbindung an Ihre vorhandene Software.',
    lead: 'Wir entwickeln Verwaltungssoftware und Webanwendungen, die sich nach der Arbeitsweise Ihres Unternehmens richten – nicht umgekehrt.',
    intro: [
      'Geteilte Tabellen, E-Mails zum Weiterreichen von Informationen, Programme, die nicht miteinander sprechen: Hier verlieren viele Unternehmen Zeit, und Fehler vervielfachen sich. Eine maßgeschneiderte Software bringt Prozesse und Daten an einen Ort – im Browser erreichbar, vom Büro, von zu Hause oder vom Smartphone.',
      'Wir planen sie von den Menschen aus, die täglich damit arbeiten, denn eine Software, die niemand gern benutzt, löst nichts.'
    ],
    includes: [
      { t: 'Prozessanalyse', d: 'Wir verstehen, wie Sie heute arbeiten, wo Zeit verloren geht und was sich wirklich zu automatisieren lohnt.' },
      { t: 'Individuelle Verwaltungssoftware', d: 'Stammdaten, Vorgänge, Aufträge, Buchungen, Lager oder jeder Ablauf, der für Ihr Geschäft typisch ist.' },
      { t: 'Benutzer, Rollen und Rechte', d: 'Jeder sieht und bearbeitet nur, was ihn betrifft, mit Protokollierung der Vorgänge.' },
      { t: 'Berichte und Dashboards', d: 'Die Kennzahlen, die Sie für Entscheidungen brauchen – aktuell und ohne manuelle Exporte.' },
      { t: 'Integrationen', d: 'Anbindung an Ihre vorhandene Software über APIs oder Datenaustausch.' },
      { t: 'Weiterentwicklung', d: 'Betreuung und neue Funktionen, wenn sich Ihr Unternehmen verändert.' }
    ],
    approach: [
      'Wir arbeiten in Schritten: zuerst die Funktionen, die das Hauptproblem lösen, direkt in den Händen der späteren Nutzer, dann der Rest auf Basis der Erfahrungen im echten Einsatz. So sehen Sie früh Ergebnisse, und das Projekt bleibt nah an Ihrem tatsächlichen Bedarf.',
      'Wir können die Software auch auf unseren Servern betreiben und warten, sodass Entwicklung, Hosting und Betreuung in einem Team bleiben.'
    ],
    faq: [
      { q: 'Individuelle Software oder ein fertiges Produkt?', a: 'Wenn ein bestehendes Produkt Ihre Arbeit gut abdeckt, ist es oft die bessere Wahl. Eine Individuallösung lohnt sich, wenn Ihre Prozesse speziell sind oder fertige Software Sie zu Umwegen zwingt. Nach der Analyse sagen wir es Ihnen offen.' },
      { q: 'Wem gehören die Daten?', a: 'Ihnen. Sie können sie exportieren, und auf Wunsch läuft die Software dort, wo Sie es möchten.' },
      { q: 'Lässt sich die Software mit unseren Programmen verbinden?', a: 'In den meisten Fällen ja, sofern das Programm einen Datenaustausch erlaubt. Das prüfen wir in der Analysephase.' },
      { q: 'Wie lange dauert es?', a: 'Das hängt von der Komplexität ab. Nach der Analyse erhalten Sie eine Schätzung und einen Release-Plan, beginnend mit den wichtigsten Funktionen.' }
    ]
  },
  websites: {
    slug: 'websites-und-e-commerce',
    sig: {
      kind: 'devices',
      title: 'Eine Website, jeder Bildschirm',
      text: 'Wir gestalten jede Seite so, dass sie sich selbst neu anordnet: Auf Computer, Tablet und Smartphone bleiben Inhalte lesbar und Schaltflächen griffbereit.',
      labels: ['Computer', 'Smartphone']
    },
    title: 'Websites und E-Commerce',
    metaTitle: 'Websites und Onlineshops erstellen lassen | Sodano Consulting',
    metaDesc: 'Websites und Onlineshops für Unternehmen und Verwaltungen: auf Ihre Ziele ausgerichtet, schnell, barrierearm, suchmaschinenfreundlich und einfach zu pflegen.',
    lead: 'Wir erstellen Websites und Onlineshops, die Anfragen und Verkäufe bringen sollen – nicht nur gut aussehen.',
    intro: [
      'Die Website ist oft der erste Kontakt zwischen einem Kunden und Ihrem Unternehmen. Sie muss in wenigen Sekunden zeigen, was Sie tun, auf dem Smartphone gut funktionieren, schnell laden und Besucher zu einer Anfrage oder einem Kauf führen.',
      'Deshalb beginnen wir bei Ihren Zielen: Wer soll auf die Website kommen, was soll er dort finden, und was soll er tun? Design und Technik folgen danach, im Dienst dieser Antworten.'
    ],
    includes: [
      { t: 'Unternehmens- und Behördenwebsites', d: 'Struktur, Texte und Gestaltung passend zu Ihrer Identität, in einer oder mehreren Sprachen.' },
      { t: 'E-Commerce', d: 'Katalog, Warenkorb, Zahlung und Versand, mit einer Auftragsverwaltung, die für Ihr Team einfach ist.' },
      { t: 'Geschwindigkeit und Barrierefreiheit', d: 'Schlanke Seiten, für alle lesbar und auf jedem Gerät nutzbar.' },
      { t: 'Technisches SEO', d: 'Klare Adressen, sorgfältige Titel und Beschreibungen, für Suchmaschinen lesbare Inhalte.' },
      { t: 'Datenschutz und Cookies', d: 'Datenschutzhinweise, Cookie-Einwilligung und DSGVO-konforme Kontaktformulare.' },
      { t: 'Hosting und Wartung', d: 'Wir können die Website auf unseren Servern betreiben und aktualisieren – ein Ansprechpartner für alles.' }
    ],
    approach: [
      'Bevor wir gestalten, analysieren wir Ihre Zielgruppe, den Wettbewerb und die vorhandenen Inhalte. Daraus entsteht eine Struktur, die wir gemeinsam ausarbeiten, danach folgen Design und Entwicklung. Vor dem Start testen wir die Website auf Computer und Smartphone.',
      'Nach dem Start können wir auch das Marketing übernehmen: Kampagnen, Social Media und Sichtbarkeit in Suchmaschinen.'
    ],
    faq: [
      { q: 'Kann ich die Inhalte selbst bearbeiten?', a: 'Das entscheiden wir gemeinsam, je nachdem, wie oft sie sich ändern: Für häufig aktualisierte Inhalte sehen wir ein einfach bedienbares Verwaltungssystem vor.' },
      { q: 'Funktioniert die Website auf dem Smartphone?', a: 'Ja, wir gestalten und testen sie für Bildschirme jeder Größe.' },
      { q: 'Können Sie meine bestehende Website neu machen?', a: 'Ja. Wir gehen davon aus, was an der aktuellen Website funktioniert und was nicht, und gestalten den Wechsel so, dass Sie Ihre Suchmaschinenplatzierungen nicht verlieren.' },
      { q: 'Was kostet das?', a: 'Das hängt von der Zahl der Seiten, den Sprachen und den Funktionen ab, etwa einem Onlineshop. Nach einem ersten Gespräch erstellen wir ein Angebot.' }
    ]
  },
  integrations: {
    slug: 'integrationen-und-apis',
    sig: {
      kind: 'network',
      title: 'Alle Systeme, ein Datenfluss',
      text: 'Ein Beispiel dafür, wie Daten zwischen der Software eines Unternehmens fließen können, ohne abgetippt zu werden.',
      hub: 'API',
      nodes: ['Verwaltung', 'E-Commerce', 'CRM', 'Zahlungen', 'Rechnungen', 'Partner']
    },
    title: 'Integrationen und APIs',
    metaTitle: 'Software-Integration und API-Entwicklung | Sodano Consulting',
    metaDesc: 'Wir verbinden Verwaltungssoftware, Onlineshops, CRM und externe Dienste über APIs: Daten fließen von System zu System, ohne von Hand kopiert zu werden.',
    lead: 'Wir bringen Ihre Software dazu, miteinander zu sprechen – damit Daten von einem System ins nächste fließen, ohne abgetippt zu werden.',
    intro: [
      'Bestellungen aus dem Onlineshop, die in die Verwaltungssoftware nachgetragen werden, doppelte Kontakte in CRM und Rechnungsprogramm, Berichte aus Zahlen dreier Programme: Jeder manuelle Schritt kostet Zeit und bringt Fehler.',
      'Eine gut gemachte Integration beseitigt diese Schritte. Wir nutzen die APIs Ihrer Software oder entwickeln neue, wo nötig, damit Ihre Systeme zu einem einzigen Fluss werden.'
    ],
    includes: [
      { t: 'Analyse der Datenflüsse', d: 'Wir erfassen, welche Informationen zwischen den Systemen fließen, wer sie ändert und wo Fehler entstehen.' },
      { t: 'Verbindung bestehender Software', d: 'Verwaltungssoftware, Onlineshops, CRM, Zahlungs- oder Buchungsplattformen, Dienste von Drittanbietern.' },
      { t: 'API-Entwicklung', d: 'Dokumentierte Schnittstellen, die die Daten Ihrer Software für Partner, Apps oder andere Systeme bereitstellen – mit kontrolliertem Zugriff.' },
      { t: 'Automatisierung', d: 'Wiederkehrende Aufgaben, die bei einem Ereignis von selbst starten, auch mit Werkzeugen wie n8n.' },
      { t: 'Überwachung', d: 'Kontrollen und Warnungen, um sofort zu bemerken, wenn ein Datenaustausch ausfällt.' }
    ],
    approach: [
      'Bevor wir Code schreiben, prüfen wir, was die beteiligten Systeme erlauben: welche Daten sie bereitstellen, mit welchen Grenzen und wie zuverlässig. Dann planen wir die Integration, beginnend mit dem nützlichsten Datenfluss, und testen sie mit echten Daten.',
      'Wir dokumentieren jede Verbindung, damit auch Jahre später oder bei einem Wechsel der Zuständigen klar bleibt, wie sie funktioniert.'
    ],
    faq: [
      { q: 'Lässt sich jede Software integrieren?', a: 'Das hängt davon ab, was die Software anbietet: APIs, Exporte oder Zugriff auf ihre Daten. Wir prüfen das zu Beginn und sagen Ihnen klar, was möglich ist.' },
      { q: 'Was passiert, wenn eines der Systeme nicht antwortet?', a: 'Wir gestalten Integrationen so, dass keine Daten verloren gehen und Fehler gemeldet werden, damit jemand eingreifen kann.' },
      { q: 'Können Sie eine API für unsere Partner entwickeln?', a: 'Ja: Eine dokumentierte Schnittstelle mit geschütztem Zugang ermöglicht Partnern, Daten kontrolliert zu lesen oder zu senden.' }
    ]
  },
  bi: {
    slug: 'business-intelligence-und-ki',
    sig: {
      kind: 'dashboard',
      title: 'Die wichtigen Zahlen auf einen Blick',
      text: 'Ein Dashboard führt Daten aus Verwaltungssoftware, Vertrieb und Online-Plattformen zusammen und aktualisiert sich selbst.',
      note: 'Illustratives Beispiel',
      panels: ['Umsatzentwicklung', 'Anfragen nach Kanal', 'Aufträge nach Region', 'Monatsziel']
    },
    title: 'Business Intelligence und KI',
    metaTitle: 'Business Intelligence und künstliche Intelligenz für Unternehmen | Sodano Consulting',
    metaDesc: 'Dashboards, Berichte und KI-Werkzeuge auf Basis Ihrer Unternehmensdaten – für Entscheidungen mit aktuellen Zahlen und weniger Routinearbeit.',
    lead: 'Wir machen aus den Daten, die Ihr Unternehmen bereits sammelt, klare Dashboards und KI-Werkzeuge, die Zeit sparen.',
    intro: [
      'Viele Unternehmen haben die Daten, aber nicht die Antworten: Die Informationen sind über Verwaltungssoftware, Tabellen und Online-Plattformen verstreut, und ein Überblick kostet Stunden manueller Arbeit.',
      'Mit Business Intelligence werden diese Daten gesammelt, bereinigt und in stets aktuellen Dashboards dargestellt. Künstliche Intelligenz geht einen Schritt weiter: Dokumente klassifizieren, häufige Fragen beantworten, Informationen extrahieren, Maßnahmen vorschlagen.'
    ],
    includes: [
      { t: 'Datenerfassung und -bereinigung', d: 'Wir führen Quellen zusammen, korrigieren unvollständige oder doppelte Daten und machen sie vergleichbar.' },
      { t: 'Dashboards und Berichte', d: 'Die Kennzahlen, die für Sie zählen – automatisch aktualisiert und im Browser abrufbar.' },
      { t: 'KI-Assistenten', d: 'Werkzeuge, die Fragen zu Ihren Dokumenten beantworten oder Kunden und Kollegen unterstützen.' },
      { t: 'Automatisierung von Routineaufgaben', d: 'Dokumente lesen und sortieren, Daten extrahieren, erste Antworten geben.' },
      { t: 'Verantwortungsvoller Umgang mit Daten', d: 'Achtung auf Datenschutz, Vertraulichkeit und den Ort der Datenverarbeitung.' }
    ],
    approach: [
      'Wir beginnen bei den Fragen, die Sie beantworten möchten, nicht bei den Werkzeugen. Wir ermitteln die nötigen Daten, prüfen ihre Zuverlässigkeit und bauen ein erstes Dashboard oder einen ersten Assistenten für einen konkreten Fall – messbar, bevor wir ausweiten.',
      'Bei künstlicher Intelligenz sind wir pragmatisch: Wir schlagen sie dort vor, wo sie messbar Zeit spart, und sagen Ihnen, wenn ein klassischer Prozess die bessere Wahl ist.'
    ],
    faq: [
      { q: 'Braucht man viele Daten für den Anfang?', a: 'Nein. Oft reicht es, die vorhandenen Daten zu ordnen. Der erste Schritt ist zu verstehen, welche es gibt und wie zuverlässig sie sind.' },
      { q: 'Bleiben die Unternehmensdaten vertraulich?', a: 'Das legen wir zu Beginn fest: welche Daten genutzt werden, wo sie verarbeitet werden und wer Zugriff hat – im Einklang mit der DSGVO.' },
      { q: 'Ersetzt KI die Arbeit von Menschen?', a: 'In unseren Projekten nimmt sie vor allem Routineaufgaben ab und überlässt Entscheidungen und Sonderfälle den Menschen.' }
    ]
  },
  mobile: {
    slug: 'mobile-apps',
    sig: {
      kind: 'phones',
      title: 'Für den täglichen Einsatz gemacht',
      text: 'Wenige Aktionen – die, die wirklich zählen – direkt unter dem Daumen.',
      screens: [{ label: 'Buchungen', ui: 'calendar' }, { label: 'Kundenbereich', ui: 'list' }, { label: 'Außendienst', ui: 'check' }]
    },
    title: 'Mobile Apps',
    metaTitle: 'App-Entwicklung für iOS und Android | Sodano Consulting',
    metaDesc: 'Apps für iOS und Android für Kunden und Mitarbeitende: auf die echte Nutzung ausgelegt, mit Ihren Systemen verbunden und in den Stores veröffentlicht.',
    lead: 'Wir entwickeln Apps für iOS und Android, die für ihre tatsächlichen Nutzer gedacht und mit den Systemen Ihres Unternehmens verbunden sind.',
    intro: [
      'Eine App lohnt sich, wenn sie etwas bietet, was eine Website nicht kann: ein häufig genutzter Dienst, Benachrichtigungen, Funktionen mit Kamera oder Standort, Arbeit im Außendienst auch bei schwacher Verbindung.',
      'Deshalb klären wir zuerst, ob die App wirklich gebraucht wird, für wen und wofür. Lautet die Antwort ja, gestalten wir sie um die wenigen Aktionen, die zählen, und verbinden sie mit Ihren Daten.'
    ],
    includes: [
      { t: 'Apps für Kunden', d: 'Buchungen, Bestellungen, geschützte Bereiche, Treueprogramme, Benachrichtigungen.' },
      { t: 'Apps für Mitarbeitende', d: 'Werkzeuge für den Außendienst: Berichte, Lieferungen, Kontrollen, Fotos und Unterschriften.' },
      { t: 'Anbindung an Ihre Systeme', d: 'Die App liest und schreibt Daten Ihrer Verwaltungssoftware über APIs.' },
      { t: 'Veröffentlichung in den Stores', d: 'Vorbereitung und Einreichung im App Store und bei Google Play.' },
      { t: 'Updates', d: 'Neue Versionen und Anpassungen an Änderungen von iOS und Android.' }
    ],
    approach: [
      'Wir gestalten die wichtigsten Bildschirme und testen sie mit den künftigen Nutzern, bevor wir die App vollständig entwickeln. Dann veröffentlichen wir eine erste Version mit den wesentlichen Funktionen und verbessern sie anhand der echten Nutzung.',
      'Gibt es bereits eine Verwaltungssoftware – von uns oder von anderen entwickelt –, stützt sich die App darauf: keine doppelten Daten.'
    ],
    faq: [
      { q: 'Brauchen wir eine App oder reicht die Website?', a: 'Für viele Dienste genügt eine gut gemachte, mobil nutzbare Website. Das sagen wir Ihnen vor dem Start, auch wenn die Antwort lautet, dass Sie keine App brauchen.' },
      { q: 'Läuft die App auf iPhone und Android?', a: 'Ja, wir entwickeln sie für beide Plattformen.' },
      { q: 'Wer veröffentlicht die App in den Stores?', a: 'Wir übernehmen Vorbereitung und Einreichung; die Entwicklerkonten in den Stores bleiben auf Ihr Unternehmen eingetragen.' }
    ]
  },
  brand: {
    slug: 'markenidentitaet',
    sig: {
      kind: 'brandSystem',
      title: 'Ein System, nicht nur ein Logo',
      text: 'Farben, Schriften und Nutzungsregeln wirken zusammen, sodass jedes Material zum selben Unternehmen gehört.',
      note: 'Beispiel für ein Identitätssystem',
      palette: [{ name: 'Primär', hex: '#C8102E' }, { name: 'Dunkel', hex: '#16161C' }, { name: 'Neutral', hex: '#8A8580' }, { name: 'Hell', hex: '#F3EFE8' }],
      type: 'Überschriften und Text'
    },
    title: 'Markenidentität',
    metaTitle: 'Markenidentität, Logo und Corporate Design | Sodano Consulting',
    metaDesc: 'Logo, Farben, Schriften und Richtlinien für ein wiedererkennbares, einheitliches Erscheinungsbild auf Website, Social Media, Dokumenten und Drucksachen.',
    lead: 'Wir schaffen eine wiedererkennbare, einheitliche visuelle Identität – vom Logo bis zu den Richtlinien, die sie langfristig in Ordnung halten.',
    intro: [
      'Eine starke Marke ist mehr als ein schönes Logo: Sie ist das Gefühl von Stimmigkeit, das ein Kunde erlebt, wenn er von der Website zu Social Media, von einem Angebot zu einem Schild wechselt. Wenn jedes Material anders gestaltet ist, wirkt das Unternehmen kleiner und weniger verlässlich, als es ist.',
      'Wir arbeiten an der Identität ausgehend davon, wer Sie sind, wen Sie ansprechen und was Sie unterscheidet – bis zu einem System von Elementen, das jeder innerhalb und außerhalb des Unternehmens richtig anwenden kann.'
    ],
    includes: [
      { t: 'Analyse und Positionierung', d: 'Werte, Zielgruppe, Wettbewerb und Tonalität.' },
      { t: 'Logo', d: 'Ein neues Zeichen oder die Überarbeitung des bestehenden, in Varianten für jeden Einsatz.' },
      { t: 'Farben und Schriften', d: 'Eine Farbpalette und Typografie für Bildschirm und Druck.' },
      { t: 'Geschäftsausstattung', d: 'Visitenkarten, Briefpapier, Vorlagen für Dokumente und Präsentationen.' },
      { t: 'Richtlinien', d: 'Ein einfaches Handbuch, das die Anwendung von Marke und Stil erklärt.' }
    ],
    approach: [
      'Wir beginnen mit einem Gespräch über Geschichte, Ziele und Kunden des Unternehmens. Wir schlagen wenige, gut begründete Richtungen vor, entwickeln sie mit Ihnen weiter und prüfen das Ergebnis an echten Anwendungen: Website, Social Media, Dokumente.',
      'Anschließend wird die Identität zur Grundlage der Marketingarbeit: Website, Kampagnen und Inhalte folgen denselben Regeln.'
    ],
    faq: [
      { q: 'Können Sie unser Logo modernisieren, ohne es völlig zu verändern?', a: 'Ja. Eine Überarbeitung bewahrt oft, was Kunden wiedererkennen, und korrigiert, was nicht mehr funktioniert, etwa die Lesbarkeit in kleinen Größen.' },
      { q: 'Erhalten wir die Logodateien?', a: 'Ja, in Formaten für Web und Druck, zusammen mit den Richtlinien.' },
      { q: 'Was brauchen Sie von uns?', a: 'Etwas Zeit, um uns das Unternehmen und seine Kunden zu erklären, und eine Ansprechperson für die Entscheidungen.' }
    ]
  },
  social: {
    slug: 'social-media-management',
    sig: {
      kind: 'calendar',
      title: 'Eine Woche Redaktionsplan',
      text: 'Inhalte werden vor der Veröffentlichung geplant und freigegeben.',
      note: 'Illustratives Beispiel',
      days: ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'],
      posts: [
        { day: 0, type: 'Post', label: 'Produktneuheit' },
        { day: 1, type: 'Story', label: 'Hinter den Kulissen' },
        { day: 2, type: 'Video', label: 'So funktioniert es' },
        { day: 3, type: 'Post', label: 'Kundenbeispiel' },
        { day: 4, type: 'Story', label: 'Frage an die Community' },
        { day: 5, type: 'Video', label: 'Event der Woche' }
      ]
    },
    title: 'Social-Media-Management',
    metaTitle: 'Social-Media-Management für Unternehmen | Sodano Consulting',
    metaDesc: 'Strategie, Inhalte, Veröffentlichung und Erfolgsanalyse in sozialen Netzwerken, mit einem Redaktionsplan, der auf die Ziele Ihres Unternehmens ausgerichtet ist.',
    lead: 'Wir betreuen die Social-Media-Profile Ihres Unternehmens mit einem klaren Plan, sorgfältigen Inhalten und messbaren Ergebnissen.',
    intro: [
      'Regelmäßig zu posten ist schwer, wenn Social Media im Unternehmen an letzter Stelle steht. Das Ergebnis sind monatelang stillstehende Profile oder improvisierte Beiträge, die nichts bewirken.',
      'Wir behandeln Social Media als Arbeitskanal: klare Ziele, ein Redaktionskalender, Inhalte im Einklang mit Ihrer Markenidentität und eine regelmäßige Kontrolle dessen, was funktioniert.'
    ],
    includes: [
      { t: 'Strategie', d: 'Welche Kanäle, welche Zielgruppe und welche Ziele.' },
      { t: 'Redaktionsplan', d: 'Ein mit Ihnen vorab abgestimmter Inhaltskalender.' },
      { t: 'Content-Erstellung', d: 'Texte, Grafiken, Fotos und Videos für jede Plattform.' },
      { t: 'Veröffentlichung und Community', d: 'Profilbetreuung und Aufmerksamkeit für Kommentare und Nachrichten.' },
      { t: 'Erfolgsanalyse', d: 'Regelmäßige Berichte und Anpassungen des Plans auf Basis der Daten.' }
    ],
    approach: [
      'Wir beginnen mit einer Analyse der bestehenden Profile und des Wettbewerbs und legen dann Ziele und Plan fest. Jeden Monat teilen wir den Kalender vor der Veröffentlichung und am Ende des Zeitraums, was funktioniert hat und was wir ändern.',
      'Bei Bedarf ergänzen wir die organischen Inhalte um bezahlte Kampagnen, betreut vom selben Team.'
    ],
    faq: [
      { q: 'Auf welchen Netzwerken sollten wir präsent sein?', a: 'Das hängt davon ab, wer Ihre Kunden sind. Lieber wenige gepflegte Kanäle als viele verwaiste – das entscheiden wir gemeinsam in der Strategiephase.' },
      { q: 'Müssen wir die Beiträge freigeben?', a: 'Ja, der Redaktionsplan wird vor der Veröffentlichung geteilt.' },
      { q: 'Woran erkennen wir, dass es funktioniert?', a: 'An regelmäßigen Berichten zu Kennzahlen, die mit Ihren Zielen verknüpft sind – nicht nur an der Zahl der Likes.' }
    ]
  },
  ads: {
    slug: 'digitale-werbung-und-seo',
    sig: {
      kind: 'twoRoads',
      title: 'Zwei Wege, die zusammenwirken',
      ads: { t: 'Bezahlte Kampagnen', d: 'Bringen sofort Besucher, solange die Kampagne läuft.' },
      seo: { t: 'SEO', d: 'Wächst langsamer, doch die Platzierungen bleiben bestehen.' },
      axis: 'Zeit',
      note: 'Verlauf zur Veranschaulichung'
    },
    title: 'Digitale Werbung und SEO',
    metaTitle: 'Online-Werbung und SEO für Unternehmen | Sodano Consulting',
    metaDesc: 'Werbekampagnen auf Google und in sozialen Medien sowie Suchmaschinenoptimierung, um Menschen mit Interesse an Ihrem Angebot auf Ihre Website zu bringen.',
    lead: 'Wir bringen Menschen auf Ihre Website, die genau nach Ihrem Angebot suchen: kurzfristig mit Werbekampagnen, langfristig mit SEO.',
    intro: [
      'Eine gute Website ohne Besucher bringt keine Ergebnisse. Es gibt zwei sich ergänzende Wege, gefunden zu werden: Online-Werbung, die sofort Besucher bringt, aber nur, solange Sie dafür zahlen, und SEO, die an den natürlichen Platzierungen arbeitet und mit der Zeit wächst.',
      'Wir steuern beides gemeinsam, mit demselben Ziel: Anfragen und Verkäufe, gemessen mit verlässlichen Daten.'
    ],
    includes: [
      { t: 'Suchmaschinen-Kampagnen', d: 'Anzeigen für Menschen, die nach Ihren Produkten oder Leistungen suchen.' },
      { t: 'Social-Media-Kampagnen', d: 'Werbung für eine nach Interessen, Region oder Beruf definierte Zielgruppe.' },
      { t: 'Technisches SEO', d: 'Geschwindigkeit, Seitenstruktur, Adressen, strukturierte Daten und Indexierung.' },
      { t: 'Inhalte für SEO', d: 'Seiten und Artikel, geschrieben für die echten Suchanfragen Ihrer Kunden.' },
      { t: 'Messung', d: 'Conversion-Tracking unter Beachtung der Cookie-Einwilligung und regelmäßige Berichte.' }
    ],
    approach: [
      'Wir beginnen bei Suchanfragen und Zielgruppe: Wonach suchen Ihre potenziellen Kunden, und was ist Ihnen eine Anfrage wert? Darauf aufbauend teilen wir das Budget zwischen Werbung und SEO auf und setzen messbare Ziele.',
      'Wir kontrollieren die Ergebnisse regelmäßig und verlagern Mittel dorthin, wo sie am meisten bringen – Zahlen und Entscheidungen teilen wir mit Ihnen.'
    ],
    faq: [
      { q: 'Wann sieht man Ergebnisse?', a: 'Mit bezahlten Kampagnen innerhalb weniger Tage. SEO braucht meist einige Monate, aber die Ergebnisse bleiben auch ohne bezahlte Anzeigen bestehen.' },
      { q: 'Welches Werbebudget brauchen wir?', a: 'Das hängt von Branche und Wettbewerb ab. Wir schlagen einen tragbaren Startbetrag vor und passen ihn anhand der Ergebnisse an.' },
      { q: 'Können Sie den ersten Platz bei Google garantieren?', a: 'Nein – und seien Sie vorsichtig bei jedem, der es verspricht: Platzierungen entscheidet Google. Wir garantieren sorgfältige Arbeit und transparent gemessene Ergebnisse.' }
    ]
  },
  media: {
    slug: 'foto-video-und-drohnenaufnahmen',
    sig: {
      kind: 'shotTypes',
      title: 'Was wir aufnehmen',
      items: ['Unternehmen und Arbeitsplätze', 'Produkte', 'Menschen und Teams', 'Veranstaltungen', 'Gebäude und Baustellen von oben', 'Landschaften und Orte']
    },
    title: 'Foto, Video und Drohnenaufnahmen',
    metaTitle: 'Unternehmensfotos, Videos und Drohnenaufnahmen | Sodano Consulting',
    metaDesc: 'Fotoshootings, Unternehmensvideos und Luftaufnahmen mit Drohne für Website, Social Media, Kampagnen und Veranstaltungen.',
    lead: 'Wir erstellen Fotos, Videos und Luftaufnahmen, die Ihr Unternehmen, Ihre Produkte und Ihre Räume zeigen.',
    intro: [
      'Bilder sind das Erste, worauf man auf einer Website oder in Social Media schaut. Stockfotos und mit dem Smartphone gedrehte Videos bewirken wenig: Eigene, sorgfältig gemachte Bilder machen ein Unternehmen glaubwürdiger und wiedererkennbarer.',
      'Drohnenaufnahmen bieten eine Perspektive, die sonst unmöglich wäre: Gebäude, Anlagen, Baustellen, Landschaften und Veranstaltungen von oben.'
    ],
    includes: [
      { t: 'Fotoshootings', d: 'Produkte, Arbeitsplätze, Menschen und Veranstaltungen.' },
      { t: 'Unternehmensvideos', d: 'Unternehmenspräsentationen, Produktvideos, kurze Inhalte für Social Media.' },
      { t: 'Luftaufnahmen mit Drohne', d: 'Fotos und Videos von oben von Gebäuden, Grundstücken, Baustellen und Veranstaltungen.' },
      { t: 'Schnitt', d: 'Schnitt, Grafiken, Untertitel und Versionen in den Formaten der einzelnen Plattformen.' }
    ],
    approach: [
      'Jede Aufnahme bereiten wir mit einer Ortsbesichtigung oder einem Gespräch über Ziele und benötigte Bilder vor. Danach wählen wir das Material aus, bearbeiten es und liefern es fertig für Website, Social Media und Kampagnen.'
    ],
    faq: [
      { q: 'Darf man mit der Drohne überall fliegen?', a: 'Nein: In der Nähe von Flughäfen, in Ortschaften oder in Schutzgebieten gelten Einschränkungen oder es sind Genehmigungen nötig. Vor den Aufnahmen prüfen wir das Gebiet und planen den Flug regelkonform.' },
      { q: 'Kann ich das Material überall verwenden?', a: 'Wir vereinbaren die vorgesehenen Nutzungen zu Beginn, damit das Material für alle gewünschten Kanäle bereitsteht.' }
    ]
  },
  xr: {
    slug: '3d-und-augmented-reality',
    sig: {
      kind: 'configurator',
      title: 'Probieren Sie einen Konfigurator',
      text: 'Ein Beispiel, inspiriert von einem unserer Projekte: ein Konfigurator für Meißel von Drucklufthämmern. Wählen Sie Form und Länge, und das Modell passt sich an.',
      note: 'Vereinfachte Demonstration',
      groups: [
        { key: 'shape', label: 'Form', options: [{ v: 'point', t: 'Spitzmeißel' }, { v: 'flat', t: 'Flachmeißel' }, { v: 'wide', t: 'Breitmeißel' }, { v: 'spade', t: 'Spatenmeißel' }] },
        { key: 'length', label: 'Länge', options: [{ v: 's', t: 'Kurz' }, { v: 'm', t: 'Mittel' }, { v: 'l', t: 'Lang' }] }
      ]
    },
    title: '3D und Augmented Reality',
    metaTitle: '3D-Produktkonfiguratoren und Augmented Reality | Sodano Consulting',
    metaDesc: '3D-Konfiguratoren, Produktmodelle und Renderings, um technische und individualisierbare Produkte zu präsentieren und zu verkaufen: Kunden wählen Varianten und sehen das Ergebnis sofort.',
    lead: 'Wir entwickeln 3D-Konfiguratoren und Produktmodelle: Kunden wählen die Varianten, sehen das Ergebnis sofort und kommen mit klaren Vorstellungen zur Anfrage.',
    intro: [
      'Wenn ein Produkt in vielen Varianten existiert, reichen Fotos und PDF-Kataloge nicht aus: Kunden verstehen die Unterschiede schwer, und der Vertrieb beantwortet immer wieder dieselben Fragen.',
      'Ein 3D-Konfigurator löst das Problem an der Wurzel. Wir haben zum Beispiel einen für Meißel von Drucklufthämmern entwickelt: Form, Abmessungen und Einsteckende werden über eine einfache Oberfläche gewählt, und das 3D-Modell zeigt das Ergebnis sofort, von allen Seiten.'
    ],
    includes: [
      { t: 'Produktkonfiguratoren', d: 'Kunden wählen Varianten, Maße und Optionen und sehen das Produkt in Echtzeit.' },
      { t: '3D-Modelle', d: 'Dreidimensionale Modelle zum Drehen und Zoomen, die auch im Browser schnell laden.' },
      { t: 'Renderings und Animationen', d: 'Produktbilder und -videos für Website, Kataloge, Social Media und Messen.' },
      { t: 'Verknüpfung mit Anfragen', d: 'Die gewählte Konfiguration kommt mit der Angebotsanfrage an – ohne alles erneut zu erklären.' },
      { t: 'Augmented Reality', d: 'Wo es sinnvoll ist, lässt sich das Modell per Smartphone im realen Raum betrachten.' }
    ],
    approach: [
      'Wir starten mit den Unterlagen, die Sie schon haben: technische Zeichnungen, CAD-Dateien, Fotos und Preislisten. Gemeinsam legen wir fest, welche Varianten gezeigt werden und welche Regeln die Optionen verbinden, sodass der Konfigurator nur mögliche Kombinationen anbietet.',
      'Der Konfigurator läuft auf Ihrer Website und kann mit Ihrer Verwaltungssoftware oder dem Anfrageformular verbunden werden, sodass jede Konfiguration direkt zur Arbeit für den Vertrieb wird.'
    ],
    faq: [
      { q: 'Brauchen Sie 3D-Dateien des Produkts?', a: 'Wenn es sie gibt, nutzen wir sie als Grundlage. Andernfalls gehen wir von technischen Zeichnungen und Fotos aus und erstellen die Modelle selbst.' },
      { q: 'Funktioniert der Konfigurator auf der Website, ohne Installation?', a: 'Ja, er läuft im Browser auf Computer, Tablet und Smartphone.' },
      { q: 'Lohnt sich das für technische oder industrielle Produkte?', a: 'Ja, gerade dort hilft er oft am meisten: viele Varianten und Unterschiede, die sich schwer in Worten erklären lassen.' }
    ]
  },
  infra: {
    slug: 'it-infrastruktur-und-netzwerke',
    sig: {
      kind: 'topology',
      title: 'Ein Netzwerk in Ordnung',
      text: 'Beispiel eines Firmennetzwerks: Internetzugang mit Firewall, internes Netz für Mitarbeitende und ein getrenntes Netz für Gäste.',
      nodes: { internet: 'Internet', firewall: 'Firewall', switch: 'Switch', pc: 'Arbeitsplätze', server: 'Server', printer: 'Drucker', wifi: 'Internes WLAN', guest: 'Gäste-WLAN' }
    },
    title: 'IT-Infrastruktur und Netzwerke',
    metaTitle: 'IT-Infrastruktur und Firmennetzwerke | Sodano Consulting',
    metaDesc: 'Planung, Installation und Betreuung von Netzwerken, Servern und Arbeitsplätzen für Unternehmen und Büros, mit Support durch das Sodano-Team.',
    lead: 'Wir planen und betreuen Netzwerke, Server und Arbeitsplätze, damit die Technik im Büro funktioniert und niemanden ausbremst.',
    intro: [
      'Ein langsames Netzwerk, WLAN, das nicht in jeden Raum reicht, Computer, die jeder anders eingerichtet hat, niemand weiß genau, wo die Daten liegen: häufige Probleme, die jede Woche Stunden kosten und Risiken erhöhen.',
      'Wir bringen Ordnung in die IT-Infrastruktur Ihres Unternehmens und pflegen sie langfristig – mit einem Ansprechpartner für Netzwerk, Geräte und Server.'
    ],
    includes: [
      { t: 'Bestandsaufnahme', d: 'Inventar von Netzwerk, Geräten, Servern und Schwachstellen.' },
      { t: 'Kabelnetze und WLAN', d: 'Planung und Konfiguration, mit getrennten Netzen für Gäste und Geräte.' },
      { t: 'Server und Speicher vor Ort', d: 'Server, gemeinsame Ablagen und Zugriffsrechte.' },
      { t: 'Arbeitsplätze', d: 'Einrichtung und Wartung von Computern und Geräten.' },
      { t: 'Support', d: 'Hilfe aus der Ferne und vor Ort, wenn etwas nicht funktioniert.' }
    ],
    approach: [
      'Wir beginnen mit einer Besichtigung und einer Analyse Ihrer Arbeitsweise. Die Maßnahmen schlagen wir nach Priorität vor, damit Sie die Kosten verteilen können, und dokumentieren alles, was wir konfigurieren.',
      'Danach bleiben wir Ihr Ansprechpartner für den Support, von unseren Büros in Valenzano (Bari) und Rom aus.'
    ],
    faq: [
      { q: 'Arbeiten Sie auch mit unserer vorhandenen Ausstattung?', a: 'Ja. Wir prüfen, was weiterverwendet werden kann und was ersetzt werden muss, ohne alles zu tauschen, wenn es nicht nötig ist.' },
      { q: 'Können Sie mehrere Standorte betreuen?', a: 'Ja, auch indem wir die Netzwerke verschiedener Standorte miteinander verbinden.' },
      { q: 'Gibt es auch Support vor Ort?', a: 'Wir helfen aus der Ferne, wann immer möglich, und vor Ort, wenn nötig. Die Einzelheiten vereinbaren wir je nach Standort und Bedarf.' }
    ]
  },
  cloud: {
    slug: 'cloud-computing',
    sig: {
      kind: 'whereTo',
      title: 'Was in die Cloud gehört',
      cloud: { t: 'Lohnt sich meist in der Cloud', items: ['E-Mail, Kalender und gemeinsame Dokumente', 'Websites und Software für mehrere Standorte', 'Externe Backup-Kopien', 'Dienste, die schnell wachsen müssen'] },
      onsite: { t: 'Oft besser vor Ort', items: ['Lokal angeschlossene Geräte und Maschinen', 'Sehr große Archive, die nur im Büro genutzt werden', 'Systeme, die auch ohne Internet laufen müssen'] },
      note: 'Jeder Fall muss bewertet werden – das ist der erste Schritt, den wir gemeinsam gehen.'
    },
    title: 'Cloud Computing',
    metaTitle: 'Cloud-Dienste und Cloud-Migration für Unternehmen | Sodano Consulting',
    metaDesc: 'Cloud-Migration, E-Mail und Kollaborationswerkzeuge, Cloud-Server und Kostenkontrolle – mit ständigem Blick auf Sicherheit und Daten.',
    lead: 'Wir helfen Ihnen, die Cloud dort zu wählen und zu nutzen, wo sie sich wirklich lohnt: um von überall zu arbeiten, Wartung zu reduzieren und Dienste bei Bedarf zu skalieren.',
    intro: [
      'Die Cloud ist kein einzelner Ort, sondern eine Reihe von Diensten: E-Mail und gemeinsame Dokumente, virtuelle Server, Speicher, Anwendungen. Sie gut zu nutzen heißt zu entscheiden, was umzieht, was vor Ort bleibt und wie Kosten und Zugriffe unter Kontrolle bleiben.',
      'Wir begleiten Sie bei den Entscheidungen und der Migration und bleiben Ihr Ansprechpartner für den laufenden Betrieb.'
    ],
    includes: [
      { t: 'Bewertung', d: 'Was sich in der Cloud lohnt, zu welchen Kosten und mit welchen Risiken.' },
      { t: 'Migration', d: 'Umzug von Daten, E-Mail und Anwendungen mit minimaler Unterbrechung der Arbeit.' },
      { t: 'Kollaborationswerkzeuge', d: 'E-Mail, Kalender und gemeinsame Dokumente, für Ihr Unternehmen eingerichtet.' },
      { t: 'Cloud-Server', d: 'Umgebungen für Anwendungen und Software, die mit Ihrem Bedarf wachsen.' },
      { t: 'Zugriffe und Kosten im Griff', d: 'Berechtigungen, sichere Anmeldung und regelmäßige Kostenprüfung.' }
    ],
    approach: [
      'Wir gehen davon aus, wie Sie heute arbeiten und was Sie morgen brauchen. Die Migration planen wir in Phasen, beginnend mit den am wenigsten kritischen Diensten, und prüfen jeden Schritt vor dem nächsten.',
      'Die Cloud fügt sich in Ihre übrige Infrastruktur ein: Backup, Sicherheit und Netzwerke werden gemeinsam geplant.'
    ],
    faq: [
      { q: 'Ist die Cloud sicher?', a: 'Sie kann es sein, wenn sie gut konfiguriert ist: Zugriffsregeln, Mehr-Faktor-Authentifizierung, Backups und Berechtigungen machen den Unterschied. Daran arbeiten wir am meisten.' },
      { q: 'Sollten wir alles in die Cloud verlagern?', a: 'Nicht immer. Manche Dienste laufen vor Ort besser; wir bewerten das von Fall zu Fall.' },
      { q: 'Können wir wieder zurück?', a: 'Wir planen Migrationen so, dass die Daten exportierbar bleiben und nicht mehr als nötig von einem Anbieter abhängen.' }
    ]
  },
  backup: {
    slug: 'backup-und-archivierung',
    sig: {
      kind: 'copies',
      title: 'Mehrere Kopien an verschiedenen Orten',
      text: 'Eine gute Regel: mehrere Kopien der Daten auf verschiedenen Medien, mindestens eine außerhalb des Firmensitzes. Und regelmäßige Wiederherstellungstests.',
      source: 'Ihre Daten',
      copies: [{ t: 'Vor Ort', d: 'Für schnelle Wiederherstellung' }, { t: 'Extern', d: 'Gegen Ausfälle, Diebstahl und Brand' }, { t: 'In der Cloud', d: 'Getrennt vom Firmennetzwerk' }],
      test: 'Wiederherstellungstest'
    },
    title: 'Backup und Archivierung',
    metaTitle: 'Datensicherung und Archivierung für Unternehmen | Sodano Consulting',
    metaDesc: 'Backup- und Wiederherstellungspläne für Daten, Server und Anwendungen: automatische Kopien an verschiedenen Orten, überprüft durch Wiederherstellungstests.',
    lead: 'Wir planen Backups, die funktionieren, wenn es darauf ankommt: automatisch, an verschiedenen Orten gespeichert und durch Wiederherstellungstests überprüft.',
    intro: [
      'Ein Defekt, ein Fehler, ein Cyberangriff: Früher oder später müssen Daten wiederhergestellt werden. Dann zeigt sich, ob es ein Backup gibt, ob es aktuell ist und vor allem, ob es sich wiederherstellen lässt.',
      'Deshalb richten wir nicht nur Kopien ein: Wir legen fest, was gesichert wird, wie oft, wo es aufbewahrt wird und wie es wiederhergestellt wird – und prüfen regelmäßig, ob die Wiederherstellung funktioniert.'
    ],
    includes: [
      { t: 'Analyse der zu schützenden Daten', d: 'Welche Daten kritisch sind, wie oft sie sich ändern und wie lange Sie einen Ausfall verkraften.' },
      { t: 'Automatische Backups', d: 'Geplante Kopien von Dateien, Datenbanken, Servern und Anwendungen.' },
      { t: 'Kopien an verschiedenen Orten', d: 'Mindestens eine Kopie außerhalb des Firmensitzes, zum Schutz vor Ausfällen, Diebstahl oder Ransomware.' },
      { t: 'Wiederherstellungstests', d: 'Regelmäßige Prüfungen, ob sich die Daten wirklich wiederherstellen lassen.' },
      { t: 'Archivierung', d: 'Geordnete Aufbewahrung von Daten, die nicht täglich gebraucht werden, aber aufbewahrt werden müssen.' }
    ],
    approach: [
      'Wir beginnen mit einer einfachen Frage: Wenn Sie diese Daten morgen verlieren würden, was würde Sie das kosten? Die Antworten bestimmen den Backup-Plan, den wir zusammen mit dem Wiederherstellungsverfahren klar dokumentieren.',
      'Backup ist auch ein wesentlicher Teil der IT-Sicherheit, und wir planen beides gemeinsam.'
    ],
    faq: [
      { q: 'Wir haben schon eine externe Festplatte: Reicht das?', a: 'Meist nicht: Bleibt die Festplatte angeschlossen oder im Büro, können ein Defekt, ein Diebstahl oder ein Angriff auch sie treffen. Es braucht mindestens eine getrennte Kopie.' },
      { q: 'Wie oft sollte gesichert werden?', a: 'Das hängt davon ab, wie oft sich die Daten ändern und wie viel Arbeit Sie wiederholen könnten. Wir legen es gemeinsam fest.' },
      { q: 'Sichern Sie auch Websites und Unternehmenssoftware?', a: 'Ja, einschließlich der Datenbanken und Server, die wir betreuen.' }
    ]
  },
  security: {
    slug: 'it-sicherheit',
    sig: {
      kind: 'checklist',
      title: 'Ein schneller Check',
      text: 'Haken Sie die Maßnahmen ab, die Ihr Unternehmen bereits umsetzt. Wir speichern Ihre Antworten nicht – sie sind nur für Sie.',
      items: [
        'Wichtige Konten nutzen Zwei-Faktor-Authentifizierung',
        'Systeme und Programme werden regelmäßig aktualisiert',
        'Es gibt ein externes Backup, das kürzlich getestet wurde',
        'Jeder hat nur Zugriff auf die Daten, die er braucht',
        'Das Personal erkennt betrügerische E-Mails',
        'Eine Firewall ist konfiguriert und wird überwacht'
      ],
      results: {
        low: 'Es gibt deutliches Verbesserungspotenzial: Beginnen wir mit den Maßnahmen, die das Risiko am stärksten senken.',
        mid: 'Eine gute Basis, aber einige Maßnahmen fehlen. Eine Analyse hilft zu entscheiden, wo man anfängt.',
        high: 'Ein sehr guter Ausgangspunkt. Eine regelmäßige Überprüfung hilft, ihn zu halten.'
      },
      countLabel: 'Maßnahmen von'
    },
    title: 'IT-Sicherheit',
    metaTitle: 'IT-Sicherheit für Unternehmen und Verwaltungen | Sodano Consulting',
    metaDesc: 'Risikoanalyse, Schutz von Netzwerken, Geräten und Konten, Backup und Mitarbeiterschulung, um das Risiko von Angriffen und Datenverlust zu senken.',
    lead: 'Wir senken das Risiko, dass ein Cyberangriff oder ein Fehler Ihr Unternehmen lahmlegt – mit konkreten, angemessenen Maßnahmen.',
    intro: [
      'Cyberangriffe treffen nicht nur große Unternehmen: Phishing-Mails, gestohlene Passwörter und Ransomware zielen auch auf kleine Betriebe und Behörden, oft gerade weil sie weniger geschützt sind.',
      'Sicherheit ist kein Produkt, das man installiert, sondern ein Bündel von Maßnahmen: technisch, organisatorisch und in der Schulung. Wir helfen Ihnen zu erkennen, wo Sie am stärksten gefährdet sind, und dort zuerst anzusetzen.'
    ],
    includes: [
      { t: 'Risikoanalyse', d: 'Prüfung von Netzwerken, Geräten, Konten und Abläufen, um Schwachstellen zu finden.' },
      { t: 'Schutz von Netzwerken und Geräten', d: 'Firewalls, Updates, Virenschutz und sichere Konfigurationen.' },
      { t: 'Konten und Zugriffe', d: 'Mehr-Faktor-Authentifizierung, Verwaltung von Passwörtern und Berechtigungen.' },
      { t: 'Backup und Wiederherstellung', d: 'Geschützte Kopien, um auch nach einem Angriff wieder starten zu können.' },
      { t: 'Schulung', d: 'Praktische Hinweise für Mitarbeitende, um Betrug und riskantes Verhalten zu erkennen.' }
    ],
    approach: [
      'Wir beginnen mit einer Analyse der aktuellen Lage und übergeben Ihnen eine nach Priorität geordnete Liste von Maßnahmen, verständlich erklärt. Wir starten mit denen, die das Risiko mit dem geringsten Aufwand am stärksten senken.',
      'Sicherheit muss gepflegt werden: Updates, regelmäßige Kontrollen und die Überprüfung der Zugriffe gehören zur laufenden Arbeit.'
    ],
    faq: [
      { q: 'Wir sind ein kleines Unternehmen: Sind wir wirklich gefährdet?', a: 'Ja. Viele Angriffe laufen automatisiert und treffen jeden mit einer Schwachstelle, unabhängig von der Größe.' },
      { q: 'Was tun nach einem Angriff?', a: 'Betroffene Systeme isolieren, kein Lösegeld ohne Beratung zahlen und sofort den IT-Betreuer anrufen. Ein gutes Backup ist das, was den Neustart ermöglicht.' },
      { q: 'Helfen Sie auch bei gesetzlichen Pflichten?', a: 'Wir unterstützen Sie bei der technischen Seite der Sicherheitsmaßnahmen, die die DSGVO verlangt; für die rechtlichen Aspekte arbeiten wir mit Ihrem Berater zusammen.' }
    ]
  }
};

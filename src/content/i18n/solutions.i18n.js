/* r4-Parking – testi in inglese, tedesco e olandese. Immagini e struttura vengono dalla versione italiana
   (vedi translateSolution in ../solutions.js): qui ci sono solo i testi, compresi i testi alternativi. */
export default {
  r4parking: {
    en: {
      slug: 'r4-parking',
      metaTitle: 'r4-Parking – Management software for airport parking, garages and shuttles',
      metaDesc: 'Web-based software for airport parking, garages and shuttles: bookings, availability, customers, subscriptions, shuttle planning, sales channels and e-invoicing.',
      tagline: 'Management software for airport parking, garages and shuttles',
      lead: 'Bookings, availability, customers, check-ins and check-outs, subscriptions, shuttles, payments and documents in a single web environment, designed for the daily work of anyone running a car park.',
      heroAlt: 'r4-Parking dashboard with occupancy, today’s movements and booking channels',
      audience: {
        title: 'Who it is for',
        text: [
          'r4-Parking is designed for car parks and garages, especially those offering parking and a shuttle to the airport. Staff work on the selected car park: they check the day’s schedule, update bookings and follow the status of services.',
          'One account can include several car parks with shared users and customer records, or separate facilities with dedicated access: anyone working across facilities switches between them with a selector. It runs in the browser, with nothing to install.'
        ]
      },
      tour: [
        { title: 'Bookings and vehicle movements', text: 'Bookings come from manual entry, the online form or connected portals. Each record brings together customer, number plate, dates, passengers, flight, amount and status; staff record check-ins and check-outs, filter by period, channel and service, and export to Excel.', shotAlt: 'Booking list with filters by period, channel and status' },
        { title: 'Availability and calendar', text: 'Capacity is organised by car park and category and takes into account bookings, reserved quotas, subscriptions and temporary blocks. The calendar shows occupancy by day, week or month, with lists of arrivals and departures to prepare the work.', shotAlt: 'Car park occupancy calendar' },
        { title: 'Bookings from your website, with Car valet and washing', text: 'Each car park has its own public booking form: customers choose the service, standard parking or Car valet, add interior, exterior or full washing, check availability and see the price before confirming. Payment can be made online or on site.', shotAlt: 'Online booking form of the car park', extraAlt: 'Choice of Car valet service and washing' },
        { title: 'Shuttle planning', text: 'The shuttle plan lists the day’s trips in time order. Starting from bookings and the number of passengers, the system proposes trips; staff manage vehicles, seats and passengers and update trip status, from their phone too.', shotAlt: 'Shuttle plan with the day’s trips and passengers', extraAlt: 'Shuttle plan on a smartphone' },
        { title: 'Garage and subscriptions', text: 'Monthly subscriptions, daily stays and subscriber entries: contracts bring together customer, vehicle, rate, period and reserved spaces, with payments and refunds. Garage rates include configurable billing units, minimums and grace periods.', shotAlt: 'Garage management with stays and subscriptions' },
        { title: 'Analysis by period and channel', text: 'Volumes, cancellations, average price and booking value by period and sales channel, with monthly comparisons and yearly trends. Alerts flag operational and availability issues to check.', shotAlt: 'Booking analysis by period and channel' }
      ],
      moreTitle: 'And also',
      more: [
        { t: 'Customers and history', d: 'Individuals and companies with contact details, billing data and several number plates, duplicate detection and a full history of operations.' },
        { t: 'Configurable rates', d: 'Space categories, capacity and booking rates managed from the panel.' },
        { t: 'E-invoicing', d: 'Documents prepared from bookings, archive, statuses and XML files, sent through Aruba.' },
        { t: 'Tickets and printing', d: 'Collection tickets in A4, A6, label or custom format, with logo and text.' },
        { t: 'Review invitations', d: 'WhatsApp invitation to leave a Google review after the vehicle leaves, with management of customer consent.' },
        { t: 'Users, roles and activity log', d: 'Staff access with different roles per facility and an operations log for administrators.' }
      ],
      integrations: {
        title: 'Channels and integrations',
        text: [
          'r4-Parking connects to the main airport parking booking portals: bookings are imported automatically, matched to the car park’s categories and kept aligned with scheduled synchronisations. Manual corrections made by staff are preserved.',
          'Online payments, e-invoicing and WhatsApp messages are activated according to the services each car park chooses.'
        ],
        groups: [
          { group: 'Booking portals', items: 'Parkos, ParkingMyCar, Vologio (with Roosh support)' },
          { group: 'Payments', items: 'Stripe, PayPal and payment on site' },
          { group: 'E-invoicing', items: 'Aruba (Italian e-invoicing)' },
          { group: 'WhatsApp reviews', items: 'Twilio' }
        ]
      },
      devices: {
        title: 'On smartphones too',
        text: 'Menus, forms and tables adapt to computers, tablets and smartphones: staff check the schedule and update bookings wherever they are. The interface is available in Italian, English and Dutch.',
        shotAlts: ['r4-Parking dashboard on a smartphone', 'Bookings on a smartphone']
      },
      screenshotsNote: 'Demo screenshots with sample data.',
      faq: [
        { q: 'Do we need to install anything?', a: 'No: r4-Parking runs in the browser, on computers, tablets and smartphones.' },
        { q: 'Can we manage several car parks?', a: 'Yes. One account can include several car parks with shared users and customer records; anyone with access to several facilities switches between them with a selector.' },
        { q: 'Does it connect to booking portals?', a: 'Yes, with Parkos, ParkingMyCar and Vologio. Bookings are imported and synchronised automatically; activation depends on enablement with each portal.' },
        { q: 'Can customers book from our website?', a: 'Yes: each car park has a public booking form with availability check and price before confirmation, and can accept payments online or on site.' },
        { q: 'Which languages is it available in?', a: 'The interface is available in Italian, English and Dutch.' }
      ]
    },
    de: {
      slug: 'r4-parking',
      metaTitle: 'r4-Parking – Software für Flughafenparkplätze, Garagen und Shuttles',
      metaDesc: 'Web-Software für Flughafenparkplätze, Garagen und Shuttles: Buchungen, Verfügbarkeit, Kunden, Abonnements, Shuttleplanung, Vertriebskanäle und E-Rechnungen.',
      tagline: 'Software für Flughafenparkplätze, Garagen und Shuttles',
      lead: 'Buchungen, Verfügbarkeit, Kunden, Ein- und Ausfahrten, Abonnements, Shuttles, Zahlungen und Dokumente in einer einzigen Web-Umgebung – gemacht für den Arbeitsalltag eines Parkplatzbetreibers.',
      heroAlt: 'Dashboard von r4-Parking mit Belegung, Bewegungen des Tages und Buchungskanälen',
      audience: {
        title: 'Für wen es ist',
        text: [
          'r4-Parking ist für Parkplätze und Garagen gedacht, besonders für Anbieter von Parken mit Shuttle zum Flughafen. Das Personal arbeitet auf dem ausgewählten Parkplatz: Es sieht den Tagesplan, aktualisiert Buchungen und verfolgt den Stand der Leistungen.',
          'Eine Verwaltung kann mehrere Parkplätze mit gemeinsamen Benutzern und Kundendaten umfassen oder getrennte Standorte mit eigenen Zugängen: Wer an mehreren Standorten arbeitet, wechselt über eine Auswahl. Alles läuft im Browser, ohne Installation.'
        ]
      },
      tour: [
        { title: 'Buchungen und Fahrzeugbewegungen', text: 'Buchungen kommen aus manueller Eingabe, dem Online-Formular oder angebundenen Portalen. Jeder Vorgang vereint Kunde, Kennzeichen, Daten, Personen, Flug, Betrag und Status; das Personal erfasst Ein- und Ausfahrten, filtert nach Zeitraum, Kanal und Leistung und exportiert nach Excel.', shotAlt: 'Buchungsliste mit Filtern nach Zeitraum, Kanal und Status' },
        { title: 'Verfügbarkeit und Kalender', text: 'Die Kapazität ist nach Parkplatz und Kategorie organisiert und berücksichtigt Buchungen, reservierte Kontingente, Abonnements und zeitweise Sperren. Der Kalender zeigt die Belegung nach Tag, Woche oder Monat, mit Listen der Ein- und Ausfahrten zur Vorbereitung der Arbeit.', shotAlt: 'Belegungskalender des Parkplatzes' },
        { title: 'Buchungen über die Website, mit Car Valet und Wäsche', text: 'Jeder Parkplatz hat ein eigenes öffentliches Buchungsformular: Der Kunde wählt die Leistung, Standardparken oder Car Valet, ergänzt Innen-, Außen- oder Komplettwäsche, prüft die Verfügbarkeit und sieht den Preis vor der Bestätigung. Bezahlt wird online oder vor Ort.', shotAlt: 'Online-Buchungsformular des Parkplatzes', extraAlt: 'Auswahl von Car Valet und Wäsche' },
        { title: 'Shuttleplanung', text: 'Der Shuttleplan listet die Fahrten des Tages nach Uhrzeit. Aus Buchungen und Personenzahl schlägt das System Fahrten vor; das Personal verwaltet Fahrzeuge, Plätze und Fahrgäste und aktualisiert den Status der Fahrten, auch vom Smartphone.', shotAlt: 'Shuttleplan mit Fahrten und Fahrgästen des Tages', extraAlt: 'Shuttleplan auf dem Smartphone' },
        { title: 'Garage und Abonnements', text: 'Monatsabonnements, Tagesaufenthalte und Einfahrten der Abonnenten: Verträge vereinen Kunde, Fahrzeug, Tarif, Zeitraum und reservierte Plätze, mit Zahlungen und Stornos. Die Garagentarife haben konfigurierbare Abrechnungseinheiten, Mindestbeträge und Toleranzen.', shotAlt: 'Garagenverwaltung mit Aufenthalten und Abonnements' },
        { title: 'Analysen nach Zeitraum und Kanal', text: 'Volumen, Stornierungen, Durchschnittspreis und Buchungswert nach Zeitraum und Vertriebskanal, mit Monatsvergleichen und Jahresverlauf. Hinweise melden betriebliche und verfügbarkeitsbezogene Punkte, die zu prüfen sind.', shotAlt: 'Buchungsanalyse nach Zeitraum und Kanal' }
      ],
      moreTitle: 'Außerdem',
      more: [
        { t: 'Kunden und Historie', d: 'Privat- und Firmenkunden mit Kontaktdaten, Rechnungsdaten und mehreren Kennzeichen, Dublettenerkennung und vollständiger Vorgangshistorie.' },
        { t: 'Konfigurierbare Tarife', d: 'Stellplatzkategorien, Kapazität und Buchungstarife, verwaltet im Panel.' },
        { t: 'E-Rechnungen', d: 'Aus Buchungen erstellte Dokumente, Archiv, Status und XML-Dateien, Versand über Aruba.' },
        { t: 'Tickets und Druck', d: 'Abholtickets in A4, A6, als Etikett oder im eigenen Format, mit Logo und Texten.' },
        { t: 'Einladungen zu Bewertungen', d: 'Einladung per WhatsApp zu einer Google-Bewertung nach der Ausfahrt, mit Verwaltung der Kundeneinwilligung.' },
        { t: 'Benutzer, Rollen und Aktivitätsprotokoll', d: 'Zugänge für das Personal mit unterschiedlichen Rollen je Standort und Protokoll der Vorgänge für Administratoren.' }
      ],
      integrations: {
        title: 'Kanäle und Integrationen',
        text: [
          'r4-Parking verbindet sich mit den wichtigsten Buchungsportalen für Flughafenparken: Buchungen werden automatisch importiert, den Kategorien des Parkplatzes zugeordnet und durch geplante Synchronisationen aktuell gehalten. Manuelle Korrekturen des Personals bleiben erhalten.',
          'Online-Zahlungen, E-Rechnungen und WhatsApp-Nachrichten werden je nach den Diensten aktiviert, die jeder Parkplatz wählt.'
        ],
        groups: [
          { group: 'Buchungsportale', items: 'Parkos, ParkingMyCar, Vologio (mit Roosh-Unterstützung)' },
          { group: 'Zahlungen', items: 'Stripe, PayPal und Zahlung vor Ort' },
          { group: 'E-Rechnungen', items: 'Aruba (italienische E-Rechnung)' },
          { group: 'Bewertungen per WhatsApp', items: 'Twilio' }
        ]
      },
      devices: {
        title: 'Auch auf dem Smartphone',
        text: 'Menüs, Formulare und Tabellen passen sich an Computer, Tablet und Smartphone an: Das Personal sieht den Plan und aktualisiert Buchungen, wo immer es ist. Die Oberfläche ist auf Italienisch, Englisch und Niederländisch verfügbar.',
        shotAlts: ['Dashboard von r4-Parking auf dem Smartphone', 'Buchungen auf dem Smartphone']
      },
      screenshotsNote: 'Demo-Screenshots mit Beispieldaten.',
      faq: [
        { q: 'Muss man etwas installieren?', a: 'Nein: r4-Parking läuft im Browser, auf Computer, Tablet und Smartphone.' },
        { q: 'Lassen sich mehrere Parkplätze verwalten?', a: 'Ja. Eine Verwaltung kann mehrere Parkplätze mit gemeinsamen Benutzern und Kundendaten umfassen; wer Zugang zu mehreren Standorten hat, wechselt über eine Auswahl.' },
        { q: 'Ist es mit Buchungsportalen verbunden?', a: 'Ja, mit Parkos, ParkingMyCar und Vologio. Buchungen werden automatisch importiert und synchronisiert; die Aktivierung hängt von der Freischaltung beim jeweiligen Portal ab.' },
        { q: 'Können Kunden über unsere Website buchen?', a: 'Ja: Jeder Parkplatz hat ein öffentliches Buchungsformular mit Verfügbarkeitsprüfung und Preis vor der Bestätigung und kann Zahlungen online oder vor Ort annehmen.' },
        { q: 'In welchen Sprachen ist es verfügbar?', a: 'Die Oberfläche ist auf Italienisch, Englisch und Niederländisch verfügbar.' }
      ]
    },
    nl: {
      slug: 'r4-parking',
      metaTitle: 'r4-Parking – Software voor luchthavenparkeren, garages en shuttles',
      metaDesc: 'Webgebaseerde software voor luchthavenparkeren, garages en shuttles: reserveringen, beschikbaarheid, klanten, abonnementen, shuttleplanning, verkoopkanalen en e-facturatie.',
      tagline: 'Software voor luchthavenparkeren, garages en shuttles',
      lead: 'Reserveringen, beschikbaarheid, klanten, in- en uitrijden, abonnementen, shuttles, betalingen en documenten in één webomgeving, gemaakt voor het dagelijkse werk van wie een parkeerterrein beheert.',
      heroAlt: 'Dashboard van r4-Parking met bezetting, bewegingen van de dag en boekingskanalen',
      audience: {
        title: 'Voor wie',
        text: [
          'r4-Parking is bedoeld voor parkeerterreinen en garages, vooral voor wie parkeren met een shuttle naar de luchthaven aanbiedt. Medewerkers werken op het geselecteerde parkeerterrein: ze bekijken de dagplanning, werken reserveringen bij en volgen de status van de diensten.',
          'Eén beheeromgeving kan meerdere parkeerterreinen met gedeelde gebruikers en klantgegevens bevatten, of aparte locaties met eigen toegang: wie op meerdere locaties werkt, wisselt via een keuzemenu. Alles werkt in de browser, zonder installatie.'
        ]
      },
      tour: [
        { title: 'Reserveringen en voertuigbewegingen', text: 'Reserveringen komen binnen via handmatige invoer, het online formulier of gekoppelde portals. Elk dossier bundelt klant, kenteken, data, personen, vlucht, bedrag en status; medewerkers registreren in- en uitrijden, filteren op periode, kanaal en dienst en exporteren naar Excel.', shotAlt: 'Overzicht van reserveringen met filters op periode, kanaal en status' },
        { title: 'Beschikbaarheid en kalender', text: 'De capaciteit is ingedeeld per parkeerterrein en categorie en houdt rekening met reserveringen, gereserveerde quota, abonnementen en tijdelijke blokkades. De kalender toont de bezetting per dag, week of maand, met lijsten van aankomsten en vertrekken om het werk voor te bereiden.', shotAlt: 'Bezettingskalender van het parkeerterrein' },
        { title: 'Reserveren via uw website, met Car valet en wasbeurt', text: 'Elk parkeerterrein heeft een eigen openbaar reserveringsformulier: de klant kiest de dienst, standaard parkeren of Car valet, voegt een binnen-, buiten- of complete wasbeurt toe, controleert de beschikbaarheid en ziet de prijs vóór bevestiging. Betalen kan online of ter plaatse.', shotAlt: 'Online reserveringsformulier van het parkeerterrein', extraAlt: 'Keuze van Car valet en wasbeurt' },
        { title: 'Shuttleplanning', text: 'De shuttleplanning toont de ritten van de dag op tijdsvolgorde. Op basis van reserveringen en aantal personen stelt het systeem ritten voor; medewerkers beheren voertuigen, plaatsen en passagiers en werken de status van de ritten bij, ook vanaf de telefoon.', shotAlt: 'Shuttleplanning met ritten en passagiers van de dag', extraAlt: 'Shuttleplanning op een smartphone' },
        { title: 'Garage en abonnementen', text: 'Maandabonnementen, dagparkeren en inritten van abonnees: contracten bundelen klant, voertuig, tarief, periode en gereserveerde plaatsen, met betalingen en terugboekingen. De garagetarieven hebben instelbare rekeneenheden, minimumbedragen en tolerantietijden.', shotAlt: 'Garagebeheer met parkeerduur en abonnementen' },
        { title: 'Analyse per periode en kanaal', text: 'Volumes, annuleringen, gemiddelde prijs en waarde van reserveringen per periode en verkoopkanaal, met maandvergelijkingen en jaarverloop. Meldingen wijzen op operationele en beschikbaarheidspunten om te controleren.', shotAlt: 'Analyse van reserveringen per periode en kanaal' }
      ],
      moreTitle: 'En verder',
      more: [
        { t: 'Klanten en historie', d: 'Particulieren en bedrijven met contactgegevens, factuurgegevens en meerdere kentekens, signalering van dubbelingen en volledige historie van handelingen.' },
        { t: 'Instelbare tarieven', d: 'Plaatscategorieën, capaciteit en reserveringstarieven, beheerd vanuit het paneel.' },
        { t: 'E-facturatie', d: 'Documenten opgesteld vanuit reserveringen, archief, statussen en XML-bestanden, verzonden via Aruba.' },
        { t: 'Tickets en afdrukken', d: 'Ophaaltickets in A4, A6, als etiket of in eigen formaat, met logo en teksten.' },
        { t: 'Uitnodigingen voor reviews', d: 'Uitnodiging via WhatsApp voor een Google-review na het uitrijden, met beheer van de toestemming van de klant.' },
        { t: 'Gebruikers, rollen en activiteitenlog', d: 'Toegang voor medewerkers met verschillende rollen per locatie en een log van handelingen voor beheerders.' }
      ],
      integrations: {
        title: 'Kanalen en koppelingen',
        text: [
          'r4-Parking koppelt met de belangrijkste boekingsportals voor luchthavenparkeren: reserveringen worden automatisch geïmporteerd, aan de categorieën van het parkeerterrein gekoppeld en actueel gehouden met geplande synchronisaties. Handmatige correcties van medewerkers blijven behouden.',
          'Online betalingen, e-facturatie en WhatsApp-berichten worden geactiveerd afhankelijk van de diensten die elk parkeerterrein kiest.'
        ],
        groups: [
          { group: 'Boekingsportals', items: 'Parkos, ParkingMyCar, Vologio (met Roosh-ondersteuning)' },
          { group: 'Betalingen', items: 'Stripe, PayPal en betalen ter plaatse' },
          { group: 'E-facturatie', items: 'Aruba (Italiaanse e-facturatie)' },
          { group: 'Reviews via WhatsApp', items: 'Twilio' }
        ]
      },
      devices: {
        title: 'Ook op de smartphone',
        text: 'Menu’s, formulieren en tabellen passen zich aan computer, tablet en smartphone aan: medewerkers bekijken de planning en werken reserveringen bij waar ze ook zijn. De interface is beschikbaar in het Italiaans, Engels en Nederlands.',
        shotAlts: ['Dashboard van r4-Parking op een smartphone', 'Reserveringen op een smartphone']
      },
      screenshotsNote: 'Demoschermen met voorbeeldgegevens.',
      faq: [
        { q: 'Moet er iets geïnstalleerd worden?', a: 'Nee: r4-Parking werkt in de browser, op computer, tablet en smartphone.' },
        { q: 'Kunnen we meerdere parkeerterreinen beheren?', a: 'Ja. Eén beheeromgeving kan meerdere parkeerterreinen met gedeelde gebruikers en klantgegevens bevatten; wie toegang heeft tot meerdere locaties wisselt via een keuzemenu.' },
        { q: 'Is het gekoppeld aan boekingsportals?', a: 'Ja, aan Parkos, ParkingMyCar en Vologio. Reserveringen worden automatisch geïmporteerd en gesynchroniseerd; de activering hangt af van de inschakeling bij elk portal.' },
        { q: 'Kunnen klanten via onze website reserveren?', a: 'Ja: elk parkeerterrein heeft een openbaar reserveringsformulier met beschikbaarheidscontrole en prijs vóór bevestiging, en kan online of ter plaatse betalingen ontvangen.' },
        { q: 'In welke talen is het beschikbaar?', a: 'De interface is beschikbaar in het Italiaans, Engels en Nederlands.' }
      ]
    }
  }
};

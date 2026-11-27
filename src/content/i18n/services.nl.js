/* Dienstpagina’s – Nederlands. Zelfde structuur als de Italiaanse inhoud in ../services.js */
export default {
  hosting: {
    slug: 'hosting-en-servers',
    title: 'Hosting en servers',
    metaTitle: 'Beheerde hosting en servers voor bedrijven | Sodano Consulting',
    metaDesc: 'Beheerde hosting en servers voor websites, webapplicaties en bedrijfssoftware: inrichting, updates, beveiliging en ondersteuning door het team dat de software bouwt.',
    lead: 'Wij hosten en beheren websites, webapplicaties en bedrijfssoftware op servers die voor uw project zijn ingericht. U richt zich op uw werk, wij op de techniek.',
    intro: [
      'Een website of bedrijfsapplicatie werkt alleen goed als de omgeving waarin die draait wordt onderhouden: actuele versies, geldige certificaten, voldoende capaciteit en beveiligingscontroles. Als er iets misgaat, telt wie ingrijpt en hoe goed die het project kent.',
      'Ons voordeel: hosting en ontwikkeling zitten in hetzelfde team. Wie de server beheert, kent de applicaties die erop draaien, en wie ze bouwt, weet hoe ze zijn ingericht. Geen heen-en-weer tussen leveranciers.'
    ],
    includes: [
      { t: 'Hosting voor websites en webapplicaties', d: 'Ruimte, domeinen, SSL/TLS-certificaten en een omgeving die is afgestemd op uw technologieën.' },
      { t: 'Applicatieomgevingen', d: 'PHP, Node.js en Laravel met publicatie vanuit Git-repository’s: elke code-update gaat ordelijk online.' },
      { t: 'Updates en beveiliging', d: 'Systeemonderhoud, web application firewall en dreigingsscans op de server.' },
      { t: 'Back-up', d: 'Back-upplannen afgestemd op hoe belangrijk uw gegevens zijn en hoe vaak ze veranderen.' },
      { t: 'Verhuizingen', d: 'Staat uw project al elders online, dan plannen we samen de verhuizing en houden we de onderbreking zo kort mogelijk.' }
    ],
    approach: [
      'We gaan uit van wat er op de server moet draaien: een bedrijfswebsite, een webshop, software met veel gebruikers of een applicatie die gegevens uitwisselt met andere systemen hebben heel verschillende eisen. Op basis daarvan kiezen we omgeving en capaciteit, zonder te overdimensioneren en zonder u krap te zetten.',
      'Na de livegang blijven we uw aanspreekpunt: updates, controles en ingrepen lopen via ons, vanuit onze kantoren in Valenzano (Bari) en Rome.'
    ],
    tech: [
      { group: 'Talen en runtimes', items: [{ name: 'PHP 8.4' }, { name: 'Node.js 20, 22 en 24' }] },
      { group: 'Frameworks en tools', items: [{ name: 'Laravel' }, { name: 'Composer' }, { name: 'Git' }] },
      { group: 'Databases', items: [{ name: 'MySQL / MariaDB' }, { name: 'PostgreSQL' }] },
      { group: 'Automatisering', items: [{ name: 'n8n' }] },
      { group: 'Beveiliging', items: [{ name: 'SSL/TLS-certificaten' }, { name: 'Web Application Firewall' }, { name: 'Imunify' }] }
    ],
    faq: [
      { q: 'Kan ik een website die al online staat naar jullie verhuizen?', a: 'Ja. Eerst bekijken we hoe de site is opgebouwd en waar die nu staat, daarna spreken we moment en werkwijze af om de onderbreking zo kort mogelijk te houden.' },
      { q: 'Mijn software gebruikt Laravel of Node.js: kunnen jullie die hosten?', a: 'Beide horen bij de ondersteunde technologieën. Heeft het project bijzondere eisen, zoals altijd actieve diensten of veel capaciteit, dan bespreken we dat vooraf om de juiste inrichting te kiezen.' },
      { q: 'Wie grijpt in als er iets niet werkt?', a: 'Ons team: dezelfde mensen die de server kennen en, als wij hem hebben gebouwd, ook uw applicatie.' },
      { q: 'Wat kost het?', a: 'Dat hangt af van wat er op de server moet draaien en hoeveel ondersteuning u nodig hebt. Na een eerste gesprek maken we een voorstel op maat.' }
    ]
  },
  webapp: {
    slug: 'webapps-en-bedrijfssoftware',
    sig: {
      kind: 'beforeAfter',
      title: 'Van zo naar zo',
      beforeLabel: 'Voorheen',
      before: ['Spreadsheets die per e-mail rondgaan', 'Gegevens met de hand overgezet van programma naar programma', 'Iedereen met een eigen versie van de cijfers', 'Rapporten die aan het eind van de maand worden gemaakt'],
      afterLabel: 'Met software op maat',
      after: ['Eén plek voor gegevens en dossiers', 'Informatie die vanzelf tussen systemen stroomt', 'Iedereen ziet dezelfde, actuele gegevens', 'Dashboards altijd klaar']
    },
    title: 'Webapps en bedrijfssoftware',
    metaTitle: 'Webapps en bedrijfssoftware op maat | Sodano Consulting',
    metaDesc: 'Bedrijfssoftware en webapplicaties op maat voor bedrijven en overheden: digitale processen, gegevens op één plek, koppelingen met de software die u al gebruikt.',
    lead: 'Wij bouwen bedrijfssoftware en webapplicaties rond de manier waarop uw bedrijf werkt, niet andersom.',
    intro: [
      'Gedeelde spreadsheets, e-mails om informatie door te geven, programma’s die niet met elkaar praten: hier verliezen veel bedrijven tijd en stapelen fouten zich op. Software op maat brengt processen en gegevens op één plek, bereikbaar in de browser op kantoor, thuis of op de telefoon.',
      'We ontwerpen haar rond de mensen die er dagelijks mee werken, want software die niemand graag gebruikt, lost niets op.'
    ],
    includes: [
      { t: 'Procesanalyse', d: 'We begrijpen hoe u nu werkt, waar tijd verloren gaat en wat echt zinvol is om te automatiseren.' },
      { t: 'Bedrijfssoftware op maat', d: 'Relaties, dossiers, orders, reserveringen, voorraad of elke werkstroom die eigen is aan uw bedrijf.' },
      { t: 'Gebruikers, rollen en rechten', d: 'Iedereen ziet en bewerkt alleen wat hem aangaat, met registratie van handelingen.' },
      { t: 'Rapporten en dashboards', d: 'De cijfers die u nodig hebt om te beslissen, actueel en zonder handmatige exports.' },
      { t: 'Koppelingen', d: 'Verbinding met de software die u al gebruikt, via API’s of gegevensuitwisseling.' },
      { t: 'Doorontwikkeling', d: 'Ondersteuning en nieuwe functies naarmate uw bedrijf verandert.' }
    ],
    approach: [
      'We werken in stappen: eerst de functies die het grootste probleem oplossen, direct in handen van de gebruikers, daarna de rest op basis van wat het echte gebruik laat zien. Zo ziet u snel resultaat en blijft het project dicht bij uw werkelijke behoeften.',
      'We kunnen de software ook op onze servers hosten en onderhouden, zodat ontwikkeling, hosting en ondersteuning in één team blijven.'
    ],
    faq: [
      { q: 'Software op maat of een kant-en-klaar pakket?', a: 'Als een bestaand pakket uw werk goed dekt, is dat vaak de betere keuze. Maatwerk is zinvol als uw processen specifiek zijn of standaardsoftware u tot omwegen dwingt. Na de analyse zeggen we het u eerlijk.' },
      { q: 'Van wie zijn de gegevens?', a: 'Van u. U kunt ze exporteren en de software kan desgewenst draaien waar u wilt.' },
      { q: 'Kan het gekoppeld worden aan onze bestaande programma’s?', a: 'In de meeste gevallen wel, als het programma gegevensuitwisseling toestaat. Dat controleren we tijdens de analyse.' },
      { q: 'Hoe lang duurt het?', a: 'Dat hangt af van de complexiteit. Na de analyse krijgt u een schatting en een releaseplan, te beginnen met de belangrijkste functies.' }
    ]
  },
  websites: {
    slug: 'websites-en-e-commerce',
    sig: {
      kind: 'devices',
      title: 'Eén website, elk scherm',
      text: 'We ontwerpen elke pagina zo dat ze zichzelf herschikt: op computer, tablet en telefoon blijft de inhoud leesbaar en blijven knoppen binnen handbereik.',
      labels: ['Computer', 'Telefoon']
    },
    title: 'Websites en e-commerce',
    metaTitle: 'Websites en webshops laten maken | Sodano Consulting',
    metaDesc: 'Websites en webshops voor bedrijven en overheden: afgestemd op uw doelen, snel, toegankelijk, vindbaar in zoekmachines en eenvoudig te beheren.',
    lead: 'Wij maken websites en webshops die aanvragen en verkopen moeten opleveren, niet alleen mooi moeten zijn.',
    intro: [
      'Uw website is vaak het eerste contact tussen een klant en uw bedrijf. In een paar seconden moet duidelijk zijn wat u doet, de site moet goed werken op een telefoon, snel laden en bezoekers naar een aanvraag of aankoop leiden.',
      'Daarom beginnen we bij uw doelen: wie moet de site bezoeken, wat moet hij vinden en wat wilt u dat hij doet? Ontwerp en techniek komen daarna, in dienst van die antwoorden.'
    ],
    includes: [
      { t: 'Bedrijfs- en overheidswebsites', d: 'Structuur, teksten en vormgeving passend bij uw identiteit, in één of meer talen.' },
      { t: 'E-commerce', d: 'Catalogus, winkelwagen, betalingen en verzending, met orderbeheer dat eenvoudig is voor uw medewerkers.' },
      { t: 'Snelheid en toegankelijkheid', d: 'Lichte pagina’s, leesbaar voor iedereen en bruikbaar op elk apparaat.' },
      { t: 'Technische SEO', d: 'Duidelijke adressen, verzorgde titels en omschrijvingen, inhoud die zoekmachines kunnen lezen.' },
      { t: 'Privacy en cookies', d: 'Privacyverklaringen, cookietoestemming en contactformulieren conform de AVG.' },
      { t: 'Hosting en onderhoud', d: 'We kunnen de site op onze servers hosten en bijwerken, zodat u één aanspreekpunt hebt.' }
    ],
    approach: [
      'Voordat we ontwerpen, analyseren we uw doelgroep, de concurrentie en de beschikbare inhoud. Daaruit ontstaat een structuur die we samen uitwerken, gevolgd door ontwerp en ontwikkeling. Voor de lancering testen we de site op computer en telefoon.',
      'Na de lancering kunnen we ook de marketing verzorgen: campagnes, social media en vindbaarheid in zoekmachines.'
    ],
    faq: [
      { q: 'Kan ik de inhoud zelf aanpassen?', a: 'Dat bepalen we samen, afhankelijk van hoe vaak die verandert: voor inhoud die u vaak bijwerkt voorzien we een eenvoudig beheersysteem.' },
      { q: 'Werkt de site goed op telefoons?', a: 'Ja, we ontwerpen en testen haar op schermen van elk formaat.' },
      { q: 'Kunnen jullie mijn bestaande website vernieuwen?', a: 'Ja. We gaan uit van wat wel en niet werkt op uw huidige site en begeleiden de overstap zorgvuldig, zodat u uw posities in zoekmachines niet kwijtraakt.' },
      { q: 'Wat kost het?', a: 'Dat hangt af van het aantal pagina’s, de talen en de functies, bijvoorbeeld een webshop. Na een eerste gesprek maken we een voorstel.' }
    ]
  },
  integrations: {
    slug: 'integraties-en-apis',
    sig: {
      kind: 'network',
      title: 'Alle systemen, één stroom',
      text: 'Een voorbeeld van hoe gegevens tussen de software van een bedrijf kunnen stromen zonder overgetypt te worden.',
      hub: 'API',
      nodes: ['Beheer', 'E-commerce', 'CRM', 'Betalingen', 'Facturatie', 'Partners']
    },
    title: 'Integraties en API’s',
    metaTitle: 'Software-integraties en API-ontwikkeling | Sodano Consulting',
    metaDesc: 'Wij koppelen bedrijfssoftware, webshops, CRM en externe diensten via API’s: gegevens gaan van systeem naar systeem zonder ze met de hand over te nemen.',
    lead: 'Wij laten uw software met elkaar praten, zodat gegevens van het ene systeem naar het andere gaan zonder overgetypt te worden.',
    intro: [
      'Bestellingen uit de webshop die opnieuw in het beheersysteem worden ingevoerd, dubbele relaties in CRM en facturatie, rapporten die worden samengesteld met cijfers uit drie programma’s: elke handmatige stap kost tijd en levert fouten op.',
      'Een goede integratie haalt die stappen weg. We gebruiken de API’s van uw software, of bouwen nieuwe waar nodig, zodat uw systemen één stroom worden.'
    ],
    includes: [
      { t: 'Analyse van gegevensstromen', d: 'We brengen in kaart welke informatie tussen systemen stroomt, wie die wijzigt en waar fouten ontstaan.' },
      { t: 'Bestaande software koppelen', d: 'Bedrijfssoftware, webshops, CRM, betaal- of reserveringsplatforms, diensten van derden.' },
      { t: 'API-ontwikkeling', d: 'Gedocumenteerde interfaces die de gegevens van uw software beschikbaar maken voor partners, apps of andere systemen, met gecontroleerde toegang.' },
      { t: 'Automatisering', d: 'Terugkerende taken die vanzelf starten bij een gebeurtenis, ook met tools als n8n.' },
      { t: 'Monitoring', d: 'Controles en meldingen om direct te merken als een gegevensuitwisseling stopt.' }
    ],
    approach: [
      'Voordat we code schrijven, controleren we wat de betrokken systemen toestaan: welke gegevens ze beschikbaar stellen, met welke beperkingen en hoe betrouwbaar. Daarna ontwerpen we de integratie, te beginnen met de nuttigste stroom, en testen we haar met echte gegevens.',
      'We documenteren elke koppeling, zodat duidelijk blijft hoe ze werkt, ook jaren later of als de beheerder wisselt.'
    ],
    faq: [
      { q: 'Kan elke software worden gekoppeld?', a: 'Dat hangt af van wat de software biedt: API’s, exports of toegang tot de gegevens. We controleren dat aan het begin en zeggen u duidelijk wat mogelijk is.' },
      { q: 'Wat gebeurt er als een van de systemen niet reageert?', a: 'We ontwerpen integraties zo dat er geen gegevens verloren gaan en fouten worden gemeld, zodat iemand kan ingrijpen.' },
      { q: 'Kunnen jullie een API voor onze partners bouwen?', a: 'Ja: een gedocumenteerde interface met beveiligde toegang laat partners gecontroleerd gegevens lezen of versturen.' }
    ]
  },
  bi: {
    slug: 'business-intelligence-en-ai',
    sig: {
      kind: 'dashboard',
      title: 'De cijfers die ertoe doen, in één oogopslag',
      text: 'Een dashboard brengt gegevens uit bedrijfssoftware, verkoop en online platforms samen en werkt zichzelf bij.',
      note: 'Illustratief voorbeeld',
      panels: ['Verkoopverloop', 'Aanvragen per kanaal', 'Orders per regio', 'Maanddoel']
    },
    title: 'Business intelligence en AI',
    metaTitle: 'Business intelligence en kunstmatige intelligentie voor bedrijven | Sodano Consulting',
    metaDesc: 'Dashboards, rapporten en AI-tools op basis van uw bedrijfsgegevens, om te beslissen met actuele cijfers en repetitief werk te automatiseren.',
    lead: 'Wij maken van de gegevens die uw bedrijf al verzamelt heldere dashboards en AI-tools die tijd besparen.',
    intro: [
      'Veel bedrijven hebben de gegevens, maar niet de antwoorden: de informatie is verspreid over bedrijfssoftware, spreadsheets en online platforms, en een overzicht kost uren handwerk.',
      'Met business intelligence worden die gegevens verzameld, opgeschoond en getoond in dashboards die altijd actueel zijn. Kunstmatige intelligentie gaat een stap verder: documenten classificeren, veelgestelde vragen beantwoorden, informatie extraheren, acties voorstellen.'
    ],
    includes: [
      { t: 'Gegevens verzamelen en opschonen', d: 'We voegen bronnen samen, herstellen onvolledige of dubbele gegevens en maken ze vergelijkbaar.' },
      { t: 'Dashboards en rapporten', d: 'De indicatoren die voor u tellen, automatisch bijgewerkt en raadpleegbaar in de browser.' },
      { t: 'AI-assistenten', d: 'Tools die vragen over uw documenten beantwoorden of klanten en collega’s ondersteunen.' },
      { t: 'Repetitieve taken automatiseren', d: 'Documenten lezen en sorteren, gegevens extraheren, eerste antwoorden geven.' },
      { t: 'Verantwoord gebruik van gegevens', d: 'Aandacht voor privacy, vertrouwelijkheid en waar bedrijfsgegevens worden verwerkt.' }
    ],
    approach: [
      'We beginnen bij de vragen die u beantwoord wilt zien, niet bij de tools. We bepalen welke gegevens nodig zijn, controleren of ze betrouwbaar zijn en bouwen een eerste dashboard of assistent voor een concrete situatie, die we meten voordat we uitbreiden.',
      'Met kunstmatige intelligentie zijn we pragmatisch: we stellen haar voor waar ze aantoonbaar tijd bespaart, en we zeggen het als een traditioneel proces de betere keuze is.'
    ],
    faq: [
      { q: 'Zijn er veel gegevens nodig om te beginnen?', a: 'Nee. Vaak volstaat het om de gegevens die u al hebt te ordenen. De eerste stap is begrijpen welke het zijn en hoe betrouwbaar ze zijn.' },
      { q: 'Blijven de bedrijfsgegevens vertrouwelijk?', a: 'Dat leggen we aan het begin vast: welke gegevens we gebruiken, waar ze worden verwerkt en wie er toegang toe heeft, in overeenstemming met de AVG.' },
      { q: 'Vervangt AI het werk van mensen?', a: 'In de projecten die wij voorstellen neemt ze vooral repetitieve taken over en laat ze beslissingen en uitzonderingen aan mensen.' }
    ]
  },
  mobile: {
    slug: 'mobiele-apps',
    sig: {
      kind: 'phones',
      title: 'Gemaakt voor dagelijks gebruik',
      text: 'Een paar handelingen, de handelingen die echt tellen, binnen bereik van uw duim.',
      screens: [{ label: 'Reserveringen', ui: 'calendar' }, { label: 'Klantomgeving', ui: 'list' }, { label: 'Buitendienst', ui: 'check' }]
    },
    title: 'Mobiele apps',
    metaTitle: 'App-ontwikkeling voor iOS en Android | Sodano Consulting',
    metaDesc: 'Apps voor iOS en Android voor klanten en medewerkers: ontworpen voor echt gebruik, gekoppeld aan uw systemen en gepubliceerd in de app stores.',
    lead: 'Wij ontwikkelen apps voor iOS en Android, ontworpen voor de mensen die ze echt gebruiken en gekoppeld aan de systemen die uw bedrijf al heeft.',
    intro: [
      'Een app is zinvol als ze iets biedt wat een website niet kan: een dienst die vaak wordt gebruikt, meldingen, functies met camera of locatie, werk in de buitendienst ook met een zwakke verbinding.',
      'Daarom kijken we eerst of de app echt nodig is, voor wie en waarvoor. Is het antwoord ja, dan ontwerpen we haar rond de paar handelingen die ertoe doen en koppelen we haar aan uw gegevens.'
    ],
    includes: [
      { t: 'Apps voor klanten', d: 'Reserveringen, bestellingen, besloten omgevingen, loyaliteitsprogramma’s, meldingen.' },
      { t: 'Apps voor medewerkers', d: 'Tools voor wie buiten de deur werkt: rapporten, leveringen, controles, foto’s en handtekeningen.' },
      { t: 'Koppeling met uw systemen', d: 'De app leest en schrijft gegevens van uw bedrijfssoftware via API’s.' },
      { t: 'Publicatie in de stores', d: 'Voorbereiding en indiening in de App Store en Google Play.' },
      { t: 'Updates', d: 'Nieuwe versies en aanpassingen aan wijzigingen in iOS en Android.' }
    ],
    approach: [
      'We ontwerpen de belangrijkste schermen en testen ze met de toekomstige gebruikers voordat we de app volledig bouwen. Daarna brengen we een eerste versie uit met de essentiële functies en verbeteren we die op basis van het echte gebruik.',
      'Bestaat er al bedrijfssoftware, door ons of door anderen gebouwd, dan steunt de app daarop: geen dubbele gegevens.'
    ],
    faq: [
      { q: 'Hebben we een app nodig of volstaat de website?', a: 'Voor veel diensten is een goede website die op telefoons werkt voldoende. Dat zeggen we u voordat we beginnen, ook als het antwoord is dat u geen app nodig hebt.' },
      { q: 'Werkt de app op zowel iPhone als Android?', a: 'Ja, we ontwerpen haar voor beide platforms.' },
      { q: 'Wie publiceert de app in de stores?', a: 'Wij verzorgen de voorbereiding en indiening; de ontwikkelaarsaccounts in de stores blijven op naam van uw bedrijf.' }
    ]
  },
  brand: {
    slug: 'merkidentiteit',
    sig: {
      kind: 'brandSystem',
      title: 'Een systeem, niet alleen een logo',
      text: 'Kleuren, lettertypen en gebruiksregels werken samen, zodat elk materiaal bij hetzelfde bedrijf hoort.',
      note: 'Voorbeeld van een identiteitssysteem',
      palette: [{ name: 'Primair', hex: '#C8102E' }, { name: 'Donker', hex: '#16161C' }, { name: 'Neutraal', hex: '#8A8580' }, { name: 'Licht', hex: '#F3EFE8' }],
      type: 'Koppen en tekst'
    },
    title: 'Merkidentiteit',
    metaTitle: 'Merkidentiteit, logo en huisstijl | Sodano Consulting',
    metaDesc: 'Logo, kleuren, lettertypen en richtlijnen voor een herkenbare, consistente uitstraling op website, social media, documenten en drukwerk.',
    lead: 'Wij bouwen een herkenbare, consistente visuele identiteit, van het logo tot de richtlijnen die haar op termijn op orde houden.',
    intro: [
      'Een sterk merk is meer dan een mooi logo: het is het gevoel van samenhang dat een klant ervaart als hij van de website naar social media gaat, van een offerte naar een gevelbord. Als elk materiaal anders is gemaakt, lijkt het bedrijf kleiner en minder betrouwbaar dan het is.',
      'We werken aan de identiteit vanuit wie u bent, wie u aanspreekt en wat u onderscheidt, tot een systeem van elementen dat iedereen binnen en buiten het bedrijf correct kan gebruiken.'
    ],
    includes: [
      { t: 'Analyse en positionering', d: 'Waarden, doelgroep, concurrenten en tone of voice.' },
      { t: 'Logo', d: 'Een nieuw beeldmerk of een vernieuwing van het bestaande, in versies voor elk gebruik.' },
      { t: 'Kleuren en lettertypen', d: 'Een palet en typografie voor scherm en druk.' },
      { t: 'Huisstijl', d: 'Visitekaartjes, briefpapier, sjablonen voor documenten en presentaties.' },
      { t: 'Richtlijnen', d: 'Een eenvoudige handleiding die uitlegt hoe merk en stijl worden gebruikt.' }
    ],
    approach: [
      'We beginnen met een gesprek over de geschiedenis, doelen en klanten van het bedrijf. We stellen een paar goed onderbouwde richtingen voor, werken ze met u uit en toetsen het resultaat aan echte toepassingen: website, social media, documenten.',
      'Daarna wordt de identiteit de basis van het marketingwerk: website, campagnes en inhoud vertrekken vanuit dezelfde regels.'
    ],
    faq: [
      { q: 'Kunnen jullie ons logo vernieuwen zonder het helemaal te veranderen?', a: 'Ja. Een vernieuwing behoudt vaak wat klanten herkennen en verbetert wat niet meer werkt, zoals de leesbaarheid in kleine formaten.' },
      { q: 'Krijgen we de logobestanden?', a: 'Ja, in formaten voor web en druk, samen met de richtlijnen.' },
      { q: 'Wat hebben jullie van ons nodig?', a: 'Wat tijd om ons over het bedrijf en zijn klanten te vertellen, en één persoon die de keuzes maakt.' }
    ]
  },
  social: {
    slug: 'socialmediabeheer',
    sig: {
      kind: 'calendar',
      title: 'Een week contentplanning',
      text: 'Inhoud wordt gepland en goedgekeurd voordat ze wordt gepubliceerd.',
      note: 'Illustratief voorbeeld',
      days: ['Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za', 'Zo'],
      posts: [
        { day: 0, type: 'Post', label: 'Productnieuws' },
        { day: 1, type: 'Story', label: 'Achter de schermen' },
        { day: 2, type: 'Video', label: 'Zo werkt het' },
        { day: 3, type: 'Post', label: 'Klantverhaal' },
        { day: 4, type: 'Story', label: 'Vraag aan de community' },
        { day: 5, type: 'Video', label: 'Evenement van de week' }
      ]
    },
    title: 'Socialmediabeheer',
    metaTitle: 'Socialmediabeheer voor bedrijven | Sodano Consulting',
    metaDesc: 'Strategie, content, publicatie en resultaatanalyse op sociale netwerken, met een contentplanning die is afgestemd op de doelen van uw bedrijf.',
    lead: 'Wij beheren de socialmediaprofielen van uw bedrijf met een duidelijk plan, verzorgde inhoud en gemeten resultaten.',
    intro: [
      'Regelmatig posten is lastig als social media het laatste is waar iemand in het bedrijf aan denkt. Het resultaat zijn profielen die maandenlang stilliggen of geïmproviseerde berichten die niets opleveren.',
      'Wij behandelen social media als een werkkanaal: heldere doelen, een contentkalender, inhoud die past bij uw merkidentiteit en een regelmatige controle van wat werkt.'
    ],
    includes: [
      { t: 'Strategie', d: 'Welke kanalen, welke doelgroep en met welke doelen.' },
      { t: 'Contentplanning', d: 'Een inhoudskalender die vooraf met u wordt afgestemd.' },
      { t: 'Content maken', d: 'Teksten, beelden, foto’s en video’s voor elk platform.' },
      { t: 'Publicatie en community', d: 'Beheer van de profielen en aandacht voor reacties en berichten.' },
      { t: 'Resultaatanalyse', d: 'Regelmatige rapporten en bijsturing van het plan op basis van de gegevens.' }
    ],
    approach: [
      'We beginnen met een analyse van uw huidige profielen en van de concurrentie en bepalen daarna doelen en plan. Elke maand delen we de kalender vóór publicatie en aan het eind van de periode wat werkte en wat we veranderen.',
      'Waar nodig vullen we de organische inhoud aan met betaalde campagnes, beheerd door hetzelfde team.'
    ],
    faq: [
      { q: 'Op welke sociale netwerken moeten we actief zijn?', a: 'Dat hangt af van wie uw klanten zijn. Liever een paar goed verzorgde kanalen dan veel verlaten: dat bepalen we samen in de strategiefase.' },
      { q: 'Moeten wij de berichten goedkeuren?', a: 'Ja, de contentplanning wordt vóór publicatie gedeeld.' },
      { q: 'Hoe weten we of het werkt?', a: 'Via regelmatige rapporten over indicatoren die aan uw doelen gekoppeld zijn, niet alleen het aantal likes.' }
    ]
  },
  ads: {
    slug: 'online-adverteren-en-seo',
    sig: {
      kind: 'twoRoads',
      title: 'Twee wegen die samenwerken',
      ads: { t: 'Betaalde campagnes', d: 'Leveren direct bezoekers op, zolang de campagne loopt.' },
      seo: { t: 'SEO', d: 'Groeit langzamer, maar de posities blijven.' },
      axis: 'Tijd',
      note: 'Indicatief verloop'
    },
    title: 'Online adverteren en SEO',
    metaTitle: 'Online adverteren en SEO voor bedrijven | Sodano Consulting',
    metaDesc: 'Advertentiecampagnes op Google en social media en zoekmachineoptimalisatie, om mensen die geïnteresseerd zijn in uw aanbod naar uw website te brengen.',
    lead: 'Wij brengen mensen naar uw website die precies zoeken wat u aanbiedt: op korte termijn met advertentiecampagnes, op lange termijn met SEO.',
    intro: [
      'Een goede website zonder bezoekers levert niets op. Er zijn twee aanvullende manieren om gevonden te worden: online adverteren, dat direct bezoekers oplevert maar alleen zolang u betaalt, en SEO, dat aan de natuurlijke posities werkt en met de tijd groeit.',
      'We beheren ze samen, met hetzelfde doel: aanvragen en verkopen, gemeten met betrouwbare gegevens.'
    ],
    includes: [
      { t: 'Zoekmachinecampagnes', d: 'Advertenties voor mensen die naar uw producten of diensten zoeken.' },
      { t: 'Socialmediacampagnes', d: 'Advertenties voor een doelgroep die is bepaald op interesses, regio of beroep.' },
      { t: 'Technische SEO', d: 'Snelheid, sitestructuur, adressen, gestructureerde gegevens en indexering.' },
      { t: 'Content voor SEO', d: 'Pagina’s en artikelen geschreven rond de echte zoekopdrachten van uw klanten.' },
      { t: 'Meten', d: 'Conversiemeting met respect voor cookietoestemming, en regelmatige rapporten.' }
    ],
    approach: [
      'We beginnen bij zoekopdrachten en doelgroep: waar zoeken uw potentiële klanten naar en wat is een aanvraag u waard? Op basis daarvan verdelen we het budget tussen adverteren en SEO en stellen we meetbare doelen.',
      'We controleren de resultaten regelmatig en verschuiven middelen naar wat het meest oplevert, en we delen cijfers en keuzes met u.'
    ],
    faq: [
      { q: 'Wanneer zien we resultaat?', a: 'Met betaalde campagnes binnen een paar dagen. SEO kost meestal een paar maanden, maar de resultaten blijven ook als u niet voor advertenties betaalt.' },
      { q: 'Welk advertentiebudget hebben we nodig?', a: 'Dat hangt af van de sector en de concurrentie. We stellen een haalbaar startbedrag voor en passen het aan op basis van de resultaten.' },
      { q: 'Kunnen jullie de eerste plek op Google garanderen?', a: 'Nee, en wees op uw hoede voor wie dat belooft: posities bepaalt Google. Wij garanderen zorgvuldig werk en transparant gemeten resultaten.' }
    ]
  },
  media: {
    slug: 'foto-video-en-droneopnames',
    sig: {
      kind: 'shotTypes',
      title: 'Wat we vastleggen',
      items: ['Bedrijven en werkplekken', 'Producten', 'Mensen en teams', 'Evenementen', 'Gebouwen en bouwplaatsen van bovenaf', 'Landschappen en plekken']
    },
    title: 'Foto, video en droneopnames',
    metaTitle: 'Bedrijfsfoto’s, video’s en droneopnames | Sodano Consulting',
    metaDesc: 'Fotoshoots, bedrijfsvideo’s en luchtopnames met drones voor website, social media, campagnes en evenementen.',
    lead: 'Wij maken foto’s, video’s en luchtopnames die het verhaal vertellen van uw bedrijf, uw producten en uw ruimtes.',
    intro: [
      'Beelden zijn het eerste waar mensen naar kijken op een website of social media. Stockfoto’s en met de telefoon gefilmde video’s doen weinig: eigen, zorgvuldig gemaakte beelden maken een bedrijf geloofwaardiger en herkenbaarder.',
      'Droneopnames voegen een perspectief toe dat anders onmogelijk is: gebouwen, installaties, bouwplaatsen, landschappen en evenementen van bovenaf.'
    ],
    includes: [
      { t: 'Fotoshoots', d: 'Producten, werkplekken, mensen en evenementen.' },
      { t: 'Bedrijfsvideo’s', d: 'Bedrijfspresentaties, productvideo’s, korte content voor social media.' },
      { t: 'Luchtopnames met drone', d: 'Foto’s en video’s van bovenaf van gebouwen, terreinen, bouwplaatsen en evenementen.' },
      { t: 'Montage', d: 'Montage, graphics, ondertitels en versies in de formaten van elk platform.' }
    ],
    approach: [
      'Elke opname bereiden we voor met een bezoek ter plaatse of een gesprek over de doelen en de beelden die nodig zijn. Na de opname selecteren en bewerken we het materiaal en leveren we het klaar voor website, social media en campagnes.'
    ],
    faq: [
      { q: 'Mag een drone overal vliegen?', a: 'Nee: bij luchthavens, in bebouwde gebieden of in beschermde natuur gelden beperkingen of zijn vergunningen nodig. Voor de opnames controleren we het gebied en plannen we de vlucht volgens de regels.' },
      { q: 'Mag ik het materiaal overal gebruiken?', a: 'We spreken het beoogde gebruik vooraf af, zodat het materiaal klaar is voor alle kanalen die u nodig hebt.' }
    ]
  },
  xr: {
    slug: '3d-en-augmented-reality',
    sig: {
      kind: 'configurator',
      title: 'Probeer een configurator',
      text: 'Een voorbeeld geïnspireerd op een van onze projecten: een configurator voor beitels van pneumatische hamers. Kies vorm en lengte en het model past zich aan.',
      note: 'Vereenvoudigde demonstratie',
      groups: [
        { key: 'shape', label: 'Vorm', options: [{ v: 'point', t: 'Puntbeitel' }, { v: 'flat', t: 'Platte beitel' }, { v: 'wide', t: 'Brede beitel' }, { v: 'spade', t: 'Spadebeitel' }] },
        { key: 'length', label: 'Lengte', options: [{ v: 's', t: 'Kort' }, { v: 'm', t: 'Middel' }, { v: 'l', t: 'Lang' }] }
      ]
    },
    title: '3D en augmented reality',
    metaTitle: '3D-productconfigurators en augmented reality | Sodano Consulting',
    metaDesc: '3D-configurators, productmodellen en renders om technische en aanpasbare producten te tonen en te verkopen: de klant kiest de varianten en ziet direct het resultaat.',
    lead: 'Wij maken 3D-configurators en productmodellen: de klant kiest de varianten, ziet direct het resultaat en komt met een duidelijk beeld naar de aanvraag.',
    intro: [
      'Als een product in veel varianten bestaat, volstaan foto’s en pdf-catalogi niet: klanten begrijpen de verschillen moeilijk en de verkoop beantwoordt steeds dezelfde vragen.',
      'Een 3D-configurator lost dat bij de bron op. We hebben er bijvoorbeeld een gebouwd voor beitels van pneumatische hamers: vorm, afmetingen en opname worden gekozen in een eenvoudige interface en het 3D-model toont direct het resultaat, van alle kanten.'
    ],
    includes: [
      { t: 'Productconfigurators', d: 'De klant kiest varianten, maten en opties en ziet het product in realtime veranderen.' },
      { t: '3D-modellen', d: 'Driedimensionale modellen om te draaien en in te zoomen, ontworpen om snel te laden in de browser.' },
      { t: 'Renders en animaties', d: 'Productbeelden en -video’s voor website, catalogi, social media en beurzen.' },
      { t: 'Gekoppeld aan aanvragen', d: 'De gekozen configuratie komt mee met de offerteaanvraag, zonder alles opnieuw uit te leggen.' },
      { t: 'Augmented reality', d: 'Waar het zinvol is, kan het model met een smartphone in de echte ruimte worden bekeken.' }
    ],
    approach: [
      'We beginnen met het materiaal dat u al hebt: technische tekeningen, CAD-bestanden, foto’s en prijslijsten. Samen bepalen we welke varianten we tonen en welke regels de opties verbinden, zodat de configurator alleen mogelijke combinaties aanbiedt.',
      'De configurator staat op uw website en kan gekoppeld worden aan uw bedrijfssoftware of offerteformulier, zodat elke configuratie direct werk wordt voor uw verkoopteam.'
    ],
    faq: [
      { q: 'Hebben jullie 3D-bestanden van het product nodig?', a: 'Als die er zijn, gebruiken we ze als basis. Anders vertrekken we van technische tekeningen en foto’s en maken we de modellen zelf.' },
      { q: 'Werkt de configurator op de website, zonder iets te installeren?', a: 'Ja, hij werkt in de browser op computer, tablet en smartphone.' },
      { q: 'Is het zinvol voor technische of industriële producten?', a: 'Ja, juist daar helpt het vaak het meest: veel varianten en verschillen die moeilijk in woorden uit te leggen zijn.' }
    ]
  },
  infra: {
    slug: 'it-infrastructuur-en-netwerken',
    sig: {
      kind: 'topology',
      title: 'Een netwerk op orde',
      text: 'Een voorbeeld van een bedrijfsnetwerk: internetverbinding beschermd door een firewall, een intern netwerk voor medewerkers en een apart netwerk voor gasten.',
      nodes: { internet: 'Internet', firewall: 'Firewall', switch: 'Switch', pc: 'Werkplekken', server: 'Server', printer: 'Printers', wifi: 'Intern wifi', guest: 'Gastenwifi' }
    },
    title: 'IT-infrastructuur en netwerken',
    metaTitle: 'IT-infrastructuur en bedrijfsnetwerken | Sodano Consulting',
    metaDesc: 'Ontwerp, installatie en beheer van netwerken, servers en werkplekken voor bedrijven en kantoren, met ondersteuning door het Sodano-team.',
    lead: 'Wij ontwerpen en beheren netwerken, servers en werkplekken, zodat de techniek op kantoor werkt en niemand ophoudt.',
    intro: [
      'Een traag netwerk, wifi dat niet elke ruimte bereikt, computers die ieder op zijn eigen manier is ingericht, niemand die precies weet waar de gegevens staan: veelvoorkomende problemen die elke week uren kosten en risico’s vergroten.',
      'Wij brengen orde in de IT-infrastructuur van uw bedrijf en onderhouden die op termijn, met één aanspreekpunt voor netwerk, apparaten en servers.'
    ],
    includes: [
      { t: 'Inventarisatie', d: 'Overzicht van netwerk, apparaten, servers en zwakke plekken.' },
      { t: 'Bekabelde netwerken en wifi', d: 'Ontwerp en configuratie, met aparte netwerken voor gasten en apparaten.' },
      { t: 'Servers en opslag op locatie', d: 'Servers, gedeelde mappen en toegangsrechten.' },
      { t: 'Werkplekken', d: 'Inrichting en onderhoud van computers en apparaten.' },
      { t: 'Ondersteuning', d: 'Hulp op afstand en op locatie als er iets niet werkt.' }
    ],
    approach: [
      'We beginnen met een bezoek ter plaatse en een analyse van hoe u werkt. We stellen de ingrepen voor in volgorde van prioriteit, zodat u de kosten kunt spreiden, en we documenteren alles wat we configureren.',
      'Daarna blijven we uw aanspreekpunt voor ondersteuning, vanuit onze kantoren in Valenzano (Bari) en Rome.'
    ],
    faq: [
      { q: 'Werken jullie ook met de apparatuur die we al hebben?', a: 'Ja. We beoordelen wat hergebruikt kan worden en wat vervangen moet worden, zonder alles te vervangen als dat niet nodig is.' },
      { q: 'Kunnen jullie meerdere vestigingen ondersteunen?', a: 'Ja, ook door de netwerken van verschillende vestigingen met elkaar te verbinden.' },
      { q: 'Is er ook ondersteuning op locatie?', a: 'We helpen op afstand waar mogelijk en op locatie waar nodig. De details spreken we af op basis van uw locatie en behoeften.' }
    ]
  },
  cloud: {
    slug: 'cloud-computing',
    sig: {
      kind: 'whereTo',
      title: 'Wat naar de cloud moet',
      cloud: { t: 'Meestal zinvol in de cloud', items: ['E-mail, agenda’s en gedeelde documenten', 'Websites en software voor meerdere vestigingen', 'Back-ups buiten de deur', 'Diensten die snel moeten kunnen groeien'] },
      onsite: { t: 'Vaak beter op locatie', items: ['Lokaal aangesloten apparaten en machines', 'Zeer grote archieven die alleen op kantoor worden gebruikt', 'Systemen die ook zonder internet moeten werken'] },
      note: 'Elke situatie moet worden beoordeeld: dat is de eerste stap die we samen zetten.'
    },
    title: 'Cloud computing',
    metaTitle: 'Clouddiensten en cloudmigratie voor bedrijven | Sodano Consulting',
    metaDesc: 'Cloudmigratie, e-mail en samenwerkingstools, cloudservers en kostenbeheer, met voortdurende aandacht voor beveiliging en gegevens.',
    lead: 'Wij helpen u de cloud te kiezen en te gebruiken waar het echt loont: om overal te werken, onderhoud te verminderen en diensten te laten meegroeien.',
    intro: [
      'De cloud is geen enkele plek maar een verzameling diensten: e-mail en gedeelde documenten, virtuele servers, opslag, applicaties. Er goed gebruik van maken betekent kiezen wat verhuist, wat op locatie blijft en hoe u kosten en toegang onder controle houdt.',
      'We begeleiden u bij de keuzes en de migratie en blijven uw aanspreekpunt voor het dagelijks beheer.'
    ],
    includes: [
      { t: 'Beoordeling', d: 'Wat zinvol is in de cloud, tegen welke kosten en met welke risico’s.' },
      { t: 'Migratie', d: 'Verhuizing van gegevens, e-mail en applicaties met zo min mogelijk onderbreking van het werk.' },
      { t: 'Samenwerkingstools', d: 'E-mail, agenda’s en gedeelde documenten ingericht voor uw bedrijf.' },
      { t: 'Cloudservers', d: 'Omgevingen voor applicaties en bedrijfssoftware die met uw behoeften meegroeien.' },
      { t: 'Toegang en kosten onder controle', d: 'Rechten, veilige authenticatie en regelmatige kostencontrole.' }
    ],
    approach: [
      'We gaan uit van hoe u vandaag werkt en wat u morgen nodig hebt. We plannen de migratie in fasen, te beginnen met de minst kritieke diensten, en controleren elke stap voor de volgende.',
      'De cloud past in de rest van uw infrastructuur: back-up, beveiliging en netwerken ontwerpen we samen.'
    ],
    faq: [
      { q: 'Is de cloud veilig?', a: 'Dat kan, als hij goed is ingericht: toegangsregels, meervoudige authenticatie, back-ups en rechten maken het verschil. Daar werken we het meest aan.' },
      { q: 'Moeten we alles naar de cloud verhuizen?', a: 'Niet altijd. Sommige diensten werken beter op locatie; we beoordelen het per geval.' },
      { q: 'Kunnen we later terug?', a: 'We plannen migraties zo dat de gegevens exporteerbaar blijven en niet meer dan nodig van één leverancier afhangen.' }
    ]
  },
  backup: {
    slug: 'back-up-en-archivering',
    sig: {
      kind: 'copies',
      title: 'Meerdere kopieën, op verschillende plekken',
      text: 'Een goede regel: meerdere kopieën van uw gegevens, op verschillende media, minstens één buiten het kantoor. En regelmatige hersteltests.',
      source: 'Uw gegevens',
      copies: [{ t: 'Op locatie', d: 'Voor snel herstel' }, { t: 'Buiten de deur', d: 'Tegen storingen, diefstal en brand' }, { t: 'In de cloud', d: 'Gescheiden van het bedrijfsnetwerk' }],
      test: 'Hersteltest'
    },
    title: 'Back-up en archivering',
    metaTitle: 'Back-ups en gegevensarchivering voor bedrijven | Sodano Consulting',
    metaDesc: 'Back-up- en herstelplannen voor gegevens, servers en applicaties: automatische kopieën, bewaard op verschillende plekken en gecontroleerd met hersteltests.',
    lead: 'Wij ontwerpen back-ups die echt werken als het nodig is: automatisch, op verschillende plekken bewaard en gecontroleerd met hersteltests.',
    intro: [
      'Een storing, een vergissing, een cyberaanval: vroeg of laat moeten gegevens worden teruggezet. Dan blijkt of er een back-up is, of die actueel is en vooral of die kan worden hersteld.',
      'Daarom richten we niet alleen kopieën in: we bepalen wat er wordt bewaard, hoe vaak, waar en hoe het wordt hersteld, en we controleren regelmatig of het herstel werkt.'
    ],
    includes: [
      { t: 'Analyse van de te beschermen gegevens', d: 'Welke gegevens kritiek zijn, hoe vaak ze veranderen en hoe lang u stil kunt liggen.' },
      { t: 'Automatische back-ups', d: 'Geplande kopieën van bestanden, databases, servers en applicaties.' },
      { t: 'Kopieën op verschillende plekken', d: 'Minstens één kopie buiten het kantoor, tegen storingen, diefstal of ransomware.' },
      { t: 'Hersteltests', d: 'Regelmatige controles of de gegevens echt kunnen worden teruggezet.' },
      { t: 'Archivering', d: 'Geordende opslag van gegevens die niet dagelijks nodig zijn maar bewaard moeten blijven.' }
    ],
    approach: [
      'We beginnen met een eenvoudige vraag: als u deze gegevens morgen kwijt zou zijn, wat zou dat kosten? De antwoorden bepalen het back-upplan, dat we helder documenteren samen met de herstelprocedure.',
      'Back-up is ook een essentieel onderdeel van cyberbeveiliging, en we ontwerpen beide samen.'
    ],
    faq: [
      { q: 'We hebben al een externe schijf: is dat genoeg?', a: 'Meestal niet: als de schijf aangesloten blijft of op kantoor ligt, kan een storing, diefstal of aanval ook die treffen. Er is minstens één aparte kopie nodig.' },
      { q: 'Hoe vaak moet er een back-up worden gemaakt?', a: 'Dat hangt af van hoe vaak uw gegevens veranderen en hoeveel werk u opnieuw zou kunnen doen. We bepalen het samen.' },
      { q: 'Beschermen jullie ook back-ups van websites en bedrijfssoftware?', a: 'Ja, inclusief de databases en servers die wij beheren.' }
    ]
  },
  security: {
    slug: 'cyberbeveiliging',
    sig: {
      kind: 'checklist',
      title: 'Een snelle check',
      text: 'Vink de maatregelen aan die uw bedrijf al heeft. We bewaren uw antwoorden niet: ze zijn alleen voor u.',
      items: [
        'Belangrijke accounts gebruiken tweestapsverificatie',
        'Systemen en programma’s worden regelmatig bijgewerkt',
        'Er is een back-up buiten de deur, onlangs getest',
        'Iedereen heeft alleen toegang tot de gegevens die hij nodig heeft',
        'Medewerkers herkennen frauduleuze e-mails',
        'Er is een firewall die is ingericht en gecontroleerd'
      ],
      results: {
        low: 'Er is veel ruimte voor verbetering: laten we beginnen met de maatregelen die het risico het meest verkleinen.',
        mid: 'Een goede basis, maar er ontbreken maatregelen. Een analyse helpt bepalen waar u begint.',
        high: 'Een uitstekend vertrekpunt. Een regelmatige controle helpt het zo te houden.'
      },
      countLabel: 'maatregelen van'
    },
    title: 'Cyberbeveiliging',
    metaTitle: 'Cyberbeveiliging voor bedrijven en overheden | Sodano Consulting',
    metaDesc: 'Risicoanalyse, bescherming van netwerken, apparaten en accounts, back-up en training van medewerkers om het risico op aanvallen en gegevensverlies te verkleinen.',
    lead: 'Wij verkleinen het risico dat een cyberaanval of vergissing uw bedrijf stillegt, met concrete en passende maatregelen.',
    intro: [
      'Cyberaanvallen treffen niet alleen grote bedrijven: phishingmails, gestolen wachtwoorden en ransomware richten zich ook op kleine bedrijven en overheden, vaak juist omdat die minder beschermd zijn.',
      'Beveiliging is geen product dat u installeert, maar een geheel van maatregelen: technisch, organisatorisch en via training. We helpen u te zien waar u het kwetsbaarst bent en daar eerst in te grijpen.'
    ],
    includes: [
      { t: 'Risicoanalyse', d: 'Controle van netwerken, apparaten, accounts en procedures om zwakke plekken te vinden.' },
      { t: 'Bescherming van netwerken en apparaten', d: 'Firewalls, updates, antivirus en veilige configuraties.' },
      { t: 'Accounts en toegang', d: 'Meervoudige authenticatie, beheer van wachtwoorden en rechten.' },
      { t: 'Back-up en herstel', d: 'Beschermde kopieën om ook na een aanval weer op te starten.' },
      { t: 'Training', d: 'Praktische aanwijzingen voor medewerkers om oplichting en risicovol gedrag te herkennen.' }
    ],
    approach: [
      'We beginnen met een analyse van de huidige situatie en geven u een lijst met maatregelen in volgorde van prioriteit, begrijpelijk uitgelegd. We starten met de maatregelen die het risico met de minste moeite het meest verkleinen.',
      'Beveiliging moet worden onderhouden: updates, regelmatige controles en herziening van toegangsrechten horen bij het doorlopende werk.'
    ],
    faq: [
      { q: 'We zijn een klein bedrijf: lopen we echt risico?', a: 'Ja. Veel aanvallen zijn geautomatiseerd en treffen iedereen met een zwakke plek, ongeacht de omvang.' },
      { q: 'Wat te doen na een aanval?', a: 'De getroffen systemen isoleren, geen losgeld betalen zonder advies en direct de beheerder van uw infrastructuur bellen. Een goede back-up maakt herstel mogelijk.' },
      { q: 'Helpen jullie ook met wettelijke verplichtingen?', a: 'We ondersteunen u bij de technische kant van de beveiligingsmaatregelen die de AVG vereist; voor de juridische aspecten werken we samen met uw adviseur.' }
    ]
  }
};

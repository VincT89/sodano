/* Pagine dedicate ai singoli servizi (una per voce degli elenchi Developer / Marketing / System).
   - pillar: area del servizio (dev, mkt, sys); item: posizione della voce nell'elenco dell'area
   - content: una chiave per lingua; se una lingua manca, quella pagina non viene creata
   - nelle tecnologie, confirm: true = da confermare: compare solo in sviluppo, mai nel sito pubblicato
   - draft: true = pagina in bozza: visibile solo in sviluppo, esclusa da sito pubblicato e sitemap
   - preview: true = pubblicata ma con noindex e fuori dalla sitemap (per farla vedere prima che sia definitiva)
   - i testi tra [[ ]] sono segnaposto da sostituire
   BOZZE da far rivedere a Sodano prima della pubblicazione. */

import en from './i18n/services.en.js';
import de from './i18n/services.de.js';
import nl from './i18n/services.nl.js';

export const SERVICES = [
  {
    id: 'hosting',
    pillar: 'sys',
    item: 1,
    image: '/assets/services/hosting.webp',
    layout: { hero: 'split', includes: 'rows', order: ['intro',  'includes',  'tech',  'approach',  'faq'] },
    content: {
      it: {
        slug: 'hosting-e-server',
        title: 'Hosting e server',
        metaTitle: 'Hosting e server gestiti per aziende | Sodano Consulting',
        metaDesc: 'Hosting e server gestiti per siti, applicazioni web e gestionali: configurazione, aggiornamenti, sicurezza e assistenza dal team che sviluppa il software.',
        lead: 'Ospitiamo e gestiamo siti, applicazioni web e gestionali su server configurati per il tuo progetto. Tu ti occupi del lavoro, noi della macchina.',
        intro: [
          'Un sito o un gestionale funzionano bene solo se l’ambiente in cui girano è curato: versioni aggiornate, certificati validi, risorse adeguate, controlli di sicurezza. Quando qualcosa si rompe, conta sapere chi interviene e quanto conosce il progetto.',
          'Il nostro vantaggio è che hosting e sviluppo stanno nella stessa squadra. Chi gestisce il server conosce le applicazioni che ci girano sopra, e chi le sviluppa sa come sono configurate. Niente rimpalli tra fornitori diversi.'
        ],
        includes: [
          { t: 'Hosting per siti e applicazioni web', d: 'Spazio, domini, certificati SSL/TLS e configurazione dell’ambiente in base alle tecnologie che usi.' },
          { t: 'Ambienti per applicazioni', d: 'PHP, Node.js e Laravel con pubblicazione da repository Git: ogni aggiornamento del codice arriva online in modo ordinato.' },
          { t: 'Aggiornamenti e sicurezza', d: 'Manutenzione del sistema, firewall applicativo e scansione delle minacce sul server.' },
          { t: 'Backup', d: 'Piani di backup concordati in base all’importanza dei dati e a quanto spesso cambiano.' },
          { t: 'Trasferimenti', d: 'Se il tuo progetto è già online altrove, valutiamo insieme come spostarlo riducendo al minimo l’interruzione.' }
        ],
        approach: [
          'Partiamo da cosa deve girare sul server: un sito vetrina, un e-commerce, un gestionale con molti utenti o un’applicazione che scambia dati con altri sistemi hanno esigenze molto diverse. Su questa base scegliamo l’ambiente e le risorse, senza sovradimensionare e senza lasciarti stretto.',
          'Dopo la messa online restiamo il tuo riferimento: aggiornamenti, controlli e interventi passano da noi, con gli uffici di Valenzano (BA) e Roma.'
        ],
        tech: [
          { group: 'Linguaggi e ambienti', items: [{ name: 'PHP 8.4' }, { name: 'Node.js 20, 22 e 24' }] },
          { group: 'Framework e strumenti', items: [{ name: 'Laravel' }, { name: 'Composer' }, { name: 'Git' }] },
          { group: 'Database', items: [{ name: 'MySQL / MariaDB' }, { name: 'PostgreSQL' }] },
          { group: 'Automazioni', items: [{ name: 'n8n' }] },
          { group: 'Sicurezza', items: [{ name: 'Certificati SSL/TLS' }, { name: 'Web Application Firewall' }, { name: 'Imunify' }] }
        ],
        faq: [
          { q: 'Posso portare da voi un sito che è già online?', a: 'Sì. Prima analizziamo com’è fatto e dove si trova oggi, poi concordiamo tempi e modalità del trasferimento per ridurre al minimo l’interruzione.' },
          { q: 'Il mio gestionale usa Laravel o Node.js: posso ospitarlo?', a: 'Sono tra le tecnologie supportate. Se il progetto ha esigenze particolari, come servizi sempre attivi o molte risorse, ne parliamo prima per scegliere la configurazione giusta.' },
          { q: 'Chi interviene se qualcosa non funziona?', a: 'Il nostro team, lo stesso che conosce il server e, se l’abbiamo sviluppata noi, anche la tua applicazione.' },
          { q: 'Quanto costa?', a: 'Dipende da cosa deve girare sul server e dal livello di assistenza che ti serve. Dopo un primo confronto ti prepariamo una proposta su misura.' }
        ]
      }
    }
  },
  {
    id: 'webapp',
    pillar: 'dev',
    item: 1,
    image: '/assets/services/webapp.webp',
    layout: { hero: 'full', includes: 'rows', order: ['sig',  'intro',  'includes',  'approach',  'faq'] },
    content: {
      it: {
        slug: 'web-app-e-gestionali',
        sig: {
          "kind": "beforeAfter",
          "title": "Da così a così",
          "beforeLabel": "Prima",
          "before": [
            "Fogli di calcolo condivisi via email",
            "Dati copiati a mano da un programma all’altro",
            "Ognuno con la sua versione dei numeri",
            "Report preparati a fine mese"
          ],
          "afterLabel": "Con un gestionale su misura",
          "after": [
            "Un unico posto per dati e pratiche",
            "Informazioni che passano da sole tra i sistemi",
            "Tutti vedono gli stessi dati, aggiornati",
            "Cruscotti sempre pronti"
          ]
        },
        title: 'Web app e gestionali',
        metaTitle: 'Sviluppo web app e gestionali su misura | Sodano Consulting',
        metaDesc: 'Gestionali e applicazioni web su misura per aziende e PA: processi digitalizzati, dati in un unico posto, integrazioni con i software che usi già.',
        lead: 'Sviluppiamo gestionali e applicazioni web costruiti intorno al modo in cui lavora la tua azienda, non il contrario.',
        intro: [
          'Fogli di calcolo condivisi, email per passarsi le informazioni, programmi diversi che non si parlano: è il punto in cui molte aziende perdono tempo ed errori si moltiplicano. Un gestionale su misura mette processi e dati in un unico posto, accessibile dal browser da ufficio, casa o telefono.',
          'Lo progettiamo partendo dalle persone che lo useranno ogni giorno, perché un software che nessuno usa volentieri non risolve niente.'
        ],
        includes: [
          { t: 'Analisi dei processi', d: 'Capiamo come lavorate oggi, dove si perde tempo e cosa serve davvero automatizzare.' },
          { t: 'Gestionali su misura', d: 'Anagrafiche, pratiche, ordini, prenotazioni, magazzino o qualunque flusso specifico della tua attività.' },
          { t: 'Utenti, ruoli e permessi', d: 'Ognuno vede e modifica solo ciò che gli compete, con traccia delle operazioni.' },
          { t: 'Report e cruscotti', d: 'I numeri che ti servono per decidere, aggiornati e senza esportazioni manuali.' },
          { t: 'Integrazioni', d: 'Collegamento con i software che usi già, tramite API o scambio di dati.' },
          { t: 'Evoluzione nel tempo', d: 'Assistenza e nuove funzioni man mano che l’azienda cambia.' }
        ],
        approach: [
          'Lavoriamo per passi: prima le funzioni che risolvono il problema principale, messe subito in mano a chi le userà, poi il resto in base a quello che emerge dall’uso reale. Così vedi risultati presto e il progetto non si allontana dalle esigenze vere.',
          'Possiamo anche ospitare e mantenere il gestionale sui nostri server, così sviluppo, hosting e assistenza restano in un’unica squadra.'
        ],
        faq: [
          { q: 'Meglio un gestionale su misura o un software già pronto?', a: 'Se un prodotto esistente copre bene il tuo lavoro, spesso conviene quello. Il su misura ha senso quando i tuoi processi sono specifici o quando i software pronti ti costringono a giri complicati. Te lo diciamo con franchezza dopo l’analisi.' },
          { q: 'Di chi sono i dati?', a: 'Tuoi. Li puoi esportare e, se lo desideri, il gestionale può essere ospitato dove preferisci.' },
          { q: 'Si può collegare ai programmi che usiamo già?', a: 'Nella maggior parte dei casi sì, se il programma permette lo scambio di dati. Lo verifichiamo nella fase di analisi.' },
          { q: 'Quanto tempo serve?', a: 'Dipende dalla complessità. Dopo l’analisi ti diamo una stima e un piano di rilasci, partendo dalle funzioni più importanti.' }
        ]
      }
    }
  },
  {
    id: 'websites',
    pillar: 'dev',
    item: 0,
    image: '/assets/services/websites.webp',
    layout: { hero: 'split', includes: 'list', order: ['intro',  'sig',  'includes',  'approach',  'faq'] },
    content: {
      it: {
        slug: 'siti-web-ed-e-commerce',
        sig: {
          "kind": "devices",
          "title": "Un solo sito, ogni schermo",
          "text": "Progettiamo ogni pagina perché si riorganizzi da sola: su computer, tablet e telefono i contenuti restano leggibili e i pulsanti a portata di dito.",
          "labels": [
            "Computer",
            "Telefono"
          ]
        },
        title: 'Siti web ed e-commerce',
        metaTitle: 'Realizzazione siti web ed e-commerce | Sodano Consulting',
        metaDesc: 'Siti web ed e-commerce per aziende e PA: progettati sui tuoi obiettivi, veloci, accessibili, ottimizzati per i motori di ricerca e facili da gestire.',
        lead: 'Realizziamo siti ed e-commerce pensati per portare contatti e vendite, non solo per essere belli.',
        intro: [
          'Il sito è spesso il primo contatto tra un cliente e la tua azienda. Deve far capire in pochi secondi cosa fai, funzionare bene sul telefono, caricarsi in fretta e guidare chi lo visita verso una richiesta o un acquisto.',
          'Per questo partiamo dagli obiettivi: chi deve arrivare sul sito, cosa deve trovare e cosa vuoi che faccia. Grafica e tecnologia vengono dopo, al servizio di queste risposte.'
        ],
        includes: [
          { t: 'Siti aziendali e istituzionali', d: 'Struttura, testi e grafica coerenti con la tua identità, in una o più lingue.' },
          { t: 'E-commerce', d: 'Catalogo, carrello, pagamenti e spedizioni, con una gestione degli ordini semplice per chi lavora in negozio.' },
          { t: 'Velocità e accessibilità', d: 'Pagine leggere, leggibili da tutti e utilizzabili su qualsiasi dispositivo.' },
          { t: 'SEO tecnica', d: 'Indirizzi chiari, titoli e descrizioni curati, contenuti leggibili dai motori di ricerca.' },
          { t: 'Privacy e cookie', d: 'Informative, consenso ai cookie e moduli di contatto conformi al GDPR.' },
          { t: 'Hosting e manutenzione', d: 'Possiamo ospitare e aggiornare il sito sui nostri server, così hai un solo riferimento.' }
        ],
        approach: [
          'Prima di disegnare analizziamo il tuo pubblico, i concorrenti e i contenuti disponibili. Ne nasce una struttura su cui lavoriamo insieme, poi grafica e sviluppo. Prima della pubblicazione verifichiamo il sito su computer e telefono.',
          'Dopo il lancio possiamo seguire anche la parte di marketing: campagne, social e posizionamento sui motori di ricerca.'
        ],
        faq: [
          { q: 'Potrò modificare da solo i contenuti?', a: 'Lo decidiamo insieme in base a quanto spesso cambiano: per contenuti che aggiorni di frequente prevediamo un sistema di gestione semplice da usare.' },
          { q: 'Il sito sarà adatto ai telefoni?', a: 'Sì, lo progettiamo e lo verifichiamo su schermi di ogni dimensione.' },
          { q: 'Potete rifare un sito che ho già?', a: 'Sì. Partiamo da cosa funziona e cosa no nel sito attuale, e curiamo il passaggio per non perdere il posizionamento sui motori di ricerca.' },
          { q: 'Quanto costa?', a: 'Dipende dal numero di pagine, dalle lingue e dalle funzioni, per esempio un e-commerce. Dopo un primo confronto ti prepariamo una proposta.' }
        ]
      }
    }
  },
  {
    id: 'integrations',
    pillar: 'dev',
    item: 2,
    image: '/assets/services/integrations.webp',
    layout: { hero: 'center', includes: 'columns', order: ['intro',  'sig',  'includes',  'approach',  'faq'] },
    content: {
      it: {
        slug: 'integrazioni-e-api',
        sig: {
          "kind": "network",
          "title": "Tutti i sistemi, un solo flusso",
          "text": "Un esempio di come i dati possono passare tra i software di un’azienda senza essere ricopiati.",
          "hub": "API",
          "nodes": [
            "Gestionale",
            "E-commerce",
            "CRM",
            "Pagamenti",
            "Fatturazione",
            "Partner"
          ]
        },
        title: 'Integrazioni e API',
        metaTitle: 'Integrazioni software e sviluppo API | Sodano Consulting',
        metaDesc: 'Colleghiamo gestionali, e-commerce, CRM e servizi esterni tramite API: dati che passano da un sistema all’altro senza copiarli a mano.',
        lead: 'Facciamo parlare tra loro i software che usi, così i dati passano da un sistema all’altro senza essere ricopiati a mano.',
        intro: [
          'Ordini che arrivano dall’e-commerce e vanno reinseriti nel gestionale, anagrafiche duplicate tra CRM e fatturazione, report costruiti copiando numeri da tre programmi diversi: ogni passaggio manuale costa tempo e porta errori.',
          'Un’integrazione ben fatta elimina questi passaggi. Usiamo le API messe a disposizione dai software, oppure ne sviluppiamo di nuove quando servono, perché i tuoi sistemi diventino un flusso unico.'
        ],
        includes: [
          { t: 'Analisi dei flussi di dati', d: 'Ricostruiamo quali informazioni passano tra i sistemi, chi le modifica e dove nascono gli errori.' },
          { t: 'Collegamento tra software esistenti', d: 'Gestionali, e-commerce, CRM, piattaforme di pagamento o di prenotazione, servizi di terze parti.' },
          { t: 'Sviluppo di API', d: 'Interfacce documentate per esporre i dati del tuo software a partner, app o altri sistemi, con accessi controllati.' },
          { t: 'Automazioni', d: 'Operazioni ripetitive che partono da sole al verificarsi di un evento, anche con strumenti come n8n.' },
          { t: 'Monitoraggio', d: 'Controlli e avvisi per accorgersi subito se uno scambio di dati si interrompe.' }
        ],
        approach: [
          'Prima di scrivere codice verifichiamo cosa permettono i sistemi coinvolti: quali dati espongono, con quali limiti e con quale affidabilità. Poi progettiamo l’integrazione partendo dal flusso più utile e la mettiamo alla prova con dati reali.',
          'Documentiamo ogni collegamento, così resta chiaro come funziona anche a distanza di tempo o se cambia chi lo gestisce.'
        ],
        faq: [
          { q: 'Si può integrare qualsiasi software?', a: 'Dipende da cosa mette a disposizione il software: API, esportazioni o accesso ai dati. Lo verifichiamo all’inizio e ti diciamo con chiarezza cosa è possibile.' },
          { q: 'Cosa succede se uno dei due sistemi non risponde?', a: 'Progettiamo le integrazioni in modo che i dati non vadano persi e che l’errore venga segnalato, così si può intervenire.' },
          { q: 'Potete creare un’API per i nostri partner?', a: 'Sì: un’interfaccia documentata, con accessi riservati, permette ai partner di leggere o inviare dati in modo controllato.' }
        ]
      }
    }
  },
  {
    id: 'bi',
    pillar: 'dev',
    item: 3,
    image: '/assets/services/bi.webp',
    layout: { hero: 'banner', includes: 'list', order: ['intro',  'includes',  'sig',  'approach',  'faq'] },
    content: {
      it: {
        slug: 'business-intelligence-e-ai',
        sig: {
          "kind": "dashboard",
          "title": "I numeri che servono, in un colpo d’occhio",
          "text": "Un cruscotto riunisce i dati di gestionale, vendite e piattaforme online e li aggiorna da solo.",
          "note": "Esempio illustrativo",
          "panels": [
            "Andamento delle vendite",
            "Richieste per canale",
            "Ordini per area",
            "Obiettivo del mese"
          ]
        },
        title: 'Business intelligence e AI',
        metaTitle: 'Business intelligence e intelligenza artificiale per aziende | Sodano Consulting',
        metaDesc: 'Cruscotti, report e strumenti di intelligenza artificiale costruiti sui dati della tua azienda, per decidere con numeri aggiornati e automatizzare il lavoro ripetitivo.',
        lead: 'Trasformiamo i dati che la tua azienda raccoglie già in cruscotti chiari e strumenti di intelligenza artificiale che fanno risparmiare tempo.',
        intro: [
          'Molte aziende hanno i dati ma non le risposte: le informazioni sono sparse tra gestionale, fogli di calcolo e piattaforme online, e per avere un quadro servono ore di lavoro manuale.',
          'Con la business intelligence quei dati vengono raccolti, puliti e mostrati in cruscotti sempre aggiornati. L’intelligenza artificiale aggiunge un passo in più: classificare documenti, rispondere a domande frequenti, estrarre informazioni, suggerire azioni.'
        ],
        includes: [
          { t: 'Raccolta e pulizia dei dati', d: 'Uniamo le fonti, sistemiamo i dati incompleti o duplicati e li rendiamo confrontabili.' },
          { t: 'Cruscotti e report', d: 'Gli indicatori che contano per te, aggiornati in automatico e consultabili dal browser.' },
          { t: 'Assistenti basati sull’AI', d: 'Strumenti che rispondono a domande sui tuoi documenti o supportano clienti e colleghi.' },
          { t: 'Automazione di attività ripetitive', d: 'Lettura e smistamento di documenti, estrazione di dati, prime risposte.' },
          { t: 'Uso responsabile dei dati', d: 'Attenzione a privacy, riservatezza e a dove vengono elaborati i dati aziendali.' }
        ],
        approach: [
          'Partiamo dalle domande a cui vuoi rispondere, non dagli strumenti. Individuiamo i dati che servono, verifichiamo che siano affidabili e costruiamo un primo cruscotto o un primo assistente su un caso concreto, da misurare prima di estenderlo.',
          'Sull’intelligenza artificiale siamo pragmatici: la proponiamo dove fa risparmiare tempo in modo misurabile e ti diciamo quando un processo tradizionale è la scelta migliore.'
        ],
        faq: [
          { q: 'Servono tanti dati per iniziare?', a: 'No. Spesso basta mettere in ordine quelli che hai già. Il primo passo è capire quali sono e quanto sono affidabili.' },
          { q: 'I dati aziendali restano riservati?', a: 'È uno dei punti che definiamo all’inizio: quali dati usare, dove vengono elaborati e chi può accedervi, nel rispetto del GDPR.' },
          { q: 'L’AI sostituisce il lavoro delle persone?', a: 'Nei progetti che proponiamo serve soprattutto a togliere attività ripetitive, lasciando alle persone le decisioni e i casi particolari.' }
        ]
      }
    }
  },
  {
    id: 'mobile',
    pillar: 'dev',
    item: 4,
    image: '/assets/services/mobile.webp',
    layout: { hero: 'splitLeft', includes: 'rows', order: ['sig',  'intro',  'includes',  'approach',  'faq'] },
    content: {
      it: {
        slug: 'app-mobile',
        sig: {
          "kind": "phones",
          "title": "Pensata per l’uso di ogni giorno",
          "text": "Poche azioni, quelle che contano davvero, a portata di pollice.",
          "screens": [
            {
              "label": "Prenotazioni",
              "ui": "calendar"
            },
            {
              "label": "Area clienti",
              "ui": "list"
            },
            {
              "label": "Lavoro sul campo",
              "ui": "check"
            }
          ]
        },
        title: 'App mobile',
        metaTitle: 'Sviluppo app mobile per iOS e Android | Sodano Consulting',
        metaDesc: 'App per iOS e Android per clienti e personale: progettate sull’uso reale, collegate ai tuoi sistemi e pubblicate sugli store.',
        lead: 'Sviluppiamo app per iOS e Android pensate per chi le userà davvero, collegate ai sistemi che la tua azienda usa già.',
        intro: [
          'Un’app ha senso quando serve qualcosa che il sito non può dare: un servizio da usare spesso, notifiche, funzioni che sfruttano fotocamera o posizione, lavoro sul campo anche con poca connessione.',
          'Per questo il primo passo è capire se l’app serve davvero, a chi e per fare cosa. Quando la risposta è sì, la progettiamo intorno alle poche azioni che contano, e la colleghiamo ai tuoi dati.'
        ],
        includes: [
          { t: 'App per i clienti', d: 'Prenotazioni, ordini, aree riservate, programmi fedeltà, notifiche.' },
          { t: 'App per il personale', d: 'Strumenti per chi lavora fuori sede: rapportini, consegne, controlli, raccolta di foto e firme.' },
          { t: 'Collegamento ai tuoi sistemi', d: 'L’app legge e scrive i dati del gestionale tramite API.' },
          { t: 'Pubblicazione sugli store', d: 'Preparazione e invio su App Store e Google Play.' },
          { t: 'Aggiornamenti', d: 'Nuove versioni e adeguamenti ai cambiamenti di iOS e Android.' }
        ],
        approach: [
          'Disegniamo le schermate principali e le proviamo con chi userà l’app prima di svilupparla per intero. Poi rilasciamo una prima versione con le funzioni essenziali e la miglioriamo in base all’uso reale.',
          'Se esiste già un gestionale, sviluppato da noi o da altri, l’app si appoggia a quello: niente dati duplicati.'
        ],
        faq: [
          { q: 'Serve un’app o basta il sito?', a: 'Per molti servizi un sito ben fatto, usabile da telefono, è sufficiente. Te lo diciamo prima di partire, anche se la risposta è che l’app non serve.' },
          { q: 'L’app funziona sia su iPhone sia su Android?', a: 'Sì, la progettiamo per entrambe le piattaforme.' },
          { q: 'Chi pubblica l’app sugli store?', a: 'Ci occupiamo noi della preparazione e dell’invio; gli account sviluppatore sugli store restano intestati alla tua azienda.' }
        ]
      }
    }
  },
  {
    id: 'brand',
    pillar: 'mkt',
    item: 0,
    image: '/assets/services/brand.webp',
    layout: { hero: 'banner', includes: 'columns', order: ['intro',  'sig',  'includes',  'approach',  'faq'] },
    content: {
      it: {
        slug: 'brand-identity',
        sig: {
          "kind": "brandSystem",
          "title": "Un sistema, non solo un logo",
          "text": "Colori, caratteri e regole d’uso lavorano insieme, così ogni materiale sembra parte della stessa azienda.",
          "note": "Esempio di sistema di identità",
          "palette": [
            {
              "name": "Primario",
              "hex": "#C8102E"
            },
            {
              "name": "Scuro",
              "hex": "#16161C"
            },
            {
              "name": "Neutro",
              "hex": "#8A8580"
            },
            {
              "name": "Chiaro",
              "hex": "#F3EFE8"
            }
          ],
          "type": "Titoli e testi"
        },
        title: 'Brand identity',
        metaTitle: 'Brand identity, logo e immagine coordinata | Sodano Consulting',
        metaDesc: 'Logo, colori, caratteri e linee guida per un’immagine riconoscibile e coerente su sito, social, documenti e materiali stampati.',
        lead: 'Costruiamo un’identità visiva riconoscibile e coerente, dal logo alle linee guida che la tengono in ordine nel tempo.',
        intro: [
          'Un marchio forte non è solo un bel logo: è la sensazione di coerenza che un cliente percepisce passando dal sito ai social, da un preventivo a un’insegna. Quando ogni materiale è fatto in modo diverso, l’azienda sembra più piccola e meno affidabile di quanto sia.',
          'Lavoriamo sull’identità partendo da chi sei, a chi ti rivolgi e da cosa ti distingue, per arrivare a un sistema di elementi che chiunque, dentro e fuori l’azienda, possa usare correttamente.'
        ],
        includes: [
          { t: 'Analisi e posizionamento', d: 'Valori, pubblico, concorrenti e tono di voce.' },
          { t: 'Logo', d: 'Nuovo marchio o restyling di quello esistente, nelle versioni per ogni uso.' },
          { t: 'Colori e caratteri', d: 'Una palette e una tipografia pensate per schermo e stampa.' },
          { t: 'Immagine coordinata', d: 'Biglietti da visita, carta intestata, modelli per documenti e presentazioni.' },
          { t: 'Linee guida', d: 'Un manuale semplice che spiega come usare marchio e stile.' }
        ],
        approach: [
          'Partiamo da un confronto su storia, obiettivi e clienti dell’azienda. Proponiamo poche direzioni ben motivate, le sviluppiamo con te e verifichiamo il risultato su casi reali: sito, social, documenti.',
          'Poi l’identità diventa la base del lavoro di marketing: sito, campagne e contenuti partono dalle stesse regole.'
        ],
        faq: [
          { q: 'Potete rinnovare il nostro logo senza stravolgerlo?', a: 'Sì. Spesso un restyling mantiene ciò che i clienti riconoscono e corregge ciò che non funziona più, per esempio la leggibilità in piccolo.' },
          { q: 'Riceviamo i file del logo?', a: 'Sì, nei formati per web e stampa, insieme alle linee guida.' },
          { q: 'Cosa serve da parte nostra?', a: 'Un po’ di tempo per raccontarci l’azienda e i suoi clienti, e un referente per le scelte.' }
        ]
      }
    }
  },
  {
    id: 'social',
    pillar: 'mkt',
    item: 1,
    image: '/assets/services/social.webp',
    layout: { hero: 'splitLeft', includes: 'list', order: ['intro',  'includes',  'sig',  'approach',  'faq'] },
    content: {
      it: {
        slug: 'social-media-management',
        sig: {
          "kind": "calendar",
          "title": "Una settimana di piano editoriale",
          "text": "I contenuti vengono pianificati e approvati prima della pubblicazione.",
          "note": "Esempio illustrativo",
          "days": [
            "Lun",
            "Mar",
            "Mer",
            "Gio",
            "Ven",
            "Sab",
            "Dom"
          ],
          "posts": [
            {
              "day": 0,
              "type": "Post",
              "label": "Novità di prodotto"
            },
            {
              "day": 1,
              "type": "Storia",
              "label": "Dietro le quinte"
            },
            {
              "day": 2,
              "type": "Video",
              "label": "Come funziona"
            },
            {
              "day": 3,
              "type": "Post",
              "label": "Caso cliente"
            },
            {
              "day": 4,
              "type": "Storia",
              "label": "Domanda alla community"
            },
            {
              "day": 5,
              "type": "Video",
              "label": "Evento della settimana"
            }
          ]
        },
        title: 'Social media management',
        metaTitle: 'Gestione social media per aziende | Sodano Consulting',
        metaDesc: 'Strategia, contenuti, pubblicazione e analisi dei risultati sui social network, con un piano editoriale costruito sugli obiettivi della tua azienda.',
        lead: 'Gestiamo i profili social della tua azienda con un piano preciso, contenuti curati e risultati misurati.',
        intro: [
          'Pubblicare con costanza è difficile quando i social sono l’ultimo dei pensieri di chi lavora in azienda. Il risultato sono profili fermi per mesi o post improvvisati che non portano a niente.',
          'Ci occupiamo dei social come di un canale di lavoro: obiettivi chiari, un calendario editoriale, contenuti coerenti con l’identità del marchio e un controllo periodico di cosa funziona.'
        ],
        includes: [
          { t: 'Strategia', d: 'Quali canali presidiare, a chi parlare e con quali obiettivi.' },
          { t: 'Piano editoriale', d: 'Un calendario di contenuti concordato con te in anticipo.' },
          { t: 'Creazione dei contenuti', d: 'Testi, grafiche, foto e video pensati per ogni piattaforma.' },
          { t: 'Pubblicazione e community', d: 'Gestione dei profili e attenzione a commenti e messaggi.' },
          { t: 'Analisi dei risultati', d: 'Report periodici e correzioni al piano in base ai dati.' }
        ],
        approach: [
          'Iniziamo da un’analisi dei profili attuali e dei concorrenti, poi definiamo obiettivi e piano. Ogni mese condividiamo il calendario prima della pubblicazione e, a fine periodo, cosa ha funzionato e cosa cambiare.',
          'Quando serve, affianchiamo ai contenuti organici le campagne a pagamento, gestite dallo stesso team.'
        ],
        faq: [
          { q: 'Su quali social conviene essere presenti?', a: 'Dipende da chi sono i tuoi clienti. Meglio pochi canali curati che tanti abbandonati: lo decidiamo insieme nella fase di strategia.' },
          { q: 'Dobbiamo approvare i post?', a: 'Sì, il piano editoriale viene condiviso prima della pubblicazione.' },
          { q: 'Come capiamo se funziona?', a: 'Con report periodici sugli indicatori legati ai tuoi obiettivi, non solo sul numero di like.' }
        ]
      }
    }
  },
  {
    id: 'ads',
    pillar: 'mkt',
    item: 2,
    image: '/assets/services/ads.webp',
    layout: { hero: 'full', includes: 'rows', order: ['sig',  'intro',  'includes',  'approach',  'faq'] },
    content: {
      it: {
        slug: 'advertising-digitale-e-seo',
        sig: {
          "kind": "twoRoads",
          "title": "Due strade che lavorano insieme",
          "ads": {
            "t": "Campagne a pagamento",
            "d": "Portano visite da subito, finché la campagna è attiva."
          },
          "seo": {
            "t": "SEO",
            "d": "Cresce più lentamente, ma il posizionamento resta nel tempo."
          },
          "axis": "Tempo",
          "note": "Andamento indicativo"
        },
        title: 'Advertising digitale e SEO',
        metaTitle: 'Advertising online e SEO per aziende | Sodano Consulting',
        metaDesc: 'Campagne pubblicitarie su Google e sui social e posizionamento sui motori di ricerca, per portare sul tuo sito persone interessate a ciò che offri.',
        lead: 'Portiamo sul tuo sito persone che cercano proprio ciò che offri: con le campagne pubblicitarie nel breve periodo, con la SEO nel tempo.',
        intro: [
          'Un buon sito senza visite non produce risultati. Per farsi trovare ci sono due strade complementari: la pubblicità online, che porta visite subito ma solo finché la paghi, e la SEO, che lavora sul posizionamento naturale e cresce nel tempo.',
          'Le gestiamo insieme, con lo stesso obiettivo: contatti e vendite, misurati con dati affidabili.'
        ],
        includes: [
          { t: 'Campagne sui motori di ricerca', d: 'Annunci mostrati a chi cerca i tuoi prodotti o servizi.' },
          { t: 'Campagne sui social', d: 'Pubblicità rivolta a un pubblico definito per interessi, zona o professione.' },
          { t: 'SEO tecnica', d: 'Velocità, struttura del sito, indirizzi, dati strutturati e indicizzazione.' },
          { t: 'Contenuti per la SEO', d: 'Pagine e articoli scritti sulle ricerche reali dei tuoi clienti.' },
          { t: 'Misurazione', d: 'Tracciamento delle conversioni, nel rispetto del consenso ai cookie, e report periodici.' }
        ],
        approach: [
          'Partiamo dalle ricerche e dal pubblico: cosa cercano i tuoi potenziali clienti e quanto vale per te un contatto. Su questa base dividiamo il budget tra pubblicità e SEO e fissiamo obiettivi misurabili.',
          'Controlliamo i risultati con regolarità e spostiamo risorse su ciò che rende di più, condividendo con te numeri e scelte.'
        ],
        faq: [
          { q: 'In quanto tempo si vedono i risultati?', a: 'Con le campagne a pagamento in pochi giorni. Con la SEO servono di solito alcuni mesi, ma i risultati restano anche quando non paghi annunci.' },
          { q: 'Quanto budget serve per la pubblicità?', a: 'Dipende dal settore e dalla concorrenza. Ti proponiamo una cifra di partenza sostenibile e la adeguiamo in base ai risultati.' },
          { q: 'Potete garantire il primo posto su Google?', a: 'No, e diffida di chi lo promette: il posizionamento dipende da Google. Possiamo garantire un lavoro fatto bene e risultati misurati con trasparenza.' }
        ]
      }
    }
  },
  {
    id: 'media',
    pillar: 'mkt',
    item: 3,
    image: '/assets/services/media.webp',
    layout: { hero: 'center', includes: 'columns', order: ['intro',  'sig',  'includes',  'approach',  'faq'] },
    preview: true, // pubblicata ma non indicizzata finché i contenuti non sono definitivi
    content: {
      it: {
        slug: 'foto-video-e-riprese-con-drone',
        sig: {
          "kind": "shotTypes",
          "title": "Cosa riprendiamo",
          "items": [
            "Aziende e ambienti di lavoro",
            "Prodotti",
            "Persone e team",
            "Eventi",
            "Strutture e cantieri dall’alto",
            "Territorio e paesaggi"
          ]
        },
        title: 'Foto, video e riprese con drone',
        metaTitle: 'Foto, video aziendali e riprese con drone | Sodano Consulting',
        metaDesc: 'Servizi fotografici, video aziendali e riprese aeree con drone per sito, social, campagne ed eventi.',
        lead: 'Realizziamo foto, video e riprese aeree che raccontano la tua azienda, i tuoi prodotti e i tuoi spazi.',
        intro: [
          'Le immagini sono la prima cosa che si guarda su un sito o sui social. Foto di repertorio e video fatti con il telefono funzionano poco: le immagini originali e curate rendono l’azienda più credibile e riconoscibile.',
          'Le riprese con il drone aggiungono un punto di vista che altrimenti non sarebbe possibile: strutture, impianti, cantieri, territorio ed eventi visti dall’alto.'
        ],
        includes: [
          { t: 'Servizi fotografici', d: 'Prodotti, ambienti di lavoro, persone ed eventi.' },
          { t: 'Video aziendali', d: 'Presentazioni dell’azienda, video di prodotto, contenuti brevi per i social.' },
          { t: 'Riprese aeree con drone', d: 'Foto e video dall’alto di strutture, terreni, cantieri ed eventi.' },
          { t: 'Montaggio', d: 'Montaggio, grafiche, sottotitoli e versioni nei formati delle diverse piattaforme.' }
        ],
        approach: [
          'Prepariamo ogni ripresa con un sopralluogo o un confronto sugli obiettivi e sulle immagini che servono. Dopo la ripresa selezioniamo e lavoriamo il materiale, e lo consegniamo pronto per sito, social e campagne.'
        ],
        faq: [
          { q: 'Si può volare ovunque con il drone?', a: 'No: vicino ad aeroporti, nei centri abitati o in aree protette ci sono limiti o servono autorizzazioni. Prima delle riprese verifichiamo la zona e organizziamo il volo nel rispetto delle regole.' },
          { q: 'Posso usare il materiale dove voglio?', a: 'Concordiamo all’inizio gli utilizzi previsti, così il materiale è pronto per tutti i canali che ti servono.' }
        ]
      }
    }
  },
  {
    id: 'xr',
    pillar: 'mkt',
    item: 4,
    image: '/assets/services/xr.webp',
    layout: { hero: 'split', includes: 'list', order: ['intro', 'sig', 'includes', 'approach', 'faq'] },
    content: {
      it: {
        slug: '3d-e-realta-aumentata',
        sig: {
          kind: 'configurator',
          title: 'Prova un configuratore',
          text: 'Un esempio ispirato a un nostro progetto: un configuratore di punte per martelli pneumatici. Scegli forma e lunghezza e il modello si aggiorna.',
          note: 'Esempio dimostrativo, semplificato',
          groups: [
            { key: 'shape', label: 'Forma', options: [{ v: 'point', t: 'Punta' }, { v: 'flat', t: 'Scalpello piatto' }, { v: 'wide', t: 'Scalpello largo' }, { v: 'spade', t: 'Vanga' }] },
            { key: 'length', label: 'Lunghezza', options: [{ v: 's', t: 'Corta' }, { v: 'm', t: 'Media' }, { v: 'l', t: 'Lunga' }] }
          ]
        },
        title: '3D e realtà aumentata',
        metaTitle: 'Configuratori 3D di prodotto e realtà aumentata | Sodano Consulting',
        metaDesc: 'Configuratori 3D, modelli e render di prodotto per mostrare e vendere articoli tecnici e personalizzabili: il cliente sceglie le varianti e vede subito il risultato.',
        lead: 'Realizziamo configuratori 3D e modelli di prodotto: il cliente sceglie le varianti, vede subito il risultato e arriva alla richiesta con le idee chiare.',
        intro: [
          'Quando un prodotto esiste in tante varianti, foto e cataloghi in PDF non bastano: il cliente fatica a capire le differenze e chi vende passa il tempo a rispondere sempre alle stesse domande.',
          'Un configuratore 3D risolve il problema alla radice. Lo abbiamo sviluppato, per esempio, per le punte dei martelli pneumatici: forma, dimensioni e attacco si scelgono da un’interfaccia semplice e il modello tridimensionale mostra subito il risultato, da ogni lato.'
        ],
        includes: [
          { t: 'Configuratori di prodotto', d: 'Il cliente sceglie varianti, misure e opzioni e vede il prodotto aggiornarsi in tempo reale.' },
          { t: 'Modelli 3D', d: 'Modelli tridimensionali da ruotare e ingrandire, pensati per caricarsi in fretta anche dal browser.' },
          { t: 'Render e animazioni', d: 'Immagini e video di prodotto per sito, cataloghi, social e fiere.' },
          { t: 'Collegamento alle richieste', d: 'La configurazione scelta arriva con la richiesta di preventivo, senza dover rispiegare tutto.' },
          { t: 'Realtà aumentata', d: 'Dove ha senso, il modello si può vedere nello spazio reale dallo smartphone.' }
        ],
        approach: [
          'Partiamo dai materiali che hai già: disegni tecnici, file CAD, foto e listini. Definiamo insieme quali varianti mostrare e quali regole legano tra loro le opzioni, così il configuratore propone solo combinazioni possibili.',
          'Il configuratore vive nel tuo sito e può collegarsi al gestionale o al modulo di richiesta preventivo, così la configurazione diventa subito lavoro per l’ufficio commerciale.'
        ],
        faq: [
          { q: 'Servono i file 3D del prodotto?', a: 'Se ci sono, li usiamo come base. Altrimenti partiamo da disegni tecnici e foto e realizziamo noi i modelli.' },
          { q: 'Il configuratore funziona dal sito, senza installare nulla?', a: 'Sì, si usa dal browser su computer, tablet e smartphone.' },
          { q: 'Ha senso per prodotti tecnici o industriali?', a: 'Sì, spesso è proprio lì che serve di più: varianti tante e differenze difficili da spiegare a parole.' }
        ]
      }
    }
  },
  {
    id: 'infra',
    pillar: 'sys',
    item: 0,
    image: '/assets/services/infra.webp',
    layout: { hero: 'full', includes: 'columns', order: ['intro',  'sig',  'includes',  'approach',  'faq'] },
    content: {
      it: {
        slug: 'infrastrutture-it-e-reti',
        sig: {
          "kind": "topology",
          "title": "Una rete in ordine",
          "text": "Un esempio di rete aziendale: connessione protetta da firewall, rete interna per il personale e rete separata per gli ospiti.",
          "nodes": {
            "internet": "Internet",
            "firewall": "Firewall",
            "switch": "Switch",
            "pc": "Postazioni",
            "server": "Server",
            "printer": "Stampanti",
            "wifi": "Wi-Fi interno",
            "guest": "Wi-Fi ospiti"
          }
        },
        title: 'Infrastrutture IT e reti',
        metaTitle: 'Infrastrutture IT e reti aziendali | Sodano Consulting',
        metaDesc: 'Progettazione, installazione e gestione di reti, server e postazioni di lavoro per aziende e uffici, con assistenza dal team Sodano.',
        lead: 'Progettiamo e gestiamo reti, server e postazioni di lavoro, perché in ufficio la tecnologia funzioni e non rallenti nessuno.',
        intro: [
          'Una rete lenta, un Wi-Fi che non arriva in tutte le stanze, computer configurati ognuno a modo suo, nessuno che sappia con precisione dove sono i dati: sono problemi comuni che fanno perdere ore ogni settimana e aumentano i rischi.',
          'Mettiamo ordine nell’infrastruttura informatica dell’azienda e la manteniamo nel tempo, con un unico riferimento per rete, dispositivi e server.'
        ],
        includes: [
          { t: 'Analisi dell’esistente', d: 'Inventario di rete, dispositivi, server e punti deboli.' },
          { t: 'Reti cablate e Wi-Fi', d: 'Progettazione e configurazione, con reti separate per ospiti e dispositivi.' },
          { t: 'Server e archiviazione in sede', d: 'Server, archivi condivisi e permessi di accesso.' },
          { t: 'Postazioni di lavoro', d: 'Configurazione e manutenzione di computer e dispositivi.' },
          { t: 'Assistenza', d: 'Interventi da remoto e in sede quando qualcosa non funziona.' }
        ],
        approach: [
          'Partiamo da un sopralluogo e da un’analisi di come lavorate. Proponiamo gli interventi in ordine di priorità, così puoi distribuire la spesa, e documentiamo tutto ciò che configuriamo.',
          'Dopo l’intervento restiamo il riferimento per l’assistenza, dagli uffici di Valenzano (BA) e Roma.'
        ],
        faq: [
          { q: 'Lavorate anche con l’attrezzatura che abbiamo già?', a: 'Sì. Valutiamo cosa si può riutilizzare e cosa va sostituito, senza cambiare tutto se non serve.' },
          { q: 'Potete seguire più sedi?', a: 'Sì, anche collegando tra loro le reti di sedi diverse.' },
          { q: 'L’assistenza è anche in sede?', a: 'Interveniamo da remoto quando è possibile e in sede quando serve. Le modalità le concordiamo in base alla zona e alle tue esigenze.' }
        ]
      }
    }
  },
  {
    id: 'cloud',
    pillar: 'sys',
    item: 2,
    image: '/assets/services/cloud.webp',
    layout: { hero: 'center', includes: 'list', order: ['intro',  'sig',  'includes',  'approach',  'faq'] },
    content: {
      it: {
        slug: 'cloud-computing',
        sig: {
          "kind": "whereTo",
          "title": "Cosa portare nel cloud",
          "cloud": {
            "t": "Di solito conviene nel cloud",
            "items": [
              "Posta, calendari e documenti condivisi",
              "Siti e gestionali usati da più sedi",
              "Copie di backup fuori sede",
              "Servizi che devono crescere in fretta"
            ]
          },
          "onsite": {
            "t": "Spesso meglio in sede",
            "items": [
              "Dispositivi e macchinari collegati localmente",
              "Archivi molto pesanti usati solo in ufficio",
              "Sistemi che devono funzionare anche senza internet"
            ]
          },
          "note": "Ogni caso va valutato: è il primo passo che facciamo insieme."
        },
        title: 'Cloud computing',
        metaTitle: 'Servizi cloud e migrazione al cloud per aziende | Sodano Consulting',
        metaDesc: 'Migrazione al cloud, posta e strumenti di collaborazione, server cloud e gestione dei costi, con un’attenzione costante a sicurezza e dati.',
        lead: 'Ti aiutiamo a scegliere e usare il cloud dove conviene davvero: per lavorare da ovunque, ridurre la manutenzione e far crescere i servizi quando serve.',
        intro: [
          'Il cloud non è un posto unico ma un insieme di servizi: posta e documenti condivisi, server virtuali, archivi, applicazioni. Usarlo bene significa scegliere cosa spostare, cosa tenere in sede e come tenere sotto controllo costi e accessi.',
          'Ti accompagniamo nelle scelte e nella migrazione, e restiamo il riferimento per la gestione quotidiana.'
        ],
        includes: [
          { t: 'Valutazione', d: 'Cosa conviene portare nel cloud, con quali costi e quali rischi.' },
          { t: 'Migrazione', d: 'Trasferimento di dati, posta e applicazioni con la minima interruzione del lavoro.' },
          { t: 'Strumenti di collaborazione', d: 'Posta, calendari e documenti condivisi configurati per l’azienda.' },
          { t: 'Server cloud', d: 'Ambienti per applicazioni e gestionali che possono crescere con le esigenze.' },
          { t: 'Accessi e costi sotto controllo', d: 'Permessi, autenticazione sicura e verifica periodica della spesa.' }
        ],
        approach: [
          'Partiamo da come lavorate oggi e da cosa vi serve domani. Pianifichiamo la migrazione per fasi, iniziando dai servizi meno critici, e verifichiamo ogni passaggio prima del successivo.',
          'Il cloud si integra con il resto dell’infrastruttura: backup, sicurezza e reti vengono progettati insieme.'
        ],
        faq: [
          { q: 'Il cloud è sicuro?', a: 'Può esserlo, se configurato bene: accessi, autenticazione a più fattori, backup e permessi fanno la differenza. È la parte su cui lavoriamo di più.' },
          { q: 'Conviene spostare tutto nel cloud?', a: 'Non sempre. Alcuni servizi rendono meglio in sede; lo valutiamo caso per caso.' },
          { q: 'Possiamo tornare indietro?', a: 'Pianifichiamo le migrazioni in modo che i dati restino esportabili e non dipendano da un solo fornitore più del necessario.' }
        ]
      }
    }
  },
  {
    id: 'backup',
    pillar: 'sys',
    item: 3,
    image: '/assets/services/backup.webp',
    layout: { hero: 'splitLeft', includes: 'columns', order: ['sig',  'intro',  'includes',  'approach',  'faq'] },
    content: {
      it: {
        slug: 'backup-e-archiviazione',
        sig: {
          "kind": "copies",
          "title": "Più copie, in posti diversi",
          "text": "Una buona regola: più copie dei dati, su supporti diversi, almeno una lontana dalla sede. E prove di ripristino periodiche.",
          "source": "I tuoi dati",
          "copies": [
            {
              "t": "In sede",
              "d": "Per ripristinare in fretta"
            },
            {
              "t": "Fuori sede",
              "d": "Contro guasti, furti e incendi"
            },
            {
              "t": "In cloud",
              "d": "Separata dalla rete aziendale"
            }
          ],
          "test": "Prova di ripristino"
        },
        title: 'Backup e archiviazione',
        metaTitle: 'Backup aziendali e archiviazione dei dati | Sodano Consulting',
        metaDesc: 'Piani di backup e ripristino per dati, server e applicazioni: copie automatiche, conservate in luoghi diversi e verificate con prove di recupero.',
        lead: 'Progettiamo backup che funzionano davvero quando servono: automatici, conservati in posti diversi e verificati con prove di ripristino.',
        intro: [
          'Un guasto, un errore, un attacco informatico: prima o poi capita di dover recuperare dei dati. In quel momento si scopre se il backup esiste, se è aggiornato e soprattutto se si riesce a ripristinarlo.',
          'Per questo non ci limitiamo a impostare delle copie: definiamo cosa salvare, ogni quanto, dove conservarlo e come recuperarlo, e verifichiamo periodicamente che il ripristino funzioni.'
        ],
        includes: [
          { t: 'Analisi dei dati da proteggere', d: 'Quali dati sono critici, quanto spesso cambiano e quanto tempo puoi permetterti di restare fermo.' },
          { t: 'Backup automatici', d: 'Copie programmate di file, database, server e applicazioni.' },
          { t: 'Copie in luoghi diversi', d: 'Almeno una copia lontana dalla sede, per proteggersi da guasti, furti o ransomware.' },
          { t: 'Prove di ripristino', d: 'Verifiche periodiche che i dati si possano recuperare davvero.' },
          { t: 'Archiviazione', d: 'Conservazione ordinata dei dati che non servono ogni giorno ma vanno tenuti.' }
        ],
        approach: [
          'Partiamo da una domanda semplice: se domani perdessi questi dati, quanto ti costerebbe? Le risposte guidano il piano di backup, che documentiamo in modo chiaro, insieme alla procedura di ripristino.',
          'Il backup è anche una parte essenziale della sicurezza informatica e lo progettiamo insieme a quella.'
        ],
        faq: [
          { q: 'Abbiamo già un disco esterno: basta?', a: 'Di solito no: se il disco resta collegato o in ufficio, un guasto, un furto o un attacco possono colpire anche quello. Serve almeno una copia separata.' },
          { q: 'Ogni quanto si fa il backup?', a: 'Dipende da quanto spesso cambiano i dati e da quanto lavoro puoi permetterti di rifare. Lo definiamo insieme.' },
          { q: 'Proteggete anche i backup di siti e gestionali?', a: 'Sì, compresi i database e i server che gestiamo.' }
        ]
      }
    }
  },
  {
    id: 'security',
    pillar: 'sys',
    item: 4,
    image: '/assets/services/security.webp',
    layout: { hero: 'banner', includes: 'rows', order: ['intro',  'sig',  'includes',  'approach',  'faq'] },
    content: {
      it: {
        slug: 'sicurezza-informatica',
        sig: {
          "kind": "checklist",
          "title": "Un controllo veloce",
          "text": "Spunta le misure che la tua azienda ha già. Non salviamo le risposte: servono solo a te.",
          "items": [
            "Gli account importanti usano l’autenticazione a due fattori",
            "Sistemi e programmi vengono aggiornati con regolarità",
            "Esiste un backup fuori sede, verificato di recente",
            "Ognuno ha accesso solo ai dati che gli servono",
            "Il personale sa riconoscere le email truffaldine",
            "C’è un firewall configurato e controllato"
          ],
          "results": {
            "low": "Ci sono margini importanti di miglioramento: partiamo dalle misure che riducono di più il rischio.",
            "mid": "Buona base, ma alcune misure mancano. Un’analisi aiuta a capire da dove iniziare.",
            "high": "Ottimo punto di partenza. Un controllo periodico aiuta a mantenerlo nel tempo."
          },
          "countLabel": "misure su"
        },
        title: 'Sicurezza informatica',
        metaTitle: 'Sicurezza informatica per aziende e PA | Sodano Consulting',
        metaDesc: 'Analisi dei rischi, protezione di reti, dispositivi e account, backup e formazione del personale per ridurre il rischio di attacchi e perdite di dati.',
        lead: 'Riduciamo il rischio che un attacco informatico o un errore fermino la tua azienda, con misure concrete e proporzionate.',
        intro: [
          'Gli attacchi informatici non colpiscono solo le grandi aziende: email truffaldine, password rubate e ransomware prendono di mira anche piccole imprese ed enti, spesso proprio perché meno protetti.',
          'La sicurezza non è un prodotto da installare ma un insieme di misure: tecniche, organizzative e di formazione. Ti aiutiamo a capire dove sei più esposto e a intervenire prima lì.'
        ],
        includes: [
          { t: 'Analisi dei rischi', d: 'Verifica di reti, dispositivi, account e procedure per individuare i punti deboli.' },
          { t: 'Protezione di reti e dispositivi', d: 'Firewall, aggiornamenti, antivirus e configurazioni sicure.' },
          { t: 'Account e accessi', d: 'Autenticazione a più fattori, gestione delle password e dei permessi.' },
          { t: 'Backup e ripristino', d: 'Copie protette per ripartire anche dopo un attacco.' },
          { t: 'Formazione', d: 'Indicazioni pratiche al personale per riconoscere truffe e comportamenti a rischio.' }
        ],
        approach: [
          'Iniziamo con un’analisi della situazione attuale e ti consegniamo un elenco di interventi in ordine di priorità, spiegati in modo comprensibile. Partiamo da quelli che riducono di più il rischio con meno sforzo.',
          'La sicurezza va mantenuta: aggiornamenti, controlli periodici e revisione degli accessi fanno parte del lavoro continuativo.'
        ],
        faq: [
          { q: 'Siamo una piccola azienda: rischiamo davvero?', a: 'Sì. Molti attacchi sono automatici e colpiscono chiunque abbia una debolezza, indipendentemente dalle dimensioni.' },
          { q: 'Cosa fare dopo un attacco?', a: 'Isolare i sistemi colpiti, non pagare riscatti senza consulenza e chiamare subito chi gestisce l’infrastruttura. Un buon backup è ciò che permette di ripartire.' },
          { q: 'Ci aiutate anche con gli obblighi di legge?', a: 'Ti supportiamo sulla parte tecnica delle misure di sicurezza richieste dal GDPR; per gli aspetti legali lavoriamo con il tuo consulente.' }
        ]
      }
    }
  }

];

// traduzioni: stessi campi della versione italiana, in file separati per lingua
const TRANSLATIONS = { en, de, nl };
for (const s of SERVICES) {
  for (const [lang, map] of Object.entries(TRANSLATIONS)) if (map[s.id]) s.content[lang] = map[s.id];
}

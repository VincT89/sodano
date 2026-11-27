/* Prodotti pronti ("Soluzioni").
   - draft: true = bozza: visibile solo in sviluppo (npm run dev), esclusa dal sito pubblicato, dal menu e dalla sitemap
   - preview: true = pubblicata ma non indicizzata (noindex, fuori dalla sitemap)
   - i testi tra [[ ]] sono segnaposto da sostituire
   Contenuti di r4-Parking dalla scheda funzionalità fornita da Sodano (novembre 2026). */

import TEXTS from './i18n/solutions.i18n.js';

const R4 = '/assets/r4-parking/';

export const SOLUTIONS = [
  {
    id: 'r4parking',
    pillar: 'dev',
    content: {
      it: {
        slug: 'r4-parking',
        name: 'r4-Parking',
        metaTitle: 'r4-Parking – Gestionale per parcheggi, garage e navette aeroportuali',
        metaDesc: 'Gestionale web per parcheggi aeroportuali, garage e navette: prenotazioni, disponibilità, clienti, abbonamenti, piano navette, canali di vendita e fatturazione elettronica.',
        tagline: 'Gestionale per parcheggi, garage e navette aeroportuali',
        lead: 'Prenotazioni, disponibilità, clienti, ingressi e uscite, abbonamenti, navette, pagamenti e documenti riuniti in un unico ambiente web, pensato per il lavoro quotidiano di chi gestisce un parcheggio.',
        audience: {
          title: 'Per chi è',
          text: [
            'r4-Parking è pensato per parcheggi e garage, in particolare per chi offre parcheggio e navetta verso l’aeroporto. Il personale lavora sul parcheggio selezionato: consulta il programma della giornata, aggiorna le pratiche e segue lo stato dei servizi.',
            'Una gestione può comprendere più parcheggi, con utenti e anagrafiche condivisi, oppure strutture separate con accessi dedicati: chi lavora su più strutture passa dall’una all’altra con un selettore. Si usa dal browser, senza installare nulla.'
          ]
        },
        // percorso tra le funzioni: ogni capitolo ha la sua schermata (e a volte una seconda in sovrapposizione)
        tour: [
          {
            title: 'Prenotazioni e movimenti dei veicoli',
            text: 'Le prenotazioni arrivano dall’inserimento manuale, dal modulo online o dai portali collegati. Ogni pratica riunisce cliente, targa, date, persone, volo, importo e stato; il personale registra ingressi e uscite, filtra per periodo, canale e servizio, ed esporta in Excel.',
            shot: { src: R4 + 'prenotazioni-desktop.webp', w: 1800, h: 1125, alt: 'Elenco delle prenotazioni con filtri per periodo, canale e stato' }
          },
          {
            title: 'Disponibilità e calendario',
            text: 'La capacità è organizzata per parcheggio e categoria e tiene conto di prenotazioni, quote riservate, abbonamenti e blocchi temporanei. Il calendario mostra l’occupazione giorno per giorno, per settimana o per mese, con gli elenchi di ingressi e uscite per preparare il lavoro.',
            shot: { src: R4 + 'calendario-desktop.webp', w: 1800, h: 1125, alt: 'Calendario dell’occupazione del parcheggio' }
          },
          {
            title: 'Prenotazioni dal sito, con Car valet e lavaggio',
            text: 'Ogni parcheggio ha il suo modulo di prenotazione pubblico: il cliente sceglie il servizio, parcheggio standard o Car valet, aggiunge il lavaggio interno, esterno o completo, verifica la disponibilità e vede il prezzo prima di confermare. Il pagamento può avvenire online o in struttura.',
            shot: { src: R4 + 'prenotazione-online-desktop.webp', w: 1800, h: 1125, alt: 'Modulo di prenotazione online del parcheggio' },
            extra: { src: R4 + 'servizi-valet-lavaggio-desktop.webp', w: 981, h: 1271, alt: 'Scelta del servizio Car valet e del lavaggio' }
          },
          {
            title: 'Organizzazione delle navette',
            text: 'Il piano navette raccoglie le corse della giornata in ordine di orario. A partire dalle prenotazioni e dal numero di persone il sistema propone i viaggi; il personale gestisce mezzi, posti e passeggeri e aggiorna lo stato delle corse, anche dal telefono.',
            shot: { src: R4 + 'navette-desktop.webp', w: 1800, h: 1125, alt: 'Piano navette con corse e passeggeri della giornata' },
            extra: { src: R4 + 'navette-mobile.webp', w: 585, h: 1266, alt: 'Piano navette da smartphone', phone: true }
          },
          {
            title: 'Garage e abbonamenti',
            text: 'Abbonamenti mensili, soste giornaliere e ingressi degli abbonati: i contratti riuniscono cliente, veicolo, tariffa, periodo e posti riservati, con incassi e storni. Le tariffe del garage prevedono unità di conteggio, minimi e tolleranze configurabili.',
            shot: { src: R4 + 'garage-desktop.webp', w: 1800, h: 1125, alt: 'Gestione del garage con soste e abbonamenti' }
          },
          {
            title: 'Analisi per periodo e canale',
            text: 'Volumi, cancellazioni, prezzo medio e valore delle prenotazioni per periodo e canale di vendita, con confronti mensili e andamento annuale. Gli avvisi segnalano le situazioni operative e di disponibilità da verificare.',
            shot: { src: R4 + 'analisi-desktop.webp', w: 1800, h: 1125, alt: 'Analisi delle prenotazioni per periodo e canale' }
          }
        ],
        moreTitle: 'E inoltre',
        more: [
          { t: 'Clienti e storico', d: 'Privati e aziende con recapiti, dati di fatturazione e più targhe, segnalazione dei duplicati e storico completo delle operazioni.' },
          { t: 'Tariffe configurabili', d: 'Categorie di posto, capacità e tariffe delle prenotazioni gestite dal pannello.' },
          { t: 'Fatturazione elettronica', d: 'Documenti preparati dalle prenotazioni, archivio, stati e file XML, con invio tramite Aruba.' },
          { t: 'Biglietti e stampe', d: 'Biglietti di ritiro in formato A4, A6, etichetta o personalizzato, con logo e testi.' },
          { t: 'Inviti alle recensioni', d: 'Invito via WhatsApp a lasciare una recensione su Google dopo l’uscita del veicolo, con gestione del consenso del cliente.' },
          { t: 'Utenti, ruoli e registro attività', d: 'Accessi del personale con ruoli diversi per struttura e registro delle operazioni per gli amministratori.' }
        ],
        integrations: {
          title: 'Canali e integrazioni',
          text: [
            'r4-Parking si collega ai principali portali di prenotazione dei parcheggi aeroportuali: le prenotazioni vengono importate in automatico, associate alle categorie del parcheggio e restano allineate con le sincronizzazioni programmate. Le correzioni fatte a mano dal personale vengono conservate.',
            'Pagamenti online, fatturazione elettronica e messaggi WhatsApp si attivano in base ai servizi scelti da ciascun parcheggio.'
          ],
          groups: [
            { group: 'Portali di prenotazione', items: 'Parkos, ParkingMyCar, Vologio (con supporto Roosh)' },
            { group: 'Pagamenti', items: 'Stripe, PayPal e pagamento in struttura' },
            { group: 'Fatturazione elettronica', items: 'Aruba' },
            { group: 'Recensioni via WhatsApp', items: 'Twilio' }
          ]
        },
        devices: {
          title: 'Anche da smartphone',
          text: 'Menu, moduli e tabelle si adattano a computer, tablet e smartphone: il personale consulta il programma e aggiorna le pratiche ovunque si trovi. L’interfaccia è disponibile in italiano, inglese e olandese.',
          shots: [
            { src: R4 + 'dashboard-mobile.webp', w: 585, h: 1266, alt: 'Dashboard di r4-Parking da smartphone' },
            { src: R4 + 'prenotazioni-mobile.webp', w: 585, h: 1266, alt: 'Prenotazioni da smartphone' }
          ]
        },
        hero: { src: R4 + 'dashboard-desktop.webp', w: 1800, h: 1125, alt: 'Dashboard di r4-Parking con occupazione, movimenti del giorno e canali di prenotazione' },
        screenshotsNote: 'Schermate dimostrative con dati di esempio.',
        faq: [
          { q: 'Bisogna installare qualcosa?', a: 'No: r4-Parking si usa dal browser, su computer, tablet e smartphone.' },
          { q: 'Si possono gestire più parcheggi?', a: 'Sì. Una gestione può comprendere più parcheggi con utenti e anagrafiche condivisi; chi ha accesso a più strutture passa dall’una all’altra con un selettore.' },
          { q: 'Si collega ai portali di prenotazione?', a: 'Sì, con Parkos, ParkingMyCar e Vologio. Le prenotazioni vengono importate e sincronizzate in automatico; l’attivazione dipende dall’abilitazione presso ciascun portale.' },
          { q: 'I clienti possono prenotare dal nostro sito?', a: 'Sì: ogni parcheggio ha un modulo di prenotazione pubblico con verifica della disponibilità e prezzo prima della conferma, e può accettare pagamenti online o in struttura.' },
          { q: 'In quali lingue è disponibile?', a: 'L’interfaccia è disponibile in italiano, inglese e olandese.' }
        ]
      }
    }
  }
];

// le altre lingue riprendono immagini e struttura dall'italiano e sostituiscono solo i testi
function translateSolution(it, t) {
  const shot = (base, alt) => base && { ...base, alt: alt || base.alt };
  return {
    ...it, ...t,
    name: it.name,
    hero: shot(it.hero, t.heroAlt),
    tour: it.tour.map((ch, i) => ({ ...ch, ...t.tour[i], shot: shot(ch.shot, t.tour[i].shotAlt), extra: shot(ch.extra, t.tour[i].extraAlt) })),
    devices: { ...it.devices, ...t.devices, shots: it.devices.shots.map((x, i) => shot(x, t.devices.shotAlts[i])) }
  };
}
for (const s of SOLUTIONS) {
  const tr = TEXTS[s.id];
  if (tr) for (const lang of Object.keys(tr)) s.content[lang] = translateSolution(s.content.it, tr[lang]);
}

export const isLive = (entry) => !entry.draft || import.meta.env.DEV;

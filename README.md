# SODANO-NEW – sito Sodano Consulting (React + Vite)

## Avvio
```bash
npm install
npm run dev      # sviluppo su http://localhost:5173
npm run build    # versione per la pubblicazione nella cartella dist/ (con prerendering)
npm run preview  # prova la versione di produzione
```
Serve Node.js 18 o superiore.

## Struttura
```
src/
  App.jsx                  sceglie la pagina in base all'indirizzo
  Root.jsx                 router + lingua + consenso cookie
  main.jsx                 avvio nel browser
  entry-server.jsx         avvio in build per il prerendering
  router/routes.js         tutti gli indirizzi del sito (IT nella radice, /en/, /de/, /nl/)
  router/head.js           titolo, descrizione, canonical e hreflang di ogni pagina
  content/services.js      testi delle pagine servizio (una per voce degli elenchi)
  pages/ServicePage.jsx    modello della pagina servizio
  content/solutions.js     prodotti pronti ("Soluzioni", es. R4 Parking)
  pages/SolutionsHub.jsx   elenco delle soluzioni; pages/SolutionPage.jsx pagina di un prodotto
  i18n/pages.js            testi comuni delle pagine interne
  config/media.js          URL di video e immagini, posizione degli oggetti cliccabili,
                           contatti e numeri dei contatori (tutto in un posto)
  i18n/translations.js     testi IT / EN / DE / NL
  i18n/LanguageContext.jsx lingua attiva (presa dall'indirizzo)
  components/
    Header.jsx             menu, pulsante contatti, selettore lingua
    Hero.jsx               video 3D guidato dallo scroll + frasi
    Intro.jsx              fascia con frase e pulsanti dopo il video
    About.jsx              Chi siamo + contatori animati
    Services.jsx           postazione esplorabile (server, monitor, smartphone)
    PillarOverlay.jsx      pannello Developer / Marketing / System con video
    Countries.jsx          schede lingua + mappamondo
    Globe.jsx              mappamondo interattivo (d3-geo su canvas)
    Contact.jsx, Footer.jsx
    LeadForm.jsx           modulo contatti riutilizzato nella home e nelle pagine servizio
  data/world.json          confini dei paesi per il mappamondo
  styles/global.css        tutti gli stili
public/assets/logo.png
```

## Modulo contatti
- In produzione il modulo invia a `public/contact.php` (serve un hosting con PHP).
  Apri il file e controlla `$TO` (chi riceve le richieste) e `$FROM` (una casella del vostro dominio).
- Anti-spam: campo nascosto "trappola", tempo minimo di compilazione, massimo 5 invii l'ora per IP.
- In `npm run dev` l'invio è simulato: la richiesta compare nel terminale.
- Il pulsante "Contattaci" nei pannelli dei servizi precompila l'area di interesse.
- Nelle pagine servizio il modulo ha l'area già selezionata e nell'email compare la pagina di provenienza.

## Privacy e cookie
- Banner cookie conforme alle linee guida del Garante: Accetta / Rifiuta / Personalizza,
  scelta modificabile da "Preferenze cookie" nel footer, richiesta di nuovo dopo 6 mesi.
- Google Analytics e Meta Pixel si attivano SOLO dopo il consenso: inserisci gli ID in
  `src/config/media.js` → `TRACKING`.
- Testi di Privacy e Cookie Policy: `src/legal/legalTexts.js` (pagine `/privacy-policy/` e `/cookie-policy/`; i vecchi link con `#/` vengono reindirizzati).
- I font sono ospitati in locale (pacchetti @fontsource), niente richieste a Google Fonts.
- Dati societari nel footer: `src/config/media.js` → `COMPANY` (aggiungere il numero REA se disponibile).

## Da fare prima della messa online
- Far verificare Privacy/Cookie Policy al consulente privacy (e aggiornarle se cambiano gli strumenti).
- **Video**: sono tutti in `public/assets/`. Se sostituisci il video della hero, ricodificalo
  con un keyframe ogni pochi fotogrammi (es. ffmpeg `-g 3 -bf 0`), altrimenti lo scroll va a scatti.
- Far rileggere i testi DE e NL da un madrelingua.

## Pagine e indicizzazione
- Ogni pagina ha un indirizzo vero: `/`, `/en/`, `/servizi/hosting-e-server/`, `/privacy-policy/`…
- `npm run build` genera un file HTML completo per ogni pagina (prerendering), più `404.html`,
  `sitemap.xml` e `robots.txt`. Non serve un browser: React viene eseguito con Node.
- Indirizzo pubblico del sito: `src/config/media.js` → `SITE.url` (usato per canonical, hreflang e sitemap).
  Con `indexable: false` tutte le pagine diventano `noindex` (per un indirizzo di prova).
- `public/.htaccess` (Apache/Plesk): pagina 404, cache, compressione.

### Aggiungere una pagina servizio
1. In `src/content/services.js` aggiungi un oggetto con `id`, `pillar` (dev, mkt, sys),
   `item` (posizione della voce nell'elenco dell'area, da 0) e i testi per lingua in `content`.
2. Una lingua senza testi non genera la pagina; il selettore lingua porta alla home di quella lingua.
3. Nelle tecnologie, `confirm: true` segna una voce da verificare: si vede solo in `npm run dev`,
   mai nel sito pubblicato.
4. La voce nell'elenco del pannello servizi diventa un link, la pagina entra nel footer, nella sitemap
   e tra gli "Altri servizi" delle altre pagine.

### Bozze e segnaposto
- `draft: true` (in `services.js` o `solutions.js`): la pagina si vede solo con `npm run dev`,
  non viene pubblicata, non entra in menu, footer e sitemap. Togliere la riga per pubblicarla.
- `preview: true`: la pagina viene pubblicata ma con `noindex` e resta fuori dalla sitemap (utile per
  farla vedere prima che i contenuti siano definitivi). Togliere la riga quando è pronta.
- I testi tra `[[ ]]` sono segnaposto: compaiono evidenziati in giallo (anche nel sito pubblicato).
- La voce "Soluzioni" nel menu compare solo quando c'è almeno una soluzione pubblicata.
- Screenshot di R4 Parking: mettere le immagini in `public/assets/r4-parking/` e indicarne il percorso
  in `screenshots[].src` (es. `/assets/r4-parking/prenotazioni.jpg`), con un testo alternativo descrittivo.

# SODANO-NEW – sito Sodano Consulting (React + Vite)

## Avvio
```bash
npm install
npm run dev      # sviluppo su http://localhost:5173
npm run build    # versione per la pubblicazione nella cartella dist/
npm run preview  # prova la versione di produzione
```
Serve Node.js 18 o superiore.

## Struttura
```
src/
  App.jsx                  ordine delle sezioni
  config/media.js          URL di video e immagini, posizione degli oggetti cliccabili,
                           contatti e numeri dei contatori (tutto in un posto)
  i18n/translations.js     testi IT / EN / DE / NL
  i18n/LanguageContext.jsx lingua attiva (salvata nel browser)
  components/
    Header.jsx             menu, pulsante consulenza, selettore lingua
    Hero.jsx               video 3D guidato dallo scroll + frasi
    Intro.jsx              fascia con frase e pulsanti dopo il video
    About.jsx              Chi siamo + contatori animati
    Services.jsx           postazione esplorabile (server, monitor, smartphone)
    PillarOverlay.jsx      pannello Developer / Marketing / System con video
    Countries.jsx          schede lingua + mappamondo
    Globe.jsx              mappamondo interattivo (d3-geo su canvas)
    Contact.jsx, Footer.jsx
  data/world.json          confini dei paesi per il mappamondo
  styles/global.css        tutti gli stili
public/assets/logo.png
```

## Modulo contatti
- In produzione il modulo invia a `public/contact.php` (serve un hosting con PHP).
  Apri il file e controlla `$TO` (chi riceve le richieste) e `$FROM` (una casella del vostro dominio).
- Anti-spam: campo nascosto "trappola", tempo minimo di compilazione, massimo 5 invii l'ora per IP.
- In `npm run dev` l'invio è simulato: la richiesta compare nel terminale.
- Il pulsante "Consulenza gratuita" nei pannelli dei servizi precompila l'area di interesse.

## Privacy e cookie
- Banner cookie conforme alle linee guida del Garante: Accetta / Rifiuta / Personalizza,
  scelta modificabile da "Preferenze cookie" nel footer, richiesta di nuovo dopo 6 mesi.
- Google Analytics e Meta Pixel si attivano SOLO dopo il consenso: inserisci gli ID in
  `src/config/media.js` → `TRACKING`.
- Testi di Privacy e Cookie Policy: `src/legal/legalTexts.js` (pagine `#/privacy-policy` e `#/cookie-policy`).
- I font sono ospitati in locale (pacchetti @fontsource), niente richieste a Google Fonts.
- Dati societari nel footer: `src/config/media.js` → `COMPANY` (aggiungere il numero REA se disponibile).

## Da fare prima della messa online
- Far verificare Privacy/Cookie Policy al consulente privacy (e aggiornarle se cambiano gli strumenti).
- **Video**: sono tutti in `public/assets/`. Se sostituisci il video della hero, ricodificalo
  con un keyframe ogni pochi fotogrammi (es. ffmpeg `-g 3 -bf 0`), altrimenti lo scroll va a scatti.
- **Lingue**: per avere URL tipo `/de/` serve un router (es. react-router) o build separate;
  oggi la lingua cambia nella stessa pagina e viene ricordata dal browser.
- Far rileggere i testi DE e NL da un madrelingua.

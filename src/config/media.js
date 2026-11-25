/* Tutti i video e le immagini del sito in un unico posto (cartella public/assets). */
export const MEDIA = {
  logo: '/assets/logo.png',
  heroDesktop: '/assets/hero-desktop.mp4',     // 15,6 s: server → cavo → retro del monitor → giro → sito → logo. 1600x900, keyframe ogni 3 fotogrammi (scroll fluido)
  heroMobile: '/assets/hero-mobile.mp4',       // 960x960 quadrato per telefono
  heroPoster: '/assets/hero-poster.jpg',
  deskVideo: '/assets/desk.mp4',
  deskPoster: '/assets/desk-poster.jpg',
  pillars: {
    dev: '/assets/pillar-dev.mp4',
    mkt: '/assets/pillar-mkt.mp4',
    sys: '/assets/pillar-sys.mp4'
  }
};

export const PILLARS = {
  dev: { title: 'Developer', accent: '#FF3B3B' },
  mkt: { title: 'Marketing', accent: '#F5A524' },
  sys: { title: 'System', accent: '#9AA4B2' }
};

/* Posizione degli oggetti cliccabili sulla postazione (in % dell'immagine) */
export const HOTSPOTS = [
  { key: 'sys', left: 9, top: 38, width: 12.5, height: 33 },
  { key: 'dev', left: 31, top: 15.5, width: 40.5, height: 57 },
  { key: 'mkt', left: 81.5, top: 46.5, width: 10, height: 28 }
];

export const CONTACTS = {
  email: 'info@sodanoconsulting.it',
  pec: 'sodanoconsulting@pec.it',
  offices: [
    { key: 'officeAdmin', city: 'Valenzano (BA)', address: 'Via Eduardo De Filippo, 4 · 70010 Valenzano (BA)', phone: '+39 334 104 3006', phoneHref: 'tel:+393341043006' },
    { key: 'officeSales', city: 'Roma', address: 'Via Saluzzo, 76 · 00182 Roma (RM)', phone: '06 8339 0516', phoneHref: 'tel:+390683390516' }
  ]
};

/* Anno di fondazione: gli anni di esperienza si calcolano da qui. */
export const FOUNDED = 2015;

export const STATS = [
  { value: 999, suffix: '+', key: 'stat1' },
  { value: new Date().getFullYear() - FOUNDED, suffix: '', key: 'stat2' }, // si aggiorna da solo ogni anno
  { value: 500, suffix: '+', key: 'stat3' }
];

/* Dove porta il clic su un paese del mappamondo.
   null = stessa pagina: cambia lingua e si resta dove si è.
   Quando esisteranno le versioni separate, scrivi qui l'indirizzo, es. 'https://sodanoconsulting.it/de/' */
export const COUNTRY_SITES = {
  it: null, // Italia
  de: null, // Deutschland · Schweiz
  nl: null  // Nederland
};

/* Dati societari (obbligatori nel footer di un sito aziendale italiano) */
export const COMPANY = {
  name: 'Sodano Consulting S.R.L.',
  address: 'Via Eduardo De Filippo, 4 · 70010 Valenzano (BA)',
  vat: '08962440726',
  capital: '10.000 €',
  rea: null // es. 'BA-123456': numero REA (Registro Imprese), da aggiungere se disponibile
};

/* Strumenti di statistica/marketing: si attivano SOLO dopo il consenso nel banner cookie.
   Lasciare null finché non si usano. */
export const TRACKING = {
  ga4Id: null,       // es. 'G-XXXXXXX'
  metaPixelId: null  // es. '1234567890'
};

/* Modulo contatti: indirizzo a cui viene inviato (vedi public/contact.php) */
export const FORM = {
  endpoint: '/contact.php'
};

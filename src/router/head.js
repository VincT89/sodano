import { SITE, COMPANY, CONTACTS, FOUNDED, MEDIA } from '../config/media.js';
import { TRANSLATIONS } from '../i18n/translations.js';
import { PAGE_TEXT } from '../i18n/pages.js';
import { LEGAL } from '../legal/legalTexts.js';
import { SERVICES } from '../content/services.js';
import { SOLUTIONS } from '../content/solutions.js';
import { alternatesFor } from './routes.js';

const HREFLANG = { it: 'it', en: 'en', de: 'de', nl: 'nl' };
const OG_LOCALE = { it: 'it_IT', en: 'en_GB', de: 'de_DE', nl: 'nl_NL' };

/* Dati dell'azienda per i motori di ricerca (dal footer e dalla pagina contatti di sodanoconsulting.it) */
const ORG_ID = SITE.url + '/#organization';
const telIntl = (href) => href.replace('tel:', '');
const postal = (street, code, locality, region) => ({ '@type': 'PostalAddress', streetAddress: street, postalCode: code, addressLocality: locality, addressRegion: region, addressCountry: 'IT' });
const ORGANIZATION = {
  '@type': 'Organization',
  '@id': ORG_ID,
  name: COMPANY.name,
  alternateName: 'Sodano Consulting',
  url: SITE.url + '/',
  logo: SITE.url + MEDIA.logo,
  email: CONTACTS.email,
  telephone: telIntl(CONTACTS.offices[0].phoneHref),
  vatID: 'IT' + COMPANY.vat,
  foundingDate: String(FOUNDED),
  address: postal('Via Eduardo De Filippo, 4', '70010', 'Valenzano', 'BA'),
  department: [
    { '@type': 'LocalBusiness', name: COMPANY.name + ' – Sede amministrativa', address: postal('Via Eduardo De Filippo, 4', '70010', 'Valenzano', 'BA'), telephone: telIntl(CONTACTS.offices[0].phoneHref), email: CONTACTS.email },
    { '@type': 'LocalBusiness', name: COMPANY.name + ' – Sede commerciale', address: postal('Via Saluzzo, 76', '00182', 'Roma', 'RM'), telephone: telIntl(CONTACTS.offices[1].phoneHref), email: CONTACTS.email }
  ],
  sameAs: COMPANY.social
};
const PROVIDER = { '@id': ORG_ID };

/* Immagine di condivisione (1200x630, in public/assets/og) */
const ogImageFor = (route) => {
  const id = (route.page === 'service' || route.page === 'solution') ? route.id : 'home';
  return `${SITE.url}/assets/og/${id}.jpg`;
};

/* Titolo, descrizione e collegamenti di ogni pagina (usati dal prerendering e dal browser) */
export function headFor(route) {
  const t = { ...TRANSLATIONS[route.lang], ...PAGE_TEXT[route.lang] };
  let title = t.metaTitle, description = t.metaDesc, jsonld = null, preview = false;
  if (route.page === 'privacy' || route.page === 'cookie') {
    const doc = LEGAL[route.lang][route.page];
    title = `${doc.title} – Sodano Consulting`;
  } else if (route.page === 'service') {
    const entry = SERVICES.find((s) => s.id === route.id);
    const c = entry.content[route.lang];
    preview = !!entry.preview;
    title = c.metaTitle;
    description = c.metaDesc;
    jsonld = {
      '@type': 'Service',
      name: c.title,
      description: c.metaDesc,
      areaServed: 'IT',
      provider: PROVIDER
    };
  } else if (route.page === 'solutions') {
    preview = SOLUTIONS.every((s) => s.preview || s.draft);
    title = `${t.solHubTitle} – Sodano Consulting`;
    description = t.solHubLead;
  } else if (route.page === 'solution') {
    const entry = SOLUTIONS.find((s) => s.id === route.id);
    const c = entry.content[route.lang];
    preview = !!entry.preview;
    title = c.metaTitle;
    description = c.metaDesc;
    jsonld = {
      '@type': 'SoftwareApplication',
      name: c.name,
      applicationCategory: 'BusinessApplication',
      description: c.metaDesc,
      publisher: PROVIDER
    };
  } else if (route.page === 'notfound') {
    title = `${t.nfTitle} – Sodano Consulting`;
  }
  const alternates = alternatesFor(route).map((a) => ({ hreflang: HREFLANG[a.lang], href: SITE.url + a.path }));
  return {
    title,
    description,
    lang: route.lang,
    canonical: route.page === 'notfound' ? null : SITE.url + route.path,
    alternates,
    xDefault: alternates.find((a) => a.hreflang === 'it')?.href || null,
    ogLocale: OG_LOCALE[route.lang],
    robots: route.page === 'notfound' || preview || !SITE.indexable ? 'noindex' : null,
    ogImage: ogImageFor(route),
    // l'azienda compare in ogni pagina; servizi e prodotti la richiamano con @id
    jsonld: route.page === 'notfound' ? null : { '@context': 'https://schema.org', '@graph': [ORGANIZATION, ...(route.page === 'home' ? [{ '@type': 'WebSite', '@id': SITE.url + '/#website', url: SITE.url + '/', name: 'Sodano Consulting', publisher: PROVIDER, inLanguage: route.lang }] : []), ...(jsonld ? [jsonld] : [])] }
  };
}

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

/* Versione testuale per l'HTML generato in build */
export function headToHtml(h) {
  const out = [
    `<title>${esc(h.title)}</title>`,
    `<meta name="description" content="${esc(h.description)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="Sodano Consulting" />`,
    `<meta property="og:title" content="${esc(h.title)}" />`,
    `<meta property="og:description" content="${esc(h.description)}" />`,
    `<meta property="og:locale" content="${h.ogLocale}" />`,
    `<meta property="og:image" content="${h.ogImage}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="${esc(h.title)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`
  ];
  if (h.canonical) out.push(`<link rel="canonical" href="${h.canonical}" />`, `<meta property="og:url" content="${h.canonical}" />`);
  if (h.robots) out.push(`<meta name="robots" content="${h.robots}" />`);
  if (h.alternates.length > 1) {
    for (const a of h.alternates) out.push(`<link rel="alternate" hreflang="${a.hreflang}" href="${a.href}" />`);
    if (h.xDefault) out.push(`<link rel="alternate" hreflang="x-default" href="${h.xDefault}" />`);
  }
  if (h.jsonld) out.push(`<script type="application/ld+json">${JSON.stringify(h.jsonld).replace(/</g, '\\u003c')}</script>`);
  return out.join('\n    ');
}

/* Nel browser: aggiorna titolo e descrizione quando si cambia pagina senza ricaricare */
export function applyHead(h) {
  document.title = h.title;
  const set = (sel, attr, val) => {
    let el = document.head.querySelector(sel);
    if (!val) { el?.remove(); return; }
    if (!el) {
      el = document.createElement(sel.startsWith('link') ? 'link' : 'meta');
      const m = sel.match(/\[(\w+(?::\w+)?)="([^"]+)"\]/);
      if (m) el.setAttribute(m[1], m[2]);
      document.head.appendChild(el);
    }
    el.setAttribute(attr, val);
  };
  set('meta[name="description"]', 'content', h.description);
  set('meta[property="og:title"]', 'content', h.title);
  set('meta[property="og:description"]', 'content', h.description);
  set('meta[property="og:url"]', 'content', h.canonical);
  set('meta[property="og:image"]', 'content', h.ogImage);
  set('meta[property="og:image:alt"]', 'content', h.title);
  set('link[rel="canonical"]', 'href', h.canonical);
  set('meta[name="robots"]', 'content', h.robots);
  document.head.querySelectorAll('link[rel="alternate"][hreflang]').forEach((el) => el.remove());
  if (h.alternates.length > 1) {
    for (const a of [...h.alternates, ...(h.xDefault ? [{ hreflang: 'x-default', href: h.xDefault }] : [])]) {
      const l = document.createElement('link');
      l.rel = 'alternate'; l.hreflang = a.hreflang; l.href = a.href;
      document.head.appendChild(l);
    }
  }
}

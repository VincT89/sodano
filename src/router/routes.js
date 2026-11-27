import { SERVICES } from '../content/services.js';
import { SOLUTIONS, isLive } from '../content/solutions.js';

/* Tutti gli indirizzi del sito. L'italiano sta nella radice, le altre lingue sotto /en/, /de/, /nl/.
   Ogni indirizzo finisce con "/" perché in build ogni pagina diventa una cartella con il suo index.html. */
export const LANGS = ['it', 'en', 'de', 'nl'];
export const SERVICES_SEGMENT = { it: 'servizi', en: 'services', de: 'leistungen', nl: 'diensten' };
export const SOLUTIONS_SEGMENT = { it: 'soluzioni', en: 'solutions', de: 'loesungen', nl: 'oplossingen' };
const LEGAL_SLUG = { privacy: 'privacy-policy', cookie: 'cookie-policy' };

const prefix = (lang) => (lang === 'it' ? '' : '/' + lang);

export function normalizePath(p) {
  let s = (p || '/').split(/[?#]/)[0];
  if (!s.startsWith('/')) s = '/' + s;
  return s.endsWith('/') ? s : s + '/';
}

export function pathFor(page, lang, id) {
  const p = prefix(lang);
  if (page === 'home') return p + '/';
  if (page === 'privacy' || page === 'cookie') return `${p}/${LEGAL_SLUG[page]}/`;
  if (page === 'service') {
    const s = SERVICES.find((x) => x.id === id);
    const c = s && isLive(s) && s.content[lang];
    return c ? `${p}/${SERVICES_SEGMENT[lang]}/${c.slug}/` : null;
  }
  if (page === 'solutions') return liveSolutions(lang).length ? `${p}/${SOLUTIONS_SEGMENT[lang]}/` : null;
  if (page === 'solution') {
    const s = SOLUTIONS.find((x) => x.id === id);
    const c = s && isLive(s) && s.content[lang];
    return c ? `${p}/${SOLUTIONS_SEGMENT[lang]}/${c.slug}/` : null;
  }
  return null;
}

export function allRoutes() {
  const out = [];
  for (const lang of LANGS) {
    out.push({ page: 'home', lang, path: pathFor('home', lang) });
    out.push({ page: 'privacy', lang, path: pathFor('privacy', lang) });
    out.push({ page: 'cookie', lang, path: pathFor('cookie', lang) });
    for (const s of SERVICES) {
      const path = pathFor('service', lang, s.id);
      if (path) out.push({ page: 'service', lang, id: s.id, path });
    }
    const hub = pathFor('solutions', lang);
    if (hub) out.push({ page: 'solutions', lang, path: hub });
    for (const s of SOLUTIONS) {
      const path = pathFor('solution', lang, s.id);
      if (path) out.push({ page: 'solution', lang, id: s.id, path });
    }
  }
  return out;
}

const TABLE = new Map(allRoutes().map((r) => [r.path, r]));

export function matchPath(pathname) {
  const path = normalizePath(pathname);
  const found = TABLE.get(path);
  if (found) return found;
  const first = path.split('/')[1];
  return { page: 'notfound', lang: LANGS.includes(first) && first !== 'it' ? first : 'it', path };
}

/* Le versioni della stessa pagina nelle altre lingue (per il selettore lingua e per hreflang) */
export function alternatesFor(route) {
  if (route.page === 'notfound') return [];
  return LANGS.map((lang) => ({ lang, path: pathFor(route.page, lang, route.id) })).filter((a) => a.path);
}

/* Le pagine servizio disponibili per un'area (dev, mkt, sys) in una lingua, nell'ordine dell'elenco */
export function servicePagesFor(pillar, lang) {
  return SERVICES.filter((s) => s.pillar === pillar && isLive(s) && s.content[lang])
    .map((s) => ({ id: s.id, item: s.item, title: s.content[lang].title, path: pathFor('service', lang, s.id) }));
}

/* Servizi e soluzioni pubblicati (le bozze solo in sviluppo) */
const AREA_ORDER = ['dev', 'mkt', 'sys'];
export function liveServices(lang) {
  return SERVICES.filter((s) => isLive(s) && s.content[lang])
    .sort((a, b) => AREA_ORDER.indexOf(a.pillar) * 10 + a.item - (AREA_ORDER.indexOf(b.pillar) * 10 + b.item));
}
export function liveSolutions(lang) {
  return SOLUTIONS.filter((s) => isLive(s) && s.content[lang]);
}

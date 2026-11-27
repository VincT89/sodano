import { createContext, useCallback, useContext, useEffect, useLayoutEffect, useMemo, useRef } from 'react';
import { TRANSLATIONS } from './translations.js';
import { PAGE_TEXT } from './pages.js';
import { useRouter } from '../router/Router.jsx';
import { LANGS, pathFor } from '../router/routes.js';

export { LANGS };
const LanguageContext = createContext(null);
const useIso = typeof window === 'undefined' ? useEffect : useLayoutEffect;
const STORE = 'sodano-lang';

/* Elemento di riferimento sullo schermo: dopo il cambio lingua i testi cambiano lunghezza,
   quindi riportiamo questo elemento esattamente dov'era (la pagina non "salta"). */
function findAnchor() {
  const mid = window.innerHeight * 0.45;
  const els = document.querySelectorAll('main section, main .stat, main .office, main form, main .desk-stage, main .globe-stage, main h1, main h2, main .lead, main .muted, main label');
  let best = null, bestD = Infinity;
  for (const el of els) {
    const r = el.getBoundingClientRect();
    if (r.height === 0 || r.bottom < 0 || r.top > window.innerHeight) continue;
    const d = Math.abs(r.top - mid);
    if (d < bestD) { bestD = d; best = { el, top: r.top }; }
  }
  return best;
}

/* La lingua viene dall'indirizzo (/en/, /de/, /nl/; l'italiano è nella radice).
   Cambiare lingua significa andare alla stessa pagina nell'altra lingua, se esiste, altrimenti alla home. */
export function LanguageProvider({ children }) {
  const { route, navigate } = useRouter();
  const lang = route.lang;
  const anchor = useRef(null);

  const setLang = useCallback((next) => {
    if (!TRANSLATIONS[next] || next === lang) return;
    try { localStorage.setItem(STORE, next); } catch (e) { /* ignora */ }
    const same = pathFor(route.page, next, route.id);
    if (same) {
      anchor.current = findAnchor();
      navigate(same, { keepScroll: true });
    } else {
      navigate(pathFor('home', next));
    }
  }, [lang, route, navigate]);

  useIso(() => {
    const a = anchor.current;
    anchor.current = null;
    if (!a || !a.el.isConnected) return;
    const diff = a.el.getBoundingClientRect().top - a.top;
    if (Math.abs(diff) > 1) window.scrollTo({ top: window.scrollY + diff, behavior: 'instant' });
  }, [lang]);

  useEffect(() => { document.documentElement.lang = lang; }, [lang]);

  // chi aveva scelto un'altra lingua e torna sulla home italiana viene riportato alla sua lingua
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORE);
      if (window.location.pathname === '/' && !window.location.hash && saved && saved !== 'it' && TRANSLATIONS[saved]) {
        navigate(pathFor('home', saved), { replace: true });
      }
    } catch (e) { /* ignora */ }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const value = useMemo(() => ({ lang, setLang, t: { ...TRANSLATIONS[lang], ...PAGE_TEXT[lang] } }), [lang, setLang]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  return useContext(LanguageContext);
}

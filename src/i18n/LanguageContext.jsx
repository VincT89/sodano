import { createContext, useCallback, useContext, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { TRANSLATIONS } from './translations.js';

export const LANGS = ['it', 'en', 'de', 'nl'];
const LanguageContext = createContext(null);

function initialLang() {
  try {
    const saved = localStorage.getItem('sodano-lang');
    if (saved && TRANSLATIONS[saved]) return saved;
  } catch (e) { /* storage non disponibile */ }
  return 'it';
}

/* Elemento di riferimento in cima allo schermo: dopo il cambio lingua i testi cambiano lunghezza,
   quindi riportiamo questo elemento esattamente dov'era (la pagina non "salta"). */
function findAnchor() {
  // l'elemento più vicino al centro dello schermo: è quello che l'utente sta guardando
  const mid = window.innerHeight * 0.45;
  const els = document.querySelectorAll('main section, main .stat, main .office, main form, main .desk-stage, main .globe-stage, main h2, main .lead, main .muted, main label');
  let best = null, bestD = Infinity;
  for (const el of els) {
    const r = el.getBoundingClientRect();
    if (r.height === 0 || r.bottom < 0 || r.top > window.innerHeight) continue;
    const d = Math.abs(r.top - mid);
    if (d < bestD) { bestD = d; best = { el, top: r.top }; }
  }
  return best;
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(initialLang);
  const anchor = useRef(null);

  const setLang = useCallback((next) => {
    if (!TRANSLATIONS[next]) return;
    anchor.current = findAnchor();
    setLangState(next);
    try { localStorage.setItem('sodano-lang', next); } catch (e) { /* ignora */ }
  }, []);

  useLayoutEffect(() => {
    const a = anchor.current;
    anchor.current = null;
    if (!a || !a.el.isConnected) return;
    const diff = a.el.getBoundingClientRect().top - a.top;
    if (Math.abs(diff) > 1) window.scrollTo({ top: window.scrollY + diff, behavior: 'instant' });
  }, [lang]);

  useEffect(() => { document.documentElement.lang = lang; }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t: TRANSLATIONS[lang] }), [lang, setLang]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  return useContext(LanguageContext);
}

import { createContext, useCallback, useContext, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { matchPath, normalizePath } from './routes.js';

/* Router minimo basato sulla History API: cambia pagina senza ricaricare (video e font restano in memoria). */
const RouterContext = createContext(null);
const useIso = typeof window === 'undefined' ? useEffect : useLayoutEffect;

function scrollToHash(hash, smooth) {
  const id = decodeURIComponent((hash || '').slice(1));
  const el = id && document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: smooth ? 'smooth' : 'instant' });
  return !!el;
}

export function RouterProvider({ initialPath, children }) {
  const [path, setPath] = useState(() => normalizePath(initialPath));
  const route = useMemo(() => matchPath(path), [path]);
  const pending = useRef(null);

  const navigate = useCallback((to, opts = {}) => {
    const url = new URL(to, window.location.href);
    if (url.origin !== window.location.origin) { window.location.href = url.href; return; }
    const next = normalizePath(url.pathname);
    const same = next === normalizePath(window.location.pathname);
    const full = next + url.hash;
    if (opts.replace) window.history.replaceState(null, '', full);
    else if (full !== window.location.pathname + window.location.hash) window.history.pushState(null, '', full);
    if (same) {
      if (url.hash) scrollToHash(url.hash, true);
      else if (!opts.keepScroll) window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    pending.current = { hash: url.hash, keep: !!opts.keepScroll };
    setPath(next);
  }, []);

  // dopo il cambio pagina: in cima, oppure all'ancora richiesta, oppure fermi (cambio lingua)
  useIso(() => {
    const p = pending.current;
    pending.current = null;
    if (!p || p.keep) return;
    if (p.hash) {
      if (!scrollToHash(p.hash)) requestAnimationFrame(() => scrollToHash(p.hash));
    } else window.scrollTo({ top: 0, behavior: 'instant' });
  }, [path]);

  useEffect(() => {
    const onPop = () => setPath(normalizePath(window.location.pathname));
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const value = useMemo(() => ({ path, route, navigate }), [path, route, navigate]);
  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>;
}

export const useRouter = () => useContext(RouterContext);

/* Link interno: un <a> normale (funziona anche senza JavaScript e per i motori di ricerca),
   ma il clic cambia pagina senza ricaricare. */
export function Link({ to, onClick, children, ...rest }) {
  const { navigate } = useRouter();
  const handle = (e) => {
    onClick?.(e);
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || rest.target) return;
    e.preventDefault();
    navigate(to);
  };
  return <a href={to} onClick={handle} {...rest}>{children}</a>;
}

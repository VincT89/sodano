import { useEffect, useState } from 'react';

/* Pagine semplici via hash (#/privacy-policy, #/cookie-policy): funzionano su qualsiasi hosting
   senza configurare il server. Gli altri hash (#about, #contact…) restano ancore della home. */
const PAGES = { '#/privacy-policy': 'privacy', '#/cookie-policy': 'cookie' };

export function useHashRoute() {
  const read = () => PAGES[window.location.hash] || 'home';
  const [route, setRoute] = useState(read);
  useEffect(() => {
    const on = () => {
      const next = read();
      setRoute(next);
      if (next === 'home') {
        const id = window.location.hash.slice(1);
        // dopo il ritorno alla home, porta alla sezione richiesta
        requestAnimationFrame(() => requestAnimationFrame(() => {
          const el = id && document.getElementById(id);
          if (el) el.scrollIntoView(); else if (id === 'top' || !id) window.scrollTo(0, 0);
        }));
      }
    };
    window.addEventListener('hashchange', on);
    return () => window.removeEventListener('hashchange', on);
  }, []);
  return route;
}

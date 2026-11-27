import { createContext, useCallback, useContext, useEffect, useLayoutEffect, useMemo, useState } from 'react';

const useIso = typeof window === 'undefined' ? useEffect : useLayoutEffect;
import { TRACKING } from '../config/media.js';

/* Consenso cookie (GDPR / Linee guida Garante Privacy 2021):
   - solo cookie tecnici finché l'utente non sceglie;
   - "Rifiuta" ha la stessa evidenza di "Accetta";
   - la scelta si può cambiare in ogni momento dal footer ("Preferenze cookie");
   - la scelta viene richiesta di nuovo dopo 6 mesi. */
const KEY = 'sodano-consent';
const VERSION = 1;
const MAX_AGE = 1000 * 60 * 60 * 24 * 180;
const ConsentContext = createContext(null);

function readSaved() {
  try {
    const s = JSON.parse(localStorage.getItem(KEY) || 'null');
    if (!s || s.v !== VERSION || Date.now() - s.date > MAX_AGE) return null;
    return s;
  } catch (e) { return null; }
}

function loadScript(src) {
  if (document.querySelector(`script[src="${src}"]`)) return;
  const s = document.createElement('script'); s.async = true; s.src = src; document.head.appendChild(s);
}

function applyTracking(c) {
  if (c.stats && TRACKING.ga4Id && !window.__sodanoGA) {
    window.__sodanoGA = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', TRACKING.ga4Id, { anonymize_ip: true });
    loadScript(`https://www.googletagmanager.com/gtag/js?id=${TRACKING.ga4Id}`);
  }
  if (c.marketing && TRACKING.metaPixelId && !window.fbq) {
    /* eslint-disable */
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
    /* eslint-enable */
    window.fbq('init', TRACKING.metaPixelId);
    window.fbq('track', 'PageView');
  }
}

export function ConsentProvider({ children }) {
  // la scelta salvata si legge dopo il primo disegno: così l'HTML generato in build e la pagina coincidono
  const [consent, setConsent] = useState(null);
  useIso(() => { setConsent(readSaved()); }, []);
  const [panelOpen, setPanelOpen] = useState(false);

  const save = useCallback((choice) => {
    const c = { v: VERSION, date: Date.now(), necessary: true, stats: !!choice.stats, marketing: !!choice.marketing };
    try { localStorage.setItem(KEY, JSON.stringify(c)); } catch (e) { /* ignora */ }
    setConsent(c);
    setPanelOpen(false);
    // revoca: se un consenso viene tolto, si ricarica la pagina per scaricare gli script già attivi
    if ((window.__sodanoGA && !c.stats) || (window.fbq && !c.marketing)) window.location.reload();
  }, []);

  useEffect(() => { if (consent) applyTracking(consent); }, [consent]);

  const value = useMemo(() => ({
    consent,
    decided: !!consent,
    panelOpen,
    openPreferences: () => setPanelOpen(true),
    closePreferences: () => setPanelOpen(false),
    acceptAll: () => save({ stats: true, marketing: true }),
    rejectAll: () => save({ stats: false, marketing: false }),
    saveChoice: save
  }), [consent, panelOpen, save]);

  return <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>;
}

export const useConsent = () => useContext(ConsentContext);

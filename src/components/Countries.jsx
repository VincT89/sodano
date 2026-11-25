import { Component, lazy, Suspense, useEffect, useRef, useState } from 'react';
import { useLang } from '../i18n/LanguageContext.jsx';
import { COUNTRY_SITES } from '../config/media.js';
import { prefersReducedMotion } from '../hooks/useReveal.js';
import Globe2D from './Globe.jsx';
import Reveal from './Reveal.jsx';
import Split from './Split.jsx';

const Globe3D = lazy(() => import('./Globe3D.jsx'));

/* Se il globo 3D fallisce (driver grafici, browser vecchi) si mostra il mappamondo 2D */
class GlobeBoundary extends Component {
  constructor(props) { super(props); this.state = { failed: false }; }
  static getDerivedStateFromError() { return { failed: true }; }
  componentDidCatch(err) { console.warn('Globo 3D non disponibile, uso la versione 2D', err); }
  render() { return this.state.failed ? this.props.fallback : this.props.children; }
}

function hasWebGL() {
  try {
    const c = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && (c.getContext('webgl2') || c.getContext('webgl')));
  } catch (e) { return false; }
}

export default function Countries() {
  const { t, lang, setLang } = useLang();
  const sectionRef = useRef(null);
  const globeRef = useRef(null);
  const [near, setNear] = useState(false);
  const [webgl] = useState(hasWebGL);
  const timer = useRef(0);

  // carica il globo 3D solo quando la sezione si avvicina allo schermo
  useEffect(() => {
    const el = sectionRef.current;
    if (!('IntersectionObserver' in window)) { setNear(true); return; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setNear(true); io.disconnect(); } }, { rootMargin: '800px' });
    io.observe(el);
    return () => { io.disconnect(); clearTimeout(timer.current); };
  }, []);

  // clic su un paese: il globo vola sul paese e il sito passa a quella lingua, restando qui.
  // Se in COUNTRY_SITES c'è un indirizzo (sito separato), si apre quello.
  const [toast, setToast] = useState(null);
  function goTo(code) {
    clearTimeout(timer.current);
    const url = COUNTRY_SITES[code];
    if (url) {
      timer.current = setTimeout(() => { window.location.href = url; }, prefersReducedMotion() ? 0 : 1200);
      return;
    }
    setLang(code);
    setToast(code);
    timer.current = setTimeout(() => setToast(null), 2600);
  }

  return (
    <section className="section map" id="map" ref={sectionRef}>
      <div className="globe-stage">
        <Reveal className="map-head">
          <p className="label">{t.navMap}</p>
          <h2 aria-label={t.mapTitle}><Split text={t.mapTitle} /></h2>
        </Reveal>
        {near && webgl ? (
          <GlobeBoundary fallback={<div className="globe-box"><Globe2D lang={lang} onPick={goTo} /></div>}>
            <Suspense fallback={<div className="globe-loading" aria-hidden="true" />}>
              <Globe3D ref={globeRef} lang={lang} onPick={goTo} />
            </Suspense>
          </GlobeBoundary>
        ) : near ? (
          <div className="globe-box">
            <Globe2D lang={lang} onPick={goTo} />
          </div>
        ) : null}
        <p className="globe-hint">{t.globeHint}</p>
        <p className={'globe-toast' + (toast ? ' show' : '')} role="status" aria-live="polite">
          {toast && <><span aria-hidden="true">✓</span> {t.langSwitched}</>}
        </p>
      </div>
    </section>
  );
}

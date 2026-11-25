import { useEffect, useState } from 'react';
import { LOGO_PATH } from './logoPath.js';
import { useLang } from '../i18n/LanguageContext.jsx';
import { prefersReducedMotion } from '../hooks/useReveal.js';

/* Schermata iniziale: il logo si disegna, si riempie, e la barra segue il caricamento del video della hero.
   Si chiude quando il video è pronto (minimo ~2,2 s, massimo 6 s). */
export default function Preloader() {
  const { t } = useLang();
  const [progress, setProgress] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const reduce = prefersReducedMotion();
    const MIN = reduce ? 300 : 2200, MAX = 6000;
    const t0 = performance.now();
    let ready = false, closed = false;
    document.documentElement.classList.add('is-loading');

    const close = () => {
      if (closed) return;
      closed = true;
      setProgress(100);
      setLeaving(true);
      document.documentElement.classList.remove('is-loading');
      setTimeout(() => setGone(true), 900);
    };
    const tryClose = () => {
      const wait = Math.max(0, MIN - (performance.now() - t0));
      setTimeout(close, wait);
    };
    const onProgress = (e) => setProgress((p) => Math.max(p, Math.min(99, e.detail)));
    const onReady = () => { ready = true; tryClose(); };
    window.addEventListener('sodano:progress', onProgress);
    window.addEventListener('sodano:ready', onReady);
    const fallback = setTimeout(close, MAX);
    return () => {
      window.removeEventListener('sodano:progress', onProgress);
      window.removeEventListener('sodano:ready', onReady);
      clearTimeout(fallback);
      document.documentElement.classList.remove('is-loading');
    };
  }, []);

  if (gone) return null;
  return (
    <div className={'preloader' + (leaving ? ' leaving' : '')} aria-hidden={leaving} role="status" aria-label={t.loading}>
      <div className="pre-inner">
        <svg className="pre-logo" viewBox="0 0 486 514" aria-hidden="true">
          <defs>
            <linearGradient id="preGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#FF2A2A" />
              <stop offset="1" stopColor="#B00000" />
            </linearGradient>
          </defs>
          <path className="pre-fill" d={LOGO_PATH} fill="url(#preGrad)" fillRule="evenodd" />
          <path className="pre-stroke" d={LOGO_PATH} fill="none" stroke="#FF3B3B" strokeWidth="2.5" pathLength="1" />
        </svg>
        <p className="pre-word">SODANO <span>CONSULTING</span></p>
        <div className="pre-bar"><span style={{ width: progress + '%' }} /></div>
      </div>
    </div>
  );
}

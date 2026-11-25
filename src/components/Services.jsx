import { useEffect, useRef, useState } from 'react';
import { useLang } from '../i18n/LanguageContext.jsx';
import { MEDIA, HOTSPOTS } from '../config/media.js';
import { prefersReducedMotion } from '../hooks/useReveal.js';
import Reveal from './Reveal.jsx';
import Split from './Split.jsx';
import PillarOverlay from './PillarOverlay.jsx';

export default function Services() {
  const { t } = useLang();
  const stageRef = useRef(null);
  const videoRef = useRef(null);
  const [zoom, setZoom] = useState(null);       // { origin, scale }
  const [blackout, setBlackout] = useState(false);
  const [open, setOpen] = useState(null);       // 'dev' | 'mkt' | 'sys'
  const timers = useRef([]);

  // Il video della postazione gira solo quando la sezione è visibile
  useEffect(() => {
    const stage = stageRef.current, video = videoRef.current;
    if (!('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) video.play().catch(() => {}); else video.pause();
    }, { threshold: 0.2 });
    io.observe(stage);
    return () => io.disconnect();
  }, []);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  function enter(key) {
    if (prefersReducedMotion()) { setOpen(key); return; }
    const h = HOTSPOTS.find((x) => x.key === key);
    stageRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    timers.current.push(setTimeout(() => {
      setZoom({ origin: `${h.left + h.width / 2}% ${h.top + h.height / 2}%`, scale: key === 'dev' ? 2.6 : 5 });
      timers.current.push(setTimeout(() => setBlackout(true), 650));
      timers.current.push(setTimeout(() => setOpen(key), 1050));
    }, 250));
  }

  function close() {
    setOpen(null);
    setZoom(null);
    setBlackout(false);
  }

  return (
    <section className="section services" id="services">
      <Reveal className="wrap services-head">
        <div>
          <p className="label">{t.navServices}</p>
          <h2 aria-label={t.servTitle}><Split text={t.servTitle} /></h2>
        </div>
        <p className="muted">{t.servHint}</p>
      </Reveal>

      <div className="desk-wrap">
        <div
          ref={stageRef}
          className={'desk-stage' + (zoom ? ' zooming' : '')}
          style={zoom ? { transformOrigin: zoom.origin, transform: `scale(${zoom.scale})` } : undefined}
        >
          <video ref={videoRef} className="desk-video" muted loop playsInline autoPlay preload="metadata"
            poster={MEDIA.deskPoster} src={MEDIA.deskVideo} aria-hidden="true" />
          <div className="desk-fade" aria-hidden="true" />
          {HOTSPOTS.map((h) => (
            <button key={h.key} type="button" className="hotspot" data-pillar={h.key}
              style={{ left: h.left + '%', top: h.top + '%', width: h.width + '%', height: h.height + '%' }}
              onClick={() => enter(h.key)}>
              <span className="hs-label">{labelOf(h.key)}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="wrap desk-list">
        {['dev', 'mkt', 'sys'].map((k) => (
          <button key={k} type="button" className="desk-chip" onClick={() => enter(k)}>{labelOf(k)}</button>
        ))}
      </div>

      <div className={'blackout' + (blackout && !open ? ' on' : '')} />
      <PillarOverlay pillar={open} onClose={close} />
    </section>
  );
}

function labelOf(k) {
  return { dev: 'Developer', mkt: 'Marketing', sys: 'System' }[k];
}

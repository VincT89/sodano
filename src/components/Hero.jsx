import { useEffect, useRef, useState } from 'react';
import { useLang } from '../i18n/LanguageContext.jsx';
import { MEDIA } from '../config/media.js';
import { prefersReducedMotion } from '../hooks/useReveal.js';

/* Momenti del racconto in base all'avanzamento dello scroll (0 → 1) */
// Video v3 (15,6 s): server 0–6,9 s · cavo e retro del monitor 6,9–9,5 s · giro e sito 9,5–12,2 s · logo 12,2–15,6 s
function beatFor(p) {
  if (p < 0.03) return 0;
  if (p < 0.42) return 1; // server
  if (p < 0.60) return 2; // cavo verso il monitor
  if (p < 0.77) return 3; // giro attorno al monitor e sito
  return 4; // finale: solo logo e scritta
}

export default function Hero() {
  const { t } = useLang();
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const barRef = useRef(null);
  const [beat, setBeat] = useState(0);
  const [loaded, setLoaded] = useState(0); // 0-100
  const [ready, setReady] = useState(false);

  // Scarica il video intero in memoria: ogni fotogramma è subito disponibile durante lo scroll
  useEffect(() => {
    const video = videoRef.current;
    const mobile = window.matchMedia('(max-width: 820px), (max-aspect-ratio: 4/5)').matches;
    const src = mobile ? MEDIA.heroMobile : MEDIA.heroDesktop;
    let objectUrl = null;
    let cancelled = false;

    async function load() {
      try {
        const r = await fetch(src);
        if (!r.ok || !r.body) throw new Error(String(r.status));
        const total = Number(r.headers.get('Content-Length')) || 0;
        const reader = r.body.getReader();
        const chunks = [];
        let got = 0;
        for (;;) {
          const { done, value } = await reader.read();
          if (done) break;
          chunks.push(value);
          got += value.length;
          if (total && !cancelled) {
            const pct = Math.round((got / total) * 100);
            setLoaded(pct);
            window.dispatchEvent(new CustomEvent('sodano:progress', { detail: pct }));
          }
        }
        if (cancelled) return;
        objectUrl = URL.createObjectURL(new Blob(chunks, { type: 'video/mp4' }));
        video.src = objectUrl;
      } catch (e) {
        video.src = src; // streaming diretto se il download non è consentito
      }
      if (!cancelled) { setReady(true); window.dispatchEvent(new Event('sodano:ready')); }
    }
    load();
    return () => { cancelled = true; if (objectUrl) URL.revokeObjectURL(objectUrl); };
  }, []);

  // Collega il tempo del video allo scroll
  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    const reduce = prefersReducedMotion();
    let duration = 0, current = 0, seeking = false, raf = 0, lastBeat = -1;

    const onMeta = () => {
      duration = video.duration || 20;
      video.play().then(() => video.pause()).catch(() => {});
    };
    const onSeeked = () => { seeking = false; };
    video.addEventListener('loadedmetadata', onMeta);
    video.addEventListener('seeked', onSeeked);

    const tick = () => {
      const r = section.getBoundingClientRect();
      const total = r.height - window.innerHeight;
      const p = Math.min(1, Math.max(0, -r.top / total));
      if (barRef.current) barRef.current.style.width = (p * 100).toFixed(2) + '%';
      if (duration) {
        const target = p * (duration - 0.05);
        current += (target - current) * (reduce ? 1 : 0.18);
        if (!seeking && Math.abs(video.currentTime - current) > 1 / 48) {
          seeking = true;
          try { video.currentTime = current; } catch (e) { seeking = false; }
        }
      }
      const b = beatFor(p);
      if (b !== lastBeat) { lastBeat = b; setBeat(b); }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      video.removeEventListener('loadedmetadata', onMeta);
      video.removeEventListener('seeked', onSeeked);
    };
  }, []);

  const beats = [
    { tag: 'System', text: t.beat1 },
    { tag: 'Hosting & Cloud', text: t.beat2 },
    { tag: 'Web', text: t.beat3 }
  ];

  return (
    <section ref={sectionRef} className={'hero' + (beat === 4 ? ' at-end' : '')} id="hero" aria-label="Introduzione">
      <div className="hero-sticky">
        <video ref={videoRef} className="hero-video" muted playsInline preload="auto" poster={MEDIA.heroPoster} aria-hidden="true" />
        <div className={'hero-loading' + (ready ? ' done' : '')} aria-hidden="true"><span style={{ width: loaded + '%' }} /></div>
        <div className="hero-shade" />

        <div className={'hero-beat' + (beat === 0 ? ' is-active' : '')}>
          <p className="eyebrow">{t.heroEyebrow}</p>
          <h1 className="hero-title">
            <span className="w">{t.w1}</span>
            <span className="w">{t.w2}</span>
            <span className="w red">{t.w3}</span>
          </h1>
        </div>

        <p className={'scroll-hint' + (beat === 0 ? ' is-active' : '')}>
          <span className="cubes" aria-hidden="true"><i /><i /><i /></span>
          <span className="sr-only">{t.scrollHint}</span>
        </p>

        {beats.map((b, i) => (
          <div key={b.tag} className={'hero-beat' + (beat === i + 1 ? ' is-active' : '')}>
            <p className="beat-tag">{b.tag}</p>
            <p className="beat-text">{b.text}</p>
          </div>
        ))}

        <div className="hero-progress" aria-hidden="true"><span ref={barRef} /></div>
      </div>
    </section>
  );
}

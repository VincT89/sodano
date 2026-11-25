import { useEffect, useRef, useState } from 'react';
import { useLang } from '../i18n/LanguageContext.jsx';
import { STATS } from '../config/media.js';
import { prefersReducedMotion } from '../hooks/useReveal.js';
import Reveal from './Reveal.jsx';
import Split from './Split.jsx';

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const [n, setN] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (prefersReducedMotion() || !('IntersectionObserver' in window)) { setN(value); return; }
    let raf = 0;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now();
      const step = (now) => {
        const k = Math.min(1, (now - t0) / 1600);
        setN(Math.round(value * (1 - Math.pow(1 - k, 3))));
        if (k < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    }, { threshold: 0.6 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [value]);
  return <strong ref={ref}>{n}{suffix}</strong>;
}

export default function About() {
  const { t } = useLang();
  return (
    <section className="section about" id="about">
      <div className="wrap grid-2">
        <Reveal>
          <p className="label">{t.navAbout}</p>
          <h2 aria-label={t.aboutTitle}><Split text={t.aboutTitle} /></h2>
        </Reveal>
        <Reveal>
          <p className="lead">{t.aboutBody}</p>
          <p className="muted">{t.aboutBody2}</p>
          <div className="stats">
            {STATS.map((s) => (
              <div className="stat" key={s.key}>
                <Counter value={s.value} suffix={s.suffix} />
                <span>{t[s.key]}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

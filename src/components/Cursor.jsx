import { useEffect, useRef } from 'react';
import { prefersReducedMotion } from '../hooks/useReveal.js';

/* Griglia di puntini che si accende attorno al mouse (cursore di sistema invariato)
   + pulsanti "magnetici". Solo mouse, non su touch. */
const STEP = 22;
const RADIUS = 130;
const REACH = 260; // oltre questo raggio la griglia non viene disegnata
// zone dove l'effetto si spegne: video, mappamondo, modulo, header, overlay
const MUTED = '.hero-sticky, .desk-wrap, .globe-stage, .form, .site-header, .cookie, .pillar, input, textarea';

export default function Cursor() {
  const canvas = useRef(null);

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    if (!fine || prefersReducedMotion()) return;
    const cv = canvas.current;
    const ctx = cv.getContext('2d');
    let w = 0, h = 0, dpr = 1;
    let x = -999, y = -999, rx = -999, ry = -999;
    let level = 0, target = 0, raf = 0, magnet = null;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth; h = window.innerHeight;
      cv.width = w * dpr; cv.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      wake();
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      if (level < 0.01) return;
      // la griglia scorre con la pagina
      const oy = -(window.scrollY % STEP);
      const x0 = Math.max(STEP / 2, Math.floor((rx - REACH) / STEP) * STEP + STEP / 2);
      const y0 = Math.floor((ry - REACH - oy) / STEP) * STEP + STEP / 2 + oy;
      for (let gx = x0; gx < Math.min(w, rx + REACH); gx += STEP) {
        for (let gy = y0; gy < Math.min(h, ry + REACH); gy += STEP) {
          const d = Math.hypot(gx - rx, gy - ry);
          if (d > REACH) continue;
          const k = Math.max(0, 1 - d / RADIUS);
          const base = 0.09 * (1 - d / REACH);
          const a = (base + 0.8 * k) * level;
          if (a < 0.01) continue;
          const g = Math.round(255 - 200 * k);
          ctx.fillStyle = `rgba(255,${g},${g},${a})`;
          const s = 1.2 + 2 * k;
          ctx.fillRect(gx - s / 2, gy - s / 2, s, s);
        }
      }
    };

    const tick = () => {
      rx += (x - rx) * 0.2; ry += (y - ry) * 0.2;
      level += (target - level) * 0.12;
      draw();
      const still = Math.abs(x - rx) < 0.3 && Math.abs(y - ry) < 0.3 && Math.abs(target - level) < 0.005;
      raf = still ? 0 : requestAnimationFrame(tick);
    };
    function wake() { if (!raf) raf = requestAnimationFrame(tick); }

    const move = (e) => {
      if (e.pointerType && e.pointerType !== 'mouse') return;
      if (x < -900) { rx = e.clientX; ry = e.clientY; }
      x = e.clientX; y = e.clientY;
      const t = e.target;
      target = t.closest && t.closest(MUTED) ? 0 : 1;
      // effetto magnetico sui pulsanti principali
      const m = t.closest && t.closest('.btn');
      if (m !== magnet) { if (magnet) magnet.style.transform = ''; magnet = m; }
      if (m) {
        const r = m.getBoundingClientRect();
        const dx = (x - (r.left + r.width / 2)) / r.width, dy = (y - (r.top + r.height / 2)) / r.height;
        m.style.transform = `translate(${dx * 10}px, ${dy * 8}px)`;
      }
      wake();
    };
    const leave = () => { target = 0; wake(); };
    const scroll = () => {
      const el = document.elementFromPoint(x, y);
      target = el && !el.closest(MUTED) ? 1 : 0;
      wake();
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', move, { passive: true });
    window.addEventListener('scroll', scroll, { passive: true });
    document.addEventListener('pointerleave', leave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('scroll', scroll);
      document.removeEventListener('pointerleave', leave);
      if (magnet) magnet.style.transform = '';
    };
  }, []);

  return <canvas ref={canvas} className="cursor-grid" aria-hidden="true" />;
}

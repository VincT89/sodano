import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
import { geoOrthographic, geoPath, geoGraticule10, geoDistance, geoContains, geoCentroid } from 'd3-geo';
import world from '../data/world.json';
import { prefersReducedMotion } from '../hooks/useReveal.js';

/* Mappamondo interattivo: gira da solo, si trascina, i paesi evidenziati cambiano la lingua. */
const TARGETS = world.features.filter((f) => f.properties.lang);
const OTHERS = { type: 'FeatureCollection', features: world.features.filter((f) => !f.properties.lang) };
const GRATICULE = geoGraticule10();
const HQ = [16.98, 41.06]; // Valenzano (BA)
const CITIES = [
  { lang: 'de', c: [13.40, 52.52] }, // Berlino
  { lang: 'de', c: [8.54, 47.37] },  // Zurigo
  { lang: 'nl', c: [4.90, 52.37] },  // Amsterdam
  { lang: 'it', c: [9.19, 45.46] }   // Milano
];
const ARCS = CITIES.map((c) => ({ lang: c.lang, line: { type: 'LineString', coordinates: [HQ, c.c] } }));
const LABEL_OFF = { Deutschland: [6, -16], Schweiz: [-44, 6], Italia: [-34, 34], Nederland: [-46, -8] };
const FOCUS = { it: [12.5, 42.5], en: [5, 48] };

const Globe = forwardRef(function Globe({ lang, onPick }, ref) {
  const canvasRef = useRef(null);
  const tipRef = useRef(null);
  const langRef = useRef(lang);
  const pickRef = useRef(onPick);
  pickRef.current = onPick;
  const state = useRef({ rot: [-12, -44, 0], zoom: 1, zoomTarget: 1, fly: null, idleUntil: 0, hovered: null, dragging: false, last: null });
  langRef.current = lang;

  function flyTo(code) {
    const s = state.current;
    const f = TARGETS.find((x) => x.properties.lang === code);
    const c = FOCUS[code] || (f ? geoCentroid(f) : [10, 50]);
    s.fly = { from: s.rot.slice(), to: [-c[0], -c[1] + 6, 0], t: 0 };
    s.zoomTarget = code === 'en' ? 1.25 : 1.85;
    s.idleUntil = performance.now() + 7000;
  }
  useImperativeHandle(ref, () => ({ flyTo }));

  useEffect(() => {
    const canvas = canvasRef.current, box = canvas.parentElement, tip = tipRef.current;
    const ctx = canvas.getContext('2d');
    const reduce = prefersReducedMotion();
    const s = state.current;
    const projection = geoOrthographic().clipAngle(90);
    const path = geoPath(projection, ctx);
    let W = 0, H = 0, R0 = 0, R = 0, dpr = 1, visible = true, raf = 0, prev = performance.now();

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = box.clientWidth; H = box.clientHeight;
      canvas.width = W * dpr; canvas.height = H * dpr;
      R0 = Math.min(W, H) * 0.44;
      projection.translate([W / 2, H / 2]);
    }

    function label(txt, x, y, color, center) {
      ctx.font = '600 12px "JetBrains Mono", monospace';
      const w = ctx.measureText(txt).width;
      const bx = center ? x - w / 2 - 6 : x - 6;
      ctx.fillStyle = 'rgba(11,11,15,0.78)';
      ctx.beginPath();
      if (ctx.roundRect) ctx.roundRect(bx, y - 13, w + 12, 19, 5); else ctx.rect(bx, y - 13, w + 12, 19);
      ctx.fill();
      ctx.fillStyle = color; ctx.fillText(txt, bx + 6, y + 1);
    }

    function draw(t) {
      const lang = langRef.current;
      R = R0 * s.zoom;
      projection.scale(R).rotate(s.rot);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, W, H);
      const cx = W / 2, cy = H / 2;

      const glow = ctx.createRadialGradient(cx, cy, R * 0.9, cx, cy, R * 1.35);
      glow.addColorStop(0, 'rgba(227,0,0,0.35)'); glow.addColorStop(1, 'rgba(227,0,0,0)');
      ctx.fillStyle = glow; ctx.beginPath(); ctx.arc(cx, cy, R * 1.35, 0, Math.PI * 2); ctx.fill();

      const sea = ctx.createRadialGradient(cx - R * 0.35, cy - R * 0.4, R * 0.1, cx, cy, R);
      sea.addColorStop(0, '#1C1218'); sea.addColorStop(1, '#09090C');
      ctx.fillStyle = sea; ctx.beginPath(); path({ type: 'Sphere' }); ctx.fill();

      ctx.strokeStyle = 'rgba(255,255,255,0.05)'; ctx.lineWidth = 0.6;
      ctx.beginPath(); path(GRATICULE); ctx.stroke();

      ctx.fillStyle = '#23232C'; ctx.strokeStyle = '#0B0B0F'; ctx.lineWidth = 0.5;
      ctx.beginPath(); path(OTHERS); ctx.fill(); ctx.stroke();

      TARGETS.forEach((f) => {
        const on = f.properties.lang === lang, hot = s.hovered === f;
        ctx.fillStyle = on ? '#E30000' : hot ? '#B30F14' : '#6B1A1D';
        ctx.strokeStyle = on || hot ? '#FF8A84' : '#0B0B0F'; ctx.lineWidth = on || hot ? 1 : 0.5;
        ctx.beginPath(); path(f); ctx.fill(); ctx.stroke();
      });

      const center = projection.invert([cx, cy]);
      ctx.lineWidth = 1.6; ctx.setLineDash([6, 8]); ctx.lineDashOffset = -(t / 40) % 14;
      ARCS.forEach((a) => {
        ctx.strokeStyle = a.lang === lang ? 'rgba(255,90,82,0.95)' : 'rgba(255,90,82,0.45)';
        ctx.beginPath(); path(a.line); ctx.stroke();
      });
      ctx.setLineDash([]);

      const dot = (c, r, color, pulse) => {
        if (geoDistance(c, center) > Math.PI / 2) return null;
        const p = projection(c);
        if (pulse) {
          const k = (t / 1600) % 1;
          ctx.strokeStyle = `rgba(227,0,0,${1 - k})`; ctx.lineWidth = 2;
          ctx.beginPath(); ctx.arc(p[0], p[1], r + k * 16, 0, Math.PI * 2); ctx.stroke();
        }
        ctx.fillStyle = color; ctx.beginPath(); ctx.arc(p[0], p[1], r, 0, Math.PI * 2); ctx.fill();
        ctx.strokeStyle = '#fff'; ctx.lineWidth = 1.5; ctx.stroke();
        return p;
      };
      CITIES.forEach((c) => dot(c.c, 3, '#FF5A52', false));
      const hq = dot(HQ, 4.5, '#E30000', true);
      if (hq) label('Valenzano (BA)', hq[0] + 10, hq[1] + 18, '#fff');

      TARGETS.forEach((f) => {
        const name = f.properties.name;
        const c = name === 'Italia' ? [12.5, 43.2] : geoCentroid(f);
        if (geoDistance(c, center) > Math.PI / 2.4) return;
        const p = projection(c), o = LABEL_OFF[name] || [0, -10], k = Math.min(1.4, s.zoom);
        label(name, p[0] + o[0] * k, p[1] + o[1] * k, f.properties.lang === lang ? '#fff' : '#D6D4DA', true);
      });
    }

    function pick(x, y) {
      const ll = projection.invert([x, y]);
      if (!ll || geoDistance(ll, projection.invert([W / 2, H / 2])) > Math.PI / 2) return null;
      return TARGETS.find((f) => geoContains(f, ll)) || null;
    }

    const local = (e) => { const r = canvas.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; };
    const onDown = (e) => {
      s.dragging = true; s.last = [e.clientX, e.clientY, e.clientX, e.clientY];
      canvas.setPointerCapture(e.pointerId); s.fly = null; s.zoomTarget = 1;
    };
    const onMove = (e) => {
      const [x, y] = local(e);
      if (s.dragging) {
        const k = (70 / R) * 2.2;
        s.rot[0] += (e.clientX - s.last[0]) * k;
        s.rot[1] = Math.max(-80, Math.min(80, s.rot[1] - (e.clientY - s.last[1]) * k));
        s.last[0] = e.clientX; s.last[1] = e.clientY;
        s.idleUntil = performance.now() + 5000;
        tip.hidden = true;
        return;
      }
      const f = pick(x, y);
      s.hovered = f;
      canvas.style.cursor = f ? 'pointer' : 'grab';
      if (f) {
        tip.hidden = false; tip.textContent = `${f.properties.name} · ${f.properties.lang.toUpperCase()}`;
        tip.style.left = x + 'px'; tip.style.top = y + 'px';
      } else tip.hidden = true;
    };
    const onUp = (e) => {
      s.dragging = false;
      const moved = Math.abs(e.clientX - s.last[2]) + Math.abs(e.clientY - s.last[3]);
      if (moved < 6) {
        const f = pick(...local(e));
        if (f) { pickRef.current(f.properties.lang); flyTo(f.properties.lang); }
      }
    };
    const onLeave = () => { s.hovered = null; tip.hidden = true; };

    canvas.addEventListener('pointerdown', onDown);
    canvas.addEventListener('pointermove', onMove);
    canvas.addEventListener('pointerup', onUp);
    canvas.addEventListener('pointerleave', onLeave);
    window.addEventListener('resize', resize);
    let io;
    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; });
      io.observe(box);
    }
    resize();

    const frame = (now) => {
      raf = requestAnimationFrame(frame);
      const dt = Math.min(now - prev, 50); prev = now;
      if (!visible) return;
      s.zoom += (s.zoomTarget - s.zoom) * 0.06;
      if (!s.fly && !s.dragging && now > s.idleUntil && s.zoomTarget > 1.05) s.zoomTarget = 1;
      if (s.fly) {
        const fl = s.fly;
        fl.t = Math.min(1, fl.t + dt / 1300);
        const e = fl.t < 0.5 ? 4 * fl.t ** 3 : 1 - Math.pow(-2 * fl.t + 2, 3) / 2;
        const d0 = ((fl.to[0] - fl.from[0] + 540) % 360) - 180;
        s.rot = [fl.from[0] + d0 * e, fl.from[1] + (fl.to[1] - fl.from[1]) * e, 0];
        if (fl.t >= 1) s.fly = null;
      } else if (!s.dragging && !reduce && now > s.idleUntil) {
        s.rot[0] += dt * 0.006;
      }
      draw(reduce ? 0 : now);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      io?.disconnect();
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('pointerdown', onDown);
      canvas.removeEventListener('pointermove', onMove);
      canvas.removeEventListener('pointerup', onUp);
      canvas.removeEventListener('pointerleave', onLeave);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <canvas id="globeCanvas" ref={canvasRef} role="img"
        aria-label="Mappamondo interattivo: trascina per ruotarlo, clicca Italia, Germania, Svizzera o Paesi Bassi per cambiare lingua" />
      <div className="globe-tip" ref={tipRef} hidden />
    </>
  );
});

export default Globe;

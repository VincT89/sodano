import { forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import Globe from 'react-globe.gl';
import { Color, MeshPhongMaterial } from 'three';
import world from '../data/world.json';
import { prefersReducedMotion } from '../hooks/useReveal.js';

/* Mappamondo 3D (WebGL): Terra di notte, paesi evidenziati in rilievo, archi animati dalla sede. */
// Sedi: Valenzano (amministrativa) e Roma (commerciale)
const HQS = [
  { id: 'bari', name: 'Valenzano (BA)', lat: 41.06, lng: 16.98, label: { lat: 39.0, lng: 22.8 } },
  { id: 'roma', name: 'Roma', lat: 41.88, lng: 12.51, label: { lat: 40.4, lng: 8.2 } }
];
const ROMA = HQS[1], BARI = HQS[0];
// quota dei segnaposto: sempre sopra il rilievo dei paesi, così restano visibili
const MARK_ALT = 0.045;
const CITIES = [
  { lang: 'it', name: 'Milano', lat: 45.46, lng: 9.19 },
  { lang: 'de', name: 'Zürich', lat: 47.37, lng: 8.54 },
  { lang: 'de', name: 'Berlin', lat: 52.52, lng: 13.40 },
  { lang: 'nl', name: 'Amsterdam', lat: 52.37, lng: 4.90 }
];
// posizioni delle etichette leggermente spostate dal centro del paese, per non sovrapporsi
const COUNTRY_LABELS = [
  { lang: 'it', name: 'Italia', lat: 43.4, lng: 15.6 },
  { lang: 'de', name: 'Deutschland', lat: 52.6, lng: 15.8 },
  { lang: 'de', name: 'Schweiz', lat: 46.1, lng: 2.6 },
  { lang: 'nl', name: 'Nederland', lat: 55.2, lng: 0.6 }
];
const VIEW = {
  home: { lat: 45, lng: 11, altitude: 1.35 },
  it: { lat: 42.5, lng: 12.5, altitude: 1.15 },
  de: { lat: 49.5, lng: 9.5, altitude: 1.2 },
  nl: { lat: 52.2, lng: 5.3, altitude: 1.05 }
};

const Globe3D = forwardRef(function Globe3D({ lang, onPick }, ref) {
  const globeRef = useRef(null);
  const boxRef = useRef(null);
  const [size, setSize] = useState({ w: 600, h: 600 });
  const [hovered, setHovered] = useState(null);
  const reduce = prefersReducedMotion();

  const countries = world.features;
  // Terra di notte ricolorata in nero/grafite con luci delle città rosse (texture in public/assets/globe)
  const material = useMemo(() => new MeshPhongMaterial({ color: new Color('#ffffff'), emissive: new Color('#120202'), bumpScale: 5, shininess: 6 }), []);
  // rete: Valenzano ↔ Roma, e da Roma verso le città dei paesi serviti
  const arcs = useMemo(() => [
    { lang: 'it', startLat: BARI.lat, startLng: BARI.lng, endLat: ROMA.lat, endLng: ROMA.lng },
    ...CITIES.map((c) => ({ ...c, startLat: ROMA.lat, startLng: ROMA.lng, endLat: c.lat, endLng: c.lng }))
  ], []);

  // dimensioni dal contenitore
  useEffect(() => {
    const el = boxRef.current;
    const ro = new ResizeObserver(([e]) => {
      const w = Math.round(e.contentRect.width), h = Math.round(e.contentRect.height);
      if (w && h) setSize({ w, h });
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // impostazioni iniziali: vista sull'Europa e lenta oscillazione (i paesi restano sempre davanti)
  const idleUntil = useRef(0);
  useEffect(() => {
    const g = globeRef.current;
    if (!g) return;
    g.pointOfView(VIEW.home, 0);
    const c = g.controls();
    c.enableZoom = false;
    c.autoRotate = false;
    c.enableDamping = true;
    if (typeof g.renderer === 'function') g.renderer().setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
    const pause = () => { idleUntil.current = performance.now() + 7000; };
    c.addEventListener('start', pause);
    let raf = 0, t0 = performance.now(), swaying = false, base = null;
    const tick = (now) => {
      raf = requestAnimationFrame(tick);
      if (reduce || now < idleUntil.current) { swaying = false; return; }
      if (!swaying) { base = g.pointOfView(); t0 = now; swaying = true; }
      const k = (now - t0) / 1000;
      // parte dalla posizione attuale e oscilla di ±16° attorno all'Europa
      const lng = VIEW.home.lng + (base.lng - VIEW.home.lng) * Math.exp(-k / 3) + 16 * Math.sin(k * 0.18) * (1 - Math.exp(-k / 3));
      const lat = VIEW.home.lat + (base.lat - VIEW.home.lat) * Math.exp(-k / 3);
      g.pointOfView({ lat, lng, altitude: base.altitude }, 0);
    };
    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); c.removeEventListener('start', pause); };
  }, [reduce]);

  function flyTo(code, ms = 1300) {
    const g = globeRef.current;
    if (!g) return;
    idleUntil.current = performance.now() + ms + 8000;
    g.pointOfView(VIEW[code] || VIEW.home, ms);
  }
  function zoom(delta) {
    const g = globeRef.current;
    if (!g) return;
    const p = g.pointOfView();
    idleUntil.current = performance.now() + 7000;
    g.pointOfView({ ...p, altitude: Math.min(3.2, Math.max(0.7, p.altitude + delta)) }, 500);
  }
  useImperativeHandle(ref, () => ({ flyTo }));

  function pick(code) {
    flyTo(code);
    onPick(code);
  }

  const isTarget = (f) => !!f.properties.lang;

  return (
    <div className="globe-3d" ref={boxRef} style={{ cursor: hovered ? 'pointer' : 'grab' }}>
      <Globe
        ref={globeRef}
        width={size.w}
        height={size.h}
        backgroundColor="rgba(0,0,0,0)"
        rendererConfig={{ antialias: true, alpha: true }}
        globeMaterial={material}
        globeImageUrl="/assets/globe/earth-night.jpg"
        bumpImageUrl="/assets/globe/earth-topology.jpg"
        showAtmosphere
        atmosphereColor="#E30000"
        atmosphereAltitude={0.2}
        animateIn={!reduce}

        polygonsData={countries}
        polygonCapColor={(f) => {
          if (!isTarget(f)) return 'rgba(255,255,255,0.02)';
          if (f === hovered) return 'rgba(255,59,59,0.95)';
          return f.properties.lang === lang ? 'rgba(227,0,0,0.92)' : 'rgba(150,18,22,0.85)';
        }}
        polygonSideColor={(f) => (isTarget(f) ? 'rgba(227,0,0,0.45)' : 'rgba(0,0,0,0)')}
        polygonStrokeColor={(f) => (isTarget(f) ? '#FF8A84' : 'rgba(255,90,82,0.16)')}
        polygonAltitude={(f) => {
          if (!isTarget(f)) return 0.004;
          if (f === hovered) return 0.03;
          return f.properties.lang === lang ? 0.02 : 0.012;
        }}
        polygonsTransitionDuration={300}
        onPolygonHover={(f) => setHovered(f && isTarget(f) ? f : null)}
        onPolygonClick={(f) => { if (isTarget(f)) pick(f.properties.lang); }}

        arcsData={arcs}
        arcColor={(a) => (a.lang === lang ? ['rgba(255,90,82,0.25)', '#FF2A2A'] : ['rgba(255,90,82,0.1)', 'rgba(255,90,82,0.7)'])}
        arcStroke={0.55}
        arcDashLength={0.35}
        arcDashGap={0.25}
        arcDashAnimateTime={reduce ? 0 : 1600}
        arcAltitudeAutoScale={0.35}
        arcStartAltitude={MARK_ALT}
        arcEndAltitude={MARK_ALT}

        ringsData={HQS}
        ringAltitude={MARK_ALT}
        ringColor={() => (t) => `rgba(227,0,0,${1 - t})`}
        ringMaxRadius={3.5}
        ringPropagationSpeed={2}
        ringRepeatPeriod={reduce ? 0 : 1100}

        pointsData={[...CITIES, ...HQS.map((h) => ({ ...h, hq: true }))]}
        pointColor={(p) => (p.hq ? '#ffffff' : '#FF5A52')}
        pointAltitude={MARK_ALT}
        pointRadius={(p) => (p.hq ? 0.32 : 0.22)}
        pointsMerge={false}

        htmlElementsData={[...COUNTRY_LABELS, ...HQS.map((h) => ({ ...h.label, hq: true, name: h.name }))]}
        htmlAltitude={0.06}
        htmlElement={(d) => {
          const el = document.createElement(d.hq ? 'span' : 'button');
          el.className = 'globe-chip' + (d.hq ? ' hq' : '') + (d.lang === lang ? ' on' : '');
          el.textContent = d.name;
          if (!d.hq) {
            el.type = 'button';
            el.setAttribute('aria-label', `${d.name}: apri il sito in ${d.lang.toUpperCase()}`);
            el.addEventListener('click', (ev) => { ev.stopPropagation(); pick(d.lang); });
          }
          return el;
        }}
        htmlElementVisibilityModifier={(el, visible) => {
          el.style.opacity = visible ? 1 : 0;
          el.style.pointerEvents = visible && el.tagName === 'BUTTON' ? 'auto' : 'none';
        }}
      />
      <div className="globe-zoom">
        <button type="button" aria-label="Avvicina" onClick={() => zoom(-0.4)}>+</button>
        <button type="button" aria-label="Allontana" onClick={() => zoom(0.4)}>−</button>
      </div>
    </div>
  );
});

export default Globe3D;

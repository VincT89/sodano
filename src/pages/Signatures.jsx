import { useState } from 'react';

/* Sezioni "su misura" delle pagine servizio: ognuna racconta il servizio in modo visivo.
   I testi stanno in src/content/services.js (content.<lingua>.sig); kind sceglie il componente. */

function Head({ sig }) {
  return (
    <div className="sig-head">
      <h2>{sig.title}</h2>
      {sig.text && <p className="svc-text">{sig.text}</p>}
      {sig.note && <p className="sig-note">{sig.note}</p>}
    </div>
  );
}

/* Siti web: lo stesso sito su computer e telefono */
function Devices({ sig }) {
  const blocks = (
    <>
      <i className="d-nav" /><i className="d-hero" />
      <span className="d-tiles"><i /><i /><i /></span>
      <i className="d-line" /><i className="d-line short" />
    </>
  );
  return (
    <div className="sig sig-devices">
      <Head sig={sig} />
      <div className="dev-stage" aria-hidden="true">
        <figure className="dev-desktop"><div className="dev-screen">{blocks}</div><figcaption>{sig.labels[0]}</figcaption></figure>
        <figure className="dev-phone"><div className="dev-screen">{blocks}</div><figcaption>{sig.labels[1]}</figcaption></figure>
      </div>
    </div>
  );
}

/* Gestionali: prima e dopo */
function BeforeAfter({ sig }) {
  return (
    <div className="sig sig-ba">
      <h2>{sig.title}</h2>
      <div className="ba-cols">
        <div className="ba-before">
          <h3>{sig.beforeLabel}</h3>
          <ul>{sig.before.map((x) => <li key={x}>{x}</li>)}</ul>
        </div>
        <span className="ba-arrow" aria-hidden="true">→</span>
        <div className="ba-after">
          <h3>{sig.afterLabel}</h3>
          <ul>{sig.after.map((x) => <li key={x}>{x}</li>)}</ul>
        </div>
      </div>
    </div>
  );
}

/* Integrazioni: sistemi collegati a un nodo centrale, con dati che viaggiano */
function Network({ sig }) {
  const n = sig.nodes.length, cx = 300, cy = 210, rx = 230, ry = 150;
  const pts = sig.nodes.map((label, i) => {
    const a = -Math.PI / 2 + (i * 2 * Math.PI) / n;
    return { label, x: cx + rx * Math.cos(a), y: cy + ry * Math.sin(a) };
  });
  return (
    <div className="sig sig-network">
      <Head sig={sig} />
      <svg viewBox="0 0 600 420" role="img" aria-label={sig.title + ': ' + sig.nodes.join(', ')}>
        {pts.map((p, i) => (
          <g key={p.label}>
            <path id={'ln' + i} d={`M${p.x},${p.y} L${cx},${cy}`} className="net-line" />
            <circle r="4" className="net-dot">
              <animateMotion dur={2.4 + (i % 3) * 0.6 + 's'} repeatCount="indefinite" begin={i * 0.4 + 's'} keyPoints={i % 2 ? '0;1' : '1;0'} keyTimes="0;1" calcMode="linear">
                <mpath href={'#ln' + i} />
              </animateMotion>
            </circle>
          </g>
        ))}
        <circle cx={cx} cy={cy} r="44" className="net-hub" />
        <text x={cx} y={cy + 6} className="net-hub-t">{sig.hub}</text>
        {pts.map((p) => (
          <g key={'n' + p.label}>
            <rect x={p.x - 62} y={p.y - 20} width="124" height="40" rx="12" className="net-node" />
            <text x={p.x} y={p.y + 5} className="net-t">{p.label}</text>
          </g>
        ))}
      </svg>
    </div>
  );
}

/* BI: cruscotto illustrativo (forme, nessun numero inventato) */
function Dashboard({ sig }) {
  const bars = [42, 55, 48, 66, 61, 78, 72, 88];
  return (
    <div className="sig sig-dash">
      <Head sig={sig} />
      <div className="dash" aria-hidden="true">
        <div className="dash-panel wide">
          <span>{sig.panels[0]}</span>
          <svg viewBox="0 0 320 90" preserveAspectRatio="none"><path d="M0,80 C40,70 60,60 90,62 S150,40 180,44 S240,20 270,24 S310,10 320,8" className="dash-line" /><path d="M0,80 C40,70 60,60 90,62 S150,40 180,44 S240,20 270,24 S310,10 320,8 L320,90 L0,90Z" className="dash-area" /></svg>
        </div>
        <div className="dash-panel">
          <span>{sig.panels[1]}</span>
          <div className="dash-bars">{bars.map((b, i) => <i key={i} style={{ height: b + '%' }} />)}</div>
        </div>
        <div className="dash-panel">
          <span>{sig.panels[2]}</span>
          <div className="dash-rows">{[86, 64, 47, 30].map((w, i) => <i key={i} style={{ width: w + '%' }} />)}</div>
        </div>
        <div className="dash-panel">
          <span>{sig.panels[3]}</span>
          <svg viewBox="0 0 100 100" className="dash-ring"><circle cx="50" cy="50" r="38" /><circle cx="50" cy="50" r="38" className="on" /></svg>
        </div>
      </div>
    </div>
  );
}

/* App mobile: tre telefoni con interfacce tipo */
function Phones({ sig }) {
  const ui = (kind) => {
    if (kind === 'calendar') return <div className="ph-cal">{Array.from({ length: 28 }, (_, i) => <i key={i} className={[5, 12, 13, 20].includes(i) ? 'on' : ''} />)}</div>;
    if (kind === 'list') return <div className="ph-list">{[0, 1, 2, 3, 4].map((i) => <i key={i}><b /><em /></i>)}</div>;
    return <div className="ph-check">{[1, 1, 1, 0, 0].map((d, i) => <i key={i} className={d ? 'on' : ''}><b /><em /></i>)}<span className="ph-btn" /></div>;
  };
  return (
    <div className="sig sig-phones">
      <Head sig={sig} />
      <div className="phones" aria-hidden="true">
        {sig.screens.map((s) => (
          <figure key={s.label} className="phone-mock">
            <div className="pm-screen"><i className="pm-bar" />{ui(s.ui)}</div>
            <figcaption>{s.label}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

/* Brand identity: esempio di sistema (palette, caratteri, applicazione) */
function BrandSystem({ sig }) {
  return (
    <div className="sig sig-brand">
      <Head sig={sig} />
      <div className="brand-board">
        <div className="brand-palette">
          {sig.palette.map((c) => (
            <div key={c.hex} className="swatch">
              <i style={{ background: c.hex }} />
              <span>{c.name}</span><code>{c.hex}</code>
            </div>
          ))}
        </div>
        <div className="brand-type">
          <span className="aa-head">Aa</span><span className="aa-body">Aa</span>
          <p>{sig.type}</p>
        </div>
        <div className="brand-card" aria-hidden="true">
          <i className="bc-mark" /><i className="bc-l1" /><i className="bc-l2" />
        </div>
      </div>
    </div>
  );
}

/* Social: una settimana di piano editoriale */
function Calendar({ sig }) {
  return (
    <div className="sig sig-cal">
      <Head sig={sig} />
      <div className="cal-grid" role="table" aria-label={sig.title}>
        {sig.days.map((d, i) => {
          const post = sig.posts.find((p) => p.day === i);
          return (
            <div key={d} className="cal-day" role="row">
              <span className="cal-d" role="cell">{d}</span>
              {post
                ? <div className={'cal-post t-' + post.type.toLowerCase()} role="cell"><b>{post.type}</b><span>{post.label}</span></div>
                : <div className="cal-empty" role="cell" />}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* Advertising e SEO: due andamenti nel tempo, solo indicativi */
function TwoRoads({ sig }) {
  return (
    <div className="sig sig-roads">
      <h2>{sig.title}</h2>
      <div className="roads">
        <svg viewBox="0 0 600 300" role="img" aria-label={`${sig.ads.t}: ${sig.ads.d} ${sig.seo.t}: ${sig.seo.d}`}>
          <line x1="40" y1="260" x2="580" y2="260" className="ax" />
          <line x1="40" y1="20" x2="40" y2="260" className="ax" />
          <text x="580" y="285" className="ax-t" textAnchor="end">{sig.axis}</text>
          <path d="M40,260 L80,140 L380,140 L400,250 L580,252" className="road-ads" />
          <path d="M40,258 C160,250 240,220 320,170 S470,70 580,40" className="road-seo" />
        </svg>
        <dl>
          <div className="k-ads"><dt>{sig.ads.t}</dt><dd>{sig.ads.d}</dd></div>
          <div className="k-seo"><dt>{sig.seo.t}</dt><dd>{sig.seo.d}</dd></div>
          {sig.note && <p className="sig-note">{sig.note}</p>}
        </dl>
      </div>
    </div>
  );
}

/* Foto e video: cosa riprendiamo, in grande */
function ShotTypes({ sig }) {
  return (
    <div className="sig sig-shots">
      <h2>{sig.title}</h2>
      <ul>{sig.items.map((x) => <li key={x}>{x}</li>)}</ul>
    </div>
  );
}

/* 3D: un oggetto in fil di ferro che ruota */
function Model3D({ sig }) {
  return (
    <div className="sig sig-model">
      <div className="model-stage" aria-hidden="true">
        <div className="cube">{['f', 'b', 'l', 'r', 't', 'd'].map((f) => <i key={f} className={'cf ' + f} />)}</div>
        <i className="model-floor" />
      </div>
      <Head sig={sig} />
    </div>
  );
}

/* 3D: configuratore dimostrativo (punte per martelli pneumatici). Il disegno cambia con le scelte e ruota */
const TIP = {
  point: 'M0,0 L64,26 L0,52 Z',
  flat: 'M0,4 L58,22 L64,26 L58,30 L0,48 Z',
  wide: 'M0,0 L40,-14 L64,-14 L64,66 L40,66 L0,52 Z',
  spade: 'M0,4 L30,-30 L64,-30 L64,82 L30,82 L0,48 Z'
};
const LEN = { s: 180, m: 270, l: 360 };
function Configurator({ sig }) {
  const [sel, setSel] = useState(() => Object.fromEntries(sig.groups.map((g) => [g.key, g.options[0].v])));
  const shaft = LEN[sel.length] || 270;
  const total = 120 + shaft + 64;
  return (
    <div className="sig sig-config">
      <div className="cfg-stage" aria-hidden="true">
        <svg viewBox={`-10 -60 ${total + 20} 172`} className="cfg-svg">
          <defs>
            <linearGradient id="steel" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#d9dbe0" /><stop offset=".45" stopColor="#7b808a" /><stop offset="1" stopColor="#2b2e35" />
            </linearGradient>
          </defs>
          <rect x="0" y="6" width="90" height="40" rx="4" fill="url(#steel)" />
          <rect x="90" y="0" width="30" height="52" rx="6" fill="#c8102e" />
          <rect x="120" y="12" width={shaft} height="28" fill="url(#steel)" className="cfg-shaft" />
          <g transform={`translate(${120 + shaft},0)`}><path d={TIP[sel.shape]} fill="url(#steel)" className="cfg-tip" /></g>
          <rect x="0" y="6" width={total} height="2" fill="rgba(255,255,255,.35)" />
        </svg>
        <i className="cfg-floor" />
      </div>
      <div className="cfg-panel">
        <h2>{sig.title}</h2>
        <p className="svc-text">{sig.text}</p>
        {sig.groups.map((g) => (
          <fieldset key={g.key} className="cfg-group">
            <legend>{g.label}</legend>
            <div className="cfg-opts">
              {g.options.map((o) => (
                <label key={o.v} className={sel[g.key] === o.v ? 'on' : ''}>
                  <input type="radio" name={'cfg-' + g.key} value={o.v} checked={sel[g.key] === o.v} onChange={() => setSel((x) => ({ ...x, [g.key]: o.v }))} />
                  {o.t}
                </label>
              ))}
            </div>
          </fieldset>
        ))}
        {sig.note && <p className="sig-note">{sig.note}</p>}
      </div>
    </div>
  );
}

/* Reti: schema di una rete aziendale */
function Topology({ sig }) {
  const N = sig.nodes;
  const box = (x, y, label, cls = '') => (
    <g className={'topo-n ' + cls}><rect x={x - 70} y={y - 20} width="140" height="40" rx="10" /><text x={x} y={y + 5}>{label}</text></g>
  );
  return (
    <div className="sig sig-topo">
      <Head sig={sig} />
      <svg viewBox="0 0 640 360" role="img" aria-label={sig.text}>
        <path d="M320,50 V110 M320,150 V210 M320,230 L120,300 M320,230 L260,300 M320,230 L400,300 M320,230 L530,300 M390,130 L540,130" className="topo-l" />
        {box(320, 40, N.internet, 'ext')}
        {box(320, 130, N.firewall, 'fw')}
        {box(320, 220, N.switch)}
        {box(120, 310, N.pc)}
        {box(260, 310, N.server)}
        {box(400, 310, N.printer)}
        {box(530, 310, N.wifi)}
        {box(540, 130, N.guest, 'guest')}
      </svg>
    </div>
  );
}

/* Cloud: cosa conviene spostare e cosa no */
function WhereTo({ sig }) {
  return (
    <div className="sig sig-where">
      <h2>{sig.title}</h2>
      <div className="where-cols">
        <div className="w-cloud"><h3>{sig.cloud.t}</h3><ul>{sig.cloud.items.map((x) => <li key={x}>{x}</li>)}</ul></div>
        <div className="w-site"><h3>{sig.onsite.t}</h3><ul>{sig.onsite.items.map((x) => <li key={x}>{x}</li>)}</ul></div>
      </div>
      <p className="sig-note">{sig.note}</p>
    </div>
  );
}

/* Backup: i dati e le loro copie */
function Copies({ sig }) {
  return (
    <div className="sig sig-copies">
      <Head sig={sig} />
      <div className="copies">
        <div className="cp-source">{sig.source}</div>
        <div className="cp-list">
          {sig.copies.map((c) => <div key={c.t} className="cp"><b>{c.t}</b><span>{c.d}</span></div>)}
        </div>
        <div className="cp-test">↺ {sig.test}</div>
      </div>
    </div>
  );
}

/* Sicurezza: lista da spuntare (le risposte non lasciano la pagina) */
function Checklist({ sig, cta }) {
  const [on, setOn] = useState(() => sig.items.map(() => false));
  const n = on.filter(Boolean).length;
  const msg = n <= 2 ? sig.results.low : n <= 4 ? sig.results.mid : sig.results.high;
  return (
    <div className="sig sig-check">
      <Head sig={sig} />
      <div className="check-box">
        <ul>
          {sig.items.map((x, i) => (
            <li key={x}>
              <label>
                <input type="checkbox" checked={on[i]} onChange={() => setOn((a) => a.map((v, k) => (k === i ? !v : v)))} />
                <span>{x}</span>
              </label>
            </li>
          ))}
        </ul>
        <div className="check-result" aria-live="polite">
          <b>{n} {sig.countLabel} {sig.items.length}</b>
          <p>{msg}</p>
          <a className="btn btn-primary btn-sm" href="#contact">{cta}</a>
        </div>
      </div>
    </div>
  );
}

const MAP = { devices: Devices, beforeAfter: BeforeAfter, network: Network, dashboard: Dashboard, phones: Phones, brandSystem: BrandSystem, calendar: Calendar, twoRoads: TwoRoads, shotTypes: ShotTypes, model3d: Model3D, configurator: Configurator, topology: Topology, whereTo: WhereTo, copies: Copies, checklist: Checklist };

export default function Signature({ sig, cta }) {
  const C = sig && MAP[sig.kind];
  return C ? <C sig={sig} cta={cta} /> : null;
}

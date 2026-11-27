import { useLang } from '../i18n/LanguageContext.jsx';
import { Link } from '../router/Router.jsx';
import { pathFor, liveServices } from '../router/routes.js';
import { SERVICES } from '../content/services.js';
import { PILLARS, CONTACTS } from '../config/media.js';
import Reveal from '../components/Reveal.jsx';
import Split from '../components/Split.jsx';
import LeadForm from '../components/LeadForm.jsx';
import Signature from './Signatures.jsx';
import Ph from './Ph.jsx';

const SHOW_UNCONFIRMED = import.meta.env.DEV;
const DEFAULT_ORDER = ['intro', 'sig', 'includes', 'tech', 'approach', 'faq'];

/* Pagina di un singolo servizio. Ogni pagina ha la sua immagine, il suo tipo di apertura
   (layout.hero), il suo modo di mostrare l'elenco (layout.includes), una sezione su misura (sig)
   e il suo ordine delle sezioni (layout.order). Testi e impostazioni: src/content/services.js */
export default function ServicePage({ id }) {
  const { t, lang } = useLang();
  const s = SERVICES.find((x) => x.id === id);
  const c = s.content[lang];
  const pillar = PILLARS[s.pillar];
  const L = s.layout || {};
  const hero = L.hero || 'split';
  const home = pathFor('home', lang);
  const related = liveServices(lang).filter((x) => x.id !== id && x.pillar === s.pillar).sort((a, b) => a.item - b.item);
  const tech = (c.tech || [])
    .map((g) => ({ ...g, items: g.items.filter((i) => !i.confirm || SHOW_UNCONFIRMED) }))
    .filter((g) => g.items.length);

  const back = (
    <Link className="back page-back" to={home + '#services'} onClick={() => { try { sessionStorage.setItem('sodano-open-pillar', s.pillar); } catch (e) { /* ignora */ } }}>
      ← {t.backServices}
    </Link>
  );
  const crumbs = (
    <nav className="crumbs" aria-label="Breadcrumb">
      <Link to={home}>{t.home}</Link>
      <span aria-hidden="true">/</span>
      <Link to={home + '#services'}>{pillar.title}</Link>
      <span aria-hidden="true">/</span>
      <span aria-current="page">{c.title}</span>
    </nav>
  );
  const title = <h1 aria-label={c.title}><Split text={c.title} /></h1>;
  const lead = <p className="lead"><Ph text={c.lead} /></p>;
  const cta = <a className="btn btn-primary" href="#contact">{t.sCta}</a>;
  const img = s.image && <img className="svc-img" src={s.image} alt="" width="1344" height="752" fetchpriority="high" decoding="async" />;

  const sections = {
    intro: (
      <Reveal className="svc-intro" key="intro">
        {c.intro.map((p, i) => <p key={i}><Ph text={p} /></p>)}
      </Reveal>
    ),
    sig: c.sig && (
      <Reveal className="svc-sig" key="sig"><Signature sig={c.sig} cta={t.sCta} /></Reveal>
    ),
    includes: (
      <Reveal className={'svc-block inc-' + (L.includes || 'list')} key="includes">
        <h2>{t.sIncludes}</h2>
        <ul className="svc-list">
          {c.includes.map((i) => (
            <li key={i.t}>
              <h3><Ph text={i.t} /></h3>
              <p><Ph text={i.d} /></p>
            </li>
          ))}
        </ul>
      </Reveal>
    ),
    tech: tech.length > 0 && (
      <Reveal className="svc-block" key="tech">
        <h2>{t.sTech}</h2>
        <dl className="svc-tech">
          {tech.map((g) => (
            <div key={g.group}>
              <dt>{g.group}</dt>
              <dd>
                {g.items.map((i, k) => (
                  <span key={i.name}>
                    {i.name}{i.confirm && <em className="to-confirm"> ({t.sToConfirm})</em>}{k < g.items.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    ),
    approach: (
      <Reveal className="svc-block" key="approach">
        <h2>{t.sApproach}</h2>
        {c.approach.map((p, i) => <p className="svc-text" key={i}><Ph text={p} /></p>)}
      </Reveal>
    ),
    faq: (
      <Reveal className="svc-block" key="faq">
        <h2>{t.sFaq}</h2>
        <div className="faq">
          {c.faq.map((f) => (
            <details key={f.q}>
              <summary><Ph text={f.q} /></summary>
              <p><Ph text={f.a} /></p>
            </details>
          ))}
        </div>
      </Reveal>
    )
  };
  const order = L.order || DEFAULT_ORDER;
  // le sezioni non elencate nell'ordine (es. tech) finiscono prima di "come lavoriamo"
  const extra = DEFAULT_ORDER.filter((k) => !order.includes(k) && sections[k]);
  const finalOrder = [...order];
  if (extra.length) finalOrder.splice(Math.max(0, finalOrder.indexOf('approach')), 0, ...extra);

  return (
    <main className={`svc area-${s.pillar} hero-${hero}`} style={{ '--accent': pillar.accent }}>
      {hero === 'banner' ? (
        <section className="svc-hero">
          <div className="wrap">
            {back}{crumbs}
            <Reveal className="banner-text">
              <div>{title}</div>
              <div>{lead}{cta}</div>
            </Reveal>
          </div>
          <div className="wrap banner-img">{img}</div>
        </section>
      ) : (
        <section className="svc-hero">
          {img}
          <div className="wrap svc-hero-inner">
            {back}{crumbs}
            <Reveal className="hero-copy">{title}{lead}{cta}</Reveal>
          </div>
        </section>
      )}

      <section className="section svc-body">
        <div className="wrap svc-cols">
          {finalOrder.map((k) => sections[k] || null)}
        </div>
      </section>

      {related.length > 0 && (
        <section className="svc-related">
          <div className="wrap">
            <h2>{t.sRelated}</h2>
            <ul>
              {related.map((r) => (
                <li key={r.id}>
                  <Link to={pathFor('service', lang, r.id)}>
                    <span className="rel-area">{PILLARS[r.pillar].title}</span>
                    <span className="rel-title">{r.content[lang].title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="section contact svc-contact" id="contact">
        <div className="wrap grid-2">
          <Reveal>
            <h2 aria-label={t.sFormTitle}><Split text={t.sFormTitle} /></h2>
            <p className="muted">{t.sFormSub}</p>
            <dl className="info">
              <div><dt>Email</dt><dd><a href={'mailto:' + CONTACTS.email}>{CONTACTS.email}</a></dd></div>
              {CONTACTS.offices.map((o) => (
                <div key={o.key}><dt>{o.city}</dt><dd><a href={o.phoneHref}>{o.phone}</a></dd></div>
              ))}
            </dl>
          </Reveal>
          <LeadForm service={s.pillar} page={c.title} />
        </div>
      </section>
    </main>
  );
}

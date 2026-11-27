import { useLang } from '../i18n/LanguageContext.jsx';
import { Link } from '../router/Router.jsx';
import { pathFor } from '../router/routes.js';
import { SOLUTIONS } from '../content/solutions.js';
import { CONTACTS } from '../config/media.js';
import Reveal from '../components/Reveal.jsx';
import Split from '../components/Split.jsx';
import LeadForm from '../components/LeadForm.jsx';
import Ph from './Ph.jsx';

/* Pagina di un prodotto pronto (es. r4-Parking): contenuti da src/content/solutions.js.
   Le funzioni principali sono un percorso: ogni capitolo affianca testo e schermata, alternando i lati. */
export default function SolutionPage({ id }) {
  const { t, lang } = useLang();
  const s = SOLUTIONS.find((x) => x.id === id);
  const c = s.content[lang];

  return (
    <main className="svc sol">
      <section className="sol-hero">
        <div className="wrap">
          <Link className="back page-back" to={pathFor('solutions', lang)}>← {t.backSolutions}</Link>
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to={pathFor('home', lang)}>{t.home}</Link>
            <span aria-hidden="true">/</span>
            <Link to={pathFor('solutions', lang)}>{t.navSolutions}</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{c.name}</span>
          </nav>
          <Reveal>
            <p className="sol-kicker"><Ph text={c.tagline} /></p>
            <h1 aria-label={c.name}><Split text={c.name} /></h1>
            <p className="lead"><Ph text={c.lead} /></p>
            <a className="btn btn-primary" href="#contact">{t.sCta}</a>
          </Reveal>
          {c.hero && (
            <Reveal className="sol-hero-shot">
              <Img shot={c.hero} eager />
            </Reveal>
          )}
        </div>
      </section>

      <section className="section svc-body">
        <div className="wrap">
          <Reveal className="svc-block">
            <h2>{c.audience.title}</h2>
            {c.audience.text.map((p, i) => <p className="svc-text" key={i}><Ph text={p} /></p>)}
          </Reveal>
        </div>
      </section>

      {c.tour?.length > 0 && (
        <section className="sol-tour" aria-label={t.solFeatures}>
          <div className="wrap">
            <h2 className="sol-tour-title">{t.solFeatures}</h2>
            {c.tour.map((ch, i) => (
              <Reveal key={ch.title} className={'tour-row' + (i % 2 ? ' flip' : '')}>
                <div className="tour-text">
                  <h3><Ph text={ch.title} /></h3>
                  <p><Ph text={ch.text} /></p>
                </div>
                <div className={'tour-media' + (ch.extra ? ' has-extra' + (ch.extra.phone ? ' extra-phone' : '') : '')}>
                  <Img shot={ch.shot} />
                  {ch.extra && <Img shot={ch.extra} className="tour-extra" />}
                </div>
              </Reveal>
            ))}
            {c.screenshotsNote && <p className="sol-note">{c.screenshotsNote}</p>}
          </div>
        </section>
      )}

      <section className="section svc-body">
        <div className="wrap svc-cols">
          {c.more?.length > 0 && (
            <Reveal className="svc-block">
              <h2>{c.moreTitle}</h2>
              <ul className="svc-list">
                {c.more.map((f) => (
                  <li key={f.t}>
                    <h3><Ph text={f.t} /></h3>
                    <p><Ph text={f.d} /></p>
                  </li>
                ))}
              </ul>
            </Reveal>
          )}

          <Reveal className="svc-block">
            <h2>{c.integrations.title}</h2>
            {c.integrations.text.map((p, i) => <p className="svc-text" key={i}><Ph text={p} /></p>)}
            {c.integrations.groups?.length > 0 && (
              <dl className="svc-tech sol-int">
                {c.integrations.groups.map((g) => (
                  <div key={g.group}><dt>{g.group}</dt><dd>{g.items}</dd></div>
                ))}
              </dl>
            )}
          </Reveal>

          {c.devices && (
            <Reveal className="svc-block sol-devices">
              <h2>{c.devices.title}</h2>
              <div className="devices-body">
                <p className="svc-text">{c.devices.text}</p>
                <div className="devices-phones">
                  {c.devices.shots.map((sh) => <Img key={sh.src} shot={sh} className="phone" />)}
                </div>
              </div>
            </Reveal>
          )}

          {c.faq?.length > 0 && (
            <Reveal className="svc-block">
              <h2>{t.sFaq}</h2>
              <div className="faq">
                {c.faq.map((f, i) => (
                  <details key={i}>
                    <summary><Ph text={f.q} /></summary>
                    <p><Ph text={f.a} /></p>
                  </details>
                ))}
              </div>
            </Reveal>
          )}
        </div>
      </section>

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
          <LeadForm service={s.pillar} page={c.name} />
        </div>
      </section>
    </main>
  );
}

/* Schermata con dimensioni dichiarate (niente salti durante il caricamento) o segnaposto */
function Img({ shot, eager, className = '' }) {
  if (!shot.src) return <div className={'shot-slot ' + className}><Ph text={shot.alt} /></div>;
  return <img className={'shot ' + className} src={shot.src} alt={shot.alt} width={shot.w} height={shot.h} loading={eager ? 'eager' : 'lazy'} decoding="async" />;
}

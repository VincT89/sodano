import { useLang } from '../i18n/LanguageContext.jsx';
import { Link } from '../router/Router.jsx';
import { pathFor, liveSolutions } from '../router/routes.js';
import Reveal from '../components/Reveal.jsx';
import Split from '../components/Split.jsx';
import Ph from './Ph.jsx';

/* Elenco dei prodotti pronti */
export default function SolutionsHub() {
  const { t, lang } = useLang();
  const items = liveSolutions(lang);
  return (
    <main className="sol-hub">
      <section className="section sol-hub-head">
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to={pathFor('home', lang)}>{t.home}</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{t.navSolutions}</span>
          </nav>
          <Reveal>
            <h1 aria-label={t.solHubTitle}><Split text={t.solHubTitle} /></h1>
            <p className="lead">{t.solHubLead}</p>
          </Reveal>
        </div>
      </section>
      <section className="sol-hub-list">
        <div className="wrap">
          <ul>
            {items.map((s) => {
              const c = s.content[lang];
              return (
                <li key={s.id}>
                  <Link to={pathFor('solution', lang, s.id)}>
                    <span className="sol-name">{c.name}</span>
                    <span className="sol-tag"><Ph text={c.tagline} /></span>
                    <span className="sol-lead"><Ph text={c.lead} /></span>
                    <span className="sol-more">{t.discover} →</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </main>
  );
}

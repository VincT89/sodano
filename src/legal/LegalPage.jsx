import { useLang } from '../i18n/LanguageContext.jsx';
import { LEGAL } from './legalTexts.js';
import { Link } from '../router/Router.jsx';
import { pathFor } from '../router/routes.js';

export default function LegalPage({ type }) {
  const { lang, t } = useLang();
  const doc = LEGAL[lang][type === 'cookie' ? 'cookie' : 'privacy'];
  const note = LEGAL[lang].note;


  return (
    <main className="legal">
      <div className="wrap legal-wrap">
        <Link className="back" to={pathFor('home', lang)}>← {t.backHome}</Link>
        <h1>{doc.title}</h1>
        <p className="legal-updated">{doc.updated}</p>
        {note && <p className="legal-note">{note}</p>}
        {doc.sections.map(([h, p]) => (
          <section key={h}>
            <h2>{h}</h2>
            <p>{p}</p>
          </section>
        ))}
        <p className="legal-switch">
          {type === 'cookie'
            ? <Link to={pathFor('privacy', lang)}>{t.legalPrivacy} →</Link>
            : <Link to={pathFor('cookie', lang)}>{t.legalCookie} →</Link>}
        </p>
      </div>
    </main>
  );
}

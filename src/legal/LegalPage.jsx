import { useEffect } from 'react';
import { useLang } from '../i18n/LanguageContext.jsx';
import { LEGAL } from './legalTexts.js';

export default function LegalPage({ type }) {
  const { lang, t } = useLang();
  const doc = LEGAL[lang][type === 'cookie' ? 'cookie' : 'privacy'];
  const note = LEGAL[lang].note;

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${doc.title} – Sodano Consulting`;
    return () => { document.title = 'Sodano Consulting – Strategia, Innovazione, Performance'; };
  }, [doc.title]);

  return (
    <main className="legal">
      <div className="wrap legal-wrap">
        <a className="back" href="#top">← {t.backHome}</a>
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
            ? <a href="#/privacy-policy">{t.legalPrivacy} →</a>
            : <a href="#/cookie-policy">{t.legalCookie} →</a>}
        </p>
      </div>
    </main>
  );
}

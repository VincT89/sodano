import { useLang } from '../i18n/LanguageContext.jsx';
import { Link } from '../router/Router.jsx';
import { pathFor } from '../router/routes.js';

export default function NotFound() {
  const { t, lang } = useLang();
  return (
    <main className="legal notfound">
      <div className="wrap legal-wrap">
        <h1>{t.nfTitle}</h1>
        <p className="lead">{t.nfText}</p>
        <Link className="btn btn-primary" to={pathFor('home', lang)}>{t.backHome}</Link>
      </div>
    </main>
  );
}

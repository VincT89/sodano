import { useLang } from '../i18n/LanguageContext.jsx';
import { useConsent } from '../consent/ConsentContext.jsx';
import { MEDIA, COMPANY, CONTACTS, PILLARS } from '../config/media.js';
import { Link } from '../router/Router.jsx';
import { pathFor, liveServices, liveSolutions } from '../router/routes.js';

export default function Footer() {
  const { t, lang } = useLang();
  const services = liveServices(lang);
  const solutions = liveSolutions(lang);
  const { openPreferences } = useConsent();
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <img src={MEDIA.logo} alt="" width="34" height="36" />
          <div>
            <p className="footer-name">{COMPANY.name}</p>
            <p>{COMPANY.address}</p>
            <p>{t.vat} {COMPANY.vat} · {t.capital} {COMPANY.capital}{COMPANY.rea ? ` · REA ${COMPANY.rea}` : ''}</p>
          </div>
        </div>
        <div className="footer-col">
          <p className="footer-head">{t.navContact}</p>
          <a href={'mailto:' + CONTACTS.email}>{CONTACTS.email}</a>
          <a href={'mailto:' + CONTACTS.pec}>PEC {CONTACTS.pec}</a>
          {CONTACTS.offices.map((o) => <a key={o.key} href={o.phoneHref}>{o.city} · {o.phone}</a>)}
        </div>
        {services.length > 0 && (
          <div className="footer-col footer-services">
            <p className="footer-head">{t.navServices}</p>
            {/* servizi raggruppati per area, in righe compatte */}
            {['dev', 'mkt', 'sys'].map((area) => {
              const list = services.filter((x) => x.pillar === area);
              return list.length > 0 && (
                <div className="footer-area" key={area}>
                  <span className="footer-area-name">{PILLARS[area].title}</span>
                  <span className="footer-area-links">
                    {list.map((x) => <Link key={x.id} to={pathFor('service', lang, x.id)}>{x.content[lang].title}</Link>)}
                  </span>
                </div>
              );
            })}
            {solutions.length > 0 && (
              <div className="footer-area">
                <span className="footer-area-name">{t.navSolutions}</span>
                <span className="footer-area-links">
                  {solutions.map((x) => <Link key={x.id} to={pathFor('solution', lang, x.id)}>{x.content[lang].name}</Link>)}
                </span>
              </div>
            )}
          </div>
        )}
        <div className="footer-col">
          <p className="footer-head">{t.legal}</p>
          <Link to={pathFor('privacy', lang)}>{t.legalPrivacy}</Link>
          <Link to={pathFor('cookie', lang)}>{t.legalCookie}</Link>
          <button type="button" className="footer-link" onClick={openPreferences}>{t.ckManage}</button>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span>© {new Date().getFullYear()} {COMPANY.name} · {t.rights}</span>
        <span>Developer · Marketing · System</span>
      </div>
    </footer>
  );
}

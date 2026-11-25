import { useLang } from '../i18n/LanguageContext.jsx';
import { useConsent } from '../consent/ConsentContext.jsx';
import { MEDIA, COMPANY, CONTACTS } from '../config/media.js';

export default function Footer() {
  const { t } = useLang();
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
        <div className="footer-col">
          <p className="footer-head">{t.legal}</p>
          <a href="#/privacy-policy">{t.legalPrivacy}</a>
          <a href="#/cookie-policy">{t.legalCookie}</a>
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

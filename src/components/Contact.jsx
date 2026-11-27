import { useLang } from '../i18n/LanguageContext.jsx';
import { CONTACTS } from '../config/media.js';
import Reveal from './Reveal.jsx';
import Split from './Split.jsx';
import LeadForm from './LeadForm.jsx';

export default function Contact() {
  const { t } = useLang();
  return (
    <section className="section contact" id="contact">
      <div className="wrap grid-2">
        <Reveal>
          <p className="label">{t.navContact}</p>
          <h2 aria-label={t.contactTitle}><Split text={t.contactTitle} /></h2>
          <p className="muted">{t.contactSub}</p>
          <div className="offices">
            {CONTACTS.offices.map((o) => (
              <div className="office" key={o.key}>
                <p className="office-type">{t[o.key]}</p>
                <p className="office-city">{o.city}</p>
                <p className="office-line">{o.address}</p>
                <p className="office-line"><a href={o.phoneHref}>{o.phone}</a></p>
              </div>
            ))}
          </div>
          <dl className="info">
            <div><dt>Email</dt><dd><a href={'mailto:' + CONTACTS.email}>{CONTACTS.email}</a></dd></div>
            <div><dt>PEC</dt><dd><a href={'mailto:' + CONTACTS.pec}>{CONTACTS.pec}</a></dd></div>
          </dl>
        </Reveal>

        <LeadForm />
      </div>
    </section>
  );
}

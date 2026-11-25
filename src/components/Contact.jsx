import { useEffect, useRef, useState } from 'react';
import { useLang } from '../i18n/LanguageContext.jsx';
import { CONTACTS, FORM } from '../config/media.js';
import Reveal from './Reveal.jsx';
import Split from './Split.jsx';

const EMPTY = { name: '', company: '', email: '', phone: '', service: '', message: '', consent: false, website: '' };
const SERVICES = ['dev', 'mkt', 'sys', 'other'];

export default function Contact() {
  const { t, lang } = useLang();
  const [data, setData] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | ok | error
  const startedAt = useRef(Date.now());
  const formRef = useRef(null);

  // il pannello dei servizi può precompilare l'area di interesse
  useEffect(() => {
    const on = (e) => setData((d) => ({ ...d, service: e.detail }));
    window.addEventListener('sodano:prefill', on);
    return () => window.removeEventListener('sodano:prefill', on);
  }, []);

  const label = (k) => ({ dev: 'Developer', mkt: 'Marketing', sys: 'System', other: t.fServiceOther }[k]);
  const set = (k) => (e) => {
    const v = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setData((d) => ({ ...d, [k]: v }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  function validate() {
    const er = {};
    if (!data.name.trim()) er.name = t.fRequired;
    if (!data.email.trim()) er.email = t.fRequired;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email.trim())) er.email = t.fInvalidEmail;
    if (!data.message.trim()) er.message = t.fRequired;
    if (!data.consent) er.consent = t.fConsentRequired;
    return er;
  }

  async function submit(e) {
    e.preventDefault();
    const er = validate();
    setErrors(er);
    if (Object.keys(er).length) {
      const first = formRef.current.querySelector(`[name="${Object.keys(er)[0]}"]`);
      first?.focus();
      return;
    }
    setStatus('sending');
    try {
      const r = await fetch(FORM.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, service: data.service ? label(data.service) : '', lang, elapsed: Date.now() - startedAt.current })
      });
      const j = await r.json().catch(() => ({}));
      if (!r.ok || !j.ok) throw new Error(j.error || r.status);
      setStatus('ok');
      setData(EMPTY);
    } catch (err) {
      setStatus('error');
    }
  }

  const field = (k, lbl, props = {}) => (
    <label className={errors[k] ? 'has-error' : ''}>
      <span>{lbl}</span>
      {props.as === 'textarea'
        ? <textarea name={k} rows="4" value={data[k]} onChange={set(k)} aria-invalid={!!errors[k]} aria-describedby={errors[k] ? k + '-err' : undefined} />
        : <input name={k} value={data[k]} onChange={set(k)} aria-invalid={!!errors[k]} aria-describedby={errors[k] ? k + '-err' : undefined} {...props} />}
      {errors[k] && <em className="field-error" id={k + '-err'}>{errors[k]}</em>}
    </label>
  );

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

        <Reveal className="form-wrap">
          {status === 'ok' ? (
            <div className="form form-done" role="status">
              <svg width="56" height="56" viewBox="0 0 56 56" aria-hidden="true"><circle cx="28" cy="28" r="26" fill="none" stroke="#E30000" strokeWidth="2.5" /><path d="M17 29l7 7 15-16" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="draw" /></svg>
              <p className="lead">{t.fSuccess}</p>
              <button type="button" className="btn btn-ghost" onClick={() => { setStatus('idle'); startedAt.current = Date.now(); }}>{t.fNew}</button>
            </div>
          ) : (
            <form ref={formRef} className="form" onSubmit={submit} noValidate>
              <div className="row">
                {field('name', t.fName + ' *', { type: 'text', autoComplete: 'name' })}
                {field('company', t.fCompany, { type: 'text', autoComplete: 'organization' })}
              </div>
              <div className="row">
                {field('email', 'Email *', { type: 'email', autoComplete: 'email', inputMode: 'email' })}
                {field('phone', t.fPhone, { type: 'tel', autoComplete: 'tel', inputMode: 'tel' })}
              </div>
              <fieldset className="chips">
                <legend>{t.fService}</legend>
                {SERVICES.map((k) => (
                  <label key={k} className={'chip' + (data.service === k ? ' on' : '')}>
                    <input type="radio" name="service" value={k} checked={data.service === k} onChange={set('service')} />
                    {label(k)}
                  </label>
                ))}
              </fieldset>
              {field('message', t.fMsg + ' *', { as: 'textarea' })}

              {/* trappola anti-spam: invisibile alle persone, i bot la compilano */}
              <div className="hp" aria-hidden="true">
                <label>Website<input name="website" tabIndex={-1} autoComplete="off" value={data.website} onChange={set('website')} /></label>
              </div>

              <label className={'consent' + (errors.consent ? ' has-error' : '')}>
                <input type="checkbox" name="consent" checked={data.consent} onChange={set('consent')} aria-invalid={!!errors.consent} />
                <span>{t.fConsentPre} <a href="#/privacy-policy" target="_blank" rel="noopener">{t.legalPrivacy}</a> {t.fConsentPost} *</span>
              </label>
              {errors.consent && <em className="field-error">{errors.consent}</em>}

              <button className="btn btn-primary magnetic" type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? t.fSending : t.fSend}
              </button>
              {status === 'error' && <p className="form-error" role="alert">{t.fError}</p>}
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

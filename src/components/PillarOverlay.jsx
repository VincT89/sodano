import { useEffect, useRef, useState } from 'react';
import { useLang } from '../i18n/LanguageContext.jsx';
import { MEDIA, PILLARS } from '../config/media.js';
import { Link } from '../router/Router.jsx';
import { servicePagesFor } from '../router/routes.js';

export default function PillarOverlay({ pillar, onClose }) {
  const { t, lang } = useLang();
  const [shown, setShown] = useState(null);   // pillar mostrato (resta durante la dissolvenza in uscita)
  const [visible, setVisible] = useState(false);
  const backRef = useRef(null);
  const lastFocus = useRef(null);

  useEffect(() => {
    if (pillar) {
      lastFocus.current = document.activeElement;
      setShown(pillar);
      document.body.style.overflow = 'hidden';
      requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
    } else if (shown) {
      setVisible(false);
      const id = setTimeout(() => {
        setShown(null);
        document.body.style.overflow = '';
        if (lastFocus.current) lastFocus.current.focus({ preventScroll: true });
      }, 650);
      return () => clearTimeout(id);
    }
  }, [pillar]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!shown) return;
    backRef.current?.focus({ preventScroll: true });
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [shown, onClose]);

  // se si va a un'altra pagina mentre il pannello è aperto, la pagina deve tornare scorrevole
  useEffect(() => () => { document.body.style.overflow = ''; }, []);

  if (!shown) return null;
  const p = PILLARS[shown];
  const content = t[shown];
  const pages = servicePagesFor(shown, lang);

  function goContact(e) {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('sodano:prefill', { detail: shown }));
    onClose();
    setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 700);
  }

  return (
    <div className={'pillar' + (visible ? ' open' : '')} role="dialog" aria-modal="true" aria-labelledby="pillarTitle"
      style={{ '--accent': p.accent }}>
      <video className="pillar-video" src={MEDIA.pillars[shown]} muted loop playsInline autoPlay aria-hidden="true" />
      <div className="pillar-shade" />
      <div className="pillar-panel">
        <button ref={backRef} className="back" type="button" onClick={onClose}>← {t.back}</button>
        <p className="label">{t.navServices}</p>
        <h2 id="pillarTitle">{p.title}</h2>
        <p className="lead">{content.desc}</p>
        <ul className="pillar-list">
          {content.items.map((item, i) => {
            const page = pages.find((x) => x.item === i);
            return (
              <li key={item} style={{ transitionDelay: 0.35 + i * 0.08 + 's' }}>
                {page ? <Link to={page.path}>{item}</Link> : item}
              </li>
            );
          })}
        </ul>
        <a className="btn btn-primary" href="#contact" onClick={goContact}>{t.cta1}</a>
      </div>
    </div>
  );
}

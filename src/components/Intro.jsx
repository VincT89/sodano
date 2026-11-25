import { useLang } from '../i18n/LanguageContext.jsx';
import Reveal from './Reveal.jsx';
import Split from './Split.jsx';

export default function Intro() {
  const { t } = useLang();
  return (
    <section className="intro" aria-label="Sodano Consulting">
      <Reveal className="wrap intro-inner">
        <p className="intro-text" aria-label={t.heroSub}><Split text={t.heroSub} step={0.025} /></p>
        <div className="cta-row">
          <a className="btn btn-primary" href="#contact">{t.cta1}</a>
          <a className="btn btn-ghost" href="#services">{t.cta2}</a>
        </div>
      </Reveal>
    </section>
  );
}

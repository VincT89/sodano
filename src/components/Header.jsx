import { useEffect, useState } from 'react';
import { useLang } from '../i18n/LanguageContext.jsx';
import LanguageSwitcher from './LanguageSwitcher.jsx';
import { MEDIA } from '../config/media.js';

export default function Header() {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={'site-header' + (scrolled ? ' scrolled' : '')} id="top">
      <a className="brand" href="#top">
        <img src={MEDIA.logo} alt="" width="36" height="38" />
        <span>Sodano<em> Consulting</em></span>
      </a>
      <nav className="nav" aria-label="Menu">
        <a href="#about">{t.navAbout}</a>
        <a href="#services">{t.navServices}</a>
        <a href="#map">{t.navMap}</a>
        <a href="#contact">{t.navContact}</a>
      </nav>
      <div className="header-right">
        <a className="btn btn-primary btn-sm header-cta" href="#contact">{t.cta1}</a>
        <LanguageSwitcher />
      </div>
    </header>
  );
}

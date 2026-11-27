import { useEffect, useRef, useState } from 'react';
import { useLang } from '../i18n/LanguageContext.jsx';
import LanguageSwitcher from './LanguageSwitcher.jsx';
import { MEDIA } from '../config/media.js';
import { Link, useRouter } from '../router/Router.jsx';
import { pathFor } from '../router/routes.js';

export default function Header() {
  const { t, lang } = useLang();
  const { route } = useRouter();
  const home = pathFor('home', lang);
  const solutions = pathFor('solutions', lang); // compare solo se c'è almeno una soluzione pubblicata
  // il modulo contatti: nella pagina servizio c'è il suo, altrove si va a quello della home
  const contact = (route.page === 'service' ? route.path : home) + '#contact';
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const barRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (barRef.current) barRef.current.style.transform = `scaleX(${max > 0 ? Math.min(1, window.scrollY / max) : 0})`;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // menu su telefono: si chiude con Esc o scegliendo una voce
  useEffect(() => {
    if (!menu) return;
    const onKey = (e) => { if (e.key === 'Escape') setMenu(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menu]);

  return (
    <header className={'site-header' + (scrolled ? ' scrolled' : '') + (menu ? ' menu-open' : '')} id="top">
      <Link className="brand" to={home} aria-label="Sodano Consulting">
        <img src={MEDIA.logo} alt="" width="36" height="38" />
        <span>Sodano<em> Consulting</em></span>
      </Link>
      <nav className="nav" id="site-nav" aria-label="Menu" onClick={(e) => e.target.closest('a') && setMenu(false)}>
        <Link to={home + '#about'}>{t.navAbout}</Link>
        <Link to={home + '#services'}>{t.navServices}</Link>
        {solutions && <Link to={solutions} aria-current={route.page === 'solutions' || route.page === 'solution' ? 'page' : undefined}>{t.navSolutions}</Link>}
        <Link to={home + '#map'}>{t.navMap}</Link>
        <Link to={home + '#contact'}>{t.navContact}</Link>
        <Link className="btn btn-primary nav-cta" to={contact}>{t.cta1}</Link>
      </nav>
      <div className="header-right">
        <Link className="btn btn-primary btn-sm header-cta" to={contact}>{t.cta1}</Link>
        <LanguageSwitcher />
        <button type="button" className="menu-btn" aria-expanded={menu} aria-controls="site-nav" onClick={() => setMenu((m) => !m)}>
          {menu ? t.menuClose : t.menuOpen}
        </button>
      </div>
      <span className="page-progress" ref={barRef} aria-hidden="true" />
    </header>
  );
}

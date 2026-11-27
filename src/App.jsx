import { useEffect } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Intro from './components/Intro.jsx';
import Marquee from './components/Marquee.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Countries from './components/Countries.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import LegalPage from './legal/LegalPage.jsx';
import ServicePage from './pages/ServicePage.jsx';
import NotFound from './pages/NotFound.jsx';
import SolutionsHub from './pages/SolutionsHub.jsx';
import SolutionPage from './pages/SolutionPage.jsx';
import CookieBanner from './consent/CookieBanner.jsx';
import Preloader from './components/Preloader.jsx';
import Cursor from './components/Cursor.jsx';
import { useRouter } from './router/Router.jsx';
import { pathFor } from './router/routes.js';
import { headFor, applyHead } from './router/head.js';

const OLD_HASH = { '#/privacy-policy': 'privacy', '#/cookie-policy': 'cookie' };

export default function App() {
  const { route, navigate } = useRouter();

  // titolo, descrizione e lingue alternative della pagina corrente
  useEffect(() => { applyHead(headFor(route)); }, [route]);

  // vecchi indirizzi con il cancelletto (#/privacy-policy): portano alle pagine nuove
  useEffect(() => {
    const page = OLD_HASH[window.location.hash];
    if (page) navigate(pathFor(page, route.lang), { replace: true });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  let page;
  if (route.page === 'home') {
    page = (
      <main>
        <Hero />
        <Intro />
        <Marquee />
        <About />
        <Services />
        <Countries />
        <Contact />
      </main>
    );
  } else if (route.page === 'service') page = <ServicePage key={route.path} id={route.id} />;
  else if (route.page === 'solutions') page = <SolutionsHub />;
  else if (route.page === 'solution') page = <SolutionPage key={route.path} id={route.id} />;
  else if (route.page === 'privacy' || route.page === 'cookie') page = <LegalPage type={route.page} />;
  else page = <NotFound />;

  return (
    <>
      {route.page === 'home' && <Preloader />}
      <Cursor />
      <Header />
      {page}
      <Footer />
      <CookieBanner />
    </>
  );
}

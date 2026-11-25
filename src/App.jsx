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
import CookieBanner from './consent/CookieBanner.jsx';
import Preloader from './components/Preloader.jsx';
import Cursor from './components/Cursor.jsx';
import { useHashRoute } from './hooks/useHashRoute.js';

export default function App() {
  const route = useHashRoute();
  return (
    <>
      {route === 'home' && <Preloader />}
      <Cursor />
      <Header />
      {route === 'home' ? (
        <main>
          <Hero />
          <Intro />
          <Marquee />
          <About />
          <Services />
          <Countries />
          <Contact />
        </main>
      ) : (
        <LegalPage type={route} />
      )}
      <Footer />
      <CookieBanner />
    </>
  );
}

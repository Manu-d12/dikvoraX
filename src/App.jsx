import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import { services } from './data/services';

export default function App() {
  const [path, setPath] = useState(window.location.pathname.replace(/\/$/, '') || '/');

  useEffect(() => {
    const onPopState = () => setPath(window.location.pathname.replace(/\/$/, '') || '/');
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const navigate = (nextPath) => {
    if (window.location.pathname !== nextPath) window.history.pushState({}, '', nextPath);
    setPath(nextPath.replace(/\/$/, '') || '/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const service = path.startsWith('/services/')
    ? services.find((item) => `/services/${item.slug}` === path)
    : null;

  let page;
  if (path === '/') page = <HomePage navigate={navigate} />;
  else if (path === '/about') page = <AboutPage navigate={navigate} />;
  else if (path === '/services') page = <ServicesPage navigate={navigate} />;
  else if (service) page = <ServiceDetailPage service={service} navigate={navigate} />;
  else if (path === '/contact') page = <ContactPage />;
  else page = <NotFoundPage navigate={navigate} />;

  return (
    <>
      <Navbar path={path} navigate={navigate} />
      <main>{page}</main>
      <Footer navigate={navigate} />
    </>
  );
}


import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkGrid from './components/WorkGrid';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background from './components/Background';
import DomainView from './components/DomainView';
import AboutView from './components/AboutView';
import { Domain } from './types';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState<string>('home');
  const [selectedDomain, setSelectedDomain] = useState<Domain | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      
      if (hash === 'about') {
        setCurrentPath('about');
        setSelectedDomain(null);
        window.scrollTo(0, 0);
      } else if (hash === 'contact') {
        setCurrentPath('contact');
        setSelectedDomain(null);
        window.scrollTo(0, 0);
      } else if (hash.startsWith('work/')) {
        const domain = decodeURIComponent(hash.split('/')[1]) as Domain;
        setSelectedDomain(domain);
        setCurrentPath('domain');
        window.scrollTo(0, 0);
      } else {
        setCurrentPath('home');
        setSelectedDomain(null);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToDomain = (domain: Domain) => {
    window.location.hash = `work/${domain}`;
  };

  const navigateToAbout = () => {
    window.location.hash = 'about';
  };

  const navigateToContact = () => {
    window.location.hash = 'contact';
  };

  const navigateHome = () => {
    window.location.hash = '';
  };

  return (
    <div className="antialiased relative bg-white min-h-screen" style={{ isolation: 'isolate' }}>
      <Background />
      <Navbar 
        onHomeClick={navigateHome} 
        onAboutClick={navigateToAbout} 
        onContactClick={navigateToContact}
        currentPath={currentPath}
      />
      
      <main className="relative z-10">
        {currentPath === 'home' && (
          <div className="animate-page-fade">
            <Hero />
            <WorkGrid onDomainSelect={navigateToDomain} />
            <About onReadMore={navigateToAbout} />
            <Contact isPage={false} />
          </div>
        )}

        {currentPath === 'domain' && selectedDomain && (
          <div className="animate-page-fade">
            <DomainView 
              domain={selectedDomain} 
              onBack={navigateHome} 
              onNavigate={navigateToDomain}
            />
          </div>
        )}

        {currentPath === 'about' && (
          <div className="animate-page-fade">
            <AboutView onBack={navigateHome} />
          </div>
        )}

        {currentPath === 'contact' && (
          <div className="animate-page-fade pt-20">
            <Contact isPage={true} onBack={navigateHome} />
          </div>
        )}
      </main>
      
      <Footer />
      
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pageFade {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 1.2s cubic-bezier(0.23, 1, 0.32, 1) forwards;
          opacity: 0;
        }
        .animate-page-fade {
          animation: pageFade 0.8s cubic-bezier(0.19, 1, 0.22, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default App;

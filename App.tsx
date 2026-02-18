
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
import ProjectDetailView from './components/ProjectDetailView';
import GalleryView from './components/GalleryView';
import { Domain, Project } from './types';
import { PROJECTS } from './data';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState<string>('home');
  const [selectedDomain, setSelectedDomain] = useState<Domain | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      
      // Clean up hash to remove potential leading slashes for matching
      const cleanHash = hash.startsWith('/') ? hash.slice(1) : hash;
      
      if (!cleanHash || cleanHash === 'home') {
        setCurrentPath('home');
        setSelectedDomain(null);
        setSelectedProject(null);
        window.scrollTo(0, 0);
      } else if (cleanHash === 'about') {
        setCurrentPath('about');
        setSelectedDomain(null);
        setSelectedProject(null);
        window.scrollTo(0, 0);
      } else if (cleanHash === 'contact') {
        setCurrentPath('contact');
        setSelectedDomain(null);
        setSelectedProject(null);
        window.scrollTo(0, 0);
      } else if (cleanHash === 'gallery') {
        setCurrentPath('gallery');
        setSelectedDomain(null);
        setSelectedProject(null);
        window.scrollTo(0, 0);
      } else if (cleanHash.startsWith('work/')) {
        const domain = decodeURIComponent(cleanHash.split('/')[1]) as Domain;
        setSelectedDomain(domain);
        setCurrentPath('domain');
        setSelectedProject(null);
        window.scrollTo(0, 0);
      } else if (cleanHash.startsWith('project/')) {
        const projectId = cleanHash.split('/')[1];
        const project = PROJECTS.find(p => p.id === projectId);
        if (project) {
          setSelectedProject(project);
          setCurrentPath('project');
          window.scrollTo(0, 0);
        }
      } else {
        setCurrentPath('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToDomain = (domain: Domain) => {
    window.location.hash = `work/${encodeURIComponent(domain)}`;
  };

  const navigateToProject = (projectId: string) => {
    window.location.hash = `project/${projectId}`;
  };

  const navigateToGallery = () => {
    window.location.hash = 'gallery';
  };

  const navigateToAbout = () => {
    window.location.hash = 'about';
  };

  const navigateToContact = () => {
    window.location.hash = 'contact';
  };

  const navigateHome = () => {
    window.location.hash = '/';
  };

  return (
    <div className="antialiased relative min-h-screen" style={{ isolation: 'isolate' }}>
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
            <Hero onExploreClick={navigateToGallery} />
            <WorkGrid 
              onDomainSelect={navigateToDomain} 
              onProjectSelect={navigateToProject} 
              onMiscellaneousClick={navigateToGallery}
            />
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
              onProjectSelect={navigateToProject}
            />
          </div>
        )}

        {currentPath === 'project' && selectedProject && (
          <div className="animate-page-fade">
            <ProjectDetailView 
              project={selectedProject} 
              onBack={() => window.history.back()} 
            />
          </div>
        )}

        {currentPath === 'gallery' && (
          <div className="animate-page-fade">
            <GalleryView onBack={navigateHome} />
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

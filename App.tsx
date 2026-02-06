
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkGrid from './components/WorkGrid';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background from './components/Background';

const App: React.FC = () => {
  return (
    <div className="antialiased relative bg-white min-h-screen" style={{ isolation: 'isolate' }}>
      <Background />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <WorkGrid />
        <About />
        <Contact />
      </main>
      <Footer />
      
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in-up {
          animation: fadeInUp 1.2s cubic-bezier(0.23, 1, 0.32, 1) forwards;
          opacity: 0;
        }
        .animate-fade-in {
          animation: fadeIn 1.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default App;

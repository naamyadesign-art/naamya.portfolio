
import React, { useState, useEffect } from 'react';

interface HeroProps {
  onExploreClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMousePos({ 
        x: (e.clientX / window.innerWidth) - 0.5, 
        y: (e.clientY / window.innerHeight) - 0.5 
      });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full pt-20 pb-12 z-10">
        <div className="relative select-none animate-reveal">
          <h1 className="flex flex-col text-black tracking-tighter leading-[0.85]">
            <span 
              className="text-[14vw] sm:text-[12vw] md:text-[10vw] lg:text-[10rem] font-serif block z-10"
              style={{ transform: `translate3d(${mousePos.x * 10}px, ${mousePos.y * 5}px, 0)` }}
            >
              Design that
            </span>

            <span 
              className="text-[18vw] sm:text-[15vw] md:text-[12vw] lg:text-[12rem] italic font-normal block -mt-[0.1em] mb-[0.05em] relative z-20"
              style={{ 
                transform: `translate3d(${mousePos.x * -15}px, ${mousePos.y * -10}px, 0)`,
                fontFamily: '"Playfair Display", serif'
              }}
            >
              Speaks
            </span> 

            <div 
              className="relative z-30 -mt-[0.15em]"
              style={{ transform: `translate3d(${mousePos.x * 20}px, ${mousePos.y * 15}px, 0)` }}
            >
              <span className="text-[13vw] sm:text-[10vw] md:text-[9vw] lg:text-[9rem] font-serif block">
                Through
              </span>
              <span className="text-[15vw] sm:text-[12vw] md:text-[11vw] lg:text-[11rem] font-black block -mt-[0.1em] tracking-[-0.04em] uppercase text-[#e63946]">
                Simplicity.
              </span>
            </div>
          </h1>
        </div>
        
        <div className="flex flex-col md:flex-row md:items-center justify-between mt-12 md:mt-24 gap-12 md:gap-20">
          <div className="max-w-2xl animate-fade-in-up delay-300">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-black/80 leading-snug font-normal tracking-tight">
              Naamya Goel is a visual storyteller crafting narrative-driven experiences through typography, digital ecosystems, and experimental print.
            </p>
          </div>
          
          <div className="animate-fade-in-up delay-500">
            <button 
              onClick={onExploreClick}
              className="group relative flex flex-col items-center md:items-start gap-4"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:border-black transition-all duration-500">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-black group-hover:text-white transition-colors transform group-hover:rotate-45">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                 </svg>
              </div>
              <span className="text-[10px] font-black tracking-[0.4em] uppercase text-black/40 group-hover:text-black transition-colors">Explore Archive</span>
            </button>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes reveal {
          0% { opacity: 0; transform: translateY(80px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-up {
          0% { transform: translateY(100%); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animate-reveal {
          animation: reveal 1.8s cubic-bezier(0.19, 1, 0.22, 1) forwards;
        }
        .animate-slide-up {
          animation: slide-up 1.2s cubic-bezier(0.19, 1, 0.22, 1) forwards;
        }
        .delay-300 { animation-delay: 400ms; }
        .delay-500 { animation-delay: 600ms; }
      `}</style>
    </section>
  );
};

export default Hero;

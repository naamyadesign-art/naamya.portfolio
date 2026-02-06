
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
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
    <section id="hero" className="min-h-[90vh] flex flex-col justify-center px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full pt-32 pb-12 z-10">
        <div className="mb-12 overflow-hidden">
          <span className="inline-block text-[10px] md:text-xs font-black tracking-[0.6em] uppercase text-black/60 animate-slide-up">
            Communication Design — Portfolio 2024
          </span>
        </div>
        
        <div className="relative select-none animate-reveal">
          <h1 className="flex flex-col text-black tracking-tighter leading-[0.85]">
            <span 
              className="text-[13vw] md:text-[10vw] lg:text-[10rem] font-serif block z-10"
              style={{ transform: `translate3d(${mousePos.x * 10}px, ${mousePos.y * 5}px, 0)` }}
            >
              Design that
            </span>

            <span 
              className="text-[16vw] md:text-[12vw] lg:text-[12rem] italic font-normal block -mt-[0.1em] mb-[0.05em] relative z-20"
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
              <span className="text-[12vw] md:text-[9vw] lg:text-[9rem] font-serif block">
                Through
              </span>
              <span className="text-[14vw] md:text-[11vw] lg:text-[11rem] font-black block -mt-[0.1em] tracking-[-0.04em] uppercase">
                Simplicity.
              </span>
            </div>
          </h1>
        </div>
        
        <div className="flex flex-col md:flex-row md:items-start justify-between mt-16 md:mt-24 gap-12 md:gap-20">
          <div className="max-w-xl animate-fade-in-up delay-300">
            <p className="text-lg md:text-2xl lg:text-3xl text-black/80 leading-snug font-normal tracking-tight">
              Naamya Goel is a visual storyteller crafting narrative-driven experiences through typography, digital ecosystems, and experimental print.
            </p>
          </div>
          
          <div className="animate-fade-in-up delay-500">
            <a 
              href="#work" 
              className="group relative inline-flex items-center gap-6 md:gap-10 py-6"
            >
              <span className="text-[10px] md:text-xs font-black tracking-[0.5em] uppercase group-hover:tracking-[0.7em] transition-all duration-500 text-black">
                Explore Work
              </span>
              <div className="w-12 md:w-20 h-[3px] bg-black group-hover:w-24 md:group-hover:w-36 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] origin-left"></div>
            </a>
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

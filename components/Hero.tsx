
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-[95vh] flex flex-col justify-center px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full pt-24 md:pt-36 pb-12">
        <div className="mb-8 md:mb-12 overflow-hidden">
          <span className="inline-block text-[11px] md:text-sm font-black tracking-[0.5em] uppercase text-black/70 animate-slide-up">
            Communication Design — Portfolio 2024
          </span>
        </div>
        
        <h1 className="text-[14vw] sm:text-[12vw] md:text-[10vw] lg:text-[8rem] xl:text-[10.5rem] font-serif leading-[0.8] tracking-tighter mb-10 md:mb-16 select-none animate-reveal text-black drop-shadow-sm">
          Design that <br className="hidden sm:block" />
          <span className="italic font-normal text-black/90 sm:pr-4 inline-block">Speaks</span> 
          <span className="sm:inline hidden"> </span>
          Through <br className="hidden sm:block" />
          Simplicity.
        </h1>
        
        <div className="flex flex-col md:flex-row md:items-start justify-between mt-8 md:mt-16 gap-10 md:gap-20">
          <div className="max-w-2xl animate-fade-in-up delay-300">
            <p className="text-xl md:text-3xl lg:text-4xl text-black leading-tight font-medium tracking-tight bg-white/5 backdrop-blur-md rounded-2xl p-4 -ml-4 border border-white/10">
              Naamya Goel is a visual storyteller crafting narrative-driven experiences through typography, digital ecosystems, and experimental print.
            </p>
          </div>
          
          <div className="animate-fade-in-up delay-500">
            <a 
              href="#work" 
              className="group relative inline-flex items-center gap-6 md:gap-10 py-6"
            >
              <span className="text-sm md:text-base font-black tracking-[0.4em] uppercase group-hover:tracking-[0.6em] transition-all duration-500 text-black">
                View Works
              </span>
              <div className="w-16 md:w-24 h-[3px] bg-black group-hover:w-20 md:group-hover:w-32 transition-all duration-700 ease-out origin-left"></div>
              <div className="absolute -bottom-2 left-0 w-0 h-[2px] bg-black/40 group-hover:w-full transition-all duration-700"></div>
            </a>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes reveal {
          0% { opacity: 0; transform: translateY(80px) rotate(1deg); }
          100% { opacity: 1; transform: translateY(0) rotate(0deg); }
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
        .delay-300 { animation-delay: 300ms; }
        .delay-500 { animation-delay: 500ms; }
      `}</style>
    </section>
  );
};

export default Hero;

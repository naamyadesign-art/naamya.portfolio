
import React from 'react';

interface AboutProps {
  onReadMore: () => void;
}

const About: React.FC<AboutProps> = ({ onReadMore }) => {
  return (
    <section id="about" className="py-24 md:py-40 px-6 md:px-12 bg-white/30 backdrop-blur-xl border-y border-black/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="relative aspect-[4/5] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 rounded-sm shadow-2xl max-h-[500px] md:max-h-[600px] lg:max-h-full mx-auto w-full md:max-w-md lg:max-w-full order-2 lg:order-1">
          <img 
            src="https://i.ibb.co/5hbtkfX0/Whats-App-Image-2026-01-28-at-11-56-33-AM.jpg" 
            alt="Naamya Goel" 
            className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000"
            loading="lazy"
          />
          <div className="absolute inset-0 border-[12px] md:border-[20px] border-white/20 pointer-events-none"></div>
        </div>
        
        <div className="max-w-xl mx-auto lg:mx-0 text-left order-1 lg:order-2">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-8 text-black tracking-tight leading-none">About Naamya</h2>
          <div className="space-y-6 text-lg sm:text-xl md:text-2xl text-black/80 leading-relaxed font-light mb-10">
            <p>
              Hi, I'm Naamya Goel, a Communication Design student dedicated to uncovering the beauty in structured minimalism. I believe that good design is as little design as possible.
            </p>
          </div>
          
          <button 
            onClick={onReadMore}
            className="group relative inline-flex items-center gap-6 py-4"
          >
            <span className="text-[10px] sm:text-[11px] font-black tracking-[0.5em] uppercase text-black">Read Full Story</span>
            <div className="w-12 h-[2px] bg-[#e63946] group-hover:w-20 transition-all duration-500 origin-left"></div>
          </button>

          <div className="mt-16 sm:mt-20 grid grid-cols-2 gap-8 sm:gap-12 border-t border-black/10 pt-10 sm:pt-12 text-left">
            <div>
              <h4 className="text-[9px] sm:text-[10px] font-black tracking-widest uppercase mb-4 sm:mb-6 text-black/40">Expertise</h4>
              <ul className="text-xs sm:text-sm md:text-base space-y-2 sm:space-y-3 text-black font-semibold">
                <li>Visual Identity</li>
                <li>Digital Product</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[9px] sm:text-[10px] font-black tracking-widest uppercase mb-4 sm:mb-6 text-black/40">Tools</h4>
              <ul className="text-xs sm:text-sm md:text-base space-y-2 sm:space-y-3 text-black font-semibold">
                <li>Adobe Suite</li>
                <li>Figma</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

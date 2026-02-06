
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-40 px-6 md:px-12 bg-white/30 backdrop-blur-xl border-y border-black/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Adjusted max-height and max-width for tablet to keep it proportional */}
        <div className="relative aspect-[4/5] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 rounded-sm shadow-2xl max-h-[450px] md:max-h-[550px] lg:max-h-full mx-auto w-full md:max-w-md lg:max-w-full">
          <img 
            src="https://picsum.photos/seed/naamya/1000/1250" 
            alt="Naamya Goel" 
            className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000"
          />
          <div className="absolute inset-0 border-[12px] md:border-[20px] border-white/20 pointer-events-none"></div>
        </div>
        
        <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-10 text-black tracking-tight leading-none">About Naamya</h2>
          <div className="space-y-6 text-xl md:text-2xl text-black/80 leading-relaxed font-light">
            <p>
              Hi, I'm Naamya Goel, a Communication Design student dedicated to uncovering the beauty in structured minimalism. I believe that good design is as little design as possible.
            </p>
            <p>
              My work revolves around the idea that every visual element should serve a purpose. Whether it's a typographic poster or a complex AI-integrated branding system, I focus on legibility, emotional resonance, and timeless aesthetics.
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-2 gap-12 border-t border-black/10 pt-12 text-left">
            <div>
              <h4 className="text-[10px] font-black tracking-widest uppercase mb-6 text-black/40">Expertise</h4>
              <ul className="text-sm md:text-base space-y-3 text-black font-semibold">
                <li>Visual Identity</li>
                <li>Digital Product</li>
                <li>Editorial & Print</li>
                <li>Typography</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-black tracking-widest uppercase mb-6 text-black/40">Tools</h4>
              <ul className="text-sm md:text-base space-y-3 text-black font-semibold">
                <li>Adobe Suite</li>
                <li>Figma & Sketch</li>
                <li>Gen AI</li>
                <li>VS Code</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

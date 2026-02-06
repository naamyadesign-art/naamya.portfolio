
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 px-6 md:px-12 bg-white/30 backdrop-blur-xl border-y border-black/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative aspect-square overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 rounded-sm shadow-2xl">
          <img 
            src="https://picsum.photos/seed/naamya/1000/1000" 
            alt="Naamya Goel" 
            className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000"
          />
          <div className="absolute inset-0 border-[20px] border-white/20"></div>
        </div>
        
        <div className="max-w-xl">
          <h2 className="text-5xl md:text-6xl font-serif mb-10 text-black tracking-tight">About Naamya</h2>
          <div className="space-y-6 text-xl text-black leading-relaxed font-light">
            <p>
              Hi, I'm Naamya Goel, a Communication Design student dedicated to uncovering the beauty in structured minimalism. I believe that good design is as little design as possible.
            </p>
            <p>
              My work revolves around the idea that every visual element should serve a purpose. Whether it's a typographic poster or a complex AI-integrated branding system, I focus on legibility, emotional resonance, and timeless aesthetics.
            </p>
            <p>
              Currently exploring the synergy between traditional print techniques and modern digital tools, I aim to create work that feels human in an increasingly automated world.
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-2 gap-12 border-t border-black/10 pt-10">
            <div>
              <h4 className="text-[10px] font-black tracking-widest uppercase mb-6 text-black/50">Expertise</h4>
              <ul className="text-sm space-y-3 text-black font-medium">
                <li>Visual Identity</li>
                <li>Digital Product Design</li>
                <li>Editorial & Print</li>
                <li>Typography Design</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-black tracking-widest uppercase mb-6 text-black/50">Tools</h4>
              <ul className="text-sm space-y-3 text-black font-medium">
                <li>Adobe Creative Suite</li>
                <li>Figma & Sketch</li>
                <li>Gen AI Tools</li>
                <li>VS Code & WordPress</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

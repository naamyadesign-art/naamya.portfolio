
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-48 px-6 md:px-12 bg-white/60 backdrop-blur-2xl">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-20 items-end">
          <div className="lg:w-2/3">
            <p className="text-[10px] font-black tracking-[0.5em] uppercase text-black/50 mb-10">Available for collaborations</p>
            <h2 className="text-6xl md:text-9xl font-serif mb-12 tracking-tighter leading-[0.9] text-black">
              Let’s create <br /> something <span className="italic font-normal">impactful.</span>
            </h2>
          </div>
          
          <div className="lg:w-1/3 pb-8">
            <div className="flex flex-col space-y-16">
              <div className="group">
                <p className="text-[10px] font-black tracking-[0.4em] uppercase text-black/40 mb-6">Email</p>
                <a 
                  href="mailto:hello@naamyagoel.com" 
                  className="text-4xl md:text-5xl font-serif border-b-2 border-black/10 pb-4 group-hover:border-black transition-all duration-500 block text-black"
                >
                  hello@naamyagoel.com
                </a>
              </div>
              
              <div className="grid grid-cols-2 gap-x-12 gap-y-8">
                <div>
                  <p className="text-[10px] font-black tracking-[0.4em] uppercase text-black/40 mb-6">Social</p>
                  <ul className="space-y-4">
                    <li><a href="#" className="text-xs font-black tracking-[0.3em] uppercase text-black hover:text-black/50 transition-colors">Instagram</a></li>
                    <li><a href="#" className="text-xs font-black tracking-[0.3em] uppercase text-black hover:text-black/50 transition-colors">LinkedIn</a></li>
                  </ul>
                </div>
                <div>
                  <p className="text-[10px] font-black tracking-[0.4em] uppercase text-black/40 mb-6">Portfolios</p>
                  <ul className="space-y-4">
                    <li><a href="#" className="text-xs font-black tracking-[0.3em] uppercase text-black hover:text-black/50 transition-colors">Behance</a></li>
                    <li><a href="#" className="text-xs font-black tracking-[0.3em] uppercase text-black hover:text-black/50 transition-colors">Dribbble</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

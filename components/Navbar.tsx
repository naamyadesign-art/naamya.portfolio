
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-in-out ${
      isScrolled ? 'py-4 md:py-6 bg-white/5 backdrop-blur-md border-b border-black/5' : 'py-10 md:py-14 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#hero" className="text-2xl md:text-3xl font-serif tracking-tight font-black text-black hover:opacity-70 transition-opacity">
          Naamya Goel
        </a>
        <div className="hidden md:flex space-x-12 lg:space-x-16 text-[10px] md:text-[11px] font-black tracking-[0.4em] uppercase text-black">
          <a href="#work" className="relative group overflow-hidden">
            <span className="block transition-transform duration-500 group-hover:-translate-y-full">Works</span>
            <span className="absolute top-0 left-0 block translate-y-full transition-transform duration-500 group-hover:translate-y-0 text-[#ff4d00]">Works</span>
          </a>
          <a href="#about" className="relative group overflow-hidden">
            <span className="block transition-transform duration-500 group-hover:-translate-y-full">About</span>
            <span className="absolute top-0 left-0 block translate-y-full transition-transform duration-500 group-hover:translate-y-0 text-[#ff4d00]">About</span>
          </a>
          <a href="#contact" className="relative group overflow-hidden">
            <span className="block transition-transform duration-500 group-hover:-translate-y-full">Contact</span>
            <span className="absolute top-0 left-0 block translate-y-full transition-transform duration-500 group-hover:translate-y-0 text-[#ff4d00]">Contact</span>
          </a>
        </div>
        <div className="md:hidden flex flex-col gap-1.5 cursor-pointer group">
          <div className="w-6 h-[2.5px] bg-black group-hover:w-8 transition-all"></div>
          <div className="w-5 h-[2.5px] bg-black group-hover:w-8 transition-all"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

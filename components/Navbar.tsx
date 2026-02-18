
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onHomeClick: () => void;
  onAboutClick: () => void;
  onContactClick: () => void;
  currentPath: string;
}

const Navbar: React.FC<NavbarProps> = ({ onHomeClick, onAboutClick, onContactClick, currentPath }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const handleNavClick = (e: React.MouseEvent, callback: () => void) => {
    e.preventDefault();
    callback();
    closeMobileMenu();
  };

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (currentPath === 'home' || currentPath === '') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      onHomeClick();
    }
    closeMobileMenu();
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-in-out ${
        isScrolled ? 'py-4 md:py-6 bg-white/5 backdrop-blur-md border-b border-black/5' : 'py-10 md:py-14 bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <a 
            href="#/"
            className="text-2xl md:text-3xl font-serif tracking-tight font-black text-black hover:opacity-70 transition-opacity no-underline relative z-[60]"
            onClick={handleHomeClick}
          >
            Naamya Goel
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-12 lg:space-x-16 text-[10px] md:text-[11px] font-black tracking-[0.4em] uppercase text-black">
            <a 
              href="#/" 
              className={`relative group overflow-hidden no-underline transition-colors ${currentPath === 'home' ? 'text-[#e63946]' : 'hover:text-[#e63946]'}`}
              onClick={handleHomeClick}
            >
              <span className="block transition-transform duration-500 group-hover:-translate-y-full">Home</span>
              <span className="absolute top-0 left-0 block translate-y-full transition-transform duration-500 group-hover:translate-y-0 text-[#e63946]">Home</span>
            </a>
            
            <a 
              href="#about" 
              className={`relative group overflow-hidden no-underline transition-colors ${currentPath === 'about' ? 'text-[#e63946]' : 'hover:text-[#e63946]'}`}
              onClick={(e) => handleNavClick(e, onAboutClick)}
            >
              <span className="block transition-transform duration-500 group-hover:-translate-y-full">About</span>
              <span className="absolute top-0 left-0 block translate-y-full transition-transform duration-500 group-hover:translate-y-0 text-[#e63946]">About</span>
            </a>
            
            <a 
              href="#contact" 
              className={`relative group overflow-hidden no-underline transition-colors ${currentPath === 'contact' ? 'text-[#e63946]' : 'hover:text-[#e63946]'}`}
              onClick={(e) => handleNavClick(e, onContactClick)}
            >
              <span className="block transition-transform duration-500 group-hover:-translate-y-full">Contact Us</span>
              <span className="absolute top-0 left-0 block translate-y-full transition-transform duration-500 group-hover:translate-y-0 text-[#e63946]">Contact Us</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden flex flex-col gap-1.5 cursor-pointer group relative z-[60] p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
          >
            <div className={`h-[2.5px] bg-black transition-all duration-300 ${isMobileMenuOpen ? 'w-8 rotate-45 translate-y-[8px]' : 'w-6 group-hover:w-8'}`}></div>
            <div className={`h-[2.5px] bg-black transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'w-5 group-hover:w-8'}`}></div>
            <div className={`h-[2.5px] bg-black transition-all duration-300 ${isMobileMenuOpen ? 'w-8 -rotate-45 -translate-y-[8.5px]' : 'w-4 group-hover:w-8'}`}></div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[55] bg-white/95 backdrop-blur-2xl transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] ${
        isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
      }`}>
        <div className="flex flex-col items-center justify-center h-full space-y-12">
          <a 
            href="#/" 
            onClick={handleHomeClick}
            className={`text-4xl font-serif italic transition-colors ${currentPath === 'home' ? 'text-[#e63946]' : 'text-black'}`}
          >
            Home
          </a>
          <a 
            href="#about" 
            onClick={(e) => handleNavClick(e, onAboutClick)}
            className={`text-4xl font-serif italic transition-colors ${currentPath === 'about' ? 'text-[#e63946]' : 'text-black'}`}
          >
            About
          </a>
          <a 
            href="#contact" 
            onClick={(e) => handleNavClick(e, onContactClick)}
            className={`text-4xl font-serif italic transition-colors ${currentPath === 'contact' ? 'text-[#e63946]' : 'text-black'}`}
          >
            Contact
          </a>
          
          <div className="pt-20 text-center">
             <p className="text-[10px] font-black tracking-[0.5em] uppercase text-black/30 mb-4">Socials</p>
             <div className="flex gap-8 justify-center">
                <a href="#" className="text-black/60 hover:text-black uppercase text-[9px] font-black tracking-widest">Instagram</a>
                <a href="#" className="text-black/60 hover:text-black uppercase text-[9px] font-black tracking-widest">Behance</a>
             </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

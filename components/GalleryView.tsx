
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { GALLERY_IMAGES } from '../data';

interface GalleryViewProps {
  onBack: () => void;
}

const GalleryView: React.FC<GalleryViewProps> = ({ onBack }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  // Manage body scroll when lightbox is open
  useEffect(() => {
    if (selectedImageIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedImageIndex]);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % GALLERY_IMAGES.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
    }
  };

  // Magazine-inspired asymmetrical grid logic
  const getGridClasses = (idx: number) => {
    const mobileClasses = [
      "col-span-2 row-span-2", 
      "col-span-1 row-span-1", 
      "col-span-1 row-span-1", 
      "col-span-2 row-span-1", 
      "col-span-1 row-span-2", 
      "col-span-1 row-span-1", 
      "col-span-2 row-span-2", 
    ];

    const desktopClasses = [
      "md:col-span-2 md:row-span-2", 
      "md:col-span-1 md:row-span-1", 
      "md:col-span-1 md:row-span-2", 
      "md:col-span-2 md:row-span-1", 
      "md:col-span-1 md:row-span-1", 
      "md:col-span-1 md:row-span-1", 
      "md:col-span-2 md:row-span-2", 
      "md:col-span-1 md:row-span-1", 
      "md:col-span-1 md:row-span-2", 
      "md:col-span-2 md:row-span-1", 
    ];

    return `${mobileClasses[idx % mobileClasses.length]} ${desktopClasses[idx % desktopClasses.length]}`;
  };

  // Lightbox component using Portal to escape stacking context and show the webpage background blobs
  const Lightbox = () => {
    if (selectedImageIndex === null) return null;

    return createPortal(
      <div 
        className="fixed inset-0 z-[10000] bg-black/70 backdrop-blur-md flex items-center justify-center p-4 sm:p-12 md:p-24 cursor-zoom-out animate-page-fade"
        onClick={closeLightbox}
      >
        {/* Navigation Controls - Switched to white for contrast against dark semi-transparent bg */}
        <button 
          className="absolute top-8 right-8 text-white/50 hover:text-white transition-all p-4 z-[10001] bg-white/5 rounded-full"
          onClick={closeLightbox}
          aria-label="Close lightbox"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <button 
          className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-all p-6 z-[10001] hover:scale-110"
          onClick={prevImage}
        >
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div 
          className="relative max-w-full max-h-full flex flex-col items-center justify-center cursor-default"
          onClick={(e) => e.stopPropagation()}
        >
           <img 
             src={GALLERY_IMAGES[selectedImageIndex]} 
             className="max-h-[75vh] md:max-h-[85vh] w-auto max-w-full object-contain shadow-[0_40px_120px_rgba(0,0,0,0.5)] rounded-sm border border-white/10" 
             alt="Fullscreen View" 
           />
           <div className="mt-12 text-center">
              <span className="text-white/40 text-[10px] font-black tracking-[1em] uppercase block mb-2">
                {selectedImageIndex + 1} / {GALLERY_IMAGES.length}
              </span>
              <div className="w-8 h-[1px] bg-white/20 mx-auto"></div>
           </div>
        </div>

        <button 
          className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-all p-6 z-[10001] hover:scale-110"
          onClick={nextImage}
        >
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>,
      document.body
    );
  };

  return (
    <div className="min-h-screen pt-32 sm:pt-48 pb-32 px-6 md:px-12 bg-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Navigation Header */}
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between border-b-2 border-black/10 pb-12 gap-12">
          <div>
            <button 
              onClick={onBack}
              className="group flex items-center gap-3 text-[10px] font-black tracking-[0.4em] uppercase text-black/30 hover:text-black transition-colors mb-10"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="group-hover:-translate-x-1 transition-transform">
                <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Archive
            </button>
            <h1 className="flex flex-col text-black tracking-tighter leading-none select-none">
              <span className="text-6xl md:text-8xl lg:text-[9rem] font-serif">keeping</span>
              <span className="text-7xl md:text-[9.5rem] lg:text-[11rem] font-serif italic -mt-[0.1em] ml-[0.15em] text-[#e63946] relative z-10">memories.</span>
            </h1>
          </div>
          <div className="text-left md:text-right">
            <p className="text-[11px] font-black tracking-[0.5em] uppercase text-black mb-3 opacity-30">Archive Vol. 01</p>
            <p className="text-xl font-serif italic text-black/50 leading-none">Curated Fragments <br/> 2021 — 2025</p>
          </div>
        </div>

        {/* Magazine-inspired asymmetrical grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 auto-rows-[180px] sm:auto-rows-[250px] lg:auto-rows-[300px]">
           {GALLERY_IMAGES.map((img, idx) => (
             <div 
               key={idx}
               onClick={() => openLightbox(idx)}
               className={`relative overflow-hidden cursor-pointer group bg-white/30 backdrop-blur-sm border border-black/5 transition-all duration-700 hover:z-20 hover:shadow-2xl hover:scale-[1.03] rounded-sm ${getGridClasses(idx)}`}
             >
               <img 
                 src={img} 
                 className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-out transform group-hover:scale-110" 
                 alt={`Gallery piece ${idx}`} 
                 loading="lazy"
               />
               
               {/* Editorial overlay */}
               <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
               <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                  <span className="bg-black text-white px-5 py-2 text-[9px] font-black tracking-widest uppercase shadow-2xl">
                    Expand Piece
                  </span>
               </div>
               
               {/* Decorative index */}
               <div className="absolute top-4 right-4 text-[9px] font-black text-black/10 group-hover:text-black/30 transition-colors uppercase tracking-widest">
                  [{String(idx + 1).padStart(2, '0')}]
               </div>
             </div>
           ))}
        </div>

        {/* Visual Footnote */}
        <div className="mt-40 grid grid-cols-1 md:grid-cols-12 gap-12 items-start border-t border-black/10 pt-16">
           <div className="md:col-span-4">
              <h2 className="text-4xl font-serif italic text-black mb-6">Fragments of Time.</h2>
              <div className="w-16 h-[2px] bg-[#e63946] mb-6"></div>
           </div>
           <div className="md:col-span-8">
              <p className="text-2xl md:text-3xl text-black/40 font-light leading-[1.3] max-w-2xl italic tracking-tight">
                "This collection serves as a visual diary of light, shadow, and texture. Documentation of the mundane made extraordinary through composition and time."
              </p>
           </div>
        </div>

        {/* Back navigation */}
        <div className="mt-48 text-center pb-20">
           <button 
             onClick={onBack}
             className="group inline-flex flex-col items-center gap-8"
           >
              <span className="text-[11px] font-black tracking-[0.8em] uppercase text-black/20 group-hover:text-black transition-all duration-500">
                End of Archive
              </span>
              <div className="w-[1px] h-16 bg-[#e63946] group-hover:h-24 transition-all duration-700"></div>
              <span className="text-[9px] font-black tracking-[0.5em] uppercase text-black opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                Return to Surface
              </span>
           </button>
        </div>
      </div>

      <Lightbox />
    </div>
  );
};

export default GalleryView;

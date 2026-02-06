
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { PROJECTS, DOMAINS } from '../data';
import { Domain } from '../types';
import ProjectCard from './ProjectCard';

const WorkGrid: React.FC = () => {
  const [activeDomain, setActiveDomain] = useState<Domain>('All');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredProjects = useMemo(() => {
    if (activeDomain === 'All') return PROJECTS;
    return PROJECTS.filter(p => p.domain === activeDomain);
  }, [activeDomain]);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { innerWidth, innerHeight } = window;
      setMousePos({
        x: (e.clientX / innerWidth - 0.5) * 60,
        y: (e.clientY / innerHeight - 0.5) * 60,
      });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  const floatingPositions = [
    { top: '15%', left: '10%', scale: 0.95, delay: '0s' },
    { top: '8%', left: '55%', scale: 1.1, delay: '1.2s' },
    { top: '22%', left: '78%', scale: 0.85, delay: '0.6s' },
    { top: '48%', left: '8%', scale: 1.05, delay: '1.8s' },
    { top: '58%', left: '42%', scale: 1.25, delay: '2.4s' },
    { top: '45%', left: '72%', scale: 0.9, delay: '0.3s' },
    { top: '82%', left: '12%', scale: 1.15, delay: '2.9s' },
    { top: '88%', left: '52%', scale: 0.95, delay: '0.9s' },
    { top: '78%', left: '82%', scale: 1.0, delay: '1.5s' },
  ];

  return (
    <section id="work" className="relative min-h-[180vh] md:min-h-[250vh] py-40 overflow-hidden" ref={containerRef}>
      {/* Header & Navigation - Sticky and fixed overlap on tablet */}
      <div className="sticky top-20 md:top-32 z-40 px-6 md:px-12 pointer-events-none">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-end justify-between gap-12 lg:gap-20">
          <div className="max-w-2xl pointer-events-auto bg-white/50 backdrop-blur-2xl p-8 md:p-12 rounded-[2.5rem] border border-white shadow-2xl shadow-black/5">
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-serif mb-6 tracking-tighter leading-[0.8]">Selected <br/> Works</h2>
            <p className="text-lg md:text-xl text-black/70 font-medium leading-relaxed max-w-lg">
              Experimental narratives through Typography, Digital Systems, and Print.
            </p>
          </div>
          
          <div className="pointer-events-auto bg-white/70 backdrop-blur-2xl px-10 py-7 rounded-full border border-white shadow-xl shadow-black/5 overflow-x-auto no-scrollbar mb-4 lg:mb-10">
            <div className="flex items-center gap-8 md:gap-14 min-w-max">
              {DOMAINS.map(domain => (
                <button
                  key={domain}
                  onClick={() => setActiveDomain(domain)}
                  className={`group relative text-[10px] md:text-[11px] font-black tracking-[0.4em] uppercase transition-all duration-500 pb-1 ${
                    activeDomain === domain ? 'text-black' : 'text-black/30'
                  }`}
                >
                  {domain}
                  <span className={`absolute bottom-0 left-0 h-[2.5px] bg-[#ff4d00] transition-all duration-700 ease-out ${
                    activeDomain === domain ? 'w-full' : 'w-0'
                  }`}></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Canvas */}
      <div 
        className="absolute inset-0 transition-transform duration-1000 ease-out pointer-events-none"
        style={{ transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)` }}
      >
        <div className="relative w-full h-full max-w-[1800px] mx-auto">
          {filteredProjects.map((project, index) => {
            const pos = floatingPositions[index % floatingPositions.length];
            return (
              <div 
                key={project.id}
                className="absolute pointer-events-auto transition-all duration-700 ease-in-out hover:z-50 animate-float"
                style={{ 
                  top: pos.top,
                  left: pos.left,
                  width: 'min(420px, 65vw)',
                  transform: `scale(${pos.scale})`,
                  animationDelay: pos.delay
                }}
              >
                <div className="shadow-[0_30px_70px_rgba(0,0,0,0.12)] hover:shadow-[0_50px_100px_rgba(0,0,0,0.2)] transition-all duration-500 rounded-sm overflow-hidden">
                  <ProjectCard project={project} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {filteredProjects.length === 0 && (
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-black/20 font-serif italic text-4xl">Coming soon.</p>
        </div>
      )}

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(1.5deg); }
          66% { transform: translateY(15px) rotate(-1.5deg); }
        }
        .animate-float {
          animation: float 10s infinite ease-in-out;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default WorkGrid;

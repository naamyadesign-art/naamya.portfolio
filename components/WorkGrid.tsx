
import React from 'react';
import { PROJECTS, DOMAINS } from '../data';
import { Domain } from '../types';
import ProjectCard from './ProjectCard';

interface WorkGridProps {
  onDomainSelect: (domain: Domain) => void;
  onProjectSelect: (id: string) => void;
  onMiscellaneousClick: () => void;
}

const WorkGrid: React.FC<WorkGridProps> = ({ onDomainSelect, onProjectSelect, onMiscellaneousClick }) => {
  const handleDomainClick = (e: React.MouseEvent, domain: Domain) => {
    e.preventDefault();
    onDomainSelect(domain);
  };

  const handleProjectClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    onProjectSelect(id);
  };

  const handleMiscClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onMiscellaneousClick();
  };

  return (
    <section id="work" className="py-20 md:py-40 px-6 md:px-12 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 md:mb-32 border-b border-black/5 pb-12 gap-8 lg:gap-20">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-6 md:mb-8 tracking-tighter leading-none text-black">Selected Works</h2>
            <p className="text-lg md:text-xl text-black/50 font-light leading-relaxed max-w-xl">
              Exploring visual boundaries through Typography, AI, and Print. Each piece is a fragment of a larger conversation on human-centric design.
            </p>
          </div>
          
          <div className="lg:mb-2 w-full lg:w-auto overflow-x-auto no-scrollbar pb-4 lg:pb-0">
            <div className="flex flex-nowrap lg:flex-wrap gap-x-8 md:gap-x-10 gap-y-5 lg:justify-end">
              {DOMAINS.map(domain => (
                <a
                  key={domain}
                  href={`#work/${encodeURIComponent(domain)}`}
                  onClick={(e) => handleDomainClick(e, domain)}
                  className="group relative text-[10px] md:text-[11px] font-black tracking-[0.3em] uppercase transition-all duration-500 pb-2 text-black/30 hover:text-black whitespace-nowrap"
                >
                  {domain}
                  <span className="absolute bottom-0 left-0 h-[2.5px] bg-[#e63946] transition-all duration-700 ease-out w-0 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-12 gap-y-12 md:gap-y-24">
          {PROJECTS.slice(0, 6).map((project, index) => (
            <a 
              key={project.id}
              href={`#project/${project.id}`}
              onClick={(e) => handleProjectClick(e, project.id)}
              className="animate-fade-in-up block"
              style={{ 
                animationDelay: `${index * 100}ms`,
              }}
            >
              <ProjectCard project={project} />
            </a>
          ))}
        </div>
        
        <div className="mt-20 md:mt-32 text-center">
          <a 
            href="#gallery"
            onClick={handleMiscClick}
            className="inline-flex items-center gap-4 px-10 py-5 bg-black text-white text-[10px] font-black tracking-[0.4em] uppercase rounded-full hover:scale-105 transition-transform shadow-xl shadow-black/10"
          >
            Miscellaneous
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
      
      <style>{`
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

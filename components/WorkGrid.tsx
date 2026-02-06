
import React from 'react';
import { PROJECTS, DOMAINS } from '../data';
import { Domain } from '../types';
import ProjectCard from './ProjectCard';

interface WorkGridProps {
  onDomainSelect: (domain: Domain) => void;
}

const WorkGrid: React.FC<WorkGridProps> = ({ onDomainSelect }) => {
  return (
    <section id="work" className="py-20 md:py-40 px-6 md:px-12 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 md:mb-32 border-b border-black/5 pb-12 gap-12 lg:gap-20">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-6 md:mb-8 tracking-tighter leading-none">Selected Works</h2>
            <p className="text-lg md:text-xl text-black/50 font-light leading-relaxed max-w-xl">
              Exploring visual boundaries through Typography, AI, and Print. Each piece is a fragment of a larger conversation on human-centric design.
            </p>
          </div>
          
          <div className="lg:mb-2 overflow-x-auto no-scrollbar pb-2">
            <div className="flex flex-wrap gap-x-6 md:gap-x-10 gap-y-5 lg:justify-end">
              {DOMAINS.map(domain => (
                <button
                  key={domain}
                  onClick={() => onDomainSelect(domain)}
                  className="group relative text-[10px] md:text-[11px] font-black tracking-[0.3em] uppercase transition-all duration-500 pb-2 text-black/30 hover:text-black"
                >
                  {domain}
                  <span className="absolute bottom-0 left-0 h-[2.5px] bg-[#ff4d00] transition-all duration-700 ease-out w-0 group-hover:w-full"></span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 md:gap-x-12 gap-y-8 md:gap-y-24">
          {PROJECTS.slice(0, 6).map((project, index) => (
            <div 
              key={project.id}
              className="animate-fade-in-up"
              style={{ 
                animationDelay: `${index * 100}ms`,
              }}
              onClick={() => onDomainSelect(project.domain)}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <button 
            onClick={() => onDomainSelect('All')}
            className="inline-flex items-center gap-4 px-10 py-5 bg-black text-white text-xs font-black tracking-[0.4em] uppercase rounded-full hover:scale-105 transition-transform"
          >
            View Full Archive
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
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


import React, { useState, useMemo } from 'react';
import { PROJECTS, DOMAINS } from '../data';
import { Domain } from '../types';
import ProjectCard from './ProjectCard';

const WorkGrid: React.FC = () => {
  const [activeDomain, setActiveDomain] = useState<Domain>('All');

  const filteredProjects = useMemo(() => {
    if (activeDomain === 'All') return PROJECTS;
    return PROJECTS.filter(p => p.domain === activeDomain);
  }, [activeDomain]);

  return (
    <section id="work" className="py-20 md:py-40 px-6 md:px-12 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-32 border-b border-black/5 pb-8 md:pb-12">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-7xl font-serif mb-6 md:mb-8 tracking-tighter">Selected Works</h2>
            <p className="text-base md:text-xl text-black/50 font-light leading-relaxed">
              Exploring visual boundaries through Typography, AI, and Print. Each piece is a fragment of a larger conversation on human-centric design.
            </p>
          </div>
          
          <div className="mt-10 md:mt-0">
            <div className="flex flex-wrap gap-x-6 md:gap-x-10 gap-y-4 md:gap-y-6">
              {DOMAINS.map(domain => (
                <button
                  key={domain}
                  onClick={() => setActiveDomain(domain)}
                  className={`group relative text-[9px] md:text-[10px] font-bold tracking-[0.3em] uppercase transition-all duration-500 pb-2 ${
                    activeDomain === domain ? 'text-black' : 'text-black/30'
                  }`}
                >
                  {domain}
                  <span className={`absolute bottom-0 left-0 h-[1.5px] bg-orange-500 transition-all duration-700 ease-out ${
                    activeDomain === domain ? 'w-full' : 'w-0'
                  }`}></span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 md:gap-x-12 gap-y-16 md:gap-y-24">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="animate-fade-in-up"
              style={{ 
                animationDelay: `${index * 100}ms`,
              }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="py-20 md:py-40 text-center">
            <p className="text-black/20 font-serif italic text-2xl md:text-3xl">Coming soon to this domain.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default WorkGrid;

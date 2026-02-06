
import React from 'react';
import { Domain, Project } from '../types';
import { PROJECTS, DOMAINS } from '../data';
import ProjectCard from './ProjectCard';

interface DomainViewProps {
  domain: Domain;
  onBack: () => void;
  onNavigate: (domain: Domain) => void;
}

const DomainView: React.FC<DomainViewProps> = ({ domain, onBack, onNavigate }) => {
  const filteredProjects = PROJECTS.filter(p => domain === 'All' ? true : p.domain === domain);

  return (
    <div className="min-h-screen pt-40 pb-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Navigation Breadcrumb */}
        <div className="mb-20">
          <button 
            onClick={onBack}
            className="group flex items-center gap-4 text-[10px] font-black tracking-[0.4em] uppercase text-black/40 hover:text-black transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="group-hover:-translate-x-2 transition-transform">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Home
          </button>
        </div>

        {/* Dynamic Domain Header */}
        <div className="mb-32">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 border-b border-black/10 pb-20">
            <div>
              <span className="inline-block text-[11px] font-black tracking-[0.5em] uppercase text-[#ff4d00] mb-6">
                Collection
              </span>
              <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-serif leading-none tracking-tighter text-black">
                {domain === 'All' ? 'Archive' : domain}
              </h1>
            </div>
            
            <div className="max-w-md">
              <p className="text-xl md:text-2xl text-black/60 font-light leading-relaxed mb-8">
                {domain === 'Typography' && 'A deep dive into letterforms, legibility, and the emotional resonance of structured type.'}
                {domain === 'AI Integration' && 'Exploring the synergy between human intuition and machine intelligence in visual design.'}
                {domain === 'Website Design' && 'Crafting digital ecosystems that prioritize user narrative and effortless functionality.'}
                {domain === 'All' && 'Explore the full spectrum of projects across typography, digital, and print media.'}
                {!['Typography', 'AI Integration', 'Website Design', 'All'].includes(domain) && `A curated showcase of professional work within the realm of ${domain}.`}
              </p>
            </div>
          </div>

          {/* Sub-navigation for Domains */}
          <div className="mt-12 flex flex-wrap gap-8">
            {DOMAINS.map(d => (
              <button
                key={d}
                onClick={() => onNavigate(d)}
                className={`text-[10px] font-black tracking-[0.3em] uppercase transition-all ${
                  domain === d ? 'text-[#ff4d00]' : 'text-black/30 hover:text-black'
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-20">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="py-40 text-center">
            <h3 className="text-4xl font-serif italic text-black/20">Archive currently empty.</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default DomainView;


import React from 'react';
import { Project } from '../types';
import { PROJECTS } from '../data';

interface ProjectDetailViewProps {
  project: Project;
  onBack: () => void;
}

const ProjectDetailView: React.FC<ProjectDetailViewProps> = ({ project, onBack }) => {
  const currentIndex = PROJECTS.findIndex(p => p.id === project.id);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    onBack();
  };

  const handleNextProject = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    window.location.hash = `project/${id}`;
  };

  return (
    <div className="min-h-screen pt-32 sm:pt-40 pb-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Navigation Breadcrumb */}
        <div className="mb-12 sm:mb-20">
          <a 
            href="#/"
            onClick={handleBack}
            className="group flex items-center gap-4 text-[10px] font-black tracking-[0.4em] uppercase text-black/40 hover:text-black transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="group-hover:-translate-x-2 transition-transform">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Archive
          </a>
        </div>

        {/* Photogrid Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 mb-20 sm:mb-32">
          {/* Main Hero Image */}
          <div className="md:col-span-12 aspect-video overflow-hidden rounded-sm bg-black/5">
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Dynamic Grid Variation */}
          {project.galleryUrls.map((url, idx) => (
            <div 
              key={idx}
              className={`overflow-hidden rounded-sm bg-black/5 ${
                idx % 3 === 0 ? 'md:col-span-7 aspect-[4/3]' : 
                idx % 3 === 1 ? 'md:col-span-5 aspect-[4/5]' : 
                'md:col-span-12 aspect-video sm:aspect-[21/9]'
              }`}
            >
              <img 
                src={url} 
                alt={`${project.title} gallery ${idx}`} 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Narrative Section Below Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-20 border-t border-black/10 pt-12 sm:pt-20">
          <div className="lg:col-span-7">
            <span className="inline-block text-[10px] sm:text-[11px] font-black tracking-[0.6em] uppercase text-[#e63946] mb-6 sm:mb-8">
              Project Narrative
            </span>
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-serif leading-[0.9] tracking-tighter text-black mb-8 sm:mb-12">
              {project.title}.
            </h1>
            <div className="space-y-6 sm:space-y-8 text-lg sm:text-xl md:text-2xl text-black/70 font-light leading-relaxed">
              <p>{project.fullDescription || project.description}</p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white/50 backdrop-blur-sm p-8 sm:p-14 border border-black/5 rounded-3xl lg:sticky lg:top-48">
              <div className="space-y-8 sm:space-y-12">
                <div>
                  <h4 className="text-[9px] sm:text-[10px] font-black tracking-widest uppercase mb-4 sm:mb-6 text-black/40">Metadata</h4>
                  <div className="flex justify-between items-center py-4 border-b border-black/5">
                    <span className="text-[10px] font-bold uppercase tracking-widest">Year</span>
                    <span className="text-lg sm:text-xl font-serif italic">{project.year}</span>
                  </div>
                  <div className="flex justify-between items-center py-4 border-b border-black/5">
                    <span className="text-[10px] font-bold uppercase tracking-widest">Domain</span>
                    <span className="text-lg sm:text-xl font-serif italic">{project.domain}</span>
                  </div>
                </div>

                {project.tools && (
                  <div>
                    <h4 className="text-[9px] sm:text-[10px] font-black tracking-widest uppercase mb-4 sm:mb-6 text-black/40">Tools Used</h4>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {project.tools.map(tool => (
                        <span key={tool} className="px-3 sm:px-4 py-1.5 sm:py-2 bg-black/5 rounded-full text-[9px] sm:text-[10px] font-black tracking-widest uppercase text-black">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Next Project Suggestion */}
        {nextProject && (
          <div className="mt-40 sm:mt-60 pt-16 sm:pt-20 border-t border-black/10 text-center">
             <p className="text-[9px] sm:text-[10px] font-black tracking-[0.5em] uppercase text-black/30 mb-6 sm:mb-8">Next Chapter</p>
             <a 
              href={`#project/${nextProject.id}`}
              onClick={(e) => handleNextProject(e, nextProject.id)}
              className="group inline-block"
             >
               <h3 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-serif italic hover:text-[#e63946] transition-colors duration-500 text-black">
                {nextProject.title}
               </h3>
               <div className="mt-8 flex justify-center">
                  <div className="w-12 h-[2px] bg-[#e63946] group-hover:w-32 transition-all duration-700"></div>
               </div>
             </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetailView;


import React, { useState } from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - card.left;
    const y = e.clientY - card.top;
    const centerX = card.width / 2;
    const centerY = card.height / 2;
    
    // Max rotation of 5 degrees for grid stability
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;
    
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div 
      className="group relative w-full aspect-[4/5] overflow-hidden bg-white/10 backdrop-blur-sm cursor-pointer transition-all duration-700 ease-out"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: '1000px',
        transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
      }}
    >
      <img 
        src={project.imageUrl} 
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
      />
      
      {/* Refined Glass Overlay */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-4 sm:p-8 lg:p-14 border border-white/40 m-2 sm:m-4 rounded-sm">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]">
          <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-4">
            <span className="text-[7px] sm:text-[10px] font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase text-black/50 truncate max-w-[80px]">
              {project.domain}
            </span>
            <div className="w-4 sm:w-8 h-[1px] bg-black/20"></div>
            <span className="text-[7px] sm:text-[10px] font-bold tracking-[0.1em] sm:tracking-[0.2em] text-black/40">
              {project.year}
            </span>
          </div>
          
          <h3 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-serif text-black mb-2 sm:mb-6 leading-none">
            {project.title}
          </h3>
          
          <p className="hidden sm:block text-xs md:text-sm lg:text-base text-black/70 max-w-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-1000 delay-200 font-light">
            {project.description}
          </p>
          
          <div className="mt-2 sm:mt-8 overflow-hidden">
            <span className="inline-block text-[7px] sm:text-[9px] font-bold tracking-[0.2em] sm:tracking-[0.4em] uppercase text-[#e63946] translate-y-full group-hover:translate-y-0 transition-transform duration-700 delay-300">
              View Case
            </span>
          </div>
        </div>
      </div>

      {/* Subtle Inner Glow */}
      <div className="absolute inset-0 pointer-events-none border border-black/[0.03] group-hover:border-white/50 transition-colors duration-500"></div>
    </div>
  );
};

export default ProjectCard;

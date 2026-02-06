
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
    
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div 
      className="group relative w-full overflow-hidden bg-white cursor-pointer transition-all duration-700 ease-out border border-black/5"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: '1200px',
        transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
      }}
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
        />
        
        <div className="absolute top-4 left-4 right-4 flex justify-between items-start pointer-events-none">
          <span className="bg-black text-white text-[8px] md:text-[9px] font-black tracking-widest uppercase px-4 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {project.domain}
          </span>
          <span className="bg-white/90 backdrop-blur-md text-black text-[8px] md:text-[9px] font-black tracking-widest uppercase px-4 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {project.year}
          </span>
        </div>
      </div>
      
      <div className="p-7 bg-white transition-colors duration-500 group-hover:bg-black group-hover:text-white">
        <div className="flex justify-between items-end">
          <div>
            <h3 className="text-2xl md:text-3xl font-serif leading-none mb-2">
              {project.title}
            </h3>
            <p className="text-[10px] font-black tracking-[0.2em] uppercase opacity-40 group-hover:opacity-60">
              Communication Design / 2024
            </p>
          </div>
          <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center group-hover:border-white/30 transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none border border-white/0 group-hover:border-white/10 transition-colors duration-500"></div>
    </div>
  );
};

export default ProjectCard;

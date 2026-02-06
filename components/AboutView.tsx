
import React from 'react';

interface AboutViewProps {
  onBack: () => void;
}

const AboutView: React.FC<AboutViewProps> = ({ onBack }) => {
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
            Return Home
          </button>
        </div>

        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-32 items-start">
          <div className="lg:col-span-7">
            <span className="inline-block text-[11px] font-black tracking-[0.6em] uppercase text-[#e63946] mb-8">
              Biographical
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif leading-[0.9] tracking-tighter text-black mb-12">
              Naamya Goel. <br />
              <span className="italic font-normal">Communicator.</span>
            </h1>
            <div className="space-y-8 text-xl md:text-2xl text-black/70 font-light leading-relaxed max-w-2xl">
              <p>
                Based in New Delhi, I am a designer who navigates the delicate intersection of logic and emotion. My approach is rooted in the belief that design is not just a visual layer, but a strategic language used to solve complex human problems.
              </p>
              <p>
                Throughout my academic journey, I have focused on the "how" and "why" behind visual communication — stripping away the noise to leave only the essential truth of a brand or a narrative.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5">
             <div className="aspect-[3/4] overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl border-4 border-white">
                <img 
                  src="https://picsum.photos/seed/naamya-studio/800/1000" 
                  alt="Studio Workspace" 
                  className="w-full h-full object-cover"
                />
             </div>
          </div>
        </div>

        {/* Core Skills Section */}
        <div className="mb-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-black/10 pb-12 mb-16">
            <h2 className="text-4xl md:text-6xl font-serif tracking-tight text-black">Core Skills</h2>
            <p className="text-xs font-black tracking-[0.4em] uppercase text-black/30 mt-4 md:mt-0">Design Capabilities</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-[#e63946] text-[10px] font-black tracking-[0.3em] uppercase mb-8">Visual Design</h3>
              <ul className="space-y-6">
                <li className="group">
                  <span className="block text-2xl font-serif group-hover:translate-x-2 transition-transform">Typography & Layout</span>
                  <p className="text-sm text-black/50 mt-1">Mastery of editorial flow and spatial hierarchy.</p>
                </li>
                <li className="group">
                  <span className="block text-2xl font-serif group-hover:translate-x-2 transition-transform">Brand Identity</span>
                  <p className="text-sm text-black/50 mt-1">Crafting cohesive visual languages for digital/print.</p>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-[#e63946] text-[10px] font-black tracking-[0.3em] uppercase mb-8">Technical</h3>
              <ul className="space-y-6">
                <li className="group">
                  <span className="block text-2xl font-serif group-hover:translate-x-2 transition-transform">Product UX/UI</span>
                  <p className="text-sm text-black/50 mt-1">Prototyping intuitive interfaces in Figma/Sketch.</p>
                </li>
                <li className="group">
                  <span className="block text-2xl font-serif group-hover:translate-x-2 transition-transform">AI-Aided Design</span>
                  <p className="text-sm text-black/50 mt-1">Integrating Gen-AI into creative workflows.</p>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-[#e63946] text-[10px] font-black tracking-[0.3em] uppercase mb-8">Strategy</h3>
              <ul className="space-y-6">
                <li className="group">
                  <span className="block text-2xl font-serif group-hover:translate-x-2 transition-transform">User Research</span>
                  <p className="text-sm text-black/50 mt-1">Distilling insights into actionable design goals.</p>
                </li>
                <li className="group">
                  <span className="block text-2xl font-serif group-hover:translate-x-2 transition-transform">Content Narrative</span>
                  <p className="text-sm text-black/50 mt-1">Storyboarding and narrative-driven visuals.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-black/10 pb-12 mb-16">
            <h2 className="text-4xl md:text-6xl font-serif tracking-tight text-black">Education</h2>
            <p className="text-xs font-black tracking-[0.4em] uppercase text-black/30 mt-4 md:mt-0">Academic History</p>
          </div>
          
          <div className="space-y-16">
            <div className="flex flex-col md:flex-row gap-8 md:gap-32">
              <span className="text-[#e63946] text-xl font-bold tracking-tighter">2024 — 2028</span>
              <div>
                <h3 className="text-3xl md:text-4xl font-serif mb-2">Bachelor of Communication Design</h3>
                <p className="text-lg text-black/60">Unitedworld Institute of Design (UID), Gandhinagar</p>
                <p className="text-sm font-black tracking-widest uppercase text-black/30 mt-4">Focus: Visual Communication</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 md:gap-32">
              <span className="text-[#e63946] text-xl font-bold tracking-tighter">2019 — 2021</span>
              <div>
                <h3 className="text-3xl md:text-4xl font-serif mb-2">Senior Secondary Education</h3>
                <p className="text-lg text-black/60">Modern School, Barakhamba Road</p>
                <p className="text-sm font-black tracking-widest uppercase text-black/30 mt-4">Focus: Fine Arts & Humanities</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-40 pt-20 border-t border-black/10 text-center">
          <p className="text-2xl font-serif italic text-black/50 mb-8">Interested in working together?</p>
          <div className="relative inline-block group">
            <a 
              href="#contact"
              className="inline-block text-4xl md:text-6xl font-serif text-black hover:text-[#e63946] transition-all duration-500"
            >
              Get in touch
            </a>
            <div className="absolute -bottom-4 left-0 w-0 h-[2px] bg-[#e63946] group-hover:w-full transition-all duration-700"></div>
          </div>
          <p className="mt-8 text-[10px] font-black tracking-[0.4em] uppercase text-black/30">Jump to Query Form</p>
        </div>
      </div>
    </div>
  );
};

export default AboutView;

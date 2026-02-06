
import React, { useState, useEffect, useRef } from 'react';

const Background: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [targetPos, setTargetPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setTargetPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    
    // Smooth trailing effect for blobs
    let rafId: number;
    const updatePos = () => {
      setMousePos(prev => ({
        x: prev.x + (targetPos.x - prev.x) * 0.05,
        y: prev.y + (targetPos.y - prev.y) * 0.05,
      }));
      rafId = requestAnimationFrame(updatePos);
    };
    rafId = requestAnimationFrame(updatePos);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, [targetPos]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-[#fefefe]">
      {/* High-Intensity Grain Overlay */}
      <div className="absolute inset-0 z-30 opacity-[0.4] mix-blend-soft-light pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>
      
      {/* Massive Reactive Blobs */}
      {/* Primary Warm Glow */}
      <div 
        className="absolute w-[120vw] h-[100vh] rounded-full blur-[140px] opacity-70 animate-morph-slow"
        style={{ 
          background: 'radial-gradient(circle, #ff4d00 0%, transparent 70%)',
          top: '-20%',
          left: '-10%',
          transform: `translate3d(${mousePos.x * 0.05}px, ${mousePos.y * 0.05}px, 0)` 
        }}
      ></div>
      
      {/* Secondary Pink Glow */}
      <div 
        className="absolute w-[100vw] h-[120vh] rounded-full blur-[160px] opacity-60 animate-morph-medium"
        style={{ 
          background: 'radial-gradient(circle, #ff2d55 0%, transparent 70%)',
          bottom: '-30%',
          right: '-10%',
          transform: `translate3d(${mousePos.x * -0.03}px, ${mousePos.y * -0.03}px, 0)` 
        }}
      ></div>
      
      {/* Tertiary Blue Accent */}
      <div 
        className="absolute w-[80vw] h-[80vh] rounded-full blur-[120px] opacity-40 animate-morph-fast"
        style={{ 
          background: 'radial-gradient(circle, #8ecae6 0%, transparent 70%)',
          top: '20%',
          right: '5%',
          transform: `translate3d(${mousePos.x * 0.08}px, ${mousePos.y * 0.08}px, 0)` 
        }}
      ></div>

      {/* Quaternary Soft Orange */}
      <div 
        className="absolute w-[60vw] h-[60vh] rounded-full blur-[100px] opacity-50 animate-morph-slow"
        style={{ 
          background: 'radial-gradient(circle, #ffb703 0%, transparent 70%)',
          top: '40%',
          left: '15%',
          transform: `translate3d(${mousePos.x * -0.06}px, ${mousePos.y * -0.06}px, 0)` 
        }}
      ></div>

      {/* 4-Pointed Stars (Sparkles) - High Visibility */}
      <div className="absolute top-[10%] left-[12%] z-40 animate-sparkle">
        <Star color="#ff4d00" size={160} mousePos={mousePos} speed={0.1} />
      </div>
      <div className="absolute top-[40%] right-[18%] z-40 animate-sparkle-delayed">
        <Star color="#ff2d55" size={120} mousePos={mousePos} speed={-0.08} />
      </div>
      <div className="absolute bottom-[15%] right-[8%] z-40 animate-sparkle">
        <Star color="#ffb703" size={200} mousePos={mousePos} speed={0.12} />
      </div>
      <div className="absolute bottom-[20%] left-[22%] z-40 animate-sparkle-delayed">
        <Star color="#ffffff" size={90} mousePos={mousePos} speed={-0.05} />
      </div>

      <style>{`
        @keyframes morph-slow {
          0%, 100% { border-radius: 40% 60% 70% 30% / 40% 40% 60% 50%; }
          50% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
        }
        @keyframes morph-medium {
          0%, 100% { border-radius: 50% 50% 50% 50%; scale: 1; }
          50% { border-radius: 30% 70% 70% 30% / 50% 30% 70% 50%; scale: 1.1; }
        }
        @keyframes morph-fast {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2) rotate(5deg); }
        }
        @keyframes sparkle {
          0%, 100% { opacity: 0.7; transform: scale(0.9); filter: blur(2px); }
          50% { opacity: 1; transform: scale(1.1); filter: blur(0px); }
        }
        @keyframes sparkle-delayed {
          0%, 100% { opacity: 0.5; transform: scale(0.85); filter: blur(3px); }
          50% { opacity: 0.9; transform: scale(1.05); filter: blur(1px); }
        }
        .animate-sparkle { animation: sparkle 6s infinite ease-in-out; }
        .animate-sparkle-delayed { animation: sparkle-delayed 8s infinite ease-in-out; }
        .animate-morph-slow { animation: morph-slow 25s infinite ease-in-out; }
        .animate-morph-medium { animation: morph-medium 20s infinite ease-in-out; }
        .animate-morph-fast { animation: morph-fast 15s infinite ease-in-out; }
      `}</style>
    </div>
  );
};

interface StarProps {
  color: string;
  size: number;
  mousePos: { x: number; y: number };
  speed: number;
}

const Star: React.FC<StarProps> = ({ color, size, mousePos, speed }) => (
  <div 
    className="transition-transform duration-300 ease-out" 
    style={{ 
      width: size, 
      height: size,
      transform: `translate3d(${mousePos.x * speed}px, ${mousePos.y * speed}px, 0)`
    }}
  >
    <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: `drop-shadow(0 0 40px ${color}cc)` }}>
      <path 
        d="M50 0C50 0 53 45 50 50C47 55 50 100 50 100C50 100 47 55 50 50C53 45 50 0 50 0Z" 
        fill={color} 
      />
      <path 
        d="M100 50C100 50 55 53 50 50C45 47 0 50 0 50C0 50 45 47 50 50C55 53 100 50 100 50Z" 
        fill={color} 
      />
      <circle cx="50" cy="50" r="10" fill="white" className="opacity-60" />
    </svg>
  </div>
);

export default Background;

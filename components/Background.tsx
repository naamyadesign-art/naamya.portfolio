
import React, { useState, useEffect, useRef } from 'react';

interface StarProps {
  color: string;
  size: number;
  mousePos: { x: number; y: number };
  speed: number;
}

const Star: React.FC<StarProps> = ({ color, size, mousePos, speed }) => (
  <div 
    className="transition-transform duration-[400ms] ease-out" 
    style={{ 
      width: size, 
      height: size,
      transform: `translate3d(${mousePos.x * speed}px, ${mousePos.y * speed}px, 0)`
    }}
  >
    <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: `drop-shadow(0 0 45px ${color}cc)` }}>
      <path 
        d="M50 0C50 0 53 45 50 50C47 55 50 100 50 100C50 100 47 55 50 50C53 45 50 0 50 0Z" 
        fill={color} 
      />
      <path 
        d="M100 50C100 50 55 53 50 50C45 47 0 50 0 50C0 50 45 47 50 50C55 53 100 50 100 50Z" 
        fill={color} 
      />
      <circle cx="50" cy="50" r="10" fill="white" className="opacity-70" />
    </svg>
  </div>
);

const Background: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const targetPos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);
    
    let rafId: number;
    const animate = () => {
      // Smooth interpolation (lerp)
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * 0.05;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * 0.05;
      
      setMousePos({ x: currentPos.current.x, y: currentPos.current.y });
      rafId = requestAnimationFrame(animate);
    };
    
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-white">
      {/* High-Intensity Grain Overlay */}
      <div className="absolute inset-0 z-30 opacity-[0.35] mix-blend-multiply pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>
      
      {/* Massive Reactive Blobs */}
      <div 
        className="absolute w-[140vw] h-[120vh] rounded-full blur-[120px] opacity-80 animate-morph-slow"
        style={{ 
          background: 'radial-gradient(circle, #ff4d00 0%, transparent 65%)',
          top: '-30%',
          left: '-20%',
          transform: `translate3d(${mousePos.x * 0.04}px, ${mousePos.y * 0.04}px, 0)` 
        }}
      ></div>
      
      <div 
        className="absolute w-[110vw] h-[130vh] rounded-full blur-[140px] opacity-70 animate-morph-medium"
        style={{ 
          background: 'radial-gradient(circle, #ff2d55 0%, transparent 65%)',
          bottom: '-25%',
          right: '-15%',
          transform: `translate3d(${mousePos.x * -0.03}px, ${mousePos.y * -0.03}px, 0)` 
        }}
      ></div>
      
      <div 
        className="absolute w-[90vw] h-[90vh] rounded-full blur-[110px] opacity-50 animate-morph-fast"
        style={{ 
          background: 'radial-gradient(circle, #8ecae6 0%, transparent 65%)',
          top: '15%',
          right: '0%',
          transform: `translate3d(${mousePos.x * 0.07}px, ${mousePos.y * 0.07}px, 0)` 
        }}
      ></div>

      {/* 4-Pointed Stars */}
      <div className="absolute top-[15%] left-[15%] z-40 animate-sparkle">
        <Star color="#ff4d00" size={180} mousePos={mousePos} speed={0.12} />
      </div>
      <div className="absolute top-[45%] right-[20%] z-40 animate-sparkle-delayed">
        <Star color="#ff2d55" size={140} mousePos={mousePos} speed={-0.1} />
      </div>
      <div className="absolute bottom-[20%] right-[10%] z-40 animate-sparkle">
        <Star color="#ffb703" size={220} mousePos={mousePos} speed={0.15} />
      </div>

      <style>{`
        @keyframes morph-slow {
          0%, 100% { border-radius: 40% 60% 70% 30% / 40% 40% 60% 50%; }
          50% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
        }
        @keyframes morph-medium {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        @keyframes morph-fast {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.7; }
        }
        @keyframes sparkle {
          0%, 100% { opacity: 0.7; transform: scale(0.9) rotate(0deg); }
          50% { opacity: 1; transform: scale(1.1) rotate(5deg); }
        }
        @keyframes sparkle-delayed {
          0%, 100% { opacity: 0.5; transform: scale(0.8); }
          50% { opacity: 0.9; transform: scale(1.05); }
        }
        .animate-sparkle { animation: sparkle 5s infinite ease-in-out; }
        .animate-sparkle-delayed { animation: sparkle-delayed 7s infinite ease-in-out; }
        .animate-morph-slow { animation: morph-slow 22s infinite ease-in-out; }
        .animate-morph-medium { animation: morph-medium 18s infinite ease-in-out; }
        .animate-morph-fast { animation: morph-fast 12s infinite ease-in-out; }
      `}</style>
    </div>
  );
};

export default Background;

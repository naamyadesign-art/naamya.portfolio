
import React, { useState, useEffect, useRef } from 'react';

interface StarProps {
  color: string;
  size: number;
  mousePos: { x: number; y: number };
  speed: number;
}

const Star: React.FC<StarProps> = ({ color, size, mousePos, speed }) => (
  <div 
    className="transition-transform duration-[400ms] ease-out pointer-events-none" 
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
  const requestRef = useRef<number>(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    const animate = () => {
      // Smooth interpolation (lerp)
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * 0.05;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * 0.05;
      
      setMousePos({ x: currentPos.current.x, y: currentPos.current.y });
      requestRef.current = requestAnimationFrame(animate);
    };
    
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-white">
      {/* High-Intensity Grain Overlay */}
      <div className="absolute inset-0 z-[10] opacity-[0.4] mix-blend-multiply pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>
      
      {/* Massive Reactive Blobs - Increased size and vibrancy */}
      <div 
        className="absolute w-[160vw] h-[140vh] rounded-full blur-[140px] opacity-90 animate-morph-slow"
        style={{ 
          background: 'radial-gradient(circle, #ff4d00 0%, transparent 70%)',
          top: '-40%',
          left: '-30%',
          transform: `translate3d(${mousePos.x * 0.03}px, ${mousePos.y * 0.03}px, 0)` 
        }}
      ></div>
      
      <div 
        className="absolute w-[130vw] h-[150vh] rounded-full blur-[160px] opacity-80 animate-morph-medium"
        style={{ 
          background: 'radial-gradient(circle, #ff2d55 0%, transparent 70%)',
          bottom: '-35%',
          right: '-25%',
          transform: `translate3d(${mousePos.x * -0.02}px, ${mousePos.y * -0.02}px, 0)` 
        }}
      ></div>
      
      <div 
        className="absolute w-[100vw] h-[100vh] rounded-full blur-[120px] opacity-60 animate-morph-fast"
        style={{ 
          background: 'radial-gradient(circle, #8ecae6 0%, transparent 70%)',
          top: '20%',
          right: '5%',
          transform: `translate3d(${mousePos.x * 0.05}px, ${mousePos.y * 0.05}px, 0)` 
        }}
      ></div>

      {/* 4-Pointed Stars (Interactive Sparkles) */}
      <div className="absolute top-[10%] left-[10%] z-[20] animate-sparkle">
        <Star color="#ff4d00" size={200} mousePos={mousePos} speed={0.1} />
      </div>
      <div className="absolute top-[50%] right-[15%] z-[20] animate-sparkle-delayed">
        <Star color="#ff2d55" size={160} mousePos={mousePos} speed={-0.08} />
      </div>
      <div className="absolute bottom-[10%] right-[5%] z-[20] animate-sparkle">
        <Star color="#ffb703" size={240} mousePos={mousePos} speed={0.12} />
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
          0%, 100% { opacity: 0.5; transform: rotate(0deg); }
          50% { opacity: 0.8; transform: rotate(10deg); }
        }
        @keyframes sparkle {
          0%, 100% { opacity: 0.7; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        @keyframes sparkle-delayed {
          0%, 100% { opacity: 0.5; transform: scale(0.8); }
          50% { opacity: 0.9; transform: scale(1.05); }
        }
        .animate-sparkle { animation: sparkle 5s infinite ease-in-out; }
        .animate-sparkle-delayed { animation: sparkle-delayed 8s infinite ease-in-out; }
        .animate-morph-slow { animation: morph-slow 20s infinite ease-in-out; }
        .animate-morph-medium { animation: morph-medium 15s infinite ease-in-out; }
        .animate-morph-fast { animation: morph-fast 10s infinite ease-in-out; }
      `}</style>
    </div>
  );
};

export default Background;

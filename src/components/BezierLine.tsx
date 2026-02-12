"use client";
import React, { useRef, useEffect, Dispatch, SetStateAction } from 'react';

interface BezierLineProps {
  setBackground?: Dispatch<SetStateAction<boolean>>;
  color?: string; // Untuk custom warna neon
}

export default function BezierLine({ setBackground, color = "#a3e635" }: BezierLineProps) {
  const path = useRef<SVGPathElement>(null);
  
  // Variabel mutabel untuk animasi (menghindari re-render berlebih)
  let progress = 0;
  let x = 0.5;
  let time = Math.PI / 2;
  let reqId: number | null = null;

  useEffect(() => {
    setPath(progress);
    return () => {
      if (reqId) cancelAnimationFrame(reqId);
    };
  }, []);

  const setPath = (value: number) => {
    const width = window.innerWidth;
    // M = Start Point, Q = Quadratic Bezier (Control Point & End Point)
    path.current?.setAttributeNS(
      null, 
      "d", 
      `M0 50 Q${width * x} ${50 + value} ${width} 50`
    );
  };

  const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a;

  const manageMouseMove = (e: React.MouseEvent) => {
    const { movementY, clientX } = e;
    const pathBound = path.current?.getBoundingClientRect();
    
    if (pathBound) {
      x = (clientX - pathBound.left) / pathBound.width;
      progress += movementY;
      setPath(progress);
    }
    
    if (setBackground) setBackground(true);
  };

  const manageMouseLeave = () => {
    animateOut();
    if (setBackground) setBackground(false);
  };

  const animateOut = () => {
    const newProgress = progress * Math.sin(time);
    progress = lerp(progress, 0, 0.1);
    time += 0.2;
    
    setPath(newProgress);
    
    if (Math.abs(progress) > 0.75) {
      reqId = requestAnimationFrame(animateOut);
    } else {
      resetAnimation();
    }
  };

  const resetAnimation = () => {
    time = Math.PI / 2;
    progress = 0;
  };

  return (
    <div className="relative w-full h-[100px] flex items-center bg-transparent">
      {/* Area interaksi transparan agar mudah terkena mouse */}
      <div 
        onMouseMove={manageMouseMove} 
        onMouseLeave={manageMouseLeave} 
        className="relative z-10 w-full h-10 bg-transparent cursor-none"
      />
      
      <svg className="absolute w-full h-[200px] pointer-events-none overflow-visible">
        <path 
          ref={path} 
          stroke={color}
          fill="none"
          strokeWidth="2"
          className="drop-shadow-[0_0_8px_rgba(163,230,53,0.8)]"
        />
      </svg>
    </div>
  );
}
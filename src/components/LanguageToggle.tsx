"use client";

import { useLanguage } from "../context/language-context";
import { Globe } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();
  const [constraints, setConstraints] = useState({
    top: -500,
    left: -800,
    right: 0,
    bottom: 0,
  });
  const isDraggingRef = useRef(false);

  useEffect(() => {
    const updateConstraints = () => {
      // Boundaries relative to initial bottom-6 right-6 position
      setConstraints({
        top: -(window.innerHeight - 80),
        left: -(window.innerWidth - 80),
        right: 0,
        bottom: 0,
      });
    };

    updateConstraints();
    window.addEventListener("resize", updateConstraints);
    return () => window.removeEventListener("resize", updateConstraints);
  }, []);

  const handleClick = () => {
    if (isDraggingRef.current) return;
    toggleLanguage();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 select-none">
      <motion.div
        drag
        dragConstraints={constraints}
        dragElastic={0.08}
        dragMomentum={false}
        onDragStart={() => {
          isDraggingRef.current = true;
        }}
        onDragEnd={() => {
          setTimeout(() => {
            isDraggingRef.current = false;
          }, 100);
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative group cursor-grab active:cursor-grabbing touch-none"
      >
        {/* Ambient Glow Halo Layer */}
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-gradient-to-r from-red-600/30 via-amber-400/40 to-yellow-300/40 blur-sm group-hover:blur-sm group-hover:scale-105 opacity-50 group-hover:opacity-100 transition-all duration-300 -z-10 pointer-events-none"
        />

        <button
          type="button"
          onClick={handleClick}
          className="relative w-14 h-14 rounded-full bg-muted/30 hover:bg-muted/50 border border-amber-400/40 hover:border-amber-400 shadow-[0_0_20px_rgba(251,191,36,0.3),0_8px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(251,191,36,0.65),0_8px_30px_rgba(0,0,0,0.6)] backdrop-blur-md flex items-center justify-center transition-colors duration-300 opacity-50 hover:opacity-100 gap-1 cursor-grab active:cursor-grabbing"
          aria-label={`Switch language. Current: ${language.toUpperCase()}`}
          title="Drag to reposition / Click to switch language"
        >
          <div>
            <Globe className="w-4 h-4 text-amber-400/90 group-hover:text-amber-300 transition-colors drop-shadow-[0_0_6px_rgba(251,191,36,0.6)] pointer-events-none" />
          </div>
          <span className="text-[11px] sm:text-xs font-bold font-mono tracking-tight flex items-center justify-center select-none pointer-events-none">
            {language === "en" ? (
              <span className="text-amber-300 font-black drop-shadow-[0_0_8px_rgba(251,191,36,0.7)]">
                EN
              </span>
            ) : (
              <span className="text-amber-300 font-black drop-shadow-[0_0_8px_rgba(251,191,36,0.7)]">
                ID
              </span>
            )}
          </span>
        </button>
      </motion.div>
    </div>
  );
}

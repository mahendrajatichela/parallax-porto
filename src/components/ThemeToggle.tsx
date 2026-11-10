"use client";

import { useTheme } from "../context/theme-context";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [constraints, setConstraints] = useState({
    top: -500,
    left: -800,
    right: 0,
    bottom: 0,
  });
  const isDraggingRef = useRef(false);

  useEffect(() => {
    const updateConstraints = () => {
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
    toggleTheme();
  };

  return (
    <div className="fixed bottom-6 right-24 z-50 select-none">
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
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400/30 via-yellow-300/40 to-orange-300/40 blur-sm group-hover:blur-sm group-hover:scale-105 opacity-50 group-hover:opacity-100 transition-all duration-300 -z-10 pointer-events-none"
        />
        <button
          type="button"
          onClick={handleClick}
          className="relative w-14 h-14 rounded-full bg-muted/30 hover:bg-muted/50 border border-amber-400/40 hover:border-amber-400 shadow-[0_0_20px_rgba(251,191,36,0.3),0_8px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(251,191,36,0.65),0_8px_30px_rgba(0,0,0,0.6)] backdrop-blur-md flex items-center justify-center transition-colors duration-300 opacity-50 hover:opacity-100 cursor-grab active:cursor-grabbing"
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          title="Drag to reposition / Click to switch theme"
        >
          <motion.div
            key={theme}
            initial={{ rotate: -30, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-amber-300 drop-shadow-[0_0_6px_rgba(251,191,36,0.6)]" />
            ) : (
              <Moon className="w-5 h-5 text-amber-300 drop-shadow-[0_0_6px_rgba(251,191,36,0.6)]" />
            )}
          </motion.div>
        </button>
      </motion.div>
    </div>
  );
}

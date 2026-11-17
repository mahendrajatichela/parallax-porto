"use client";

import { useTheme } from "../context/theme-context";
import { useLanguage } from "../context/language-context";
import { Settings, Sun, Moon, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

// Square ink blocks that match the editorial header buttons.
const iconClass = "text-secondary-foreground";

const surfaceClass =
  "bg-secondary hover:bg-primary border border-secondary hover:border-primary " +
  "flex items-center justify-center transition-colors duration-300";

const actionButtonClass =
  `relative w-12 h-12 gap-1 ${surfaceClass} shadow-[0_6px_20px_rgba(0,0,0,0.18)]`;

const actionVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.6 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

export function SettingsToggle() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const [constraints, setConstraints] = useState({
    top: -500,
    left: -800,
    right: 0,
    bottom: 0,
  });
  const isDraggingRef = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

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

  // Close menu when clicking outside or pressing Escape
  useEffect(() => {
    if (!open) return;
    const handlePointer = (e: PointerEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", handlePointer);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("pointerdown", handlePointer);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  const handleMainClick = () => {
    if (isDraggingRef.current) return;
    setOpen((prev) => !prev);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 select-none">
      <motion.div
        ref={containerRef}
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
        className="relative touch-none"
      >
        {/* Expanded actions */}
        <AnimatePresence>
          {open && (
            <motion.div
              id="settings-menu"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                visible: { transition: { staggerChildren: 0.05 } },
                hidden: { transition: { staggerChildren: 0.03, staggerDirection: -1 } },
              }}
              className="absolute bottom-full right-1 mb-3 flex flex-col items-center gap-3"
            >
              <motion.button
                type="button"
                variants={actionVariants}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                onClick={toggleLanguage}
                className={actionButtonClass}
                aria-label={`Switch language. Current: ${language.toUpperCase()}`}
                title="Switch language"
              >
                <Globe className={`w-3.5 h-3.5 pointer-events-none ${iconClass}`} />
                <span className={`text-[11px] font-black font-mono pointer-events-none ${iconClass}`}>
                  {language === "en" ? "EN" : "ID"}
                </span>
              </motion.button>

              <motion.button
                type="button"
                variants={actionVariants}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                onClick={toggleTheme}
                className={actionButtonClass}
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                title="Switch theme"
              >
                <motion.span
                  key={theme}
                  initial={{ rotate: -30, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="pointer-events-none"
                >
                  {theme === "dark" ? (
                    <Sun className={`w-5 h-5 ${iconClass}`} />
                  ) : (
                    <Moon className={`w-5 h-5 ${iconClass}`} />
                  )}
                </motion.span>
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main settings button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative group cursor-grab active:cursor-grabbing"
        >
          <button
            type="button"
            onClick={handleMainClick}
            aria-expanded={open}
            aria-controls="settings-menu"
            aria-label={open ? "Close settings" : "Open settings"}
            title="Drag to reposition / Click to open settings"
            className={`relative w-14 h-14 ${surfaceClass} shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:opacity-100 cursor-grab active:cursor-grabbing ${
              open ? "opacity-100" : "opacity-70"
            }`}
          >
            <motion.span
              animate={{ rotate: open ? 90 : 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="pointer-events-none"
            >
              <Settings className={`w-5 h-5 ${iconClass}`} />
            </motion.span>
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}

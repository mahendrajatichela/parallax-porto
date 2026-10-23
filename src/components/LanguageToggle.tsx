"use client";

import { useLanguage } from "../context/language-context";
import MagneticCursor from "./MagneticCursor";
import { Globe } from "lucide-react";

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <MagneticCursor>
        <div className="relative group">
          {/* Ambient Glow Halo Layer */}
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-full bg-gradient-to-r from-red-600/30 via-amber-400/40 to-yellow-300/40 blur-sm group-hover:blur-sm group-hover:scale-105 opacity-50 group-hover:opacity-100 transition-all duration-300 -z-10"
          />

          <button
            type="button"
            onClick={toggleLanguage}
            className="relative w-14 h-14 rounded-full bg-muted/30 hover:bg-muted/50 border border-amber-400/40 hover:border-amber-400 shadow-[0_0_20px_rgba(251,191,36,0.3),0_8px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(251,191,36,0.65),0_8px_30px_rgba(0,0,0,0.6)] backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:scale-105 opacity-50 hover:opacity-100 cursor-pointer gap-1"
            aria-label={`Switch language. Current: ${language.toUpperCase()}`}
            title="Switch Language (EN / ID)"
          >
            <div>
              <Globe className="w-4 h-4 text-amber-400/90 group-hover:text-amber-300 transition-colors drop-shadow-[0_0_6px_rgba(251,191,36,0.6)]" />
            </div>
            <span className="text-[11px] sm:text-xs font-bold font-mono tracking-tight flex items-center justify-center select-none">
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
        </div>
      </MagneticCursor>
    </div>
  );
}

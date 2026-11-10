"use client";

import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import { Menu, X, Sparkles, Send } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MagneticCursor from "./MagneticCursor";

import { useLanguage } from "../context/language-context";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      // Muncul ketika user scroll melewati landing page awal (misal > 70% tinggi layar)
      if (window.scrollY > window.innerHeight * 0.7) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setMobileMenuOpen(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: t.nav.about, href: "#about" },
    { name: t.nav.skills, href: "#skills" },
    { name: t.nav.projects, href: "#projects" },
    { name: t.nav.contact, href: "#contact" },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed top-3 left-0 z-50 rounded-full w-[95%] left-[2.5%] bg-secondary/45 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.3)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.6)]"
        >
          {/* Ambient subtle glow: Red and Gold */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-10 left-1/4 h-16 w-48 rounded-full bg-red-600/10 blur-2xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-10 right-1/4 h-16 w-48 rounded-full bg-amber-400/10 blur-2xl"
          />

          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
            {/* Brand / Logo */}
            <MagneticCursor>
              <Link href="/" className="flex items-center gap-2 group">
                <span className="text-2xl font-black font-montserrat tracking-tight bg-gradient-to-r from-red-500 via-amber-400 to-amber-200 bg-clip-text text-transparent group-hover:opacity-90 transition-opacity">
                  PorChe
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-red-950/70 border border-red-500/30 text-amber-300">
                  <Sparkles className="w-2.5 h-2.5 text-amber-400" />
                  Portfolio
                </span>
              </Link>
            </MagneticCursor>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group relative px-3 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-300 rounded-lg hover:bg-zinc-100/60 dark:hover:bg-zinc-900/60 border border-transparent hover:border-slate-300/60 dark:hover:border-slate-700/60 transition-all duration-200"
                >
                  <span className="flex items-center gap-1.5">
                    <span className="h-1 w-1 rounded-full bg-red-500 group-hover:bg-amber-400 transition-colors" />
                    {item.name}
                  </span>
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden flex items-center justify-center h-10 w-10 rounded-xl bg-white/90 dark:bg-zinc-900/90 border border-slate-300/60 dark:border-slate-700/60 text-slate-600 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-300 hover:border-amber-400/50 hover:bg-red-50/40 dark:hover:bg-red-950/40 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-slate-200/80 dark:border-slate-800/80 bg-white/95 dark:bg-[#0d090b]/95 backdrop-blur-xl">
              <nav className="container mx-auto px-4 flex flex-col gap-2 py-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center gap-2.5 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-300 hover:bg-zinc-100/80 dark:hover:bg-zinc-900/80 rounded-lg border border-transparent hover:border-slate-200 dark:hover:border-slate-800 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </motion.header>
      )}
    </AnimatePresence>
  );
}

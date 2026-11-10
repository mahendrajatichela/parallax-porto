"use client";

import Link from "next/link";
import { User, Code2, FolderKanban, Mail, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import MagneticCursor from "./MagneticCursor";

import { useLanguage } from "../context/language-context";
import { useHeaderVisible } from "../lib/use-header-visible";

export function Header() {
  // Muncul ketika user scroll melewati landing page awal (> 70% tinggi layar)
  const isVisible = useHeaderVisible();
  const { t } = useLanguage();

  const navItems = [
    { name: t.nav.about, href: "#about", icon: User },
    { name: t.nav.skills, href: "#skills", icon: Code2 },
    { name: t.nav.projects, href: "#projects", icon: FolderKanban },
    { name: t.nav.contact, href: "#contact", icon: Mail },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Brand / Logo — top left */}
          <motion.div
            key="brand"
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed top-6 left-6 z-50"
          >
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
          </motion.div>

          {/* Icon navigation — bottom center */}
          <motion.header
            key="nav"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-x-0 bottom-7 z-50 w-fit mx-auto rounded-full bg-secondary/45 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.3)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.6)]"
          >
            {/* Ambient subtle glow: Red and Gold */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-8 left-0 h-12 w-24 rounded-full bg-red-600/10 blur-2xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-8 right-0 h-12 w-24 rounded-full bg-amber-400/10 blur-2xl"
            />

            <nav className="relative z-10 flex items-center gap-1 sm:gap-2 px-2 h-16">
              {navItems.map(({ name, href, icon: Icon }) => (
                <Link
                  key={href}
                  href={href}
                  aria-label={name}
                  className="group relative flex items-center justify-center h-12 w-12 rounded-full text-slate-600 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-300 hover:bg-zinc-100/60 dark:hover:bg-zinc-900/60 border border-transparent hover:border-slate-300/60 dark:hover:border-slate-700/60 transition-all duration-200"
                >
                  <Icon className="w-5 h-5" />
                  {/* Tooltip label */}
                  <span className="pointer-events-none absolute bottom-full mb-2 whitespace-nowrap rounded-md px-2 py-1 text-xs font-medium bg-zinc-900 text-amber-300 dark:bg-zinc-100 dark:text-[#800000] opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 group-focus-visible:opacity-100 group-focus-visible:translate-y-0 transition-all duration-200">
                    {name}
                  </span>
                </Link>
              ))}
            </nav>
          </motion.header>
        </>
      )}
    </AnimatePresence>
  );
}

"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import MagneticCursor from "./MagneticCursor";

import { useLanguage } from "../context/language-context";

const SECTION_IDS = ["about", "projects", "skills", "contact"] as const;
type SectionId = (typeof SECTION_IDS)[number];

/** Tracks which section currently sits under the middle of the viewport. */
function useActiveSection(): SectionId {
  const [active, setActive] = useState<SectionId>("about");

  useEffect(() => {
    const update = () => {
      const probe = window.innerHeight * 0.4;
      let current: SectionId = "about";
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= probe) current = id;
      }
      // At the very bottom the last section may be too short to reach the probe line.
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
        current = SECTION_IDS[SECTION_IDS.length - 1];
      }
      setActive(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return active;
}

export function Header() {
  const { t } = useLanguage();
  const active = useActiveSection();

  const navItems: { id: SectionId; name: string }[] = [
    { id: "about", name: t.nav.about },
    { id: "projects", name: t.nav.projects },
    { id: "skills", name: t.nav.skills },
    { id: "contact", name: t.nav.contact },
  ];
  const activeName = navItems.find((item) => item.id === active)?.name ?? t.nav.about;

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md"
    >
      <div className="mx-auto flex h-16 md:h-20 max-w-[1400px] items-center justify-between gap-4 px-4 sm:px-8">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 text-primary">
          <span className="font-display text-2xl md:text-3xl font-bold tracking-tight">
            porche
          </span>
          <span aria-hidden="true" className="h-5 w-px bg-border" />
          <span className="font-mono text-sm md:text-base tracking-[0.15em]">
            PRTFL
          </span>
        </Link>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navItems.map(({ id, name }) => (
            <Link
              key={id}
              href={`#${id}`}
              aria-current={active === id ? "true" : undefined}
              className={`font-mono text-[15px] underline-offset-8 decoration-1 hover:text-primary hover:underline transition-colors ${
                active === id ? "text-primary underline" : "text-foreground"
              }`}
            >
              {name}
            </Link>
          ))}
        </nav>

        {/* Current-section indicator */}
        <MagneticCursor>
          <a
            href={`#${active}`}
            aria-label={`Current section: ${activeName}`}
            className="flex h-10 md:h-12 min-w-[9rem] md:min-w-[11rem] items-center justify-between gap-3 md:gap-6 bg-primary px-4 md:px-6 font-mono text-sm md:text-base font-medium text-primary-foreground hover:opacity-90 transition-opacity"
          >
            <span className="relative overflow-hidden">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={active}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="block"
                >
                  {activeName}
                </motion.span>
              </AnimatePresence>
            </span>
            <ArrowUpRight className="h-4 w-4 md:h-5 md:w-5" />
          </a>
        </MagneticCursor>
      </div>
    </motion.header>
  );
}

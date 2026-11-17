"use client";

import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import MagneticCursor from "../../MagneticCursor";
import { useLanguage } from "@/src/context/language-context";

const socials = [
  { label: "GitHub", href: "https://github.com/mahendrajatichela", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/chela-mahendrajati/", icon: Linkedin },
  { label: "Email", href: "mailto:chelamahendra@gmail.com", icon: Mail },
];

/** Small L-shaped corner marks framing the stage, like a viewfinder. */
function Corner({ className }: { className: string }) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute h-8 w-8 border-foreground/50 ${className}`}
    />
  );
}

export function Landing() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative bg-background pt-28 md:pt-40 pb-16">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-center font-bold uppercase leading-[0.9] tracking-[-0.04em] text-foreground text-[10.5vw] md:text-[9vw] xl:text-[8.5rem]"
        >
          Mahendrajati Chela
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 md:mt-10 text-center font-mono text-base md:text-xl tracking-wide text-muted-foreground"
        >
          Portfolio of a <span className="font-semibold text-primary">{t.landing.role}</span>...
        </motion.p>

        {/* Stage */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mx-auto mt-12 md:mt-16 max-w-5xl"
        >
          <div className="flex items-center justify-between px-2 md:px-12 pb-4 font-mono text-xs md:text-sm text-muted-foreground">
            <span>Hi, I&apos;m Chela</span>
            <div className="flex items-center gap-1">
              {socials.map(({ label, href, icon: Icon }) => (
                <MagneticCursor key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center text-foreground/80 hover:text-primary transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </MagneticCursor>
              ))}
            </div>
          </div>

          <div className="relative bg-grid border-y border-border/60 px-6 py-10 md:py-14">
            <Corner className="left-6 md:left-14 top-6 border-l border-t" />
            <Corner className="right-6 md:right-14 top-6 border-r border-t" />
            <Corner className="left-6 md:left-14 bottom-6 border-l border-b" />
            <Corner className="right-6 md:right-14 bottom-6 border-r border-b" />

            <div className="flex flex-col items-center">
              <div className="group relative overflow-hidden">
                <Image
                  src="/images/bnw.jpeg"
                  alt="Mahendrajati Chela"
                  width={280}
                  height={350}
                  priority
                  className="h-64 w-52 md:h-80 md:w-64 object-cover grayscale contrast-110 sepia-[.25] mix-blend-multiply dark:mix-blend-normal transition-all duration-500 group-hover:grayscale-0 group-hover:sepia-0"
                />
              </div>

              <p className="mt-8 font-mono text-2xl md:text-4xl font-medium tracking-[0.6em] text-primary pl-[0.6em]">
                PORTFOLIO
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between px-2 md:px-12 pt-4 font-mono text-[11px] md:text-xs uppercase tracking-widest text-muted-foreground">
            <a href="#projects" className="flex items-center gap-2 hover:text-primary transition-colors">
              <ArrowDown className="h-3.5 w-3.5" />
              {t.landing.letsGo}
            </a>
            <span>01 / 04</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

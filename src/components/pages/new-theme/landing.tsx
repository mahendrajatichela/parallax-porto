"use client";

import { Button } from "@/src/components/ui/button";
import { Badge } from "@/src/components/ui/badge";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import MagneticCursor from "../../MagneticCursor";
import { useLanguage } from "@/src/context/language-context";

export function Landing() {
  const container = useRef(null);
  const { t } = useLanguage();

  return (
    <section
      ref={container}
      className="relative h-screen overflow-hidden bg-gradient-to-b from-slate-50 to-rose-50 dark:from-secondary dark:to-[#2a0810]"
    >
      {/* Ambient Glow Effect (Maroon) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-[#3b0811]/30 blur-3xl"
      />
      {/* Content */}
      <div className="relative z-20 container h-full flex items-center justify-center">
        <div className="mx-auto max-w-3xl text-center">
          {/* Overlapping Text & Image Container */}
          <hr className="border-primary mt-20 w-full" />
          <div className="relative flex justify-center my-6 py-4 w-full">
            {/* Background Layer: Big Typography */}
            <motion.h1
              className="absolute -top-28 z-20 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter bg-gradient-to-tr from-primary via-red-950 to-primary bg-clip-text text-transparent select-none font-montserrat"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              MAHENDRAJATI CHELA
            </motion.h1>

            {/* Foreground Layer: Overlapping Image */}
            <motion.div
              className="relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              <div className="relative group overflow-hidden shadow-2xl transition-all duration-500 -rotate-6">
                <Image
                  src="/images/bnw.jpeg"
                  alt="Mahendrajati Chela"
                  width={280}
                  height={350}
                  className="w-40 h-52 sm:w-52 sm:h-64 md:w-60 md:h-72 object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  priority
                />
              </div>
            </motion.div>
            <motion.h1
              className="absolute bottom-0 z-20 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-arimo font-black tracking-wider whitespace-nowrap bg-gradient-to-tr from-muted via-muted/50 to-muted bg-clip-text text-transparent select-none"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              PORTOFOLIO
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge
              variant="secondary"
              className="mb-4 backdrop-blur-sm border-muted text-muted bg-muted/20"
            >
              {t.landing.role}
            </Badge>
          </motion.div>

          <motion.div
            className="flex gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <MagneticCursor>
              <Button
                size="icon"
                variant="ghost"
                asChild
                className="text-muted/80 hover:bg-transparent hover:text-muted"
              >
                <a
                  href="https://github.com/mahendrajatichela"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            </MagneticCursor>
            <MagneticCursor>
              <Button
                size="icon"
                variant="ghost"
                asChild
                className="text-muted/80 hover:bg-transparent hover:text-muted"
              >
                <a
                  href="https://www.linkedin.com/in/chela-mahendrajati/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </MagneticCursor>
            <MagneticCursor>
              <Button
                size="icon"
                variant="ghost"
                asChild
                className="text-muted/80 hover:bg-transparent hover:text-muted"
              >
                <a href="mailto:chelamahendra@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </MagneticCursor>
          </motion.div>

          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <MagneticCursor>
                <Button
                  size="lg"
                  asChild
                  className="bg-transparent hover:bg-gradient-to-br hover:from-primary hover:via-red-950 hover:to-primary text-muted/70 hover:text-white shadow-none hover:shadow-primary/40 hover:shadow-xl hover:border hover:border-primary/50"
                >
                  <a href="#projects">
                    {t.landing.letsGo} <ArrowRight className="ml-2 h-4 w-4 rotate-90" />
                  </a>
                </Button>
              </MagneticCursor>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

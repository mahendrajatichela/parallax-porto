"use client";

import { Button } from "@/src/components/ui/button";
import { Badge } from "@/src/components/ui/badge";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import BlurryCursor from "./BurryCursor";
import MagneticCursor from "./MagneticCursor";

export function Hero() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const [isActive, setIsActive] = useState(false);

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);

  return (
    <section ref={container} className="relative h-screen overflow-hidden">
      {/* Parallax Background */}
      <motion.div style={{ y }} className="absolute inset-0 h-full w-full">
        <BlurryCursor isActive={isActive} />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/60 via-emerald-900/30 to-background z-10" />
        <Image
          src={"/images/bg-bw.jpg"}
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 container h-full flex items-center justify-center">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge
              variant="secondary"
              className="mb-4 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
            >
              Frontend Developer
            </Badge>
          </motion.div>

          <div
            onMouseOver={() => {
              setIsActive(true);
            }}
            onMouseLeave={() => {
              setIsActive(false);
            }}
          >
            <motion.h1
              className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              MAHENDRAJATI CHELA
            </motion.h1>
          </div>

          <motion.p
            className="text-lg text-white/90 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I build responsive, accessible, and performant web applications
            using modern technologies like React, Next.js, Vue.js and
            TypeScript.
          </motion.p>

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
                className="bg-gradient-to-br from-green-400 via-emerald-500 to-teal-900 text-white hover:bg-gradient-to-br from-green-500 via-emerald-600 to-teal-900 shadow-lg hover:shadow-xl"
              >
                <a href="#projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </MagneticCursor>
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
                className="text-emerald-600  hover:text-white hover:bg-transparent"
              >
                <a
                  href="https://github.com"
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
                className="text-emerald-600 hover:text-white hover:bg-transparent"
              >
                <a
                  href="https://linkedin.com"
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
                className="text-emerald-600 hover:text-white hover:bg-transparent"
              >
                <a href="mailto:hello@example.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </MagneticCursor>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

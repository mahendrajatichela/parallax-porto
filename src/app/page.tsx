"use client";

import { useEffect } from "react";
import { Header } from "@/src/components/header";
// import { Hero } from "@/src/components/pages/hero";
// import { Skills } from "@/src/components/pages/skills";
// import { ParallaxSection } from "@/src/components/pages/parallax-section";
// import { Projects } from "@/src/components/pages/projects";
// import { Contact } from "@/src/components/pages/contact";
import { Footer } from "@/src/components/footer";
import Profile from "../components/pages/profile";
import StickyCursor from "../components/StickyCursor";
import { Play } from "../components/pages/play-with-me";
import { Landing } from "../components/pages/new-theme/landing";
import { Contact } from "../components/pages/new-theme/contact";
import { Projects } from "../components/pages/new-theme/projects";
import { Skills } from "../components/pages/new-theme/skills";

import { LanguageProvider } from "../context/language-context";
import { SettingsToggle } from "../components/SettingsToggle";

export default function Home() {
  useEffect(() => {
    // Smooth scroll setup
    const loadLenis = async () => {
      const Lenis = (await import("lenis")).default;
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    };

    loadLenis();
  }, []);

  return (
    <LanguageProvider>
      <main className="min-h-screen bg-background">
        <StickyCursor />
        <SettingsToggle />
        <Header />
        <Landing />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </LanguageProvider>
  );
}

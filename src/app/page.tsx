"use client"

import { useEffect } from "react"
import { Header } from "@/src/components/header"
import { Hero } from "@/src/components/pages/hero"
import { Skills } from "@/src/components/pages/skills"
import { ParallaxSection } from "@/src/components/pages/parallax-section"
import { Projects } from "@/src/components/pages/projects"
import { Contact } from "@/src/components/pages/contact"
import { Footer } from "@/src/components/footer"
import Profile from "../components/pages/profile"

export default function Home() {
  useEffect(() => {
    // Smooth scroll setup
    const loadLenis = async () => {
      const Lenis = (await import('lenis')).default
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      })

      function raf(time: number) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)
    }

    loadLenis()
  }, [])

  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Profile />
      <Skills />
      <ParallaxSection />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}


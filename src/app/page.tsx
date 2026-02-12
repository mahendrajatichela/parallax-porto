"use client"

import { useEffect } from "react"
import { Header } from "@/src/components/header"
import { Hero } from "@/src/components/hero"
import { Skills } from "@/src/components/skills"
import { ParallaxSection } from "@/src/components/parallax-section"
import { Projects } from "@/src/components/projects"
import { Contact } from "@/src/components/contact"
import { Footer } from "@/src/components/footer"

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
      <Skills />
      <ParallaxSection />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}


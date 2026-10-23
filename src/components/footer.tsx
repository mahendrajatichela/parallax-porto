"use client"

import { Github, Linkedin, Instagram, Mail, ArrowUp, Heart, Sparkles } from "lucide-react"
import MagneticCursor from "./MagneticCursor"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }


  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/mahendrajatichela",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/chela-mahendrajati",
      icon: Linkedin,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/chelaaaa_",
      icon: Instagram,
    },
    {
      name: "Email",
      href: "mailto:chelamahendra@gmail.com",
      icon: Mail,
    },
  ]

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#161619] via-[#121215] to-[#0d0d10] text-slate-300 pt-16 pb-12">
      {/* Decorative Top Border: Tri-color Gradient (Merah, Emas, Abu) */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-red-700 via-amber-400 to-slate-500 opacity-90 shadow-[0_0_12px_rgba(245,158,11,0.4)]" />

      {/* Ambient background glow: Maroon */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/4 h-64 w-64 rounded-full bg-[#3b0811]/20 blur-3xl"
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex sm:flex-row flex-col gap-4 justify-between pb-12 border-b border-slate-800/80">
          {/* Brand & Tagline */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-black font-montserrat tracking-tight bg-gradient-to-r from-red-500 via-amber-400 to-amber-200 bg-clip-text text-transparent">
                PorChe
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-red-950/70 border border-red-500/30 text-amber-300">
                <Sparkles className="w-3 h-3 text-amber-400" />
                Portfolio
              </span>
            </div>
            <p className="text-sm text-slate-400  leading-relaxed">
              Crafting immersive, interactive web experiences with modern architecture, dynamic motion, and bold design.
            </p>
            {/* Status Indicator */}
            <div className="inline-flex items-center gap-2 text-xs text-slate-400 bg-zinc-900/80 border border-slate-800 rounded-full px-3 py-1.5 shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
              </span>
              <span>Available for freelance & full-time roles</span>
            </div>
          </div>

          {/* Socials & Back to Top */}
          <div className="space-y-4 md:text-right flex flex-col md:items-end justify-between">
            <div className="space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-amber-400 font-mono">
                Connect With Me
              </h3>
              <div className="flex gap-2.5 md:justify-end">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <MagneticCursor key={social.name}>
                      <a
                        href={social.href}
                        target={social.href.startsWith("http") ? "_blank" : undefined}
                        rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        aria-label={social.name}
                        className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900/90 border border-slate-700/60 text-slate-400 hover:text-amber-300 hover:border-amber-400/60 hover:bg-red-950/40 hover:shadow-[0_0_15px_rgba(251,191,36,0.25)]"
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    </MagneticCursor>
                  )
                })}
              </div>
            </div>

            {/* Back to top button */}
            <MagneticCursor>
              <button
                onClick={scrollToTop}
                className="inline-flex w-fit items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium bg-zinc-900/90 border border-slate-700/60 text-slate-300 hover:text-amber-300 hover:border-red-500/50 hover:bg-red-950/30 shadow-sm"
              >
                <span>Back to top</span>
                <ArrowUp className="h-3.5 w-3.5 text-amber-400" />
              </button>
            </MagneticCursor>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="flex items-center gap-1.5 flex-wrap justify-center sm:justify-start">
            <span>© 2026</span>
            <span className="font-semibold text-amber-400">Chela Mahendrajati</span>
            <span className="text-slate-600">•</span>
            <span>All rights reserved.</span>
          </p>

          <p className="flex items-center gap-1 text-slate-400">
            <span>Build with</span>
            <Heart className="h-3.5 w-3.5 text-red-500 fill-red-500" />
            <span className="text-slate-300 font-medium">Next.js, Tailwind CSS, and shadcn/ui.</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

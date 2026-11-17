"use client"

import { Github, Linkedin, Instagram, Mail, ArrowUp, Heart } from "lucide-react"
import MagneticCursor from "./MagneticCursor"
import { useLanguage } from "../context/language-context"

export function Footer() {
  const { t } = useLanguage()
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
    <footer className="bg-background border-t border-foreground/30 pt-16 pb-28 md:pb-12">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between pb-12 border-b border-border">
          {/* Brand & Tagline */}
          <div className="space-y-5">
            <div className="flex items-center gap-3 text-primary">
              <span className="font-display text-4xl font-bold tracking-tight">porche</span>
              <span aria-hidden="true" className="h-6 w-px bg-border" />
              <span className="font-mono tracking-[0.15em]">PRTFL</span>
            </div>
            <p className="max-w-md font-mono text-sm leading-relaxed text-muted-foreground">
              {t.footer.tagline}
            </p>
            <div className="inline-flex items-center gap-2 border border-foreground/30 px-3 py-1.5 font-mono text-xs text-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              {t.footer.status}
            </div>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex flex-col gap-6 md:items-end">
            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground md:text-right">
                {t.footer.connectWithMe}
              </h3>
              <div className="flex gap-2.5">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <MagneticCursor key={social.name}>
                      <a
                        href={social.href}
                        target={social.href.startsWith("http") ? "_blank" : undefined}
                        rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        aria-label={social.name}
                        className="flex h-10 w-10 items-center justify-center border border-foreground/40 text-foreground hover:bg-secondary hover:text-secondary-foreground transition-colors"
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    </MagneticCursor>
                  )
                })}
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex w-fit items-center gap-3 bg-primary px-4 py-2.5 font-mono text-xs font-medium uppercase tracking-widest text-primary-foreground hover:opacity-90 transition-opacity"
            >
              {t.footer.backToTop}
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-muted-foreground">
          <p className="flex flex-wrap items-center justify-center gap-1.5 sm:justify-start">
            <span>© 2026</span>
            <span className="font-semibold text-primary">Chela Mahendrajati</span>
            <span>·</span>
            <span>{t.footer.allRightsReserved}</span>
          </p>
          <p className="flex items-center gap-1.5">
            <span>{t.footer.builtWith}</span>
            <Heart className="h-3.5 w-3.5 fill-primary text-primary" />
            <span className="text-foreground">Next.js, Tailwind CSS, and shadcn/ui.</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

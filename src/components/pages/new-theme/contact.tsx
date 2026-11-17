"use client";

import { ArrowUpRight, Github, Instagram, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import MagneticCursor from "../../MagneticCursor";
import { useLanguage } from "@/src/context/language-context";
import { SectionHeading } from "./section-heading";

const socials = [
  { label: "GitHub", href: "https://github.com/mahendrajatichela", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/chela-mahendrajati", icon: Linkedin },
  { label: "Instagram", href: "https://www.instagram.com/chelaaaa_", icon: Instagram },
];

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="bg-background py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
        <SectionHeading index="04" label={t.nav.contact} title={t.contact.title} subtitle={t.contact.subtitle} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mt-12 md:mt-16 border border-foreground/30 bg-grid p-6 md:p-12"
        >
          <p className="font-display text-2xl md:text-4xl font-bold tracking-tight text-foreground">
            {t.contact.cardTitle}
          </p>

          <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <MagneticCursor>
              <a
                href="mailto:chelamahendra@gmail.com"
                className="inline-flex w-fit items-center gap-6 bg-primary px-6 py-4 font-mono text-base font-medium text-primary-foreground hover:opacity-90 transition-opacity"
              >
                <Mail className="h-5 w-5" />
                {t.contact.sendEmail}
                <ArrowUpRight className="h-5 w-5" />
              </a>
            </MagneticCursor>

            <div className="flex flex-col gap-3 md:items-end">
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {t.contact.socialText}
              </p>
              <div className="flex gap-3">
                {socials.map(({ label, href, icon: Icon }) => (
                  <MagneticCursor key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex h-12 w-12 items-center justify-center border border-foreground/40 text-foreground hover:bg-secondary hover:text-secondary-foreground transition-colors"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  </MagneticCursor>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const projects = [
  {
    title: "XL Smart - Migration to Tencent cloud",
    description:
      "Migration consent management from  cloud AWS to Tencent. And migration smartfren web app from onPrem to Tencent",
    technologies: ["Next.js", "Tailwind CSS", "Typescript"],
    dateRange: "Maret 2026 - September 2026",
    assosiation: "Digital Center",
    demo: "#",
    id: "acc-1",
  },
  {
    title: "IFG Life - OneForce Platform",
    description:
      "Major alteration and enhancement of the OneForce Platform for IFG Life.",
    technologies: ["Next.js", "Redux Toolkit", "Tailwind CSS", "Typescript"],
    dateRange: "October 2025 - December 2025",
    assosiation: "Digital Center",
    demo: "#",
    id: "acc-2",
  },
  {
    title: "Bahana - KIK Efek Beragun Aset",
    description:
      "Collective Investment Contract – Asset-Backed Securities implementation.",
    technologies: ["Next.js", "Zustand", "Tailwind CSS", "Typescript"],
    dateRange: "April 2025 - September 2025",
    assosiation: "Digital Center",
    demo: "#",
    id: "acc-3",
  },
  {
    title: "Maybank - Octopus Project",
    description:
      "Major project implementation for Maybank's digital transformation.",
    technologies: ["JSP", "JQuery", "Bootstrap"],
    dateRange: "March 2024 - March 2025",
    assosiation: "Digital Center",
    demo: "#",
    id: "acc-4",
  },
  {
    title: "KB Bank - Revamp KB Bank",
    description:
      "Complete revamp and modernization of KB Bank's digital platform.",
    technologies: ["JSP", "JQuery", "Bootstrap", "JexFrame"],
    dateRange: "January 2024 - March 2024",
    assosiation: "Digital Center",
    demo: "#",
    id: "acc-5",
  },
  {
    title: "OML Innovoice",
    description: "Development and implementation of OML Innovoice platform.",
    technologies: ["React.js", "Tailwind CSS"],
    dateRange: "January 2023 - December 2023",
    assosiation: "Digital Center",
    demo: "#",
    id: "acc-6",
  },
  {
    title: "Maybank - AA Project",
    description: "Implementation for Maybank's digital transformation.",
    technologies: ["JSP", "JQuery", "Bootstrap"],
    dateRange: "August 2022 - December 2022",
    assosiation: "Digital Center",
    demo: "#",
    id: "acc-7",
  },
  {
    title: "Renstra Aplication",
    description:
      "Development and implementation of Renstra Application platform.",
    technologies: ["Nuxt.js", "Vue.js", "Tailwind CSS", "Typescript"],
    dateRange: "January 2022 - July 2022",
    assosiation: "Lembaga Pendidikan Al Firdaus",
    demo: "#",
    id: "acc-8",
  },
];

import { useLanguage } from "@/src/context/language-context";
import { SectionHeading } from "./section-heading";

export function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
        <SectionHeading index="02" label={t.nav.projects} title={t.projects.title} />

        <Accordion defaultValue={[]} className="mt-12 md:mt-16 border-t border-foreground/30">
          {t.projects.items.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <AccordionItem value={project.id} className="border-b border-foreground/30">
                <AccordionTrigger className="group rounded-none items-center gap-4 md:gap-8 py-5 md:py-7 px-1 text-foreground hover:no-underline hover:text-primary aria-expanded:text-primary transition-colors [&_[data-slot=accordion-trigger-icon]]:size-5 [&_[data-slot=accordion-trigger-icon]]:text-current">
                  <span className="w-10 shrink-0 font-mono text-xs md:text-sm text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 font-display text-lg md:text-3xl font-bold tracking-tight">
                    {project.title}
                  </span>
                  <span className="hidden lg:block font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    {project.dateRange}
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid gap-6 pb-6 pl-[3.5rem] md:pl-[4.5rem] pr-8 md:grid-cols-[2fr_1fr]">
                    <p className="font-mono text-sm md:text-base leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                    <div className="space-y-3 font-mono text-xs">
                      <p className="uppercase tracking-widest text-muted-foreground">
                        {project.association} · <span className="lg:hidden">{project.dateRange}</span>
                      </p>
                      <ul className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <li key={tech} className="border border-primary/50 px-2 py-1 text-primary">
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

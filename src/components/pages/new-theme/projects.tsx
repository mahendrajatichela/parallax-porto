"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Badge } from "@/src/components/ui/badge";
import { FolderGit2 } from "lucide-react";
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

export function Projects() {
  const { t } = useLanguage();

  return (
    <section
      id="projects"
      className="py-24 md:py-32 bg-gradient-to-b from-[#2a0810] to-[#1a1a1e] text-slate-100"
    >
      <div className="mx-auto md:w-3/4">
        <div className="text-center">
          <div className="relative">
            <FolderGit2 className="text-xl text-red-600/40 opacity-50 -top-10 absolute left-[35%] rotate-6 transform -translate-x-1/2 -z-10 w-20 h-20" />
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 bg-gradient-to-r from-red-500 via-amber-400 to-amber-200 bg-clip-text text-transparent">
              {t.projects.title}
            </h2>
          </div>
        </div>

        {/* <BezierLine color="#d1d5db" /> */}
        <br />
        <div>
          <Accordion defaultValue={[]} className="pt-5 px-5">
            {t.projects.items.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionItem key={project.id} value={project.id} className="border-slate-800/80">
                  <AccordionTrigger className="relative isolate my-2 overflow-hidden w-full py-3 px-5 rounded-full text-slate-200 transition-all duration-300 hover:text-amber-200 hover:no-underline aria-expanded:text-amber-300 aria-expanded:shadow-md aria-expanded:shadow-red-950/20 before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-r before:from-red-800/40 before:via-amber-500/20 before:to-slate-700/40 aria-expanded:before:from-red-800/60 aria-expanded:before:via-amber-500/30 aria-expanded:before:to-slate-700/50 before:origin-left before:scale-x-0 hover:before:scale-x-100 aria-expanded:before:scale-x-100 before:transition-all before:duration-500 before:ease-out [&_[data-slot=accordion-trigger-icon]]:transition-colors [&_[data-slot=accordion-trigger-icon]]:text-slate-400 [&_[data-slot=accordion-trigger-icon]]:group-hover/accordion-trigger:text-amber-300 [&_[data-slot=accordion-trigger-icon]]:group-aria-expanded/accordion-trigger:text-amber-400">
                    {project.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="py-3 px-5 rounded-xl bg-slate-900/60 border border-amber-400/25 text-slate-300">
                      {project.description}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

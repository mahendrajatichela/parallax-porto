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

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-muted/50">
      <div className="mx-auto">
        <div className="text-center">
          <div className="relative">
            <FolderGit2 className="text-xl text-emerald-700 opacity-50 -top-10 absolute left-[35%] rotate-6 transform -translate-x-1/2 -z-10 w-20 h-20" />
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Featured Projects
            </h2>
          </div>
        </div>

        {/* <BezierLine color="#d1d5db" /> */}
        <br />
        <div>
          <Accordion defaultValue={[]} className="pt-5 px-5">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionItem key={project.id} value={project.id}>
                  <AccordionTrigger className="relative isolate my-2 overflow-hidden w-full py-3 px-5 rounded-full text-foreground transition-all duration-300 hover:text-white hover:no-underline aria-expanded:text-white aria-expanded:shadow-md aria-expanded:shadow-emerald-950/10 before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-r before:from-green-600/30 before:to-violet-800/30 aria-expanded:before:from-green-600/40 aria-expanded:before:to-violet-800/40 before:origin-left before:scale-x-0 hover:before:scale-x-100 aria-expanded:before:scale-x-100 before:transition-all before:duration-500 before:ease-out [&_[data-slot=accordion-trigger-icon]]:transition-colors [&_[data-slot=accordion-trigger-icon]]:group-hover/accordion-trigger:text-white [&_[data-slot=accordion-trigger-icon]]:group-aria-expanded/accordion-trigger:text-white">
                    {project.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="py-3 px-5 rounded-xl bg-gray-200/40 border border-green-600/20">
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

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
import BezierLine from "../BezierLine";

const projects = [
  {
    title: "IFG Life - OneForce Platform",
    description:
      "Major alteration and enhancement of the OneForce Platform for IFG Life.",
    technologies: ["Next.js", "Redux Toolkit", "Tailwind CSS", "Typescript"],
    dateRange: "October 2025 - December 2025",
    assosiation: "Digital Center",
    demo: "#",
  },
  {
    title: "Bahana (KIK-EBA)",
    description:
      "Collective Investment Contract – Asset-Backed Securities implementation.",
    technologies: ["Next.js", "Zustand", "Tailwind CSS", "Typescript"],
    dateRange: "April 2025 - September 2025",
    assosiation: "Digital Center",
    demo: "#",
  },
  {
    title: "Maybank - Octopus Project",
    description:
      "Major project implementation for Maybank's digital transformation.",
    technologies: ["JSP", "JQuery", "Bootstrap"],
    dateRange: "March 2024 - March 2025",
    assosiation: "Digital Center",
    demo: "#",
  },
  {
    title: "Revamp KB Bank",
    description:
      "Complete revamp and modernization of KB Bank's digital platform.",
    technologies: ["JSP", "JQuery", "Bootstrap", "JexFrame"],
    dateRange: "January 2024 - March 2024",
    assosiation: "Digital Center",
    demo: "#",
  },
  {
    title: "OML Innovoice",
    description: "Development and implementation of OML Innovoice platform.",
    technologies: ["React.js", "Tailwind CSS"],
    dateRange: "January 2023 - December 2023",
    assosiation: "Digital Center",
    demo: "#",
  },
  {
    title: "Maybank - AA Project",
    description: "Implementation for Maybank's digital transformation.",
    technologies: ["JSP", "JQuery", "Bootstrap"],
    dateRange: "August 2022 - December 2022",
    assosiation: "Digital Center",
    demo: "#",
  },
  {
    title: "Renstra Aplication",
    description:
      "Development and implementation of Renstra Application platform.",
    technologies: ["Nuxt.js", "Vue.js", "Tailwind CSS", "Typescript"],
    dateRange: "January 2022 - July 2022",
    assosiation: "Lembaga Pendidikan Al Firdaus",
    demo: "#",
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-4/5 m-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription className="text-emerald-700 font-semibold">
                    {project.assosiation}
                  </CardDescription>
                  <CardDescription className="text-gray-500 ">
                    {project.dateRange}
                  </CardDescription>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                {/* <CardFooter className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    asChild
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="flex-1" asChild>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </CardFooter> */}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

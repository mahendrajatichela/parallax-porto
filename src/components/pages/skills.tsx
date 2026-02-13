"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import {
  Code,
  Palette,
  Zap,
  Smartphone,
  Wrench,
  Database,
  Bot,
} from "lucide-react";
import { motion } from "framer-motion";
import BezierLine from "../BezierLine";

const skills = [
  {
    icon: Code,
    title: "Modern Frameworks",
    description:
      "Expert in React, Next.js, and Vue.js with TypeScript for building scalable applications.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Creating beautiful, accessible interfaces with Tailwind CSS and component libraries.",
  },
  {
    icon: Zap,
    title: "Performance",
    description:
      "Optimizing web vitals, code splitting, and implementing best practices for speed.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description:
      "Mobile-first approach ensuring seamless experiences across all devices.",
  },
  {
    icon: Wrench,
    title: "Developer Tools",
    description: "Proficient with Git, Vite, and modern development workflows.",
  },
  {
    icon: Database,
    title: "State Management",
    description:
      "Pinea, Redux and Zustand for managing complex application state.",
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="mx-auto">
        <div className="text-center">
          <div className="relative">
            <Bot className="text-xl text-emerald-700 opacity-50 -top-10 absolute left-2/3 rotate-12 transform -translate-x-1/2 -z-10 w-20 h-20" />
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Skills & Expertise
            </h2>
          </div>
          <p className="text-lg text-emerald-800 font-neutral max-w-2xl mx-auto px-10">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <BezierLine color="#d1d5db" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-4/5 m-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:scale-105 transition-transform  cursor-pointer bg-gradient-to-br from-green-300 via-emerald-300 to-teal-500 text-white hover:bg-gradient-to-br from-green-500 via-emerald-600 to-teal-900 shadow-lg hover:shadow-xl">
                  <div className="relative">
                    <Icon className="h-16 w-16 text-emerald-400 opacity-20 absolute top-10 right-3 rotate-12 transform -translate-x-1/2 -translate-y-1/2" />

                    <CardHeader>
                      <CardTitle>{skill.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-emerald-100">
                        {skill.description}
                      </CardDescription>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

const skills = [
  {
    title: "Tech / Stack",
    description:
      "Proficient in TypeScript and JavaScript (ES6+), developing modern user interfaces with Next.js, React, and Vue.js.",
  },
  {
    title: "UI/UX & Styling",
    description:
      "Building accessible, responsive interfaces using Tailwind CSS, shadcn/ui, Bootstrap, and Figma handoffs.",
  },
  {
    title: "Developer Tools",
    description: "Experienced with Git, Vite, Postman, Jira, and Trello.",
  },
  {
    title: "State Management",
    description:
      "Pinia, Redux Toolkit and Zustand for managing complex application state.",
  },
];

import { useLanguage } from "@/src/context/language-context";
import { SectionHeading } from "./section-heading";

export function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="bg-background py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
        <SectionHeading index="03" label={t.nav.skills} title={t.skills.title} subtitle={t.skills.subtitle} />

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 border-t border-l border-foreground/30 bg-grid">
          {t.skills.items.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
              className="group border-b border-r border-foreground/30 p-6 md:p-10 transition-colors hover:bg-background/70"
            >
              <span className="font-mono text-xs text-muted-foreground">
                [{String(index + 1).padStart(2, "0")}]
              </span>
              <h3 className="mt-4 font-display text-2xl md:text-3xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                {skill.title}
              </h3>
              <p className="mt-3 font-mono text-sm md:text-base leading-relaxed text-muted-foreground">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

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

export function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-b from-[#1a1a1e] to-[#2a0810] text-slate-100"
    >
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight bg-gradient-to-r from-red-500 via-amber-400 to-amber-200 bg-clip-text text-transparent"
          >
            Skills & Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-sm sm:text-base md:text-lg text-amber-400/90 font-medium mt-2"
          >
            Technologies and tools I use to bring ideas to life
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto">
          {skills.map((skill, index) => {
            const borderClasses =
              index === 0
                ? "border-b md:border-r border-amber-400/60 pb-8 md:pb-12 md:pr-12"
                : index === 1
                  ? "border-b border-amber-400/60 py-8 md:py-0 md:pb-12 md:pl-12"
                  : index === 2
                    ? "border-b md:border-b-0 md:border-r border-amber-400/60 py-8 md:py-0 md:pt-12 md:pr-12"
                    : "pt-8 md:pt-12 md:pl-12";

            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: 0.15 + index * 0.1,
                  ease: "easeOut",
                }}
                className={`flex flex-col justify-start ${borderClasses}`}
              >
                <div className="px-5 pt-2">
                  <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary via-amber-400 to-yellow-300 bg-clip-text text-transparent mb-3">
                    {skill.title}
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

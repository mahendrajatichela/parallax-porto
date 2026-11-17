"use client";

import { motion } from "framer-motion";

/** Editorial section header: mono index label + large display title. */
export function SectionHeading({
  index,
  label,
  title,
  subtitle,
}: {
  index: string;
  label: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <p className="font-mono text-xs md:text-sm uppercase tracking-[0.2em] text-muted-foreground">
        {index} / {label}
      </p>
      <h2 className="mt-4 font-display text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-[-0.03em] leading-[0.95] text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 max-w-2xl font-mono text-base md:text-lg text-muted-foreground">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

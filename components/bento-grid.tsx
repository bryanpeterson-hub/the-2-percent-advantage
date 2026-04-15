"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

export type BentoItem = {
  id: string;
  colSpan?: number;
  rowSpan?: number;
  className?: string;
  children: React.ReactNode;
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.04 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

export function BentoGrid({ items, className }: { items: BentoItem[]; className?: string }) {
  const reduceMotion = useReducedMotion();

  const gridClass = cn(
    "grid auto-rows-[minmax(120px,auto)] grid-cols-1 gap-4 sm:grid-cols-6 lg:grid-cols-12",
    className,
  );

  const cellClass = (entry: BentoItem) =>
    cn(
      "min-h-0 sm:col-span-6 lg:col-span-4",
      entry.colSpan === 2 && "sm:col-span-6 lg:col-span-8",
      entry.colSpan === 3 && "sm:col-span-6 lg:col-span-12",
      entry.rowSpan === 2 && "row-span-2",
      entry.className,
    );

  if (reduceMotion) {
    return (
      <div className={gridClass}>
        {items.map((entry) => (
          <div key={entry.id} className={cellClass(entry)}>
            {entry.children}
          </div>
        ))}
      </div>
    );
  }

  return (
    <motion.div className={gridClass} variants={container} initial="hidden" animate="show">
      {items.map((entry) => (
        <motion.div key={entry.id} variants={item} className={cellClass(entry)}>
          {entry.children}
        </motion.div>
      ))}
    </motion.div>
  );
}

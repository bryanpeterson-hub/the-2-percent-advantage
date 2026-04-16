"use client";

import { motion, useReducedMotion } from "framer-motion";

import { GlassChrome } from "@/components/glass-chrome";

const script98 =
  "Meet Sarah, a busy marketer. She needs to move faster. Our platform helps teams like hers collaborate better, automate workflows, and drive growth at scale. Let me show you the dashboard…";

export function WisdomToggle() {
  const reduce = useReducedMotion();

  const wrap = (node: React.ReactNode) =>
    reduce ? (
      node
    ) : (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        {node}
      </motion.div>
    );

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {wrap(
        <GlassChrome className="opacity-90">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-subheader text-muted-foreground">
              The 98%
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground/80 line-through decoration-white/20 [text-decoration-thickness:1px]">
              {script98}
            </p>
            <p className="text-[11px] uppercase tracking-subheader text-muted-foreground/70">
              Generic AI-generated script
            </p>
          </div>
        </GlassChrome>,
      )}
      {wrap(
        <GlassChrome className="shadow-glow">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <p className="text-xs font-semibold uppercase tracking-subheader text-sf-teal">
                The Human Edge
              </p>
              <span className="rounded-full border border-sf-teal/40 bg-sf-teal/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-sf-teal">
                2% pass
              </span>
            </div>
            <p className="text-sm font-medium leading-relaxed text-foreground">
              Meet Sarah—she’s defending last quarter’s spend while her CMO asks for “more pipeline, fewer
              surprises.” The real risk isn’t tools; it’s credibility in the{" "}
              <mark className="rounded bg-sf-yellow/25 px-1 py-0.5 text-foreground ring-1 ring-sf-yellow/50">
                Monday forecast
              </mark>
              . Here’s how a peer in retail cut time-to-insight by 40%—with governance her security team could
              repeat in one slide.
            </p>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-sf-blue">●</span>
                <span>
                  <strong className="text-foreground">Customer callback:</strong> a peer proof point buyers
                  recognize.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-sf-violet">●</span>
                <span>
                  <strong className="text-foreground">Emotional hook:</strong> fear of losing the room in the
                  exec readout.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-sf-teal">●</span>
                <span>
                  <strong className="text-foreground">Tactical expertise:</strong> one-slide governance story
                  they can forward.
                </span>
              </li>
            </ul>
          </div>
        </GlassChrome>,
      )}
    </div>
  );
}

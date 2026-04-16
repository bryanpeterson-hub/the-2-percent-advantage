"use client";

import Link from "next/link";
import { BookOpen, Crosshair, ExternalLink, Sparkles, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";
import { weeklyPlaybook } from "@/lib/content/playbook";
import { MASTER_COACH_GEM_URL } from "@/lib/site";
import { cn } from "@/lib/utils";

type PillarKey = "learning" | "practice" | "arena" | "coach";

const pillars: {
  key: PillarKey;
  label: string;
  title: string;
  body: string;
  icon: typeof BookOpen;
  borderGradient: string;
  iconClass: string;
  ctaLabel: string;
  ctaVariant: "link" | "modal" | "internal" | "external";
  href?: string;
}[] = [
  {
    key: "learning",
    label: "Learning",
    title: "The Playbook",
    body:
      "Foundations of narrative mastery—psychology, structure, visuals, and storytelling improvement loops.",
    icon: BookOpen,
    borderGradient: "from-white/30 via-sf-blue/25 to-sf-blue/5",
    iconClass: "text-sf-blue",
    ctaLabel: "Open ACT Course",
    ctaVariant: "external",
    href: weeklyPlaybook.curriculumUrl,
  },
  {
    key: "practice",
    label: "Practice",
    title: "The Scrimmage",
    body:
      "High-intensity Scenario Sprints—hands-on workshops and peer review circles so skills compound week over week.",
    icon: Zap,
    borderGradient: "from-white/28 via-sf-teal/30 to-sf-teal/5",
    iconClass: "text-sf-teal",
    ctaLabel: "Join a Session",
    ctaVariant: "internal",
    href: "/arena",
  },
  {
    key: "arena",
    label: "Real Deals",
    title: "The Arena",
    body:
      "Live Deal Surgery in the 2% Lab—showcase moments and real opportunities where the narrative holds under pressure.",
    icon: Crosshair,
    borderGradient: "from-white/28 via-sf-violet/35 to-sf-violet/8",
    iconClass: "text-sf-violet",
    ctaLabel: "Submit for Surgery",
    ctaVariant: "modal",
  },
  {
    key: "coach",
    label: "Strategy & Prep",
    title: "The Master Coach",
    body:
      "Your 24/7 AI narrative strategist—conducting deal surgery and simulating executive objections to refine your '2% Edge'.",
    icon: Sparkles,
    borderGradient: "from-white/28 via-sf-yellow/35 to-amber-600/10",
    iconClass: "text-sf-yellow",
    ctaLabel: "Launch Master Coach",
    ctaVariant: "external",
    href: MASTER_COACH_GEM_URL,
  },
];

function openSurgeryModal() {
  window.dispatchEvent(new Event("two-percent:open-surgery-modal"));
}

function PillarCta({
  pillar,
}: {
  pillar: (typeof pillars)[number];
}) {
  const btnClass =
    pillar.key === "learning"
      ? "border-sf-blue/45 text-sf-blue hover:bg-sf-blue/10 hover:text-sf-blue"
      : pillar.key === "practice"
        ? "border-sf-teal/45 text-sf-teal hover:bg-sf-teal/10 hover:text-sf-teal"
        : pillar.key === "arena"
          ? "border-sf-violet/45 text-sf-violet hover:bg-sf-violet/10 hover:text-sf-violet"
          : "border-sf-yellow/50 text-sf-yellow hover:bg-sf-yellow/10 hover:text-sf-yellow";

  if (pillar.ctaVariant === "modal") {
    return (
      <Button type="button" variant="outline" className={cn("mt-auto w-full gap-2 shadow-none", btnClass)} onClick={openSurgeryModal}>
        {pillar.ctaLabel}
      </Button>
    );
  }

  if (pillar.ctaVariant === "internal" && pillar.href) {
    return (
      <Button variant="outline" className={cn("mt-auto w-full gap-2 shadow-none", btnClass)} asChild>
        <Link href={pillar.href}>{pillar.ctaLabel}</Link>
      </Button>
    );
  }

  if (pillar.ctaVariant === "external" && pillar.href) {
    return (
      <Button variant="outline" className={cn("mt-auto w-full gap-2 shadow-none", btnClass)} asChild>
        <a href={pillar.href} target="_blank" rel="noopener noreferrer">
          {pillar.ctaLabel}
          <ExternalLink className="size-3.5 opacity-80" />
        </a>
      </Button>
    );
  }

  return null;
}

export function PillarGrid() {
  return (
    <section className="space-y-5">
      <div className="flex flex-col gap-1 px-1">
        <p className="text-xs font-semibold uppercase tracking-subheader text-sf-blue">Program pillars</p>
        <h2 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">The four engines</h2>
        <p className="max-w-3xl text-sm text-muted-foreground">
          Learn the playbook, pressure-test in scrimmages, bring real deals to the Arena, and sharpen with an always-on
          narrative coach.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {pillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <div
              key={pillar.key}
              className={cn(
                "group relative flex min-h-[300px] flex-col rounded-2xl p-px transition duration-300 ease-out will-change-transform",
                "hover:-translate-y-1 hover:shadow-[0_24px_48px_-18px_rgba(1,118,211,0.25)]",
              )}
            >
              <div
                className={cn(
                  "absolute inset-0 rounded-2xl bg-gradient-to-br opacity-95 transition-opacity group-hover:opacity-100",
                  pillar.borderGradient,
                )}
              />
              <div className="relative flex h-full min-h-[inherit] flex-col rounded-[15px] border border-white/[0.08] bg-black/40 p-6 backdrop-blur-md">
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-subheader text-muted-foreground">
                      {pillar.label}
                    </p>
                    <h3 className="mt-1 font-display text-lg font-semibold tracking-tight text-foreground">
                      {pillar.title}
                    </h3>
                  </div>
                  <span
                    className={cn(
                      "flex size-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06]",
                      pillar.iconClass,
                    )}
                  >
                    <Icon className="size-5" strokeWidth={1.75} />
                  </span>
                </div>
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{pillar.body}</p>
                <PillarCta pillar={pillar} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

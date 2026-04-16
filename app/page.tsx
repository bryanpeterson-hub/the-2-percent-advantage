import Link from "next/link";
import { BookOpen, MessageSquare, Sparkles } from "lucide-react";

import { ArenaCountdown } from "@/components/arena-countdown";
import { BentoGrid } from "@/components/bento-grid";
import { GlassChrome } from "@/components/glass-chrome";
import { ReadinessPlaybookCta } from "@/components/readiness-playbook-cta";
import { WisdomToggle } from "@/components/wisdom-toggle";
import { WeeklyPlaybookCard } from "@/components/weekly-playbook-card";
import { Button } from "@/components/ui/button";
import { nextLiveSession } from "@/lib/content/arena";
import { SLACK_CHANNEL_URL } from "@/lib/site";

export default function HomePage() {
  return (
    <div className="space-y-12 md:space-y-16">
      {/* Hero */}
      <GlassChrome className="shadow-glow">
        <div className="glass-chrome-inner !space-y-6 !py-10 md:!py-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-sf-blue/35 bg-sf-blue/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-subheader text-sf-blue shadow-[0_0_24px_-6px_rgba(1,118,211,0.5)]">
            <Sparkles className="h-3.5 w-3.5" />
            Competency Engine
          </div>
          <h1 className="max-w-4xl text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            <span className="text-gradient-accent rounded-md border-[1px] border-white/90 px-1.5 py-0.5 shadow-[0_0_20px_-4px_rgba(255,255,255,0.3)]">
              98%
            </span>{" "}
            is Information.{" "}
            <span className="text-gradient-accent rounded-md border-[1px] border-white/90 px-1.5 py-0.5 shadow-[0_0_20px_-4px_rgba(255,255,255,0.3)]">
              2%
            </span>{" "}
            is the Win.
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Harness your wisdom, experience, and expertise to own the room.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button variant="outline" size="sm" className="gap-2 border-sf-teal/40 text-sf-teal hover:bg-sf-teal/10" asChild>
              <a href={SLACK_CHANNEL_URL} target="_blank" rel="noopener noreferrer">
                <MessageSquare className="h-4 w-4" />
                Join Slack
              </a>
            </Button>
            <span className="text-xs text-muted-foreground">Cohort questions, wins, and nudges—#2% Advantage</span>
          </div>
        </div>
      </GlassChrome>

      {/* Wisdom pitch */}
      <section className="space-y-4">
        <div className="flex flex-col gap-1 px-1">
          <p className="text-xs font-semibold uppercase tracking-subheader text-sf-violet">The wisdom pitch</p>
          <h2 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">Wisdom toggle</h2>
          <p className="max-w-2xl text-sm text-muted-foreground">
            Same facts—different altitude. The left is what everyone sounds like; the right is how you earn the
            room.
          </p>
        </div>
        <WisdomToggle />
      </section>

      {/* Bento */}
      <section className="space-y-5">
        <h2 className="px-1 text-xl font-semibold tracking-tight text-foreground md:text-2xl">Command deck</h2>
        <BentoGrid
          className="auto-rows-[minmax(160px,auto)] gap-5 md:gap-6"
          items={[
            {
              id: "playbook",
              colSpan: 2,
              rowSpan: 2,
              children: <WeeklyPlaybookCard />,
            },
            {
              id: "arena",
              rowSpan: 2,
              children: (
                <GlassChrome className="h-full border-sf-violet/20 shadow-[0_0_48px_-12px_rgba(115,3,148,0.35)]">
                  <div className="glass-chrome-inner !flex !h-full !min-h-[280px] !flex-col">
                    <ArenaCountdown
                      targetIso={nextLiveSession.datetime}
                      title={nextLiveSession.title}
                      isLiveNow={nextLiveSession.isLiveNow}
                    />
                    <div className="mt-6 border-t border-white/10 pt-4">
                      <Button variant="outline" asChild className="w-full border-sf-blue/30 text-sf-blue hover:bg-sf-blue/10">
                        <Link href="/arena">Open Arena archive</Link>
                      </Button>
                    </div>
                  </div>
                </GlassChrome>
              ),
            },
            {
              id: "story",
              className: "lg:col-span-6",
              children: (
                <GlassChrome className="h-full">
                  <div className="glass-chrome-inner !flex !h-full !min-h-[200px] !flex-col !justify-between !gap-4">
                    <div>
                      <div className="mb-2 flex items-center gap-2 text-sf-blue">
                        <BookOpen className="h-5 w-5" />
                        <span className="text-xs font-semibold uppercase tracking-subheader">Story Bank</span>
                      </div>
                      <p className="text-lg font-semibold text-foreground">Narrative talk-tracks</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Filter by cloud, industry, and objection—copy a full track in one tap.
                      </p>
                    </div>
                    <Button variant="primary" asChild className="w-full sm:w-auto">
                      <Link href="/story-bank">Open Story Bank</Link>
                    </Button>
                  </div>
                </GlassChrome>
              ),
            },
            {
              id: "readiness",
              className: "lg:col-span-6",
              children: <ReadinessPlaybookCta />,
            },
          ]}
        />
      </section>
    </div>
  );
}

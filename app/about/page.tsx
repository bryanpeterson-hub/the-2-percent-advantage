import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { GlassChrome } from "@/components/glass-chrome";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="space-y-10 md:space-y-14">
      <GlassChrome className="shadow-glow">
        <div className="glass-chrome-inner !space-y-5 !py-12 md:!py-16">
          <p className="text-xs font-semibold uppercase tracking-subheader text-sf-violet">The manifesto</p>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            The Story Behind the Edge.
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground md:text-xl">
            Why 98% is no longer enough in the age of commoditized information.
          </p>
        </div>
      </GlassChrome>

      <div className="flex flex-col gap-6 md:gap-8">
        <GlassChrome className="border-sf-blue/25">
          <div className="glass-chrome-inner !space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">The Information Trap</h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Information is everywhere. AI can generate a &quot;good&quot; demo script in seconds. But
              &quot;good&quot; is the new average. When everyone has the same AI, no one has the advantage.
            </p>
          </div>
        </GlassChrome>

        <GlassChrome className="border-sf-violet/30 shadow-[0_0_48px_-14px_rgba(115,3,148,0.35)]">
          <div className="glass-chrome-inner !space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">The 2% Advantage</h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              We focus on the last 2%—the human wisdom, the emotional resonance, and the tactical expertise that turns
              a technical demo into a business transformation.
            </p>
          </div>
        </GlassChrome>

        <div>
          <h2 className="mb-4 px-1 text-xl font-semibold text-foreground md:text-2xl">The pillars</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                title: "The Playbook",
                subtitle: "Learning",
                body: "Foundations of narrative mastery—psychology, structure, visuals, engagement, and storytelling at feature and product level with continuous improvement loops.",
              },
              {
                title: "The Scrimmage",
                subtitle: "Practice",
                body: "High-intensity Scenario Sprints—hands-on workshops, interactive exercises, and peer review circles so skills compound week over week.",
              },
              {
                title: "The Arena",
                subtitle: "Real deals",
                body: "Live Deal Surgery in the 2% Lab—showcase moments and real opportunities where the narrative has to hold under executive pressure.",
              },
            ].map((p) => (
              <GlassChrome key={p.title} className="h-full border-sf-blue/20 md:border-sf-violet/25">
                <div className="glass-chrome-inner !flex !h-full !flex-col !gap-3">
                  <p className="text-[10px] font-semibold uppercase tracking-subheader text-sf-blue">{p.subtitle}</p>
                  <h3 className="text-lg font-semibold text-foreground">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              </GlassChrome>
            ))}
          </div>
        </div>

        <GlassChrome>
          <div className="glass-chrome-inner flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">
              Ready to move from information to influence? Start with the Story Bank or join the Arena.
            </p>
            <Button variant="primary" asChild className="gap-2 shadow-glow">
              <Link href="/story-bank">
                Explore Story Bank
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </GlassChrome>
      </div>
    </div>
  );
}

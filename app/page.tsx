import Link from "next/link";
import { ArrowRight, CalendarClock, Sparkles } from "lucide-react";

import { BentoGrid } from "@/components/bento-grid";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { nextLiveSession } from "@/lib/content/arena";

function formatSessionWhen(iso: string) {
  const d = new Date(iso);
  return new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
  }).format(d);
}

export default function HomePage() {
  return (
    <div className="space-y-10">
      <BentoGrid
        items={[
          {
            id: "hero",
            colSpan: 3,
            children: (
              <Card className="relative glass-panel h-full min-h-[220px] overflow-hidden border-white/10">
                <div className="pointer-events-none absolute inset-0 opacity-40 blur-3xl bg-accent-gradient" />
                <CardHeader className="relative space-y-4">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-subheader text-muted-foreground">
                    <Sparkles className="h-3.5 w-3.5 text-amber-300" />
                    Storytelling for Impact
                  </div>
                  <CardTitle className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                    <span className="text-gradient-accent">98%</span> is Information.{" "}
                    <span className="text-gradient-accent">2%</span> is the Win.
                  </CardTitle>
                  <CardDescription className="max-w-2xl text-base leading-relaxed text-muted-foreground">
                    A performance storytelling hub for Salesforce Solution Engineers—sharpen talk-tracks,
                    pressure-test deals in the Arena, and keep the craft collective. Learning video stays
                    in your existing channels; this is where the field craft lives.
                  </CardDescription>
                </CardHeader>
              </Card>
            ),
          },
          {
            id: "pulse",
            children: (
              <Card className="glass-panel h-full border-white/10">
                <CardHeader>
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-subheader text-muted-foreground">
                    <CalendarClock className="h-4 w-4 text-fuchsia-300/90" />
                    Live pulse
                  </div>
                  <CardTitle className="text-xl">Next Scenario Sprint</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {nextLiveSession.title}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <p className="font-medium text-foreground">{formatSessionWhen(nextLiveSession.datetime)}</p>
                  <p className="leading-relaxed">{nextLiveSession.location}</p>
                  <p className="text-xs">
                    Add a calendar or meeting link in content config when your team is ready—no lesson
                    hosting here.
                  </p>
                </CardContent>
              </Card>
            ),
          },
          {
            id: "wisdom-ai",
            colSpan: 2,
            children: (
              <Card className="glass-panel h-full border-white/10">
                <CardHeader>
                  <CardTitle className="text-xl">Wisdom vs. AI</CardTitle>
                  <CardDescription>
                    The human 2% pass turns generic information into a decision-grade story.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4 lg:grid-cols-2">
                  <div className="rounded-lg border border-white/10 bg-black/30 p-4">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-subheader text-muted-foreground">
                      98% — generic script
                    </p>
                    <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                      <li>“We have a powerful platform with lots of features.”</li>
                      <li>“Customers choose us for innovation and scalability.”</li>
                      <li>“Let me walk you through the product overview.”</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border border-fuchsia-500/25 bg-gradient-to-br from-amber-400/10 via-transparent to-fuchsia-500/10 p-4">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-subheader text-amber-200/90">
                      2% — human pass
                    </p>
                    <ul className="space-y-3 text-sm leading-relaxed text-foreground">
                      <li>
                        <span className="rounded bg-white/10 px-1.5 py-0.5 text-xs font-medium text-amber-200">
                          Specificity
                        </span>{" "}
                        Name the failure mode they fear on Tuesday at 4pm—not “innovation.”
                      </li>
                      <li>
                        <span className="rounded bg-white/10 px-1.5 py-0.5 text-xs font-medium text-fuchsia-200">
                          Proof ladder
                        </span>{" "}
                        One peer story, one measurable outcome, one governance guardrail they can repeat
                        internally.
                      </li>
                      <li>
                        <span className="rounded bg-white/10 px-1.5 py-0.5 text-xs font-medium text-amber-200">
                          Pivot
                        </span>{" "}
                        Flip the demo path: start from the decision, then earn the clicks.
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ),
          },
          {
            id: "story-bank-cta",
            className: "lg:col-span-6",
            children: (
              <Card className="glass-panel flex h-full flex-col border-white/10">
                <CardHeader>
                  <CardTitle className="text-lg">Story Bank</CardTitle>
                  <CardDescription>
                    Searchable talk-tracks by cloud, industry, and objection—built for quick copy.
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <Button variant="accent" asChild className="w-full sm:w-auto">
                    <Link href="/story-bank">
                      Open Story Bank
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ),
          },
          {
            id: "arena-cta",
            className: "lg:col-span-6",
            children: (
              <Card className="glass-panel flex h-full flex-col border-white/10">
                <CardHeader>
                  <CardTitle className="text-lg">The Arena</CardTitle>
                  <CardDescription>
                    Deal surgery intake and a clean archive of past live sessions.
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <Button variant="accent" asChild className="w-full sm:w-auto">
                    <Link href="/arena">
                      Enter the Arena
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ),
          },
        ]}
      />
    </div>
  );
}

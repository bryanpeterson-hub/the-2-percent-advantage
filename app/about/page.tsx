import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink, MessageSquare } from "lucide-react";

import { GlassChrome } from "@/components/glass-chrome";
import { Button } from "@/components/ui/button";
import { READINESS_CURRICULUM_URL, SLACK_CHANNEL_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
};

const learnBullets = [
  "The psychology of storytelling: how stories connect emotionally and inspire action.",
  "Crafting the narrative: structure for maximum impact.",
  "Visual storytelling: use visuals and design to amplify your message.",
  "Engagement techniques: make presentations interactive and memorable.",
  "Personal branding in storytelling: build trust and authenticity through your unique perspective.",
  "Storytelling at a feature and product level: apply techniques to demos and product discussions.",
  "Continuous improvement: practice, refine, and grow through ongoing engagement.",
];

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

      <GlassChrome>
        <div className="glass-chrome-inner !space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">What this is all about</h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            In today’s competitive tech landscape, standing out isn’t just about having the best features or the
            lowest price—it’s about the story you tell.{" "}
            <strong className="text-foreground">Storytelling for Impact: The 2% Advantage</strong> is a comprehensive
            program designed to give Solutions Engineers the critical edge they need to connect deeply with clients,
            articulate value effectively, and win deals through the power of storytelling.
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

        <GlassChrome>
          <div className="glass-chrome-inner !space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Why this course?</h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              In a crowded marketplace where differentiation is key, the ability to craft and deliver compelling
              stories can be the deciding factor in winning or losing a deal. This program leverages proven storytelling
              techniques, blending emotion with strategy, to transform how you communicate with clients—from engaging
              narratives to visual storytelling and audience engagement—so you make a measurable impact on sales
              success.
            </p>
          </div>
        </GlassChrome>

        <GlassChrome>
          <div className="glass-chrome-inner !space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">What you’ll learn</h2>
            <p className="text-base text-muted-foreground">
              This course covers the essential foundations and advanced techniques of storytelling, including:
            </p>
            <ul className="list-inside list-disc space-y-2 text-sm leading-relaxed text-muted-foreground md:text-base">
              {learnBullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        </GlassChrome>

        <GlassChrome>
          <div className="glass-chrome-inner !space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">How it works</h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              The course combines interactive lessons, hands-on workshops, video tutorials, and peer engagement for a
              dynamic, flexible experience. You’ll explore frameworks like the Hero’s Journey and Problem–Solution,
              analyze real-world case studies, and practice adapting stories to specific scenarios—with structured
              feedback so your skills evolve over time.
            </p>
          </div>
        </GlassChrome>

        <GlassChrome>
          <div className="glass-chrome-inner !space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Who this is for</h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Solutions Engineers who want to elevate communication, connect with clients on a deeper level, and gain
              a competitive advantage in sales—whether you are refining a pitch, improving audience engagement, or
              aligning presentations with customer needs.
            </p>
          </div>
        </GlassChrome>

        <GlassChrome className="border-sf-teal/25">
          <div className="glass-chrome-inner !space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Key takeaway</h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Storytelling for Impact equips you to not just inform, but inspire. By mastering the art of storytelling,
              you’ll transform client interactions into memorable experiences—creating the crucial 2% advantage that
              sets you apart from the competition.{" "}
              <span className="font-medium text-foreground">Let’s start telling stories that don’t just sell, but resonate.</span>
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
          <div className="glass-chrome-inner flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">
              Continue in Readiness, trade talk-tracks in the Story Bank, and bring live deals to the Arena.
            </p>
            <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
              <Button variant="primary" asChild className="gap-2 shadow-glow">
                <Link href="/story-bank">
                  Explore Story Bank
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild className="gap-2 border-sf-teal/40 text-sf-teal hover:bg-sf-teal/10">
                <a href={SLACK_CHANNEL_URL} target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="h-4 w-4" />
                  Slack
                </a>
              </Button>
              <Button variant="outline" asChild className="gap-2 border-sf-blue/35 text-sf-blue hover:bg-sf-blue/10">
                <a href={READINESS_CURRICULUM_URL} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  Readiness course
                </a>
              </Button>
            </div>
          </div>
        </GlassChrome>
      </div>
    </div>
  );
}

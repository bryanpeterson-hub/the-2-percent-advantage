"use client";

import { PlayCircle } from "lucide-react";
import { toast } from "sonner";

import { GlassChrome } from "@/components/glass-chrome";
import { Button } from "@/components/ui/button";
import { weeklyPlaybook } from "@/lib/content/playbook";

export function WeeklyPlaybookCard({ lessonHref }: { lessonHref: string }) {
  const start = () => {
    if (lessonHref) {
      window.open(lessonHref, "_blank", "noopener,noreferrer");
      return;
    }
    toast.message("Connect your LMS", {
      description: "Set NEXT_PUBLIC_PLAYBOOK_LESSON_URL on Heroku to deep-link the weekly module.",
    });
  };

  return (
    <GlassChrome className="h-full shadow-glow">
      <div className="glass-chrome-inner !flex !h-full !flex-col !gap-6 !p-6 md:!p-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-subheader text-sf-blue">The Weekly Playbook</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            {weeklyPlaybook.moduleTitle}
          </h2>
          <p className="mt-2 max-w-prose text-sm leading-relaxed text-muted-foreground">
            {weeklyPlaybook.moduleSummary}
          </p>
        </div>
        <div
          className="relative aspect-video w-full max-w-xl overflow-hidden rounded-xl border border-white/10 shadow-[0_0_40px_-10px_rgba(115,3,148,0.4)]"
          style={{ background: weeklyPlaybook.thumbnailGradient }}
        >
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <PlayCircle className="h-16 w-16 text-white/90 drop-shadow-lg md:h-20 md:w-20" />
          </div>
        </div>
        <div className="mt-auto">
          <Button type="button" variant="primary" size="lg" className="w-full gap-2 sm:w-auto" onClick={start}>
            <PlayCircle className="h-5 w-5" />
            Start lesson
          </Button>
        </div>
      </div>
    </GlassChrome>
  );
}

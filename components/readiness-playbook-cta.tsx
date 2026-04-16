import { BookMarked, ExternalLink } from "lucide-react";

import { GlassChrome } from "@/components/glass-chrome";
import { Button } from "@/components/ui/button";
import { weeklyPlaybook } from "@/lib/content/playbook";

/** Dashboard block: direct link to the official Readiness curriculum. */
export function ReadinessPlaybookCta() {
  const url = weeklyPlaybook.curriculumUrl;

  return (
    <GlassChrome className="h-full border-sf-blue/25 shadow-[0_0_40px_-14px_rgba(1,118,211,0.35)]">
      <div className="glass-chrome-inner !flex !h-full !min-h-[200px] !flex-col !justify-between !gap-4">
        <div>
          <div className="mb-2 flex items-center gap-2 text-sf-blue">
            <BookMarked className="h-5 w-5" />
            <span className="text-xs font-semibold uppercase tracking-subheader">Playbook (Readiness)</span>
          </div>
          <p className="text-lg font-semibold text-foreground">Official course curriculum</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Continue Storytelling for Impact in Readiness—modules, paths, and assigned learning in one place.
          </p>
        </div>
        <Button variant="primary" className="w-full gap-2 shadow-glow sm:w-auto" asChild>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4" />
            Open course in Readiness
          </a>
        </Button>
      </div>
    </GlassChrome>
  );
}

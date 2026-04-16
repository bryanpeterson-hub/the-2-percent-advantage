"use client";

import { Search, Stethoscope } from "lucide-react";

import { Button } from "@/components/ui/button";

export function SiteTopNav({ onOpenSurgery }: { onOpenSurgery: () => void }) {
  return (
    <header className="glass-chrome mb-6 hidden md:block">
      <div className="glass-chrome-inner !flex !flex-row !items-center !justify-between !gap-4 !py-4">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-subheader text-sf-blue">
            Competency Engine
          </p>
          <p className="text-sm font-semibold text-foreground">The 2% Advantage</p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant="ghost"
            className="gap-2 text-muted-foreground hover:text-foreground"
            onClick={() => window.dispatchEvent(new Event("two-percent:open-command-palette"))}
          >
            <Search className="h-4 w-4" />
            <span className="hidden lg:inline">Search</span>
            <kbd className="hidden rounded border border-white/15 bg-white/5 px-1.5 py-0.5 font-mono text-[10px] lg:inline">
              ⌘K
            </kbd>
          </Button>
          <Button type="button" variant="primary" className="gap-2 shadow-glow" onClick={onOpenSurgery}>
            <Stethoscope className="h-4 w-4" />
            Submit for surgery
          </Button>
        </div>
      </div>
    </header>
  );
}

"use client";

import { Search, Stethoscope } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function SiteTopNav({ onOpenSurgery }: { onOpenSurgery: () => void }) {
  const openPalette = () => window.dispatchEvent(new Event("two-percent:open-command-palette"));

  return (
    <header className="glass-chrome mb-6 hidden md:block">
      <div className="glass-chrome-inner !flex !flex-row !items-center !gap-4 !py-4">
        <div className="w-44 shrink-0">
          <p className="text-[10px] font-semibold uppercase tracking-subheader text-sf-blue">Competency Engine</p>
          <p className="text-sm font-semibold text-foreground">The 2% Advantage</p>
        </div>

        <div className="flex min-w-0 flex-1 justify-center px-2">
          <button
            type="button"
            onClick={openPalette}
            className={cn(
              "flex w-full max-w-2xl items-center gap-3 rounded-xl border border-sf-blue/35 bg-gradient-to-r from-sf-blue/15 via-white/[0.07] to-sf-violet/10",
              "px-4 py-2.5 text-left shadow-[0_0_36px_-12px_rgba(1,118,211,0.45)] transition",
              "hover:border-sf-blue/55 hover:from-sf-blue/20 hover:shadow-[0_0_44px_-10px_rgba(1,118,211,0.55)]",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sf-blue/50",
            )}
          >
            <Search className="size-5 shrink-0 text-sf-blue" aria-hidden />
            <span className="min-w-0 flex-1 truncate text-sm text-muted-foreground">
              Search hub, routes, and Story Bank titles…
            </span>
            <kbd
              className="shrink-0 rounded-md border border-white/20 bg-black/40 px-2 py-1 font-mono text-[11px] text-foreground/90"
              title="Windows / Linux: Ctrl+K"
            >
              ⌘K
            </kbd>
          </button>
        </div>

        <div className="flex w-44 shrink-0 justify-end">
          <Button type="button" variant="primary" className="gap-2 shadow-glow" onClick={onOpenSurgery}>
            <Stethoscope className="h-4 w-4" />
            Submit for surgery
          </Button>
        </div>
      </div>
    </header>
  );
}

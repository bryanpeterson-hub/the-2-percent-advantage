"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, Search, Stethoscope } from "lucide-react";

import { CinematicBackground } from "@/components/cinematic-background";
import { GlassSidebar } from "@/components/glass-sidebar";
import { CommandMenu } from "@/components/command-menu";
import { SiteFooter } from "@/components/site-footer";
import { SiteTopNav } from "@/components/site-top-nav";
import { SurgeryIntakeModal } from "@/components/surgery-intake-modal";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function AppShell({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [surgeryOpen, setSurgeryOpen] = React.useState(false);

  React.useEffect(() => {
    const open = () => setSurgeryOpen(true);
    window.addEventListener("two-percent:open-surgery-modal", open);
    return () => window.removeEventListener("two-percent:open-surgery-modal", open);
  }, []);

  return (
    <div className="relative min-h-screen">
      <CinematicBackground />
      <div className="relative z-10 flex min-h-screen">
        <div className="hidden w-[17rem] shrink-0 border-r border-white/[0.08] bg-black/20 backdrop-blur-xl md:block">
          <GlassSidebar className="h-screen border-0 bg-transparent p-5" />
        </div>

        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <div className="flex min-h-screen flex-1 flex-col">
            <header className="glass-panel sticky top-0 z-20 flex min-h-[3.25rem] items-center justify-between gap-3 border-x-0 border-t-0 px-4 py-3.5 md:hidden">
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="size-11 shrink-0 touch-manipulation" aria-label="Open menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <Link href="/" className="min-w-0 truncate text-center text-sm font-semibold tracking-tight">
                2% Advantage
              </Link>
              <div className="flex shrink-0 items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-11 touch-manipulation"
                  aria-label="Open search"
                  onClick={() => window.dispatchEvent(new Event("two-percent:open-command-palette"))}
                >
                  <Search className="h-5 w-5" />
                </Button>
                <Button
                  variant="primary"
                  size="icon"
                  className="size-11 shrink-0 touch-manipulation shadow-glow"
                  aria-label="Submit for surgery"
                  onClick={() => setSurgeryOpen(true)}
                >
                  <Stethoscope className="h-5 w-5" />
                </Button>
              </div>
            </header>

            <main className="flex-1 px-4 pb-20 pt-5 md:px-10 md:pb-24 md:pt-8">
              <div className="mx-auto w-full max-w-6xl">
                <SiteTopNav onOpenSurgery={() => setSurgeryOpen(true)} />
                {children}
                <SiteFooter />
              </div>
            </main>

            <SheetContent side="left" className="w-[min(100%,320px)] border-white/10 p-0">
              <GlassSidebar className="h-full border-0 bg-transparent p-5" />
            </SheetContent>
          </div>
        </Sheet>

        <div className="pointer-events-none fixed bottom-6 right-6 z-30 hidden md:block">
          <div className="pointer-events-auto">
            <Button
              variant="outline"
              className="glass-panel gap-2 border-white/15 bg-black/50 text-xs text-muted-foreground shadow-glow"
              onClick={() => window.dispatchEvent(new Event("two-percent:open-command-palette"))}
            >
              <Search className="h-4 w-4" />
              Search
              <kbd className="rounded border border-white/15 bg-white/5 px-1.5 py-0.5 font-mono text-[10px]">
                ⌘K
              </kbd>
            </Button>
          </div>
        </div>
      </div>
      <CommandMenu onOpenSurgery={() => setSurgeryOpen(true)} />
      <SurgeryIntakeModal open={surgeryOpen} onOpenChange={setSurgeryOpen} />
    </div>
  );
}

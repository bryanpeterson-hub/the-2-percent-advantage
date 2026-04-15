"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, Search } from "lucide-react";

import { GlassSidebar } from "@/components/glass-sidebar";
import { CommandMenu } from "@/components/command-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function AppShell({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <div className="relative min-h-screen bg-mesh-gradient">
      <div className="pointer-events-none absolute inset-0 bg-[#0a0a0a]/85" aria-hidden />
      <div className="relative z-10 flex min-h-screen">
        <div className="hidden w-64 shrink-0 border-r border-white/10 md:block">
          <GlassSidebar className="h-screen border-0 bg-transparent backdrop-blur-xl" />
        </div>

        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <div className="flex min-h-screen flex-1 flex-col">
            <header className="glass-panel sticky top-0 z-20 flex items-center justify-between gap-3 border-x-0 border-t-0 px-4 py-3 md:hidden">
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <Link href="/" className="text-sm font-semibold tracking-tight">
                The 2% Advantage
              </Link>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open search"
                onClick={() => window.dispatchEvent(new Event("two-percent:open-command-palette"))}
              >
                <Search className="h-5 w-5" />
              </Button>
            </header>

            <main className="flex-1 px-4 pb-16 pt-6 md:px-10 md:pt-10">
              <div className="mx-auto w-full max-w-6xl">{children}</div>
            </main>

            <SheetContent side="left" className="w-[280px] border-white/10 p-0">
              <GlassSidebar className="h-full border-0 bg-transparent" />
            </SheetContent>
          </div>
        </Sheet>

        <div className="pointer-events-none fixed bottom-6 right-6 z-30 hidden md:block">
          <div className="pointer-events-auto">
            <Button
              variant="outline"
              className="glass-panel gap-2 border-white/15 bg-black/40 text-xs text-muted-foreground"
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
      <CommandMenu />
    </div>
  );
}

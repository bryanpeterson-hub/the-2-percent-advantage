"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, CircleHelp, FileText, LayoutDashboard, MessageSquare, Swords } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SLACK_CHANNEL_URL } from "@/lib/site";

const nav = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/story-bank", label: "Story Bank", icon: BookOpen },
  { href: "/arena", label: "Arena", icon: Swords },
  { href: "/about", label: "About", icon: FileText },
  { href: "/faq", label: "FAQ", icon: CircleHelp },
];

export function GlassSidebar({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "flex h-full w-full flex-col gap-1 rounded-none border-y-0 border-l-0",
        className,
      )}
    >
      <div className="mb-8 px-1">
        <p className="text-[10px] font-semibold uppercase tracking-subheader text-sf-blue">Competency Engine</p>
        <p className="mt-1 text-lg font-semibold tracking-tight text-foreground">The 2% Advantage</p>
        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
          Storytelling for Impact — own the last 2%.
        </p>
      </div>
      <nav className="flex flex-1 flex-col gap-1">
        {nav.map(({ href, label, icon: Icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all",
                active
                  ? "border border-sf-blue/40 bg-sf-blue/15 text-foreground shadow-[0_0_24px_-8px_rgba(1,118,211,0.45)]"
                  : "border border-transparent text-muted-foreground hover:border-white/10 hover:bg-white/5 hover:text-foreground",
              )}
            >
              <Icon className="h-4 w-4 opacity-90" />
              {label}
            </Link>
          );
        })}
      </nav>
      <Separator className="my-6 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <nav className="flex flex-col gap-2 px-1 text-xs">
        <p className="mb-1 font-semibold uppercase tracking-subheader text-muted-foreground">More</p>
        <Link href="/about" className="text-muted-foreground transition-colors hover:text-sf-blue">
          The manifesto
        </Link>
        <Link href="/faq" className="text-muted-foreground transition-colors hover:text-sf-blue">
          Tactical clarity
        </Link>
      </nav>
      <Separator className="my-6 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="mt-auto space-y-3 px-1">
        <Button
          variant="outline"
          size="sm"
          className="w-full justify-center gap-2 border-sf-teal/40 text-sf-teal hover:bg-sf-teal/10"
          asChild
        >
          <a href={SLACK_CHANNEL_URL} target="_blank" rel="noopener noreferrer">
            <MessageSquare className="h-4 w-4" />
            Slack channel
          </a>
        </Button>
        <p className="text-xs leading-relaxed text-muted-foreground">
          For internal Salesforce use only. Questions and materials live in Slack.
        </p>
      </div>
    </aside>
  );
}

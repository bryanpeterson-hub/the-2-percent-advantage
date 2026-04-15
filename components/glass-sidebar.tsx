"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, LayoutDashboard, Swords } from "lucide-react";

import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

const nav = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/story-bank", label: "Story Bank", icon: BookOpen },
  { href: "/arena", label: "Arena", icon: Swords },
];

export function GlassSidebar({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "glass-panel flex h-full w-full flex-col gap-1 rounded-none border-y-0 border-l-0 p-4",
        className,
      )}
    >
      <div className="mb-6 px-2">
        <p className="text-xs font-medium uppercase tracking-subheader text-muted-foreground">
          Storytelling for Impact
        </p>
        <p className="mt-1 text-lg font-semibold tracking-tight text-foreground">The 2% Advantage</p>
      </div>
      <nav className="flex flex-1 flex-col gap-1">
        {nav.map(({ href, label, icon: Icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                active
                  ? "bg-white/10 text-foreground"
                  : "text-muted-foreground hover:bg-white/5 hover:text-foreground",
              )}
            >
              <Icon className="h-4 w-4 opacity-80" />
              {label}
            </Link>
          );
        })}
      </nav>
      <Separator className="my-4 bg-white/10" />
      <p className="px-2 text-xs leading-relaxed text-muted-foreground">
        For internal Salesforce use only. Slack channel and contacts can be added here when ready.
      </p>
    </aside>
  );
}

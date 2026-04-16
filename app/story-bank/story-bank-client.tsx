"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";
import { Check, Copy, Search } from "lucide-react";
import { toast } from "sonner";

import { GlassChrome } from "@/components/glass-chrome";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import {
  storyTemplates,
  type Cloud,
  type Industry,
  type ObjectionType,
  type StoryTemplate,
} from "@/lib/content/stories";

const clouds: Cloud[] = ["Marketing", "Sales", "Service", "Data", "AI"];
const industries: Industry[] = [
  "Financial Services",
  "Healthcare",
  "Retail",
  "Manufacturing",
  "Public Sector",
];
const objections: ObjectionType[] = ["Price", "Timing", "Trust", "Status Quo", "Technical Risk"];

function FilterList<T extends string>({
  title,
  values,
  allLabel,
  current,
  onChange,
}: {
  title: string;
  values: readonly T[];
  allLabel: string;
  current: T | "All";
  onChange: (next: T | "All") => void;
}) {
  return (
    <div className="space-y-2">
      <p className="px-1 text-[10px] font-semibold uppercase tracking-subheader text-muted-foreground">{title}</p>
      <ul className="flex flex-col gap-0.5">
        <li>
          <button
            type="button"
            onClick={() => onChange("All")}
            className={cn(
              "w-full rounded-lg px-3 py-2 text-left text-sm transition-colors",
              current === "All"
                ? "bg-sf-blue/20 font-medium text-sf-blue ring-1 ring-sf-blue/40"
                : "text-muted-foreground hover:bg-white/5 hover:text-foreground",
            )}
          >
            {allLabel}
          </button>
        </li>
        {values.map((v) => (
          <li key={v}>
            <button
              type="button"
              onClick={() => onChange(current === v ? "All" : v)}
              className={cn(
                "w-full rounded-lg px-3 py-2 text-left text-sm transition-colors",
                current === v
                  ? "bg-sf-blue/20 font-medium text-sf-blue ring-1 ring-sf-blue/40"
                  : "text-muted-foreground hover:bg-white/5 hover:text-foreground",
              )}
            >
              {v}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function StoryBankClient() {
  const searchParams = useSearchParams();
  const initialQ = searchParams.get("q") ?? "";

  const [query, setQuery] = React.useState(initialQ);
  const [cloud, setCloud] = React.useState<Cloud | "All">("All");
  const [industry, setIndustry] = React.useState<Industry | "All">("All");
  const [objection, setObjection] = React.useState<ObjectionType | "All">("All");
  const [selected, setSelected] = React.useState<StoryTemplate | null>(null);

  React.useEffect(() => {
    setQuery(initialQ);
  }, [initialQ]);

  const filtered = React.useMemo(() => {
    return storyTemplates.filter((s) => {
      const hay = `${s.title} ${s.summary} ${s.talkTrack} ${s.tags.join(" ")}`.toLowerCase();
      const q = query.trim().toLowerCase();
      if (q && !hay.includes(q)) return false;
      if (cloud !== "All" && s.cloud !== cloud) return false;
      if (industry !== "All" && s.industry !== industry) return false;
      if (objection !== "All" && s.objection !== objection) return false;
      return true;
    });
  }, [cloud, industry, objection, query]);

  React.useEffect(() => {
    if (selected && !filtered.find((s) => s.id === selected.id)) {
      setSelected(null);
    }
  }, [filtered, selected]);

  const copyNarrative = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("Narrative talk-track copied");
    } catch {
      toast.error("Could not copy—check permissions");
    }
  };

  return (
    <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-10">
      <aside className="w-full shrink-0 lg:sticky lg:top-24 lg:w-56">
        <GlassChrome>
          <div className="glass-chrome-inner !space-y-8 !p-5">
            <p className="text-xs font-semibold uppercase tracking-subheader text-sf-violet">Filters</p>
            <FilterList title="Cloud" values={clouds} allLabel="All clouds" current={cloud} onChange={setCloud} />
            <FilterList
              title="Industry"
              values={industries}
              allLabel="All industries"
              current={industry}
              onChange={setIndustry}
            />
            <FilterList
              title="Objection"
              values={objections}
              allLabel="All objections"
              current={objection}
              onChange={setObjection}
            />
          </div>
        </GlassChrome>
      </aside>

      <div className="min-w-0 flex-1 space-y-6">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-subheader text-sf-blue">Narrative library</p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Story Bank</h1>
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Tap a card to preview, then one-click copy a full narrative talk-track—built for Solution Engineers in
            the field.
          </p>
        </div>

        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search titles, tags, talk-tracks…"
            className="border-white/15 bg-white/[0.06] pl-10 focus-visible:ring-sf-blue/50"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {filtered.map((s) => {
            const isSel = selected?.id === s.id;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setSelected((prev) => (prev?.id === s.id ? null : s))}
                className={cn(
                  "rounded-2xl border bg-white/[0.04] p-5 text-left backdrop-blur-xl transition-all",
                  "hover:border-sf-blue/35 hover:shadow-[0_0_32px_-12px_rgba(1,118,211,0.35)]",
                  isSel
                    ? "border-sf-blue/50 shadow-[0_0_40px_-10px_rgba(1,118,211,0.45)] ring-1 ring-sf-blue/30"
                    : "border-white/10",
                )}
              >
                <div className="mb-3 flex flex-wrap gap-2 text-[10px] font-semibold uppercase tracking-subheader text-muted-foreground">
                  <span className="rounded-full border border-white/15 px-2 py-0.5 text-foreground/90">{s.cloud}</span>
                  <span className="rounded-full border border-white/15 px-2 py-0.5">{s.industry}</span>
                  <span className="rounded-full border border-white/15 px-2 py-0.5">{s.objection}</span>
                </div>
                <h2 className="text-lg font-semibold text-foreground">{s.title}</h2>
                <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{s.summary}</p>
              </button>
            );
          })}
        </div>

        {selected ? (
          <GlassChrome className="border-sf-teal/20 shadow-glow-teal">
            <div className="glass-chrome-inner !space-y-5">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-subheader text-sf-teal">Selected template</p>
                  <h3 className="mt-1 text-xl font-semibold text-foreground">{selected.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{selected.summary}</p>
                </div>
                <Button
                  type="button"
                  variant="primary"
                  className="shrink-0 gap-2 shadow-glow"
                  onClick={() => copyNarrative(selected.talkTrack)}
                >
                  <Copy className="h-4 w-4" />
                  One-click copy narrative
                </Button>
              </div>
              <ScrollArea className="max-h-48 rounded-xl border border-white/10 bg-black/40 p-4">
                <p className="text-sm leading-relaxed text-muted-foreground">{selected.talkTrack}</p>
              </ScrollArea>
              <p className="flex items-center gap-2 text-xs text-muted-foreground">
                <Check className="h-3.5 w-3.5 text-sf-teal" />
                Copies the full talk-track for Slack, Notes, or your deck outline.
              </p>
            </div>
          </GlassChrome>
        ) : null}

        {filtered.length === 0 ? (
          <p className="text-sm text-muted-foreground">No templates match those filters.</p>
        ) : null}
      </div>
    </div>
  );
}

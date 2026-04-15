"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";
import { Copy, Filter } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  storyTemplates,
  type Cloud,
  type Industry,
  type ObjectionType,
} from "@/lib/content/stories";

const clouds: Cloud[] = ["Sales", "Service", "Marketing", "Data"];
const industries: Industry[] = [
  "Financial Services",
  "Healthcare",
  "Retail",
  "Manufacturing",
  "Public Sector",
];
const objections: ObjectionType[] = ["Price", "Timing", "Trust", "Status Quo", "Technical Risk"];

function ToggleChip({
  active,
  label,
  onClick,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
        active
          ? "border-fuchsia-500/50 bg-fuchsia-500/15 text-foreground"
          : "border-white/10 bg-white/[0.03] text-muted-foreground hover:border-white/20 hover:text-foreground"
      }`}
    >
      {label}
    </button>
  );
}

export function StoryBankClient() {
  const searchParams = useSearchParams();
  const initialQ = searchParams.get("q") ?? "";

  const [query, setQuery] = React.useState(initialQ);
  const [cloud, setCloud] = React.useState<Cloud | "All">("All");
  const [industry, setIndustry] = React.useState<Industry | "All">("All");
  const [objection, setObjection] = React.useState<ObjectionType | "All">("All");

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

  const copyTrack = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("Talk-track copied");
    } catch {
      toast.error("Could not copy—check permissions");
    }
  };

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-subheader text-muted-foreground">
          Collective wisdom
        </p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Story Bank</h1>
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Searchable templates for discovery, narrative pivots, and objection handling—built for Solution
          Engineers, not hosted lessons.
        </p>
      </div>

      <Card className="glass-panel border-white/10">
        <CardHeader className="space-y-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2 text-sm font-medium text-foreground">
              <Filter className="h-4 w-4 text-muted-foreground" />
              Filters
            </div>
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search titles, summaries, tags…"
              className="sm:max-w-sm"
            />
          </div>
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-subheader text-muted-foreground">Cloud</p>
            <div className="flex flex-wrap gap-2">
              <ToggleChip active={cloud === "All"} label="All" onClick={() => setCloud("All")} />
              {clouds.map((c) => (
                <ToggleChip
                  key={c}
                  active={cloud === c}
                  label={c}
                  onClick={() => setCloud((prev) => (prev === c ? "All" : c))}
                />
              ))}
            </div>
            <Separator className="bg-white/10" />
            <p className="text-xs uppercase tracking-subheader text-muted-foreground">Industry</p>
            <div className="flex flex-wrap gap-2">
              <ToggleChip
                active={industry === "All"}
                label="All"
                onClick={() => setIndustry("All")}
              />
              {industries.map((i) => (
                <ToggleChip
                  key={i}
                  active={industry === i}
                  label={i}
                  onClick={() => setIndustry((prev) => (prev === i ? "All" : i))}
                />
              ))}
            </div>
            <Separator className="bg-white/10" />
            <p className="text-xs uppercase tracking-subheader text-muted-foreground">Objection</p>
            <div className="flex flex-wrap gap-2">
              <ToggleChip
                active={objection === "All"}
                label="All"
                onClick={() => setObjection("All")}
              />
              {objections.map((o) => (
                <ToggleChip
                  key={o}
                  active={objection === o}
                  label={o}
                  onClick={() => setObjection((prev) => (prev === o ? "All" : o))}
                />
              ))}
            </div>
          </div>
        </CardHeader>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map((s) => (
          <Card key={s.id} className="glass-panel flex h-full flex-col border-white/10">
            <CardHeader>
              <div className="flex flex-wrap gap-2 text-[11px] font-medium uppercase tracking-subheader text-muted-foreground">
                <span className="rounded-full border border-white/10 px-2 py-0.5 text-foreground/90">
                  {s.cloud}
                </span>
                <span className="rounded-full border border-white/10 px-2 py-0.5">{s.industry}</span>
                <span className="rounded-full border border-white/10 px-2 py-0.5">{s.objection}</span>
              </div>
              <CardTitle className="text-xl">{s.title}</CardTitle>
              <CardDescription className="text-sm leading-relaxed">{s.summary}</CardDescription>
            </CardHeader>
            <CardContent className="mt-auto space-y-3">
              <ScrollArea className="h-32 rounded-md border border-white/10 bg-black/30 p-3">
                <p className="text-sm leading-relaxed text-muted-foreground">{s.talkTrack}</p>
              </ScrollArea>
              <Button variant="outline" className="w-full gap-2" onClick={() => copyTrack(s.talkTrack)}>
                <Copy className="h-4 w-4" />
                Quick copy talk-track
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-sm text-muted-foreground">No templates match those filters.</p>
      ) : null}
    </div>
  );
}

"use client";

import { useDeferredValue, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Copy, Search } from "lucide-react";
import { GlassChrome } from "@/components/glass-chrome";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

const filterSelectClass =
  "flex h-9 w-full cursor-pointer appearance-none rounded-md border border-white/15 bg-black/25 bg-[length:1rem] bg-[right_0.5rem_center] bg-no-repeat px-3 py-1 pr-9 text-sm text-foreground shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sf-blue/45 disabled:cursor-not-allowed disabled:opacity-50 [&>option]:bg-card [&>option]:text-foreground";

const filterSelectChevron = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23a1a1aa' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
} as const;
import {
  stories,
  storyClouds,
  storyLevels,
  type Story,
  type StoryCloud,
  type StoryLevel,
} from "@/src/data/stories";

function cloudBadgeClass(cloud: StoryCloud) {
  switch (cloud) {
    case "Data 36O":
      return "border-sf-indigo-from/40 bg-sf-indigo-from/15 text-sf-indigo-to";
    case "Agentforce":
      return "border-sf-gold-from/50 bg-sf-gold-from/15 text-sf-gold-to";
    case "Platform":
      return "border-white/25 bg-white/10 text-foreground";
    case "Sales Cloud":
      return "border-sf-electric-from/45 bg-sf-electric-from/15 text-sf-electric-to";
    case "Service Cloud":
      return "border-sf-trust-from/45 bg-sf-trust-from/15 text-sf-trust-to";
    default:
      return "border-white/20 bg-white/5 text-muted-foreground";
  }
}

function levelBadgeClass(level: StoryLevel) {
  switch (level) {
    case "Value Story":
      return "border-sf-gold-from/40 bg-sf-gold-from/10 text-sf-gold-from";
    case "Wisdom Layer":
      return "border-sf-purple-from/40 bg-sf-purple-from/10 text-sf-purple-to";
    case "Opportunity Story":
      return "border-sf-electric-from/40 bg-sf-electric-from/10 text-sf-electric-to";
    default:
      return "border-white/20 bg-white/5 text-muted-foreground";
  }
}

function matchesSearch(story: Story, q: string) {
  if (!q.trim()) return true;
  const hay = [
    story.title,
    story.objection,
    story.aiBaseline,
    story.humanWisdom,
    story.talkTrack,
    story.cloud,
    story.storyLevel,
  ]
    .join(" ")
    .toLowerCase();
  return hay.includes(q.toLowerCase());
}

export function StoryBank() {
  const searchParams = useSearchParams();
  const qParam = searchParams.get("q") ?? "";
  const [search, setSearch] = useState(qParam);
  const deferredSearch = useDeferredValue(search);

  useEffect(() => {
    setSearch(qParam);
  }, [qParam]);
  const [cloudFilter, setCloudFilter] = useState<StoryCloud | "all">("all");
  const [levelFilter, setLevelFilter] = useState<StoryLevel | "all">("all");
  const [objectionFilter, setObjectionFilter] = useState<string>("all");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const objections = useMemo(
    () => Array.from(new Set(stories.map((s) => s.objection))),
    [],
  );

  const filtered = useMemo(() => {
    return stories.filter((s) => {
      if (cloudFilter !== "all" && s.cloud !== cloudFilter) return false;
      if (levelFilter !== "all" && s.storyLevel !== levelFilter) return false;
      if (objectionFilter !== "all" && s.objection !== objectionFilter) return false;
      return matchesSearch(s, deferredSearch);
    });
  }, [cloudFilter, levelFilter, objectionFilter, deferredSearch]);

  async function copyTalkTrack(story: Story) {
    try {
      await navigator.clipboard.writeText(story.talkTrack);
      setCopiedId(story.id);
      window.setTimeout(() => setCopiedId((id) => (id === story.id ? null : id)), 2000);
    } catch {
      setCopiedId(null);
    }
  }

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-subheader text-muted-foreground">
          Story bank
        </p>
        <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          One-click talk-tracks
        </h1>
        <p className="max-w-2xl text-sm text-muted-foreground">
          Filter by cloud, story level, or objection. Each card contrasts the 98% AI baseline with the
          2% human wisdom layer—then copy the talk-track for live calls.
        </p>
      </header>

      <GlassChrome className="space-y-4 p-4 sm:p-5">
        <div className="grid gap-4 lg:grid-cols-[1.4fr_repeat(3,minmax(0,1fr))]">
          <div className="space-y-2">
            <Label htmlFor="story-search" className="text-xs uppercase tracking-subheader">
              Search
            </Label>
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="story-search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Title, objection, baseline, wisdom, talk-track…"
                className="border-white/15 bg-black/25 pl-9"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="story-filter-cloud" className="text-xs uppercase tracking-subheader">
              Cloud
            </Label>
            <select
              id="story-filter-cloud"
              value={cloudFilter}
              onChange={(e) => setCloudFilter(e.target.value as StoryCloud | "all")}
              className={filterSelectClass}
              style={filterSelectChevron}
            >
              <option value="all">All clouds</option>
              {storyClouds.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="story-filter-level" className="text-xs uppercase tracking-subheader">
              Story level
            </Label>
            <select
              id="story-filter-level"
              value={levelFilter}
              onChange={(e) => setLevelFilter(e.target.value as StoryLevel | "all")}
              className={filterSelectClass}
              style={filterSelectChevron}
            >
              <option value="all">All levels</option>
              {storyLevels.map((l) => (
                <option key={l} value={l}>
                  {l}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="story-filter-objection" className="text-xs uppercase tracking-subheader">
              Objection
            </Label>
            <select
              id="story-filter-objection"
              value={objectionFilter}
              onChange={(e) => setObjectionFilter(e.target.value)}
              className={filterSelectClass}
              style={filterSelectChevron}
            >
              <option value="all">All objections</option>
              {objections.map((o) => (
                <option key={o} value={o} title={o}>
                  {o}
                </option>
              ))}
            </select>
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          Showing {filtered.length} of {stories.length} stories
        </p>
      </GlassChrome>

      <div className="grid gap-6 lg:grid-cols-2">
        {filtered.map((story) => (
          <GlassChrome key={story.id} className="flex flex-col gap-4 p-5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="space-y-2">
                <h2 className="font-display text-lg font-semibold leading-snug">{story.title}</h2>
                <div className="flex flex-wrap gap-2">
                  <span
                    className={cn(
                      "rounded-full border px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide",
                      cloudBadgeClass(story.cloud),
                    )}
                  >
                    {story.cloud}
                  </span>
                  <span
                    className={cn(
                      "rounded-full border px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide",
                      levelBadgeClass(story.storyLevel),
                    )}
                  >
                    {story.storyLevel}
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => copyTalkTrack(story)}
                className={cn(
                  "inline-flex shrink-0 items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold uppercase tracking-wide transition",
                  copiedId === story.id
                    ? "border-sf-trust-from/60 bg-sf-trust-from/20 text-sf-trust-to"
                    : "border-white/20 bg-white/5 text-foreground hover:border-white/35 hover:bg-white/10",
                )}
              >
                <Copy className="size-3.5" />
                {copiedId === story.id ? "Copied!" : "Copy talk-track"}
              </button>
            </div>

            <p className="text-xs font-medium uppercase tracking-subheader text-muted-foreground">
              Objection
            </p>
            <p className="text-sm text-muted-foreground">{story.objection}</p>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2 rounded-2xl border border-white/10 bg-black/20 p-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-semibold uppercase tracking-subheader text-muted-foreground">
                    98% — AI baseline
                  </span>
                </div>
                <ScrollArea className="h-40 pr-2">
                  <p className="text-sm leading-relaxed text-muted-foreground">{story.aiBaseline}</p>
                </ScrollArea>
              </div>
              <div className="space-y-2 rounded-2xl border border-sf-gold-from/25 bg-gradient-to-br from-sf-gold-from/10 via-transparent to-sf-purple-from/10 p-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-semibold uppercase tracking-subheader text-sf-gold-from">
                    2% — Human wisdom
                  </span>
                </div>
                <ScrollArea className="h-40 pr-2">
                  <p className="text-sm leading-relaxed text-foreground/90">{story.humanWisdom}</p>
                </ScrollArea>
              </div>
            </div>

            <div className="space-y-2 rounded-2xl border border-white/10 bg-white/[0.03] p-3">
              <p className="text-[11px] font-semibold uppercase tracking-subheader text-muted-foreground">
                Talk-track (copy-ready)
              </p>
              <p className="text-sm leading-relaxed text-foreground/95">{story.talkTrack}</p>
            </div>
          </GlassChrome>
        ))}
      </div>

      {filtered.length === 0 ? (
        <GlassChrome className="p-6 text-center text-sm text-muted-foreground">
          No stories match your filters. Try clearing search or widening filters.
        </GlassChrome>
      ) : null}
    </div>
  );
}

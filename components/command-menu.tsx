"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Stethoscope } from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { stories } from "@/src/data/stories";

export function CommandMenu({ onOpenSurgery }: { onOpenSurgery: () => void }) {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  React.useEffect(() => {
    const openPalette = () => setOpen(true);
    window.addEventListener("two-percent:open-command-palette", openPalette);
    return () => window.removeEventListener("two-percent:open-command-palette", openPalette);
  }, []);

  const runCommand = React.useCallback((command: () => void) => {
    setOpen(false);
    command();
  }, []);

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Search hub, routes, or story titles…" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Navigate">
          <CommandItem onSelect={() => runCommand(() => router.push("/"))}>Dashboard</CommandItem>
          <CommandItem onSelect={() => runCommand(() => router.push("/story-bank"))}>Story Bank</CommandItem>
          <CommandItem onSelect={() => runCommand(() => router.push("/arena"))}>Arena</CommandItem>
          <CommandItem onSelect={() => runCommand(() => router.push("/about"))}>About — The manifesto</CommandItem>
          <CommandItem onSelect={() => runCommand(() => router.push("/faq"))}>FAQ — Tactical clarity</CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Actions">
          <CommandItem
            onSelect={() => {
              setOpen(false);
              window.setTimeout(() => onOpenSurgery(), 0);
            }}
          >
            <Stethoscope className="mr-2 h-4 w-4 text-sf-blue" />
            Submit for surgery (2% Lab intake)
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Story Bank (quick open)">
          {stories.map((s) => (
            <CommandItem
              key={s.id}
              value={`${s.title} ${s.cloud} ${s.storyLevel} ${s.objection} ${s.aiBaseline} ${s.humanWisdom} ${s.talkTrack}`}
              onSelect={() => runCommand(() => router.push(`/story-bank?q=${encodeURIComponent(s.title)}`))}
            >
              {s.title}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}

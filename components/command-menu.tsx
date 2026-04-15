"use client";

import * as React from "react";
import { useRouter } from "next/navigation";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { storyTemplates } from "@/lib/content/stories";

export function CommandMenu() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
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
      <CommandInput placeholder="Search hub or story titles…" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Navigate">
          <CommandItem onSelect={() => runCommand(() => router.push("/"))}>Dashboard</CommandItem>
          <CommandItem onSelect={() => runCommand(() => router.push("/story-bank"))}>
            Story Bank
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => router.push("/arena"))}>Arena</CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Story Bank (quick open)">
          {storyTemplates.map((s) => (
            <CommandItem
              key={s.id}
              value={`${s.title} ${s.tags.join(" ")}`}
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

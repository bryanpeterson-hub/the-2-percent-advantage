"use client";

import * as React from "react";
import { Zap } from "lucide-react";

type Props = {
  targetIso: string;
  title: string;
  isLiveNow?: boolean;
};

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

export function ArenaCountdown({ targetIso, title, isLiveNow }: Props) {
  const target = React.useMemo(() => new Date(targetIso).getTime(), [targetIso]);
  const [now, setNow] = React.useState(() => Date.now());

  React.useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const diff = Math.max(0, target - now);
  const days = Math.floor(diff / (24 * 60 * 60 * 1000));
  const hours = Math.floor((diff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
  const minutes = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000));
  const seconds = Math.floor((diff % (60 * 1000)) / 1000);

  return (
    <div className="flex h-full flex-col">
      <div className="mb-4 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-subheader text-muted-foreground">
          <Zap className="h-4 w-4 text-sf-yellow" />
          The Arena
        </div>
        {isLiveNow ? (
          <span className="rounded-full border border-sf-yellow/60 bg-sf-yellow/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-sf-yellow shadow-glow-yellow">
            Live now
          </span>
        ) : (
          <span className="rounded-full border border-sf-blue/40 bg-sf-blue/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-sf-blue">
            Next pulse
          </span>
        )}
      </div>
      <p className="mb-6 text-lg font-semibold leading-snug text-foreground">{title}</p>
      {isLiveNow ? (
        <p className="mt-auto text-sm text-sf-teal">
          Session is live—join from your calendar or Slack ping. Countdown resumes after this window.
        </p>
      ) : (
        <div className="mt-auto grid grid-cols-4 gap-2 text-center">
          {[
            { label: "Days", value: days },
            { label: "Hrs", value: hours },
            { label: "Min", value: minutes },
            { label: "Sec", value: seconds },
          ].map((u) => (
            <div
              key={u.label}
              className="rounded-xl border border-white/10 bg-black/30 px-1 py-3 shadow-[0_0_24px_-8px_rgba(1,118,211,0.3)]"
            >
              <div className="font-mono text-xl font-semibold tabular-nums text-foreground md:text-2xl">
                {pad(u.value)}
              </div>
              <div className="mt-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                {u.label}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

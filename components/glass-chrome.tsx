import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function GlassChrome({
  children,
  className,
  innerClassName,
}: {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
}) {
  return (
    <div className={cn("glass-chrome", className)}>
      <div className={cn("glass-chrome-inner", innerClassName)}>{children}</div>
    </div>
  );
}

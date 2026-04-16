"use client";

/**
 * Soft animated mesh: charcoal base + drifting Electric Blue & Salesforce Violet glows.
 */
export function CinematicBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden bg-[#0a0a0a]" aria-hidden>
      <div className="absolute inset-0 bg-mesh-gradient opacity-90" />
      <div
        className="absolute -left-[20%] -top-[25%] h-[70vmin] w-[70vmin] rounded-full bg-[#0176D3]/35 blur-[100px] animate-mesh-a"
        style={{ willChange: "transform, opacity" }}
      />
      <div
        className="absolute -bottom-[20%] -right-[15%] h-[65vmin] w-[65vmin] rounded-full bg-[#730394]/32 blur-[110px] animate-mesh-b"
        style={{ willChange: "transform, opacity" }}
      />
      <div
        className="absolute left-[35%] top-[40%] h-[45vmin] w-[45vmin] rounded-full bg-[#0176D3]/18 blur-[90px] animate-mesh-c"
        style={{ willChange: "transform, opacity" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/40 via-transparent to-[#0a0a0a]/85" />
    </div>
  );
}

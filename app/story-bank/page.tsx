import { Suspense } from "react";

import { StoryBankClient } from "./story-bank-client";

export default function StoryBankPage() {
  return (
    <Suspense
      fallback={
        <div className="space-y-4">
          <div className="h-8 w-48 animate-pulse rounded-md bg-white/10" />
          <div className="h-32 animate-pulse rounded-xl bg-white/5" />
        </div>
      }
    >
      <StoryBankClient />
    </Suspense>
  );
}

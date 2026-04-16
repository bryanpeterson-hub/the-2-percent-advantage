import type { Metadata } from "next";
import { MessageSquare } from "lucide-react";

import { faqItems } from "@/lib/content/faq";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { GlassChrome } from "@/components/glass-chrome";
import { Button } from "@/components/ui/button";
import { SLACK_CHANNEL_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ",
};

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-2xl space-y-10 pb-8">
      <div className="space-y-3 text-center">
        <p className="text-xs font-semibold uppercase tracking-subheader text-sf-blue">Tactical clarity</p>
        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Common Questions. Human Answers.
        </h1>
        <p className="text-sm text-muted-foreground md:text-base">
          Straight talk for busy Solution Engineers—no brochure voice.
        </p>
      </div>

      <Accordion type="single" collapsible className="space-y-3">
        {faqItems.map((item) => (
          <AccordionItem key={item.id} value={item.id} className="border-white/10 px-3">
            <AccordionTrigger className="text-left text-base hover:no-underline">{item.question}</AccordionTrigger>
            <AccordionContent className="text-base leading-relaxed">{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <GlassChrome>
        <div className="glass-chrome-inner flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
          <div className="flex-1 space-y-1">
            <p className="text-sm font-semibold text-foreground">Still stuck?</p>
            <p className="text-sm text-muted-foreground">
              Jump into the cohort Slack—fast answers, links, and peer examples.
            </p>
          </div>
          <Button variant="primary" className="shrink-0 gap-2 shadow-glow" asChild>
            <a href={SLACK_CHANNEL_URL} target="_blank" rel="noopener noreferrer">
              <MessageSquare className="h-4 w-4" />
              Open Slack
            </a>
          </Button>
        </div>
      </GlassChrome>
    </div>
  );
}

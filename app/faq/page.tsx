import type { Metadata } from "next";

import { faqItems } from "@/lib/content/faq";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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
    </div>
  );
}

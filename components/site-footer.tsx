import Link from "next/link";
import { MessageSquare } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SLACK_CHANNEL_URL } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-white/10 py-10">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="space-y-3 text-sm text-muted-foreground">
          <p className="font-medium text-foreground">The 2% Advantage</p>
          <p className="max-w-md text-xs leading-relaxed">
            For internal Salesforce use only. Join the cohort Slack for questions, resources, and wins.
          </p>
          <Button variant="outline" size="sm" className="w-fit gap-2 border-sf-teal/40 text-sf-teal hover:bg-sf-teal/10" asChild>
            <a href={SLACK_CHANNEL_URL} target="_blank" rel="noopener noreferrer">
              <MessageSquare className="h-4 w-4" />
              Open Slack channel
            </a>
          </Button>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link href="/about" className="text-muted-foreground transition-colors hover:text-sf-blue">
            About
          </Link>
          <Link href="/faq" className="text-muted-foreground transition-colors hover:text-sf-blue">
            FAQ
          </Link>
          <Link href="/story-bank" className="text-muted-foreground transition-colors hover:text-sf-blue">
            Story Bank
          </Link>
          <Link href="/arena" className="text-muted-foreground transition-colors hover:text-sf-blue">
            Arena
          </Link>
          <a
            href={SLACK_CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-sf-teal"
          >
            Slack
          </a>
        </nav>
      </div>
    </footer>
  );
}

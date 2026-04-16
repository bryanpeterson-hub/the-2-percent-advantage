import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-white/10 py-10">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1 text-sm text-muted-foreground">
          <p className="font-medium text-foreground">The 2% Advantage</p>
          <p className="max-w-md text-xs leading-relaxed">
            For internal Salesforce use only. Slack channel and program contacts can be linked here when ready.
          </p>
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
        </nav>
      </div>
    </footer>
  );
}

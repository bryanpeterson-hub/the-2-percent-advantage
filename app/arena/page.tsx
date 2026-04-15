"use client";

import * as React from "react";
import { toast } from "sonner";
import { Archive, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { pastSessions } from "@/lib/content/arena";

export default function ArenaPage() {
  const [account, setAccount] = React.useState("");
  const [stage, setStage] = React.useState("");
  const [risk, setRisk] = React.useState("");
  const [ask, setAsk] = React.useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Intake captured (demo—wire to backend later)");
    setAccount("");
    setStage("");
    setRisk("");
    setAsk("");
  };

  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-subheader text-muted-foreground">
          Live session hub
        </p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">The Arena</h1>
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Minimal intake for deal surgery—what matters is the decision, the doubt, and the next proof step.
        </p>
      </div>

      <Card className="glass-panel border-white/10">
        <CardHeader>
          <CardTitle className="text-xl">Deal surgery intake</CardTitle>
          <CardDescription>Keep it tight. Four fields. One narrative job-to-be-done.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-5 md:grid-cols-2" onSubmit={submit}>
            <div className="space-y-2 md:col-span-1">
              <Label htmlFor="account">Account / opportunity</Label>
              <Input
                id="account"
                value={account}
                onChange={(e) => setAccount(e.target.value)}
                placeholder="e.g., Contoso renewal"
                autoComplete="off"
              />
            </div>
            <div className="space-y-2 md:col-span-1">
              <Label htmlFor="stage">Stage & stakeholders</Label>
              <Input
                id="stage"
                value={stage}
                onChange={(e) => setStage(e.target.value)}
                placeholder="e.g., Technical win, CFO pending"
                autoComplete="off"
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="risk">Top risk or objection</Label>
              <Input
                id="risk"
                value={risk}
                onChange={(e) => setRisk(e.target.value)}
                placeholder="e.g., Trust after failed rollout"
                autoComplete="off"
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="ask">What you want from the room</Label>
              <textarea
                id="ask"
                value={ask}
                onChange={(e) => setAsk(e.target.value)}
                rows={4}
                placeholder="e.g., Reframe ROI narrative + proof ladder for security team"
                className="flex w-full rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-sm shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-fuchsia-500/40"
              />
            </div>
            <div className="md:col-span-2">
              <Button type="submit" variant="accent" className="gap-2">
                <Send className="h-4 w-4" />
                Submit intake
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
          <Archive className="h-4 w-4 text-muted-foreground" />
          Archive
        </div>
        <Separator className="bg-white/10" />
        <div className="grid gap-4 md:grid-cols-2">
          {pastSessions.map((s) => (
            <Card key={s.id} className="glass-panel border-white/10">
              <CardHeader>
                <CardTitle className="text-lg">{s.title}</CardTitle>
                <CardDescription>{s.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">{s.notes}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

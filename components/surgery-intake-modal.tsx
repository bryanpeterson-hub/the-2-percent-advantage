"use client";

import * as React from "react";
import { Stethoscope } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function SurgeryIntakeModal({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [account, setAccount] = React.useState("");
  const [stage, setStage] = React.useState("");
  const [risk, setRisk] = React.useState("");
  const [ask, setAsk] = React.useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Submitted for 2% Lab surgery (demo—connect to backend when ready)");
    onOpenChange(false);
    setAccount("");
    setStage("");
    setRisk("");
    setAsk("");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto border-white/10 bg-[#0a0a0a]/95 p-0 sm:max-w-md">
        <div className="border-b border-white/10 bg-gradient-to-r from-sf-blue/20 via-sf-violet/15 to-transparent px-6 py-5">
          <DialogHeader>
            <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg border border-sf-blue/40 bg-sf-blue/15 text-sf-blue">
              <Stethoscope className="h-5 w-5" />
            </div>
            <DialogTitle className="text-xl">Submit for surgery</DialogTitle>
            <DialogDescription>
              Minimal intake for the 2% Lab—what decision is stuck, and what proof does the room need?
            </DialogDescription>
          </DialogHeader>
        </div>
        <form onSubmit={submit} className="space-y-4 px-6 py-5">
          <div className="space-y-2">
            <Label htmlFor="sx-account">Account / opportunity</Label>
            <Input
              id="sx-account"
              value={account}
              onChange={(e) => setAccount(e.target.value)}
              placeholder="e.g., Contoso renewal"
              autoComplete="off"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="sx-stage">Stage & stakeholders</Label>
            <Input
              id="sx-stage"
              value={stage}
              onChange={(e) => setStage(e.target.value)}
              placeholder="e.g., Security review, CFO pending"
              autoComplete="off"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="sx-risk">Top risk or objection</Label>
            <Input
              id="sx-risk"
              value={risk}
              onChange={(e) => setRisk(e.target.value)}
              placeholder="e.g., Trust after failed rollout"
              autoComplete="off"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="sx-ask">What you want from the Lab</Label>
            <textarea
              id="sx-ask"
              value={ask}
              onChange={(e) => setAsk(e.target.value)}
              rows={3}
              placeholder="e.g., Reframe ROI + proof ladder for the CISO"
              className="flex w-full rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-sm shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-sf-teal/50"
            />
          </div>
          <Button type="submit" variant="primary" className="w-full">
            Submit to 2% Lab
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

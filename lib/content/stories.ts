export type Cloud = "Marketing" | "Sales" | "Service" | "Data" | "AI";
export type Industry =
  | "Financial Services"
  | "Healthcare"
  | "Retail"
  | "Manufacturing"
  | "Public Sector";
export type ObjectionType =
  | "Price"
  | "Timing"
  | "Trust"
  | "Status Quo"
  | "Technical Risk";

export type StoryTemplate = {
  id: string;
  title: string;
  summary: string;
  talkTrack: string;
  cloud: Cloud;
  industry: Industry;
  objection: ObjectionType;
  tags: string[];
};

export const storyTemplates: StoryTemplate[] = [
  {
    id: "s1",
    title: "From feature tour to outcome arc",
    summary: "Reframe a demo checklist into a before/after transformation story.",
    talkTrack:
      "Most teams start with a long list of features. The win is simpler: show the moment the business breathes easier—fewer escalations, faster revenue recognition, clearer compliance. Anchor every click to that moment.",
    cloud: "Sales",
    industry: "Financial Services",
    objection: "Status Quo",
    tags: ["discovery", "narrative"],
  },
  {
    id: "s2",
    title: "The trust bridge after a failed rollout",
    summary: "Acknowledge past pain without blame; position governance as guardrails.",
    talkTrack:
      "If a prior rollout burned the team, name it plainly. Then show how decisions, approvals, and visibility are first-class—not an afterthought—so leaders can sponsor change without fearing another surprise.",
    cloud: "Service",
    industry: "Healthcare",
    objection: "Trust",
    tags: ["change", "governance"],
  },
  {
    id: "s3",
    title: "Marketing: prove orchestration, not volume",
    summary: "Tie journeys to revenue signals, not email counts.",
    talkTrack:
      "Volume is easy to misunderstand. The story buyers want is orchestration: the right message, the right moment, with measurable pipeline impact—especially when budgets tighten.",
    cloud: "Marketing",
    industry: "Retail",
    objection: "Price",
    tags: ["value", "measurement"],
  },
  {
    id: "s4",
    title: "Data Cloud without the science fair",
    summary: "Lead with decisions enabled, not tables ingested.",
    talkTrack:
      "Ingestion is necessary; decisions are persuasive. Start with the executive question—churn risk, service cost, compliance exposure—and walk backward to the unified profile that makes the answer credible.",
    cloud: "Data",
    industry: "Manufacturing",
    objection: "Technical Risk",
    tags: ["data", "executive"],
  },
  {
    id: "s5",
    title: "Procurement timing stall",
    summary: "Give procurement a narrative they can forward.",
    talkTrack:
      "When timing stalls, buyers are often assembling an internal memo. Give them language: problem statement, quantified impact, phased rollout, and risk controls. Make the email practically pre-written.",
    cloud: "Sales",
    industry: "Public Sector",
    objection: "Timing",
    tags: ["procurement", "champion"],
  },
  {
    id: "s6",
    title: "Agentforce without the sci-fi pitch",
    summary: "Ground AI in governed actions and measurable outcomes.",
    talkTrack:
      "Start with the job the agent does on Tuesday: deflect tier-1, draft follow-ups, or surface next-best-action—then show the guardrails: permissions, audit, human handoff. One customer metric beats five feature bullets.",
    cloud: "AI",
    industry: "Financial Services",
    objection: "Trust",
    tags: ["ai", "governance"],
  },
];

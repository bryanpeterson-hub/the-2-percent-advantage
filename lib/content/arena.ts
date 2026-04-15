export type PastSession = {
  id: string;
  title: string;
  date: string;
  notes: string;
};

export const pastSessions: PastSession[] = [
  {
    id: "a1",
    title: "Deal Surgery — Enterprise Retail",
    date: "2026-04-02",
    notes: "Reframed ROI around shrink and associate productivity; aligned stakeholders on pilot scope.",
  },
  {
    id: "a2",
    title: "Scenario Lab — Public Sector RFP",
    date: "2026-03-19",
    notes: "Tightened compliance narrative; added proof ladder for identity and audit trails.",
  },
  {
    id: "a3",
    title: "Deal Surgery — Healthcare",
    date: "2026-03-05",
    notes: "Shifted from product parity to patient journey continuity; secured exec sponsor storyline.",
  },
];

export const nextLiveSession = {
  title: "Scenario Sprint — Solution Engineering Lab",
  datetime: "2026-04-18T16:00:00",
  timezone: "PT",
  location: "Internal calendar (add link when ready)",
};

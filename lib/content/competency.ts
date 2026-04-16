export type CompetencyBadge = {
  id: string;
  label: string;
  description: string;
  earned: boolean;
};

export const competencyBadges: CompetencyBadge[] = [
  {
    id: "narrative-strategist",
    label: "Narrative Strategist",
    description: "Playbook depth + Arena reps",
    earned: true,
  },
  {
    id: "scenario-athlete",
    label: "Scenario Athlete",
    description: "Complete 3 structured sprints",
    earned: false,
  },
  {
    id: "deal-surgeon",
    label: "Deal Surgeon",
    description: "Submit & ship a Lab outcome",
    earned: false,
  },
];

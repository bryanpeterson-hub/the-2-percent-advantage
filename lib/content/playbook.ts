import { READINESS_CURRICULUM_URL } from "@/lib/site";

/** Weekly spotlight copy; full curriculum opens in ACT. */
export const weeklyPlaybook = {
  moduleTitle: "Crafting the Narrative: From Features to Transformation",
  moduleSummary: "Structure stories for executive decisions—not screen tours.",
  thumbnailGradient:
    "linear-gradient(135deg, rgba(1,118,211,0.55) 0%, rgba(115,3,148,0.5) 50%, rgba(4,225,203,0.25) 100%)",
  /** Canonical course / curriculum deep link (override via env if the record moves). */
  curriculumUrl: process.env.NEXT_PUBLIC_READINESS_CURRICULUM_URL ?? READINESS_CURRICULUM_URL,
};

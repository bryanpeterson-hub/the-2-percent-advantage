export type FaqItem = { id: string; question: string; answer: string };

/** Tactical FAQ — blends SFMC reference topics with program-specific answers. */
export const faqItems: FaqItem[] = [
  {
    id: "ai-chef",
    question: "Can't I just use AI (Gemini/ChatGPT) to write my stories?",
    answer:
      "AI is your sous-chef, not the chef. It provides the floor (the 98%), but you provide the ceiling (the 2%). We teach you how to refine AI output with your unique expertise.",
  },
  {
    id: "time",
    question: "What is the time commitment?",
    answer:
      "We’ve optimized for the busy SE. 15–20 minutes of on-demand 'Playbook' videos per week, plus our weekly 'Pulse' sessions (alternating between Sprints and Labs).",
  },
  {
    id: "clouds",
    question: "Is this only for Marketing Cloud?",
    answer:
      "While we launched with Marketing Cloud, the '2% Advantage' principles are cloud-agnostic. The program is designed for all Solution Engineers regardless of product focus.",
  },
  {
    id: "sprint-vs-lab",
    question: "What is a 'Scenario Sprint' vs. a '2% Lab'?",
    answer:
      "Sprints are structured, high-intensity workshops to practice specific skills. Labs are open-mic 'Deal Surgery' sessions where we work on your actual, live opportunities.",
  },
  {
    id: "badge",
    question: "How do I get my 'Narrative Strategist' badge?",
    answer:
      "Badges are awarded based on Playbook completion and active participation in the Arena (Sprints/Labs).",
  },
  {
    id: "what-is",
    question: "What is Storytelling for Impact: The 2% Advantage?",
    answer:
      "A program for Solution Engineers to connect emotionally with clients, articulate value, and win deals through narrative—blending frameworks, practice, and live deal coaching.",
  },
  {
    id: "who-for",
    question: "Who is this for?",
    answer:
      "Solutions Engineers who want stronger discovery, clearer differentiation, and presentations that land with executives—not just technical buyers.",
  },
  {
    id: "slack",
    question: "How do I get help or ask questions?",
    answer:
      "Questions, help, and materials live in the program Slack channel. Reach out to your cohort lead for access.",
  },
];

import { SLACK_CHANNEL_URL } from "@/lib/site";

export type FaqItem = { id: string; question: string; answer: string };

const slackLine = `Use the program Slack channel for questions, help, and materials: ${SLACK_CHANNEL_URL}`;

/** Tactical FAQ — program-specific answers plus topics from the source FAQ where not redundant. */
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
      "We’ve optimized for the busy SE. 15–20 minutes of on-demand 'Playbook' videos per week, plus our weekly 'Pulse' sessions (alternating between Sprints and Labs). The ACT curriculum is also designed so you can progress asynchronously between live touchpoints.",
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
    id: "what-is",
    question: "What is Storytelling for Impact: The 2% Advantage?",
    answer:
      "A comprehensive program for Solutions Engineers to develop storytelling and presentation skills: craft compelling narratives, connect emotionally with clients, and differentiate in a crowded marketplace—using proven techniques that blend emotion with strategy.",
  },
  {
    id: "who-for",
    question: "Who is this course for?",
    answer:
      "Solutions Engineers who want to elevate communication, improve client engagement, and increase sales success—whether you are refining a pitch, improving engagement, or aligning presentations with customer needs.",
  },
  {
    id: "what-learn",
    question: "What will I learn in this course?",
    answer:
      "You’ll build foundations and advanced skills: the psychology of storytelling and emotional engagement; narrative structure for impact; visual storytelling; engagement techniques for interactive presentations; personal branding and authenticity; storytelling at feature and product level; and continuous improvement through practice and feedback.",
  },
  {
    id: "how-structured",
    question: "How is the course structured?",
    answer:
      "A mix of on-demand video lessons, live workshops, hands-on activities, and peer engagement (clinics, review circles). It balances flexibility with interactive learning—including frameworks like Hero’s Journey and Problem–Solution, real-world case studies, and adapting stories to specific scenarios.",
  },
  {
    id: "how-long-complete",
    question: "How long does the course take to complete?",
    answer:
      "The experience is designed to unfold over several weeks, combining asynchronous learning with scheduled workshops. Pace is flexible, with group touchpoints on a predictable rhythm so you can plan around customer work.",
  },
  {
    id: "activities",
    question: "What kind of activities are included?",
    answer:
      "Hands-on workshops to craft and deliver stories, interactive exercises, peer review circles for constructive feedback, and showcase moments to present refined skills.",
  },
  {
    id: "tools-resources",
    question: "What tools and resources will I have access to?",
    answer:
      "Video tutorials for ongoing learning, templates and frameworks to structure stories, real-world case studies for practice, and peer feedback / mentoring opportunities for continuous improvement.",
  },
  {
    id: "prior-experience",
    question: "Do I need any prior experience in storytelling?",
    answer:
      "No prior experience is required. The program starts with fundamentals and builds progressively—valuable whether you are new to storytelling or refining existing skills.",
  },
  {
    id: "role-impact",
    question: "How will this course help me in my role?",
    answer:
      "You’ll differentiate in pitches, build stronger client connections, present solutions aligned to needs and aspirations, and improve win rates—by making presentations memorable, not just informative.",
  },
  {
    id: "two-percent-meaning",
    question: 'What is the "2% Advantage"?',
    answer:
      "The small but critical edge storytelling provides in competitive scenarios: moving from generic information to emotionally resonant, memorable delivery—so you stand out when buyers hear the same AI-shaped scripts from everyone else.",
  },
  {
    id: "revisit",
    question: "Can I revisit the course content after completing it?",
    answer:
      "Yes. You can keep using materials—including videos and templates—for reference and practice after the formal program window.",
  },
  {
    id: "track-progress",
    question: "How can I track my progress and improvement?",
    answer:
      "Through structured feedback, peer reviews, showcase opportunities, and self-assessment against storytelling and presentation effectiveness.",
  },
  {
    id: "slack",
    question: "How do I get help or ask questions?",
    answer: slackLine,
  },
  {
    id: "contact",
    question: "Who can I contact about this?",
    answer:
      "For other questions or feedback, reach out to Bryan Peterson. For day-to-day cohort discussion, use the Slack channel above.",
  },
];

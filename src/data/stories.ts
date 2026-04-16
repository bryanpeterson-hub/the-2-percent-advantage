/**
 * Source of truth for Story Bank narratives (98% vs 2% + talk-tracks).
 * Terminology: "Data 36O" and "Agentforce" as specified.
 */
export type StoryCloud = "Data 36O" | "Agentforce" | "Platform" | "Sales Cloud" | "Service Cloud";

export type StoryLevel = "Value Story" | "Wisdom Layer" | "Opportunity Story";

export type Story = {
  id: string;
  title: string;
  cloud: StoryCloud;
  objection: string;
  storyLevel: StoryLevel;
  aiBaseline: string;
  humanWisdom: string;
  talkTrack: string;
};

export const stories: Story[] = [
  {
    id: "data-36o-villain",
    title: "The 'Digital Amnesia' Narrative",
    cloud: "Data 36O",
    objection: "We already have a Data Lake/CDP. Our data is 'fine' where it is.",
    storyLevel: "Value Story",
    aiBaseline:
      "Most companies have data in silos. This makes it hard for Sarah, the Marketing Manager, to see a single view of the customer. Data 36O connects these silos into a unified profile so Sarah can send more relevant emails and improve her ROI.",
    humanWisdom:
      "Don't talk about silos; talk about Digital Amnesia. Every time your customer interacts with your brand and you don't recognize them, you are effectively telling them, 'I don't know you.' Imagine walking into your favorite coffee shop every day for five years, and every morning the barista asks for your name. That’s not a data problem; that’s a relationship failure. Data 36O isn't a connector; it’s your brand’s memory.",
    talkTrack:
      "The villain here isn't 'fragmented data'—it’s Digital Amnesia. Your systems are effectively ignoring the signals your customers are sending you. Data 36O ensures that when a customer hits 'Unsubscribe' at 9:00 AM, your agent doesn't try to upsell them at 9:05 AM. We are giving your brand the ability to actually remember its friends.",
  },
  {
    id: "agentforce-trust",
    title: "The 'Transparent Co-Pilot' Framework",
    cloud: "Agentforce",
    objection: "I don't trust the 'black box.' I'm worried about hallucinations or losing control.",
    storyLevel: "Wisdom Layer",
    aiBaseline:
      "Agentforce is built on the Trust Layer. It uses grounding and data masking to ensure your data is safe. It helps you be more productive by generating content and predicting outcomes within a secure environment.",
    humanWisdom:
      "The fear isn't about the tech; it's about control. Think of Agentforce as a High-Performance GPS. You still own the car. You still choose the destination. You still have your hands on the wheel. The GPS simply does the 'heavy lifting' of calculating variables like traffic and weather that you don't have time to process while driving 70mph. My job is to show you the 'Human-in-the-Loop' guardrails where the AI suggests, but you decide.",
    talkTrack:
      "I’ve sat in rooms with leaders who are terrified that AI will say something 'off-brand.' That’s why we built Agentforce as a 'Glass Box.' You aren't handing the keys to a robot; you’re hiring a world-class navigator who works for you. You provide the intuition; Agentforce provides the scale.",
  },
  {
    id: "cfo-whisperer",
    title: "The 'Invisible Tax' Metaphor",
    cloud: "Platform",
    objection: "The price is too high. We can do this cheaper with a point solution.",
    storyLevel: "Opportunity Story",
    aiBaseline:
      "Salesforce offers an integrated platform that reduces Total Cost of Ownership (TCO). While point solutions are cheaper upfront, the integration costs and maintenance fees make Salesforce a more cost-effective choice over three years.",
    humanWisdom:
      "Every point solution adds an 'Invisible Tax' to your team's productivity. It’s the '20-minute tax' your reps pay every time they log out of one system to find a note in another. It’s the 'Innovation Tax' you pay when IT spends 80% of their budget just keeping the 'pipes' connected. We aren't comparing licenses; we are looking at Tax Reform—removing the friction that acts as a drag on your speed.",
    talkTrack:
      "Point solutions are like buying cheap parts for a custom car—eventually, the cost of the mechanic to keep them working together exceeds the cost of the car itself. We are here to eliminate the 'Integration Tax' so your team can actually move at the speed of your customers.",
  },
  {
    id: "sales-fog-of-war",
    title: "The 'Forecast Clarity' Narrative",
    cloud: "Sales Cloud",
    objection: "We have a CRM. Our reps enter their deals. We don't need new forecasting tools.",
    storyLevel: "Opportunity Story",
    aiBaseline:
      "Sales Cloud provides real-time visibility into your pipeline. It helps managers track deal stages and close dates accurately, reducing manual entry errors and ensuring targets are met.",
    humanWisdom:
      "Sales leaders don't fear 'data entry'—they fear the Fog of War. It’s that moment two weeks before quarter-end when a 'Commit' deal feels shaky but you have no evidence to prove it. Most forecasts are just a consensus of optimism. We aren't giving you a reporting tool; we're giving you a truth-detector that flags when a deal hasn't had an email exchange in 14 days, regardless of what the rep says.",
    talkTrack:
      "Your current forecast is based on hope. We’re moving you to a forecast based on behavior. We aren't just tracking deals; we’re clearing the 'Fog of War' so you can stop guessing and start leading with wisdom.",
  },
  {
    id: "service-cost-center",
    title: "The 'Profit Center' Pivot",
    cloud: "Service Cloud",
    objection: "Service is just a cost center. We want the cheapest possible way to close tickets.",
    storyLevel: "Value Story",
    aiBaseline:
      "Service Cloud improves agent productivity by providing a 360-degree view of the customer. Features like Case Management allow for faster resolution times and higher CSAT scores, reducing operational costs.",
    humanWisdom:
      "When you minimize Service, you fall into the 'Cost Center Trap'—optimizing for the end of a relationship rather than the growth of it. Every ticket is actually a moment of maximum attention. If you just try to get off the phone fast, you throw away a sales opportunity. We turn agents from 'problem solvers' into 'value creators' who can fix the problem and suggest the next right step based on wisdom.",
    talkTrack:
      "Stop measuring how fast your agents can hang up. Start measuring how much trust they build. A resolved case is a satisfied customer; a resolved case with a personalized recommendation is a lifelong partner. Let's escape the Cost Center Trap together.",
  },
];

export const storyClouds: StoryCloud[] = Array.from(new Set(stories.map((s) => s.cloud)));
export const storyLevels: StoryLevel[] = Array.from(new Set(stories.map((s) => s.storyLevel)));

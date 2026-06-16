import type { Project } from "../types";

export const shortify: Project = {
  id: "shortify",

  title: "Shortify",

  description:
    "Short-form social media platform with multilingual sentiment analysis.",

  category: "personal",

  featured: true,

  heroTitle: "Social Intelligence at Scale",

  heroSubtitle:
    "A short-form content platform that helps creators understand audience sentiment across languages.",

  problem:
    "Creators receive thousands of comments and struggle to understand audience reactions manually.",

  solution:
    "Built a social platform with multilingual sentiment analysis to surface audience insights automatically.",

  highlights: [
    "Multilingual sentiment analysis",
    "Short-form content platform",
    "Creator analytics",
    "AWS-backed media storage",
  ],

  metrics: [
    {
      label: "Languages",
      value: "3",
    },
    {
      label: "Stack",
      value: "Full Stack",
    },
    {
      label: "Focus",
      value: "AI",
    },
  ],

  theme: {
    accent: "#22d3ee",
    glow: "#06b6d4",
  },

  techStack: [
    "Next.js",
    "TypeScript",
    "MongoDB",
    "AWS",
  ],

  tags: [
    "AI",
    "Social Media",
    "Analytics",
  ],

  relatedSkills: [
    "react",
    "nextjs",
    "mongodb",
    "nlp",
  ],

  relatedExperience: [],
  relatedProjects: [],

  visual: {
    background: "",
  },

  githubUrl:
    "https://github.com/ArnavKh/Shortify",

  videoUrl:
    "https://www.linkedin.com/feed/update/urn:li:activity:7290056098395389952/",

  screenshots: [
    "/images/projects/shortify/feed.png",
    "/images/projects/shortify/analytics.png",
    "/images/projects/shortify/sentiment.png",
  ],
};
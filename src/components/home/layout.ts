export const DESKTOP_LAYOUT = {
     nav: {
          projects: { x: 72, y: 46 },
          experience: { x: 20, y: 42 },
          timeline: { x: 55, y: 14 },
          lab: { x: 66, y: 78 },
     },
     skills: {
          React: { x: 76, y: 28 },
          TypeScript: { x: 42, y: 18 },
          "Node.js": { x: 22, y: 62 },
          MongoDB: { x: 58, y: 66 },
          AWS: { x: 36, y: 80 },
          AI: { x: 80, y: 68 },
          ERP: { x: 24, y: 34 },
          Leadership: { x: 82, y: 50 },
     },
};

export const TABLET_LAYOUT = {
     nav: {
          projects: { x: 85, y: 40 },
          experience: { x: 18, y: 40 },
          timeline: { x: 50, y: 16 },
          lab: { x: 60, y: 75 },
     },
     skills: {
          React: { x: 72, y: 24 },
          TypeScript: { x: 40, y: 20 },
          "Node.js": { x: 20, y: 58 },
          MongoDB: { x: 56, y: 65 },
          AWS: { x: 38, y: 72 },
          AI: { x: 76, y: 62 },
          ERP: { x: 24, y: 32 },
          Leadership: { x: 78, y: 46 },
     },
};

export const NAV_NODES = [
     {
          id: "projects",
          layoutId: "projects-node",
          title: "Projects",
          subtitle: "10+ Builds",
          route: "/projects",
          skills: ["React", "TypeScript", "MongoDB", "AI"],
     },
     {
          id: "experience",
          layoutId: "experience-node",
          title: "Experience",
          subtitle: "3 Companies",
          route: "/experience",
          skills: ["Leadership", "ERP"],
     },
     {
          id: "timeline",
          layoutId: "timeline-node",
          title: "Timeline",
          subtitle: "Journey So Far",
          route: "/timeline",
          skills: ["Leadership"],
     },
     {
          id: "lab",
          layoutId: "lab-node",
          title: "Lab",
          subtitle: "Experiments",
          route: "/lab",
          skills: ["AI", "React"],
     },
];

export const SKILL_NODES = [
     { title: "React" },
     { title: "TypeScript" },
     { title: "Node.js" },
     { title: "MongoDB" },
     { title: "AWS" },
     { title: "AI" },
     { title: "ERP" },
     { title: "Leadership" },
];

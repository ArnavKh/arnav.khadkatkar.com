export interface BaseEntity {
     id: string;
     title: string;
     description: string;
}

export interface Project {
     id: string;

     title: string;
     description: string;

     category:
     | "personal"
     | "professional"
     | "research";

     featured?: boolean;

     techStack: string[];
     tags: string[];

     relatedSkills: string[];
     relatedProjects: string[];
     relatedExperience: string[];

     // New

     heroTitle: string;
     heroSubtitle: string;

     problem: string;
     solution: string;

     highlights: string[];

     metrics?: {
          label: string;
          value: string;
     }[];

     theme: {
          accent: string;
          glow: string;
     };

     visual: {
          background: string;
          image?: string;
     }
}

export interface Experience {
     id: string;

     company: string;
     role: string;

     description: string;

     techStack: string[];

     relatedProjects: string[];
     relatedSkills: string[];
}

export interface Skill {
     id: string;
     title: string;

     description: string;

     category:
     | "frontend"
     | "backend"
     | "database"
     | "cloud"
     | "ai"
     | "leadership"
     | "research";

     relatedProjects: string[];
     relatedExperience: string[];
}

export interface TimelineEvent extends BaseEntity {
     type: "timeline";

     category:
     | "education"
     | "career"
     | "leadership"
     | "project"
     | "sports";

     date?: string;

     relatedProjects?: string[];
     relatedExperience?: string[];
}

export interface LabExperiment extends BaseEntity {
     type: "lab";

     slug: string;

     tags: string[];

     featured?: boolean;
}
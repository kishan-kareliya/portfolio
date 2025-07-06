import { Github, Twitter, Linkedin } from "lucide-react";

export const technologiesData = {
  "Programming Languages": ["TypeScript", "Java", "Python", "JavaScript", "C"],
  Frameworks: ["NodeJS", "Express"],
  "UI Frameworks": ["React", "Next.js", "Shadcn/UI", "TailwindCSS"],
  Database: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
  "Platform/Cloud": [
    "Vercel",
    "Render",
    "AWS (EC2, S3, Lambda)",
    "Docker",
    "GitHub Actions",
  ],
  Tools: ["Git", "VS Code", "Postman", "ESLint", "Prettier"],
};

export const projectsData = [
  {
    title: "JobGenAI",
    description:
      "AI-powered job matching tool that analyzes resumes and recommends personalized job listings based on user roles and location. It uses LLMs to parse resumes, scrapes real-time job data from platforms like LinkedIn and Naukri, and scores jobs based on relevance, Each job includes strengths, weaknesses, and actionable suggestions, helping users apply jobs smarter and faster.",
    technologies: [
      "React",
      "Node.js",
      "Python",
      "AWS Lambda",
      "Step Functions",
      "Groq (LLaMA-3)",
      "Neon (PostgreSQL)",
      "Prisma",
      "Puppeteer",
      "Tailwind CSS",
    ],
    links: {
      live: "https://www.jobgenai.tech",
    },
  },
  {
    title: "Codestream",
    description:
      "Real time collaborative coding platform where users can create coding rooms, select a programming languages, and write and execute code together in VS Code-like editor in browser. Code changes are synced live across participants using WebSocket-based real-time events, and code is executed securely using the Piston API, supporting multiple languages for seamless group coding or interviews.",
    technologies: [
      "Node.js",
      "Express",
      "React",
      "Socket.IO",
      "Piston API",
      "Tailwind CSS",
      "MonacoEditor",
    ],
    links: {
      live: "https://codestreams.vercel.app",
      github: "https://github.com/kishan-kareliya/Code-Stream-Client",
    },
  },
  {
    title: "Elib Dashboard",
    description:
      "Book management dashboard with authentication, allowing users to add, update, delete, and browse books with cover images. Built with a clean UI using React, ShadCN, and Tailwind CSS, it features JWT-based authentication, secure access control, Cloudinary integration for image uploads, and a MongoDB database for persistent storage.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Shadcn/UI",
      "Cloudinary",
      "Tailwind CSS",
    ],
    links: {
      github: "https://github.com/kishan-kareliya/elib-backend",
    },
  },
];

// Social links data
export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/kishan-kareliya",
    icon: Github,
  },
  {
    name: "Twitter",
    url: "https://x.com/kishann__12",
    icon: Twitter,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/kishan-kareliya/",
    icon: Linkedin,
  },
];

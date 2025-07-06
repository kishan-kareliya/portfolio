"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Moon,
  Sun,
  Github,
  Twitter,
  Linkedin,
  ExternalLink,
} from "lucide-react";
import ContactForm from "@/components/contact-page";

const technologiesData = {
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

const projectsData = [
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
const socialLinks = [
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

export default function Portfolio() {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const themeClasses = isDark
    ? "bg-[#1f1f1f] text-[#e5e5e5]"
    : "bg-[#fafaf9] text-[#44403c]";
  const borderColor = isDark ? "border-[#3d3d3d]" : "border-[#e0e0e0]";
  const linkColor = isDark
    ? "text-[#e6a678] hover:text-[#edb88a]"
    : "text-[#d4926f] hover:text-[#c8855f]";
  const accentColor = isDark ? "text-[#ffffff]" : "text-[#000000]";
  const headingColor = isDark ? "text-[#e6a678]" : "text-[#d4926f]";
  const bodyTextColor = isDark ? "text-[#b8b8b8]" : "text-[#5a5a5a]";

  return (
    <div
      className={`min-h-screen transition-none ${themeClasses}`}
      style={{ fontFamily: "JetBrains Mono, monospace" }}
    >
      {/* Theme Toggle */}
      <div className="fixed top-6 right-6 z-10">
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleTheme}
          className={`p-2 ${
            isDark ? "hover:bg-[#5a5a5a]" : "hover:bg-[#f0ede8]"
          }`}
        >
          {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-4 w-4" />}
        </Button>
      </div>

      {/* Main Content */}
      <div className="max-w-[750px] mx-auto px-6 py-16 space-y-16">
        {/* Header Section */}
        <header className="space-y-6">
          <div className="flex items-center gap-6">
            <div>
              <h1 className={`text-2xl font-bold ${accentColor}`}>
                Kishan Kareliya
              </h1>
            </div>
          </div>

          {/* Navigation */}
          <nav className="text-sm">
            <div className={`flex flex-wrap gap-1 ${linkColor}`}>
              <a href="#about" className="hover:underline">
                About
              </a>
              <span>|</span>
              <a href="#projects" className="hover:underline">
                Projects
              </a>
              <span>|</span>
              <a href="#blog" className="hover:underline">
                Blog
              </a>
              <span>|</span>
              <a href="#resume" className="hover:underline">
                Resume
              </a>
            </div>
          </nav>
        </header>

        {/* Introduction Section */}
        <section className="space-y-4">
          <h2 className={`text-xl font-bold ${headingColor}`}>Hey there!</h2>
          <p className="leading-relaxed">
            I'm Kishan Kareliya, a curious and consistent learner with a strong
            interest in web development and software design. I work primarily
            with modern JavaScript frameworks and have a passion for writing
            clean, maintainable code. I enjoy solving problems and find joy in
            turning ideas into working products. I believe in learning by doing,
            staying consistent, growing through curiosity.
          </p>

          <div className="flex items-center gap-4 text-sm">
            <span>Find me on</span>
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    className={`flex items-center gap-1 ${linkColor}`}
                  >
                    <IconComponent className="h-4 w-4" />
                    {social.name}
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="space-y-4">
          <h2 className={`text-xl font-bold ${headingColor}`}>Education</h2>
          <div className="text-sm space-y-2">
            <div>
              <p className="font-semibold">
                Master of Computer Applications (MCA)
              </p>
              <p className={`${bodyTextColor}`}>
                LokJagruti University, 2024 – 2026
              </p>
            </div>
            <div>
              <p className="font-semibold">
                Bachelor of Computer Applications (BCA)
              </p>
              <p className={`${bodyTextColor}`}>
                Gujarat University, 2021 – 2024
              </p>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="space-y-4">
          <div>
            <h2 className={`text-xl font-bold mb-2 ${headingColor}`}>
              Technologies I have worked with
            </h2>
            <p className={`text-sm mb-6 ${bodyTextColor}`}>
              The list below is a subset of tools and technologies I've
              explored. See my projects to know more.
            </p>
          </div>

          <div className="space-y-3 text-sm">
            {Object.entries(technologiesData).map(
              ([category, technologies]) => (
                <div key={category}>
                  <span className="font-bold">{category}:</span>{" "}
                  {technologies.join(", ")}
                </div>
              )
            )}
          </div>
        </section>

        {/* Projects Section */}
        <section className="space-y-6">
          <h2 className={`text-xl font-bold ${headingColor}`}>Projects</h2>

          <div className="space-y-8">
            {projectsData.map((project, index) => (
              <div
                key={index}
                className={`${
                  index < projectsData.length - 1
                    ? `pb-6 border-b ${borderColor}`
                    : ""
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className={`font ${headingColor}`}>{project.title}</h3>
                  <div className="flex items-center gap-2 text-sm">
                    {project.links.live && (
                      <>
                        <a
                          href={project.links.live}
                          className={`flex items-center gap-1 ${linkColor}`}
                        >
                          Live <ExternalLink className="h-3 w-3" />
                        </a>
                        {project.links.github && (
                          <span className={linkColor}>|</span>
                        )}
                      </>
                    )}
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        className={`flex items-center gap-1 ${linkColor}`}
                      >
                        GitHub <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-sm mb-3 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 text-xs">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-2 py-1 rounded border text-xs font-medium ${
                        isDark
                          ? "bg-[#262626] text-[#d1d5db] border-[#3d3d3d] shadow-sm"
                          : "bg-[#f7f5f3] text-[#374151] border-[#e2e2e2] shadow-sm"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer
          className={`text-center space-y-6 pt-12 border-t ${borderColor}`}
        >
          <ContactForm
            isDark={isDark}
            headingColor={headingColor}
            linkColor={linkColor}
          />
        </footer>
      </div>
    </div>
  );
}

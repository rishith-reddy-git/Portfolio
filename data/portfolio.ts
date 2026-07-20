import type { LucideIcon } from "lucide-react";
import { BrainCircuit, Camera, Code2, Cpu, Database, Palette, Sparkles, Users, GraduationCap, Trophy, Briefcase } from "lucide-react";

export type SkillGroup = { title: string; skills: string[] };

export type Project = {
  number: string;
  title: string;
  type: string;
  summary: string;
  tags: string[];
  accent: string;
  githubUrl: string;
  demoUrl?: string;
  description: string;
  highlights: string[];
  techStack: string[];
};

export type Focus = { icon: LucideIcon; title: string; copy: string };

export type TimelineEntry = {
  period: string;
  category: "LEADERSHIP" | "EDUCATION" | "ACHIEVEMENT";
  role: string;
  organization: string;
  description: string;
  tags: string[];
  icon: LucideIcon;
};

export type ResumeSection = {
  title: string;
  items: {
    heading: string;
    subheading?: string;
    period?: string;
    details: string[];
  }[];
};

export const socialLinks = {
  github: "https://github.com/rishith-reddy-git",
  linkedin: "https://www.linkedin.com/in/soodini-rishith-reddy/",
  instagram: "https://instagram.com/rishithreddy",
  email: "soodinirishithreddy@gmail.com",
};

export const navigation = ["Home", "About", "Experience", "Skills", "Projects", "Contact"];

export const focusAreas: Focus[] = [
  { icon: BrainCircuit, title: "Intelligence", copy: "Machine learning and predictive systems that transform signals into useful decisions." },
  { icon: Code2, title: "Engineering", copy: "Fast, accessible full-stack products with thoughtful interactions and durable foundations." },
  { icon: Camera, title: "Creative direction", copy: "Visual stories and media systems that make ambitious work memorable." },
];

export const skillGroups: SkillGroup[] = [
  { title: "Programming", skills: ["Python", "Java", "JavaScript", "TypeScript", "C", "SQL"] },
  { title: "Frontend", skills: ["HTML", "CSS", "Tailwind CSS", "React", "Next.js"] },
  { title: "Backend", skills: ["Node.js", "Express", "REST APIs", "Data modeling"] },
  { title: "AI & data", skills: ["Machine Learning", "Predictive Analytics", "Data Analysis", "Computer Vision", "NLP"] },
  { title: "Tools", skills: ["Git", "GitHub", "VS Code", "Figma", "Canva", "Vercel"] },
];

export const timelineEntries: TimelineEntry[] = [
  {
    period: "2026 — PRESENT",
    category: "LEADERSHIP",
    role: "Lead, Photography & Videography Department",
    organization: "CENTER FOR INNOVATION & ENTREPRENEURSHIP",
    description: "Leading a creative media team across photography, videography, visual direction, branding, and event documentation — translating startup and innovation events into compelling visual narratives.",
    tags: ["CREATIVE DIRECTION", "EVENT MEDIA", "TEAM LEADERSHIP", "BRANDING"],
    icon: Briefcase,
  },
  {
    period: "2024 — PRESENT",
    category: "EDUCATION",
    role: "B.Tech in Computer Science & Engineering",
    organization: "ENGINEERING UNIVERSITY / COLLEGE",
    description: "Specializing in Data Science, Artificial Intelligence, Software Engineering, and Database Management Systems with a focus on practical full-stack projects.",
    tags: ["COMPUTER SCIENCE", "AI & ML", "FULL STACK", "DATA STRUCTURES"],
    icon: GraduationCap,
  },
  {
    period: "2024",
    category: "ACHIEVEMENT",
    role: "Hackathon & Project Recognition",
    organization: "INNOVATION & HACKATHON EVENTS",
    description: "Built and pitched AI-driven software concepts, receiving accolades for user-centric design, real-time analytics integration, and execution speed.",
    tags: ["HACKATHON", "AI INNOVATION", "PITCHING", "PROTOTYPING"],
    icon: Trophy,
  },
];

export const projects: Project[] = [
  {
    number: "01",
    title: "MANOVRA",
    type: "AI / Predictive analytics",
    summary: "An AI-powered behaviour prediction engine that reveals patterns, visualizes trends, and supports confident data-driven decisions.",
    tags: ["Python", "Analytics", "ML"],
    accent: "violet",
    githubUrl: "https://github.com/rishith-reddy-git/MANOVRA",
    demoUrl: "https://github.com/rishith-reddy-git/MANOVRA",
    description: "MANOVRA is a predictive engine designed to process complex behavioural data signals, compute trend vectors, and present real-time actionable intelligence dashboards.",
    highlights: [
      "Real-time machine learning prediction pipeline",
      "Interactive data visualization interface",
      "Custom feature extraction for telemetry inputs"
    ],
    techStack: ["Python", "Scikit-Learn", "Pandas", "React", "FastAPI"]
  },
];

export const stats = [
  { value: "AI", label: "Data-first mindset" },
  { value: "01", label: "Creative leadership role" },
  { value: "∞", label: "Curiosity to keep building" },
];

export const values = [
  { icon: Cpu, text: "Systems thinking" },
  { icon: Database, text: "Data with context" },
  { icon: Palette, text: "Creative clarity" },
  { icon: Users, text: "Human collaboration" },
  { icon: Sparkles, text: "Continuous learning" },
];

export const resumeData: ResumeSection[] = [
  {
    title: "Education",
    items: [
      {
        heading: "B.Tech in Computer Science & Engineering",
        subheading: "Focus on AI, Data Science & Full-Stack Development",
        period: "2024 — Present",
        details: [
          "Relevant Coursework: Machine Learning, Data Structures & Algorithms, Database Systems, Web Development, Object-Oriented Programming.",
          "Active leader at the Center for Innovation & Entrepreneurship (CIE)."
        ]
      }
    ]
  },
  {
    title: "Leadership & Experience",
    items: [
      {
        heading: "Lead, Photography & Videography Department",
        subheading: "Center for Innovation & Entrepreneurship",
        period: "2026 — Present",
        details: [
          "Directing creative media operations, leading a multi-member team of photographers, videographers, and graphic designers.",
          "Producing end-to-end promotional material, event recaps, and brand identities for flagship campus hackathons and startup conclaves."
        ]
      }
    ]
  },
  {
    title: "Technical Projects",
    items: [
      {
        heading: "MANOVRA — AI Behaviour Prediction Engine",
        details: [
          "Built a predictive telemetry pipeline in Python & Scikit-Learn with real-time interactive trend visualization."
        ]
      }
    ]
  },
  {
    title: "Technical Skills",
    items: [
      {
        heading: "Languages & Frameworks",
        details: [
          "Python, Java, JavaScript, TypeScript, SQL, HTML, CSS, React, Next.js, Node.js, Express, Tailwind CSS."
        ]
      },
      {
        heading: "Tools & AI Technologies",
        details: [
          "Machine Learning, NLP, Data Analysis, Git, GitHub, VS Code, Figma, Canva, Vercel."
        ]
      }
    ]
  }
];

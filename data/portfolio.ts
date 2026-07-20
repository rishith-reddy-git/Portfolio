import type { LucideIcon } from "lucide-react";
import { BrainCircuit, Camera, Code2, Cpu, Database, Palette, Sparkles, Users } from "lucide-react";

export type SkillGroup = { title: string; skills: string[] };
export type Project = { number: string; title: string; type: string; summary: string; tags: string[]; accent: string };
export type Focus = { icon: LucideIcon; title: string; copy: string };

export const navigation = ["Home", "About", "Experience", "Skills", "Projects", "Gallery", "Contact"];

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

export const projects: Project[] = [
  { number: "01", title: "MANOVRA", type: "AI / Predictive analytics", summary: "An AI-powered behaviour prediction engine that reveals patterns, visualizes trends, and supports confident data-driven decisions.", tags: ["Python", "Analytics", "ML"], accent: "violet" },
  { number: "02", title: "AI Resume Analyzer", type: "AI / Product concept", summary: "A focused workflow for turning resumes into clearer, more actionable career insights.", tags: ["NLP", "React", "UX"], accent: "blue" },
  { number: "03", title: "Hackathon Management", type: "Platform / Systems", summary: "A purpose-built platform for organizing people, projects, and momentum around innovation events.", tags: ["Full stack", "Events", "APIs"], accent: "cyan" },
  { number: "04", title: "Student Analytics", type: "Data / Dashboard", summary: "A decision surface for understanding academic engagement and identifying useful next actions.", tags: ["Data", "Dashboards", "Insights"], accent: "amber" },
];

export const gallery = [
  { label: "Innovation in motion", kind: "Events", tone: "indigo" },
  { label: "Human stories", kind: "Photography", tone: "violet" },
  { label: "Ideas in the room", kind: "Workshops", tone: "blue" },
  { label: "Built together", kind: "Team moments", tone: "cyan" },
  { label: "Momentum", kind: "Hackathons", tone: "purple" },
  { label: "The craft", kind: "Videography", tone: "slate" },
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

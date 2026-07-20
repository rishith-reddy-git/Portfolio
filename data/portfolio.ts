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
  category: "LEADERSHIP" | "EDUCATION" | "ACHIEVEMENT" | "EXPERIENCE";
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
  linkedin: "https://www.linkedin.com/in/rishith-reddy-soodini-510549328/",
  instagram: "https://www.instagram.com/_rishithreddy_23/?hl=en",
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
    category: "EXPERIENCE",
    role: "Selected Cohort Member",
    organization: "NASSCOM thingQubator PROGRAM",
    description: "Selected for the prestigious NASSCOM thingQubator innovation and incubation program — focusing on product development, AI prototyping, and startup mentoring.",
    tags: ["NASSCOM", "thingQubator", "INCUBATION", "AI INNOVATION"],
    icon: Trophy,
  },
  {
    period: "PRESENT",
    category: "EXPERIENCE",
    role: "Technical Student FDT Mentor",
    organization: "FDT MENTORSHIP PROGRAM",
    description: "Serving as a Technical Student FDT Mentor — mentored 50+ students across 5+ real-world full-stack software projects, guiding them through architecture, code reviews, and deployment workflows.",
    tags: ["50+ STUDENTS MENTORED", "5+ PROJECTS", "CODE REVIEWS", "FULL STACK"],
    icon: GraduationCap,
  },
  {
    period: "2026",
    category: "EXPERIENCE",
    role: "Volunteer — TEDx Sreyas 2026",
    organization: "TEDx SREYAS",
    description: "Volunteered for TEDx Sreyas 2026 — supporting stage logistics, speaker operations, visual media production, and attendee experience.",
    tags: ["TEDx 2026", "TEDx SREYAS", "VOLUNTEER", "EVENT LOGISTICS"],
    icon: Users,
  },
  {
    period: "2025",
    category: "EXPERIENCE",
    role: "Volunteer — Smart India Hackathon (SIH 2025)",
    organization: "Sreyas Institute of Engineering & Technology",
    description: "Volunteered for Smart India Hackathon (SIH 2025) hosted at Sreyas Institute of Engineering & Technology — coordinating participating teams, technical infrastructure setup, and event operations.",
    tags: ["SIH 2025", "SREYAS INSTITUTE OF ENGINEERING & TECHNOLOGY", "VOLUNTEER", "HACKATHON LOGISTICS"],
    icon: Users,
  },
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
    organization: "Sreyas Institute of Engineering & Technology",
    description: "Specializing in Data Science, Artificial Intelligence, Software Engineering, and Database Management Systems with a focus on practical full-stack projects.",
    tags: ["COMPUTER SCIENCE", "AI & ML", "FULL STACK", "DATA STRUCTURES"],
    icon: GraduationCap,
  },
];

export const heroHighlights = [
  {
    badge: "MENTORSHIP HIGHLIGHT",
    category: "Mentorship",
    stat: "50+ Students",
    title: "Technical Student FDT Mentor",
    copy: "Mentored 50+ students across full-stack development, code reviews, software architecture, and live project implementation.",
    tag: "FDT MENTOR",
    color: "#a78bfa",
    accentGlow: "rgba(167, 139, 250, 0.18)",
    actionText: "View Mentorship Specs",
    targetId: "experience"
  },
  {
    badge: "PROJECT METRIC",
    category: "Projects",
    stat: "5+ Projects",
    title: "Full-Stack Project Guidance",
    copy: "Guided 5+ student software projects from initial concept and UI design to production deployment.",
    tag: "FULL STACK",
    color: "#38bdf8",
    accentGlow: "rgba(56, 189, 248, 0.18)",
    actionText: "Explore Projects",
    targetId: "projects"
  },
  {
    badge: "INCUBATION HIGHLIGHT",
    category: "Incubation",
    stat: "2026 Cohort",
    title: "NASSCOM thingQubator Program",
    copy: "Selected for the prestigious NASSCOM thingQubator innovation and incubation program.",
    tag: "NASSCOM",
    color: "#f43f5e",
    accentGlow: "rgba(244, 63, 94, 0.18)",
    actionText: "View Journey",
    targetId: "experience"
  },
  {
    badge: "FEATURED AI WORK",
    category: "AI Engine",
    stat: "MANOVRA",
    title: "AI Behaviour Prediction Engine",
    copy: "Real-time telemetry and predictive ML dashboard built with Python, ML, and React.",
    tag: "AI / ML",
    color: "#34d399",
    accentGlow: "rgba(52, 211, 153, 0.18)",
    actionText: "Open MANOVRA",
    targetId: "projects"
  }
];

export const projects: Project[] = [
  {
    number: "01",
    title: "MANOVRA",
    type: "AI / Predictive analytics",
    summary: "An AI-powered behaviour prediction engine that reveals patterns, visualizes trends, and supports confident data-driven decisions.",
    tags: ["Python", "Analytics", "ML"],
    accent: "violet",
    githubUrl: "https://github.com/rishith-reddy-git/Manovra_behaviour_prediction",
    demoUrl: "https://manovra-behaviour-prediction.onrender.com",
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
      },
      {
        heading: "Technical Student FDT Mentor",
        subheading: "FDT Mentorship Program",
        period: "Present",
        details: [
          "Mentored 50+ students across 5+ real-world full-stack software projects, guiding them in software architecture, code quality, and deployment."
        ]
      },
      {
        heading: "Volunteer — TEDx Sreyas 2026",
        subheading: "TEDx Sreyas",
        period: "2026",
        details: [
          "Coordinated stage logistics, media production, speaker management, and attendee flow for TEDx Sreyas 2026."
        ]
      },
      {
        heading: "Volunteer — Smart India Hackathon (SIH 2025)",
        subheading: "Sreyas Institute of Engineering & Technology",
        period: "2025",
        details: [
          "Supported hackathon logistics, hardware setup, participant assistance, and technical operations for SIH 2025 at Sreyas."
        ]
      }
    ]
  },
  {
    title: "Key Achievements & Incubation",
    items: [
      {
        heading: "Selected Cohort Member — NASSCOM thingQubator Program",
        period: "2026 — Present",
        details: [
          "Currently selected for the prestigious NASSCOM thingQubator program focusing on AI prototyping, innovation, and startup incubation."
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

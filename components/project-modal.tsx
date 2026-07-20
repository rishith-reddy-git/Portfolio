"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Github, X } from "lucide-react";
import { Project } from "../data/portfolio";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="command-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={onClose}
          style={{ paddingTop: "6vh", paddingBottom: "6vh" }}
        >
          <motion.div
            className="command-panel"
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16 }}
            onMouseDown={(e) => e.stopPropagation()}
            style={{
              width: "min(92vw, 620px)",
              maxHeight: "82vh",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Header / Banner */}
            <div
              className={`project-visual ${project.accent}`}
              style={{
                height: "140px",
                borderRadius: "12px 12px 0 0",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "20px",
                position: "relative",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "10px", fontFamily: "var(--font-mono)", letterSpacing: "1px", color: "var(--cyan)" }}>
                  {project.number} / {project.type}
                </span>
                <button
                  onClick={onClose}
                  style={{
                    background: "rgba(0,0,0,0.4)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    borderRadius: "6px",
                    color: "white",
                    padding: "6px",
                    cursor: "pointer",
                    display: "flex",
                  }}
                  aria-label="Close project modal"
                >
                  <X size={16} />
                </button>
              </div>

              <div>
                <h2 style={{ fontSize: "28px", fontWeight: 700, margin: 0, color: "#ffffff", letterSpacing: "-1px" }}>
                  {project.title}
                </h2>
              </div>
            </div>

            {/* Scrollable Content */}
            <div
              style={{
                padding: "24px",
                overflowY: "auto",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                fontSize: "13px",
                lineHeight: "1.65",
                color: "#c5cddb",
              }}
            >
              <div>
                <h4 style={{ fontSize: "10px", fontFamily: "var(--font-mono)", color: "var(--cyan)", letterSpacing: "1px", margin: "0 0 6px 0", textTransform: "uppercase" }}>
                  Overview
                </h4>
                <p style={{ margin: 0, fontSize: "14px", color: "#e2e8f0" }}>
                  {project.description}
                </p>
              </div>

              {/* Highlights */}
              <div>
                <h4 style={{ fontSize: "10px", fontFamily: "var(--font-mono)", color: "var(--cyan)", letterSpacing: "1px", margin: "0 0 10px 0", textTransform: "uppercase" }}>
                  Key Architecture & Features
                </h4>
                <ul style={{ margin: 0, paddingLeft: "18px", display: "flex", flexDirection: "column", gap: "6px" }}>
                  {project.highlights.map((h, i) => (
                    <li key={i} style={{ color: "#cbd5e1" }}>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 style={{ fontSize: "10px", fontFamily: "var(--font-mono)", color: "var(--cyan)", letterSpacing: "1px", margin: "0 0 8px 0", textTransform: "uppercase" }}>
                  Technologies Used
                </h4>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        padding: "4px 10px",
                        borderRadius: "6px",
                        fontSize: "11px",
                        fontFamily: "var(--font-mono)",
                        color: "#93c5fd",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Buttons */}
            <div
              style={{
                padding: "16px 24px",
                borderTop: "1px solid rgba(255,255,255,0.08)",
                background: "rgba(0,0,0,0.25)",
                display: "flex",
                gap: "12px",
                justifyContent: "flex-end",
                flexWrap: "wrap",
              }}
            >
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="resume-button"
                style={{ padding: "9px 16px", fontSize: "12px", gap: "8px", textDecoration: "none" }}
              >
                <Github size={15} />
                <span>GitHub Repository</span>
              </a>

              <a
                href={`https://vercel.com/new/clone?repository-url=${encodeURIComponent(project.githubUrl)}`}
                target="_blank"
                rel="noreferrer"
                className="primary-button"
                style={{ padding: "9px 16px", fontSize: "12px", gap: "8px", textDecoration: "none" }}
              >
                <span>🚀 Deploy Project</span>
                <ArrowUpRight size={15} />
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

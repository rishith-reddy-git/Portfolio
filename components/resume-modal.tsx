"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Download, FileText, X, Check, Mail, Github, Linkedin, Instagram } from "lucide-react";
import { resumeData, socialLinks } from "../data/portfolio";
import { useState } from "react";

interface ResumeModalProps {
  open: boolean;
  onClose: () => void;
}

export function ResumeModal({ open, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(socialLinks.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="command-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={onClose}
          style={{ paddingTop: "5vh", paddingBottom: "5vh" }}
        >
          <motion.div
            className="command-panel"
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16 }}
            onMouseDown={(e) => e.stopPropagation()}
            style={{
              width: "min(92vw, 680px)",
              maxHeight: "85vh",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Header */}
            <div
              className="command-head"
              style={{
                justifyContent: "space-between",
                padding: "18px 22px",
                borderBottom: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <FileText size={18} style={{ color: "var(--cyan)" }} />
                <span style={{ fontWeight: 600, fontSize: "14px", color: "#f7f8fc" }}>
                  Soodini Rishith Reddy — Résumé
                </span>
              </div>
              <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "8px" }}>
                <button
                  onClick={handlePrint}
                  className="resume-button"
                  style={{ padding: "6px 12px", fontSize: "11px" }}
                  aria-label="Download / Print Résumé"
                >
                  <Download size={13} />
                  <span>Download / Print</span>
                </button>
                <button
                  onClick={onClose}
                  style={{
                    background: "transparent",
                    border: "1px solid rgba(255,255,255,0.15)",
                    borderRadius: "6px",
                    color: "#9da6b9",
                    padding: "6px",
                    cursor: "pointer",
                    display: "flex",
                  }}
                  aria-label="Close modal"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Scrollable Body */}
            <div
              style={{
                padding: "24px",
                overflowY: "auto",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                fontSize: "13px",
                lineHeight: "1.6",
                color: "#c5cddb",
              }}
            >
              {/* Header Info */}
              <div
                style={{
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                  paddingBottom: "16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                }}
              >
                <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#ffffff", margin: 0 }}>
                  SOODINI RISHITH REDDY
                </h3>
                <p style={{ margin: 0, color: "var(--cyan)", fontSize: "12px", fontFamily: "var(--font-mono)" }}>
                  AI Developer &bull; Full Stack Developer &bull; Creative Lead
                </p>
                <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginTop: "8px", fontSize: "11px" }}>
                  <button
                    onClick={copyEmail}
                    style={{
                      background: "transparent",
                      border: "0",
                      color: copied ? "#4ade80" : "#9da6b9",
                      padding: 0,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    {copied ? <Check size={13} /> : <Mail size={13} />}
                    {copied ? "Email Copied!" : socialLinks.email}
                  </button>
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noreferrer"
                    style={{ display: "flex", alignItems: "center", gap: "5px", color: "#9da6b9", textDecoration: "none" }}
                  >
                    <Github size={13} /> GitHub
                  </a>
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    style={{ display: "flex", alignItems: "center", gap: "5px", color: "#9da6b9", textDecoration: "none" }}
                  >
                    <Linkedin size={13} /> LinkedIn
                  </a>
                  <a
                    href={socialLinks.instagram}
                    target="_blank"
                    rel="noreferrer"
                    style={{ display: "flex", alignItems: "center", gap: "5px", color: "#9da6b9", textDecoration: "none" }}
                  >
                    <Instagram size={13} /> Instagram
                  </a>
                </div>
              </div>

              {/* Sections */}
              {resumeData.map((sec) => (
                <div key={sec.title} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <h4
                    style={{
                      fontSize: "11px",
                      fontFamily: "var(--font-mono)",
                      letterSpacing: "1px",
                      color: "var(--cyan)",
                      textTransform: "uppercase",
                      margin: 0,
                      borderBottom: "1px dashed rgba(255,255,255,0.1)",
                      paddingBottom: "4px",
                    }}
                  >
                    {sec.title}
                  </h4>
                  {sec.items.map((item, idx) => (
                    <div key={idx} style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap" }}>
                        <span style={{ fontWeight: 600, color: "#ffffff", fontSize: "14px" }}>{item.heading}</span>
                        {item.period && (
                          <span style={{ fontSize: "10px", fontFamily: "var(--font-mono)", color: "#818cf8" }}>
                            {item.period}
                          </span>
                        )}
                      </div>
                      {item.subheading && (
                        <span style={{ fontSize: "12px", color: "var(--muted)", fontStyle: "italic" }}>
                          {item.subheading}
                        </span>
                      )}
                      <ul style={{ margin: "6px 0 0 0", paddingLeft: "16px", color: "#9da6b9" }}>
                        {item.details.map((d, dIdx) => (
                          <li key={dIdx} style={{ marginBottom: "4px" }}>
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Footer */}
            <div
              style={{
                padding: "14px 22px",
                borderTop: "1px solid rgba(255,255,255,0.08)",
                background: "rgba(0,0,0,0.2)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span style={{ fontSize: "10px", fontFamily: "var(--font-mono)", color: "var(--muted)" }}>
                Verified Portfolio Record
              </span>
              <button className="primary-button" onClick={onClose} style={{ padding: "8px 16px", fontSize: "11px" }}>
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

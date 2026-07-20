import Link from "next/link";

export default function NotFound() {
  return <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: "24px", textAlign: "center" }}>
    <div><p style={{ color: "#22d3ee", fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: 2 }}>404 / LOST IN THE SIGNAL</p><h1 style={{ fontFamily: "var(--font-space)", fontSize: "clamp(52px, 12vw, 150px)", letterSpacing: "-.09em", margin: "14px 0" }}>Not found.</h1><p style={{ color: "#9da6b9", marginBottom: 28 }}>The page you are looking for does not exist.</p><Link className="primary-button" href="/">Return home</Link></div>
  </main>;
}

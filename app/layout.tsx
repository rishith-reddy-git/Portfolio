import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-space" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  metadataBase: new URL("https://rishith-reddy-git.github.io/Portfolio/"),
  title: { default: "Soodini Rishith Reddy | AI Developer", template: "%s | Soodini Rishith Reddy" },
  description: "Portfolio of Soodini Rishith Reddy, an AI developer, full-stack builder, and creative technologist.",
  keywords: ["Soodini Rishith Reddy", "AI developer", "full-stack developer", "machine learning", "portfolio"],
  openGraph: { title: "Soodini Rishith Reddy | AI Developer", description: "Building intelligent software and thoughtful digital experiences.", type: "website", url: "/" },
  twitter: { card: "summary_large_image", title: "Soodini Rishith Reddy | AI Developer", description: "Building intelligent software and thoughtful digital experiences." },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#030712", colorScheme: "dark" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${jakarta.variable} ${inter.variable} ${mono.variable}`}><body>{children}</body></html>;
}

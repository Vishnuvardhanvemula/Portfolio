import { Oswald, DM_Sans, JetBrains_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Providers } from "@/providers";

// ── Design system fonts ────────────────────────────────────────────────────
// Oswald: display headings — highly condensed, cinematic, editorial
const displayFont = Oswald({
  subsets:  ["latin"],
  variable: "--font-display",
  weight:   ["400", "500", "600", "700"],
  display:  "swap",
});

// DM Sans: body, UI labels — humanist, highly legible, neutral
const dmSans = DM_Sans({
  subsets:  ["latin"],
  variable: "--font-dm-sans",
  weight:   ["300", "400", "500", "600"],
  display:  "swap",
});

// JetBrains Mono: monospace labels, section numbers, metadata
const jetbrainsMono = JetBrains_Mono({
  subsets:  ["latin"],
  variable: "--font-jetbrains",  // named differently to avoid circular @theme ref
  weight:   ["400", "500"],
  display:  "swap",
});

// Playfair Display: cinematic italic serif for high-contrast typography
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://vishnu.dev"),
  title: {
    default:  "Vishnu Vardhan · AI Engineer & Full Stack Developer",
    template: "%s · Vishnu Vardhan",
  },
  description:
    "Portfolio of Vishnu Vardhan — developer specializing in AI agents, machine learning, and high-craft web applications.",
  keywords: [
    "AI Engineer", "Full Stack Developer", "Machine Learning",
    "Next.js", "React", "Portfolio", "Vishnu Vardhan",
  ],
  authors:  [{ name: "Vishnu Vardhan" }],
  creator:  "Vishnu Vardhan",
  openGraph: {
    type:        "website",
    locale:      "en_US",
    url:         "https://vishnu.dev",
    title:       "Vishnu Vardhan · AI Engineer & Full Stack Developer",
    description: "Building the future of intelligent systems.",
    siteName:    "Vishnu Vardhan Portfolio",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Vishnu Vardhan Portfolio" }],
  },
  twitter: {
    card:        "summary_large_image",
    title:       "Vishnu Vardhan · AI Engineer",
    description: "Building the future of intelligent systems.",
    creator:     "@vishnu_dev",
    images:      ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="dark"
      suppressHydrationWarning
    >
      <body
        className={cn(
          displayFont.variable,
          dmSans.variable,
          jetbrainsMono.variable,
          playfair.variable,
          "bg-background text-foreground antialiased"
        )}
      >
        {/*
          Providers is a client component acting as the RSC boundary.
          Mount order: ThemeProvider → LenisProvider → AnimationProvider
        */}
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

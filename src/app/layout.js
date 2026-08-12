import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata = {
  metadataBase: new URL("https://vishnu.dev"),
  title: {
    default: "Vishnu Vardhan | AI Engineer & Full Stack Developer",
    template: "%s | Vishnu Vardhan"
  },
  description: "Portfolio of Vishnu Vardhan, a developer specializing in AI agents, machine learning, and modern web applications. Building the future of intelligent systems.",
  keywords: ["AI Engineer", "Full Stack Developer", "Machine Learning", "Next.js", "React", "Portfolio", "Vishnu Vardhan"],
  authors: [{ name: "Vishnu Vardhan" }],
  creator: "Vishnu Vardhan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vishnu.dev",
    title: "Vishnu Vardhan | AI Engineer & Full Stack Developer",
    description: "Building the future of intelligent systems. Explore my projects in AI, ML, and Full Stack Web Development.",
    siteName: "Vishnu Vardhan Portfolio",
    images: [
      {
        url: "/og-image.jpg", // We need to create this or use a placeholder
        width: 1200,
        height: 630,
        alt: "Vishnu Vardhan Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vishnu Vardhan | AI Engineer",
    description: "Building the future of intelligent systems.",
    creator: "@vishnu_dev", // Placeholder
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={cn(inter.variable, spaceGrotesk.variable, "bg-background text-foreground antialiased")}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

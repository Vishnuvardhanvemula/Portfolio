import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata = {
  title: "Vishnu Vardhan | AI Engineer & Full Stack Developer",
  description: "Portfolio of Vishnu Vardhan, a developer specializing in AI agents, machine learning, and modern web applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={cn(inter.variable, spaceGrotesk.variable, "bg-background text-foreground antialiased")}>
        {children}
      </body>
    </html>
  );
}

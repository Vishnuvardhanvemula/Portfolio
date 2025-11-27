import HeroBackground from "@/components/HeroBackground";
import MagneticButton from "@/components/ui/MagneticButton";
import ProjectCard from "@/components/ProjectCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Contact from "@/components/Contact";
import { projects } from "@/data/projects";
import { ArrowRight, Code2, Cpu, Globe } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center relative overflow-hidden bg-background selection:bg-primary/30">
      <Navbar />
      <HeroBackground />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 z-10 w-full max-w-5xl pt-20">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-md hover:bg-white/10 transition-colors cursor-default">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Available for Internships
        </div>

        <h1 className="text-6xl md:text-8xl font-heading font-bold tracking-tight mb-8 text-balance leading-[1.1]">
          Building the <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary animate-gradient">
            Intelligent Web
          </span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 text-balance leading-relaxed">
          I engineer full-stack applications powered by AI agents and machine learning.
          Bridging the gap between complex systems and intuitive user experiences.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 items-center">
          <MagneticButton>
            <a href="#work" className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-primary px-10 font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(99,102,241,0.5)]">
              <span className="mr-2 text-lg">View My Work</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </MagneticButton>

          <a href="https://github.com/Vishnuvardhanvemula" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-6 py-4 rounded-full hover:bg-white/5">
            Check out my GitHub
          </a>
        </div>
      </section>

      {/* Tech Stack Marquee */}
      <div className="w-full border-y border-white/5 bg-black/40 backdrop-blur-sm py-12 z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex justify-center gap-16 text-muted-foreground/40 grayscale hover:grayscale-0 transition-all duration-500">
          <Code2 className="h-10 w-10 hover:text-white transition-colors" />
          <Cpu className="h-10 w-10 hover:text-white transition-colors" />
          <Globe className="h-10 w-10 hover:text-white transition-colors" />
          {/* Add more icons/logos here */}
        </div>
      </div>

      <About />

      {/* Projects Section */}
      <section id="work" className="w-full max-w-7xl mx-auto px-6 py-32 z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Selected Work</h2>
            <p className="text-muted-foreground max-w-md text-lg leading-relaxed">
              A collection of systems designed to solve real-world problems through intelligence and automation.
            </p>
          </div>
          <MagneticButton>
            <a href="https://github.com/Vishnuvardhanvemula" className="hidden md:flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors px-4 py-2 rounded-full border border-transparent hover:border-white/10 hover:bg-white/5">
              View All Repositories <ArrowRight className="w-4 h-4" />
            </a>
          </MagneticButton>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>

      <Contact />

      <Footer />
    </main>

  );
}

import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MagneticButton from "@/components/ui/MagneticButton";
import { ArrowLeft, Github, ExternalLink, BookOpen, Trophy, ShoppingBag, Zap } from "lucide-react";

// Icon mapping
const iconMap = {
    BookOpen: BookOpen,
    Trophy: Trophy,
    ShoppingBag: ShoppingBag,
    Zap: Zap,
};

export function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id,
    }));
}

export default async function ProjectPage({ params }) {
    const { id } = await params;
    const project = projects.find((p) => p.id === id);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-background selection:bg-primary/30">
            <Navbar />

            {/* Project Hero */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-b ${project.color} opacity-10 blur-3xl -z-10`} />

                <div className="max-w-4xl mx-auto text-center">
                    <a href="/#work" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Back to Work
                    </a>

                    <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-balance">
                        {project.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                        {project.subtitle}
                    </p>

                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {project.tags.map((tag) => (
                            <span key={tag} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="flex justify-center gap-4">
                        <MagneticButton>
                            <a href={project.link} className="flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
                                Live Demo <ExternalLink className="w-4 h-4" />
                            </a>
                        </MagneticButton>
                        <a href={project.github} className="flex items-center gap-2 px-8 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                            GitHub <Github className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="max-w-4xl mx-auto px-6 pb-32">
                {/* Overview */}
                <div className="mb-20">
                    <h2 className="text-2xl font-heading font-bold mb-4">Overview</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        {project.description}
                    </p>
                </div>

                {/* Features Grid */}
                {project.features && project.features.length > 0 && (
                    <div className="mb-20">
                        <h2 className="text-2xl font-heading font-bold mb-8">Key Features</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {project.features.map((feature, index) => {
                                const Icon = iconMap[feature.icon] || Zap;
                                return (
                                    <div key={index} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                        <div className="mb-4 p-3 rounded-full bg-primary/10 w-fit text-primary">
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                        <p className="text-muted-foreground">{feature.description}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* Technical Deep Dive */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-2xl font-heading font-bold mb-4">The Challenge</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            {project.challenges || "Building this project required solving complex problems..."}
                        </p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-heading font-bold mb-4">The Solution</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            {project.solution || "I implemented a scalable architecture..."}
                        </p>
                    </div>
                </div>

            </section>

            <Footer />
        </main>
    );
}

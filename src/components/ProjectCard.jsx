"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function ProjectCard({ project, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative w-full cursor-pointer"
        >
            <Link href={`/projects/${project.id}`} className="block h-full">
                <div className="relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 aspect-[16/10] transition-all duration-500 group-hover:border-white/20 group-hover:shadow-2xl group-hover:shadow-primary/10">
                    {/* Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />

                    {/* Noise Texture Overlay */}
                    <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

                    <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                        <div className="flex justify-between items-start">
                            <div className="flex gap-2 flex-wrap max-w-[70%]">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="px-3 py-1 text-xs font-medium tracking-wide rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white/90">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/10 group-hover:bg-white/20 transition-colors">
                                <ArrowUpRight className="w-5 h-5 text-white transition-transform duration-300 group-hover:rotate-45" />
                            </div>
                        </div>

                        <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                            <h3 className="text-3xl font-heading font-bold text-white mb-3">
                                {project.title}
                            </h3>
                            <p className="text-white/70 line-clamp-2 text-sm leading-relaxed max-w-[90%]">
                                {project.description}
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}

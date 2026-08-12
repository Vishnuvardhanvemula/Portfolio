"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import MagneticButton from "./ui/MagneticButton";
import { useState } from "react";

const socials = [
    {
        icon: <Github className="w-5 h-5" />,
        label: "GitHub",
        href: "https://github.com/Vishnuvardhanvemula",
        color: "hover:border-white/30 hover:bg-white/10"
    },
    {
        icon: <Linkedin className="w-5 h-5" />,
        label: "LinkedIn",
        href: "https://linkedin.com/in/vishnuvardhanvemula",
        color: "hover:border-blue-500/30 hover:bg-blue-500/10"
    },
    {
        icon: <Twitter className="w-5 h-5" />,
        label: "Twitter / X",
        href: "https://twitter.com/vishnu_dev",
        color: "hover:border-sky-500/30 hover:bg-sky-500/10"
    },
];

function SectionLabel({ number, label }) {
    return (
        <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs text-primary/70 tracking-widest">// {number.toString().padStart(2, "0")}</span>
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">{label}</span>
        </div>
    );
}

export default function Contact() {
    const [formState, setFormState] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState(null); // null | "sending" | "success" | "error"

    const handleChange = (e) => {
        setFormState((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message } = formState;
        if (!name || !email || !message) {
            setStatus("error");
            return;
        }
        // Mailto fallback — opens email client with pre-filled message
        const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
        window.location.href = `mailto:vishnuvardhan2431s@gmail.com?subject=${subject}&body=${body}`;
        setStatus("success");
    };

    return (
        <section id="contact" className="w-full max-w-7xl mx-auto px-6 py-24 z-10 relative">
            <SectionLabel number={5} label="Contact" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                {/* Left: Info */}
                <div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight"
                    >
                        Let&apos;s build something{" "}
                        <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                            intelligent.
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-muted-foreground mb-10 max-w-md leading-relaxed"
                    >
                        Whether you have a project in mind, need an AI consultant, or just want to talk about the future of tech — I&apos;m all ears.
                    </motion.p>

                    {/* Contact Details */}
                    <div className="space-y-4 mb-10">
                        <motion.a
                            href="mailto:vishnuvardhan2431s@gmail.com"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all group"
                        >
                            <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                                <Mail className="w-5 h-5" />
                            </div>
                            <div>
                                <div className="text-xs text-muted-foreground mb-0.5">Email Me</div>
                                <div className="text-sm font-medium text-white">vishnuvardhan2431s@gmail.com</div>
                            </div>
                        </motion.a>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10"
                        >
                            <div className="p-3 rounded-xl bg-green-500/10 text-green-400">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <div>
                                <div className="text-xs text-muted-foreground mb-0.5">Location</div>
                                <div className="text-sm font-medium text-white">Remote / India</div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <p className="text-xs text-muted-foreground font-mono tracking-widest uppercase mb-4">Find me on</p>
                        <div className="flex gap-3">
                            {socials.map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title={s.label}
                                    className={`flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-muted-foreground transition-all text-sm ${s.color}`}
                                >
                                    {s.icon}
                                    <span className="hidden sm:inline text-xs">{s.label}</span>
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Right: Form */}
                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm"
                >
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-muted-foreground">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formState.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-white placeholder:text-white/20 text-sm"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-muted-foreground">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formState.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-white placeholder:text-white/20 text-sm"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-muted-foreground">Message</label>
                            <textarea
                                id="message"
                                rows={5}
                                value={formState.message}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-white placeholder:text-white/20 resize-none text-sm"
                                placeholder="Tell me about your project..."
                            />
                        </div>

                        {/* Status messages */}
                        {status === "success" && (
                            <div className="text-sm text-green-400 bg-green-500/10 border border-green-500/20 rounded-xl px-4 py-3">
                                ✓ Message ready — your email client will open shortly.
                            </div>
                        )}
                        {status === "error" && (
                            <div className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                                ✗ Please fill in all fields before sending.
                            </div>
                        )}

                        <MagneticButton className="w-full">
                            <button
                                type="submit"
                                className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 font-medium text-white hover:opacity-90 transition-all flex items-center justify-center gap-2 group text-sm"
                            >
                                Send Message
                                <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </button>
                        </MagneticButton>
                    </div>
                </motion.form>

            </div>
        </section>
    );
}

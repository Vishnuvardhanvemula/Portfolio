"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import MagneticButton from "./ui/MagneticButton";
import { useState } from "react";
import { cn } from "@/lib/utils";

const socials = [
    {
        icon: <Github className="w-4 h-4" />,
        label: "GITHUB",
        href: "https://github.com/Vishnuvardhanvemula",
    },
    {
        icon: <Linkedin className="w-4 h-4" />,
        label: "LINKEDIN",
        href: "https://linkedin.com/in/vishnuvardhanvemula",
    },
    {
        icon: <Twitter className="w-4 h-4" />,
        label: "TWITTER_X",
        href: "https://twitter.com/vishnu_dev",
    },
];

const Crosshair = ({ className = "" }) => (
  <svg 
    className={cn(
      "w-3.5 h-3.5 text-[#FF2222] select-none pointer-events-none",
      className
    )} 
    viewBox="0 0 16 16" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.2"
  >
    <path d="M8 0V16M0 8H16" />
  </svg>
);

export default function Contact() {
    const [formState, setFormState] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState(null);

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
        const subject = encodeURIComponent(`SECURE COMMS: ${name}`);
        const body = encodeURIComponent(`SENDER: ${name}\nNODE: ${email}\n\nPAYLOAD:\n${message}`);
        window.location.href = `mailto:vishnuvardhan2431s@gmail.com?subject=${subject}&body=${body}`;
        setStatus("success");
    };

    return (
        <section id="contact" className="w-full max-w-7xl mx-auto px-6 py-24 z-10 relative border-t border-white/5">
            <div className="flex items-center gap-4 text-[10px] font-mono tracking-widest text-[#FF2222] mb-12">
                <Crosshair />
                <span>05 — SECURE COMMUNICATIONS</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start border border-white/10 bg-white/[0.02] p-8 md:p-12 relative">
                
                {/* Precision Corners */}
                <div className="absolute -top-1 -left-1 font-mono text-[9px] text-[#FF2222]">┼</div>
                <div className="absolute -top-1 -right-1 font-mono text-[9px] text-[#FF2222]">┼</div>
                <div className="absolute -bottom-1 -left-1 font-mono text-[9px] text-[#FF2222]">┼</div>
                <div className="absolute -bottom-1 -right-1 font-mono text-[9px] text-[#FF2222]">┼</div>

                {/* Left: Info */}
                <div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight tracking-tight uppercase text-ghost"
                    >
                        Establish <br/> Connection
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-mono text-[10px] md:text-xs text-white/50 tracking-[0.2em] uppercase mb-12 leading-relaxed max-w-md"
                    >
                        Whether you need an architect for your next system, or just want to ping my server — initialize a handshake below.
                    </motion.p>

                    {/* Contact Details */}
                    <div className="space-y-6 mb-12">
                        <motion.a
                            href="mailto:vishnuvardhan2431s@gmail.com"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="flex items-center gap-4 group"
                        >
                            <div className="p-3 border border-white/10 bg-white/5 group-hover:bg-[#FF2222]/10 group-hover:border-[#FF2222]/30 transition-colors">
                                <Mail className="w-4 h-4 text-white/50 group-hover:text-[#FF2222]" />
                            </div>
                            <div>
                                <div className="font-mono text-[9px] text-[#FF2222] uppercase tracking-widest mb-1">Transmission</div>
                                <div className="font-mono text-xs text-white/80 tracking-wider">vishnuvardhan2431s@gmail.com</div>
                            </div>
                        </motion.a>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="flex items-center gap-4"
                        >
                            <div className="p-3 border border-white/10 bg-white/5">
                                <MapPin className="w-4 h-4 text-white/50" />
                            </div>
                            <div>
                                <div className="font-mono text-[9px] text-[#FF2222] uppercase tracking-widest mb-1">Server Location</div>
                                <div className="font-mono text-xs text-white/80 tracking-wider">India // Earth</div>
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
                        <p className="font-mono text-[9px] text-white/30 uppercase tracking-widest mb-4">External Nodes</p>
                        <div className="flex gap-3">
                            {socials.map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title={s.label}
                                    className="flex items-center gap-2 px-4 py-2 border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all group"
                                >
                                    <span className="text-white/50 group-hover:text-white transition-colors">{s.icon}</span>
                                    <span className="hidden sm:inline font-mono text-[10px] text-white/50 group-hover:text-white uppercase tracking-widest">{s.label}</span>
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
                    className="flex flex-col gap-6 h-full"
                >
                    <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-2">
                        <div className="w-2 h-2 bg-[#FF2222] animate-pulse" />
                        <span className="font-mono text-[10px] tracking-[0.2em] text-[#FF2222]">INPUT_TERMINAL</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-3">
                            <label htmlFor="name" className="font-mono text-[9px] text-white/50 tracking-widest uppercase">Identity</label>
                            <input
                                type="text"
                                id="name"
                                value={formState.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-black/40 border border-white/10 focus:border-[#FF2222] focus:bg-[#FF2222]/5 outline-none transition-all text-white font-mono text-xs placeholder:text-white/20"
                                placeholder="[USER_NAME]"
                            />
                        </div>
                        <div className="space-y-3">
                            <label htmlFor="email" className="font-mono text-[9px] text-white/50 tracking-widest uppercase">Return Node</label>
                            <input
                                type="email"
                                id="email"
                                value={formState.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-black/40 border border-white/10 focus:border-[#FF2222] focus:bg-[#FF2222]/5 outline-none transition-all text-white font-mono text-xs placeholder:text-white/20"
                                placeholder="[USER_EMAIL]"
                            />
                        </div>
                    </div>

                    <div className="space-y-3 flex-grow">
                        <label htmlFor="message" className="font-mono text-[9px] text-white/50 tracking-widest uppercase">Payload</label>
                        <textarea
                            id="message"
                            rows={6}
                            value={formState.message}
                            onChange={handleChange}
                            required
                            className="w-full h-full min-h-[150px] px-4 py-3 bg-black/40 border border-white/10 focus:border-[#FF2222] focus:bg-[#FF2222]/5 outline-none transition-all text-white font-mono text-xs placeholder:text-white/20 resize-none"
                            placeholder="[ENTER_MESSAGE_DATA]"
                        />
                    </div>

                    {/* Status messages */}
                    {status === "success" && (
                        <div className="font-mono text-[10px] text-[#FF2222] bg-[#FF2222]/10 border border-[#FF2222]/30 px-4 py-3 tracking-widest uppercase">
                            [SYS_ACK] Handshake ready. Awaiting mail client launch.
                        </div>
                    )}
                    {status === "error" && (
                        <div className="font-mono text-[10px] text-white/70 bg-white/10 border border-white/20 px-4 py-3 tracking-widest uppercase">
                            [ERR] Parameters missing. Fill all fields.
                        </div>
                    )}

                    <MagneticButton className="w-full mt-auto">
                        <button
                            type="submit"
                            className="w-full py-4 border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/30 transition-all flex items-center justify-center gap-3 group"
                        >
                            <span className="font-mono text-[10px] tracking-[0.2em] text-white uppercase group-hover:text-[#FF2222] transition-colors">
                                TRANSMIT PAYLOAD
                            </span>
                            <Send className="w-3.5 h-3.5 text-white/50 group-hover:text-[#FF2222] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                        </button>
                    </MagneticButton>
                </motion.form>

            </div>
        </section>
    );
}

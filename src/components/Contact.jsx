"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import MagneticButton from "./ui/MagneticButton";

export default function Contact() {
    return (
        <section id="contact" className="w-full max-w-7xl mx-auto px-6 py-24 z-10 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                {/* Left Column: Contact Info */}
                <div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-heading font-bold mb-6"
                    >
                        Let's build something <br />
                        <span className="text-primary">intelligent.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-muted-foreground mb-12 max-w-md"
                    >
                        Whether you have a project in mind, need an AI consultant, or just want to chat about the future of tech — I'm all ears.
                    </motion.p>

                    <div className="space-y-6">
                        <motion.a
                            href="mailto:vishnuvardhan2431s@gmail.com"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
                        >
                            <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                <Mail className="w-5 h-5" />
                            </div>
                            <div>
                                <div className="text-sm text-muted-foreground">Email Me</div>
                                <div className="text-lg font-medium text-white">vishnuvardhan2431s@gmail.com</div>
                            </div>
                        </motion.a>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10"
                        >
                            <div className="p-3 rounded-full bg-primary/10 text-primary">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <div>
                                <div className="text-sm text-muted-foreground">Location</div>
                                <div className="text-lg font-medium text-white">Remote / India</div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Right Column: Form */}
                <motion.form
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
                                    className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-white placeholder:text-white/20"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-muted-foreground">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-white placeholder:text-white/20"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-muted-foreground">Message</label>
                            <textarea
                                id="message"
                                rows="4"
                                className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-white placeholder:text-white/20 resize-none"
                                placeholder="Tell me about your project..."
                            ></textarea>
                        </div>

                        <MagneticButton className="w-full">
                            <button type="button" className="w-full py-4 rounded-xl bg-primary font-medium text-primary-foreground hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 group">
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

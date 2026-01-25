"use client";

import { motion } from "framer-motion";

export default function BioTestimonial() {
    return (
        <section className="py-24 bg-primary-dark text-white relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute inset-0 bg-kiondo"></div>
            </div>

            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="material-symbols-outlined text-accent-gold text-6xl mb-8">
                        format_quote
                    </span>
                    <h3 className="font-display text-3xl lg:text-5xl font-medium leading-tight mb-12">
                        "Lucky Girl is a love letter to Nairobi and a poignant exploration of the immigrant's heart."
                    </h3>
                    <div className="flex items-center justify-center space-x-4">
                        <div className="w-12 h-px bg-accent-gold/50"></div>
                        <p className="font-sans font-bold tracking-widest uppercase text-accent-gold">
                            Critical Acclaim
                        </p>
                        <div className="w-12 h-px bg-accent-gold/50"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

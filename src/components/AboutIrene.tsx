"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AboutIrene() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0.2, 0.4, 0.8, 0.9], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0.2, 0.4], [0.95, 1]);

    const bioText = "i’m a fiction writer who explores power, loss, and the fragile choices that define us. I’m interested in Identity, Race, and Belonging across cultures and generations.";
    const words = bioText.split(" ");

    return (
        <section
            ref={containerRef}
            className="relative min-h-[80vh] flex items-center justify-center py-32 px-6 overflow-hidden bg-primary-dark"
            id="bio"
        >
            {/* Background Image Placeholder with Microphone/Talk theme */}
            <div className="absolute inset-0 z-0 opacity-20 transition-opacity duration-1000">
                <img
                    src="/irene-story-bg.jpg"
                    alt="Irene Background"
                    className="w-full h-full object-cover grayscale brightness-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-primary-dark"></div>
            </div>

            <motion.div
                style={{ opacity, scale }}
                className="relative z-10 max-w-5xl mx-auto text-center"
            >
                <h2 className="font-display text-accent-gold uppercase tracking-[0.4em] text-sm font-bold mb-16">
                    My Bio
                </h2>

                <div className="flex flex-wrap justify-center gap-x-[0.3em] gap-y-2">
                    {words.map((word, i) => (
                        <Word key={i} index={i} total={words.length} scrollYProgress={scrollYProgress}>
                            {word}
                        </Word>
                    ))}
                </div>
            </motion.div>

            {/* Subtle Texture Overlay */}
            <div className="absolute inset-0 z-0 bg-shuka opacity-10 mix-blend-overlay pointer-events-none"></div>
        </section>
    );
}

function Word({ children, index, total, scrollYProgress }: { children: string, index: number, total: number, scrollYProgress: any }) {
    const start = 0.3 + (index / total) * 0.4;
    const end = start + 0.05;
    const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1]);

    return (
        <motion.span
            style={{ opacity }}
            className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight uppercase tracking-tight"
        >
            {children}
        </motion.span>
    );
}

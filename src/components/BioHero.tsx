"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function BioHero() {
    return (
        <section className="relative min-h-screen bg-background-light overflow-hidden">
            <div className="flex flex-col lg:flex-row min-h-screen">
                {/* Left Side - Large Image with Bio Text */}
                <div className="relative w-full lg:w-1/2 h-[75vh] lg:h-screen bg-primary-dark overflow-hidden">
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="absolute inset-0"
                    >
                        <Image
                            src="/bio-new.jpg"
                            alt="Irene Muchemi-Ndiritu Bio"
                            fill
                            className="object-contain object-bottom pt-20 lg:pt-32 p-4 lg:px-12"
                            priority
                        />
                    </motion.div>

                    {/* Vertical "Bio" Text */}
                    <div className="absolute left-8 lg:left-12 bottom-20 lg:bottom-40 z-10">
                        <motion.h1
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="font-display text-8xl lg:text-[12rem] text-white/20 font-bold uppercase tracking-tighter mix-blend-overlay rotate-[-90deg] origin-left"
                        >
                            Bio
                        </motion.h1>
                    </div>
                </div>

                {/* Right Side - Intro */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 lg:p-24 bg-primary-dark lg:bg-transparent">
                    <div className="max-w-xl mx-auto lg:mx-0">
                        <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <h2 className="font-display text-4xl lg:text-6xl font-bold text-accent-gold mb-6">
                                About Irene
                            </h2>
                            <div className="w-20 h-1 bg-accent-gold mb-8"></div>
                            <p className="font-sans text-xl text-white lg:text-slate-600 leading-relaxed italic mb-8">
                                "A storyteller bridging the gap between continents, cultures, and generations."
                            </p>

                            <div className="space-y-4">
                                {[
                                    "Critically acclaimed novelist",
                                    "New York Times–reviewed author",
                                    "An emerging major voice in contemporary African diaspora fiction"
                                ].map((accolade, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 0.5, delay: 0.6 + (i * 0.1) }}
                                        className="flex items-center space-x-3 text-white lg:text-primary-dark font-medium"
                                    >
                                        <span className="text-accent-gold text-xl">✓</span>
                                        <span>{accolade}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

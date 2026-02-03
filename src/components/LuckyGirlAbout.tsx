"use client";

import React from 'react';
import { motion } from "framer-motion";

export default function LuckyGirlAbout() {
    return (
        <section className="py-24 px-6 bg-background-light overflow-hidden" id="about-book">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="order-2 lg:order-1"
                >
                    <div className="relative group max-w-md mx-auto">
                        <div className="absolute inset-0 bg-accent-ochre transform rotate-3 rounded-sm"></div>
                        <div className="relative shadow-2xl border-4 border-white">
                            <img
                                alt="Lucky Girl Book Cover"
                                className="w-full h-auto rounded-sm"
                                src="/lucky-girl-cover.webp"
                            />
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="order-1 lg:order-2"
                >
                    <h2 className="font-display text-2xl font-bold uppercase tracking-[0.3em] text-accent-ochre mb-4">
                        The Story
                    </h2>
                    <h3 className="font-display text-5xl md:text-6xl font-bold text-primary-dark mb-8 leading-tight">
                        A Journey of Identity and Belonging
                    </h3>

                    <div className="space-y-6 text-slate-800 text-lg leading-relaxed">
                        <p>
                            Soila is a young woman living in 1990s Nairobi, a city that feels both like home and a prison. Raised under the strict, religious surveillance of her mother, she dreams of a life unfettered by expectation and tradition.
                        </p>
                        <p>
                            When the opportunity to study in New York City arises, it feels like the ultimate escape. But America presents its own set of challenges—unanticipated racism, cultural alienation, and the complex reality of being an African immigrant in a country divided by its own history.
                        </p>
                        <p className="font-medium italic text-primary-dark border-l-4 border-accent-gold pl-6">
                            "A beautifully written and illuminating story about parental pressure, undeserved shame, and Kenyan culture."
                        </p>
                        <p>
                            As Soila navigates new friendships, first loves, and the harsh realities of independence, she must decide which parts of her past to carry with her and which to leave behind.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

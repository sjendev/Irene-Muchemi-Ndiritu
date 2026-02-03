"use client";

import React from 'react';
import { motion } from "framer-motion";

const stores = [
    { name: "Amazon", url: "#" },
    { name: "Exclusive Books", url: "#" },
    { name: "Takealot", url: "#" },
    { name: "Goodreads", url: "#" },
    { name: "Barnes & Noble", url: "#" },
    { name: "Waterstones", url: "#" }
];

export default function LuckyGirlShop() {
    return (
        <section className="py-32 px-6 bg-parchment relative overflow-hidden" id="buy-now">
            <div className="max-w-4xl mx-auto text-center">
                <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="font-display text-5xl md:text-7xl font-bold text-primary-dark mb-8 uppercase tracking-tighter"
                >
                    Get Your <span className="text-accent-ochre italic">Copy</span>
                </motion.h2>
                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-xl text-slate-700 mb-16 max-w-2xl mx-auto leading-relaxed"
                >
                    Available in Hardcover, Paperback, E-book, and Audiobook at major retailers worldwide.
                </motion.p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {stores.map((store, index) => (
                        <motion.a
                            key={index}
                            href={store.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white border border-primary/20 p-6 rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all group flex flex-col items-center justify-center gap-4"
                        >
                            <span className="font-display text-lg font-bold text-primary-dark">
                                {store.name}
                            </span>
                            <span className="material-symbols-outlined text-accent-gold group-hover:translate-x-1 transition-transform">
                                arrow_forward
                            </span>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}

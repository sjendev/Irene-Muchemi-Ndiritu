"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function BioGallery() {
    const images = [
        { src: "/about-author.jpg", alt: "Irene at a book signing", size: "lg:col-span-2 lg:row-span-2" },
        { src: "/about-irene-2.jpg", alt: "Irene Muchemi-Ndiritu", size: "lg:col-span-1 lg:row-span-1" },
        { src: "/about-portrait.jpg", alt: "Portrait of Irene", size: "lg:col-span-1 lg:row-span-1" },
        { src: "/about-irene-transparent.png", alt: "Irene Muchemi-Ndiritu", size: "lg:col-span-1 lg:row-span-1 bg-accent-gold/5" },
        { src: "/irene-hero.png", alt: "Irene Hero Image", size: "lg:col-span-2 lg:row-span-1" },
    ];

    return (
        <section className="py-20 lg:py-32 bg-background-light">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="font-display text-3xl lg:text-5xl font-bold text-primary-dark mb-4">Gallery</h2>
                    <div className="w-16 h-1 bg-accent-gold mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`relative overflow-hidden rounded-2xl shadow-lg border border-primary/5 group ${img.size}`}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

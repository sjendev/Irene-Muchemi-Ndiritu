"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const quotes = [
    {
        text: "Irene Muchemi-Ndiritu’s debut novel, Lucky Girl, is a coming-of-age story about a privileged but sheltered teenager in Kenya, Soila, who is eager for escape. . . . Lucky Girl is at its strongest when Muchemi-Ndiritu addresses the topic of American racism. . . . [Soila’s] honesty about her ‘different brand of Blackness,’ and ultimately her ability to drop the idea of it being a brand, make for some of the book’s most compelling passages.",
        author: "The New York Times Book Review"
    },
    {
        text: "Muchemi-Ndiritu is a master of knitting together a narrative and then pulling away at the threads to unravel it . . . In her debut novel Lucky Girl, Irene Muchemi-Ndiritu['s] . . . ability to learn from life’s ordeals on two continents, shed encumbrances, and pack up the positives to carry with her into the future exemplifies the luck she finally forms on her own terms.",
        author: "Brittle Paper"
    },
    {
        text: "Lucky Girl is at times tender, at times funny, at times uncomfortably frank. . . . A fresh look at racism, privilege, and the challenges of coming-of-age and falling in love between two cultures.",
        author: "Charmaine Wilkerson, New York Times bestselling author of Black Cake"
    },
    {
        text: "From the leafy suburbs of Nairobi to the buzzing boroughs of New York City and back again, Lucky Girl is a glittering coming-of-age novel and a juicy indictment of the ‘tilted society of haves and have-nots.’ Muchemi-Ndiritu writes with spirit and nuance about privilege, race, and intergenerational heartache. I couldn't put it down.",
        author: "Alison B. Hart, author of The Work Wife"
    },
    {
        text: "Stimulating the heart and mind, Lucky Girl is an irresistible novel that captures the immense pressure—to be perfect, to live on our own terms, to love and be loved—of our times. Fiery conversations around race, belonging, and differing cultures give this debut its vibrant energy, but the hard-won wisdom is what allows it to soar. Most brilliantly, Irene Muchemi-Ndiritu shows us what it means to live in balance, and how duties and dreams don’t always have to be at odds, especially when love is involved. Surprises abound, Lucky Girl is the literary gift we all need, making us the lucky ones.",
        author: "Mateo Askaripour, New York Times bestselling author of Black Buck"
    },
    {
        text: "An incredibly nuanced, character-driven story with a courageous protagonist to root for, Lucky Girl is a powerful exploration of making the most of the hand you’ve been dealt.",
        author: "Lizzie Damilola Blackburn, author of Yinka, Where Is Your Huzband?"
    },
    {
        text: "A beautifully written and illuminating story about parental pressure, undeserved shame, and Kenyan culture.",
        author: "Jessica George, author of Maame"
    },
    {
        text: "A young Kenyan woman in New York City faces an identity crisis while coming to recognize how issues of race, culture, and religion are different for Black Americans than for Black Africans. . . . A thought-provoking exploration of the complicated experience of an African woman in America.",
        author: "Kirkus Reviews"
    }
];

const mediaItems = [
    {
        title: "Irene Muchemi-Ndiritu on Relationship Dynamics in Her Novel LUCKY GIRL, and Becoming a Writer",
        source: "YouTube",
        link: "https://www.youtube.com/watch?v=yUnkBnG8PVI",
        type: "Interview"
    },
    {
        title: "The Blessing of Kali",
        source: "The Yale Review",
        link: "https://yalereview.org/article/blessing-kali",
        type: "Feature"
    },
    {
        title: "On Navigating American Racism as an African Immigrant",
        source: "LitHub",
        link: "https://lithub.com/irene-muchemi-ndiritu-on-navigating-american-racism-as-an-african-immigrant/",
        type: "Article"
    },
    {
        title: "Book Review: Lucky Girl by Irene Muchemi-Ndiritu",
        source: "Feminist Book Club",
        link: "https://www.feministbookclub.com/irene-muchemi-ndiritu/",
        type: "Review"
    },
    {
        title: "Review: Secrets, freedom and grind culture – ‘Lucky Girl’ explores complex African mother-daughter relations",
        source: "News24",
        link: "https://www.news24.com/life/books/review-secrets-freedom-and-grind-culture-lucky-girl-explores-complex-african-mother-daughter-relations-20230816",
        type: "Review"
    }
];

const galleryImages = [
    { src: "/gallery/gallery-1.jpg", alt: "Irene Muchemi-Ndiritu portrait" },
    { src: "/gallery/gallery-2.jpg", alt: "Irene during a media appearance" },
];

export default function MediaPage() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
    };

    return (
        <main className="bg-background-light min-h-screen font-sans">
            <Navbar />

            {/* Media Hero */}
            <section className="bg-clay text-white pt-48 pb-32 px-6 overflow-hidden relative">
                <div className="absolute inset-0 z-0 bg-shuka opacity-5 mix-blend-overlay"></div>
                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <h1 className="font-display text-8xl md:text-[12vw] font-bold uppercase tracking-tighter mb-4">
                        Media
                    </h1>
                    <p className="text-accent-gold uppercase tracking-[0.3em] font-medium text-sm md:text-base">
                        Press. Praise. Presence.
                    </p>
                </div>
            </section>

            {/* Photo Gallery Section - Carousel */}
            <section className="py-24 px-6 bg-white overflow-hidden">
                <div className="max-w-5xl mx-auto">
                    <h2 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tight mb-16 text-center text-primary-dark">
                        Photo <span className="text-accent-gold">Gallery</span>
                    </h2>

                    <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl bg-clay/5 group">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                                className="absolute inset-0"
                            >
                                <Image
                                    src={galleryImages[currentIndex].src}
                                    alt={galleryImages[currentIndex].alt}
                                    fill
                                    priority
                                    className="object-contain"
                                />
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation Controls */}
                        <div className="absolute inset-0 flex items-center justify-between px-4 md:px-8 pointer-events-none">
                            <button
                                onClick={prevSlide}
                                className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/80 hover:bg-white text-clay shadow-lg flex items-center justify-center transition-all hover:scale-110 active:scale-95 pointer-events-auto"
                                aria-label="Previous image"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="m15 18-6-6 6-6" />
                                </svg>
                            </button>
                            <button
                                onClick={nextSlide}
                                className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/80 hover:bg-white text-clay shadow-lg flex items-center justify-center transition-all hover:scale-110 active:scale-95 pointer-events-auto"
                                aria-label="Next image"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="m9 18 6-6-6-6" />
                                </svg>
                            </button>
                        </div>

                        {/* Indicators */}
                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                            {galleryImages.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentIndex(i)}
                                    className={`h-1.5 transition-all duration-300 rounded-full ${currentIndex === i ? "w-12 bg-accent-gold" : "w-6 bg-white/40 hover:bg-white/60"}`}
                                    aria-label={`Go to slide ${i + 1}`}
                                />
                            ))}
                        </div>

                        {/* Texture Overlay */}
                        <div className="absolute inset-0 pointer-events-none bg-texture opacity-10 mix-blend-overlay"></div>
                    </div>
                </div>
            </section>



            {/* Media Links Section */}
            <section className="py-24 px-6 bg-cream/30">
                <div className="max-w-5xl mx-auto">
                    <h2 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tight mb-16 text-center text-primary-dark">
                        Interviews <span className="text-accent-gold">&</span> Features
                    </h2>

                    <div className="grid gap-6">
                        {mediaItems.map((item, index) => (
                            <a
                                key={index}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block bg-white border border-clay/10 p-8 rounded-xl hover:shadow-2xl hover:border-accent-gold/50 transition-all duration-500 transform hover:-translate-y-1"
                            >
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-3">
                                            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-accent-gold bg-accent-gold/10 px-3 py-1 rounded-full">
                                                {item.type}
                                            </span>
                                            <span className="text-xs uppercase tracking-widest font-medium text-slate-400">
                                                {item.source}
                                            </span>
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-display font-bold text-primary-dark group-hover:text-accent-gold transition-colors leading-tight">
                                            {item.title}
                                        </h3>
                                    </div>
                                    <div className="flex items-center gap-2 text-primary-dark font-display font-bold text-sm uppercase tracking-widest group-hover:gap-4 transition-all">
                                        Read More
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14m-7-7 7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Other Works Section */}
            <section className="py-24 px-6 bg-primary-dark text-white">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tight mb-16">
                        Other <span className="text-accent-gold">Works</span>
                    </h2>

                    <div className="flex flex-wrap justify-center gap-8">
                        {[
                            { title: "Published Short Story 1", link: "#", color: "border-accent-gold text-accent-gold" },
                            { title: "Published Short Story 2", link: "#", color: "border-accent-gold text-accent-gold" },
                            { title: "Watch YouTube Video", link: "https://www.youtube.com/watch?v=yUnkBnG8PVI", color: "bg-accent-gold text-white" }
                        ].map((work, i) => (
                            <a
                                key={i}
                                href={work.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`px-10 py-5 rounded-full font-display font-bold uppercase tracking-widest text-sm transition-all border-2 ${work.color} hover:scale-105 active:scale-95 shadow-xl`}
                            >
                                {work.title}
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

"use client";

import React from 'react';

export default function LuckyGirlHero() {
    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center text-white">
            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0"
            >
                <source src="/lucky-girl-bg.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 z-10"></div>

            {/* Content */}
            <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
                <p className="text-accent-gold uppercase tracking-[0.4em] font-bold text-sm md:text-base mb-6 animate-fade-in">
                    The Global Phenomenon
                </p>
                <h1 className="font-display text-7xl md:text-[10vw] leading-tight font-bold uppercase tracking-tighter mb-8 drop-shadow-2xl">
                    Lucky Girl
                </h1>
                <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto mb-10 text-white/90 leading-relaxed italic">
                    "A shimmering coming-of-age story that crosses continents and cultures."
                </p>
                <div className="flex flex-col md:flex-row gap-6 justify-center">
                    <button
                        onClick={() => document.getElementById('buy-now')?.scrollIntoView({ behavior: 'smooth' })}
                        className="bg-accent-gold hover:bg-white text-primary-dark px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-all shadow-xl hover:scale-105 active:scale-95"
                    >
                        Order Now
                    </button>
                    <button
                        onClick={() => document.getElementById('about-book')?.scrollIntoView({ behavior: 'smooth' })}
                        className="bg-transparent border-2 border-white/50 hover:border-white text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-all hover:bg-white/10"
                    >
                        Learn More
                    </button>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
                <span className="material-symbols-outlined text-white text-4xl opacity-50">
                    expand_more
                </span>
            </div>
        </section>
    );
}

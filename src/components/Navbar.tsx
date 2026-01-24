"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isPurchaseOpen, setIsPurchaseOpen] = useState(false);

    const stores = [
        { name: "Amazon", url: "#" },
        { name: "Exclusive Books", url: "#" },
        { name: "Takealot", url: "#" },
        { name: "Goodreads", url: "#" },
        { name: "Barnes & Noble", url: "#" },
        { name: "Waterstones", url: "#" }
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled || isMenuOpen
                    ? "bg-background-light/95 backdrop-blur-md border-b border-primary/20 shadow-sm py-4"
                    : "bg-transparent py-6"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    <a href="/" className={`font-display text-2xl font-bold tracking-tight transition-colors ${isScrolled || isMenuOpen ? "text-primary-dark" : "text-white"
                        }`}>
                        Irene Muchemi-Ndiritu
                    </a>

                    {/* Desktop Menu */}
                    <div className={`hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide uppercase transition-colors ${isScrolled ? "text-slate-900" : "text-white/90"
                        }`}>
                        <a className="hover:text-primary transition-colors" href="/">
                            Home
                        </a>
                        <a className="hover:text-primary transition-colors" href="/lucky-girl">
                            Lucky Girl
                        </a>
                        <a className="hover:text-primary transition-colors" href="/media">
                            Media
                        </a>
                        <a className="hover:text-primary transition-colors" href="/contact">
                            Contact
                        </a>
                        <button
                            className="bg-accent-gold text-slate-900 font-bold px-6 py-2 rounded-full hover:bg-opacity-90 transition-all transform hover:-translate-y-0.5 shadow-md text-center"
                            onClick={() => setIsPurchaseOpen(true)}
                        >
                            Purchase Lucky Girl
                        </button>
                    </div>

                    {/* Mobile Menu Icon */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className={`material-symbols-outlined transition-colors ${isScrolled || isMenuOpen ? "text-primary" : "text-white"}`}
                        >
                            {isMenuOpen ? 'close' : 'menu'}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                {isMenuOpen && (
                    <div className="md:hidden bg-background-light border-b border-primary/10 py-6 px-6 animate-fade-in">
                        <div className="flex flex-col space-y-6 text-center">
                            <a
                                href="/"
                                className="text-lg font-bold text-primary-dark uppercase tracking-widest"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Home
                            </a>
                            <a
                                href="/lucky-girl"
                                className="text-lg font-bold text-primary-dark uppercase tracking-widest"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Lucky Girl
                            </a>
                            <a
                                href="/media"
                                className="text-lg font-bold text-primary-dark uppercase tracking-widest"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Media
                            </a>
                            <a
                                href="/contact"
                                className="text-lg font-bold text-primary-dark uppercase tracking-widest"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contact
                            </a>
                            <button
                                className="bg-accent-gold text-slate-900 font-bold py-3 rounded-full shadow-lg mx-auto w-full max-w-[250px]"
                                onClick={() => {
                                    setIsMenuOpen(false);
                                    setIsPurchaseOpen(true);
                                }}
                            >
                                Purchase Lucky Girl
                            </button>
                        </div>
                    </div>
                )}
            </nav>

            {/* Purchase Modal */}
            {isPurchaseOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-primary-dark/60 backdrop-blur-sm animate-fade-in">
                    <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative animate-scale-in">
                        <button
                            onClick={() => setIsPurchaseOpen(false)}
                            className="absolute top-4 right-4 text-slate-400 hover:text-primary-dark transition-colors"
                        >
                            <span className="material-symbols-outlined text-3xl">close</span>
                        </button>

                        <div className="p-8 md:p-12">
                            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-dark mb-4 text-center">
                                Purchase <span className="text-accent-gold">Lucky Girl</span>
                            </h2>
                            <p className="text-slate-600 text-center mb-10">
                                Available at major retailers worldwide. Choose your preferred store below.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {stores.map((store, index) => (
                                    <a
                                        key={index}
                                        href={store.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-between p-4 bg-slate-50 border border-slate-100 rounded-xl hover:bg-accent-gold/10 hover:border-accent-gold/30 transition-all group"
                                    >
                                        <span className="font-bold text-primary-dark">{store.name}</span>
                                        <span className="material-symbols-outlined text-accent-gold group-hover:translate-x-1 transition-transform">
                                            arrow_forward
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

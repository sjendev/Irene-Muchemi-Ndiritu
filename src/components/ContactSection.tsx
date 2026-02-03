import React from 'react';

export default function ContactSection() {
    return (
        <section className="bg-parchment overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side: Contact Information */}
                    <div className="order-2 lg:order-1">
                        <div className="max-w-md">
                            <h2 className="font-display text-3xl font-bold text-primary-dark mb-8 uppercase tracking-tight">
                                Get In Touch
                            </h2>

                            <div className="space-y-8">
                                {/* Publishing Enquiries */}
                                <div className="group">
                                    <div className="text-accent-gold mb-3">
                                        <span className="material-symbols-outlined text-3xl">auto_stories</span>
                                    </div>
                                    <h3 className="font-display text-lg font-bold text-primary-dark mb-1 uppercase tracking-wide">Publishing Enquiries</h3>
                                    <p className="text-base text-slate-800 mb-1">Maria Cardona-Serra</p>
                                    <a href="https://www.aevitascreative.com/agent/maria-cardona-serra" target="_blank" rel="noopener noreferrer" className="text-base text-slate-700 hover:text-accent-ochre transition-colors underline decoration-accent-gold/30 underline-offset-4">
                                        Aevitas Creative Agency
                                    </a>
                                </div>

                                {/* Socials */}
                                <div className="pt-6 border-t border-primary/10">
                                    <h3 className="font-display text-base font-bold text-primary-dark mb-4 uppercase tracking-widest">Connect</h3>
                                    <div className="flex space-x-5">
                                        {/* Twitter/X */}
                                        <a href="https://twitter.com/indiritu" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
                                            <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center mb-1 group-hover:bg-primary group-hover:border-primary transition-all">
                                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                                </svg>
                                            </div>
                                            <span className="text-[10px] font-bold text-slate-600 group-hover:text-primary-dark transition-colors uppercase tracking-widest">X</span>
                                        </a>
                                        {/* Instagram */}
                                        <a href="https://instagram.com/indiritu1" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
                                            <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center mb-1 group-hover:bg-primary group-hover:border-primary transition-all">
                                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                                                        <stop offset="0%" stopColor="#FFDC80" />
                                                        <stop offset="25%" stopColor="#FCAF45" />
                                                        <stop offset="50%" stopColor="#F77737" />
                                                        <stop offset="75%" stopColor="#F56040" />
                                                        <stop offset="100%" stopColor="#C13584" />
                                                    </linearGradient>
                                                    <rect x="2" y="2" width="20" height="20" rx="5" stroke="url(#instagram-gradient)" strokeWidth="2" />
                                                    <circle cx="12" cy="12" r="4" stroke="url(#instagram-gradient)" strokeWidth="2" />
                                                    <circle cx="17.5" cy="6.5" r="1.5" fill="url(#instagram-gradient)" />
                                                </svg>
                                            </div>
                                            <span className="text-[10px] font-bold text-slate-600 group-hover:text-primary-dark transition-colors uppercase tracking-widest">IG</span>
                                        </a>
                                        {/* LinkedIn */}
                                        <a href="https://linkedin.com/in/irenemuchemindiritu" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
                                            <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center mb-1 group-hover:bg-primary group-hover:border-primary transition-all">
                                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#0A66C2" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                                </svg>
                                            </div>
                                            <span className="text-[10px] font-bold text-slate-600 group-hover:text-primary-dark transition-colors uppercase tracking-widest">LI</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Irene's Image */}
                    <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-sm aspect-[4/5] rounded-xl overflow-hidden shadow-xl border-4 border-white">
                            <img
                                src="/irene-contact.jpg"
                                alt="Irene Muchemi-Ndiritu"
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

import React from 'react';

export default function ContactSection() {
    return (
        <section className="py-24 px-6 bg-parchment min-h-[40vh] flex flex-col justify-center">
            <div className="max-w-4xl mx-auto text-center">
                <div className="grid md:grid-cols-2 gap-12 mb-20">
                    {/* Email */}
                    <div className="group">
                        <div className="text-accent-gold mb-4">
                            <span className="material-symbols-outlined text-5xl">mail</span>
                        </div>
                        <h3 className="font-display text-2xl font-bold text-primary-dark mb-2 uppercase tracking-wide">Email</h3>
                        <a href="mailto:irene@example.com" className="text-xl text-slate-800 hover:text-accent-ochre transition-colors underline decoration-accent-gold/30 underline-offset-4">
                            irene@example.com
                        </a>
                    </div>

                    {/* Phone */}
                    <div className="group">
                        <div className="text-accent-gold mb-4">
                            <span className="material-symbols-outlined text-5xl">phone_iphone</span>
                        </div>
                        <h3 className="font-display text-2xl font-bold text-primary-dark mb-2 uppercase tracking-wide">Phone</h3>
                        <p className="text-xl text-slate-800">
                            +1 (555) 000-0000
                        </p>
                    </div>
                </div>

                <div className="border-t border-primary/10 pt-16">
                    <h3 className="font-display text-2xl font-bold text-primary-dark mb-8 uppercase tracking-widest">Follow</h3>
                    <div className="flex justify-center space-x-12">
                        <a href="#" className="flex flex-col items-center group">
                            <div className="w-16 h-16 rounded-full border-2 border-primary/20 flex items-center justify-center mb-2 group-hover:bg-primary group-hover:border-primary transition-all">
                                <img src="https://www.svgrepo.com/show/364604/instagram-logo-fill.svg" alt="Instagram" className="w-8 h-8 group-hover:invert transition-all" />
                            </div>
                            <span className="font-bold text-slate-600 group-hover:text-primary-dark transition-colors">Instagram</span>
                        </a>
                        <a href="#" className="flex flex-col items-center group">
                            <div className="w-16 h-16 rounded-full border-2 border-primary/20 flex items-center justify-center mb-2 group-hover:bg-primary group-hover:border-primary transition-all">
                                <img src="https://www.svgrepo.com/show/364585/facebook-logo-fill.svg" alt="Facebook" className="w-8 h-8 group-hover:invert transition-all" />
                            </div>
                            <span className="font-bold text-slate-600 group-hover:text-primary-dark transition-colors">Facebook</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

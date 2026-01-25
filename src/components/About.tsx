export default function About() {
    return (
        <section className="py-24 px-6 max-w-7xl mx-auto relative" id="about">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="order-2 md:order-1">
                    <p className="text-primary font-bold tracking-widest uppercase mb-2">
                        My Story
                    </p>
                    <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-primary-dark">
                        Author. Journalist. Observer.
                    </h2>
                    <p className="text-lg text-slate-800 mb-8 leading-relaxed font-light">
                        Kenyan-born author weaving powerful, heartfelt stories about
                        identity, womanhood, and belonging across cultures and generations.
                    </p>
                    <button className="border-2 border-primary text-primary-dark hover:bg-primary hover:text-white px-8 py-3 rounded-full font-bold uppercase tracking-wider text-sm transition-all shadow-sm">
                        About Me
                    </button>
                </div>
                <div className="order-1 md:order-2 flex justify-center">
                    <div className="relative group w-full max-w-[360px]">
                        {/* Decorative African-themed Box */}
                        <div className="absolute -inset-3 border-2 border-primary/30 rounded-2xl rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
                        <div className="absolute -inset-3 border-2 border-accent-gold/40 rounded-2xl -rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>

                        <div className="relative overflow-hidden rounded-xl shadow-2xl aspect-[2/3] w-full">
                            <img
                                alt="Author Irene Muchemi-Ndiritu"
                                className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
                                src="/about-author.jpg"
                            />
                            {/* Beaded-style overlay pattern on edges */}
                            <div className="absolute inset-0 border-[12px] border-white/10 pointer-events-none"></div>
                            <div className="absolute inset-x-0 bottom-0 h-3 bg-shuka opacity-40"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

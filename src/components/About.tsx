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
                    <img
                        alt="Portrait of Irene Muchemi-Ndiritu"
                        className="w-full h-auto"
                        src="/about-irene-transparent.png"
                    />
                </div>
            </div>
        </section>
    );
}

import Link from "next/link";

export default function Books() {
    return (
        <section className="py-32 px-6 bg-white overflow-hidden" id="lucky-girl">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-12 gap-12 items-center">

                    {/* Quotes Column - Main Text */}
                    <div className="md:col-span-5 space-y-12">
                        <h3 className="font-display text-accent-gold uppercase tracking-[0.3em] text-sm font-bold mb-8">
                            Lucky Girl
                        </h3>

                        <div className="space-y-10">
                            {[
                                {
                                    text: "Lucky Girl is at its strongest when Muchemi-Ndiritu addresses the topic of American racism.",
                                    author: "New York Times Book Review"
                                },
                                {
                                    text: "Readers will find a poignant, memorable voice they’ll feel lucky to have met.",
                                    author: "Harper's Bazaar"
                                },
                                {
                                    text: "Muchemi-Ndiritu is a master of knitting together a narrative and then pulling away at the threads to unravel it.",
                                    author: "Brittle Paper"
                                }
                            ].map((quote, i) => (
                                <div key={i} className="border-l-4 border-accent-gold pl-6 py-2">
                                    <p className="text-slate-800 italic text-xl md:text-2xl leading-relaxed mb-3">
                                        "{quote.text}"
                                    </p>
                                    <p className="text-primary-dark font-display font-bold text-xs uppercase tracking-widest">
                                        — {quote.author}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Book Cover Column */}
                    <div className="md:col-span-4 flex justify-center">
                        <Link href="/lucky-girl" className="relative group block">
                            <div className="absolute inset-0 bg-accent-gold/20 transform rotate-6 rounded-sm group-hover:rotate-12 transition-transform duration-500"></div>
                            <div className="relative shadow-[0_20px_50px_rgba(0,0,0,0.3)] transform group-hover:-translate-y-4 transition-transform duration-700 border-8 border-white">
                                <img
                                    alt="Lucky Girl Book Cover"
                                    className="w-full max-w-[340px] rounded-sm"
                                    src="/lucky-girl-cover.webp"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-shuka opacity-20 mix-blend-multiply z-[-1]"></div>
                        </Link>
                    </div>

                    {/* CTA Column */}
                    <div className="md:col-span-3 flex md:justify-end">
                        <div className="text-center md:text-right">
                            <Link
                                href="/lucky-girl#buy-now"
                                className="inline-block bg-accent-gold text-white hover:bg-accent-ochre px-10 py-5 rounded-full font-display font-bold uppercase tracking-widest text-sm transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 transform active:scale-95"
                            >
                                Purchase Lucky Girl
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

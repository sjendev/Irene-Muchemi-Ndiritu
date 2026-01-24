export default function Books() {
    return (
        <section className="py-24 px-6 max-w-7xl mx-auto" id="books">
            <div className="grid md:grid-cols-3 gap-16 items-start">
                <div>
                    <h3 className="font-display text-2xl font-bold uppercase tracking-wider mb-8 border-b-2 border-primary/30 pb-4 text-primary-dark">
                        About Lucky Girl
                    </h3>
                    <p className="text-slate-800 leading-relaxed mb-6">
                        Lucky Girl by Irene Muchemi-Ndiritu is a coming-of-age story about
                        Soila, a young Kenyan woman raised under a strict, religious mother
                        in Nairobi.
                    </p>
                    <p className="text-slate-800 leading-relaxed">
                        Seeking freedom, she moves to New York in the 1990s for college,
                        where she faces cultural clashes, racism, and questions of identity.
                        As she navigates love, independence, and belonging, Soila is forced
                        path.
                    </p>
                    <div className="mt-8 space-y-6">
                        <div className="border-l-2 border-accent-gold pl-4 py-1">
                            <p className="text-slate-800 italic text-sm mb-2">
                                "Lucky Girl is at its strongest when Muchemi-Ndiritu addresses the topic of American racism."
                            </p>
                            <p className="text-primary font-bold text-xs uppercase tracking-wider">
                                — New York Times Book Review
                            </p>
                        </div>
                        <div className="border-l-2 border-accent-gold pl-4 py-1">
                            <p className="text-slate-800 italic text-sm mb-2">
                                "Readers will find a poignant, memorable voice they’ll feel lucky to have met."
                            </p>
                            <p className="text-primary font-bold text-xs uppercase tracking-wider">
                                — Harper's Bazaar
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="relative group">
                        <div className="absolute inset-0 bg-accent-ochre transform rotate-3 rounded-sm group-hover:rotate-6 transition-transform"></div>
                        <div className="relative shadow-2xl transform hover:-translate-y-2 transition-transform duration-500 border-4 border-white">
                            <img
                                alt="Lucky Girl Book Cover"
                                className="w-full max-w-[320px] rounded-sm"
                                src="/lucky-girl-cover.webp"
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="font-display text-2xl font-bold uppercase tracking-wider mb-8 border-b-2 border-primary/30 pb-4 text-primary-dark">
                        Where to Buy
                    </h3>
                    <ul className="space-y-4">
                        <li className="flex justify-between items-center group cursor-pointer border-b border-primary/10 pb-3 hover:bg-primary/5 px-2 rounded transition-colors">
                            <span className="font-bold text-slate-800">
                                Amazon
                            </span>
                            <span className="material-symbols-outlined text-accent-gold transition-transform group-hover:translate-x-1">
                                arrow_forward
                            </span>
                        </li>
                        <li className="flex justify-between items-center group cursor-pointer border-b border-primary/10 pb-3 hover:bg-primary/5 px-2 rounded transition-colors">
                            <span className="font-bold text-slate-800">
                                Exclusive Books
                            </span>
                            <span className="material-symbols-outlined text-accent-gold transition-transform group-hover:translate-x-1">
                                arrow_forward
                            </span>
                        </li>
                        <li className="flex justify-between items-center group cursor-pointer border-b border-primary/10 pb-3 hover:bg-primary/5 px-2 rounded transition-colors">
                            <span className="font-bold text-slate-800">
                                Takealot
                            </span>
                            <span className="material-symbols-outlined text-accent-gold transition-transform group-hover:translate-x-1">
                                arrow_forward
                            </span>
                        </li>
                        <li className="flex justify-between items-center group cursor-pointer border-b border-primary/10 pb-3 hover:bg-primary/5 px-2 rounded transition-colors">
                            <span className="font-bold text-slate-800">
                                Good Reads
                            </span>
                            <span className="material-symbols-outlined text-accent-gold transition-transform group-hover:translate-x-1">
                                arrow_forward
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

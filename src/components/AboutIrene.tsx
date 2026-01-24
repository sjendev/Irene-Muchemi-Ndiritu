export default function AboutIrene() {
    return (
        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
            <div className="border-t border-slate-300 mb-16"></div>

            <div className="grid md:grid-cols-3 gap-12 md:gap-24">
                {/* Left Column: Title & CTA */}
                <div className="md:col-span-1 space-y-8">
                    <h2 className="font-display text-2xl tracking-widest uppercase text-primary-dark">
                        About Irene
                    </h2>
                    <button className="border border-accent-green text-accent-green px-6 py-2 rounded-full text-xs font-bold uppercase hover:bg-accent-green hover:text-white transition-all">
                        Purchase Lucky Girl
                    </button>
                </div>

                {/* Right Column: Bio Text */}
                <div className="md:col-span-2">
                    <p className="text-xl md:text-2xl font-light leading-relaxed text-slate-800">
                        Irene Muchemi-Ndiritu was born and raised in Nairobi and moved to
                        the United States in 1998 to attend college. She holds an MA in
                        Journalism from Columbia University's Graduate School of Journalism
                        and has worked as a journalist in New York City, Washington D.C.,
                        and Boston. She later earned an MFA in Creative Writing from the
                        University of Cape Town, graduating with distinction. Her fiction
                        has appeared in the Yale Review and Adda, and she has been
                        shortlisted for the Commonwealth Short Story Prize. She now lives in
                        Cape Town, South Africa. Lucky Girl is her debut novel.
                    </p>
                </div>
            </div>

            <div className="border-b border-slate-300 mt-16"></div>
        </section>
    );
}

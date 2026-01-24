export default function Footer() {
    return (
        <footer className="bg-clay text-white py-20 relative overflow-hidden" id="contact">
            <div className="absolute inset-0 bg-kiondo opacity-10 pointer-events-none"></div>
            <div className="absolute top-0 w-full">
                <div className="wood-divider opacity-30"></div>
            </div>
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-3 gap-16 mb-20">
                    <div>
                        <h4 className="font-display text-2xl uppercase font-bold mb-6 tracking-wider text-accent-gold">
                            Lets stay connected
                        </h4>
                        <p className="text-white/80 mb-8 leading-relaxed">
                            Follow Irene's journey and be the first to know about new stories
                            and events.
                        </p>
                        <div className="flex">
                            <input
                                className="bg-black/20 border-white/10 text-white placeholder-white/40 w-full px-4 py-2 rounded-l-md focus:ring-accent-gold focus:border-accent-gold outline-none"
                                placeholder="Your Email Address"
                                type="email"
                            />
                            <button className="bg-accent-gold text-clay px-6 font-bold uppercase text-xs rounded-r-md hover:bg-white hover:text-clay transition-colors">
                                Join
                            </button>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-display text-2xl uppercase font-bold mb-6 tracking-wider text-accent-gold">
                            Quick Links
                        </h4>
                        <ul className="space-y-4 font-medium text-white/80">
                            <li>
                                <a
                                    className="hover:text-accent-gold transition-colors flex items-center gap-2"
                                    href="#"
                                >
                                    <span className="w-1.5 h-1.5 bg-accent-gold rounded-full"></span>{" "}
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    className="hover:text-accent-gold transition-colors flex items-center gap-2"
                                    href="#"
                                >
                                    <span className="w-1.5 h-1.5 bg-accent-gold rounded-full"></span>{" "}
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    className="hover:text-accent-gold transition-colors flex items-center gap-2"
                                    href="#"
                                >
                                    <span className="w-1.5 h-1.5 bg-accent-gold rounded-full"></span>{" "}
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-display text-2xl uppercase font-bold mb-6 tracking-wider text-accent-gold">
                            Social Media
                        </h4>
                        <ul className="space-y-4 font-medium text-white/80">
                            <li>
                                <a className="hover:text-accent-gold transition-colors" href="#">
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a className="hover:text-accent-gold transition-colors" href="#">
                                    Facebook
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-white/10 pt-12 overflow-hidden whitespace-nowrap group">
                    <div className="animate-marquee flex gap-8 py-4">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="font-display text-6xl md:text-8xl font-black uppercase text-accent-gold tracking-tight flex items-center gap-8">
                                <span>IRENE MUCHEMI - NDIRITU</span>
                                <span className="opacity-20 text-white">AUTHOR, JOURNALIST, CREATIVE.</span>
                                <span className="text-secondary opacity-30">/</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-12 text-center text-white/30 text-sm">
                    © {new Date().getFullYear()} Irene Muchemi-Ndiritu. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

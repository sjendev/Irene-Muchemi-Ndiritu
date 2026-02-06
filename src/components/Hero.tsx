export default function Hero() {
    return (
        <header className="relative h-screen bg-clay text-white overflow-hidden flex flex-col bg-texture">
            {/* Background patterns and overlays */}
            <div className="absolute inset-0 z-0 bg-shuka opacity-15 mix-blend-overlay"></div>
            <div className="absolute inset-0 z-0 bg-[url('/beads-pattern.png')] opacity-10 mix-blend-soft-light bg-repeat"></div>
            <div className="absolute inset-0 z-0 bg-motif opacity-20 mix-blend-soft-light"></div>
            {/* Subtle African geometric pattern */}
            <div 
                className="absolute inset-0 z-0 opacity-[0.03]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: '30px 30px'
                }}
            ></div>

            {/* 4-Column Grid Lines */}
            <div className="absolute inset-0 z-0 flex pointer-events-none">
                <div className="flex-1 border-r border-white/10"></div>
                <div className="flex-1 border-r border-white/10"></div>
                <div className="flex-1 border-r border-white/10"></div>
                <div className="flex-1"></div>
            </div>

            {/* Main Content Area - Image positioned at bottom */}
            <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-center px-6 md:px-12 h-full pointer-events-none">
                <img
                    alt="Portrait of Irene Muchemi-Ndiritu"
                    className="h-[75vh] w-auto object-contain object-bottom"
                    src="/irene-hero-new.png"
                />
            </div>

            {/* Massive Bottom Typography Name - overlaying the image */}
            <div className="absolute bottom-0 left-0 right-0 z-40 px-6 md:px-12 pointer-events-none pb-8">
                <h1 className="font-display text-[15vw] leading-[0.8] font-bold text-white uppercase tracking-tighter drop-shadow-2xl">
                    Irene
                </h1>
            </div>

            {/* Bottom Wood Divider Overlay */}
            <div className="absolute bottom-0 w-full z-30 opacity-20 pointer-events-none transform rotate-180">
                <div className="wood-divider brightness-0 invert opacity-100"></div>
            </div>
        </header>
    );
}

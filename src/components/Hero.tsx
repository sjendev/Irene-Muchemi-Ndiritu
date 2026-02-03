export default function Hero() {
    return (
        <header className="relative h-screen bg-clay text-white overflow-hidden flex flex-col">
            {/* Background patterns and overlays */}
            <div className="absolute inset-0 z-0 bg-shuka opacity-15 mix-blend-overlay"></div>
            <div className="absolute inset-0 z-0 bg-[url('/beads-pattern.png')] opacity-10 mix-blend-soft-light bg-repeat"></div>

            {/* 4-Column Grid Lines */}
            <div className="absolute inset-0 z-0 flex pointer-events-none">
                <div className="flex-1 border-r border-white/10"></div>
                <div className="flex-1 border-r border-white/10"></div>
                <div className="flex-1 border-r border-white/10"></div>
                <div className="flex-1"></div>
            </div>


            {/* Main Content Area */}
            <div className="relative z-10 flex-grow grid grid-cols-1 md:grid-cols-4 px-6 md:px-12 pt-32 pb-12">
                {/* Left Column - Empty for now as requested */}
                <div className="mt-12 md:col-span-1 max-w-xs">
                </div>

                {/* Center Portrait Area - Now spanning remaining columns */}
                <div className="md:col-span-3 flex justify-center items-end relative overflow-hidden h-full">
                    <div className="relative h-full w-full max-w-7xl flex items-end justify-center">
                        <img
                            alt="Portrait of Irene Muchemi-Ndiritu"
                            className="h-[90%] w-auto max-w-none object-contain object-bottom pointer-events-none transform scale-[1.1] origin-bottom"
                            src="/irene-hero.png"
                        />
                    </div>
                </div>
            </div>

            {/* Massive Bottom Typography Name */}
            <div className="relative z-40 w-full px-6 md:px-12 pointer-events-none -mt-80 pb-8">
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

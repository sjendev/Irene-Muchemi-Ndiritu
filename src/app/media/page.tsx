import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const quotes = [
    {
        text: "Irene Muchemi-Ndiritu’s debut novel, Lucky Girl, is a coming-of-age story about a privileged but sheltered teenager in Kenya, Soila, who is eager for escape. . . . Lucky Girl is at its strongest when Muchemi-Ndiritu addresses the topic of American racism. . . . [Soila’s] honesty about her ‘different brand of Blackness,’ and ultimately her ability to drop the idea of it being a brand, make for some of the book’s most compelling passages.",
        author: "The New York Times Book Review"
    },
    {
        text: "Muchemi-Ndiritu is a master of knitting together a narrative and then pulling away at the threads to unravel it . . . In her debut novel Lucky Girl, Irene Muchemi-Ndiritu['s] . . . ability to learn from life’s ordeals on two continents, shed encumbrances, and pack up the positives to carry with her into the future exemplifies the luck she finally forms on her own terms.",
        author: "Brittle Paper"
    },
    {
        text: "Lucky Girl is at times tender, at times funny, at times uncomfortably frank. . . . A fresh look at racism, privilege, and the challenges of coming-of-age and falling in love between two cultures.",
        author: "Charmaine Wilkerson, New York Times bestselling author of Black Cake"
    },
    {
        text: "From the leafy suburbs of Nairobi to the buzzing boroughs of New York City and back again, Lucky Girl is a glittering coming-of-age novel and a juicy indictment of the ‘tilted society of haves and have-nots.’ Muchemi-Ndiritu writes with spirit and nuance about privilege, race, and intergenerational heartache. I couldn't put it down.",
        author: "Alison B. Hart, author of The Work Wife"
    },
    {
        text: "Stimulating the heart and mind, Lucky Girl is an irresistible novel that captures the immense pressure—to be perfect, to live on our own terms, to love and be loved—of our times. Fiery conversations around race, belonging, and differing cultures give this debut its vibrant energy, but the hard-won wisdom is what allows it to soar. Most brilliantly, Irene Muchemi-Ndiritu shows us what it means to live in balance, and how duties and dreams don’t always have to be at odds, especially when love is involved. Surprises abound, Lucky Girl is the literary gift we all need, making us the lucky ones.",
        author: "Mateo Askaripour, New York Times bestselling author of Black Buck"
    },
    {
        text: "An incredibly nuanced, character-driven story with a courageous protagonist to root for, Lucky Girl is a powerful exploration of making the most of the hand you’ve been dealt.",
        author: "Lizzie Damilola Blackburn, author of Yinka, Where Is Your Huzband?"
    },
    {
        text: "A beautifully written and illuminating story about parental pressure, undeserved shame, and Kenyan culture.",
        author: "Jessica George, author of Maame"
    },
    {
        text: "A young Kenyan woman in New York City faces an identity crisis while coming to recognize how issues of race, culture, and religion are different for Black Americans than for Black Africans. . . . A thought-provoking exploration of the complicated experience of an African woman in America.",
        author: "Kirkus Reviews"
    }
];

export default function MediaPage() {
    return (
        <main className="bg-background-light min-h-screen">
            <Navbar />

            {/* Media Hero */}
            <section className="bg-clay text-white pt-48 pb-32 px-6 overflow-hidden relative">
                <div className="absolute inset-0 z-0 bg-shuka opacity-5 mix-blend-overlay"></div>
                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <h1 className="font-display text-8xl md:text-[12vw] font-bold uppercase tracking-tighter mb-4">
                        Media
                    </h1>
                    <p className="text-accent-gold uppercase tracking-[0.3em] font-medium text-sm md:text-base">
                        Press. Praise. Presence.
                    </p>
                </div>
            </section>

            {/* Quotes Gallery */}
            <section className="py-24 px-6 max-w-5xl mx-auto">
                <div className="space-y-24">
                    {quotes.map((quote, index) => (
                        <div
                            key={index}
                            className="relative group animate-fade-in"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <span className="absolute -top-12 -left-8 md:-left-12 font-display text-[150px] text-clay/5 select-none pointer-events-none">
                                “
                            </span>
                            <div className="relative z-10">
                                <p className="text-xl md:text-3xl font-light italic leading-relaxed text-slate-800 mb-8 border-l-4 border-accent-gold pl-8 md:pl-12">
                                    {quote.text}
                                </p>
                                <div className="flex items-center gap-4 pl-8 md:pl-12">
                                    <div className="h-px w-8 bg-accent-ochre"></div>
                                    <p className="font-display text-lg md:text-xl font-bold text-primary-dark">
                                        {quote.author}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}

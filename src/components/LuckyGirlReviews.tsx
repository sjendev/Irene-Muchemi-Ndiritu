import React from 'react';

const reviews = [
    {
        text: "Irene Muchemi-Ndiritu’s debut novel, Lucky Girl, is a coming-of-age story about a privileged but sheltered teenager in Kenya, Soila, who is eager for escape. . . . Lucky Girl is at its strongest when Muchemi-Ndiritu addresses the topic of American racism.",
        author: "The New York Times Book Review"
    },
    {
        text: "Lucky Girl is at times tender, at times funny, at times uncomfortably frank. . . . A fresh look at racism, privilege, and the challenges of coming-of-age and falling in love between two cultures.",
        author: "Charmaine Wilkerson, New York Times bestselling author of Black Cake"
    },
    {
        text: "Stimulating the heart and mind, Lucky Girl is an irresistible novel that captures the immense pressure—to be perfect, to live on our own terms, to love and be loved—of our times.",
        author: "Mateo Askaripour, New York Times bestselling author of Black Buck"
    },
    {
        text: "An incredibly nuanced, character-driven story with a courageous protagonist to root for, Lucky Girl is a powerful exploration of making the most of the hand you’ve been dealt.",
        author: "Lizzie Damilola Blackburn, author of Yinka, Where Is Your Huzband?"
    }
];

export default function LuckyGirlReviews() {
    return (
        <section className="py-24 px-6 bg-primary-dark text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-accent-gold/5 -skew-x-12 transform translate-x-1/4"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <h2 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tight mb-16 text-center">
                    Critical <span className="text-accent-gold">Praise</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-12">
                    {reviews.map((review, index) => (
                        <div key={index} className="bg-white/5 p-8 md:p-12 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                            <span className="text-accent-gold text-6xl font-serif leading-none italic block mb-4">“</span>
                            <p className="text-lg md:text-xl font-light leading-relaxed mb-8 italic text-white/90">
                                {review.text}
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="h-px w-8 bg-accent-gold"></div>
                                <p className="font-display text-lg font-bold uppercase tracking-wider text-accent-gold">
                                    {review.author}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

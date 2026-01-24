import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LuckyGirlHero from "@/components/LuckyGirlHero";
import LuckyGirlAbout from "@/components/LuckyGirlAbout";
import LuckyGirlReviews from "@/components/LuckyGirlReviews";
import LuckyGirlShop from "@/components/LuckyGirlShop";

export const metadata = {
    title: "Lucky Girl | Irene Muchemi-Ndiritu",
    description: "Explore the debut novel 'Lucky Girl' by Irene Muchemi-Ndiritu. A story of identity, culture, and coming of age between Nairobi and New York.",
};

export default function LuckyGirlPage() {
    return (
        <main className="min-h-screen">
            <Navbar />

            <LuckyGirlHero />

            <LuckyGirlAbout />

            <LuckyGirlReviews />

            <LuckyGirlShop />

            <Footer />
        </main>
    );
}

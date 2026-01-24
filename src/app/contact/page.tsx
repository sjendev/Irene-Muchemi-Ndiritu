import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

export const metadata = {
    title: "Contact | Irene Muchemi-Ndiritu",
    description: "Get in touch with author Irene Muchemi-Ndiritu for inquiries, speaking engagements, and more.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-background-light">
            <Navbar />

            {/* Contact Hero - Matching Media Page Style */}
            <section className="bg-clay text-white pt-48 pb-32 px-6 overflow-hidden relative">
                <div className="absolute inset-0 z-0 bg-shuka opacity-5 mix-blend-overlay"></div>
                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <h1 className="font-display text-8xl md:text-[12vw] font-bold uppercase tracking-tighter mb-4">
                        Contact
                    </h1>
                    <p className="text-accent-gold uppercase tracking-[0.3em] font-medium text-sm md:text-base">
                        Inquiries. Speaking. Connection.
                    </p>
                </div>
            </section>

            <ContactSection />
            <Footer />
        </main>
    );
}

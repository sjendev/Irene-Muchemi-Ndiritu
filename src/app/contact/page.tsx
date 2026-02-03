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

            {/* Contact Hero - Merged/Shrunk for 100vh fit */}
            <section className="bg-clay text-white pt-32 pb-12 px-6 overflow-hidden relative">
                <div className="absolute inset-0 z-0 bg-shuka opacity-5 mix-blend-overlay"></div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <h1 className="font-display text-6xl md:text-8xl font-bold uppercase tracking-tighter mb-2">
                        Contact
                    </h1>
                    <p className="text-accent-gold uppercase tracking-[0.3em] font-medium text-xs md:text-sm">
                        Inquiries. Speaking. Connection.
                    </p>
                </div>
            </section>

            <ContactSection />
            <Footer />
        </main>
    );
}

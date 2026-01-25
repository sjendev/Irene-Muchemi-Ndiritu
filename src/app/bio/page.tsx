import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BioHero from "@/components/BioHero";
import BioContent from "@/components/BioContent";
import BioGallery from "@/components/BioGallery";
import BioTestimonial from "@/components/BioTestimonial";

export const metadata = {
    title: "Bio | Irene Muchemi-Ndiritu",
    description: "Learn more about Irene Muchemi-Ndiritu, the author of Lucky Girl.",
};

export default function BioPage() {
    return (
        <>
            <Navbar />
            <main>
                <BioHero />
                <BioContent />
                <BioGallery />
                <BioTestimonial />
            </main>
            <Footer />
        </>
    );
}

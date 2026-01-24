import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Books from "@/components/Books";
import AboutIrene from "@/components/AboutIrene";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="wood-divider"></div>
      <About />

      <AboutIrene />

      <Books />
      <Footer />
    </>
  );
}

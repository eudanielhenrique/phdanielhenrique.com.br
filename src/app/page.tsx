import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070808] text-white flex flex-col">
      <Navbar />
      <Hero />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}

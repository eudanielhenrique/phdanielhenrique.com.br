import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { ExperienceAndSkills } from "@/components/ExperienceAndSkills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#090a0f] text-slate-100 flex flex-col selection:bg-indigo-500/30 selection:text-white">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <ExperienceAndSkills />
      <Contact />
      <Footer />
    </main>
  );
}

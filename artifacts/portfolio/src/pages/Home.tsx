import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { GithubStats } from "@/components/sections/GithubStats";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { BottomNav } from "@/components/sections/BottomNav";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground">
      <Navbar />
      <main className="scroll-smooth">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <GithubStats />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
}

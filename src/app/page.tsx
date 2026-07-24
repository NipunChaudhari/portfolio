import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Research } from "@/components/sections/Research";
import { Achievements } from "@/components/sections/Achievements";
import { Certificates } from "@/components/sections/Certificates";
import { Resume } from "@/components/sections/Resume";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { Blog } from "@/components/sections/Blog";
import { Contact } from "@/components/sections/Contact";

// Sections are added here one at a time as each milestone builds them.
export default function Home() {
  return (
    <main className="bg-background">
      <Hero />
      <About />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Research />
      <Achievements />
      <Certificates />
      <Resume />
      <Gallery />
      <Testimonials />
      <Blog />
      <Contact />
    </main>
  );
}

import Expertise from "@/components/Expertise";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import React from "react";

const Home = () => {
  return (
    <main className="flex flex-col w-full bg-gray-text">
      <section className="pb-[7.5rem]">
        <HeroSection />
      </section>
      <section id="expertise" className="py-[7.5rem]">
        <Expertise />
      </section>
      <section id="projects" className="py-[7.5rem]">
        <Projects />
      </section>
      <section id="testimonials" className="py-[7.5rem]">
        <Testimonials />
      </section>
    </main>
  );
};

export default Home;

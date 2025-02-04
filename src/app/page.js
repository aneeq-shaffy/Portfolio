"use client"

import Navbar from "../components/Navbar";
import About from "../components/About";
import Present from "../components/Present";
import Education from "../components/Education";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { useEffect } from "react";

export default function Home() {
  // Handle initial page load with hash
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="px-[350px] max-xl:px-[300px] max-lg:px-[200px] max-md:px-[100px] max-sm:px-4">
      <Navbar />
      
      <section id="about">
        <About />
      </section>
      
      <Present />
      
      <section id="education">
        <Education />
      </section>
      
      <section id="projects">
        <Projects />
      </section>
      
      <section id="tech-stack">
        <Skills />
      </section>
      
      <section id="contact">
        <Contact />
      </section>
      
      <Footer />
    </div>
  );
}
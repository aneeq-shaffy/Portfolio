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
    <div className="h-screen flex flex-col">
      <Navbar />
      
      {/* Scrollable content area */}
      <div className="flex-1 overflow-y-auto pt-20 px-4 sm:px-6 md:px-8 lg:px-[200px] xl:px-[300px] 2xl:px-[350px]">
        <section id="about" className="mb-10 max-md:mb-4">
          <About />
        </section>
        
        <Present />
        
        <section id="education" className="mb-10 max-md:mb-4">
          <Education />
        </section>
        
        <section id="projects" className="mb-10 max-md:mb-4">
          <Projects />
        </section>
        
        <section id="skills" className="mb-10 max-md:mb-4">
          <Skills />
        </section>
        
        <section id="contact" className="mb-10 max-md:mb-4">
          <Contact />
        </section>
        
        <Footer />
      </div>
    </div>
  );
}
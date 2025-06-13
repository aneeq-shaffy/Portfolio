"use client"

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = {
  "#about": { name: "About" },
  "#education": { name: "Education" },
  "#projects": { name: "Projects" },
  "#skills": { name: "Skills" },
  "#contact": { name: "Contact" },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll position for dynamic styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (e, path) => {
    e.preventDefault();
    const id = path.split("#")[1];
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      window.history.pushState({}, "", path);
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation - Fixed at top like YouTube */}
      <nav className="hidden md:flex fixed top-0 left-0 right-0 z-50 px-8 py-4 h-20 shadow-lg" style={{ background: 'linear-gradient(180deg, var(--background-from), var(--background-to))' }}>
        <div className="max-w-6xl mx-auto w-full flex items-center justify-center space-x-8">
          {Object.entries(navItems).map(([path, { name }]) => (
            <a
              key={path}
              href={path}
              onClick={(e) => handleSmoothScroll(e, path)}
              className="relative text-[rgb(179,186,198)] hover:text-white text-2xl font-medium transition-all duration-300 group py-2 px-3"
            >
              {name}
              {/* Modern underline effect */}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>
          ))}
        </div>
      </nav>

      {/* Mobile Navigation - Enhanced */}
      <div className="md:hidden">
        {/* Mobile Menu Button - Now top-left with better styling */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`fixed top-6 left-6 z-50 p-3 rounded-full transition-all duration-300 ${
            isOpen 
              ? 'bg-black/40 backdrop-blur-xl border border-white/20 text-white rotate-180' 
              : 'bg-black/20 backdrop-blur-md border border-white/10 text-[rgb(179,186,198)] hover:text-white'
          }`}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay - Enhanced */}
        <div className={`fixed inset-0 z-40 transition-all duration-500 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Mobile Menu Content - Clean and modern with nice effects */}
          <div className={`absolute top-20 left-6 w-56 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl transition-all duration-500 ${
            isOpen ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-4 opacity-0 scale-95'
          }`}>
            <div className="flex flex-col space-y-1">
              {Object.entries(navItems).map(([path, { name }], index) => (
                <a
                  key={path}
                  href={path}
                  onClick={(e) => handleSmoothScroll(e, path)}
                  className="text-lg text-[rgb(179,186,198)] hover:text-white transition-all duration-300 px-4 py-3 rounded-xl hover:bg-white/10 relative group active:scale-95 active:bg-white/20"
                  style={{
                    transitionDelay: isOpen ? `${index * 75}ms` : '0ms'
                  }}
                >
                  <span className="relative z-10">{name}</span>
                  
                  {/* Smooth hover background */}
                  <div className="absolute inset-0 bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100" />
                  
                  {/* Left border accent on hover */}
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-0.5 h-0 bg-white rounded-full group-hover:h-6 transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
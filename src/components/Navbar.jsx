"use client"

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = {
  "#about": { name: "About" },
  "#education": { name: "Education" },
  "#projects": { name: "Projects" },
  "#tech-stack": { name: "Tech Stack" },
  "#contact": { name: "Contact" },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-row justify-center relative fade">
          <div className="flex flex-row space-x-[20px] mt-8">
            {Object.entries(navItems).map(([path, { name }]) => (
              <a
                key={path}
                href={path}
                onClick={(e) => handleSmoothScroll(e, path)}
                className="transition-all text-[rgb(179,186,198)] hover:text-white text-[25px] relative py-1 px-2 m-1 cursor-pointer"
              >
                {name}
              </a>
            ))}
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden pt-4 pl-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[rgb(179,186,198)] hover:text-white transition-colors p-2 rounded-lg bg-gray-900/50 relative z-50"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {isOpen && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" onClick={() => setIsOpen(false)}>
              <div className="absolute top-20 left-4 w-64 bg-gray-900 rounded-xl p-4 shadow-xl z-50">

                <div className="flex flex-col gap-3 mt-4">
                  {Object.entries(navItems).map(([path, { name }]) => (
                    <a
                      key={path}
                      href={path}
                      onClick={(e) => handleSmoothScroll(e, path)}
                      className="text-lg text-[rgb(179,186,198)] hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/5"
                    >
                      {name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Navbar;
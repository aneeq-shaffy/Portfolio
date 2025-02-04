"use client"

import Link from "next/link";
import {userRef} from "react"

const navItems = {
  "#about": {
    name: "About",
  },
  "#education": {
    name: "Education",
  },
  "#projects": {
    name: "Projects",
  },
  "#tech-stack": {
    name: "Tech Stack",
  },
  "#contact": {
    name: "Contact",
  },
};


const Navbar = () => {
  const handleSmoothScroll = (e, path) => {
    e.preventDefault();
    const id = path.split("#")[1];
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      // Update URL hash without jumping
      window.history.pushState({}, "", path);
    }
  };

  return (
    <aside className="-ml-[8px] mb-16 tracking-tight ">
      <div className="lg:sticky  lg:top-20 ">
        <nav className="flex flex-row justify-center relative fade md:relative ">
          <div className="flex flex-row space-x-[20px] mt-8"> 
            {Object.entries(navItems).map(([path, { name }]) => (
              <a
                key={path}
                href={path}
                onClick={(e) => handleSmoothScroll(e, path)}
                className="transition-all text-[rgb(179,186,198)] hover:text-white text-[25px]  relative py-1 px-2 m-1 cursor-pointer"
              >
                {name}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </aside>
  );
};
export default Navbar




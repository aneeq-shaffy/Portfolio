"use client"

import Navbar from "../components/Navbar"
import About from "../components/About"
import { useEffect } from "react"

export default function Home() {
  // Handle initial page load with hash
  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const id = hash.substring(1)
      const element = document.getElementById(id)
      if (element) {
        setTimeout(() => {
          const navbarHeight = 80 // Height of navbar
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - navbarHeight

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          })
        }, 100)
      }
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Add padding-top to account for fixed navbar */}
      <div className="flex-1 pt-20 px-4 sm:px-6 md:px-8 lg:px-[200px] xl:px-[300px] 2xl:px-[350px]">
        <section id="about" className="pt-4 mb-10 max-md:mb-4">
          <About />
        </section>

        
      </div>
    </div>
  )
}

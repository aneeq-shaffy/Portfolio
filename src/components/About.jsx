"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { FiGithub, FiExternalLink, FiMapPin, FiCalendar, FiBriefcase } from "react-icons/fi"
import { FaLinkedin, FaPhoneAlt } from "react-icons/fa"
import { SiGmail } from "react-icons/si"
import { TbFileCv } from "react-icons/tb"

const About = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [typedText, setTypedText] = useState("")
  const sectionRef = useRef(null)

  // Swiss precision typewriter effect
  const fullText = "ANEEQ SHAFFY"
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Typewriter effect with golden ratio timing
  useEffect(() => {
    if (isVisible) {
      let currentIndex = 0
      const typeInterval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setTypedText(fullText.slice(0, currentIndex))
          currentIndex++
        } else {
          clearInterval(typeInterval)
        }
      }, 100) // 100ms per character for Swiss precision

      return () => clearInterval(typeInterval)
    }
  }, [isVisible])

  // Mouse tracking for geometric interactions
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="swiss-section relative overflow-hidden"
      style={{
        // Reduced Swiss padding: navbar height (64px) + minimal spacing (32px) = 96px total
        paddingTop: '32px', // Much less padding below navbar
        paddingBottom: '64px',
        minHeight: '90vh', // Reduced from 100vh
      }}
    >
      {/* Swiss Grid Container */}
      <div className="swiss-container">
        {/* Golden Ratio Layout Grid - Perfect φ:1 ratio */}
        <div 
          className="grid items-center gap-16 lg:gap-20"
          style={{
            // Golden ratio layout: φ:1 (1.618:1)
            gridTemplateColumns: '1fr 1.618fr',
            minHeight: '75vh',
            alignItems: 'center',
          }}
        >
          {/* ===== COMPLETELY FIXED SWISS IMAGE SECTION ===== */}
          <div 
            className="relative flex items-center justify-center"
            style={{
              // Clean centering without overlapping elements
              padding: '0 16px',
            }}
          >
            {/* Clean Swiss image container - moved up */}
            <div 
              className="relative"
              style={{
                // Perfect golden ratio circle: 220px, moved up
                width: '220px',
                height: '220px',
                marginTop: '-20px', // Move photo up
              }}
            >
              {/* Profile Image - Clean and centered */}
              <div className="relative group w-full h-full">
                <Image
                  src="/aneeq.png"
                  alt="Aneeq Shaffy - Software Developer"
                  fill
                  className="
                    rounded-full
                    object-cover object-top
                    transition-all duration-300 ease-out
                    grayscale hover:grayscale-0
                    border-3 border-swiss-red
                    group-hover:scale-105
                  "
                  sizes="220px"
                  priority
                />
                
                {/* Swiss geometric accent ring */}
                <div 
                  className="
                    absolute -inset-2
                    border border-gray-300
                    rounded-full
                    transition-all duration-500
                    group-hover:border-swiss-red
                    group-hover:rotate-12
                  "
                />
                
                {/* Swiss precision dot */}
                <div 
                  className="absolute top-0 right-0 w-3 h-3 bg-swiss-red rounded-full"
                  style={{ transform: 'translate(25%, -25%)' }}
                />
              </div>
              
              {/* Swiss typography label - moved higher up */}
              <div 
                className="absolute -top-12 left-1/2 transform -translate-x-1/2 font-swiss-mono text-xs text-gray-400 tracking-wide text-center"
              >
                01/PROFILE
              </div>
              
              {/* REMOVED: No more overlapping location indicator */}
            </div>
          </div>

          {/* ===== PERFECTLY ALIGNED SWISS CONTENT SECTION ===== */}
          <div className="relative space-y-6">
            {/* Swiss systematic header */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="font-swiss-mono text-sm text-gray-400 tracking-wide">
                  02/INTRODUCTION
                </span>
                <div 
                  className="h-px bg-gray-300 flex-1"
                  style={{ maxWidth: '100px' }}
                />
              </div>
              
              {/* Typewriter name - Swiss display typography */}
              <h1 
                className="
                  font-swiss-display 
                  font-black 
                  leading-none 
                  tracking-tighter
                  text-black
                  mb-2
                "
                style={{
                  fontSize: '42px', // Adjusted for better proportion
                  minHeight: '46px',
                }}
              >
                {typedText}
                <span className="animate-pulse text-swiss-red">|</span>
              </h1>
              
              {/* Swiss subtitle with geometric accent */}
              <div className="flex items-center gap-4 mb-6">
                <h2 className="font-swiss-heading text-gray-600 text-lg font-medium tracking-wide">
                  SOFTWARE DEVELOPER
                </h2>
                <div 
                  className="bg-swiss-red"
                  style={{
                    width: '28px', // Proportionally adjusted
                    height: '2px',
                  }}
                />
              </div>
            </div>

            {/* Fixed Swiss data grid - Perfect spacing and alignment */}
            <div 
              className="grid gap-6"
              style={{
                gridTemplateColumns: '1fr 1fr',
                marginBottom: '24px',
                marginTop: '24px',
              }}
            >
              {/* Left column - Personal data */}
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <FiCalendar size={16} className="text-gray-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-swiss-mono text-xs text-gray-400 uppercase tracking-wide mb-1">
                      Age
                    </div>
                    <div className="font-swiss-body text-black text-base font-medium">
                      23 Years
                    </div>
                  </div>
                </div>
                
                {/* FIXED location section - Proper spacing, no overlap */}
                <div className="flex items-start gap-3">
                  <FiMapPin size={16} className="text-gray-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-swiss-mono text-xs text-gray-400 uppercase tracking-wide mb-1">
                      Location
                    </div>
                    <div className="font-swiss-body text-black text-base font-medium">
                      Kalubowila, Colombo
                    </div>
                    <div className="font-swiss-mono text-xs text-gray-500 mt-0.5">
                      Sri Lanka
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right column - Professional data */}
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <FiBriefcase size={16} className="text-gray-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-swiss-mono text-xs text-gray-400 uppercase tracking-wide mb-1">
                      Position
                    </div>
                    <div className="font-swiss-body text-black text-base font-medium">
                      Intern
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <FiExternalLink size={16} className="text-gray-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-swiss-mono text-xs text-gray-400 uppercase tracking-wide mb-1">
                      Company
                    </div>
                    <a 
                      href="https://baylanka.net" 
                      className="font-swiss-body text-swiss-red hover:text-black transition-colors duration-150 text-base font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Baylanka
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Fixed Swiss description - Your original text only */}
            <div className="space-y-4" style={{ marginTop: '32px' }}>              
              <p 
                className="font-swiss-body text-gray-600 leading-relaxed"
                style={{
                  fontSize: '15px',
                  lineHeight: '1.6',
                  maxWidth: '65ch',
                }}
              >
                Full-stack developer specializing in transforming existential dread into 'agile solutions'. 
                Navigating a job market so oversaturated, even my LinkedIn needs a life jacket. Competing with 
                10,000 CS grads—each with a 'passion for coding' and a dark mode dependency—feels like racing 
                for the last functioning WiFi at a tech conference. Let's connect before I pivot to selling essential oils.
              </p>
            </div>

            {/* Swiss action grid - Better proportioned buttons */}
            <div className="space-y-6" style={{ marginTop: '40px' }}>
              {/* Primary CTA buttons - Enhanced styling */}
              <div className="flex gap-3 flex-wrap">
                <a
                  href="/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center gap-2
                    font-swiss-body font-medium
                    px-6 py-3
                    bg-swiss-red text-white
                    border-2 border-swiss-red
                    transition-all duration-150 ease-out
                    hover:bg-black hover:border-black
                    hover:transform hover:translate-y-[-2px]
                    hover:shadow-lg
                  "
                  style={{
                    borderRadius: '2px',
                    fontSize: '14px',
                    letterSpacing: '0.025em',
                  }}
                >
                  <TbFileCv size={16} />
                  DOWNLOAD CV
                </a>
                
                <a
                  href="mailto:aneeqshaffy7@gmail.com"
                  className="
                    inline-flex items-center gap-2
                    font-swiss-body font-medium
                    px-6 py-3
                    bg-transparent text-black
                    border-2 border-black
                    transition-all duration-150 ease-out
                    hover:bg-black hover:text-white
                    hover:transform hover:translate-y-[-2px]
                    hover:shadow-lg
                  "
                  style={{
                    borderRadius: '2px',
                    fontSize: '14px',
                    letterSpacing: '0.025em',
                  }}
                >
                  <SiGmail size={16} />
                  GET IN TOUCH
                </a>
              </div>
              
              {/* Swiss social grid - Clean alignment */}
              <div className="pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <span className="font-swiss-mono text-xs text-gray-400 uppercase tracking-wide">
                    Connect
                  </span>
                  
                  <div className="flex items-center gap-5">
                    <a
                      href="https://www.linkedin.com/in/aneeq-shaffy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        text-gray-400 hover:text-swiss-red
                        transition-all duration-150 ease-out
                        transform hover:scale-110
                      "
                      aria-label="LinkedIn Profile"
                    >
                      <FaLinkedin size={20} />
                    </a>
                    
                    <a
                      href="https://github.com/aneeq-shaffy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        text-gray-400 hover:text-swiss-red
                        transition-all duration-150 ease-out
                        transform hover:scale-110
                      "
                      aria-label="GitHub Profile"
                    >
                      <FiGithub size={20} />
                    </a>
                    
                    <a
                      href="tel:+94762844725"
                      className="
                        text-gray-400 hover:text-swiss-red
                        transition-all duration-150 ease-out
                        transform hover:scale-110
                      "
                      aria-label="Call Aneeq"
                    >
                      <FaPhoneAlt size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Swiss geometric background elements - Subtle and minimal */}
      <div 
        className="absolute top-1/3 right-12 w-px h-16 bg-gray-200 opacity-30"
        style={{ transform: 'rotate(15deg)' }}
      />
      
      <div 
        className="absolute bottom-1/3 left-12 w-12 h-px bg-gray-200 opacity-30"
      />
      
      {/* Swiss grid reference - Development helper */}
      <div className="absolute top-6 right-6 font-swiss-mono text-xs text-gray-300 opacity-50">
        1200×800
      </div>
    </section>
  )
}

export default About
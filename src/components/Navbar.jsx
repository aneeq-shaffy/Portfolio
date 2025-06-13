"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = {
  "/": { name: "About", index: "01" },
  "/experience": { name: "Experience", index: "02" },
  "/projects": { name: "Projects", index: "03" },
  "/education": { name: "Education", index: "04" },
  "/skills": { name: "Skills", index: "05" },
  "/contact": { name: "Contact", index: "06" },
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // Swiss precision scroll detection (mathematical threshold)
  useEffect(() => {
    const handleScroll = () => {
      // Swiss grid: 8px base unit × 8 = 64px threshold
      const swissThreshold = 64
      setScrolled(window.scrollY > swissThreshold)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on route change (Swiss efficiency)
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <>
      {/* ===== SWISS DESKTOP NAVIGATION ===== */}
      <nav
        className={`
          hidden md:block
          fixed top-0 left-0 right-0 z-[100]
          transition-all duration-300 ease-out
          ${scrolled 
            ? 'bg-white/95 backdrop-blur-sm shadow-swiss-sm border-b border-black/10' 
            : 'bg-white/80'
          }
        `}
        style={{
          // Swiss precision: 64px height (8px grid × 8)
          height: '64px',
        }}
      >
        {/* Swiss Grid Container */}
        <div className="swiss-container h-full">
          <div 
            className="h-full grid items-center"
            style={{
              // Swiss asymmetrical layout: Logo 1/3, Nav 2/3
              gridTemplateColumns: '1fr 2fr',
              gap: '48px', // 8px × 6
            }}
          >
            {/* ===== SWISS LOGO (Bauhaus Typography) ===== */}
            <Link 
              href="/" 
              className="
                swiss-focus
                font-swiss-heading
                text-black
                text-2xl
                font-black
                leading-none
                tracking-tighter
                transition-colors duration-150 ease-out
                hover:text-swiss-red
              "
              style={{
                // Golden ratio typography: 24px
                fontSize: '24px',
                letterSpacing: '-0.025em',
              }}
            >
              {/* Swiss International Style - clean, geometric */}
              ANEEQ
              <span className="text-swiss-red font-normal">/</span>
              SHAFFY
            </Link>

            {/* ===== SWISS NAVIGATION (Functional Grid) ===== */}
            <div className="justify-self-end">
              <div 
                className="flex items-center"
                style={{
                  // Mathematical spacing: 32px (8px × 4)
                  gap: '32px',
                }}
              >
                {Object.entries(navItems).map(([path, { name }], index) => {
                  const isActive = pathname === path
                  
                  return (
                    <Link
                      key={path}
                      href={path}
                      className={`
                        relative
                        swiss-focus
                        font-swiss-body
                        font-medium
                        text-base
                        leading-none
                        tracking-normal
                        transition-colors duration-150 ease-out
                        ${isActive 
                          ? 'text-swiss-red' 
                          : 'text-black hover:text-swiss-red'
                        }
                      `}
                      style={{
                        // Swiss precision: 16px base font
                        fontSize: '16px',
                        padding: '8px 0', // Minimal, functional padding
                      }}
                    >
                      {/* Swiss caps treatment */}
                      <span className="swiss-caps">
                        {name.toUpperCase()}
                      </span>
                      
                      {/* Swiss active indicator - minimal red line */}
                      {isActive && (
                        <div 
                          className="
                            absolute -bottom-1 left-0 right-0
                            h-0.5 bg-swiss-red
                          "
                          style={{
                            // Mathematical precision: 2px line
                            height: '2px',
                          }}
                        />
                      )}
                      
                      {/* Swiss hover effect - minimal underline */}
                      <div 
                        className="
                          absolute -bottom-1 left-0 right-0
                          h-0.5 bg-swiss-red
                          transform scale-x-0 hover:scale-x-100
                          transition-transform duration-150 ease-out
                          origin-left
                        "
                        style={{
                          height: '1px',
                        }}
                      />
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Swiss border - functional, minimal */}
        <div 
          className={`
            absolute bottom-0 left-0 right-0
            border-b border-black/10
            transition-opacity duration-300
            ${scrolled ? 'opacity-100' : 'opacity-0'}
          `}
        />
      </nav>

      {/* ===== SWISS MOBILE NAVIGATION ===== */}
      <div className="md:hidden">
        {/* Swiss Mobile Header */}
        <div 
          className={`
            fixed top-0 left-0 right-0 z-50
            transition-all duration-300 ease-out
            ${scrolled 
              ? 'bg-white/95 backdrop-blur-sm shadow-swiss-sm' 
              : 'bg-white/90'
            }
          `}
          style={{
            // Swiss mobile height: 56px (8px × 7)
            height: '56px',
            padding: '0 16px', // 8px × 2
          }}
        >
          <div 
            className="h-full flex items-center justify-between"
          >
            {/* Swiss Mobile Logo */}
            <Link 
              href="/" 
              className="
                swiss-focus
                font-swiss-heading
                text-black
                font-black
                leading-none
                tracking-tighter
                transition-colors duration-150
                hover:text-swiss-red
              "
              style={{
                fontSize: '18px', // Scaled for mobile
              }}
            >
              A<span className="text-swiss-red">/</span>S
            </Link>

            {/* Swiss Hamburger - Bauhaus geometric */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`
                swiss-focus
                flex items-center justify-center
                transition-all duration-150 ease-out
                ${isOpen 
                  ? 'text-white bg-swiss-red' 
                  : 'text-black bg-transparent hover:bg-gray-100'
                }
              `}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              style={{
                // Swiss square: 40px × 40px (8px × 5)
                width: '40px',
                height: '40px',
                borderRadius: '2px', // Minimal Swiss radius
                border: '1px solid',
                borderColor: isOpen ? 'transparent' : 'rgba(0,0,0,0.1)',
              }}
            >
              {/* Swiss geometric menu icons */}
              <div className="relative w-4 h-4">
                {/* Menu lines - Swiss grid precision */}
                <span 
                  className={`
                    absolute left-0 block w-4 h-0.5 bg-current
                    transition-all duration-200
                    ${isOpen 
                      ? 'top-1.5 rotate-45' 
                      : 'top-0'
                    }
                  `}
                />
                <span 
                  className={`
                    absolute left-0 top-1.5 block w-4 h-0.5 bg-current
                    transition-opacity duration-200
                    ${isOpen ? 'opacity-0' : 'opacity-100'}
                  `}
                />
                <span 
                  className={`
                    absolute left-0 block w-4 h-0.5 bg-current
                    transition-all duration-200
                    ${isOpen 
                      ? 'top-1.5 -rotate-45' 
                      : 'top-3'
                    }
                  `}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Swiss Mobile Menu Overlay */}
        <div 
          className={`
            fixed inset-0 z-40
            transition-all duration-300 ease-out
            ${isOpen 
              ? 'opacity-100 visible' 
              : 'opacity-0 invisible pointer-events-none'
            }
          `}
        >
          {/* Swiss backdrop - pure white */}
          <div 
            className="absolute inset-0 bg-white"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Swiss Menu Grid */}
          <div 
            className="
              relative h-full
              flex flex-col justify-center
              swiss-container
            "
            style={{
              // Swiss vertical rhythm
              paddingTop: '64px',
              paddingBottom: '64px',
            }}
          >
            {/* Swiss menu items - Bauhaus typography */}
            <div 
              className="space-y-0"
              style={{
                // Mathematical spacing: 24px between items
                gap: '24px',
              }}
            >
              {Object.entries(navItems).map(([path, { name }], index) => {
                const isActive = pathname === path
                
                return (
                  <div key={path} className="border-b border-gray-200 last:border-b-0">
                    <Link
                      href={path}
                      onClick={() => setIsOpen(false)}
                      className={`
                        block
                        swiss-focus
                        font-swiss-heading
                        font-bold
                        leading-tight
                        tracking-tight
                        transition-colors duration-150 ease-out
                        ${isActive 
                          ? 'text-swiss-red' 
                          : 'text-black hover:text-swiss-red'
                        }
                      `}
                      style={{
                        // Swiss mobile typography: 32px (8px × 4)
                        fontSize: '32px',
                        padding: '16px 0', // Consistent grid spacing
                        // Staggered animation delay
                        transitionDelay: `${index * 50}ms`,
                      }}
                    >
                      {/* Swiss numbering system */}
                      <div className="flex items-baseline gap-4">
                        <span 
                          className="
                            font-swiss-mono
                            text-sm
                            text-gray-400
                            font-normal
                          "
                          style={{
                            fontSize: '12px',
                            minWidth: '24px',
                          }}
                        >
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="swiss-caps">
                          {name.toUpperCase()}
                        </span>
                      </div>
                      
                      {/* Swiss active indicator */}
                      {isActive && (
                        <div 
                          className="
                            mt-2 w-8 h-0.5 bg-swiss-red
                          "
                          style={{
                            marginLeft: '28px', // Align with text
                          }}
                        />
                      )}
                    </Link>
                  </div>
                )
              })}
            </div>
            
            {/* Swiss footer - minimal, functional */}
            <div 
              className="
                mt-16
                pt-8
                border-t border-gray-200
                font-swiss-mono
                text-xs
                text-gray-400
                tracking-wide
              "
            >
              <div className="flex justify-between items-center">
                <span>NAVIGATION</span>
                <span>{new Date().getFullYear()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
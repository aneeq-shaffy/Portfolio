"use client"

import { useState, useEffect, useRef } from "react"
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiExternalLink, FiCopy, FiCheck } from "react-icons/fi"
import Navbar from "../../components/Navbar"

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)
  const sectionRef = useRef(null)

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

  const copyToClipboard = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text)
      if (type === 'email') {
        setCopiedEmail(true)
        setTimeout(() => setCopiedEmail(false), 2000)
      } else {
        setCopiedPhone(true)
        setTimeout(() => setCopiedPhone(false), 2000)
      }
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  return (
    <>
      <Navbar />
      <section 
        ref={sectionRef}
        className="swiss-section relative overflow-hidden"
        style={{
          // Swiss padding: navbar height + minimal spacing
          paddingTop: '32px',
          paddingBottom: '64px',
          minHeight: '90vh',
        }}
      >
        <div className="swiss-container">
          {/* Swiss Header Section */}
          <div 
            className="mb-16"
            style={{
              // Rule of thirds: header in top third
              paddingBottom: '48px', // Golden ratio spacing
            }}
          >
            {/* Swiss systematic numbering */}
            <div className="flex items-center gap-4 mb-6">
              <span className="font-swiss-mono text-sm text-gray-400 tracking-wide">
                06/CONTACT
              </span>
              <div 
                className="h-px bg-gray-300 flex-1"
                style={{ maxWidth: '120px' }}
              />
            </div>
            
            {/* Main heading - Swiss typography hierarchy */}
            <h1 
              className="
                font-swiss-display 
                font-black 
                leading-none 
                tracking-tighter
                text-black
                mb-4
              "
              style={{
                fontSize: '48px', // Golden ratio: 30px × φ
                minHeight: '52px',
              }}
            >
              GET IN TOUCH
            </h1>
            
            {/* Swiss subtitle */}
            <div className="flex items-center gap-4">
              <p className="font-swiss-body text-gray-600" style={{ fontSize: '16px' }}>
                Let's connect and build something amazing together
              </p>
              <div 
                className="bg-swiss-red"
                style={{
                  width: '30px', // Golden ratio derived
                  height: '2px',
                }}
              />
            </div>
          </div>

          {/* Swiss Contact Grid - Golden Ratio Layout */}
          <div 
            className="grid gap-16"
            style={{
              // Golden ratio: contact info (1) : message area (φ)
              gridTemplateColumns: '1fr 1.618fr',
              minHeight: '400px',
              alignItems: 'start',
            }}
          >
            
            {/* Contact Information - Swiss systematic design */}
            <div className="space-y-8">
              
              {/* Primary Contact Methods */}
              <div>
                <h2 
                  className="
                    font-swiss-heading 
                    font-bold 
                    text-black 
                    mb-6
                    tracking-tight
                  "
                  style={{
                    fontSize: '24px', // Clear hierarchy: 48px ÷ 2
                    lineHeight: '1.2',
                    letterSpacing: '-0.025em',
                  }}
                >
                  CONTACT METHODS
                </h2>

                <div className="space-y-6">
                  {/* Email Contact */}
                  <div className="group">
                    <div className="flex items-center gap-3 mb-2">
                      <FiMail size={16} className="text-gray-400" />
                      <span className="font-swiss-mono text-xs text-gray-400 uppercase tracking-wide">
                        Email
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <a
                        href="mailto:aneeqshaffy7@gmail.com"
                        className="
                          font-swiss-mono 
                          text-black 
                          hover:text-swiss-red
                          transition-colors duration-150
                          break-all
                        "
                        style={{
                          fontSize: '15px',
                          lineHeight: '1.4',
                        }}
                      >
                        aneeqshaffy7@gmail.com
                      </a>
                      
                      <button
                        onClick={() => copyToClipboard('aneeqshaffy7@gmail.com', 'email')}
                        className="
                          p-1 
                          text-gray-400 hover:text-swiss-red
                          transition-colors duration-150
                        "
                        aria-label="Copy email address"
                      >
                        {copiedEmail ? <FiCheck size={14} /> : <FiCopy size={14} />}
                      </button>
                    </div>
                  </div>

                  {/* Phone Contact */}
                  <div className="group">
                    <div className="flex items-center gap-3 mb-2">
                      <FiPhone size={16} className="text-gray-400" />
                      <span className="font-swiss-mono text-xs text-gray-400 uppercase tracking-wide">
                        Phone
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <a
                        href="tel:+94762844725"
                        className="
                          font-swiss-mono 
                          text-black 
                          hover:text-swiss-red
                          transition-colors duration-150
                        "
                        style={{
                          fontSize: '15px',
                          lineHeight: '1.4',
                        }}
                      >
                        +94 76 284 4725
                      </a>
                      
                      <button
                        onClick={() => copyToClipboard('+94762844725', 'phone')}
                        className="
                          p-1 
                          text-gray-400 hover:text-swiss-red
                          transition-colors duration-150
                        "
                        aria-label="Copy phone number"
                      >
                        {copiedPhone ? <FiCheck size={14} /> : <FiCopy size={14} />}
                      </button>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="group">
                    <div className="flex items-center gap-3 mb-2">
                      <FiMapPin size={16} className="text-gray-400" />
                      <span className="font-swiss-mono text-xs text-gray-400 uppercase tracking-wide">
                        Location
                      </span>
                    </div>
                    
                    <p 
                      className="font-swiss-body text-gray-600"
                      style={{
                        fontSize: '15px',
                        lineHeight: '1.4',
                      }}
                    >
                      Kalubowila, Colombo
                      <span className="block text-gray-500 text-sm">Sri Lanka</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links - Swiss minimal design */}
              <div>
                <h3 
                  className="
                    font-swiss-mono 
                    text-gray-400 
                    uppercase 
                    tracking-wide 
                    mb-4
                  "
                  style={{
                    fontSize: '12px',
                    letterSpacing: '0.1em',
                  }}
                >
                  Connect Online
                </h3>

                <div className="space-y-3">
                  <a
                    href="https://www.linkedin.com/in/aneeq-shaffy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center gap-3
                      font-swiss-body
                      text-gray-600 hover:text-swiss-red
                      transition-colors duration-150
                      group
                    "
                    style={{ fontSize: '14px' }}
                  >
                    <FiLinkedin size={16} />
                    <span>LinkedIn Profile</span>
                    <FiExternalLink 
                      size={12} 
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-150" 
                    />
                  </a>

                  <a
                    href="https://github.com/aneeq-shaffy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center gap-3
                      font-swiss-body
                      text-gray-600 hover:text-swiss-red
                      transition-colors duration-150
                      group
                    "
                    style={{ fontSize: '14px' }}
                  >
                    <FiGithub size={16} />
                    <span>GitHub Profile</span>
                    <FiExternalLink 
                      size={12} 
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-150" 
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* Swiss Message Area - Rule of thirds positioning */}
            <div 
              className="relative"
              style={{
                // Rule of thirds: content positioned at intersection
                paddingLeft: '32px',
              }}
            >
              {/* Swiss geometric accent */}
              <div 
                className="absolute left-0 top-0 w-px h-full bg-gray-200"
                style={{ opacity: '0.5' }}
              />
              
              <div 
                className="absolute left-0 top-1/3 w-4 h-px bg-swiss-red"
                style={{ transform: 'translateX(-2px)' }}
              />

              {/* Message content */}
              <div className="space-y-8">
                <div>
                  <h2 
                    className="
                      font-swiss-heading 
                      font-bold 
                      text-black 
                      mb-4
                      tracking-tight
                    "
                    style={{
                      fontSize: '24px',
                      lineHeight: '1.2',
                      letterSpacing: '-0.025em',
                    }}
                  >
                    LET'S COLLABORATE
                  </h2>

                  <div className="space-y-6">
                    <p 
                      className="font-swiss-body text-gray-700"
                      style={{
                        fontSize: '16px',
                        lineHeight: '1.6',
                        maxWidth: '60ch', // Optimal reading measure
                      }}
                    >
                      I'm always interested in new opportunities, whether it's a 
                      full-time position, freelance project, or just a conversation 
                      about technology and development.
                    </p>

                    <p 
                      className="font-swiss-body text-gray-600"
                      style={{
                        fontSize: '15px',
                        lineHeight: '1.6',
                        maxWidth: '60ch',
                      }}
                    >
                      Currently open to frontend, backend, and full-stack development 
                      roles. I bring experience with React, Next.js, Node.js, and 
                      modern development practices.
                    </p>

                    <p 
                      className="font-swiss-body text-gray-500"
                      style={{
                        fontSize: '14px',
                        lineHeight: '1.6',
                        maxWidth: '60ch',
                      }}
                    >
                      Response time: Usually within 24 hours. For urgent matters, 
                      feel free to call directly.
                    </p>
                  </div>
                </div>

                {/* Swiss action buttons */}
                <div className="flex gap-4 flex-wrap">
                  <a
                    href="mailto:aneeqshaffy7@gmail.com?subject=Let's%20Connect&body=Hi%20Aneeq,%0D%0A%0D%0AI'd%20like%20to%20discuss..."
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
                    <FiMail size={16} />
                    EMAIL ME
                  </a>
                  
                  <a
                    href="/cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
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
                    <FiExternalLink size={16} />
                    VIEW CV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Swiss geometric background elements */}
        <div 
          className="absolute top-1/4 right-16 w-px h-32 bg-gray-200 opacity-20"
          style={{ transform: 'rotate(15deg)' }}
        />
        
        <div 
          className="absolute bottom-1/4 left-16 w-24 h-px bg-gray-200 opacity-20"
        />
        
        {/* Swiss grid reference */}
        <div className="absolute top-6 right-6 font-swiss-mono text-xs text-gray-300 opacity-40">
          CONTACT/GRID
        </div>
      </section>
    </>
  )
}

export default Contact
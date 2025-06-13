"use client"

import { useState, useEffect, useRef } from "react"
import { FaExternalLinkAlt } from "react-icons/fa"
import { FiCalendar, FiMapPin, FiBook, FiAward } from "react-icons/fi"
import Navbar from "../../components/Navbar"

const Education = () => {
  const [isVisible, setIsVisible] = useState(false)
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
                04/EDUCATION
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
              EDUCATION
            </h1>
            
            {/* Swiss subtitle */}
            <div className="flex items-center gap-4">
              <p className="font-swiss-body text-gray-600" style={{ fontSize: '16px' }}>
                Academic Background & Qualifications
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

          {/* Swiss Education Timeline */}
          <div className="space-y-12">
            
            {/* Education Item 1 - Swiss systematic layout */}
            <div 
              className="relative"
              style={{
                // Rule of thirds: content positioning
                paddingLeft: '24px',
              }}
            >
              {/* Swiss timeline indicator */}
              <div 
                className="absolute left-0 top-0 w-2 h-2 bg-swiss-red rounded-full"
                style={{ transform: 'translate(-50%, 8px)' }}
              />
              
              {/* Golden ratio grid layout */}
              <div 
                className="grid gap-8"
                style={{
                  gridTemplateColumns: '1fr 2.618fr', // Golden ratio: 1:φ+1
                }}
              >
                {/* Date column - Swiss precision */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <FiCalendar size={14} className="text-gray-400" />
                    <span className="font-swiss-mono text-xs text-gray-400 uppercase tracking-wide">
                      Duration
                    </span>
                  </div>
                  <p 
                    className="font-swiss-mono text-black"
                    style={{
                      fontSize: '14px',
                      lineHeight: '1.5',
                      maxWidth: '16ch', // Optimal for dates
                    }}
                  >
                    Feb 2021–2026
                    <span className="block text-gray-500 text-xs mt-1">
                      (semester break 2024-2025)
                    </span>
                  </p>
                </div>

                {/* Content column - Swiss hierarchy */}
                <div className="space-y-6">
                  {/* Institution header */}
                  <div>
                    <h2 
                      className="font-swiss-heading font-bold text-black mb-2"
                      style={{
                        fontSize: '24px', // 48px ÷ 2 = 24px (clear hierarchy)
                        lineHeight: '1.2',
                        letterSpacing: '-0.025em',
                      }}
                    >
                      BSc (Hons) in Information Technology
                    </h2>
                    
                    <div className="flex items-start gap-2 mb-4">
                      <FiMapPin size={14} className="text-gray-400 mt-0.5" />
                      <p className="font-swiss-body text-gray-600" style={{ fontSize: '14px' }}>
                        Sri Lanka Institute of Information Technology, Malabe
                      </p>
                    </div>
                  </div>

                  {/* Swiss structured content */}
                  <div className="space-y-4">
                    {/* Achievement 1 */}
                    <div className="flex items-start gap-3">
                      <div 
                        className="w-1 h-1 bg-swiss-red rounded-full mt-2 flex-shrink-0"
                      />
                      <p 
                        className="font-swiss-body text-gray-700"
                        style={{
                          fontSize: '15px',
                          lineHeight: '1.6',
                          maxWidth: '65ch',
                        }}
                      >
                        Volunteered as Batch Representative, acting as a liaison between 150+ students 
                        and faculty to resolve academic issues.
                        <a
                          href="/batch-rep-cert.png"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            inline-flex items-center gap-1 ml-2
                            text-swiss-red hover:text-black
                            transition-colors duration-150
                            font-medium
                          "
                          title="Batch Representative Certificate"
                          aria-label="View Certificate"
                        >
                          <FaExternalLinkAlt size={12} />
                          <span style={{ fontSize: '13px' }}>VIEW CERT</span>
                        </a>
                      </p>
                    </div>

                    {/* Achievement 2 */}
                    <div className="flex items-start gap-3">
                      <div 
                        className="w-1 h-1 bg-swiss-red rounded-full mt-2 flex-shrink-0"
                      />
                      <p 
                        className="font-swiss-body text-gray-700"
                        style={{
                          fontSize: '15px',
                          lineHeight: '1.6',
                          maxWidth: '65ch',
                        }}
                      >
                        Relevant Coursework: Object-Oriented Programming, Database Management Systems, 
                        Data Structures and Algorithms, Programming Applications and Frameworks, 
                        Probability and Statistics.
                      </p>
                    </div>

                    {/* Achievement 3 */}
                    <div className="flex items-start gap-3">
                      <div 
                        className="w-1 h-1 bg-swiss-red rounded-full mt-2 flex-shrink-0"
                      />
                      <p 
                        className="font-swiss-body text-gray-700"
                        style={{
                          fontSize: '15px',
                          lineHeight: '1.6',
                          maxWidth: '65ch',
                        }}
                      >
                        Led 5 semester projects, delegating tasks and fostering collaboration 
                        to achieve 100% on-time delivery.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Education Item 2 - Swiss systematic layout */}
            <div 
              className="relative"
              style={{
                // Rule of thirds: content positioning
                paddingLeft: '24px',
              }}
            >
              {/* Swiss timeline indicator */}
              <div 
                className="absolute left-0 top-0 w-2 h-2 bg-swiss-red rounded-full"
                style={{ transform: 'translate(-50%, 8px)' }}
              />
              
              {/* Golden ratio grid layout */}
              <div 
                className="grid gap-8"
                style={{
                  gridTemplateColumns: '1fr 2.618fr', // Golden ratio: 1:φ+1
                }}
              >
                {/* Date column - Swiss precision */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <FiCalendar size={14} className="text-gray-400" />
                    <span className="font-swiss-mono text-xs text-gray-400 uppercase tracking-wide">
                      Duration
                    </span>
                  </div>
                  <p 
                    className="font-swiss-mono text-black"
                    style={{
                      fontSize: '14px',
                      lineHeight: '1.5',
                      maxWidth: '16ch',
                    }}
                  >
                    Sep 2017–Mar 2019
                  </p>
                </div>

                {/* Content column - Swiss hierarchy */}
                <div className="space-y-6">
                  {/* Institution header */}
                  <div>
                    <h2 
                      className="font-swiss-heading font-bold text-black mb-2"
                      style={{
                        fontSize: '24px', // Consistent hierarchy
                        lineHeight: '1.2',
                        letterSpacing: '-0.025em',
                      }}
                    >
                      Cambridge International A Level, Commerce
                    </h2>
                    
                    <div className="flex items-start gap-2 mb-4">
                      <FiMapPin size={14} className="text-gray-400 mt-0.5" />
                      <div>
                        <p className="font-swiss-body text-gray-600" style={{ fontSize: '14px' }}>
                          Lyceum International School, Nugegoda
                        </p>
                        <p 
                          className="font-swiss-mono text-gray-500 mt-1"
                          style={{ fontSize: '12px' }}
                        >
                          Mathematics, Accounting, Economics, Business Studies
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Swiss timeline line */}
          <div 
            className="absolute left-6 top-32 bottom-16 w-px bg-gray-200"
            style={{
              // Rule of thirds: positioned at left intersection
              left: '24px',
            }}
          />
        </div>

        {/* Swiss geometric background elements */}
        <div 
          className="absolute top-1/4 right-12 w-px h-20 bg-gray-200 opacity-20"
          style={{ transform: 'rotate(15deg)' }}
        />
        
        <div 
          className="absolute bottom-1/4 left-12 w-16 h-px bg-gray-200 opacity-20"
        />
        
        {/* Swiss grid reference */}
        <div className="absolute top-6 right-6 font-swiss-mono text-xs text-gray-300 opacity-40">
          EDU/GRID
        </div>
      </section>
    </>
  )
}

export default Education
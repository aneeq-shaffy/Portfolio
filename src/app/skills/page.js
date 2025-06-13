"use client"

import { useState, useEffect, useRef } from "react"
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaAngular } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io5"
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri"
import { DiMongodb } from "react-icons/di"
import { SiPostman, SiTypescript, SiDocker, SiDrizzle, SiSequelize, SiMysql, SiIonic, SiAndroidstudio } from "react-icons/si"
import { BiLogoPostgresql } from "react-icons/bi"
import Navbar from "../../components/Navbar"

const SwissSkillItem = ({ Icon, label, category, index }) => {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, index * 100) // Staggered animation using Fibonacci-like sequence
    
    return () => clearTimeout(timer)
  }, [index])

  return (
    <div 
      className={`
        group cursor-pointer
        transition-all duration-300 ease-out
        transform hover:scale-105
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
      `}
    >
      {/* Swiss skill card */}
      <div 
        className="
          bg-white
          border border-gray-200
          transition-all duration-150 ease-out
          group-hover:border-swiss-red
          group-hover:shadow-lg
          relative
          overflow-hidden
        "
        style={{
          borderRadius: '2px', // Minimal Swiss radius
          padding: '20px', // Golden ratio: 32px ÷ φ ≈ 20px
          minHeight: '80px', // Square-ish proportions
        }}
      >
        {/* Swiss geometric accent */}
        <div 
          className="
            absolute top-0 left-0 w-full h-0.5 
            bg-swiss-red 
            transform scale-x-0 group-hover:scale-x-100
            transition-transform duration-200 ease-out
            origin-left
          "
        />
        
        {/* Icon container */}
        <div className="flex flex-col items-center space-y-3">
          <Icon 
            className="
              text-gray-600
              group-hover:text-swiss-red
              transition-colors duration-150 ease-out
            "
            style={{
              width: '32px', // Golden ratio: 20px × φ ≈ 32px
              height: '32px',
            }}
            aria-label={label}
          />
          
          {/* Swiss typography */}
          <span 
            className="
              font-swiss-mono
              text-center
              text-gray-700
              group-hover:text-black
              transition-colors duration-150
              uppercase
              tracking-wide
            "
            style={{
              fontSize: '11px', // Small, precise labeling
              lineHeight: '1.2',
              letterSpacing: '0.05em',
            }}
          >
            {label}
          </span>
        </div>
        
        {/* Swiss category indicator */}
        <div 
          className="
            absolute bottom-1 right-1
            font-swiss-mono
            text-gray-400
            opacity-0 group-hover:opacity-100
            transition-opacity duration-150
          "
          style={{
            fontSize: '8px',
            letterSpacing: '0.1em',
          }}
        >
          {category.slice(0, 2).toUpperCase()}
        </div>
      </div>
    </div>
  )
}

const SwissSkillCategory = ({ title, skills, categoryCode }) => (
  <div 
    className="mb-12"
    style={{
      // Golden ratio spacing between categories
      marginBottom: '48px',
    }}
  >
    {/* Swiss category header */}
    <div className="mb-8">
      <div className="flex items-center gap-4 mb-4">
        <span className="font-swiss-mono text-sm text-gray-400 tracking-wide">
          {categoryCode}
        </span>
        <div 
          className="h-px bg-gray-300 flex-1"
          style={{ maxWidth: '100px' }}
        />
      </div>
      
      <h3 
        className="
          font-swiss-heading 
          font-bold 
          text-black
          tracking-tight
        "
        style={{
          fontSize: '24px', // Clear hierarchy: 48px ÷ 2 = 24px
          lineHeight: '1.2',
          letterSpacing: '-0.025em',
        }}
      >
        {title.toUpperCase()}
      </h3>
    </div>

    {/* Swiss skills grid - Rule of thirds layout */}
    <div 
      className="grid gap-4"
      style={{
        // Golden ratio grid: responsive columns
        gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
        gap: '16px', // 8px × 2 for Swiss grid
        maxWidth: '100%',
      }}
    >
      {skills.map((skill, index) => (
        <SwissSkillItem 
          key={skill.label} 
          Icon={skill.Icon} 
          label={skill.label}
          category={title}
          index={index}
        />
      ))}
    </div>
  </div>
)

const Skills = () => {
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

  // Enhanced skill categories with additional technologies
  const frontendSkills = [
    { Icon: FaHtml5, label: "HTML5" },
    { Icon: FaCss3Alt, label: "CSS3" },
    { Icon: IoLogoJavascript, label: "JavaScript" },
    { Icon: SiTypescript, label: "TypeScript" },
    { Icon: FaReact, label: "React" },
    { Icon: RiNextjsFill, label: "Next.js" },
    { Icon: RiTailwindCssFill, label: "Tailwind CSS" },
    { Icon: FaAngular, label: "Angular" },
    { Icon: SiIonic, label: "Ionic" },
  ]

  const backendSkills = [
    { Icon: FaNodeJs, label: "Node.js" },
    { Icon: DiMongodb, label: "MongoDB" },
    { Icon: BiLogoPostgresql, label: "PostgreSQL" },
    { Icon: SiMysql, label: "MySQL" },
    { Icon: SiDrizzle, label: "Drizzle ORM" },
    { Icon: SiSequelize, label: "Sequelize" },
  ]

  const toolsSkills = [
    { Icon: SiDocker, label: "Docker" },
    { Icon: FaGitAlt, label: "Git" },
    { Icon: SiPostman, label: "Postman" },
    { Icon: SiAndroidstudio, label: "Android Studio" },
  ]

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
                05/SKILLS
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
              TECHNICAL SKILLS
            </h1>
            
            {/* Swiss subtitle */}
            <div className="flex items-center gap-4 mb-6">
              <p className="font-swiss-body text-gray-600" style={{ fontSize: '16px' }}>
                Technologies I've worked with and pretend to understand
              </p>
              <div 
                className="bg-swiss-red"
                style={{
                  width: '30px', // Golden ratio derived
                  height: '2px',
                }}
              />
            </div>

            {/* Swiss skill summary statistics */}
            <div 
              className="grid gap-6 mt-8"
              style={{
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                maxWidth: '600px', // Golden ratio: 960px ÷ φ ≈ 600px
              }}
            >
              <div className="text-center">
                <div 
                  className="font-swiss-mono font-bold text-swiss-red"
                  style={{ fontSize: '20px' }}
                >
                  {frontendSkills.length}
                </div>
                <div 
                  className="font-swiss-mono text-gray-500 uppercase tracking-wide"
                  style={{ fontSize: '11px' }}
                >
                  Frontend
                </div>
              </div>
              
              <div className="text-center">
                <div 
                  className="font-swiss-mono font-bold text-swiss-red"
                  style={{ fontSize: '20px' }}
                >
                  {backendSkills.length}
                </div>
                <div 
                  className="font-swiss-mono text-gray-500 uppercase tracking-wide"
                  style={{ fontSize: '11px' }}
                >
                  Backend
                </div>
              </div>
              
              <div className="text-center">
                <div 
                  className="font-swiss-mono font-bold text-swiss-red"
                  style={{ fontSize: '20px' }}
                >
                  {toolsSkills.length}
                </div>
                <div 
                  className="font-swiss-mono text-gray-500 uppercase tracking-wide"
                  style={{ fontSize: '11px' }}
                >
                  Tools
                </div>
              </div>
            </div>
          </div>

          {/* Swiss Skills Categories */}
          <div className="space-y-12">
            <SwissSkillCategory 
              title="Frontend Development" 
              skills={frontendSkills} 
              categoryCode="01/FRONTEND"
            />
            
            <SwissSkillCategory 
              title="Backend Development" 
              skills={backendSkills} 
              categoryCode="02/BACKEND"
            />
            
            <SwissSkillCategory 
              title="Tools & DevOps" 
              skills={toolsSkills} 
              categoryCode="03/TOOLS"
            />
          </div>
        </div>

        {/* Swiss geometric background elements */}
        <div 
          className="absolute top-1/4 right-12 w-px h-24 bg-gray-200 opacity-20"
          style={{ transform: 'rotate(15deg)' }}
        />
        
        <div 
          className="absolute bottom-1/4 left-12 w-20 h-px bg-gray-200 opacity-20"
        />
        
        {/* Swiss grid reference */}
        <div className="absolute top-6 right-6 font-swiss-mono text-xs text-gray-300 opacity-40">
          SKILLS/GRID
        </div>
      </section>
    </>
  )
}

export default Skills
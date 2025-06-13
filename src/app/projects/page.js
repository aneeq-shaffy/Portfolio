"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { FiGithub, FiExternalLink, FiCode, FiDatabase, FiLayers } from "react-icons/fi"
import Navbar from "../../components/Navbar"

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredProject, setHoveredProject] = useState(null)
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

  const projects = [
    {
      id: 1,
      title: "ITPM-Lingo",
      subtitle: "English-Sinhala Translation Platform",
      image: "/project2.png",
      github: "https://github.com/gitPirate12/itpm-lingo-2.0",
      demo: "#",
      stack: ["Next.js", "MongoDB", "OAuth 2.0", "RapidAPI"],
      category: "Full-Stack",
      description: "Developed an English-Sinhala translation web app with secure user authentication using OAuth 2.0 via NextAuth.js and the MongoDB adapter.",
      achievements: [
        "Designed RESTful APIs with CRUD operations, tested them using Postman, and integrated three third-party free-tier APIs from RapidAPI",
        "Resolved database schema challenges by restructuring the MongoDB architecture to handle UUID/ObjectID compatibility",
        "Led the team, gaining valuable experience in leadership and managing diverse personalities",
        "Handled all presentations and related tasks, strengthening communication and organizational skills"
      ],
      challenges: "Found Google Cloud Console quite challenging, as it was not user-friendly as I had to adjust the redirect URLs twice during development and deployment"
    },
    {
      id: 2,
      title: "FitFusion",
      subtitle: "Fitness Social Media Platform",
      image: "/project1.png",
      github: "https://github.com/gitPirate12/FitFusion",
      demo: "#",
      stack: ["Spring Boot", "React.js", "MongoDB", "JWT"],
      category: "Full-Stack",
      description: "Developed a Fitness Social Media App using Spring Boot, React.js, and MongoDB. This was my first time working with Spring Boot.",
      achievements: [
        "Gained an in-depth understanding of how Java models, repositories, and services interacted within the Spring Boot framework",
        "Learned how Spring Boot's configuration differs from traditional MERN projects, which was both challenging and exciting",
        "Implemented JWT-based authentication for secure user login and tested API endpoints using Postman",
        "Learned how to handle annotations, beans, and dependency management in Spring Boot"
      ],
      challenges: "First time working with Spring Boot - had to learn the framework from scratch and understand Java ecosystem"
    },
    {
      id: 3,
      title: "Flavor Exchange",
      subtitle: "Recipe Sharing Platform",
      image: "/project3.png",
      github: "https://github.com/gitPirate12/flavor-exchange",
      demo: "#",
      stack: ["Next.js", "React.js", "MongoDB", "Context API"],
      category: "Full-Stack",
      description: "Developed a recipe-sharing platform using Next.js, React.js and MongoDB. First time working with Mongoose and NextAuth.",
      achievements: [
        "Designed RESTful APIs with CRUD operations, tested them using Postman",
        "Added state management using the Context API for favorites and recipes",
        "Used client-side GitHub OAuth2 with a bit of hybridization to store some necessary information",
        "Learned the hard way that Mongoose and NextAuth are incompatible, as NextAuth supports the MongoDB adapter instead"
      ],
      challenges: "Discovered Mongoose and NextAuth incompatibility issues and had to restructure authentication approach"
    }
  ]

  return (
    <>
      <Navbar />
      <section 
        ref={sectionRef}
        className="swiss-section relative overflow-hidden"
        style={{
          paddingTop: '32px',
          paddingBottom: '64px',
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)'
        }}
      >
        <div className="swiss-container">
          
          {/* Swiss Header Section */}
          <div 
            className="mb-16 lg:mb-24"
            style={{ paddingBottom: '48px' }}
          >
            {/* Swiss systematic numbering */}
            <div className="flex items-center gap-4 mb-6">
              <span className="font-swiss-mono text-sm text-gray-400 tracking-wide">
                02/PROJECTS
              </span>
              <div 
                className="h-px bg-gray-300 flex-1"
                style={{ maxWidth: '120px' }}
              />
            </div>
            
            {/* Main heading - Swiss typography hierarchy */}
            <div className="grid grid-cols-12 gap-6 lg:gap-12 items-end mb-8">
              <div className="col-span-12 lg:col-span-7">
                <h1 
                  className="font-swiss-display font-black leading-none tracking-tighter text-black mb-4"
                  style={{ fontSize: '48px', minHeight: '52px' }}
                >
                  PROJECTS
                </h1>
                <p className="font-swiss-body text-gray-600" style={{ fontSize: '16px' }}>
                  Featured Development Work & Technical Achievements
                </p>
              </div>
              <div className="col-span-12 lg:col-span-5">
                <div 
                  className="bg-swiss-red ml-auto"
                  style={{ width: '80px', height: '2px' }}
                />
              </div>
            </div>
          </div>

          {/* Swiss Projects Grid - Golden Ratio Layout */}
          <div className="space-y-16 lg:space-y-24">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className={`transform transition-all duration-1000 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Golden Ratio Grid: 1:1.618 */}
                <div 
                  className={`grid gap-8 lg:gap-16 items-center ${
                    index % 2 === 0 ? 'lg:grid-cols-[1fr_1.618fr]' : 'lg:grid-cols-[1.618fr_1fr]'
                  }`}
                >
                  
                  {/* Project Image - Rule of Thirds Positioning */}
                  <div className={`${index % 2 === 0 ? 'order-1' : 'order-2 lg:order-1'}`}>
                    <div 
                      className="relative group cursor-pointer"
                      onMouseEnter={() => setHoveredProject(project.id)}
                      onMouseLeave={() => setHoveredProject(null)}
                      style={{ aspectRatio: '4/3' }}
                    >
                      {/* Swiss Border Frame */}
                      <div className="absolute -inset-2 bg-gray-200 opacity-50" />
                      <div className="absolute -inset-1 bg-white" />
                      
                      {/* Project Image */}
                      <div className="relative w-full h-full overflow-hidden bg-gray-100">
                        <Image
                          src={project.image}
                          alt={`${project.title} project screenshot`}
                          fill
                          className={`object-cover transition-all duration-700 ${
                            hoveredProject === project.id ? 'scale-105 blur-sm' : 'scale-100'
                          }`}
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        
                        {/* Swiss Overlay */}
                        <div className={`absolute inset-0 bg-black transition-opacity duration-500 ${
                          hoveredProject === project.id ? 'opacity-80' : 'opacity-0'
                        }`} />
                        
                        {/* Project Actions */}
                        <div className={`absolute inset-0 flex items-center justify-center gap-4 transition-all duration-500 ${
                          hoveredProject === project.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`}>
                          <Link
                            href={project.github}
                            target="_blank"
                            className="bg-white text-black p-3 hover:bg-swiss-red hover:text-white transition-all duration-300 transform hover:scale-110"
                          >
                            <FiGithub size={20} />
                          </Link>
                          {project.demo !== "#" && (
                            <Link
                              href={project.demo}
                              target="_blank"
                              className="bg-swiss-red text-white p-3 hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-110"
                            >
                              <FiExternalLink size={20} />
                            </Link>
                          )}
                        </div>
                      </div>
                      
                      {/* Swiss Project Number */}
                      <div className="absolute -top-4 -right-4 w-8 h-8 bg-swiss-red text-white flex items-center justify-center font-swiss-mono text-sm font-bold">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                    </div>
                  </div>

                  {/* Project Content - Visual Hierarchy */}
                  <div className={`space-y-6 ${index % 2 === 0 ? 'order-2' : 'order-1 lg:order-2'}`}>
                    
                    {/* Project Header */}
                    <div className="space-y-3">
                      {/* Category Badge */}
                      <div className="flex items-center gap-3">
                        <span className="font-swiss-mono text-xs text-swiss-red uppercase tracking-wider font-bold">
                          {project.category}
                        </span>
                        <div className="w-12 h-px bg-swiss-red" />
                      </div>
                      
                      {/* Project Title - Visual Hierarchy Level 1 */}
                      <h2 
                        className="font-swiss-heading font-bold text-black leading-tight"
                        style={{ fontSize: '32px', letterSpacing: '-0.025em' }}
                      >
                        {project.title}
                      </h2>
                      
                      {/* Subtitle - Visual Hierarchy Level 2 */}
                      <p 
                        className="font-swiss-body text-gray-600"
                        style={{ fontSize: '18px', lineHeight: '1.5' }}
                      >
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Tech Stack - Swiss Pills */}
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="font-swiss-mono text-xs bg-gray-100 text-gray-700 px-3 py-1 uppercase tracking-wide"
                          style={{ fontSize: '11px' }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Project Description */}
                    <p 
                      className="font-swiss-body text-gray-700 leading-relaxed"
                      style={{ fontSize: '15px', lineHeight: '1.6', maxWidth: '65ch' }}
                    >
                      {project.description}
                    </p>

                    {/* Achievements - Swiss List */}
                    <div className="space-y-3">
                      <h3 className="font-swiss-heading font-semibold text-black text-sm uppercase tracking-wide">
                        Key Achievements
                      </h3>
                      <div className="space-y-2">
                        {project.achievements.slice(0, 3).map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-start gap-3">
                            <div className="w-1 h-1 bg-swiss-red rounded-full mt-2 flex-shrink-0" />
                            <p 
                              className="font-swiss-body text-gray-600"
                              style={{ fontSize: '14px', lineHeight: '1.5', maxWidth: '60ch' }}
                            >
                              {achievement}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Challenges - Swiss Insight */}
                    {project.challenges && (
                      <div className="bg-gray-50 p-4 border-l-2 border-swiss-yellow">
                        <h4 className="font-swiss-mono text-xs text-swiss-yellow uppercase tracking-wide mb-2 font-bold">
                          Technical Challenge
                        </h4>
                        <p 
                          className="font-swiss-body text-gray-600 italic"
                          style={{ fontSize: '13px', lineHeight: '1.5' }}
                        >
                          {project.challenges}
                        </p>
                      </div>
                    )}

                    {/* Project Links - Swiss CTA */}
                    <div className="flex gap-4 pt-2">
                      <Link
                        href={project.github}
                        target="_blank"
                        className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 font-swiss-body text-sm font-medium hover:bg-swiss-red transition-all duration-300 transform hover:-translate-y-1"
                      >
                        <FiGithub size={16} />
                        VIEW CODE
                      </Link>
                      {project.demo !== "#" && (
                        <Link
                          href={project.demo}
                          target="_blank"
                          className="inline-flex items-center gap-2 border-2 border-black text-black px-6 py-3 font-swiss-body text-sm font-medium hover:bg-black hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                        >
                          <FiExternalLink size={16} />
                          LIVE DEMO
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Swiss Footer CTA */}
          <div 
            className={`mt-24 lg:mt-32 text-center transform transition-all duration-1000 delay-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <div className="space-y-6">
              <h3 
                className="font-swiss-heading font-bold text-black"
                style={{ fontSize: '24px', letterSpacing: '-0.025em' }}
              >
                Interested in collaborating?
              </h3>
              <p className="font-swiss-body text-gray-600" style={{ fontSize: '16px' }}>
                Let's build something extraordinary together.
              </p>
              <Link 
                href="/contact"
                className="inline-block bg-swiss-red text-white px-8 py-4 font-swiss-body text-sm font-medium hover:bg-black transition-all duration-300 transform hover:-translate-y-1"
              >
                GET IN TOUCH
              </Link>
            </div>
          </div>
        </div>

        {/* Swiss Geometric Background Elements */}
        <div className="absolute top-1/4 right-12 w-px h-32 bg-gray-200 opacity-20 transform rotate-15" />
        <div className="absolute bottom-1/4 left-12 w-24 h-px bg-gray-200 opacity-20" />
        <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-swiss-yellow opacity-10 transform rotate-45" />
        
        {/* Swiss Grid Reference */}
        <div className="absolute top-6 right-6 font-swiss-mono text-xs text-gray-300 opacity-40">
          PROJ/GRID
        </div>
      </section>
    </>
  )
}

export default Projects
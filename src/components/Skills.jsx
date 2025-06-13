import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io5"
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri"
import { DiMongodb } from "react-icons/di"
import { SiPostman, SiTypescript, SiDocker } from "react-icons/si"
import { BiLogoPostgresql } from "react-icons/bi"

const SkillItem = ({ Icon, label }) => (
  <div className="flex flex-col items-center group">
    <div className="bg-gray-800/50 p-4 rounded-xl mb-2 transform transition-all duration-300 group-hover:scale-110 group-hover:bg-gray-700/70 group-hover:shadow-lg group-hover:shadow-teal-500/10">
      <Icon
        className="text-gray-400 w-10 h-10 sm:w-12 sm:h-12 transition-all duration-300 group-hover:text-teal-300"
        aria-label={label}
      />
    </div>
    <span className="text-xs text-gray-400 font-mono group-hover:text-white transition-all duration-300">{label}</span>
  </div>
)

const SkillCategory = ({ title, skills }) => (
  <div className="mb-8">
    <h3 className="text-lg font-semibold text-gray-300 mb-4 font-sans tracking-tight border-l-2 border-teal-400 pl-3">
      {title}
    </h3>
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
      {skills.map((skill) => (
        <SkillItem key={skill.label} Icon={skill.Icon} label={skill.label} />
      ))}
    </div>
  </div>
)

const Skills = () => {
  const frontendSkills = [
    { Icon: FaHtml5, label: "HTML5" },
    { Icon: FaCss3Alt, label: "CSS3" },
    { Icon: IoLogoJavascript, label: "JavaScript" },
    { Icon: SiTypescript, label: "TypeScript" },
    { Icon: FaReact, label: "React" },
    { Icon: RiNextjsFill, label: "Next.js" },
    { Icon: RiTailwindCssFill, label: "Tailwind CSS" },
  ]

  const backendSkills = [
    { Icon: FaNodeJs, label: "Node.js" },
    { Icon: DiMongodb, label: "MongoDB" },
    { Icon: BiLogoPostgresql, label: "PostgreSQL" },
  ]

  const toolsSkills = [
    { Icon: SiDocker, label: "Docker" },
    { Icon: FaGitAlt, label: "Git" },
    { Icon: SiPostman, label: "Postman" },
  ]

  return (
    <section className="mb-[80px] max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl mb-2 flex items-center font-sans font-bold tracking-tight">
          <span className="mr-2 text-teal-300">⌨️</span>
          Skills
        </h1>
        <hr className="border-t-2 border-gray-600 mt-3 mb-6" />
        <p className="text-gray-400 text-sm font-mono mb-8">Technologies I've worked with and pretend to understand</p>
      </div>

      <div >
        <SkillCategory title="Frontend" skills={frontendSkills} />
        <SkillCategory title="Backend" skills={backendSkills} />
        <SkillCategory title="Tools & DevOps" skills={toolsSkills} />
      </div>
    </section>
  )
}

export default Skills

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { SiPostman, SiTypescript, SiDocker } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

const SkillItem = ({ Icon, label }) => (
  <div className="mb-4 flex-1 basis-[60px] sm:basis-[80px] flex justify-center">
    <Icon
      className="text-[rgb(179,186,198)] w-10 h-10 sm:w-10 sm:h-10 hover:text-white transition-all duration-200"
      aria-label={label}
    />
  </div>
);

const Skills = () => {
  const skills = [
    { Icon: FaHtml5, label: "HTML5" },
    { Icon: FaCss3Alt, label: "CSS3" },
    { Icon: IoLogoJavascript, label: "JavaScript" },
    { Icon: SiTypescript, label: "TypeScript" },
    { Icon: FaReact, label: "React" },
    { Icon: RiNextjsFill, label: "Next.js" },
    { Icon: RiTailwindCssFill, label: "Tailwind CSS" },
    { Icon: FaNodeJs, label: "Node.js" },
    { Icon: DiMongodb, label: "MongoDB" },
    { Icon: BiLogoPostgresql, label: "PostgreSQL" },
    { Icon: SiDocker, label: "Docker" },
    { Icon: FaGitAlt, label: "Git" },
    { Icon: SiPostman, label: "Postman" },
  ];

  return (
    <section className="mb-[80px] max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl mb-2 flex items-center font-sans font-bold tracking-tight">
          <span className="mr-2 text-teal-300">⌨️</span>
          Tech Stack
        </h1>
        <hr className="border-t-2 border-gray-600 mt-3 mb-6" />
      </div>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
        {skills.map((skill) => (
          <SkillItem key={skill.label} Icon={skill.Icon} label={skill.label} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
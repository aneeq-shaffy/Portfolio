import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { SiPostman, SiTypescript, SiDocker } from "react-icons/si";

const Skills = () => {
  return (
    <section className="mb-[80px]">
      <div className="mb-4">
        <h1 className="text-2xl sm:text-3xl mb-2 flex items-center">
          <span className="mr-2">&lt;/&gt;</span>
          <strong className="font-semibold">
            Weapons of Mass Construction
          </strong>
        </h1>
        <p className="text-[rgb(179,186,198)] text-sm italic mb-1">
          (Stack Overflow certified tools I'm trapped in)
        </p>
        <hr className="border-t-2 border-[rgb(179,186,198)] mt-3 mb-4" />
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
        <div className="group flex flex-col items-center">
          <FaHtml5 className="text-[rgb(179,186,198)] w-8 h-8 sm:w-9 sm:h-9 hover:text-white transition-colors duration-200" />
          <p className="text-xs text-[rgb(179,186,198)] mt-2 opacity-0 group-hover:opacity-100 transition-opacity">HTML5</p>
        </div>
        
        <div className="group flex flex-col items-center">
          <FaCss3Alt className="text-[rgb(179,186,198)] w-8 h-8 sm:w-9 sm:h-9 hover:text-white transition-colors duration-200" />
          <p className="text-xs text-[rgb(179,186,198)] mt-2 opacity-0 group-hover:opacity-100 transition-opacity">CSS3</p>
        </div>
        
        <div className="group flex flex-col items-center">
          <IoLogoJavascript className="text-[rgb(179,186,198)] w-8 h-8 sm:w-9 sm:h-9 hover:text-white transition-colors duration-200" />
          <p className="text-xs text-[rgb(179,186,198)] mt-2 opacity-0 group-hover:opacity-100 transition-opacity">JavaScript</p>
        </div>
        
        <div className="group flex flex-col items-center">
          <SiTypescript className="text-[rgb(179,186,198)] w-8 h-8 sm:w-9 sm:h-9 hover:text-white transition-colors duration-200" />
          <p className="text-xs text-[rgb(179,186,198)] mt-2 opacity-0 group-hover:opacity-100 transition-opacity">TypeScript</p>
        </div>
        
        <div className="group flex flex-col items-center">
          <FaReact className="text-[rgb(179,186,198)] w-8 h-8 sm:w-9 sm:h-9 hover:text-white transition-colors duration-200" />
          <p className="text-xs text-[rgb(179,186,198)] mt-2 opacity-0 group-hover:opacity-100 transition-opacity">React</p>
        </div>
        
        <div className="group flex flex-col items-center">
          <RiNextjsFill className="text-[rgb(179,186,198)] w-8 h-8 sm:w-9 sm:h-9 hover:text-white transition-colors duration-200" />
          <p className="text-xs text-[rgb(179,186,198)] mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Next.js</p>
        </div>
        
        <div className="group flex flex-col items-center">
          <RiTailwindCssFill className="text-[rgb(179,186,198)] w-8 h-8 sm:w-9 sm:h-9 hover:text-white transition-colors duration-200" />
          <p className="text-xs text-[rgb(179,186,198)] mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Tailwind</p>
        </div>
        
        <div className="group flex flex-col items-center">
          <FaNodeJs className="text-[rgb(179,186,198)] w-8 h-8 sm:w-9 sm:h-9 hover:text-white transition-colors duration-200" />
          <p className="text-xs text-[rgb(179,186,198)] mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Node.js</p>
        </div>
        
        <div className="group flex flex-col items-center">
          <DiMongodb className="text-[rgb(179,186,198)] w-8 h-8 sm:w-9 sm:h-9 hover:text-white transition-colors duration-200" />
          <p className="text-xs text-[rgb(179,186,198)] mt-2 opacity-0 group-hover:opacity-100 transition-opacity">MongoDB</p>
        </div>
        
        <div className="group flex flex-col items-center">
          <SiDocker className="text-[rgb(179,186,198)] w-8 h-8 sm:w-9 sm:h-9 hover:text-white transition-colors duration-200" />
          <p className="text-xs text-[rgb(179,186,198)] mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Docker</p>
        </div>
        
        <div className="group flex flex-col items-center">
          <FaGitAlt className="text-[rgb(179,186,198)] w-8 h-8 sm:w-9 sm:h-9 hover:text-white transition-colors duration-200" />
          <p className="text-xs text-[rgb(179,186,198)] mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Git</p>
        </div>
        
        <div className="group flex flex-col items-center">
          <SiPostman className="text-[rgb(179,186,198)] w-8 h-8 sm:w-9 sm:h-9 hover:text-white transition-colors duration-200" />
          <p className="text-xs text-[rgb(179,186,198)] mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Postman</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
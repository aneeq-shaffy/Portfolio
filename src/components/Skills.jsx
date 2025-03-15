import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa";
import { SiPostman } from "react-icons/si";

const Skills = () => {
  return (
    <section className="mb-[80px]">
      <div>
        <h1 className="text-2xl mb-1 text-left">
          &lt;/&gt; <strong className="font-semibold">Tech Stack</strong>
        </h1>
        
        <hr className="border border-[rgb(179,186,198)] mb-[14px]" />
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 pl-4 sm:pl-0">
          <div className="mb-4 flex-1">
            <FaHtml5 className="text-[rgb(179,186,198)] w-full h-full sm:w-10 sm:h-10 hover:text-white transition-all duration-200" />
          </div>

          <div className="mb-4 flex-1">
            <FaCss3Alt className="text-[rgb(179,186,198)] w-full h-full sm:w-10 sm:h-10 hover:text-white transition-all duration-200" />
          </div>

          <div className="mb-4 flex-1">
            <IoLogoJavascript className="text-[rgb(179,186,198)] w-full h-full sm:w-10 sm:h-10 hover:text-white transition-all duration-200" />
          </div>

          <div className="mb-4 flex-1">
            <FaReact className="text-[rgb(179,186,198)] w-full h-full sm:w-10 sm:h-10 hover:text-white transition-all duration-200" />
          </div>

          <div className="mb-4 flex-1">
            <RiNextjsFill className="text-[rgb(179,186,198)] w-full h-full sm:w-10 sm:h-10 hover:text-white transition-all duration-200" />
          </div>

          <div className="mb-4 flex-1">
            <RiTailwindCssFill className="text-[rgb(179,186,198)] w-full h-full sm:w-10 sm:h-10 hover:text-white transition-all duration-200" />
          </div>

          <div className="mb-4 flex-1">
            <FaNodeJs className="text-[rgb(179,186,198)] w-full h-full sm:w-10 sm:h-10 hover:text-white transition-all duration-200" />
          </div>

          <div className="mb-4 flex-1">
            <DiMongodb className="text-[rgb(179,186,198)] w-full h-full sm:w-10 sm:h-10 hover:text-white transition-all duration-200" />
          </div>

          <div className="mb-4 flex-1">
            <FaGitAlt className="text-[rgb(179,186,198)] w-full h-full sm:w-10 sm:h-10 hover:text-white transition-all duration-200" />
          </div>

          <div className="mb-4 flex-1">
            <SiPostman className="text-[rgb(179,186,198)] w-full h-full sm:w-10 sm:h-10 hover:text-white transition-all duration-200" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

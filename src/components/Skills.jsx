import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { FaDocker } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { SiPostman } from "react-icons/si";

const Skills = () => {
  return (
    <section className="mb-[80px]">
      <div>
        <h1 className="text-3xl mb-1">
          &lt;/&gt; <strong className="font-semibold">Tech Stack</strong>
        </h1>
        <hr className="border border-[rgb(179,186,198)] mb-[14px]" />
        <div className="flex flex-wrap justify-start pl-[30px] space-x-4 sm:space-x-6">
          <div className=" mb-4">
            <FaHtml5 className="text-[rgb(179,186,198)] w-12 h-12 hover:text-white  transition-all duration-200" />
          </div>

          <div className="mr-4 mb-4">
            <FaCss3Alt className="text-[rgb(179,186,198)] w-12 h-12 hover:text-white  transition-all duration-200" />
          </div>

          <div className="mr-4 mb-4">
            <IoLogoJavascript className="text-[rgb(179,186,198)] w-12 h-12 hover:text-white  transition-all duration-200" />
          </div>

          <div className="mr-4 mb-4">
            <FaReact className="text-[rgb(179,186,198)] w-12 h-12 hover:text-white  transition-all duration-200" />
          </div>

          <div className="mr-4 mb-4">
            <RiNextjsFill className="text-[rgb(179,186,198)] w-12 h-12 hover:text-white  transition-all duration-200" />
          </div>

          <div className="mr-4 mb-4">
            <RiTailwindCssFill className="text-[rgb(179,186,198)] w-12 h-12 hover:text-white  transition-all duration-200" />
          </div>

          <div className="mr-4 mb-4">
            <FaNodeJs className="text-[rgb(179,186,198)] w-12 h-12 hover:text-white  transition-all duration-200" />
          </div>

          <div className="mr-4 mb-4">
            <DiMongodb className="text-[rgb(179,186,198)] w-12 h-12 hover:text-white  transition-all duration-200" />
          </div>

          <div className="mr-4 mb-4">
            <FaDocker className="text-[rgb(179,186,198)] w-12 h-12 hover:text-white  transition-all duration-200" />
          </div>

          <div className="mr-4 mb-4">
            <FaGitAlt className="text-[rgb(179,186,198)] w-12 h-12 hover:text-white  transition-all duration-200" />
          </div>

          <div className="mr-4 mb-4">
            <SiPostman className="text-[rgb(179,186,198)] w-12 h-12 hover:text-white  transition-all duration-200" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

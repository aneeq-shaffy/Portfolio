import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const Projects = () => {
  return (
    <section className="mb-[80px]">
      <div>
        <h1 className="text-2xl mb-1">
          🛠️ <strong className="font-semi-bold"> Projects</strong>
        </h1>
        <hr className="border-t-2 border-[rgb(179,186,198)] mb-[12px]" />

        <div className="grid grid-cols-2 gap-3 h-[260px]  ">
          <div className="flex justify-center items-center relative group ">
            <Image
              src="/project1.png" // Image inside the public folder
              alt="Youtube clone"
              width={400} // Set a width
              height={300} // Set a height
              className="rounded-lg shadow-lg  "
            />
            <div className="absolute top-[10px] right-[1px] bottom-[9px] left-[1px]  bg-black/90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
              <h2 className=" text-white text-lg font-semibold mb-2">
               <strong>YouTube Clone</strong>  
              </h2>
              <p className="text-[rgb(179,186,198)] text-sm text-center px-4 mb-1">
              Developed using CSS and HTML, this project reinforced my understanding of essential web design concepts, including the CSS Box Model, Nested Layouts, Grid, Flexbox, and Positioning.
              </p>
              <div className="flex gap-4 mt-1">
                <Link href="https://gitpirate12.github.io/Youtube-clone/" target="_blank">
                  <span
                    
                    className="bg-white text-[rgb(179,186,198)] px-3 py-1 rounded-md hover:text-white"
                  >
                    <FaExternalLinkAlt />
                  </span>
                </Link>
                <Link href="https://github.com/gitPirate12/Youtube-clone" target="_blank">
                  <span className="bg-white text-[rgb(179,186,198)] px-3 py-1 rounded-md hover:text-white">
                     <FiGithub  />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/project1.png" // Image inside the public folder
              alt="Youtube clone"
              width={400} // Set a width
              height={300} // Set a height
              className="rounded-lg shadow-lg  "
            />
          </div>

          
          
          
          
          
          
          

         
        </div>
      </div>
    </section>
  );
};

export default Projects;

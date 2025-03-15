import Image from "next/image";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";

const Projects = () => {
  return (
    <section className="mb-[80px]">
      <div>
        <h1 className="text-2xl mb-1">
          🛠️ <strong className="font-semibold"> Projects</strong>
        </h1>
        <hr className="border-t-2 border-[rgb(179,186,198)] mb-[12px]" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 auto-rows-[minmax(200px,auto)] md:auto-rows-[minmax(300px,auto)] max-md:overflow-x-hidden">
          {/* Project 1 */}
          <div className="relative group aspect-[4/3]">
            <div className="relative w-full h-full">
              <Image
                src="/project1.png"
                alt="Youtube clone"
                fill
                className="rounded-lg shadow-lg object-cover"
              />
              <div className="absolute inset-0 bg-black/90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg p-4">
                <h2 className="text-white text-lg font-semibold mb-2 text-center">
                  <strong>YouTube Clone</strong>
                </h2>
                <p className="text-[rgb(179,186,198)] text-sm text-center px-4 mb-1">
                  Developed using CSS and HTML, this project reinforced my
                  understanding of essential web design concepts.
                </p>
                <div className="flex gap-4 mt-1">
                  <Link
                    href="https://github.com/gitPirate12/Youtube-clone"
                    target="_blank"
                  >
                    <span className="bg-white text-[rgb(179,186,198)] px-3 py-1 rounded-md hover:text-white">
                      <FiGithub />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="relative group aspect-[4/3]">
            <div className="relative w-full h-full">
              <Image
                src="/project2.png"
                alt="Grocery System"
                fill
                className="rounded-lg shadow-lg object-cover"
              />
              <div className="absolute inset-0 bg-black/90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg p-4">
                <h2 className="text-white text-lg font-semibold mb-2 text-center">
                  <strong>ITP-Grocery-Management-System</strong>
                </h2>
                <p className="text-[rgb(179,186,198)] text-sm text-center px-4 mb-1">
                  Developed using React, Express, MongoDB, and Node.js, this
                  project reinforced my understanding of creating APIs to
                  perform create, read, update, and delete (CRUD) operations.
                </p>
                <div className="flex gap-4 mt-1">
                  <Link
                    href="https://github.com/gitPirate12/ITP-Grocery-Management-System"
                    target="_blank"
                  >
                    <span className="bg-white text-[rgb(179,186,198)] px-3 py-1 rounded-md hover:text-white">
                      <FiGithub />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="relative group aspect-[4/3]">
            <div className="relative w-full h-full">
              <Image
                src="/project3.png"
                alt="Translator app"
                fill
                className="rounded-lg shadow-lg object-cover"
              />
              <div className="absolute inset-0 bg-black/90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg p-4">
                <h2 className="text-white text-lg font-semibold mb-2 text-center">
                  <strong>ITPM-LINGO</strong>
                </h2>
                <p className="text-[rgb(179,186,198)] text-sm text-center px-4 mb-1">
                  Developed using React, Express, MongoDB, and Node.js, this
                  project further reinforced my understanding of creating APIs
                  and implementing JWT authentication for secure user access.
                </p>
                <div className="flex gap-4 mt-1">
                  <Link
                    href="https://github.com/gitPirate12/ITPM-LINGO"
                    target="_blank"
                  >
                    <span className="bg-white text-[rgb(179,186,198)] px-3 py-1 rounded-md hover:text-white">
                      <FiGithub />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
import Image from "next/image";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";

const Projects = () => {
  return (
    <section className="mb-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl mb-2 flex items-center font-sans font-bold tracking-tight">
          <span className="mr-2 text-teal-300">🛠️</span>
          Projects
        </h1>
        <hr className="border-t-2 border-gray-600 mb-6" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 auto-rows-[minmax(240px,auto)]">
          {/* Project 1 - Fitfusion */}
          <div className="relative group aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/project1.png"
              alt="Fitfusion project screenshot"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority
            />
            <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 z-10">
              <h2 className="text-gray-200 text-base sm:text-lg font-bold mb-1 text-center font-sans tracking-tight">
                Fitfusion
              </h2>
              <p className="text-gray-400 text-xs sm:text-sm font-mono leading-relaxed text-center mb-2">
                Spring Boot/React app, survived backend spaghetti & @Autowired chaos. 🎰🚀
              </p>
              <div className="flex gap-4 mt-1">
                <Link
                  href="https://github.com/gitPirate12/FitFusion"
                  target="_blank"
                >
                  <span className="bg-white text-[rgb(179,186,198)] px-3 py-1 rounded-md hover:text-white">
                    <FiGithub />
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Project 2 - ITPM-Lingo */}
          <div className="relative group aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/project2.png"
              alt="ITPM-Lingo project screenshot"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 z-10">
              <h2 className="text-gray-200 text-base sm:text-lg font-bold mb-1 text-center font-sans tracking-tight">
                ITPM-Lingo
              </h2>
              <p className="text-gray-400 text-xs sm:text-sm font-mono leading-relaxed text-center mb-2">
                Next.js CRUD app with OAuth, beat RapidAPI limits, Vercel deploy. 🔥🚀
              </p>
              <div className="flex gap-4 mt-1">
                <Link
                  href="https://github.com/gitPirate12/itpm-lingo-2.0"
                  target="_blank"
                >
                  <span className="bg-white text-[rgb(179,186,198)] px-3 py-1 rounded-md hover:text-white">
                    <FiGithub />
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Project 3 - Flavor Exchange */}
          <div className="relative group aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/project3.png"
              alt="Flavor Exchange project screenshot"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 z-10">
              <h2 className="text-gray-200 text-base sm:text-lg font-bold mb-1 text-center font-sans tracking-tight">
                Flavor Exchange
              </h2>
              <p className="text-gray-400 text-xs sm:text-sm font-mono leading-relaxed text-center mb-2">
                Next.js CRUD app with GitHub auth, Vercel deploy, Context API tamed. 🔥🚀
              </p>
              <div className="flex gap-4 mt-1">
                <Link
                  href="https://github.com/gitPirate12/flavor-exchange"
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
    </section>
  );
};

export default Projects;
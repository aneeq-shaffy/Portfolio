import Image from "next/image";
import { FiGithub } from "react-icons/fi";
import { FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { TbFileCv } from "react-icons/tb";

const About = () => {
  return (
    <section className="flex flex-col items-center md:flex-row md:items-center justify-center mt-10 mb-[80px] px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Image Container - Centered on mobile, left on desktop */}
      <div className="flex justify-center mb-6 md:mb-0 md:mr-8 lg:mr-12 w-full md:w-auto">
        <div className="relative w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[170px] md:h-[170px] lg:w-[200px] lg:h-[200px]">
          <Image
            src={"/aneeq.png"}
            alt="profile pic"
            fill
            className="rounded-full border-[2px] border-yellow-500 grayscale hover:grayscale-0 transition-all duration-300 object-cover object-left-top z-10"
          />
        </div>
      </div>

      {/* Content Container - Centered on mobile, left-aligned on desktop */}
      <div className="w-full md:w-auto text-center md:text-left">
        <h1 className="mb-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tighter whitespace-nowrap">
          Hey, I am <strong className="font-semibold">Aneeq Shaffy</strong>!
        </h1>

        <p className="mb-3 text-[rgb(179,186,198)] text-sm sm:text-base md:text-lg max-w-[600px] md:max-w-[650px] lg:max-w-[700px] mx-auto md:mx-0">
          React/Next.js developer in a toxic relationship with JavaScript frameworks. Currently surviving on GPT's and caffeine, transforming existential dread into 'agile solutions.' My resume is 30% skills, 70% strategically bold lies. Let's connect before my Vercel deployment fails again.
        </p>

        {/* Icons - Centered on mobile, left on desktop */}
        <div className="flex justify-center md:justify-start space-x-4 sm:space-x-5">
          <a href="/cv.pdf" target="_blank" className="text-[rgb(179,186,198)] hover:text-white transition-colors">
            <TbFileCv className="w-6 h-6 sm:w-7 sm:h-7" />
          </a>
          <a href="tel:+94762844725" target="_blank" className="text-[rgb(179,186,198)] hover:text-white transition-colors">
            <FaPhoneAlt className="w-6 h-6 sm:w-7 sm:h-7" />
          </a>
          <a href="https://www.linkedin.com/in/aneeq-shaffy" target="_blank" className="text-[rgb(179,186,198)] hover:text-white transition-colors">
            <FaLinkedin className="w-6 h-6 sm:w-7 sm:h-7" />
          </a>
          <a href="https://github.com/gitPirate12" target="_blank" className="text-[rgb(179,186,198)] hover:text-white transition-colors">
            <FiGithub className="w-6 h-6 sm:w-7 sm:h-7" />
          </a>
          <a href="mailto:aneeqshaffy7@gmail.com" target="_blank" className="text-[rgb(179,186,198)] hover:text-white transition-colors">
            <SiGmail className="w-6 h-6 sm:w-7 sm:h-7" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
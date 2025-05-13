import Image from "next/image";
import { FiGithub } from "react-icons/fi";
import { FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { TbFileCv } from "react-icons/tb";

const About = () => {
  return (
    <section className="flex flex-col items-center md:flex-row md:items-center justify-center mt-10 mb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Image Container - Centered on mobile, left on desktop */}
      <div className="flex justify-center mb-6 md:mb-0 md:mr-6 lg:mr-8 w-full md:w-40 lg:w-48">
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-48 lg:h-48">
          <Image
            src="/aneeq.png"
            alt="Profile picture of Aneeq Shaffy"
            fill
            className="rounded-full border-2 border-yellow-400 grayscale hover:grayscale-0 transition-all duration-300 object-cover object-top"
            sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, (max-width: 1024px) 176px, 192px"
            priority
          />
        </div>
      </div>

      {/* Content Container - Centered on mobile, left-aligned on desktop */}
      <div className="w-full md:w-auto text-center md:text-left">
        <h1 className="mb-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-bold tracking-tight">
          Hey, I am Aneeq Shaffy!
        </h1>

        <p className="mb-4 text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl font-mono leading-relaxed max-w-[90%] sm:max-w-[600px] md:max-w-[650px] lg:max-w-[700px] mx-auto md:mx-0">
          React/Next.js developer in a toxic relationship with JavaScript frameworks. Currently surviving on GPTs and caffeine, transforming existential dread into "agile solutions". My resume is 30% skills, 70% strategically bold lies. Let’s connect before my Netlify deployment fails again.
        </p>

        {/* Icons - Centered on mobile, left on desktop */}
        <div className="flex justify-center md:justify-start gap-4 sm:gap-5">
          <a
            href="/cv.pdf"
            target="_blank"
            rel="nofollow"
            className="text-gray-400 hover:text-white transition-colors duration-200"
            aria-label="Download CV"
          >
            <TbFileCv className="w-6 h-6 sm:w-7 sm:h-7" />
          </a>
          <a
            href="tel:+94762844725"
            target="_blank"
            rel="nofollow"
            className="text-gray-400 hover:text-white transition-colors duration-200"
            aria-label="Call Aneeq"
          >
            <FaPhoneAlt className="w-6 h-6 sm:w-7 sm:h-7" />
          </a>
          <a
            href="https://www.linkedin.com/in/aneeq-shaffy"
            target="_blank"
            rel="nofollow"
            className="text-gray-400 hover:text-white transition-colors duration-200"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="w-6 h-6 sm:w-7 sm:h-7" />
          </a>
          <a
            href="https://github.com/gitPirate12"
            target="_blank"
            rel="nofollow"
            className="text-gray-400 hover:text-white transition-colors duration-200"
            aria-label="GitHub Profile"
          >
            <FiGithub className="w-6 h-6 sm:w-7 sm:h-7" />
          </a>
          <a
            href="mailto:aneeqshaffy7@gmail.com"
            target="_blank"
            rel="nofollow"
            className="text-gray-400 hover:text-white transition-colors duration-200"
            aria-label="Email Aneeq"
          >
            <SiGmail className="w-6 h-6 sm:w-7 sm:h-7" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
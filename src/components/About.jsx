import Image from "next/image";
import { FiGithub } from "react-icons/fi";
import { FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { TbFileCv } from "react-icons/tb";

const About = () => {
  return (
    <section className="flex flex-row items-center justify-center mt-10 mb-[80px]">
      <div className="flex gap-x-4 items-center flex-row mr-7">
        <Image
          src={"/aneeq.png"}
          alt="profile pic"
          width={200}
          height={200}
          className="rounded-full border-[2px] border-yellow-500 grayscale hover:grayscale-0 transition-all duration-300 max-w-full min-w-[100px] min-h-[100px] z-10"
        />
      </div>

      <div>
        <h1 className="mb-3 text-3xl sm:text-4xl tracking-tighter whitespace-nowrap">
          Hey, I am <strong className="font-semi-bold">Aneeq Shaffy</strong>!
        </h1>
        <p className="mb-3 text-[rgb(179,186,198)] text-sm sm:text-base">
          I am a React Web Developer with a strong foundation in HTML, CSS<br />
          &amp; JavaScript seeking an internship to collaborate and grow
          as a developer.
        </p>
        <div className="flex">
          <div>
            <a href="/cv.pdf" target="_blank" className="text-[rgb(179,186,198)]">
              <TbFileCv className="mr-4 text-[rgb(179,186,198)] hover:text-white w-[25px] h-[25px]" />
            </a>
          </div>
          <div>
            <a href="tel:+94762844725" target="_blank" className="text-[rgb(179,186,198)]">
              <FaPhoneAlt className="mr-4 text-[rgb(179,186,198)] hover:text-white w-[25px] h-[25px]" />
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/aneeq-shaffy" target="_blank" className="text-[rgb(179,186,198)]">
              <FaLinkedin className="mr-4 text-[rgb(179,186,198)] hover:text-white w-[25px] h-[25px]" />
            </a>
          </div>
          <div>
            <a href="https://github.com/gitPirate12" target="_blank" className="text-[rgb(179,186,198)]">
              <FiGithub className="mr-4 text-[rgb(179,186,198)] hover:text-white w-[25px] h-[25px]" />
            </a>
          </div>
          <div>
            <a href="mailto:aneeqshaffy7@gmail.com" target="_blank" className="text-[rgb(179,186,198)]">
              <SiGmail className="mr-4 text-[rgb(179,186,198)] hover:text-white w-[25px] h-[25px]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

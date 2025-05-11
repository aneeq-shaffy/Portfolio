import { FaExternalLinkAlt } from "react-icons/fa";

const Education = () => {
  return (
    <section className="mb-[80px]">
      <div className="mb-4">
        <h1 className="text-2xl sm:text-3xl mb-2 flex items-center">
          <span className="mr-2">🎓</span>
          <strong className="font-semibold">
            Indoctrination Chronicles
          </strong>
        </h1>
        <p className="text-[rgb(179,186,198)] text-sm italic mb-1">
          (Because "education" sounds too voluntary)
        </p>
        <hr className="border-t-2 border-[rgb(179,186,198)] mt-3 mb-4" />
      </div>

      {/* Education Item 1 */}
      <div className="mb-6">
  <div className="flex flex-col sm:flex-row">
    <div className="sm:w-1/4 sm:pr-4 mb-2 sm:mb-0">
      <p className="text-gray-400 text-sm font-mono">
        Feb 2021-2026(ish)
        <span className="text-xs block italic">(brief existential crisis hiatus)</span>
      </p>
    </div>
    <div className="sm:w-3/4">
      <h2 className="font-bold text-lg mb-1 font-sans tracking-tight">
        BSc (Hons) in Information Technology
      </h2>
      <p className="text-gray-400 text-sm mb-2 font-mono">
        Sri Lanka Institute of Information Technology
        <span className="text-xs ml-1 italic">(yes, it's a real place)</span>
      </p>
      <div className="text-gray-400 text-sm leading-relaxed space-y-1 ml-4 font-mono">
        <div className="flex items-start">
          <span className="mr-1">•</span>
          <span>Batch Representative (aka "professional complaint box")</span>
          <a
            href="/batch-rep-cert.png"
            target="_blank"
            className="text-gray-400 hover:text-white ml-1 transition-colors duration-200"
            title="My only leadership qualification"
          >
            <FaExternalLinkAlt className="w-3 h-3 inline" />
          </a>
        </div>
        <div className="flex">
          <span className="mr-1">•</span>
          <span>Survived 3 years of imposter syndrome. Can code (probably) (React's docs say I can)</span>
        </div>
        <div className="flex">
          <span className="mr-1">•</span>
          <span>Specialized in Ctrl+C, Ctrl+V Architecture</span>
        </div>
      </div>
    </div>
  </div>
</div>

      {/* Education Item 2 */}
      <div className="mb-6">
  <div className="flex flex-col sm:flex-row">
    <div className="sm:w-1/4 sm:pr-4 mb-2 sm:mb-0">
      <p className="text-gray-400 text-sm font-mono">
        Sep 2017-Mar 2019
        <span className="text-xs block italic">(2 years of suffering)</span>
      </p>
    </div>
    <div className="sm:w-3/4">
      <h2 className="font-bold text-lg mb-1 font-sans tracking-tight">
        Cambridge International A Level, Commerce
      </h2>
      <p className="text-gray-400 text-sm mb-2 font-mono">
        Lyceum International School, Nugegoda
        <span className="text-xs ml-1 italic">(aka teenage detention center)</span>
      </p>
      <div className="text-gray-400 text-sm leading-relaxed space-y-1 ml-4 font-mono">
        <div className="flex">
          <span className="mr-1">•</span>
          <span>Specialized in last-minute cramming</span>
        </div>
        <div className="flex">
          <span className="mr-1">•</span>
          <span>Professional bullshitter of essay questions</span>
        </div>
      </div>
    </div>
  </div>
</div>
    </section>
  );
};

export default Education;
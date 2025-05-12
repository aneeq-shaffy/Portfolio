import { FaExternalLinkAlt } from "react-icons/fa";

const Education = () => {
  return (
    <section className="mb-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl mb-2 flex items-center font-sans font-bold tracking-tight">
          <span className="mr-2 text-teal-300">🎓</span>
          Education
        </h1>
        <hr className="border-t-2 border-gray-600 mt-3 mb-6" />
      </div>

      {/* Education Item 1 */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <div className="sm:w-1/4">
            <p className="text-gray-400 text-sm font-mono leading-relaxed">
              Feb 2021–2026 (ish)
              <span className="text-xs block italic text-gray-500">
                (brief existential crisis hiatus)
              </span>
            </p>
          </div>
          <div className="sm:w-3/4">
            <h2 className="font-bold text-lg sm:text-xl md:text-2xl mb-1 font-sans tracking-tight text-gray-200">
              BSc (Hons) in Information Technology
            </h2>
            <p className="text-gray-400 text-sm mb-3 font-mono">
              Sri Lanka Institute of Information Technology
              <span className="text-xs ml-1 italic text-gray-500">
                (yes, it’s a real place)
              </span>
            </p>
            <div className="text-gray-400 text-sm leading-relaxed space-y-2 ml-4 font-mono">
              <div className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  Batch Representative (aka “professional complaint box”)
                  <a
                    href="/batch-rep-cert.png"
                    target="_blank"
                    rel="nofollow"
                    className="text-gray-400 hover:text-teal-300 ml-1 transition-colors duration-200"
                    title="My only leadership qualification"
                    aria-label="View Batch Representative Certificate"
                  >
                    <FaExternalLinkAlt className="w-3 h-3 inline" />
                  </a>
                </span>
              </div>
              <div className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  Survived 3 years of imposter syndrome. Can code (probably)
                  (React’s docs say I can)
                </span>
              </div>
              <div className="flex items-start">
                <span className="mr-2">•</span>
                <span>Specialized in Ctrl+C, Ctrl+V Architecture</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Education Item 2 */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <div className="sm:w-1/4">
            <p className="text-gray-400 text-sm font-mono leading-relaxed">
              Sep 2017–Mar 2019
              <span className="text-xs block italic text-gray-500">
                (2 years of suffering)
              </span>
            </p>
          </div>
          <div className="sm:w-3/4">
            <h2 className="font-bold text-lg sm:text-xl md:text-2xl mb-1 font-sans tracking-tight text-gray-200">
              Cambridge International A Level, Commerce
            </h2>
            <p className="text-gray-400 text-sm mb-3 font-mono">
              Lyceum International School, Nugegoda
              <span className="text-xs ml-1 italic text-gray-500">
                (aka teenage detention center)
              </span>
            </p>
            <div className="text-gray-400 text-sm leading-relaxed space-y-2 ml-4 font-mono">
              <div className="flex items-start">
                <span className="mr-2">•</span>
                <span>Specialized in last-minute cramming</span>
              </div>
              <div className="flex items-start">
                <span className="mr-2">•</span>
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
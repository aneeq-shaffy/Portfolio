import { FaExternalLinkAlt } from "react-icons/fa";

const Education = () => {
  return (
    <section className="mb-[80px]">
      <div>
        <h1 className="text-2xl mb-1 max-md:text-xl">
          🎓 <strong className="font-semi-bold"> Education</strong>
        </h1>
        <hr className="border-t-2 border-[rgb(179,186,198)] mb-[10px]" />

        {/* Education Item 1 */}
        <div className="mb-[10px]">
          <div className="flex flex-row justify-start max-md:flex-col">
            <div className="md:flex-3 md:mr-[300px] max-md:mb-2">
              <p className="text-[rgb(179,186,198)] md:items-center max-md:text-sm">
                Feb 2021-Jun 2024
              </p>
            </div>
            <div>
              <h1 className="items-center max-md:text-lg">
                <strong className="font-semi-bold">
                  BSc (Hons) in Information Technology
                </strong>
              </h1>
              <p className="text-[rgb(179,186,198)] mb-[12px] max-md:text-sm">
                Sri Lanka Institute of Information Technology
              </p>
              <div className="flex items-center">
                <div className="whitespace-nowrap ml-6 text-sm max-md:text-xs">
                  • Was the Batch Representative
                </div>
                <a
                  href="/batch-rep-cert.png"
                  target="_blank"
                  className="text-[rgb(179,186,198)] hover:text-white ml-1"
                >
                  <FaExternalLinkAlt className="w-[12px] transform translate-y-[1px]" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Education Item 2 */}
        <div className="mb-[10px]">
          <div className="flex flex-row justify-start max-md:flex-col">
            <div className="md:flex-3 md:mr-[300px] max-md:mb-2">
              <p className="text-[rgb(179,186,198)] md:items-center max-md:text-sm">
                Sep 2017-Mar 2019
              </p>
            </div>
            <div>
              <h1 className="items-center max-md:text-lg">
                <strong className="font-semi-bold">
                  Cambridge International A Level, Commerce
                </strong>
              </h1>
              <p className="text-[rgb(179,186,198)] mb-[12px] max-md:text-sm">
                Lyceum International School, Nugegoda
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

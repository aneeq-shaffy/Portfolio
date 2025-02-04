import { FaExternalLinkAlt } from "react-icons/fa";


const Education = () => {
  return (
    <section className="mb-[80px]">
      <div>
        <h1 className="text-2xl mb-1">
          🎓 <strong className="font-semi-bold"> Education</strong>
        </h1>
        <hr className="border-t-2 border-[rgb(179,186,198)] mb-[10px]" />
        <div className="mb-[10px]">
          <div className="flex flex-row justify-start">
            <div>
              <p className="flex-3 mr-[300px] text-[rgb(179,186,198)] items-center">
                Feb 2021-Jun 2024
              </p>
            </div>
            <div>
              <h1 className="flex-1 items-center ">
                <strong className="font-semi-bold ">
                  BSc (Hons) in Information Technology
                </strong>
              </h1>

              <p className=" text-[rgb(179,186,198)] mb-[12px]">
              Sri Lanka Institute of Information Technology
              </p>

              <ul className=" flex list-disc  text-[rgb(179,186,198)]">
                <div className="whitespace-nowrap ml-6 text-sm">
                • Was the Batch Representative
                </div>
                <div>
                <a href="/batch-rep-cert.png" target="_blank" className="text-[rgb(179,186,198)] hover:text-white "> <FaExternalLinkAlt  className="ml-[8px] w-[12px] transform translate-y-[1px] " /></a>
                </div>
                 
              
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-[10px]">
          <div className="flex flex-row justify-start">
            <div>
              <p className="flex-3 mr-[300px] text-[rgb(179,186,198)] items-center">
                Sep 2017-Mar 2019
              </p>
            </div>
            <div >
              <h1 className="flex-1 items-center ">
                <strong className="font-semi-bold ">
                Cambridge International A Level, Commerce
                </strong>
              </h1>

              <p className=" text-[rgb(179,186,198)] mb-[12px]">
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

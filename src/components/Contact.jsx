import React from "react";

const Contact = () => {
  return (
    <section className="mb-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl mb-2 flex items-center font-sans font-bold tracking-tight">
          <span className="mr-2 text-teal-300">📞</span>
          Contact
        </h1>
        <hr className="border-t-2 border-gray-600 mt-3 mb-6" />
      </div>

      <div className="max-w-2xl">
        <address className="text-[rgb(179,186,198)] text-sm sm:text-base leading-relaxed not-italic">
          <p>
            The best way to contact me is via email at{" "}
            <a
              href="mailto:aneeqshaffy7@gmail.com"
              target="_blank"
              rel="nofollow"
              className="text-[rgb(179,186,198)] underline hover:text-white transition-all duration-200"
              aria-label="Email Aneeq Shaffy"
            >
              aneeqshaffy7@gmail.com
            </a>
            . Alternatively, you can reach me directly at{" "}
            <a
              href="tel:+94762844725"
              className="text-[rgb(179,186,198)] underline hover:text-white transition-all duration-200"
              aria-label="Call Aneeq Shaffy"
            >
              076-284-4725
            </a>
            .
          </p>
        </address>
      </div>
    </section>
  );
};

export default Contact;
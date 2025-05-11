import React from "react";

const Contact = () => {
  return (
    <section className="mb-[80px]">
      <div className="mb-4">
        <h1 className="text-2xl sm:text-3xl mb-2 flex items-center">
          <span className="mr-2">📞</span>
          <strong className="font-semibold">
            Desperation Hotline
          </strong>
        </h1>
        <p className="text-[rgb(179,186,198)] text-sm italic mb-1">
          (accepting job offers, therapy, or vibes)
        </p>
        <hr className="border-t-2 border-[rgb(179,186,198)] mt-3 mb-4" />
      </div>

      <div>
        <p className="text-[rgb(179,186,198)] text-sm sm:text-base leading-relaxed">
          For urgent cries for help (or job offers, preferably full-stack), ping me at:
          <br /><br />
          Email:{" "}
          <a
            href="mailto:aneeqshaffy7@gmail.com"
            target="_blank"
            className="text-[rgb(179,186,198)] underline hover:text-white"
          >
            aneeqshaffy7@gmail.com
          </a>
          <br /><br />
          Mobile:{" "}
          <a
            href="tel:+94762844725"
            className="text-[rgb(179,186,198)] underline hover:text-white"
          >
            076-284-4725
          </a>{" "}
          (Signal/WhatsApp, no voicemails - I'm allergic)
          <br /><br />
          <span className="text-xs">
            *Responses delivered between panic attacks, usually within 1 business meltdown
          </span>
        </p>
      </div>
    </section>
  );
};

export default Contact;
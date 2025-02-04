import React from 'react';

const Contact = () => {
  return (
    <section className="mb-[80px]">
      <div>
        <h1 className="text-2xl mb-1">
          📞 <strong className="font-semibold">Contact</strong>
        </h1>
        <hr className="border-t-2 border-[rgb(179,186,198)] mb-[10px]" />
        <p className="text-[rgb(179,186,198)]">
          The best way to contact me is via email at {""}
          <a
            href="mailto:aneeqshaffy7@gmail.com"
            target="_blank"
            className="text-[rgb(179,186,198)] underline hover:text-white"
          >
            aneeqshaffy7@gmail.com
          </a>
          . Alternatively, you can reach me directly at {""} 
          <a
            href="tel:+94762844725"
            className="text-[rgb(179,186,198)]  hover:text-white"
          >
            076-284-4725
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default Contact;

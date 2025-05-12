import React from "react";

const Footer = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div className="flex flex-col py-4 w-full">
        <p className="text-[rgb(179,186,198)] text-sm text-center max-md:text-xs">
          © {new Date().getFullYear()} Aneeq Shaffy - <span className="italic">All bugs guaranteed organic</span>
        </p>
        <p className="text-[rgb(179,186,198)] text-xs text-center mt-2 opacity-75">
          *No developers were harmed in the making of this website (physically, at least)
        </p>
      </div>
    </section>
  );
};

export default Footer;
import React from 'react';

const Footer = () => {
  return (
    <div className="flex flex-col py-8 border-t border-[rgb(179,186,198)]/20">
      <p className="text-[rgb(179,186,198)] mb-2 text-center text-sm max-md:text-xs">
        Loosely designed during <strong>existential crises</strong> and coded with{' '}
        <strong>copious caffeine</strong> and <strong>questionable life choices</strong>.
        <br />
        Built with <strong>Next.js</strong> (for the hype) and <strong>Tailwind CSS</strong> (because I'm lazy).
      </p>
      <p className="text-[rgb(179,186,198)] text-sm text-center max-md:text-xs">
        © {new Date().getFullYear()} Aneeq Shaffy - <span className="italic">All bugs guaranteed organic</span>
      </p>
      <p className="text-[rgb(179,186,198)] text-xs text-center mt-2 opacity-75">
        *No developers were harmed in the making of this website (physically, at least)
      </p>
    </div>
  );
};

export default Footer;
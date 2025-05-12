import React from "react";

const Present = () => {
  return (
    <section className="mb-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl mb-2 flex items-center font-sans font-bold tracking-tight">
          <span className="mr-2 text-teal-300">📅</span>
          Present
        </h1>
        <hr className="border-t-2 border-gray-600 mt-3 mb-6" />
      </div>

      <div>
        <p className="text-gray-400 text-sm sm:text-base lg:text-lg font-mono leading-relaxed">
          I’m currently grinding Next.js apps into the React chaos, stuck between clean code dreams and a vibe-coding virus that spawns bugs like roaches. My code’s half-decent—React, JavaScript, CSS, with some Node.js flair—but my cover letters double as psychological horror stories, each one a cry for help wrapped in corporate lingo. I’m fueled by bad coffee, anxiety, and an escalating fear of adult responsibilities, escaping jobophobia one panicked “submit” click at a time.
        </p>
      </div>
    </section>
  );
};

export default Present;
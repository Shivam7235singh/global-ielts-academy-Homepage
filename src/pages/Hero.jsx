import React from "react";

const Hero = () => {
  return (
    
    <div className="bg-indigo-900 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 flex flex-col lg:flex-row items-center">
        
        {/* Left Content (Text) */}
        <div className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight">
            Achieve Your <span className="text-yellow-400">Dream IELTS Band Score</span> 🎯
          </h1>
          <p className="mt-6 text-xl text-indigo-200">
            We help students crack IELTS with expert guidance, full-length practice tests, and personalized feedback from certified tutors.
          </p>
          <div className="mt-8 sm:mt-10">
            <a
              href="/courses"
              className="inline-block px-8 py-4 bg-yellow-500 text-indigo-900 text-lg font-bold rounded-xl shadow-2xl transition duration-300 transform hover:scale-105 hover:bg-yellow-400"
            >
              Enroll & Start Today!
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img
            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-2xl"
            src="/hero-image.jpg"
            alt="IELTS Preparation Success"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
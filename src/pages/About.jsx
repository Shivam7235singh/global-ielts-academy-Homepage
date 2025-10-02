import React from "react";

const About = () => {
  return (
    // Add ID for Navbar linking and adjust vertical padding
    <section id="about" className="py-20 sm:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Subtitle */}
        <p className="text-lg font-semibold text-yellow-600 uppercase tracking-wider">
          Our Mission & Values
        </p>

        {/* Main Heading */}
        <h2 className="mt-2 text-4xl sm:text-5xl font-extrabold text-indigo-900">
          The Key to Your Global Future
        </h2>

        {/* Core Content */}
        <div className="mt-8 text-left space-y-6 text-lg text-gray-700">
          <p>
            <span className='font-bold'>IELTSPro</span> is not just an institute; we are your dedicated partners in achieving your international academic and professional goals. Founded by a team of certified examiners and top-scoring alumni, our platform is built on the philosophy that <span className='font-bold'>personalized feedback</span> is the fastest route to success.
          </p>
          <p>
            We blend cutting-edge AI sentiment analysis (including our unique multimodal chatbot) with <span className='font-bold'>human-centric teaching methods</span>. This ensures every weakness is identified and addressed with a tailored strategy, allowing our students to consistently hit <span className='font-bold'>Band 7+ scores</span> on their first attempt.
          </p>
        </div>

        {/* Call to Action (Optional, for emphasis) */}
        <div className="mt-10">
            <a 
                href="/about" // Could link to a separate, more detailed About page later
                className="text-indigo-600 font-semibold hover:text-indigo-800 transition duration-300 border-b-2 border-indigo-600"
            >
                Meet Our Certified Tutors & Team &rarr;
            </a>
        </div>
      </div>
    </section>
  );
};

export default About;
import React from "react";
import { FaMicrophone, FaBookOpen, FaRobot, FaUserTie } from "react-icons/fa";

const courses = [
  {
    icon: <FaMicrophone className="text-amber-500 text-4xl" />,
    title: "Speaking Practice",
    description: "Enhance your fluency and pronunciation with real-time speaking practice sessions.",
  },
  {
    icon: <FaBookOpen className="text-amber-500 text-4xl" />,
    title: "Mock Tests",
    description: "Get exam-ready with our full-length IELTS mock tests and instant feedback.",
  },
  {
    icon: <FaRobot className="text-amber-500 text-4xl" />,
    title: "AI Band Score Predictor",
    description: "AI-powered evaluation that predicts your IELTS band score with accuracy.",
  },
  {
    icon: <FaUserTie className="text-amber-500 text-4xl" />,
    title: "Expert Mentorship",
    description: "Learn from certified IELTS trainers and get personalized study plans.",
  },
];

const Courses = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-extrabold text-gray-900">
          Our Popular Courses
        </h2>
        <p className="mt-2 text-gray-600">
          Choose from a variety of courses designed to help you succeed in IELTS.
        </p>

        {/* Cards */}
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <div className="flex justify-center">{course.icon}</div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{course.title}</h3>
              <p className="mt-2 text-gray-600">{course.description}</p>
              <button className="mt-4 px-4 py-2 bg-amber-500 text-white rounded-md hover:bg-amber-600 transition">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;

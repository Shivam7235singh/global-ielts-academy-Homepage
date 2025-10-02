import React from 'react'

const Features = () => {
  return (
    <div className="py-10 bg-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-6">Why Choose Us?</h2>
        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="text-amber-500 mr-2">✔️</span>
            <span>Expert Instructors with Proven Track Records</span>
          </li>
          <li className="flex items-start">
            <span className="text-amber-500 mr-2">✔️</span>
            <span>Comprehensive Study Materials and Resources</span>
          </li>
          <li className="flex items-start">
            <span className="text-amber-500 mr-2">✔️</span>
            <span>Flexible Scheduling and Personalized Coaching</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Features

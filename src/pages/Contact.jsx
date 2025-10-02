import React from "react";

const Contact = () => {
  return (
    <section className="py-20 sm:py-28 bg-gray-50" id="contact">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-indigo-900">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Have questions about IELTS preparation, our courses, or enrollment?
            We’d love to help.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          
          {/* Contact Information (Left Card) */}
          <div className="w-full lg:w-1/2 flex-1 shadow-2xl p-8 bg-white rounded-xl border flex flex-col justify-between">
            <h3 className="text-2xl font-semibold text-indigo-800 mb-6 text-center">
              Direct Contact
            </h3>

            {/* Email */}
            <div className="flex items-center gap-3 mb-4">
              <svg
                className="h-6 w-6 text-yellow-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <a
                href="mailto:support@ieltspro.com"
                className="text-lg text-gray-700 hover:text-indigo-700 transition"
              >
                support@ieltspro.com
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3 mb-4">
              <svg
                className="h-6 w-6 text-yellow-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.128a11.042 11.042 0 005.516 5.516l1.128-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <a
                href="tel:+15551234567"
                className="text-lg text-gray-700 hover:text-indigo-700 transition"
              >
                +1 (555) 123-4567
              </a>
            </div>

            {/* Address */}
            <div className="flex items-start gap-3">
              <svg
                className="h-6 w-6 text-yellow-600 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5s-3 1.343-3 3 1.343 3 3 3zm0 0c4.418 0 8 3.582 8 8H4c0-4.418 3.582-8 8-8z"
                />
              </svg>
              <p className="text-lg text-gray-700 leading-relaxed">
                IELTSPro Global HQ <br />
                123 International Blvd, Suite 400 <br />
                Learning City, LC 90210
              </p>
            </div>
          </div>

          {/* Contact Form (Right Card) */}
          <div className="w-full lg:w-1/2 flex-1 shadow-2xl p-8 bg-white rounded-xl border flex flex-col justify-between">
            <h3 className="text-2xl font-semibold text-indigo-800 mb-6 text-center">
              Send Us a Message
            </h3>
            <form action="#" method="POST" className="space-y-4 flex-grow flex flex-col">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 p-3"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 p-3"
                />
              </div>
              <div className="flex-grow">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Inquiry
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="mt-1 block w-full h-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 p-3"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 mt-4"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-amber-500 text-gray-900 ">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo + Tagline */}
        <div>
          <h2 className="text-2xl font-bold">BrightFuture IELTS</h2>
          <p className="mt-2 text-sm">
            Helping students achieve their dream IELTS scores with expert guidance and practice.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/courses" className="hover:underline">Courses</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p>Email: info@brightfutureielts.com</p>
          <p>Phone: +91 98765 XXXXX</p>
          <p>Address: 123 Learning St, Kanpur</p>

          <div className="flex space-x-4 mt-4 text-xl">
            <a href="#" className="hover:text-white"><FaFacebook /></a>
            <a href="#" className="hover:text-white"><FaInstagram /></a>
            <a href="#" className="hover:text-white"><FaTwitter /></a>
            <a href="#" className="hover:text-white"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      <div className="bg-amber-600 py-4 text-center text-sm">
        © {new Date().getFullYear()} BrightFuture IELTS. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

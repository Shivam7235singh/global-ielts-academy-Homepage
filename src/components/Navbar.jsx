import{ useState } from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-amber-500 shadow-md z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="block text-2xl font-bold text-gray-900 hover:text-white">BrightFuture IELTS</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex space-x-6">
            <Link to="/about" className="text-gray-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</Link>
            <Link to="/courses" className="text-gray-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Courses</Link>
            <Link to="/contact" className="text-gray-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 hover:text-white focus:outline-none"
            >
              {/* Hamburger Icon */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="sm:hidden bg-amber-400 px-4 pt-2 pb-3 space-y-2">
          <Link to="/about" className="block text-gray-900 hover:text-white">About</Link>
          <Link to="/courses" className="block text-gray-900 hover:text-white">Courses</Link>
          <Link to="/contact" className="block text-gray-900 hover:text-white">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
 
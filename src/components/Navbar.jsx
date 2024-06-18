import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogo = () => {
    navigate("/");
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a
            onClick={handleLogo}
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl font-bold">
              XERO<span className=" text-indigo-500">POSTS</span>
            </span>
          </a>
          <button
            className="md:hidden ml-auto text-gray-900 focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
          <nav
            className={`${
              isOpen ? "flex" : "hidden"
            } md:ml-auto md:mr-auto flex-col md:flex-row md:flex flex-wrap items-center text-base justify-center`}
          >
            <Link
              to="/"
              className={`mr-5 hover:text-gray-900 ${
                location.pathname === "/" ? "text-indigo-500" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/posts"
              className={`mr-5 hover:text-gray-900 ${
                location.pathname === "/posts" ? "text-indigo-500" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              Posts
            </Link>
            <Link
              to="/about"
              className={`mr-5 hover:text-gray-900 ${
                location.pathname === "/about" ? "text-indigo-500" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className={`mr-5 hover:text-gray-900 ${
                location.pathname === "/contact" ? "text-indigo-500" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </nav>
          <Link to="/posts">
            <button className="inline-flex items-center bg-indigo-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 hover:text-black rounded text-base mt-4 md:mt-0">
              Read Posts
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Navbar;

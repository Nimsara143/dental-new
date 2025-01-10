import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-600 text-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold hover:text-blue-300">
          Dentic
        </Link>

        {/* Menu for large screens */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'text-blue-300 underline' : 'hover:text-blue-300'
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? 'text-blue-300 underline' : 'hover:text-blue-300'
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? 'text-blue-300 underline' : 'hover:text-blue-300'
              }
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? 'text-blue-300 underline' : 'hover:text-blue-300'
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? 'text-blue-300 underline' : 'hover:text-blue-300'
              }
            >
              Blog
            </NavLink>

          </li>
          <li>
            <Link
              to="/login"
              className="flex items-center space-x-2 hover:bg-blue-400 text-white px-2np py-1 rounded-md transition-all"
            >
              <FaUserCircle className="text-lg" />
            </Link>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {isMenuOpen && (
        <ul className="md:hidden bg-blue-700 space-y-4 p-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'text-blue-300 underline' : 'hover:text-blue-300'
              }
              onClick={toggleMenu}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? 'text-blue-300 underline' : 'hover:text-blue-300'
              }
              onClick={toggleMenu}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? 'text-blue-300 underline' : 'hover:text-blue-300'
              }
              onClick={toggleMenu}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? 'text-blue-300 underline' : 'hover:text-blue-300'
              }
              onClick={toggleMenu}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? 'text-blue-300 underline' : 'hover:text-blue-300'
              }
              onClick={toggleMenu}
            >
              Blog
            </NavLink>
          </li>
          {/* Temporary Booking Button */}
          <li>
            <Link
              to="/book-appointment"
              className="bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded-md transition-all"
              onClick={toggleMenu}
            >
              Book Appointment
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

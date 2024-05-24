import React, { useState } from 'react';
import {
  FaSearch, FaBars, FaTimes, FaPlaneDeparture,
} from 'react-icons/fa';
import Header from './Header';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <>
      <Header />
      <nav className="bg-custom-orange fixed w-full h-16 z-10 md:top-14 shadow flex items-center">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between">
          <div className="pl-12 flex items-center">
            <a
              className="text-white no-underline hover:no-underline font-bold text-xl lg:text-2xl"
              href="#home"
            >
              <span className="text-red-600">
                <FaPlaneDeparture className="inline" />
              </span>
              {' '}
              Travosy
            </a>
          </div>
          <div className="block lg:hidden pr-4">
            <button
              className="flex items-center p-2 text-white focus:outline-none focus:shadow-outline"
              onClick={handleClick}
              type="button"
              aria-label="Toggle menu"
            >
              {nav ? <FaTimes /> : <FaBars />}
            </button>
          </div>
          <div
            className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${
              nav
                ? 'flex flex-col absolute top-16 left-0 right-0 bg-custom-orange h-screen pl-12'
                : 'hidden'
            }`}
            id="nav-content"
          >
            <ul className="list-reset lg:flex justify-end flex-1 items-center lg:ml-auto mt-4 md:mt-0">
              <li className="mr-3">
                <a
                  className="inline-block py-2 px-4 text-white no-underline hover:text-gray-200"
                  href="#hero"
                >
                  Hero
                </a>
              </li>
              <li className="mr-3">
                <a
                  className="inline-block py-2 px-4 text-white no-underline hover:text-gray-200"
                  href="#listing"
                >
                  Listing
                </a>
              </li>
              <li className="mr-3">
                <a
                  className="inline-block py-2 px-4 text-white no-underline hover:text-gray-200"
                  href="#pages"
                >
                  Pages
                </a>
              </li>
              <li className="mr-3">
                <a
                  className="inline-block py-2 px-4 text-white no-underline hover:text-gray-200"
                  href="#blog"
                >
                  Blog
                </a>
              </li>
              <li className="mr-3">
                <a
                  className="inline-block py-2 px-4 text-white no-underline hover:text-gray-200"
                  href="#contact"
                >
                  Contact Us
                </a>
              </li>
              <li className="mr-3 hidden md:block">
                <button
                  className="inline-block py-2 px-4 text-white no-underline hover:text-gray-200"
                  aria-label="Search"
                  type="button"
                >
                  <FaSearch />
                </button>
              </li>
              <li className="mr-3 hidden md:block">
                <a
                  className="inline-block py-2 px-4 text-white no-underline hover:text-gray-200"
                  href="#profile"
                >
                  <img
                    src="https://img.freepik.com/free-photo/view-woman-holding-cup-coffee\_23-2150698759.jpg?t=st=1716551141~exp=1716554741~hmac=cfbefe3b0c713e4df01894045a0dc091cb740ad05aa1e58044f517f03f9cd7c6&w=740"
                    alt="Profile"
                    className="rounded-full w-12"
                    aria-label="Profile"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

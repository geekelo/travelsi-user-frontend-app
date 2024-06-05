import React, { useState, useEffect } from 'react';
import {
  FaSearch, FaBars, FaTimes, FaPlaneDeparture,
} from 'react-icons/fa';
import Header from './Header';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollY]);

  return (
    <>
      <Header />

      <nav
        className={`fixed w-full h-16 z-10 flex items-center px-7 md:px-14 transition-all duration-300 ease-in-out ${
          scrollY > 56
            ? 'bg-custom-orange text-gray-600 top-0'
            : 'bg-transparent text-gray-600 md:top-14'
        }`}
      >
        <div className="w-full container flex flex-wrap items-center justify-between">
          <div className="flex items-center">
            <a
              className="no-underline hover:no-underline font-bold text-xl lg:text-2xl"
              href="#home"
            >
              <span className="text-red-600">
                <FaPlaneDeparture className="inline" />
              </span>
              {' '}
              Travelsi
            </a>
          </div>
          <div className="flex items-center gap-2">
            <div className="block lg:hidden order-3">
              <button
                className="flex items-center text-2xl  text-gray-600 focus:outline-none focus:shadow-outline"
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
                  ? 'flex flex-col absolute top-16 left-0 right-0 bg-red-500 text-white h-screen pl-4'
                  : 'hidden'
              }`}
              id="nav-content"
            >
              <ul className="list-reset lg:flex justify-end flex-1 items-center lg:ml-auto mt-4 md:mt-0 text-2xl md:text-lg">
                <li className="mr-3">
                  <a
                    className="inline-block py-2 px-4 no-underline hover:text-white-400 md:hover:text-red-600"
                    href="#hero"
                  >
                    Hero
                  </a>
                </li>
                <li className="mr-3">
                  <a
                    className="inline-block py-2 px-4 no-underline hover:text-white-400 md:hover:text-red-600"
                    href="#listing"
                  >
                    Listing
                  </a>
                </li>
                <li className="mr-3">
                  <a
                    className="inline-block py-2 px-4 no-underline hover:text-white-400 md:hover:text-red-600"
                    href="#pages"
                  >
                    Pages
                  </a>
                </li>
                <li className="mr-3">
                  <a
                    className="inline-block py-2 px-4 no-underline hover:text-white-400 md:hover:text-red-600"
                    href="#blog"
                  >
                    Blog
                  </a>
                </li>
                <li className="mr-3">
                  <a
                    className="inline-block py-2 px-4 no-underline hover:text-white-400 md:hover:text-red-600"
                    href="#contact"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <button
                className="inline-block pr-2 no-underline text-xl md:text-lg hover:text-white-400 md:hover:text-red-600"
                aria-label="Search"
                type="button"
              >
                <FaSearch />
              </button>
            </div>
            <div>
              <a
                className="inline-block no-underline hover:text-white-400 md:hover:text-red-600"
                href="#profile"
              >
                <img
                  src="https://img.freepik.com/free-photo/view-woman-holding-cup-coffee\_23-2150698759.jpg?t=st=1716551141~exp=1716554741~hmac=cfbefe3b0c713e4df01894045a0dc091cb740ad05aa1e58044f517f03f9cd7c6&w=740"
                  alt="Profile"
                  className="rounded-md w-8 md:w-9 border-2 border-red-600"
                  aria-label="Profile"
                />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

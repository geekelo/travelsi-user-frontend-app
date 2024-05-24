import React from 'react';
import {
  FaFacebookF, FaInstagram, FaTwitter, FaPhone,
} from 'react-icons/fa';
import { MdEmail, MdAccessTime, MdLocationOn } from 'react-icons/md';

const Header = () => (
  <div className="bg-gray-900 text-white justify-between items-center p-4 hidden md:flex">
    <div className="flex items-center space-x-4">
      <div className="flex items-center space-x-1">
        <MdAccessTime className="text-red-500" />
        <span>Mon–Sat: 9am to 6pm</span>
      </div>
      <div className="flex items-center space-x-1">
        <MdLocationOn className="text-red-500" />
        <span>Houston, USA 485</span>
      </div>
    </div>
    <div className="flex items-center space-x-4">
      <div className="flex items-center space-x-1">
        <MdEmail className="text-red-500" />
        <span>contact@example.com</span>
      </div>
      <div className="flex space-x-3">
        <a
          href="https://www.facebook.com"
          className="text-white hover:text-gray-400"
          aria-label="Facebook"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com"
          className="text-white hover:text-gray-400"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.twitter.com"
          className="text-white hover:text-gray-400"
          aria-label="Twitter"
        >
          <FaTwitter />
        </a>
        <a
          href="tel:+123456789"
          className="text-white hover:text-gray-400"
          aria-label="Phone"
        >
          <FaPhone />
        </a>
      </div>
    </div>
  </div>
);

export default Header;

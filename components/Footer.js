import React from 'react';
import { FaFacebook, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-primary to-secondary text-white py-12 mt-16">
      <div className="container mx-auto px-4 text-center">
        {/* Academy Name and Tagline */}
        <div className="animate-fade-in">
          <p className="text-3xl font-bold mb-2">Amonto Girls Academy</p>
          <p className="text-lg italic text-gray-200">We build for the future</p>
        </div>

        {/* Contact Details */}
        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12 my-8 animate-fade-in-up">
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt className="text-xl" />
            <span>Jebel Amianin, Juba South Sudan</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaPhone className="text-xl" />
            <span>+211 (0) 923 666 022</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaEnvelope className="text-xl" />
            <a
              href="mailto:amontogirlsacademy2024@gmail.com"
              className="hover:text-accent transition duration-300 hover:underline"
            >
              amontogirlsacademy2024@gmail.com
            </a>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-8 my-8 animate-fade-in-up">
          <a
            href="https://web.facebook.com/profile.php?id=61550269624961"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition duration-300 transform hover:scale-110"
          >
            <FaFacebook size={28} />
          </a>
        </div>

        {/* Legal Links */}
        <div className="flex justify-center space-x-6 my-6 animate-fade-in-up">
          <a
            href="#"
            className="hover:text-accent transition duration-300 hover:underline"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="hover:text-accent transition duration-300 hover:underline"
          >
            Terms of Service
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-6 animate-fade-in">
          <p className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()} Amonto Girls Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
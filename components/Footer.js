import React from 'react';
import { FaFacebook, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8 mt-8">
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold">Amonto Girls Academy</p>
        <p className="text-sm italic mb-4">We build for the future</p>

        {/* Contact Details */}
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-6">
          <div className="flex items-center">
            <FaMapMarkerAlt className="mr-2" />
            <span>Jebel Amianin, Juba South Sudan</span>
          </div>
          <div className="flex items-center">
            <FaPhone className="mr-2" />
            <span>+211 (0) 923 666 022</span>
          </div>
          <div className="flex items-center">
            <FaEnvelope className="mr-2" />
            <a href="mailto:amontogirlsacademy2024@gmail.com" className="hover:text-accent transition duration-300">
              amontogirlsacademy2024@gmail.com
            </a>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://web.facebook.com/profile.php?id=61550269624961"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition duration-300"
          >
            
           <FaFacebook size={24} />
          </a>
        </div>

        {/* Legal Links */}
        <div className="mt-4 space-x-4">
          <a href="#" className="hover:text-accent transition duration-300">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-accent transition duration-300">
            Terms of Service
          </a>
        </div>

        {/* Copyright */}
        <p className="mt-4 text-sm">&copy; {new Date().getFullYear()} Amonto Girls Academy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
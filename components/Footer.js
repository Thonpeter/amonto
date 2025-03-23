"use client"
import React, { useEffect, useState } from 'react';
import { FaFacebook, FaMapMarkerAlt, FaPhone, FaEnvelope, FaHeart, FaChevronUp } from 'react-icons/fa';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      setIsVisible(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative">
      {/* Wavy Top Border */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-0 transform -translate-y-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="#4F46E5"
            opacity=".15"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            fill="#4F46E5"
            opacity=".25"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            fill="#4F46E5"
            opacity=".35"
          ></path>
        </svg>
      </div>

      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {/* School Info */}
            <div className="transform transition duration-500 hover:translate-y-[-8px]">
              <div className="flex flex-col items-center md:items-start space-y-4">
                <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
                  Amonto Girls Academy
                </h2>
                <p className="text-lg italic text-indigo-100 font-light">We build for the future</p>
                <div className="mt-4 h-1 w-24 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full"></div>
                <p className="mt-4 text-indigo-100">
                  Empowering young women through quality education, leadership skills, and community engagement.
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="transform transition duration-500 hover:translate-y-[-8px]">
              <h3 className="text-xl font-bold mb-6 uppercase tracking-wider">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="inline-block text-indigo-100 hover:text-white transition-all duration-300 hover:translate-x-2">
                    <span className="flex items-center">
                      <span className="mr-2 h-px w-4 bg-indigo-300"></span>
                      About Us
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#" className="inline-block text-indigo-100 hover:text-white transition-all duration-300 hover:translate-x-2">
                    <span className="flex items-center">
                      <span className="mr-2 h-px w-4 bg-indigo-300"></span>
                      Admissions
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#" className="inline-block text-indigo-100 hover:text-white transition-all duration-300 hover:translate-x-2">
                    <span className="flex items-center">
                      <span className="mr-2 h-px w-4 bg-indigo-300"></span>
                      Academic Programs
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#" className="inline-block text-indigo-100 hover:text-white transition-all duration-300 hover:translate-x-2">
                    <span className="flex items-center">
                      <span className="mr-2 h-px w-4 bg-indigo-300"></span>
                      Student Life
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#" className="inline-block text-indigo-100 hover:text-white transition-all duration-300 hover:translate-x-2">
                    <span className="flex items-center">
                      <span className="mr-2 h-px w-4 bg-indigo-300"></span>
                      News & Events
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="transform transition duration-500 hover:translate-y-[-8px]">
              <h3 className="text-xl font-bold mb-6 uppercase tracking-wider">Contact Us</h3>
              <div className="space-y-4">
                <div className="group flex items-start space-x-3 transition duration-300">
                  <div className="bg-white bg-opacity-20 p-2 rounded-lg group-hover:bg-opacity-30">
                    <FaMapMarkerAlt className="text-xl text-white" />
                  </div>
                  <span className="text-indigo-100">Jebel Amianin, Juba South Sudan</span>
                </div>

                <div className="group flex items-start space-x-3 transition duration-300">
                  <div className="bg-white bg-opacity-20 p-2 rounded-lg group-hover:bg-opacity-30">
                    <FaPhone className="text-xl text-white" />
                  </div>
                  <span className="text-indigo-100">+211 (0) 923 666 022</span>
                </div>

                <div className="group flex items-start space-x-3 transition duration-300">
                  <div className="bg-white bg-opacity-20 p-2 rounded-lg group-hover:bg-opacity-30">
                    <FaEnvelope className="text-xl text-white" />
                  </div>
                  <a
                    href="mailto:amontogirlsacademy2024@gmail.com"
                    className="text-indigo-100 hover:text-white transition-all duration-300 hover:underline"
                  >
                    amontogirlsacademy2024@gmail.com
                  </a>
                </div>

                {/* Social Media */}
                <div className="mt-6 pt-4 border-t border-indigo-400 border-opacity-30">
                  <h4 className="text-sm uppercase tracking-wider mb-3">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a
                      href="https://web.facebook.com/profile.php?id=61550269624961"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white bg-opacity-20 p-3 rounded-full transition-all duration-300 hover:bg-opacity-30 hover:scale-110"
                    >
                      <FaFacebook className="text-xl" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="mt-16 bg-white bg-opacity-10 rounded-2xl p-8 backdrop-filter backdrop-blur-sm border border-white border-opacity-10 shadow-xl transform hover:translate-y-[-5px] transition duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
                <p className="text-indigo-100">Subscribe to our newsletter for news, events, and updates.</p>
              </div>
              <div>
                <form className="flex flex-col sm:flex-row">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-grow py-3 px-4 bg-white bg-opacity-20 rounded-lg sm:rounded-r-none border border-white border-opacity-10 text-white placeholder-indigo-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-30"
                  />
                  <button
                    type="submit"
                    className="mt-3 sm:mt-0 py-3 px-6 bg-white text-indigo-700 font-semibold rounded-lg sm:rounded-l-none transform hover:translate-y-[-2px] transition duration-300 hover:shadow-lg"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="mt-12 pt-8 border-t border-indigo-400 border-opacity-30 flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <p className="text-sm text-indigo-100">
                &copy; {new Date().getFullYear()} Amonto Girls Academy. All rights reserved.
              </p>
            </div>

            <div className="flex space-x-6">
              <a href="#" className="text-sm text-indigo-100 hover:text-white transition duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-indigo-100 hover:text-white transition duration-300">
                Terms of Service
              </a>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <p className="text-sm text-indigo-200 flex items-center">
              Crafted with <FaHeart className="mx-1 text-pink-400" /> by Thon Peter Mawut 
              <span className="mx-1">|</span> 
              <span className="italic">"Powered by curiosity and code."</span>
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed right-8 bottom-8 p-4 bg-indigo-600 text-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 hover:bg-indigo-700 ${
          isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <FaChevronUp />
      </button>
    </footer>
  );
};

export default Footer;
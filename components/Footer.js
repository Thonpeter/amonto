"use client";
import React, { useEffect, useState } from 'react';
import { FaFacebook, FaMapMarkerAlt, FaPhone, FaEnvelope, FaHeart, FaChevronUp, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

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

      <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* School Info */}
            <div className="transform transition duration-500 hover:translate-y-[-8px]">
              <div className="flex flex-col items-center md:items-start space-y-4">
                <h2 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
                  Amonto Girls Academy
                </h2>
                <p className="text-lg italic text-indigo-100 font-light">We build for the future</p>
                <div className="mt-4 h-1 w-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
                <p className="mt-4 text-indigo-100 text-center md:text-left">
                  Empowering young women through quality education, leadership skills, and community engagement.
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="transform transition duration-500 hover:translate-y-[-8px]">
              <h3 className="text-xl font-bold mb-6 uppercase tracking-wider text-white">Quick Links</h3>
              <ul className="space-y-3">
                {['About Us', 'Admissions', 'Academic Programs', 'Student Life', 'News & Events'].map((link, index) => (
                  <li key={index}>
                    <a href="#" className="inline-block text-indigo-100 hover:text-white transition-all duration-300 hover:translate-x-2">
                      <span className="flex items-center">
                        <span className="mr-2 h-px w-4 bg-indigo-300"></span>
                        {link}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="transform transition duration-500 hover:translate-y-[-8px]">
              <h3 className="text-xl font-bold mb-6 uppercase tracking-wider text-white">Contact Us</h3>
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
                  <h4 className="text-sm uppercase tracking-wider mb-3 text-white">Follow Us</h4>
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

            {/* Newsletter */}
            <div className="transform transition duration-500 hover:translate-y-[-8px]">
              <h3 className="text-xl font-bold mb-6 uppercase tracking-wider text-white">Stay Updated</h3>
              <p className="text-indigo-100 mb-4">Subscribe to our newsletter for news, events, and updates.</p>
              <form className="flex flex-col space-y-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="py-3 px-4 bg-white bg-opacity-20 rounded-lg border border-white border-opacity-10 text-white placeholder-indigo-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-30"
                />
                <button
                  type="submit"
                  className="py-3 px-6 bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-semibold rounded-lg transform hover:translate-y-[-2px] transition duration-300 hover:shadow-lg"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Creator Section */}
          <div className="mt-16 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl p-8 backdrop-filter backdrop-blur-sm border border-white border-opacity-10">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center space-x-6 mb-6 md:mb-0">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 p-1">
                    <div className="w-full h-full rounded-full bg-gray-800 overflow-hidden">
                      <img
                        src="/facilities/thon.jpg"
                        alt="Thon Peter Mawut"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-blue-600 rounded-full p-1">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
                      <FaHeart className="text-xs text-white" />
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Thon Peter Mawut</h4>
                  <p className="text-indigo-200">Computer Science Teacher & Developer, AGASS</p>
                  <p className="text-indigo-300 text-sm italic">"Empowering the next generation through technology and education"</p>
                </div>
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
              <a href="#" className="text-sm text-indigo-100 hover:text-white transition duration-300">
                Contact
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed right-8 bottom-8 p-4 bg-gradient-to-r from-yellow-500 to-orange-600 text-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
      >
        <FaChevronUp />
      </button>
    </footer>
  );
};

export default Footer;
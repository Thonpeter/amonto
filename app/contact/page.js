'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook } from 'react-icons/fa';

export default function Contact() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="relative min-h-screen bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url('/gallery/image (1).jpg')" }}>
      {/* Dark Overlay with Animated Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/70 to-black/90 backdrop-blur-sm animate-gradient-xy"></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Main Title */}
        <motion.h1
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={fadeIn}
          custom={0}
          className="text-5xl sm:text-7xl font-extrabold mb-8 text-center bg-gradient-to-r from-accent to-accent-dark bg-clip-text text-transparent"
        >
          Contact Us
        </motion.h1>

        {/* Contact Details and Form Section */}
        <motion.div
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={fadeIn}
          custom={1}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Contact Details Card */}
          <div className="relative p-8 rounded-3xl shadow-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 hover:shadow-3xl">
            <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/gallery/image (16).jpg')" }}></div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Get in Touch</h2>
            <p className="text-lg text-white/80 mb-6">For any inquiries, please reach out to us at:</p>
            <div className="space-y-6">
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-accent mr-4 text-2xl" />
                <span className="text-white/80">Jebel Amianin, Juba South Sudan</span>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-accent mr-4 text-2xl" />
                <span className="text-white/80">+211 (0) 923 666 022</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-accent mr-4 text-2xl" />
                <a href="mailto:amontogirlsacademy2024@gmail.com" className="text-white/80 hover:text-accent transition duration-300">
                  amontogirlsacademy2024@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <FaFacebook className="text-accent mr-4 text-2xl" />
                <a href="https://web.facebook.com/profile.php?id=61550269624961" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-accent transition duration-300">
                  Visit our Facebook Page
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="relative p-8 rounded-3xl shadow-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 hover:shadow-3xl">
            <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/gallery/image (16).jpg')" }}></div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Send Us a Message</h2>
            <form className="space-y-6 relative z-10">
              <div>
                <label htmlFor="name" className="block text-white/80 mb-2">Name</label>
                <input type="text" id="name" className="w-full px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white/80 focus:outline-none focus:ring-2 focus:ring-accent" placeholder="Your Name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-white/80 mb-2">Email</label>
                <input type="email" id="email" className="w-full px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white/80 focus:outline-none focus:ring-2 focus:ring-accent" placeholder="Your Email" />
              </div>
              <div>
                <label htmlFor="message" className="block text-white/80 mb-2">Message</label>
                <textarea id="message" rows="4" className="w-full px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white/80 focus:outline-none focus:ring-2 focus:ring-accent" placeholder="Your Message"></textarea>
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-accent to-accent-dark text-white py-2 px-4 rounded-lg hover:opacity-90 transition-transform duration-300 transform hover:scale-105">
                Send Message
              </button>
            </form>
          </div>
        </motion.div>

        {/* Google Map Section */}
        <motion.div
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={fadeIn}
          custom={2}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Our Location</h2>
          <p className="text-lg text-white/80 mb-6">We are located in Jebel Amianin, Juba South Sudan. Feel free to visit us or contact us for more information.</p>
          <div className="rounded-3xl shadow-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.597187237208!2d31.55821531533032!3d4.851857096500052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x171782b3b3b3b3b3%3A0x171782b3b3b3b3b3b3!2sJebel%20Amianin%2C%20Juba%2C%20South%20Sudan!5e0!3m2!1sen!2sus!4v1631234567890!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-3xl"
            ></iframe>
          </div>
        </motion.div>

        {/* Decorative Floating Images */}
        <motion.img
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={fadeIn}
          custom={3}
          src="/gallery/image (16).jpg"
          className="absolute top-10 left-10 w-24 h-24 rounded-full opacity-60"
          alt="Floating decor"
        />
        <motion.img
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={fadeIn}
          custom={4}
          src="/gallery/image (8).jpg"
          className="absolute bottom-10 right-10 w-24 h-24 rounded-full opacity-60"
          alt="Floating decor"
        />
      </div>
    </div>
  );
}
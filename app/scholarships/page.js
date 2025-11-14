'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { getRandomGalleryImage } from '../../utils/galleryImages';

export default function Scholarships() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [heroBackground, setHeroBackground] = useState(null);

  useEffect(() => {
    setIsLoaded(true);
    // Set random background image on mount
    setHeroBackground(getRandomGalleryImage());
  }, []);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.7,
        ease: "easeOut",
      },
    }),
  };

  const benefits = [
    {
      icon: "🎓",
      title: "Full Tuition Coverage",
      description: "Covers all tuition fees for four years of secondary education.",
    },
    {
      icon: "📚",
      title: "Learning Materials",
      description: "Access to textbooks, stationery, and other educational resources.",
    },
    {
      icon: "🏠",
      title: "Boarding Facilities",
      description: "Comfortable and secure boarding facilities for all scholars.",
    },
    {
      icon: "👩‍🏫",
      title: "Mentorship Programs",
      description: "Guidance from experienced educators and mentors.",
    },
  ];

  return (
    <div className="pt-24 min-h-screen">
      <div className="pt-24">
        <div className="relative min-h-screen overflow-hidden">
          {/* Hero Background with improved performance */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: heroBackground ? `url('${heroBackground}')` : "url('/gallery/image (1).jpg')",
              filter: "brightness(0.4) contrast(1.2)",
            }}
            aria-hidden="true"
          >
            {/* Optimized gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-indigo-800/70 to-blue-900/80 backdrop-blur-sm"></div>

            {/* Refined particles effect - fewer but more impactful */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute h-1.5 w-1.5 rounded-full bg-white opacity-80 animate-pulse"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 4}s`,
                    animationDuration: `${4 + Math.random() * 6}s`
                  }}
                ></div>
              ))}
            </div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-10">
            {/* Main Header - Refined */}
            <motion.div
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={fadeIn}
              custom={0}
              className="text-center mb-12 md:mb-16"
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-white to-purple-200">
                  Scholarships
                </span>
              </h1>
              <div className="h-1 w-24 md:w-32 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full animate-pulse"></div>
              <p className="mt-4 text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
                Empowering South Sudanese girls through quality education
              </p>
            </motion.div>

            {/* Main Content Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
              {/* Eligibility Section - 7 columns on large screens */}
              <motion.div
                initial="hidden"
                animate={isLoaded ? "visible" : "hidden"}
                variants={fadeIn}
                custom={1}
                className="lg:col-span-7 bg-gradient-to-br from-white/10 to-white/5 text-white p-6 md:p-8 rounded-3xl shadow-xl backdrop-blur-xl border border-white/20 transition-all duration-300 hover:border-white/30 hover:shadow-blue-900/30"
                whileHover={{ scale: 1.01 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">Eligibility Criteria</h2>
                <p className="text-base md:text-lg leading-relaxed font-light mb-4">
                  Any South Sudanese girl who has scored aggregate <span className="font-semibold text-blue-300">4, 5, or 6</span> in the recent PLE results for P7 Uganda is eligible
                  for a four-year secondary scholarship at Amonto Girls Academy Secondary School.
                </p>
                <p className="text-base md:text-lg leading-relaxed font-semibold bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
                  Inform her and spread this message widely!
                </p>

                {/* Call to Action Button - Integrated within eligibility section */}
                <div className="mt-6 md:mt-8 flex justify-start">
                  <motion.a
                    href="/apply"
                    className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-base font-medium rounded-full shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    aria-label="Apply for Scholarship"
                  >
                    Apply for Scholarship
                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </motion.a>
                </div>
              </motion.div>

              {/* Benefits Card Grid - 5 columns on large screens */}
              <motion.div
                initial="hidden"
                animate={isLoaded ? "visible" : "hidden"}
                variants={fadeIn}
                custom={2}
                className="lg:col-span-5 bg-gradient-to-br from-white/10 to-white/5 text-white p-6 md:p-8 rounded-3xl shadow-xl backdrop-blur-xl border border-white/20 transition-all duration-300 hover:border-white/30 hover:shadow-purple-900/30"
                whileHover={{ scale: 1.01 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">Scholarship Benefits</h2>
                <div className="grid grid-cols-1 gap-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial="hidden"
                      animate={isLoaded ? "visible" : "hidden"}
                      variants={fadeIn}
                      custom={index + 3}
                      whileHover={{ x: 5 }}
                      className="flex items-start p-3 rounded-xl hover:bg-white/5 transition-all duration-200"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center mr-3">
                        <span className="text-xl">{benefit.icon}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-blue-100 mb-1">
                          {benefit.title}
                        </h3>
                        <p className="text-sm text-white/80">{benefit.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Success Story Section - Full width, with improved image presentation */}
              <motion.div
                initial="hidden"
                animate={isLoaded ? "visible" : "hidden"}
                variants={fadeIn}
                custom={7}
                className="lg:col-span-12 mt-4 md:mt-6 bg-gradient-to-br from-white/10 to-white/5 text-white p-6 md:p-8 rounded-3xl shadow-xl backdrop-blur-xl border border-white/20 transition-all duration-300 hover:border-white/30 hover:shadow-indigo-900/30"
                whileHover={{ scale: 1.01 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">Success Story</h2>
                <div className="flex flex-col-reverse md:flex-row gap-6 md:gap-8 items-center">
                  <div className="md:w-1/2">
                    <p className="text-base md:text-lg leading-relaxed font-light mb-4">
                      Malang Atem Deng had a great visit and tour of the school with her mother after topping the performances of the Scholarship Test.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed font-light">
                      We congratulate her because hard work surely pays!{" "}
                      <span className="font-semibold bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">We Build For The Future.</span>
                    </p>

                    {/* Testimonial Quote - New element */}
                    <div className="mt-6 p-4 border-l-4 border-blue-400 bg-white/5 rounded-r-lg">
                      <p className="italic text-white/90">"The scholarship has changed my life completely. I'm now confident about my future and excited to inspire other girls in my community."</p>
                      <p className="mt-2 text-sm text-blue-200">- Malang Atem Deng, Scholarship Recipient</p>
                    </div>
                  </div>
                  <div className="md:w-1/2 relative rounded-2xl overflow-hidden shadow-2xl">
                    <div className="aspect-w-4 aspect-h-3 relative">
                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.4 }}
                        className="w-full h-full"
                      >
                        <div className="w-full h-full relative">
                          <img
                            src="/gallery/image (18).jpg"
                            alt="Malang Atem Deng, scholarship recipient"
                            className="w-full h-full object-cover rounded-2xl"
                            style={{ objectPosition: "center" }}
                          />
                          {/* Image overlay gradient for better text contrast */}
                          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent rounded-2xl"></div>

                          {/* Image caption */}
                          <div className="absolute bottom-0 left-0 right-0 p-4">
                            <p className="text-white text-sm font-medium drop-shadow-md">Malang during her school tour</p>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Floating Stats Indicators - New section */}
            <motion.div
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={fadeIn}
              custom={8}
              className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
            >
              {[
                { value: "100+", label: "Scholarships Awarded", icon: "🏆" },
                { value: "98%", label: "Graduation Rate", icon: "📈" },
                { value: "85%", label: "Proceed to University", icon: "🎓" },
                { value: "12", label: "Partner Schools", icon: "🤝" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="text-xl mb-1">{stat.icon}</div>
                  <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs md:text-sm text-blue-100">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
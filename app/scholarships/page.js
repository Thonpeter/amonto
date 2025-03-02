'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Scholarships() {
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
        ease: "easeOut"
      }
    })
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
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Background with Parallax effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed transform scale-110"
        style={{ 
          backgroundImage: "url('/gallery/image (8).jpg')",
          filter: "brightness(0.5) contrast(1.2)",
        }}
        aria-hidden="true"
      >
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/70 via-indigo-800/70 to-blue-900/70 backdrop-blur-md mix-blend-multiply animate-gradient-xy"></div>
        
        {/* Particles/stars effect */}
        <div className="stars-container absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute h-1 w-1 rounded-full bg-white opacity-70 animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-16 relative z-10">
        {/* Main Title with animated underline */}
        <motion.div
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={fadeIn}
          custom={0}
          className="text-center mb-16"
        >
          <h1 className="text-5xl sm:text-7xl font-bold text-white mb-4 drop-shadow-2xl tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-white to-purple-200">
              Scholarships
            </span>
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full animate-pulse"></div>
        </motion.div>

        {/* Eligibility Criteria Section */}
        <motion.div 
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={fadeIn}
          custom={1}
          className="bg-gradient-to-br from-white/10 to-white/5 text-white p-8 sm:p-12 rounded-3xl shadow-2xl max-w-4xl mx-auto backdrop-blur-xl border border-white/20 transition-all duration-500 hover:border-white/40 group"
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
          }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300 group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-500">Eligibility Criteria</h2>
          <p className="text-lg leading-relaxed font-light mb-6">
            Any South Sudanese girl who has scored aggregate <span className="font-semibold text-blue-300">4, 5, or 6</span> in the recent PLE results for P7 Uganda is eligible
            for a four-year secondary scholarship at Amonto Girls Academy Secondary School.
          </p>
          <p className="text-lg leading-relaxed mb-6 font-semibold bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
            Inform her and spread this message widely!
          </p>
          
          {/* Animated indicator */}
          <div className="w-full flex justify-center mt-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-all duration-500">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 animate-pulse"></div>
            </div>
          </div>
        </motion.div>

        {/* Success Story Section */}
        <motion.div 
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={fadeIn}
          custom={2}
          className="mt-16 bg-gradient-to-br from-white/10 to-white/5 text-white p-8 sm:p-12 rounded-3xl shadow-2xl max-w-4xl mx-auto backdrop-blur-xl border border-white/20 transition-all duration-500 hover:border-white/40 group"
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
          }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300 group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-500">Success Story</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <p className="text-lg leading-relaxed font-light mb-6">
                Malang Atem Deng had a great visit and tour of the school with her mother after topping the performances of the Scholarship Test.
              </p>
              <p className="text-lg leading-relaxed font-light mb-6">
                We congratulate her because hard work surely pays!{" "}
                <span className="font-semibold bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">We Build For The Future.</span>
              </p>
            </div>
            <div className="md:w-1/2 overflow-hidden rounded-3xl shadow-2xl group-hover:shadow-blue-500/30 transition-all duration-500">
              <motion.img
                src="/gallery/image (18).jpg"
                alt="Malang Atem Deng"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>

        {/* Scholarship Benefits Section */}
        <motion.div 
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={fadeIn}
          custom={3}
          className="mt-16 bg-gradient-to-br from-white/10 to-white/5 text-white p-8 sm:p-12 rounded-3xl shadow-2xl max-w-4xl mx-auto backdrop-blur-xl border border-white/20 transition-all duration-500 hover:border-white/40"
          whileHover={{ 
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
          }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">Scholarship Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate={isLoaded ? "visible" : "hidden"}
                variants={fadeIn}
                custom={index + 4}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 bg-gradient-to-br from-white/10 to-transparent rounded-xl shadow-lg border border-white/10 hover:border-white/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-4">
                  <span className="text-2xl">{benefit.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-blue-100 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-white/80">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={fadeIn}
          custom={8}
          className="mt-16 text-center"
        >
          <motion.a
            href="/apply"
            className="inline-block px-12 py-5 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg font-semibold rounded-full shadow-xl hover:shadow-blue-500/50 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            aria-label="Apply for Scholarship"
          >
            Apply for Scholarship
            <span className="ml-2">→</span>
          </motion.a>
          
          <div className="mt-4 text-white/60 text-sm">Empowering futures through education</div>
        </motion.div>
      </div>
    </div>
  );
}
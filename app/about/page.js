'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function About() {
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
    <div
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center text-white overflow-hidden"
      style={{ backgroundImage: "url('/gallery/image (20).jpg')" }}
    >
      {/* Overlay with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/70 to-black/90 backdrop-blur-sm animate-gradient-xy"></div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Main Title */}
        <motion.h1
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={fadeIn}
          custom={0}
          className="text-5xl sm:text-7xl font-extrabold mb-8 text-center bg-gradient-to-r from-accent to-accent-dark bg-clip-text text-transparent"
        >
          About Us
        </motion.h1>

        {/* Who We Are Section */}
        <motion.section
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={fadeIn}
          custom={1}
          className="mb-16"
        >
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg p-8 sm:p-12 rounded-3xl shadow-2xl border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 hover:shadow-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Who We Are
            </h2>
            <p className="text-lg sm:text-xl leading-relaxed text-white/80">
              Amonto Girls Academy is a prestigious single-girls boarding school located on Jebel Amianin, South Sudan. We offer a modern
              South Sudan curriculum dedicated to empowering young women through quality education, leadership development, and personal growth.
            </p>
          </div>
        </motion.section>

        {/* Mission Section */}
        <motion.section
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={fadeIn}
          custom={2}
          className="mb-16"
        >
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg p-8 sm:p-12 rounded-3xl shadow-2xl border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 hover:shadow-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Our Mission
            </h2>
            <p className="text-lg sm:text-xl leading-relaxed text-white/80">
              Our mission is to provide high-quality education that nurtures academic excellence, discipline, and leadership skills. We aim to
              inspire confidence and independence, shaping young women into future leaders of society.
            </p>
          </div>
        </motion.section>

        {/* Image Gallery */}
        <motion.section
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={fadeIn}
          custom={3}
          className="my-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                src: "/gallery/image (21).jpg",
                alt: "Academic Excellence",
                caption: "Academic Excellence",
              },
              {
                src: "/gallery/image (22).jpg",
                alt: "Empowered Students",
                caption: "Empowered Students",
              },
              {
                src: "/gallery/image (8).jpg",
                alt: "Modern Facilities",
                caption: "State-of-the-art Facilities",
              },
            ].map((image, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate={isLoaded ? "visible" : "hidden"}
                variants={fadeIn}
                custom={index + 4}
                className="relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-500 group"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-white text-xl font-semibold animate-bounce">
                    {image.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Why Choose Us Section */}
        <motion.section
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={fadeIn}
          custom={7}
          className="my-16"
        >
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg p-8 sm:p-12 rounded-3xl shadow-2xl border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 hover:shadow-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Why Choose Amonto Girls Academy?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                {
                  icon: "🏫",
                  title: "Safe Environment",
                  description: "A secure and nurturing learning environment.",
                },
                {
                  icon: "👩‍🏫",
                  title: "Expert Educators",
                  description: "Highly qualified and passionate teachers.",
                },
                {
                  icon: "📚",
                  title: "Modern Curriculum",
                  description: "A comprehensive curriculum tailored for success.",
                },
                {
                  icon: "💡",
                  title: "Leadership Focus",
                  description: "Strong emphasis on discipline and empowerment.",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  animate={isLoaded ? "visible" : "hidden"}
                  variants={fadeIn}
                  custom={index + 8}
                  className="p-6 bg-gradient-to-br from-white/10 to-transparent rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
                >
                  <h3 className="text-xl font-semibold flex items-center gap-2 text-white">
                    <span className="text-2xl">{feature.icon}</span>
                    <span>{feature.title}</span>
                  </h3>
                  <p className="mt-2 text-sm text-white/80">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={fadeIn}
          custom={12}
          className="my-16 text-center"
        >
          <motion.a
            href="/admissions"
            className="inline-block px-10 py-4 bg-gradient-to-r from-accent to-accent-dark text-white text-lg font-semibold rounded-full shadow-lg hover:opacity-90 transition-transform duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            aria-label="Learn More"
          >
            Learn More
          </motion.a>
        </motion.section>
      </div>
    </div>
  );
}
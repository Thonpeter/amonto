'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';

export default function About() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Animation variants - simplified for better performance
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15, // Reduced delay for faster page load
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  // Content data organized for maintainability
  const features = [
    {
      icon: "👩‍🏫",
      title: "Expert Educators",
      description: "Highly qualified teachers with a passion for learning.",
    },
    {
      icon: "📚",
      title: "Holistic Development",
      description: "We nurture both academic excellence and personal growth.",
    },
    {
      icon: "🎓",
      title: "Scholarships & Support",
      description: "Financial aid available for outstanding students.",
    },
    {
      icon: "🏫",
      title: "Modern Facilities",
      description: "State-of-the-art classrooms, labs, and boarding facilities.",
    },
    {
      icon: "🌍",
      title: "Global Perspective",
      description: "A curriculum that prepares students for international success.",
    },
    {
      icon: "💡",
      title: "Leadership Focus",
      description: "Strong emphasis on discipline and empowerment.",
    },
  ];

  const galleryImages = [
    {
      src: "/gallery/image (21).jpg",
      alt: "Academic Excellence at Amonto Girls Academy",
      caption: "Academic Excellence",
    },
    {
      src: "/gallery/image (22).jpg",
      alt: "Empowered Students at Amonto Girls Academy",
      caption: "Empowered Students",
    },
    {
      src: "/gallery/image (8).jpg",
      alt: "Modern Facilities at Amonto Girls Academy",
      caption: "State-of-the-art Facilities",
    },
    {
      src: "/gallery/image (26).jpg",
      alt: "Leadership Training at Amonto Girls Academy",
      caption: "Leadership Training",
    },
    {
      src: "/gallery/image (27).jpg",
      alt: "Science Labs at Amonto Girls Academy",
      caption: "Advanced Science Labs",
    },
    {
      src: "/gallery/image (29).jpg",
      alt: "Cultural Events at Amonto Girls Academy",
      caption: "Cultural Events",
    },
  ];

  return (
    <>
      {/* SEO Meta Tags and Structured Data */}
      <Head>
        <title>About Amonto Girls Academy - Empowering Young Women Through Education</title>
        <meta
          name="description"
          content="Amonto Girls Academy is a leading boarding school in South Sudan, offering a modern curriculum to empower young women through quality education, leadership, and personal growth."
        />
        <meta
          name="keywords"
          content="Amonto Girls Academy, South Sudan boarding school, girls education, leadership development, quality education, academic excellence, scholarships, modern facilities, global perspective, leadership training, Jebel Amianin, South Sudan curriculum, single-girls boarding school"
        />
        <meta name="author" content="Amonto Girls Academy" />
        <meta property="og:title" content="About Amonto Girls Academy - Empowering Young Women Through Education" />
        <meta
          property="og:description"
          content="Amonto Girls Academy is a leading boarding school in South Sudan, offering a modern curriculum to empower young women through quality education, leadership, and personal growth."
        />
        <meta property="og:image" content="/gallery/image (31).jpg" />
        <meta property="og:url" content="https://www.amontogirlsacademy.com/about" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Amonto Girls Academy - Empowering Young Women Through Education" />
        <meta
          name="twitter:description"
          content="Amonto Girls Academy is a leading boarding school in South Sudan, offering a modern curriculum to empower young women through quality education, leadership, and personal growth."
        />
        <meta name="twitter:image" content="/gallery/image (31).jpg" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Amonto Girls Academy",
              "description": "Amonto Girls Academy is a leading boarding school in South Sudan, dedicated to empowering young women through quality education, leadership development, and personal growth.",
              "url": "https://www.amontogirlsacademy.com",
              "logo": "https://www.amontogirlsacademy.com/logo.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Academy Road",
                "addressLocality": "Juba",
                "addressRegion": "Central Equatoria",
                "postalCode": "12345",
                "addressCountry": "South Sudan"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+211-123-456-789",
                "contactType": "Admissions"
              }
            }
          `}
        </script>
      </Head>

      {/* Page Content */}
      <main className="relative min-h-screen bg-gradient-to-b from-slate-900 to-indigo-900 text-white">
        {/* Hero Section with Fixed Background */}
        <div 
          className="relative h-screen bg-fixed bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: "url('/gallery/image (31).jpg')" }}
        >
          {/* Overlay with subtle gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80 backdrop-blur-sm"></div>
          
          <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.h1
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={fadeIn}
              custom={0}
              className="text-5xl sm:text-7xl font-extrabold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
            >
              About Amonto Girls Academy
            </motion.h1>
            
            <motion.p
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={fadeIn}
              custom={1}
              className="text-xl max-w-3xl mx-auto text-gray-200"
            >
              Empowering young women through quality education on Jebel Amianin, South Sudan
            </motion.p>
            
            <motion.div
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={fadeIn}
              custom={2}
              className="mt-8"
            >
              <a 
                href="#learn-more" 
                className="inline-block px-8 py-3 bg-white text-indigo-900 font-semibold rounded-lg shadow-lg hover:bg-opacity-90 transition-all duration-300"
              >
                Learn More
              </a>
            </motion.div>
          </div>
        </div>

        {/* Main Content Container */}
        <div className="container mx-auto px-6 py-20" id="learn-more">
          {/* Two-column layout for intro sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            {/* Who We Are Section */}
            <motion.section
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={fadeIn}
              custom={3}
              className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/20"
            >
              <h2 className="text-3xl font-bold text-white mb-6 border-b border-white/20 pb-4">
                Who We Are
              </h2>
              <p className="text-lg leading-relaxed text-white/90">
                Amonto Girls Academy is a prestigious single-girls boarding school located on Jebel Amianin, South Sudan. We offer a modern
                South Sudan curriculum dedicated to empowering young women through quality education, leadership development, and personal growth.
              </p>
            </motion.section>

            {/* Mission Section */}
            <motion.section
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={fadeIn}
              custom={4}
              className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/20"
            >
              <h2 className="text-3xl font-bold text-white mb-6 border-b border-white/20 pb-4">
                Our Mission
              </h2>
              <p className="text-lg leading-relaxed text-white/90">
                Our mission is to provide high-quality education that nurtures academic excellence, discipline, and leadership skills. We aim to
                inspire confidence and independence, shaping young women into future leaders of society.
              </p>
            </motion.section>
          </div>

          {/* Why Choose Us Section - Clean grid layout */}
          <motion.section
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeIn}
            custom={5}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold mb-12 text-center">Why Choose Amonto Girls Academy?</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  animate={isLoaded ? "visible" : "hidden"}
                  variants={fadeIn}
                  custom={index + 6}
                  className="p-6 bg-white/10 rounded-xl shadow-lg hover:bg-white/15 transition-all duration-300 border border-white/10"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{feature.icon}</span>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-white/80">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Image Gallery - Organized masonry layout */}
          <motion.section
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeIn}
            custom={12}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold mb-12 text-center">Campus Life</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  animate={isLoaded ? "visible" : "hidden"}
                  variants={fadeIn}
                  custom={index + 13}
                  className="relative overflow-hidden rounded-xl shadow-lg group aspect-video"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h3 className="text-white text-lg font-semibold">{image.caption}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Call to Action - Clean and prominent */}
          <motion.section
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeIn}
            custom={19}
            className="py-16 px-8 bg-indigo-700 rounded-2xl text-center shadow-2xl"
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Join Our Community?</h2>
            <p className="max-w-2xl mx-auto mb-8 text-lg">
              Discover the opportunities waiting for you at Amonto Girls Academy. 
              Our admissions team is ready to guide you through the enrollment process.
            </p>
            <motion.a
              href="/admissions"
              className="inline-block px-8 py-4 bg-white text-indigo-900 text-lg font-semibold rounded-lg shadow-lg hover:bg-opacity-90 transition-all duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              aria-label="Apply Now"
            >
              Apply Now
            </motion.a>
          </motion.section>
        </div>
      </main>
    </>
  );
}
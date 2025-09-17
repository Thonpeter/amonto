"use client";

import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Scholarships from "../components/Scholarships";
import Academics from "../components/Academics";
import Contact from "../components/Contacts";
import Admissions from "../components/Admissions";
import { FaArrowDown, FaArrowUp, FaQuoteLeft, FaStar } from "react-icons/fa";

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRefs = useRef({});

  // Initialize random image on load
  useEffect(() => {
    setCurrentImageIndex(Math.floor(Math.random() * 33));
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Scroll to section function
  const scrollToSection = (id) => {
    const element = sectionRefs.current[id];
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      if (history.pushState) {
        history.pushState(null, null, `#${id}`);
      } else {
        window.location.hash = `#${id}`;
      }
    }
  };

  // Assign refs to sections
  const setSectionRef = (id, element) => {
    sectionRefs.current[id] = element;
  };

  // Handle initial hash in URL
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash && sectionRefs.current[hash]) {
        sectionRefs.current[hash].scrollIntoView({ behavior: "smooth" });
      }
    };

    const initialHash = window.location.hash.substring(1);
    if (initialHash && sectionRefs.current[initialHash]) {
      setTimeout(() => {
        sectionRefs.current[initialHash].scrollIntoView({ behavior: "smooth" });
      }, 500);
    }

    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  // Slideshow effect for background images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => {
        const nextIndex = Math.floor(Math.random() * 24);
        return nextIndex === prev ? (nextIndex + 1) % 24 : nextIndex;
      });
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <title>Amonto Girls Academy - Empowering Young Women Through Education</title>
        <meta
          name="description"
          content="Amonto Girls Academy is a leading boarding school in South Sudan, offering a modern curriculum to empower young women through quality education, leadership, and personal growth."
        />
        <meta
          name="keywords"
          content="Amonto Girls Academy, South Sudan boarding school, girls education, leadership development, quality education"
        />
        <meta name="author" content="Amonto Girls Academy" />
        <meta property="og:title" content="Amonto Girls Academy - Empowering Young Women Through Education" />
        <meta
          property="og:description"
          content="Amonto Girls Academy is a leading boarding school in South Sudan, offering a modern curriculum to empower young women through quality education, leadership, and personal growth."
        />
        <meta property="og:image" content="/gallery/image (1).jpg" />
        <meta property="og:url" content="https://www.amontogirlsacademy.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Amonto Girls Academy - Empowering Young Women Through Education" />
        <meta
          name="twitter:description"
          content="Amonto Girls Academy is a leading boarding school in South Sudan, offering a modern curriculum to empower young women through quality education, leadership, and personal growth."
        />
        <meta name="twitter:image" content="/gallery/image (1).jpg" />
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
                "streetAddress": "Jebel Amianin",
                "addressLocality": "Juba",
                "addressRegion": "Central Equatoria",
                "addressCountry": "South Sudan"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+211-923-666-022",
                "contactType": "Admissions"
              }
            }
          `}
        </script>
      </Head>



      {/* Add spacing for the fixed navbar */}
      <div className="pt-20"></div>

      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section
          className={`relative min-h-screen bg-cover bg-center transition-all duration-1000 ease-in-out ${isVisible ? "opacity-100" : "opacity-0"
            }`}
          style={{
            backgroundImage: `url('/gallery/image (${currentImageIndex + 1}).jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>

          <div className="relative z-10 container mx-auto px-6 py-24 min-h-screen flex flex-col justify-center">
            <div className="text-center mb-16">
              <motion.h1
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={fadeIn}
                custom={0}
                className="text-6xl sm:text-8xl font-extrabold text-white mb-8"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-yellow-200 to-orange-300">
                  Amonto Girls Academy
                </span>
              </motion.h1>
              <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-8"></div>
              <motion.p
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={fadeIn}
                custom={1}
                className="text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed"
              >
                Empowering young women through quality education, leadership development, and personal growth
              </motion.p>

            </div>

            {/* CTA Buttons */}
            <motion.div
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={fadeIn}
              custom={3}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button
                onClick={() => scrollToSection("admissions")}
                className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-600 text-white text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Get an Admssion Now
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="px-8 py-4 border-2 border-white/30 text-white text-lg font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
              >
                Learn More
              </button>
            </motion.div>

            {/* Scroll indicator */}
            <motion.button
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={fadeIn}
              custom={4}
              onClick={() => scrollToSection("about")}
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce mt-16"
            >
              <FaArrowDown className="text-2xl" />
            </motion.button>
          </div>
        </section>




        {/* Render all components with refs */}
        <div ref={(el) => setSectionRef("about", el)}>
          <About />
        </div>
        <div ref={(el) => setSectionRef("academics", el)}>
          <Academics />
        </div>
        <div ref={(el) => setSectionRef("scholarships", el)}>
          <Scholarships />
        </div>
        <div ref={(el) => setSectionRef("admissions", el)}>
          <Admissions />
        </div>
        <div ref={(el) => setSectionRef("contact", el)}>
          <Contact />
        </div>

        {/* Scroll to top button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-r from-yellow-500 to-orange-600 text-white rounded-full shadow-lg transform transition-all duration-300 hover:scale-110"
        >
          <FaArrowUp className="text-xl" />
        </button>
      </div>
    </>
  );
}

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

// Motion component (simplified for this example)
const motion = {
  h1: ({ children, initial, animate, variants, custom, className }) => (
    <h1 className={className} style={animate === "visible" ? { opacity: 1, transform: "translateY(0)" } : { opacity: 0, transform: "translateY(20px)" }}>
      {children}
    </h1>
  ),
  p: ({ children, initial, animate, variants, custom, className }) => (
    <p className={className} style={animate === "visible" ? { opacity: 1, transform: "translateY(0)" } : { opacity: 0, transform: "translateY(20px)" }}>
      {children}
    </p>
  ),
  div: ({ children, initial, animate, variants, custom, className }) => (
    <div className={className} style={animate === "visible" ? { opacity: 1, transform: "translateY(0)" } : { opacity: 0, transform: "translateY(20px)" }}>
      {children}
    </div>
  ),
  button: ({ children, initial, animate, variants, custom, className, onClick }) => (
    <button
      className={className}
      onClick={onClick}
      style={animate === "visible" ? { opacity: 1, transform: "translateY(0)" } : { opacity: 0, transform: "translateY(20px)" }}
    >
      {children}
    </button>
  )
};
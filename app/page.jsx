"use client";

import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/Navbar"; // Import your existing Navbar

// Import your components
import About from "../components/About";
import Scholarships from "../components/Scholarships";
import Academics from "../components/Academics";
import Contact from "../components/Contacts";
import Admissions from "../components/Admissions";

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

      // Update URL hash without scrolling (for browser history)
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

    // Check for hash on initial load
    const initialHash = window.location.hash.substring(1);
    if (initialHash && sectionRefs.current[initialHash]) {
      setTimeout(() => {
        sectionRefs.current[initialHash].scrollIntoView({ behavior: "smooth" });
      }, 500);
    }

    // Listen for hash changes
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

      {/* Use your existing Navbar */}

      {/* Add spacing for the fixed navbar */}
      <div className="pt-20"></div>

      <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        {/* Hero Section */}
        <section
          className={`relative h-[550px] sm:h-[700px] bg-cover bg-center transition-all duration-1000 ease-in-out ${isVisible ? "opacity-100" : "opacity-0"
            }`}
          style={{
            backgroundImage: `url('/gallery/image (${currentImageIndex + 1}).jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Enhanced overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>

          <div className="relative z-10 text-center px-6 sm:px-12 flex flex-col items-center justify-center h-full">
            <h1
              className="text-5xl sm:text-6xl font-extrabold text-white drop-shadow-lg leading-tight transform transition-all duration-700 ease-out"
              style={{
                textShadow: "0 4px 6px rgba(0, 0, 0, 0.5)",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(-20px)"
              }}
            >
              Welcome to Amonto Girls Academy
            </h1>
            <p
              className="mt-4 text-xl sm:text-2xl max-w-2xl mx-auto text-white drop-shadow-lg"
              style={{
                textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: "all 700ms ease-out 300ms"
              }}
            >
              We build for the future
            </p>
            <div
              className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                transition: "all 700ms ease-out 600ms"
              }}
            >
              <button
                onClick={() => scrollToSection("admissions")}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 hover:from-blue-700 hover:to-purple-700"
              >
                Get an admission now!
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold backdrop-blur-sm bg-white/10 hover:bg-white hover:text-purple-700 transition duration-300 ease-in-out transform hover:scale-105"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Scroll indicator */}
          <button
            onClick={() => scrollToSection("about")}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </section>

        {/* About Section */}
        <section
          ref={(el) => setSectionRef("about", el)}
          className="py-16 px-8 sm:px-16 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/gallery/image (32).jpg')" }}
        >
          <div
            className="max-w-4xl mx-auto bg-white/95 p-8 sm:p-12 rounded-3xl shadow-2xl text-center backdrop-blur-sm transform transition-all duration-700 hover:translate-y-[-5px] hover:shadow-3xl"
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-1 w-32 mx-auto mb-8 rounded-full"></div>
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-700 mb-6">This is Amonto Girls Academy</h2>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              Amonto Girls Academy is a prestigious single-girls boarding school located on Jebel Amianin, South Sudan. We offer a modern
              South Sudan curriculum dedicated to empowering young women through quality education, leadership development, and personal growth.
            </p>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-8 sm:px-16 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-6xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-1 w-32 mx-auto mb-8 rounded-full"></div>
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-700 mb-10">What Our Students & Parents Say</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">
              {[
                {
                  name: "Asunta Aman",
                  quote: "Amonto Girls Academy has transformed my life. The teachers are incredibly supportive, and the environment is inspiring.",
                },
                {
                  name: "Mary Achol",
                  quote: "The global perspective I gained here has prepared me for success in international universities.",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                  style={{
                    transitionDelay: `${index * 100}ms`,
                    boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.15)",
                  }}
                >
                  <div className="mb-4 text-purple-600 text-5xl opacity-30">"</div>
                  <p className="text-lg italic text-gray-700 mb-6">{testimonial.quote}</p>
                  <div className="flex items-center justify-center">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mr-3"></div>
                    <p className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-700">
                      {testimonial.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
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

        {/* Floating scroll-to-top button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform transition-all duration-300 hover:scale-110 opacity-80 hover:opacity-100"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </>
  );
}
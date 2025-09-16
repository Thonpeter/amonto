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

              {/* Quick Stats */}
              <motion.div
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={fadeIn}
                custom={2}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto"
              >
                {[
                  { value: "10th", label: "Nationally Ranked" },
                  { value: "#1", label: "Best Girls School" },
                  { value: "98%", label: "University Acceptance" },
                  { value: "100+", label: "Scholarships Awarded" }
                ].map((stat, index) => (
                  <div key={index} className="bg-gradient-to-br from-yellow-600/20 to-orange-600/20 backdrop-blur-lg rounded-2xl p-6 border border-yellow-500/30">
                    <div className="text-4xl font-bold text-yellow-300">{stat.value}</div>
                    <div className="text-white/80 text-sm mt-2">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
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

        {/* About Preview Section */}
        <section
          ref={(el) => setSectionRef("about", el)}
          className="py-20 bg-gradient-to-r from-indigo-900 to-purple-900"
        >
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">About Amonto Girls Academy</h2>
              <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-8"></div>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                Amonto Girls Academy is a prestigious single-girls boarding school located on Jebel Amianin, South Sudan.
                We offer a modern South Sudan curriculum dedicated to empowering young women through quality education,
                leadership development, and personal growth.
              </p>
              <button
                onClick={() => scrollToSection("about")}
                className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
              >
                Discover More
              </button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-white mb-16">
              🌟 What Our Community Says
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                {
                  name: "Asunta Aman",
                  role: "Student",
                  quote: "Amonto Girls Academy has transformed my life. The teachers are incredibly supportive, and the environment is inspiring.",
                  image: "/testimonials/student1.jpg"
                },
                {
                  name: "Mary Achol",
                  role: "Alumni",
                  quote: "The global perspective I gained here has prepared me for success in international universities.",
                  image: "/testimonials/student2.jpg"
                },
              ].map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 p-1">
                      <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                        <span className="text-white text-2xl font-bold">{testimonial.name.charAt(0)}</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-yellow-200 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="text-white/80 italic mb-4">
                    <FaQuoteLeft className="text-yellow-400 inline mr-2" />
                    {testimonial.quote}
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-white mb-16">
              🚀 Start Your Journey
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  title: "Admissions",
                  description: "Join our community of excellence",
                  icon: "🎓",
                  link: "#admissions",
                  color: "from-yellow-500 to-orange-600"
                },
                {
                  title: "Scholarships",
                  description: "Discover funding opportunities",
                  icon: "🏆",
                  link: "#scholarships",
                  color: "from-blue-500 to-purple-600"
                },
                {
                  title: "Contact",
                  description: "Get in touch with us",
                  icon: "📞",
                  link: "#contact",
                  color: "from-green-500 to-teal-600"
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center text-3xl mb-6`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-white/80 mb-6">{item.description}</p>
                  <button
                    onClick={() => scrollToSection(item.link.substring(1))}
                    className={`px-6 py-3 bg-gradient-to-r ${item.color} text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300`}
                  >
                    Learn More
                  </button>
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
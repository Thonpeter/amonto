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
import Co from "../components/Co";

import { FaArrowDown, FaArrowUp, FaQuoteLeft, FaStar } from "react-icons/fa";

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const sectionRefs = useRef({});
  const videoRef = useRef(null);

  // Initialize random image on load
  useEffect(() => {
    setCurrentImageIndex(Math.floor(Math.random() * 33));
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Handle video loading and playback
  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      const handleLoadedData = () => {
        setIsVideoLoaded(true);
      };

      const handlePlay = () => {
        setIsVideoPlaying(true);
      };

      const handlePause = () => {
        setIsVideoPlaying(false);
      };

      videoElement.addEventListener('loadeddata', handleLoadedData);
      videoElement.addEventListener('play', handlePlay);
      videoElement.addEventListener('pause', handlePause);

      // Try to autoplay
      const playPromise = videoElement.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log("Autoplay prevented:", error);
          setIsVideoPlaying(false);
        });
      }

      return () => {
        videoElement.removeEventListener('loadeddata', handleLoadedData);
        videoElement.removeEventListener('play', handlePlay);
        videoElement.removeEventListener('pause', handlePause);
      };
    }
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

  // Play video on manual activation
  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play().then(() => {
        setIsVideoLoaded(true);
        setIsVideoPlaying(true);
      }).catch(error => {
        console.log("Video play failed:", error);
      });
    }
  };

  return (
    <>
      <Head>
        <title>Amonto Girls Academy - Premier Girls Boarding School in South Sudan</title>
        <meta
          name="description"
          content="Amonto Girls Academy is South Sudan's leading girls boarding school offering quality education, leadership development, and academic excellence in Juba."
        />
        <meta
          name="keywords"
          content="Amonto Girls Academy, girls boarding school South Sudan, quality education Juba, South Sudan schools, girls education, leadership development"
        />
        <meta name="author" content="Amonto Girls Academy" />
        <meta property="og:title" content="Amonto Girls Academy - Empowering girl-child Through Education" />
        <meta
          property="og:description"
          content="South Sudan's premier girls boarding school offering modern curriculum, excellent facilities, and holistic education in Juba."
        />
        <meta property="og:image" content="/gallery/image (1).jpg" />
        <meta property="og:url" content="https://www.amontogirls.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Amonto Girls Academy" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Amonto Girls Academy - Premier Girls Education in South Sudan" />
        <meta
          name="twitter:description"
          content="Transformative education for girls in South Sudan. Academic excellence, leadership development, and modern facilities."
        />
        <meta name="twitter:image" content="/gallery/image (1).jpg" />
        <link rel="canonical" href="https://www.amontogirls.com" />
      </Head>

      {/* Add spacing for the fixed navbar */}
      <div className="pt-20"></div>

      <div className="flex flex-col min-h-screen">
        {/* Hero Section with Video Background */}
        <section
          className={`relative min-h-screen transition-all duration-1000 ease-in-out ${isVisible ? "opacity-100" : "opacity-0"
            }`}
        >
          {/* Video Background */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              className={`w-full h-full object-cover ${isVideoPlaying ? 'block' : 'hidden'}`}
              poster={`/gallery/image (${currentImageIndex + 1}).jpg`}
              onLoadedData={() => setIsVideoLoaded(true)}
              onPlay={() => setIsVideoPlaying(true)}
            >
              <source src="./vid/amonto.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Fallback for browsers that don't support video or when video is not playing */}
            {!isVideoPlaying && (
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('/gallery/image (${currentImageIndex + 1}).jpg')`,
                }}
              ></div>
            )}

            {/* Play button for mobile devices that block autoplay */}
            {!isVideoPlaying && (
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={playVideo}
                  className="bg-white/20 backdrop-blur-lg rounded-full p-4 text-white hover:bg-white/30 transition-all z-10"
                >
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            )}
          </div>

          {/* Gradient Overlay - Fixed positioning issue */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 z-1"></div>

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
                Empowering girl-child through quality education, leadership development, and personal growth
              </motion.p>
            </div>


            {/* Scroll indicator */}
            <motion.button
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={fadeIn}
              custom={4}
              onClick={() => scrollToSection("about")}
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce mt-16 z-20"
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
        <div ref={(el) => setSectionRef("co", el)}>
          <Co />
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
"use client";

import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

// Dynamically import pages (avoiding SSR)
const About = dynamic(() => import("./about/page"), { ssr: false });
const Scholarships = dynamic(() => import("./scholarships/page"), { ssr: false });
const Academics = dynamic(() => import("./academics/page"), { ssr: false });
const Contact = dynamic(() => import("./contact/page"), { ssr: false });
const Admissions = dynamic(() => import("./admissions/page"), { ssr: false });

export default function Home() {
  const sections = [
    { id: "about", component: <About key="about" /> },
    { id: "academics", component: <Academics key="academics" /> },
    { id: "scholarships", component: <Scholarships key="scholarships" /> },
    { id: "admissions", component: <Admissions key="admissions" /> },
    { id: "contact", component: <Contact key="contact" /> },
  ];

  const [loadedSections, setLoadedSections] = useState(sections.length > 0 ? [sections[0]] : []); // Start with About page if sections is not empty
  const observerRef = useRef<HTMLDivElement | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(Math.floor(Math.random() * 24)); // Start with a random image

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const lastEntry = entries[0];
        if (lastEntry.isIntersecting && loadedSections.length < sections.length) {
          setLoadedSections((prev) => {
            if (prev.length < sections.length) {
              return [...prev, sections[prev.length]]; // Load next section
            }
            return prev;
          });
        }
      },
      { threshold: 0.5 } // Trigger when 50% visible
    );

    if (observerRef.current) observer.observe(observerRef.current);

    return () => {
      if (observerRef.current) observer.unobserve(observerRef.current);
    };
  }, [loadedSections, sections.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(Math.floor(Math.random() * 24)); // Set a random image index
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <main className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative h-[500px] sm:h-[700px] bg-cover bg-center"
        style={{ backgroundImage: `url('/gallery/image (${currentImageIndex + 1}).jpg')` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-6 sm:px-12 flex flex-col items-center justify-center h-full">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white drop-shadow-lg leading-tight animate-fade-in">
            Welcome to Amonto Girls Academy
          </h1>
          <p className="mt-3 text-xl sm:text-2xl max-w-2xl mx-auto text-white drop-shadow-lg animate-fade-in-up">
            We build for the future
          </p>
          <div className="mt-6 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6 animate-fade-in-up">
            <Link
              href="/admissions"
              className="px-8 py-4 bg-accent text-white rounded-full font-semibold shadow-lg hover:bg-accent-dark transition duration-300 ease-in-out transform hover:scale-105"
            >
              Enrol Now
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 border border-white text-white rounded-full font-semibold hover:bg-white hover:text-accent transition duration-300 ease-in-out transform hover:scale-105"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        className="py-16 px-8 sm:px-16 bg-cover bg-center"
        style={{ backgroundImage: "url('/gallery/image (3).jpg')" }}
      >
        <div className="max-w-4xl mx-auto bg-white/90 p-8 sm:p-12 rounded-3xl shadow-2xl text-center animate-fade-in-up">
          <h2 className="text-4xl font-bold text-primary mb-6">About Us</h2>
          <p className="text-lg sm:text-xl text-gray-700">
            Amonto Girls Academy is a prestigious single-girls boarding school located on Jebel Amianin, South Sudan. We offer a modern
            South Sudan curriculum dedicated to empowering young women through quality education, leadership development, and personal growth.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-8 sm:px-16 bg-primary text-white text-center">
        <h2 className="text-4xl font-bold mb-6 animate-fade-in">Why Choose Amonto Girls Academy?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10">
          {[
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
          ].map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white/10 rounded-xl shadow-lg hover:bg-white/20 transition-all duration-300 animate-fade-in-up"
            >
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <span>{feature.icon}</span>
                {feature.title}
              </h3>
              <p className="mt-2 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-8 sm:px-16 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-primary mb-6 animate-fade-in">What Our Students & Parents Say</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">
            {[
              {
                name: "Sarah Johnson",
                quote: "Amonto Girls Academy has transformed my life. The teachers are incredibly supportive, and the environment is inspiring.",
              },
              {
                name: "Emily Davis",
                quote: "The global perspective I gained here has prepared me for success in international universities.",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in-up"
              >
                <p className="text-lg italic text-gray-700">"{testimonial.quote}"</p>
                <p className="mt-4 font-semibold text-primary">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Render loaded sections */}
      {loadedSections.map((section) => section?.component)}

      {/* Invisible div to trigger the observer */}
      <div ref={observerRef} className="h-10 w-full" />
    </main>
  );
}
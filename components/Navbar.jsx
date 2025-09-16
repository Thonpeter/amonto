"use client"; // Required for client-side hooks in Next.js App Router

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react"; // Added ChevronDown for dropdowns
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("/");
  const pathname = usePathname();

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Get current path for active highlighting
    setActiveItem(window.location.pathname);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Navigation items
  const navItems = [
    { name: "Home", path: "/", sectionId: null },
    { name: "About", path: "/about", sectionId: "about" },
    { name: "Academics", path: "/academics", sectionId: "academics" },
    { name: "Admissions", path: "/admissions", sectionId: "admissions" },
    { name: "Gallery", path: "/gallery", sectionId: "gallery" },
    { name: "Scholarships", path: "/scholarships", sectionId: "scholarships" },
    { name: "Contact", path: "/contact", sectionId: "contact" },
  ];

  // Function to handle navigation - either page change or scrolling
  const handleNavigation = (item) => {
    setIsOpen(false);
    setActiveItem(item.path);

    // If we're already on the home page and the item has a section ID, scroll to it
    if (pathname === "/" && item.sectionId) {
      const element = document.getElementById(item.sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });

        // Update URL hash without scrolling (for browser history)
        if (history.pushState) {
          history.pushState(null, null, `#${item.sectionId}`);
        } else {
          window.location.hash = `#${item.sectionId}`;
        }
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? "bg-white text-primary shadow-lg backdrop-blur-md bg-opacity-90"
        : "bg-gradient-to-r from-primary to-secondary text-white"
        }`}
    >
      <div className="container max-w-screen-xl mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo with animation */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative overflow-hidden transition-all duration-500 transform group-hover:scale-105">
            <Image
              src="/logo2.png"
              alt="Amonto Girls Academy Logo"
              width={scrolled ? 100 : 120}
              height={scrolled ? 30 : 40}
              className="transition-all duration-500"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <span
            className={`text-xl sm:text-2xl font-bold hidden sm:block transition-all duration-500 ${scrolled ? "text-primary" : "text-white"
              }`}
          >
            <span className="text-accent">A</span>monto{" "}
            <span className="text-accent">G</span>irls{" "}
            <span className="text-accent">A</span>cademy{" "}
            <span className="text-accent">S</span>econdary{" "}
            <span className="text-accent">S</span>chool (AGASS)
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center space-x-1 text-lg">
          {navItems.map((item) => (
            <li key={item.name} className="relative">
              {pathname === "/" && item.sectionId ? (
                // On home page, use button to scroll to section
                <button
                  onClick={() => handleNavigation(item)}
                  className={`relative py-3 px-4 transition duration-300 flex items-center ${activeItem === item.path
                    ? "text-accent font-medium"
                    : scrolled
                      ? "text-primary hover:text-accent"
                      : "text-white hover:text-accent"
                    }`}
                >
                  {item.name}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent transition-all duration-500 ${activeItem === item.path ? "w-2/3" : "hover:w-2/3"
                      }`}
                  ></span>
                </button>
              ) : (
                // Not on home page, use regular link
                <Link
                  href={item.path}
                  className={`relative py-3 px-4 transition duration-300 flex items-center ${activeItem === item.path
                    ? "text-accent font-medium"
                    : scrolled
                      ? "text-primary hover:text-accent"
                      : "text-white hover:text-accent"
                    }`}
                  onClick={() => setActiveItem(item.path)}
                >
                  {item.name}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent transition-all duration-500 ${activeItem === item.path ? "w-2/3" : "hover:w-2/3"
                      }`}
                  ></span>
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button with animation */}
        <button
          className="lg:hidden relative focus:outline-none group"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <div className="w-10 h-10 flex items-center justify-center overflow-hidden">
            <div
              className={`w-7 flex flex-col items-center justify-center transition-all duration-500 ${isOpen ? "gap-0" : "gap-1.5"
                }`}
            >
              <span
                className={`block h-0.5 w-full rounded transition-all duration-300 ${scrolled ? "bg-primary" : "bg-white"
                  } ${isOpen ? "rotate-45 translate-y-0.5" : ""}`}
              ></span>
              <span
                className={`block h-0.5 rounded transition-all duration-300 ${scrolled ? "bg-primary" : "bg-white"
                  } ${isOpen ? "opacity-0 w-0" : "opacity-100 w-3/4"}`}
              ></span>
              <span
                className={`block h-0.5 w-full rounded transition-all duration-300 ${scrolled ? "bg-primary" : "bg-white"
                  } ${isOpen ? "-rotate-45 -translate-y-0.5" : ""}`}
              ></span>
            </div>
          </div>
          <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-accent"></div>
        </button>
      </div>

      {/* Mobile Navigation - Slide Down Animation */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen
          ? "max-h-[calc(100vh-4rem)] opacity-100 border-t border-white/10"
          : "max-h-0 opacity-0 border-t-0"
          } ${scrolled
            ? "bg-white/95 backdrop-blur-md text-primary"
            : "bg-gradient-to-b from-primary to-secondary text-white"
          }`}
      >
        <ul className="flex flex-col p-4 space-y-1">
          {navItems.map((item) => (
            <li key={item.name}>
              {pathname === "/" && item.sectionId ? (
                // On home page, use button to scroll to section
                <button
                  onClick={() => handleNavigation(item)}
                  className={`block w-full text-left py-3 px-4 rounded-lg transition-all ${activeItem === item.path
                    ? "bg-accent/10 text-accent font-medium"
                    : "hover:bg-white/10"
                    }`}
                >
                  {item.name}
                </button>
              ) : (
                // Not on home page, use regular link
                <Link
                  href={item.path}
                  className={`block py-3 px-4 rounded-lg transition-all ${activeItem === item.path
                    ? "bg-accent/10 text-accent font-medium"
                    : "hover:bg-white/10"
                    }`}
                  onClick={() => {
                    setActiveItem(item.path);
                    setIsOpen(false);
                  }}
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
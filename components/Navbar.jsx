"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation"; // Fixed import :cite[5]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);
  const pathname = usePathname();
  const mobileMenuRef = useRef(null);
  const scrollTimeout = useRef(null);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      // Throttle scroll events for performance
      if (scrollTimeout.current) return;

      scrollTimeout.current = setTimeout(() => {
        setScrolled(window.scrollY > 20);

        // Section tracking for highlighting active nav item
        if (pathname === "/") {
          const sections = document.querySelectorAll("section[id]");
          let currentSection = "";
          const scrollPosition = window.scrollY + 100;

          sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
              currentSection = section.id;
            }
          });

          setActiveSection(currentSection);
        }

        scrollTimeout.current = null;
      }, 100);
    };

    // Check if window is defined (client-side) :cite[7]
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      // Initial check
      handleScroll();
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [pathname]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) &&
        !event.target.closest('button[aria-label*="menu"]')) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Navigation items
  const navItems = [
    { name: "Home", path: "/", sectionId: null },
    { name: "About", path: "/about", sectionId: "about" },
    {
      name: "Academics",
      path: "/academics",
      sectionId: "academics",
      dropdown: [
        { name: "Curriculum", path: "/academics/curriculum" },
        { name: "Programs", path: "/academics/programs" },
        { name: "Faculty", path: "/academics/faculty" }
      ]
    },
    {
      name: "Admissions",
      path: "/admissions",
      sectionId: "admissions",
      dropdown: [
        { name: "Apply Now", path: "/admissions/apply" },
        { name: "Requirements", path: "/admissions/requirements" },
        { name: "Tuition", path: "/admissions/tuition" }
      ]
    },
    { name: "Gallery", path: "/gallery", sectionId: "gallery" },
    { name: "Scholarships", path: "/scholarships", sectionId: "scholarships" },
    { name: "Contact", path: "/contact", sectionId: "contact" },
  ];

  // Function to handle navigation
  const handleNavigation = (item) => {
    setIsOpen(false);
    setIsDropdownOpen(null);

    if (pathname === "/" && item.sectionId) {
      const element = document.getElementById(item.sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        // Update URL hash :cite[10]
        if (window.history.pushState) {
          window.history.pushState(null, null, `#${item.sectionId}`);
        } else {
          window.location.hash = `#${item.sectionId}`;
        }
      }
    }
  };

  // Toggle dropdown
  const toggleDropdown = (index, event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDropdownOpen(isDropdownOpen === index ? null : index);
  };

  // Close dropdowns when clicking elsewhere
  useEffect(() => {
    const closeDropdowns = () => setIsDropdownOpen(null);
    document.addEventListener("click", closeDropdowns);
    return () => document.removeEventListener("click", closeDropdowns);
  }, []);

  // Check if a nav item is active
  const isItemActive = (item) => {
    if (pathname === "/" && item.sectionId) {
      return activeSection === item.sectionId;
    }
    return pathname === item.path || pathname.startsWith(item.path + "/");
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-white text-primary shadow-md backdrop-blur-md bg-opacity-95 py-1"
          : "bg-gradient-to-r from-primary to-secondary text-white py-2"
        }`}
    >
      <div className="container max-w-screen-xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-2 min-w-0"
          onClick={() => setActiveSection("")}
        >
          <div className="relative flex-shrink-0">
            <Image
              src="/logo2.png"
              alt="Amonto Girls Academy Logo"
              width={scrolled ? 50 : 60}
              height={scrolled ? 40 : 50}
              className="transition-all duration-300"
              priority
            />
          </div>
          <span
            className={`font-bold transition-all duration-300 truncate ${scrolled ? "text-primary text-lg" : "text-white text-xl"
              } hidden sm:block`}
          >
            <span className="text-accent">A</span>monto{" "}
            <span className="text-accent">G</span>irls{" "}
            <span className="hidden md:inline">
              <span className="text-accent">A</span>cademy{" "}
              <span className="text-accent">S</span>econdary{" "}
              <span className="text-accent">S</span>chool (AGASS)
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center">
          <ul className="flex items-center space-x-1 text-base">
            {navItems.map((item, index) => (
              <li key={item.name} className="relative group">
                {item.dropdown ? (
                  // Dropdown item
                  <div className="relative">
                    <button
                      onClick={(e) => toggleDropdown(index, e)}
                      className={`py-3 px-3 transition duration-300 flex items-center ${isItemActive(item)
                          ? "text-accent font-medium"
                          : scrolled
                            ? "text-primary hover:text-accent"
                            : "text-white hover:text-accent"
                        }`}
                    >
                      {item.name}
                      <ChevronDown
                        size={16}
                        className={`ml-1 transition-transform duration-300 ${isDropdownOpen === index ? "rotate-180" : ""
                          }`}
                      />
                    </button>

                    {/* Dropdown menu */}
                    <div
                      className={`absolute top-full left-0 mt-1 w-48 rounded-md shadow-lg overflow-hidden transition-all duration-300 ${isDropdownOpen === index
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-2"
                        } ${scrolled
                          ? "bg-white text-primary border border-gray-200"
                          : "bg-primary/95 backdrop-blur-md text-white"
                        }`}
                    >
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.path}
                          className={`block px-4 py-3 transition-colors duration-200 ${scrolled
                              ? "hover:bg-gray-100"
                              : "hover:bg-white/10"
                            }`}
                          onClick={() => setIsDropdownOpen(null)}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : pathname === "/" && item.sectionId ? (
                  // Scroll-to-section item
                  <button
                    onClick={() => handleNavigation(item)}
                    className={`relative py-3 px-3 transition duration-300 ${isItemActive(item)
                        ? "text-accent font-medium"
                        : scrolled
                          ? "text-primary hover:text-accent"
                          : "text-white hover:text-accent"
                      }`}
                  >
                    {item.name}
                    <span
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent transition-all duration-300 ${isItemActive(item) ? "w-3/4" : "group-hover:w-3/4"
                        }`}
                    ></span>
                  </button>
                ) : (
                  // Regular link item
                  <Link
                    href={item.path}
                    className={`relative py-3 px-3 transition duration-300 ${isItemActive(item)
                        ? "text-accent font-medium"
                        : scrolled
                          ? "text-primary hover:text-accent"
                          : "text-white hover:text-accent"
                      }`}
                  >
                    {item.name}
                    <span
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent transition-all duration-300 ${isItemActive(item) ? "w-3/4" : "hover:w-3/4"
                        }`}
                    ></span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X size={28} className={scrolled ? "text-primary" : "text-white"} />
          ) : (
            <Menu size={28} className={scrolled ? "text-primary" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        ref={mobileMenuRef}
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen
            ? "max-h-screen opacity-100 border-t border-white/10"
            : "max-h-0 opacity-0 border-t-0"
          } ${scrolled
            ? "bg-white/98 backdrop-blur-md text-primary"
            : "bg-gradient-to-b from-primary to-secondary/95 text-white"
          }`}
      >
        <ul className="py-2 px-4 space-y-1">
          {navItems.map((item, index) => (
            <li key={item.name}>
              {item.dropdown ? (
                // Mobile dropdown item
                <div className="relative">
                  <button
                    onClick={(e) => toggleDropdown(index, e)}
                    className={`flex items-center justify-between w-full py-3 px-4 rounded-lg transition-all ${isDropdownOpen === index || isItemActive(item)
                        ? "bg-accent/10 text-accent font-medium"
                        : "hover:bg-white/10"
                      }`}
                  >
                    {item.name}
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-300 ${isDropdownOpen === index ? "rotate-180" : ""
                        }`}
                    />
                  </button>

                  {/* Mobile dropdown menu */}
                  <div
                    className={`pl-6 overflow-hidden transition-all duration-300 ${isDropdownOpen === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                      }`}
                  >
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        href={dropdownItem.path}
                        className={`block py-3 px-4 rounded-lg transition-all ${pathname === dropdownItem.path
                            ? "bg-accent/10 text-accent font-medium"
                            : "hover:bg-white/10"
                          }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : pathname === "/" && item.sectionId ? (
                // Mobile scroll-to-section item
                <button
                  onClick={() => handleNavigation(item)}
                  className={`block w-full text-left py-3 px-4 rounded-lg transition-all ${isItemActive(item)
                      ? "bg-accent/10 text-accent font-medium"
                      : "hover:bg-white/10"
                    }`}
                >
                  {item.name}
                </button>
              ) : (
                // Mobile regular link item
                <Link
                  href={item.path}
                  className={`block py-3 px-4 rounded-lg transition-all ${isItemActive(item)
                      ? "bg-accent/10 text-accent font-medium"
                      : "hover:bg-white/10"
                    }`}
                  onClick={() => setIsOpen(false)}
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
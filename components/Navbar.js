"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState({});
  const pathname = usePathname();
  const mobileMenuRef = useRef(null);
  const scrollTimeout = useRef(null);
  const dropdownRefs = useRef({});
  const lastScrollY = useRef(0);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      // Hide navbar on scroll down, show on scroll up
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setScrolled(true);
        setIsOpen(false);
      } else {
        setScrolled(false);
      }

      lastScrollY.current = currentScrollY;

      // Throttle scroll events for performance
      if (scrollTimeout.current) return;

      scrollTimeout.current = setTimeout(() => {
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

    // Check if window is defined (client-side)
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
        setMobileDropdownOpen({});
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdowns when clicking elsewhere
  useEffect(() => {
    const closeDropdowns = (event) => {
      // Don't close if clicking on dropdown elements
      let shouldClose = true;
      Object.values(dropdownRefs.current).forEach(ref => {
        if (ref && ref.contains(event.target)) {
          shouldClose = false;
        }
      });

      if (shouldClose) {
        setIsDropdownOpen(null);
      }
    };

    document.addEventListener("click", closeDropdowns);
    return () => document.removeEventListener("click", closeDropdowns);
  }, []);

  // Navigation items
  const navItems = [
    { name: "Home", path: "/", sectionId: null },
    { name: "About", path: "/about", sectionId: "about" },
    {
      name: "Academics",
      path: "/academics",
      sectionId: "academics",
    },
    {
      name: "Admissions",
      path: "/admissions",
      sectionId: "admissions",
    },
    { name: "Scholarships", path: "/scholarships", sectionId: "scholarships" },
    { name: "Contact", path: "/contact", sectionId: "contact" },
  ];

  // Function to handle navigation
  const handleNavigation = (item) => {
    setIsOpen(false);
    setIsDropdownOpen(null);
    setMobileDropdownOpen({});

    if (pathname === "/" && item.sectionId) {
      const element = document.getElementById(item.sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        // Update URL hash
        if (window.history.pushState) {
          window.history.pushState(null, null, `#${item.sectionId}`);
        } else {
          window.location.hash = `#${item.sectionId}`;
        }
      }
    }
  };

  // Toggle desktop dropdown
  const toggleDesktopDropdown = (index, event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDropdownOpen(isDropdownOpen === index ? null : index);
  };

  // Toggle mobile dropdown
  const toggleMobileDropdown = (index) => {
    setMobileDropdownOpen(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Check if a nav item is active
  const isItemActive = (item) => {
    if (pathname === "/" && item.sectionId) {
      return activeSection === item.sectionId;
    }
    return pathname === item.path || pathname.startsWith(item.path + "/");
  };

  // Close mobile menu
  const closeMobileMenu = () => {
    setIsOpen(false);
    setMobileDropdownOpen({});
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-white text-primary shadow-lg backdrop-blur-md bg-opacity-95 py-1 -translate-y-full"
        : "bg-gradient-to-r from-primary to-secondary text-white py-2 translate-y-0"
        }`}
      style={{ transition: "transform 0.3s ease-in-out" }}
    >
      <div className="container max-w-screen-xl mx-auto px-4 flex justify-between items-center">
        {/* Logo and School Name */}
        <Link
          href="/"
          className="flex items-center space-x-2 min-w-0 z-10 flex-1"
          onClick={() => {
            setActiveSection("");
            closeMobileMenu();
          }}
        >
          <div className="relative flex-shrink-0">
            <Image
              src="/logo2.png"
              alt="Amonto Girls Academy Logo"
              width={scrolled ? 50 : 60}
              height={scrolled ? 50 : 60}
              className="transition-all duration-300"
              priority
            />
          </div>
          <div className="flex flex-col min-w-0">
            <span
              className={`font-bold transition-all duration-300 truncate ${scrolled ? "text-primary text-lg" : "text-white text-xl"
                }`}
            >
              <span className="text-accent">A</span>monto{" "}
              <span className="text-accent">G</span>irls{" "}
              <span className="text-accent">A</span>cademy
            </span>
            <span className={`text-xs ${scrolled ? "text-gray-600" : "text-white/80"} truncate hidden sm:block`}>
              Secondary School (AGASS)
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center flex-shrink-0">
          <ul className="flex items-center space-x-1 text-base">
            {navItems.map((item, index) => (
              <li key={item.name} className="relative group">
                {item.dropdown ? (
                  // Desktop dropdown item
                  <div
                    className="relative"
                    ref={el => dropdownRefs.current[index] = el}
                  >
                    <button
                      onClick={(e) => toggleDesktopDropdown(index, e)}
                      onMouseEnter={() => setIsDropdownOpen(index)}
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

                    {/* Desktop dropdown menu */}
                    <div
                      className={`absolute top-full left-0 mt-1 w-48 rounded-md shadow-lg overflow-hidden transition-all duration-300 z-50 ${isDropdownOpen === index
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2 pointer-events-none"
                        } ${scrolled
                          ? "bg-white text-primary border border-gray-200"
                          : "bg-primary text-white border border-white/20"
                        }`}
                      onMouseLeave={() => setIsDropdownOpen(null)}
                    >
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.path}
                          className={`block px-4 py-3 transition-colors duration-200 ${scrolled
                            ? "hover:bg-gray-100 hover:text-accent"
                            : "hover:bg-white/10 hover:text-accent"
                            } ${pathname === dropdownItem.path ? "bg-accent/10 text-accent font-medium" : ""}`}
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
                    className={`relative py-3 px-3 transition duration-300 group ${isItemActive(item)
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
                    className={`relative py-3 px-3 transition duration-300 group ${isItemActive(item)
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
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-accent transition-colors z-10 flex-shrink-0"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X size={24} className={scrolled ? "text-primary" : "text-white"} />
          ) : (
            <Menu size={24} className={scrolled ? "text-primary" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        ref={mobileMenuRef}
        className={`lg:hidden fixed inset-x-0 top-full transition-all duration-300 ease-in-out ${isOpen
          ? "opacity-100 visible translate-y-0"
          : "opacity-0 invisible -translate-y-4"
          } ${scrolled
            ? "bg-white text-primary shadow-lg"
            : "bg-primary text-white shadow-lg"
          }`}
        style={{
          maxHeight: isOpen ? "calc(100vh - 80px)" : "0px",
          overflowY: isOpen ? "auto" : "hidden"
        }}
      >
        <div className="px-4 py-4">
          <ul className="space-y-2">
            {navItems.map((item, index) => (
              <li key={item.name}>
                {item.dropdown ? (
                  // Mobile dropdown item
                  <div className="relative">
                    <button
                      onClick={() => toggleMobileDropdown(index)}
                      className={`flex items-center justify-between w-full py-3 px-4 rounded-lg transition-all duration-200 ${mobileDropdownOpen[index] || isItemActive(item)
                        ? "bg-accent/15 text-accent font-medium"
                        : scrolled
                          ? "hover:bg-gray-100 text-primary"
                          : "hover:bg-white/10 text-white"
                        }`}
                    >
                      <span className="font-medium">{item.name}</span>
                      <ChevronRight
                        size={18}
                        className={`transition-transform duration-300 ${mobileDropdownOpen[index] ? "rotate-90" : ""
                          }`}
                      />
                    </button>

                    {/* Mobile dropdown menu */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${mobileDropdownOpen[index]
                        ? "max-h-60 opacity-100 mt-2"
                        : "max-h-0 opacity-0"
                        }`}
                    >
                      <div className="pl-4 space-y-1">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.path}
                            className={`block py-3 px-4 rounded-lg transition-all duration-200 ${pathname === dropdownItem.path
                              ? "bg-accent/15 text-accent font-medium"
                              : scrolled
                                ? "hover:bg-gray-100 text-gray-600 hover:text-primary"
                                : "hover:bg-white/10 text-white/80 hover:text-white"
                              }`}
                            onClick={closeMobileMenu}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : pathname === "/" && item.sectionId ? (
                  // Mobile scroll-to-section item
                  <button
                    onClick={() => handleNavigation(item)}
                    className={`block w-full text-left py-3 px-4 rounded-lg transition-all duration-200 font-medium ${isItemActive(item)
                      ? "bg-accent/15 text-accent font-semibold"
                      : scrolled
                        ? "hover:bg-gray-100 text-primary"
                        : "hover:bg-white/10 text-white"
                      }`}
                  >
                    {item.name}
                  </button>
                ) : (
                  // Mobile regular link item
                  <Link
                    href={item.path}
                    className={`block py-3 px-4 rounded-lg transition-all duration-200 font-medium ${isItemActive(item)
                      ? "bg-accent/15 text-accent font-semibold"
                      : scrolled
                        ? "hover:bg-gray-100 text-primary"
                        : "hover:bg-white/10 text-white"
                      }`}
                    onClick={closeMobileMenu}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile menu backdrop */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
          onClick={closeMobileMenu}
        />
      )}
    </nav>
  );
};

export default Navbar;
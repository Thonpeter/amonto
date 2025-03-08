"use client"; // Required for client-side hooks in Next.js App Router

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // Icon for mobile menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-primary to-secondary text-white shadow-lg">
      <div className="container max-w-screen-xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <Image src="/logo.png" alt="Amonto Girls Academy Logo" width={140} height={50} priority />
          <span className="text-2xl font-bold hidden sm:block">Amonto Girls Academy</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 text-lg">
          {["Home", "About", "Academics", "Admissions", "Gallery", "Scholarships", "Contact"].map((item) => (
            <li key={item}>
              <Link
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="relative py-2 px-4 hover:text-accent transition duration-300 group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <X size={28} className="text-white hover:text-accent transition duration-300" />
          ) : (
            <Menu size={28} className="text-white hover:text-accent transition duration-300" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-primary to-secondary border-t border-white/20">
          <ul className="flex flex-col space-y-4 p-4 text-lg">
            {["Home", "About", "Academics", "Admissions", "Gallery", "Scholarships", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="block py-2 px-4 hover:bg-white/10 rounded transition duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
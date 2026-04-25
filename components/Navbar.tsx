"use client";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Solutions", href: "#solutions" },
  { label: "Features", href: "#features" },
  { label: "Programs", href: "#programs" },
  { label: "Partners", href: "#partners" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-blue-800 flex items-center justify-center">
            <span className="text-white font-bold text-lg font-display">A</span>
          </div>
          <span className={`font-bold text-xl transition-colors font-display ${scrolled ? "text-blue-900" : "text-white"}`}>
            Accredian <span className="text-blue-400">Enterprise</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href}
              className={`nav-link text-sm font-medium transition-colors ${scrolled ? "text-gray-700 hover:text-blue-600" : "text-white/90 hover:text-white"}`}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="#contact" className={`text-sm font-semibold px-5 py-2 rounded-full border transition-all ${scrolled ? "border-blue-600 text-blue-600 hover:bg-blue-50" : "border-white text-white hover:bg-white/10"}`}>
            Get Demo
          </a>
          <a href="#contact" className="text-sm font-semibold px-5 py-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-white hover:from-amber-500 hover:to-orange-600 transition-all shadow-md">
            Contact Sales
          </a>
        </div>

        <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-0.5 transition-all ${scrolled ? "bg-gray-800" : "bg-white"} ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 transition-all ${scrolled ? "bg-gray-800" : "bg-white"} ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 transition-all ${scrolled ? "bg-gray-800" : "bg-white"} ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl">
          <div className="px-6 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)}
                className="text-gray-700 font-medium py-2 border-b border-gray-100">
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setMenuOpen(false)}
              className="mt-2 text-center font-semibold px-5 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white">
              Get a Demo
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ease-in-out ${scrolled
        ? "bg-white/90 dark:bg-black/70 backdrop-blur-lg shadow-lg py-2"
        : "bg-transparent py-4"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/#" className="group flex items-center space-x-3">
            <div className="relative w-10 h-10 overflow-hidden rounded-full shadow-md group-hover:scale-105 transition-transform duration-300 border-2 border-desa-gold">
              <img
                src="/logo.png"
                alt="Logo Desa Guwo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white group-hover:text-desa-gold transition-colors duration-300">
              Desa Guwo
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavItem href="/#" label="Beranda" />
            <NavItem href="/#profil" label="Profil" />
            <NavItem href="/#layanan" label="Layanan" />
            <NavItem href="/#footer" label="Kontak" />
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-full text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-white/10 transition z-[101]"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div
        className={`fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        onClick={toggleMenu}
      />

      {/* Mobile Nav Sidebar */}
      <div
        className={`fixed top-0 right-0 z-[100] h-full w-3/4 max-w-sm bg-white dark:bg-desa-dark shadow-2xl transform transition-transform duration-300 md:hidden ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-end mb-8">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 transition"
            >
              <X size={28} />
            </button>
          </div>
          <nav className="flex flex-col space-y-6">
            <MobileNavItem href="/#" label="Beranda" onClick={toggleMenu} />
            <MobileNavItem href="/#profil" label="Profil" onClick={toggleMenu} />
            <MobileNavItem href="/#layanan" label="Layanan" onClick={toggleMenu} />
            <MobileNavItem href="/#footer" label="Kontak" onClick={toggleMenu} />
          </nav>

          <div className="mt-auto pt-8 border-t border-gray-100 dark:border-white/10 text-center">
            <p className="text-xs text-gray-400">© 2024 Desa Guwo</p>
          </div>
        </div>
      </div>
    </header>
  );
}

function NavItem({ href, label }) {
  return (
    <Link
      href={href}
      className="relative text-base font-medium text-gray-700 dark:text-gray-200 hover:text-desa-gold dark:hover:text-desa-gold transition-colors duration-300 py-2"
    >
      {label}
    </Link>
  );
}

function MobileNavItem({ href, label, onClick }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-xl font-semibold text-gray-800 dark:text-gray-100 hover:text-desa-gold dark:hover:text-desa-gold transition-colors block border-b border-gray-100 dark:border-white/5 pb-2"
    >
      {label}
    </Link>
  );
}

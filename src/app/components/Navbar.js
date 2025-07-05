"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className="w-full fixed top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href={"/#"}>
             <div className="flex items-center space-x-3">
            <img
              src="/logo.png"
              alt="Logo Desa Guwo"
              className="h-8 w-7"
            />
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              Desa Guwo
            </span>
          </div>
          </Link>
         

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            <NavItem href="/#" label="Beranda" />
            <NavItem href="/#profil" label="Profil" />
            <NavItem href="/#layanan" label="Layanan" />
            <NavItem href="/#kontak" label="Kontak" />
          </nav>

          {/* Mobile toggle button */}
          <button
            className="md:hidden text-gray-800 dark:text-gray-300 hover:text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white/90 dark:bg-black/90 px-6 py-4 space-y-3 text-center">
          <NavItem href="/#" label="Beranda" onClick={toggleMenu} />
          <NavItem href="/#" label="Profil" onClick={toggleMenu} />
          <NavItem href="/#layanan" label="Layanan" onClick={toggleMenu} />
          <NavItem href="/#kontak" label="Kontak" onClick={toggleMenu} />
        </div>
      )}
    </header>
  );
}

function NavItem({ href, label, onClick }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition relative group block"
    >
      <span>{label}</span>
      <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-400 transition-all group-hover:w-full"></span>
    </Link>
  );
}

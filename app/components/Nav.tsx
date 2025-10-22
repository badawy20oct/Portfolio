"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between w-full px-8 py-4 mt-2 shadow-sm sticky top-0 bg-white z-50">
      {/* Logo */}
      <Link
        href="/"
        className="text-primary font-extrabold text-3xl sm:text-4xl p-2"
      >
        Badawy
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center justify-center gap-12 text-black text-lg font-semibold">
        <Link
          className="hover:-translate-y-1 duration-300 hover:text-primary"
          href="/Hero"
        >
          About
        </Link>
        <Link
          className="hover:-translate-y-1 duration-300 hover:text-primary"
          href="/Skills"
        >
          Skills
        </Link>
        <Link
          className="hover:-translate-y-1 duration-300 hover:text-primary"
          href="/Projects"
        >
          Projects
        </Link>
        <Link
          className="hover:-translate-y-1 duration-300 hover:text-primary"
          href="/Footer"
        >
          Contact
        </Link>
      </div>

      {/* Desktop Button */}
      <button className="hidden md:block bg-primary text-white font-bold text-lg rounded-full px-4 py-2 hover:opacity-90">
        Download CV
      </button>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 rounded-md text-primary"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-6 text-lg font-semibold z-40">
          <Link
            className="hover:text-primary"
            href="/Hero"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            className="hover:text-primary"
            href="/Skills"
            onClick={() => setIsOpen(false)}
          >
            Skills
          </Link>
          <Link
            className="hover:text-primary"
            href="/Projects"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            className="hover:text-primary"
            href="/Footer"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <button className="bg-primary text-white font-bold text-lg rounded-full px-4 py-2 hover:opacity-90">
            Download CV
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

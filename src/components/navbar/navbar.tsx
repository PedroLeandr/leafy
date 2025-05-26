"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 dark:bg-[#1a2a1a]/90 backdrop-blur-md drop-shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo ou nome */}
          <div className="text-2xl font-extrabold text-[var(--color-text)] dark:text-[var(--color-text-dark)] select-none">
            MeuSite
          </div>

          {/* Botão hamburguer - mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-md border border-[rgba(50,100,30,0.5)] bg-[rgba(143,235,100,0.3)] text-[var(--color-text)] dark:text-[var(--color-text-dark)] hover:bg-[rgba(143,235,100,0.5)] transition"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Menu */}
          <ul
            className={`flex-col md:flex-row md:flex md:items-center md:gap-8 absolute md:static top-full left-0 w-full md:w-auto bg-white/95 dark:bg-[#1a2a1a]/95 backdrop-blur-md rounded-b-md md:rounded-none shadow-md md:shadow-none overflow-hidden transition-max-height duration-300 ease-in-out
              ${menuOpen ? "max-h-96 p-4" : "max-h-0 p-0 md:max-h-full md:p-0"}
            `}
          >
            {[
              { href: "#home", label: "Home" },
              { href: "#empresa", label: "Parcerias" },
              { href: "#sobre-projeto", label: "Sobre Projeto" },
              { href: "#contactos", label: "Contactos" },
            ].map(({ href, label }) => (
              <li key={href} className="mb-3 md:mb-0">
                <Link
                  href={href}
                  className="block min-w-[120px] text-center border border-[rgba(50,100,30,0.5)] rounded-md bg-[rgba(143,235,100,0.3)] text-base md:text-lg px-5 py-3 font-medium hover:bg-[rgba(143,235,100,0.5)] transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

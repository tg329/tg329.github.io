"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/work", label: "Work" },
    { href: "/play", label: "Play" },
    { href: "/about", label: "About" },
    { href: "/resume", label: "Resume" }
  ];

  const getLinkClass = (href: string) =>
    [
      "block py-1 px-1 rounded transition duration-300 ease-in-out",
      "md:hover:bg-transparent hover:underline hover:underline-offset-4",
      pathname === href ? "underline underline-offset-4" : ""
    ].join(" ");

  return (
    <nav className="w-full z-50 backdrop-blur">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-4">
        <Link href="/" className="flex items-center space-x-2 text-2xl font-semibold text-gray-900 dark:text-white hover:scale-110 transition">
          <span>高</span>
        </Link>
        {/* Hamburger */}
        <button
          onClick={() => setIsOpen((v) => !v)}
          type="button"
          className="inline-flex items-center w-5 h-5 justify-center text-gray-700 dark:text-gray-300 rounded-lg md:hidden hover:scale-110 transition"
          aria-controls="navbar-menu"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          {isOpen ? (
            <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 20 20">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 20 20">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
        {/* Menu */}
        <div
          id="navbar-menu"
          className={`w-full md:w-auto md:flex transition duration-300 ease-in-out origin-top ${isOpen
            ? "scale-y-100 opacity-100 pointer-events-auto"
            : "scale-y-0 opacity-0 pointer-events-none"
            } md:scale-y-100 md:opacity-100 md:pointer-events-auto absolute md:static left-0 top-full md:top-auto dark:bg-gray-900/95 md:bg-transparent md:dark:bg-transparent shadow md:shadow-none rounded-b-lg md:rounded-none`}
          style={{ minWidth: "180px" }}
        >
          <ul className="flex flex-col md:flex-row md:space-x-10 p-4 md:p-0 md:mt-0 font-medium justify-center items-center w-full">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={getLinkClass(link.href)}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
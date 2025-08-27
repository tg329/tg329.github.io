"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  const navLinks = [
    { href: "/work", label: "Work" },
    { href: "/play", label: "Play" },
    { href: "/about", label: "About" },
    { href: "files/TiffanyGaoResume.pdf", label: "Resume", target: "_blank", rel: "noopener noreferrer" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="w-full z-50 backdrop-blur">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-2 text-2xl hover:scale-105 transition"
        >
          <span>高</span>
        </Link>

        {/* Hamburger (mobile only) */}
        <button
          onClick={() => setIsOpen((v) => !v)}
          type="button"
          className="inline-flex items-center w-6 h-6 justify-center rounded-lg md:hidden hover:scale-110 transition focus:outline-none focus:ring-0"
          aria-controls="navbar-menu"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <span className="sr-only">Toggle navigation</span>
          {isOpen ? (
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 20 20"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 20 20"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10">
          {navLinks.map((link) => {
            const isExternal = link.target === "_blank";
            return isExternal ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group transition duration-300"
              >
                {link.label}
                <span
                  className={`
                    pointer-events-none absolute left-0 bottom-0 w-full h-[1px]
                    bg-gradient-to-r from-white to-white
                    scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-in origin-left
                  `}
                  aria-hidden="true"
                />
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="relative group transition duration-300"
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.label}
                <span
                  className={`
                    pointer-events-none absolute left-0 bottom-0 w-full h-[1px]
                    bg-gradient-to-r from-white to-white
                    scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-in origin-left
                    ${isActive(link.href) ? "scale-x-100" : ""}
                  `}
                  aria-hidden="true"
                />
              </Link>
            );
          })}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="navbar-menu"
        className={`
          md:hidden w-full absolute left-0 top-full
          transform origin-top transition-transform duration-300 ease-in-out
          ${isOpen ? "scale-y-100 opacity-100 pointer-events-auto bg-[#ededed] text-black" : "scale-y-0 opacity-0 pointer-events-none"}
          shadow rounded-b-lg min-w-[180px]
        `}
      >
        <ul className="flex flex-col items-center p-2 space-y-2">
          {navLinks.map((link) => {
            const isExternal = link.target === "_blank";
            return (
              <li key={link.href} className="w-full text-center relative group">
                {isExternal ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-block py-2 transition"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                    <span
                      className={`
                        pointer-events-none absolute left-0 bottom-2 w-full h-[1px]
                        bg-gradient-to-r from-black to-black
                        scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-in origin-left
                      `}
                      aria-hidden="true"
                    />
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    className="relative inline-block py-2 transition"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                    <span
                      className={`
                        pointer-events-none absolute left-0 bottom-2 w-full h-[1px]
                        bg-gradient-to-r from-black to-black
                        scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-in origin-left
                      `}
                      aria-hidden="true"
                    />
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

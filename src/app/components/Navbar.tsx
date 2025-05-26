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
    { href: "/resume", label: "Resume" }
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="w-full z-50 backdrop-blur">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-4">
        <Link
          href="/"
          className="flex items-center space-x-2 text-2xl font-semibold hover:scale-110 transition"
        >
          <span>高</span>
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen((v) => !v)}
          type="button"
          className="inline-flex items-center w-6 h-6 justify-center rounded-lg md:hidden hover:scale-110 transition"
          aria-controls="navbar-menu"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <span className="sr-only">Toggle navigation</span>
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
          className={`
    w-full md:w-auto md:flex
    transform origin-top transition-transform duration-300 ease-in-out
    ${isOpen ? "scale-y-100 opacity-100 pointer-events-auto bg-[#ededed] text-black" : "scale-y-0 opacity-0 pointer-events-none"}
    md:scale-y-100 md:opacity-100 md:pointer-events-auto md:bg-transparent md:text-inherit
    absolute md:static left-0 top-full md:top-auto
    shadow md:shadow-none rounded-b-lg md:rounded-none min-w-[180px]
  `}
        >

          <ul
            className={`flex flex-col md:flex-row md:space-x-10 p-4 md:p-0 font-medium justify-center items-center w-full`}
          >
            {navLinks.map((link) => (
              <li key={link.href} className="relative group">
                <Link
                  href={link.href}
                  className={`
            relative block py-1 px-1 rounded transition duration-300 ease-in-out md:hover:bg-transparent
            ${isActive(link.href)
                      ? isOpen
                        ? "text-black"
                        : "text-white"
                      : "text-inherit"
                    }
          `}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                  <span
                    className={`
              pointer-events-none absolute left-0 bottom-0 w-full h-[2px]
              bg-gradient-to-r from-black to-black
              scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-in
              origin-left ${isActive(link.href) && isOpen ? "scale-x-100" : ""
                      } md:from-white md:to-white md:${isActive(link.href) ? "scale-x-100" : ""
                      }
            `}
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </nav>
  );
}

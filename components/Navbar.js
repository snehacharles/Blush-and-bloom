"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navLinks = [
  { name: "HOME", id: "home" },
  { name: "ABOUT", id: "about" },
  { name: "SERVICES", id: "services" },
  { name: "GALLERY", id: "gallery" },
  { name: "BOOKING", id: "booking" },
  { name: "CONTACT", id: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const sectionHref = (id) => (pathname === "/" ? `#${id}` : `/#${id}`);

  return (
    <>
      <div className="announcement">
        YOUR BEAUTY, OUR PASSION — EXPERIENCE THE DIFFERENCE
      </div>

      <header className="navbar">
        <Link
          href={sectionHref("home")}
          className="brand"
          onClick={() => setOpen(false)}
        >
          <span className="brand-name">blush &amp; bloom</span>
          <span className="brand-subtitle">BEAUTY STUDIO</span>
        </Link>

        <nav
          className={`nav-links ${open ? "active" : ""}`}
          id="primary-navigation"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={sectionHref(link.id)}
              onClick={() => setOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <Link href={sectionHref("booking")} className="nav-book">
          BOOK AN APPOINTMENT <span aria-hidden="true">↗</span>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          onClick={() => setOpen((isOpen) => !isOpen)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="primary-navigation"
        >
          {open ? "✕" : "☰"}
        </button>
      </header>
    </>
  );
}

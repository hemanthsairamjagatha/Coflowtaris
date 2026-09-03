"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Helper to determine if a link is active
  // We consider it active if the pathname starts with the link's href 
  // (e.g. /judgment/pricing is active under /judgment)
  const isActive = (path: string) => pathname.startsWith(path);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="header-logo" onClick={closeMenu}>FLOWTARIS</Link>
        <button 
          className="mobile-menu-btn" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
        <nav className={`header-nav ${isMenuOpen ? "open" : ""}`}>
          <Link 
            href="/judgment" 
            className={isActive("/judgment") ? "active-nav" : ""}
            onClick={closeMenu}
          >
            JUDGMENT
          </Link>
          <Link 
            href="/evidence" 
            className={isActive("/evidence") ? "active-nav" : ""}
            onClick={closeMenu}
          >
            EVIDENCE
          </Link>
          <Link 
            href="/leverage" 
            className={isActive("/leverage") ? "active-nav" : ""}
            onClick={closeMenu}
          >
            LEVERAGE
          </Link>
          <Link 
            href="/principles" 
            className={isActive("/principles") ? "active-nav" : ""}
            onClick={closeMenu}
          >
            PRINCIPLES
          </Link>
          <Link 
            href="/contact" 
            className={`contact-link ${isActive("/contact") ? "active-nav" : ""}`.trim()}
            onClick={closeMenu}
          >
            CONTACT &rarr;
          </Link>
        </nav>
      </div>
    </header>
  );
}

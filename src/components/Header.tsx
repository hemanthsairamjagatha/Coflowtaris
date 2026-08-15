"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  // Helper to determine if a link is active
  // We consider it active if the pathname starts with the link's href 
  // (e.g. /judgment/pricing is active under /judgment)
  const isActive = (path: string) => pathname.startsWith(path);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="header-logo">FLOWTARIS</Link>
        <nav className="header-nav">
          <Link 
            href="/judgment" 
            className={isActive("/judgment") ? "active-nav" : ""}
          >
            JUDGMENT
          </Link>
          <Link 
            href="/evidence" 
            className={isActive("/evidence") ? "active-nav" : ""}
          >
            EVIDENCE
          </Link>
          <Link 
            href="/leverage" 
            className={isActive("/leverage") ? "active-nav" : ""}
          >
            LEVERAGE
          </Link>
          <Link 
            href="/contact" 
            className={`contact-link ${isActive("/contact") ? "active-nav" : ""}`.trim()}
          >
            CONTACT &rarr;
          </Link>
        </nav>
      </div>
    </header>
  );
}

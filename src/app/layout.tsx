import "./global.css";
import type { Metadata } from "next";
import { Header } from "../components/Header";

export const metadata: Metadata = {
  title: "Flowtaris | Judgment, Evidence, Leverage",
  description: "Engineering complex systems for companies where reliability, judgment, and execution matter.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="layout-container">
          <Header />
          <main>
            {children}
          </main>
          <footer className="site-footer">
            <div className="footer-inner">
              <div className="footer-logo">FLOWTARIS</div>
              <div className="footer-links">
                <nav className="footer-nav-primary">
                  <a href="/judgment">JUDGMENT</a>
                  <a href="/evidence">EVIDENCE</a>
                  <a href="/leverage">LEVERAGE</a>
                  <a href="/principles">PRINCIPLES</a>
                </nav>
                <nav className="footer-nav-secondary">
                  <a href="/contact">CONTACT</a>
                  <a href="https://linkedin.com">LINKEDIN</a>
                  <a href="https://x.com">X</a>
                </nav>
              </div>
              <div className="footer-copyright">
                &copy; 2026 FLOWTARIS TECHNOLOGIES PVT LTD
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}

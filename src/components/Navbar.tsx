import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Home", href: "/", isAnchor: false },
  { label: "Projetos", href: "/projects", isAnchor: false },
  { label: "Sobre", href: "#about", isAnchor: true },
  { label: "Contato", href: "#contact", isAnchor: true },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass py-4" : "py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="font-mono text-xl font-bold">
          <span className="text-primary">&lt;</span>
          <span className="text-foreground">N</span>
          <span className="text-primary">/&gt;</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) =>
            item.isAnchor ? (
              <a
                key={item.href}
                href={item.href}
                className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <span className="text-primary">0{index + 1}.</span> {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                to={item.href}
                className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <span className="text-primary">0{index + 1}.</span> {item.label}
              </Link>
            )
          )}
          <a
            href="/cv.pdf"
            className="px-4 py-2 border border-primary text-primary font-mono text-sm rounded hover:bg-primary/10 transition-colors"
          >
            Currículo
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass mt-2 mx-6 rounded-xl p-6 animate-fade-in">
        <div className="flex flex-col gap-4">
            {navItems.map((item, index) =>
              item.isAnchor ? (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-mono text-muted-foreground hover:text-primary transition-colors"
                >
                  <span className="text-primary">0{index + 1}.</span> {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-mono text-muted-foreground hover:text-primary transition-colors"
                >
                  <span className="text-primary">0{index + 1}.</span> {item.label}
                </Link>
              )
            )}
            <a
              href="/cv.pdf"
              className="mt-2 px-4 py-2 border border-primary text-primary font-mono text-sm rounded text-center hover:bg-primary/10 transition-colors"
            >
              Currículo
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
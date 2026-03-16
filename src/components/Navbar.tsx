import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const currentSection = [...navItems].reverse().find((item) => {
        const section = document.querySelector(item.href);
        if (!(section instanceof HTMLElement)) {
          return false;
        }

        return window.scrollY + window.innerHeight * 0.35 >= section.offsetTop;
      });

      setActiveHref(currentSection?.href ?? null);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`site-nav fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "is-scrolled shadow-sm" : ""
      } ${mobileOpen ? "is-open" : ""}`}
    >
      <div className="relative z-10 container mx-auto flex items-center justify-between py-4 px-6">
        <a href="#" className="font-display text-xl text-foreground">
          Brianna McDonald
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-7">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`relative inline-flex items-center pl-8 font-body text-sm tracking-wide transition-colors ${
                activeHref === item.href
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              <img
                src="/images/singleflower.png"
                alt=""
                aria-hidden="true"
                className={`nav-flower-accent transition-opacity ${
                  activeHref === item.href ? "opacity-60" : "opacity-0"
                }`}
              />
              {item.label}
            </a>
          ))}
          <a
            href="/documents/BriannaMcDonaldResume.pdf"
            target="_blank"
            rel="noreferrer"
            className="ml-7 font-body text-sm bg-primary text-primary-foreground px-5 py-2 rounded-full hover:opacity-90 transition-opacity"
          >
            Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav-menu"
        >
          {mobileOpen ? (
            <X className="h-6 w-6 text-foreground" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          id="mobile-nav-menu"
          className="relative z-10 md:hidden border-t border-border px-6 pb-1"
        >
          <a
            href="/documents/BriannaMcDonaldResume.pdf"
            target="_blank"
            rel="noreferrer"
            onClick={() => setMobileOpen(false)}
            className="block py-3 font-body font-medium text-foreground hover:text-primary transition-colors"
          >
            Resume
          </a>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 font-body text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

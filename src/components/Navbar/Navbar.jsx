import "./Navbar.css";
import { useEffect, useState } from "react";
import { Menu, X, Moon } from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-6 pt-5">
      <nav
        className={`navbar ${
          scrolled ? "navbar-scrolled" : "navbar-glass"
        } flex w-full max-w-7xl items-center justify-between px-7 py-3`}
      >

        {/* Logo*/}
        <a href="#top"
          className="logo text-lg font-semibold tracking-wide"
        >
          ʕっ•ᴥ•ʔっ
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="nav-link text-sm"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* Theme Toggle (sementara dummy) */}
          <button
            className="
            theme-btn
            hidden
            md:flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            "
          >
            <Moon size={18} />
          </button>

          {/* Mobile Menu */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="
              md:hidden
              rounded-lg
              p-2
              text-slate-300
              transition-all
              duration-300
              hover:text-white
              hover:bg-white/5
              active:scale-95
            "
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div
            className="
            md:hidden
            border-t
            border-blue-400/10
            bg-[#050812]/95
            backdrop-blur-xl
            "
          >
            <div className="flex flex-col gap-5 px-8 py-6">

              {NAV_LINKS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="
                  text-slate-300
                  transition-colors
                  hover:text-blue-400
                  "
                >
                  {item.label}
                </a>
              ))}

            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
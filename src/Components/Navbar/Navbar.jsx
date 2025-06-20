import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { Menu, X } from "lucide-react";
import logo from "/Navbar/logo.svg";
import { cn } from "../../lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", to: "" },
    { name: "About", to: "about" },
    { name: "Our Solutions", to: "ourSolutions" },
    { name: "Our Experience", to: "ourExperience" },
    { name: "Gallery", to: "gallery" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-navbar backdrop-blur-md shadow-md py-3"
          : "bg-navbar/50 py-5 shadow-xl"
      )}
    >
      <div className="container flex items-center justify-between px-3">
        {/* Logo */}
        <NavLink to="" className="flex items-center space-x-2 z-50">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.to}
              className="text-primary text-lg font-bold hover:text-hover transition-colors duration-300"
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden z-50 text-primary"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden fixed flex flex-col items-center justify-center inset-0 w-full h-screen z-40 bg-navbar transition-all duration-300 overflow-y-auto",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col items-center justify-center space-y-8 py-16 text-xl font-bold text-primary">
            {navItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.to}
                className="hover:text-hover transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

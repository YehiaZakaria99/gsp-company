import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router";
import { ChevronDown, ChevronUp, ChevronUpIcon, Menu, X } from "lucide-react";
import logo from "/Navbar/logo.svg";
import { cn } from "../../lib/utils";
import NavbarMobile from "./NavbarMobile";
import AboutDropdown from "./AboutDropdown";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // About Menu ###########################################
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const aboutMenuRef = useRef(null);

  // Scroll ###############################################
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", to: "" },
    {
      name: "About",
      to: "about",
      aboutList: [
        { name: "GSP Introduction", to: "/about/gsp-introduction" },
        { name: "GSP Information", to: "/about/gsp-information" },
        { name: "Organizational Chart", to: "/about/organizational-chart" },
        { name: "Our Man Power", to: "/about/our-man-power" },
        { name: "Owned Machines", to: "/about/owned-machines" },
        { name: "Financial Status", to: "/about/financial-status" },
      ],
    },
    { name: "Our Solutions", to: "ourSolutions" },
    { name: "Our Experience", to: "ourExperience" },
    { name: "Gallery", to: "gallery" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-300",
          isScrolled
            ? "bg-navbar backdrop-blur-md shadow-md py-3"
            : "bg-navbar md:bg-navbar/50 py-5 shadow-xl"
        )}
      >
        <div className="container flex items-center justify-between ">
          {/* Logo */}
          <NavLink to="" className="flex items-center space-x-2 z-50">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </NavLink>

          {/* Desktop */}
          <div className="hidden lg:flex space-x-8">
            {navItems.map((item, index) => (
              <div key={index} className="relative">
                {item.aboutList ? (
                  <>
                    <AboutDropdown
                      ref={aboutMenuRef}
                      state={isAboutDropdownOpen}
                      setState={setIsAboutDropdownOpen}
                      item={item}
                      isMobile={false}
                    />
                  </>
                ) : (
                  <NavLink
                    to={item.to}
                    className="text-primary text-lg font-bold hover:text-hover transition-colors duration-300 flex items-center"
                  >
                    {item.name}
                  </NavLink>
                )}
              </div>
            ))}
          </div>

          {/* Mobile */}
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden z-50 text-primary"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
        <NavbarMobile
          navItems={navItems}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          isAboutDropdownOpen={isAboutDropdownOpen}
          setIsAboutDropdownOpen={setIsAboutDropdownOpen}
        />
      </nav>
    </>
  );
}

/* 

          <div
            className="relative group"
            onMouseEnter={() => setIsDropdownOpen("about")}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-mainColor transition duration-300">
              About{" "}
              {isDropdownOpen === "about" ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </button>
            <div
              className={`absolute top-full mt-2 bg-navBg rounded-md shadow-lg overflow-hidden transition-all duration-300 ${
                isDropdownOpen === "about"
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2"
              }`}
            >
              <NavLink
                to="/about/overview"
                className="block px-4 py-2 hover:text-mainColor transition whitespace-nowrap duration-300"
                onClick={() => setIsDropdownOpen(false)}
              >
                Overview
              </NavLink>
              <NavLink
                to="/about/leadership"
                className="block px-4 py-2 hover:text-mainColor transition whitespace-nowrap duration-300"
                onClick={() => setIsDropdownOpen(false)}
              >
                Leadership
              </NavLink>
            </div>
          </div>

*/

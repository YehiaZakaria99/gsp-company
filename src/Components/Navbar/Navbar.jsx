// import React from 'react'

import logo from "/Navbar/logo.svg";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "../../lib/utils";
import { NavLink } from "react-router";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      // console.log(window.scrollY);

      setIsScrolled(window.scrollY > 10);
    }
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

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleCloseMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled
          ? "bg-navbar backdrop-blur-md shadow-xs py-3"
          : "py-5 bg-navbar/80",
        ""
      )}
    >
      <div className={cn("container flex items-center justify-between ")}>
        {/* Logo */}
        <NavLink
          className="text-xl font-bold flex items-center"
          to=""
        >
          <span className="relative z-10">
            <img className="w-full" src={logo} alt="aa" />
          </span>
        </NavLink>
        {/* Links */}
        {/* Desktop */}
        <div className="hidden md:flex items-center space-x-8 py-2">
          {navItems.map((navItem, key) => (
            <NavLink
              key={key}
              className="text-primary text-lg font-bold hover:text-hover transition-colors duration-300"
              to={navItem.to}
            >
              {navItem.name}
            </NavLink>
          ))}
          {/* <ThemeToggle /> */}
        </div>

        {/* Mobile */}
        {
          <div
            className={cn(
              "md:hidden flex flex-col items-center justify-center",
              "fixed z-40 inset-0 bg-background/10 backdrop-blur-md",
              "transition-all duration-300 ",
              isMenuOpen
                ? "opacity-80 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            )}
          >
            <div className="flex flex-col space-y-8 text-xl items-center">
              {navItems.map((navItem, key) => (
                <NavLink
                  key={key}
                  to={navItem.to}
                  className="font-bold hover:text-primary transition-colors duration-300 active"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {navItem.name}
                </NavLink>
              ))}
              {/* <ThemeToggle /> */}
            </div>
          </div>
        }

        <div className="btn relative z-50 md:hidden">
          <button
            onClick={() => handleCloseMenu()}
            className="cursor-pointer"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? (
              // Close
              <X size={24} />
            ) : (
              // Open
              <Menu />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

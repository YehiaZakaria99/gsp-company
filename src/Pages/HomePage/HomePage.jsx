// import React from "react";
import { useEffect, useState } from "react";
import ScrollUp from "../../Components/Scroll/ScrollUp";
import { cn } from "../../lib/utils";
import AboutSection from "../../Sections/AboutSection";
import LeadershipSection from "../../Sections/LeadershipSection";
import OurSolutionsSection from "../../Sections/OurSolutionsSection";
import HeroSection from "./../../Sections/HeroSection";
import WhyChooseUs from "./../../Sections/WhyChooseUs";
import ContactSection from "../../Sections/ContactSection";

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);

  function handleScroll() {
    if (window.scrollY >= 200) {
      setIsScrolled(true);
    } else{
      setIsScrolled(false);

    }
  }

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className={cn("relative", "", "")}>
        {/* HeroSection */}
        <HeroSection />
        <LeadershipSection />
        <AboutSection />
        <WhyChooseUs />
        <OurSolutionsSection />
        <ContactSection />

        {isScrolled && <ScrollUp to="heroSection" />}

        {/* Certificates */}
        {/* Contact Us */}
      </div>
    </>
  );
}

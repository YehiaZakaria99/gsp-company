// import React from "react";
import { cn } from "../../lib/utils";
import AboutSection from "../../Sections/AboutSection";
import LeadershipSection from "../../Sections/LeadershipSection";
import OurSolutionsSection from "../../Sections/OurSolutionsSection";
import HeroSection from "./../../Sections/HeroSection";
import WhyChooseUs from "./../../Sections/WhyChooseUs";

export default function HomePage() {
  return (
    <>
      <div className={cn("", "", "")}>
        {/* HeroSection */}
        <HeroSection />
        <LeadershipSection />
        <AboutSection />
        <WhyChooseUs />
        <OurSolutionsSection />

        {/* Certificates */}
        {/* Contact Us */}
      </div>
    </>
  );
}

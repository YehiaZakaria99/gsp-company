import { useEffect, useState } from "react";
import img1 from "/HomePage/HeroSection/1.jpg";
import img2 from "/HomePage/HeroSection/2.webp";
import img3 from "/HomePage/HeroSection/3.webp";
import img4 from "/HomePage/HeroSection/4.jpeg";

import { cn } from "../lib/utils";
import { Link } from "react-scroll";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Slider from "react-slick";

const slides = [img1, img2, img3, img4];

export default function HeroSection() {
  // Preload images
  useEffect(() => {
    slides.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 1000,
    cssEase: "ease-in-out",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    waitForAnimate: false,
    pauseOnHover: false,
  };

  return (
    <section
      id="heroSection"
      className="relative h-screen w-full overflow-hidden bg-primary"
    >
      <Slider {...settings}>
        {slides.map((src, index) => (
          <div key={index}>
            <div className="relative h-screen w-full overflow-hidden">
              <img
                src={src}
                alt={`slide-${index}`}
                className="absolute inset-0 h-full w-full object-cover object-center z-0 transition-opacity duration-1000"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary via-navbar/50 to-primary/90 z-10" />

              {/* Content */}
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
                <motion.h1
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-primary text-3xl md:text-5xl my-8 font-extrabold tracking-wide overflow-hidden min-h-[3rem] md:min-h-[4rem]"
                >
                  <TypeAnimation
                    sequence={[
                      1500,
                      "Welcome to GSP",
                      1500,
                      "Gulf Seas For Pipes",
                    ]}
                    speed={75}
                    cursor={false}
                    repeat={Infinity}
                  />
                </motion.h1>

                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                  className="text-primary/90 text-xl md:text-3xl font-bold overflow-hidden"
                >
                  Expertise in construction and pipeline solutions
                </motion.h3>
              </div>

              {/* Scroll Button */}
              <div className="absolute left-1/2 transform -translate-x-1/2 bottom-8 z-40">
                <Link
                  to="leadershipSection"
                  smooth={true}
                  duration={0}
                  offset={-50}
                >
                  <div className="w-6 h-10 border-2 border-navbar cursor-pointer rounded-full flex items-start justify-center p-1 mx-auto animate-bounce">
                    <div className="w-1 h-2 bg-navbar rounded-full" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

import img1 from "/HomePage/HeroSection/1.jpg";
import img2 from "/HomePage/HeroSection/2.webp";
import img3 from "/HomePage/HeroSection/3.jpg";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

// Framer Motion
import { motion } from "framer-motion";
// import { TypeAnimation } from "react-type-animation";
// import HeroText from "./../Components/HeroText";

export default function HeroSection() {
  const slides = [img1, img2, img3];

  return (
    <section className="relative h-screen w-full">
        <Swiper
          effect={"fade"}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          slidesPerView={1}
          modules={[EffectFade, Autoplay]}
          className="h-full w-full"
        >
          {slides.map((bg, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative h-screen w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${bg})` }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-navbar/70 via-navbar/50 to-navbar/20 z-10" />

                {/* Content */}
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3}}
                    className="text-primary text-4xl md:text-6xl font-extrabold tracking-wide"
                  >
                    GSP
                  </motion.h1>
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.6 }}
                    className="text-[#05120f] text-xl md:text-3xl mt-2 font-bold"
                  >
                    Expertise in construction and pipeline solutions
                  </motion.h3>
                  {/* <h1 className="text-bg text-4xl md:text-6xl font-extrabold tracking-wide">
                  <TypeAnimation
                    sequence={[
                      // Same substring at the start will only be typed once, initially
                      1000,
                      "GSP",
                    ]}
                    speed={75}
                    style={{}}
                    repeat={Infinity}
                  />

                </h1>
                <h3 className="text-bg-2 text-xl md:text-3xl mt-2 font-medium">
                  <TypeAnimation
                    sequence={[
                      // Same substring at the start will only be typed once, initially
                      1000,
                      "Gulf Seas Pipes Company",
                    ]}
                    speed={75}
                    style={{}}
                    repeat={Infinity}
                  />
                </h3> */}
                  {/* <HeroText /> */}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
    </section>
  );
}

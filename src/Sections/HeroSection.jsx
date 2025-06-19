import gspMechanicalServices from "/HomePage/HeroSection/gsp-mechanical-services.webp";
import gspProfile from "/HomePage/HeroSection/GSP-Profile.jpg";
import gspPipelinesSolutions from "/HomePage/HeroSection/gsp-pipelines-solutions.webp";
import pipelinesSolutions from "/HomePage/HeroSection/pipelines-solutions.webp";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";

export default function HeroSection() {
  const slides = [
    // gspMechanicalServices,
    gspPipelinesSolutions,
    pipelinesSolutions,
  ];

  return (
    <section className="relative bg-hero h-screen">
      <div className="container px-0 h-full">
        <div className="relative slider h-full">
          <Swiper
            effect={"coverflow"}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"1"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={false}
            navigation={false}
            modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
            className="mySwiper overflow-hidden rounded-md h-full"
          >
            {slides.map((bg, i) => (
              <SwiperSlide key={i}>
                <div
                  className="relative h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${bg})` }}
                >
                  {/* overlay */}
                  <div className="absolute inset-0 bg-black/60 z-10"></div>

                  {/* النص الثابت */}
                  <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
                    <h1 className="text-hover text-3xl md:text-5xl font-bold text-center">
                      GSP
                    </h1>
                    <h3 className="text-bg  text-xl md:text-3xl">
                      GULF SEAS PIPES COMPANY
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

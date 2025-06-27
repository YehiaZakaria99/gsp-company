import { Autoplay, Mousewheel, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "/AboutPage/gsp-introduction/img1.jpeg";

export default function GSPIntroduction() {
  return (
    <section className="gsp-introduction h-screen bg-gradient-to-br from-primary via-primary/90 to-primary/60 py-24 relative overflow-hidden">
      <Swiper
        direction="vertical"
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={{
          forceToAxis: true,
          sensitivity: 0.5,
          thresholdDelta: 30,
          thresholdTime: 300,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[Mousewheel, Pagination, Autoplay]}
        className="mySwiper"
        style={{ height: "100%" }}
      >
        <SwiperSlide>
          <div className="h-full flex flex-col-reverse md:flex-row justify-between items-center px-6 md:px-16 gap-10">
            {/* Text Section */}
            <div
              className="md:w-1/2 text-white space-y-6 animate-fade-in-up"
              style={{ animationDelay: "0.5s" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-wide">
                Gulf Seas Pipes Co.
              </h2>
              <p className="text-lg md:text-xl leading-relaxed">
                A 100% Saudi Company, a leading provider of construction, civil
                Pipelines & Mechanical services in the Kingdom. With over 20
                years of experience, we have a proven track record of delivering
                high-quality, cost-effective projects on time and within budget.
              </p>
            </div>

            {/* Image Section */}
            <div
              className="relative md:w-1/2 rounded-xl overflow-hidden shadow-2xl animate-fade-in"
              style={{ animationDelay: "0.8s" }}
            >
              <img
                className="w-full h-full object-cover"
                src={img1}
                alt="img1"
              />
              <div className="absolute inset-0 bg-black/20 " />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

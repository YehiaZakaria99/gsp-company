import { Autoplay, Mousewheel, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function GSPIntroduction() {
  return (
    <>
      <section className="gsp-introduction h-screen bg-orange-700 py-36">
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
            delay: 4000, // ⏱️ يغير السلايد كل 4 ثواني
            disableOnInteraction: false, // يكمّل autoplay حتى لو المستخدم عمل scroll
          }}
          pagination={{ clickable: true }}
          modules={[Mousewheel, Pagination, Autoplay]}
          className="mySwiper"
          style={{ height: "100%" }}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}

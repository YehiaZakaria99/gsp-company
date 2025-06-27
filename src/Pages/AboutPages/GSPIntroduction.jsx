import { Autoplay, Mousewheel, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "/AboutPage/gsp-introduction/img1.jpeg";
import GspIntroductionDiv from "./../../Components/AboutComponents/GspIntroductionDiv";

export default function GSPIntroduction() {
  const introData = [
    {
      img: img1,
      h2: "Gulf Seas Pipes Co.",
      p: `  A 100% Saudi Company, a leading provider of construction, civil
            Pipelines & Mechanical services in the Kingdom. With over 20 years
            of experience, we have a proven track record of delivering
            high-quality, cost-effective projects on time and within budget.`,
    },
    {
      img: img1,
      h2: "",
      p: `At Gulf Seas Pipes Co., we are committed to providing our clients with the highest level
       of service and expertise. Our team of qualified professionals is dedicated 
       to understanding your unique needs and developing customized solutions that meet your specific requirements.
`,
    },
    {
      img: img1,
      h2: "",
      p: `Gulf Seas For Pipes. (GSP) since 1991 commits to provide comprehensive top-quality services to its community.
       We Excelled in executing various construction projects of all types of complexities as well as various types of services.
`,
    },
    {
      img: img1,
      h2: "",
      p: `GSP is capable of earthworks, civil works, electrical works, mechanical works,
       road works, including construction of drilling well pads, reservoirs,
        waste disposal ponds with provision of HDPE plastic lining works. At GSP, we utilize many modern techniques of construction,
       scheduling and cost controlling with effective quality & safety to ensure targets are met within the client budget
`,
    },
  ];

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
        // pagination={{ clickable: true }}
        modules={[Mousewheel, Pagination, Autoplay]}
        className="mySwiper"
        style={{ height: "100%" }}
      >
        {introData.map(({ h2, p, img }, key) => (
          <SwiperSlide>
            <GspIntroductionDiv key={key} h2={h2} p={p} img={img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

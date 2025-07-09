import { useEffect, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import bgImg from "/HomePage/WhyChooseUs/bgImg.webp";
import ISO_45001 from "/HomePage/WhyChooseUs/ISO45001.webp";
import ISO_9001 from "/HomePage/WhyChooseUs/ISO9001.webp";
import ISO_14001 from "/HomePage/WhyChooseUs/ISO14001.webp";
import Picture1 from "/HomePage/WhyChooseUs/Picture1.webp";
import Picture2 from "/HomePage/WhyChooseUs/Picture2.webp";
import Picture3 from "/HomePage/WhyChooseUs/Picture3.webp";
import Picture4 from "/HomePage/WhyChooseUs/Picture4.webp";
import Picture5 from "/HomePage/WhyChooseUs/Picture5.webp";

import { cn } from "../lib/utils";
import { BadgeCheck, Briefcase, Handshake, Workflow } from "lucide-react";
import CountUp from "react-countup";
import { Fade } from "react-awesome-reveal";

export default function WhyChooseUs() {
  const bookRef = useRef();

  const imgs = [
    ISO_45001,
    ISO_9001,
    ISO_14001,
    Picture1,
    Picture2,
    Picture3,
    Picture4,
    Picture5,
  ];

  return (
    <section
      id="why-choose-us"
      className="relative bg-primary/95 py-20 px-4 md:px-16 bg-cover bg-bottom bg-fixed"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-primary/80 z-10" />
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 relative z-20">
        {/* Left: Flipbook */}
        <div className="space-y-6">
          <Fade direction="left" duration={800} cascade damping={0.5}>
            <div className="flex justify-center">
              <HTMLFlipBook
                ref={bookRef}
                width={300}
                height={500}
                showCover={false}
                className="shadow-2xl rounded-xl"
                useMouseEvents={true}
                flippingTime={1000} // smoother transition
              >
                {/* Cover Page */}
                <div
                  className={cn(
                    "h-full rounded-xl",
                    "flex items-center justify-center",
                    "bg-primary text-white border-2 border-black/50 shadow-inner"
                  )}
                >
                  <div className="text-center space-y-2 px-4 h-full flex flex-col items-center justify-center ">
                    <h2 className="text-xl md:text-2xl font-bold text-white tracking-wide">
                      Our Certifications
                    </h2>
                    <p className="text-sm ">
                      These certificates prove our commitment to safety,
                      quality, and environmental responsibility.
                    </p>
                    <p className="text-sm absolute bottom-10">
                      Click page to explore more
                    </p>
                  </div>
                </div>

                {/* ISO Certificates */}
                {imgs.map((img, i) => (
                  <div key={i} className="bg-white h-full rounded-xl">
                    <img
                      src={img}
                      alt={`Certificate ${i + 1}`}
                      className="rounded-xl shadow-lg h-full "
                    />
                  </div>
                ))}

                {/* Back Page */}
                <div className="flex items-center justify-center bg-primary text-white h-full rounded-xl border-2 border-black/50">
                  <div
                    className={cn(
                      "text-center space-y-2 h-full ",
                      "flex flex-col justify-center"
                    )}
                  >
                    <p className="text-lg md:text-xl">
                      Gulf Seas For Pipes (GSP)
                    </p>
                    <p className="text-sm text-gray-200">
                      Certified to Build Excellence
                    </p>
                  </div>
                </div>
              </HTMLFlipBook>
            </div>

            <div className="text-center">
              <button
                className={cn(
                  "mt-6 inline-block text-md  px-4 py-2 rounded-md ",
                  "text-white font-bold bg-primary border border-white",
                  "hover:bg-primary hover:border-primary  transition duration-300"
                )}
              >
                More Details
              </button>
            </div>
          </Fade>
        </div>

        {/* Right: Why Choose Us */}
        <div className="space-y-6">
          <Fade direction="right" duration={800} cascade damping={0.5}>
            <h3 className="text-3xl font-bold text-white mb-4">
              Why Choose Us ?
            </h3>
            <div className="space-y-8 text-white text-sm ">
              <div className="flex gap-2 ">
                <BadgeCheck></BadgeCheck>
                <div>
                  <h4 className="text-xl font-semibold ">
                    Certified Excellence
                  </h4>
                  <p>
                    We are internationally certified in quality, safety, and
                    environmental standards.
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                <Briefcase></Briefcase>
                <div>
                  <h4 className="text-xl font-semibold ">
                    Extensive Industry Experience
                  </h4>
                  <p className="">
                    Over 20 years of expertise in delivering industrial and
                    construction solutions.
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                <Workflow></Workflow>
                <div>
                  <h4 className="text-xl font-semibold ">
                    End-to-End Solutions
                  </h4>
                  <p>
                    From design to final delivery, we manage every step with
                    precision and care.
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                <Handshake></Handshake>
                <div>
                  <h4 className="text-xl font-semibold ">
                    Trusted by Industry Leaders
                  </h4>
                  <p>
                    We serve high-profile clients including ARAMCO and other
                    regional leaders.
                  </p>
                </div>
              </div>
            </div>
          </Fade>
          <div className="text-white py-10  flex justify-between font-bold text-6xl">
            <span className=" p-5 flex justify-center items-center">
              <CountUp start={0} end={32} duration={1} enableScrollSpy={true}>
                {({ countUpRef }) => <span ref={countUpRef} />}
              </CountUp>
              <span className="text-hover">K</span>
            </span>
            <span className=" p-5 flex justify-center items-center">
              <CountUp start={0} end={250} duration={1} enableScrollSpy={true}>
                {({ countUpRef }) => <span ref={countUpRef} />}
              </CountUp>
              <span className="text-hover">+</span>
            </span>
            <span className=" p-5 flex justify-center items-center">
              <CountUp start={0} end={45} duration={1} enableScrollSpy={true}>
                {({ countUpRef }) => <span ref={countUpRef} />}
              </CountUp>
              <span className="text-hover">m</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

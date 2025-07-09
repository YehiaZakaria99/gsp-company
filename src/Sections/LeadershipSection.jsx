import { cn } from "../lib/utils";
import img1 from "/HomePage/LeadershipSection/img1.webp";
import VideoPlayer from "./../Components/LeaderShipComponent/VideoPlayer";
import { NavLink } from "react-router";
import chairmanImg from "/AboutPages/LeadershipPage/owner.webp";
import { Fade, Slide } from "react-awesome-reveal";
import ScrollDown from "../Components/Scroll/ScrollDown";

export default function LeadershipSection() {
  return (
    <>
      <section id="leadershipSection" className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-10 ">
          {/* // { Left - ImagesorVideo } */}

          <div className="w-full lg:w-1/2 space-y-4">
            <Fade direction="left" duration={800} cascade damping={1}>
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <img
                  loading="lazy"
                  src={img1}
                  alt="team"
                  className="w-full object-center object-cover h-[250px]"
                />
              </div>
              <p className="text-4xl font-bold text-primary">
                22+
                <span className="text-gray-800 text-xl ml-1">
                  Years Experience
                </span>
              </p>
            </Fade>
          </div>

          {/* // { Right - Content } */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-4">
              {/* Header */}
              <Fade direction="right" duration={600}>
                <h2 className="text-2xl md:text-3xl font-bold text-primary">
                  Leadership to Inspire & Encourage
                </h2>
              </Fade>

              {/* Quote */}
              <Fade direction="right" duration={600} delay={200}>
                <p className="italic text-primary/80">
                  “The key to the Group’s sustainable success is encouraging
                  leadership at all levels...
                </p>
              </Fade>

              <div className="flex flex-col lg:flex-row gap-6">
                {/*Highlights + CTA */}
                <div className="w-full lg:w-1/2 space-y-4">
                  <Fade direction="right" duration={600} delay={400}>
                    <ul className="space-y-2 text-gray-700">
                      {[
                        "Multi-Speciality Company",
                        "22+ Years of Progress",
                        "Worldwide Presence",
                        "Continuously Innovate",
                      ].map((text, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="text-primary">➤</span> {text}
                        </li>
                      ))}
                    </ul>
                  </Fade>

                  <Fade direction="right" duration={600} delay={600}>
                    <NavLink
                      to="about/leadership"
                      className={cn(
                        "inline-block font-semibold mt-4 px-6 py-2 rounded-lg",
                        "special-style border"
                      )}
                    >
                      Read Chairman’s Message
                    </NavLink>
                  </Fade>

                  <Fade direction="right" duration={600} delay={800}>
                    <div className="space-y-6">
                      {/* Chairman */}
                      <div className="flex items-center gap-4">
                        <img
                          loading="lazy"
                          src={chairmanImg}
                          alt="Chairman"
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-semibold text-sm">
                            Mohammed Shamrookh Al Assmi
                          </p>
                          <p className="text-xs text-gray-500">
                            Chairman of Company
                          </p>
                        </div>
                      </div>

                      {/* Executive Director */}
                      <div className="flex items-center gap-4">
                        <img
                          loading="lazy"
                          src={chairmanImg}
                          alt="Executive Director"
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-semibold text-sm">
                            Mutaeb AlHajri
                          </p>
                          <p className="text-xs text-gray-500">
                            Executive Director
                          </p>
                        </div>
                      </div>
                    </div>
                  </Fade>
                </div>

                {/* Video */}
                <div className="w-full lg:w-1/2 py-5">
                  <Fade direction="right" duration={600} delay={1000}>
                    <VideoPlayer />
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        {/* Scroll Button */}
        </div>
        {/* <ScrollDown to="leadershipSection" /> */}
      </section>
    </>
  );
}

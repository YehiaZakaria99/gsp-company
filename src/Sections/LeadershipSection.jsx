import { cn } from "../lib/utils";
import img1 from "/HomePage/LeadershipSection/img1.webp";
import VideoPlayer from "./../Components/LeaderShipComponent/VideoPlayer";
import { NavLink } from "react-router";
import chairmanImg from "/AboutPages/LeadershipPage/owner.jpg";

export default function LeadershipSection() {
  return (
    <>
      <section id="leadershipSection" className="py-16 bg-white">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-10 ">
          {/* // { Left - ImagesorVideo } */}
          <div className="w-full lg:w-1/2 space-y-4">
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img
                src={img1}
                alt=""
                className="w-full object-center object-cover h-[250px]"
              />
            </div>

            <p className="text-4xl font-bold text-primary">
              22+
              <span className="text-gray-800 text-xl ml-1">
                Years Experience
              </span>
            </p>
          </div>

          {/* // { Right - Content } */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-primary">
                Leadership to Inspire & Encourage
              </h2>
              <p className="italic text-primary/80">
                “The key to the Group’s sustainable success is encouraging
                leadership at all levels...
              </p>

              <div className="flex  ">
                <div className="w-full lg:w-1/2  ">
                  {/* // {Highlights} */}
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <span className="text-primary">➤</span> Multi-Speciality
                      Company
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">➤</span> 22+ Years of
                      Progress
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">➤</span> Worldwide Presence
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">➤</span> Continuously
                      Innovate
                    </li>
                  </ul>

                  {/* // { CTAButton } */}
                  <NavLink
                    to="about/leadership"
                    className={cn(
                      "inline-block font-semibold mt-4 px-6 py-2  rounded-lg",
                      "special-style"
                    )}
                  >
                    Read Chairman’s Message
                  </NavLink>

                  {/* // { Signature } */}

                  {/* Chairman */}
                  <div className="flex items-center gap-4 mt-6">
                    <img
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
                  <div className="flex items-center gap-4 mt-6">
                    <img
                      src={chairmanImg}
                      alt="Executive Director"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-sm">Mutaeb AlHajri</p>
                      <p className="text-xs text-gray-500">
                        Executive Director
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 py-5">
                  <VideoPlayer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

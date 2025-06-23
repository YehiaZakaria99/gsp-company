import React from "react";

export default function LeadershipSection() {
  return (
    <>
      <section
        id="leadershipSection"
        className="py-16 bg-sec"
      >
        {/* // className="h-screen  bg-gradient-to-b from-primary/40  to-primary overflow-hidden" */}
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-10 ">
          {/* // { Left - ImagesorVideo } */}
          <div className="w-full lg:w-1/2 space-y-4">
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img
                src="/assets/img/about-excavator.jpg"
                alt=""
                className="w-full object-cover h-[250px]"
              />
              {/* // { PlayButtonOverlay } */}
              <button className="absolute inset-0 flex items-center justify-center bg-black/30">
                <div className="bg-primary p-4 rounded-full">
                  {/* // <svg>...</svg> { Add a play icon here } */}
                </div>
              </button>
            </div>

            <p className="text-4xl font-bold text-primary">
              22+
              <span className="text-gray-800 text-xl ml-1">
                Years Experience
              </span>
            </p>
          </div>

          {/* // { Right - Content } */}
          <div className="w-full lg:w-1/2 space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">
              Leadership to Inspire & Encourage
            </h2>
            <p className="italic text-gray-600">
              “The key to the Group’s sustainable success is encouraging
              leadership at all levels...
            </p>
            {/* // {Highlights} */}
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <span className="text-primary">➤</span> Multi-Speciality Company
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">➤</span> 22+ Years of Progress
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">➤</span> Worldwide Presence
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">➤</span> Continuously Innovate
              </li>
            </ul>
            {/* // { CTAButton } */}
            <a
              href="#/about/chairman-message"
              className="inline-block mt-4 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition"
            >
              Read Chairman’s Message
            </a>
            {/* // { Signature } */}
            <div className="flex items-center gap-4 mt-6">
              <img
                src="/assets/img/chairman.jpg"
                alt="Chairman"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-semibold text-sm">Mohammed Al Qahtani</p>
                <p className="text-xs text-gray-500">Chairman of Company</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}








/* 

<section id="about-overview" className="py-16 bg-white">
  <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">
    // { Left - Images or Video }
    <div className="w-full lg:w-1/2 space-y-4">
      <div className="relative rounded-xl overflow-hidden shadow-lg">
        <img src="/assets/img/about-excavator.jpg" alt="Excavator" className="w-full object-cover h-[250px]" />
        // { Play Button Overlay }
        <button className="absolute inset-0 flex items-center justify-center bg-black/30">
          <div className="bg-primary p-4 rounded-full">
            // <svg>...</svg> { Add a play icon here }
          </div>
        </button>
      </div>

      <p className="text-4xl font-bold text-primary">22+<span className="text-gray-800 text-xl ml-1">Years Experience</span></p>
    </div>

    // { Right - Content }
    <div className="w-full lg:w-1/2 space-y-4">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Leadership to Inspire & Encourage</h2>
      <p className="italic text-gray-600">
        “The key to the Group’s sustainable success is encouraging leadership at all levels...
      </p>

      // { Highlights }
      <ul className="space-y-2 text-gray-700">
        <li className="flex items-center gap-2"><span className="text-primary">➤</span> Multi-Speciality Company</li>
        <li className="flex items-center gap-2"><span className="text-primary">➤</span> 22+ Years of Progress</li>
        <li className="flex items-center gap-2"><span className="text-primary">➤</span> Worldwide Presence</li>
        <li className="flex items-center gap-2"><span className="text-primary">➤</span> Continuously Innovate</li>
      </ul>

      // { CTA Button }
      <a href="#/about/chairman-message" className="inline-block mt-4 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition">
        Read Chairman’s Message
      </a>

      // { Signature }
      <div className="flex items-center gap-4 mt-6">
        <img src="/assets/img/chairman.jpg" alt="Chairman" className="w-12 h-12 rounded-full" />
        <div>
          <p className="font-semibold text-sm">Mohammed Al Qahtani</p>
          <p className="text-xs text-gray-500">Chairman of Company</p>
        </div>
      </div>
    </div>
  </div>
</section>

*/

/* 



*/

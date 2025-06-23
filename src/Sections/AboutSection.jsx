import {
  BarChart2,
  Hammer,
  Info,
  Pyramid,
  UserCircle,
  Users2,
} from "lucide-react";
import React from "react";

export default function AboutSection() {
  const sections = [
    {
      title: "GSP Introduction",
      link: "/about#gsp-introduction",
      icon: <Info />,
    },
    {
      title: "Chairman's Message",
      link: "/about#chairman",
      icon: <UserCircle />,
    },
    {
      title: "Organizational Chart",
      link: "/about#chart",
      icon: <Pyramid />,
    },
    { title: "Our Man Power", link: "/about#manpower", icon: <Users2 /> },
    { title: "Owned Machines", link: "/about#machines", icon: <Hammer /> },
    {
      title: "Financial Status",
      link: "/about#financial",
      icon: <BarChart2 />,
    },
  ];

  return (
    <>
      <section className="py-20 bg-sec">
        <div className="container mx-auto px-4 text-center">
          {/* <h2 className="text-3xl font-bold mb-10">Explore About GSP</h2> */}
          <h3 className="font-bold text-3xl text-primary text-center">
            About Us
          </h3>
          <p className="text-center max-w-96 mx-auto font-semibold my-6 md:text-lg text-primary/90">
            Gulf Seas For Pipes. (GSP) since 1991 commits to provide
            comprehensive top-quality services to its community.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {sections.map((section, key) => (
              <a
              key={key}
                href={section.link}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center gap-3"
              >
                <div className="text-primary text-4xl">{section.icon}</div>
                <h3 className="text-lg font-semibold">{section.title}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* 
<div className="content-box py-20">
            <h3 className="font-bold text-3xl text-primary text-center">
              About Us
            </h3>
            <p className="text-center max-w-96 mx-auto font-semibold mt-6 md:text-lg text-navbar">
              Gulf Seas For Pipes. (GSP) since 1991 commits to provide
              comprehensive top-quality services to its community.
            </p>
          </div>

*/

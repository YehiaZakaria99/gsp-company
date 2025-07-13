import {
  BarChart2,
  Hammer,
  Info,
  Pyramid,
  UserCircle,
  Users2,
} from "lucide-react";
import { NavLink } from "react-router";
import { cn } from "../lib/utils";
import { Fade, Zoom } from "react-awesome-reveal";

export default function AboutSection() {
  const sections = [
    {
      title: "GSP Introduction",
      to: "/about/gsp-introduction",
      icon: <Info />,
    },
    {
      title: "GSP Information",
      to: "/about/gsp-information",
      icon: <UserCircle />,
    },
    {
      title: "Organizational Chart",
      to: "/about/organizational-chart",
      icon: <Pyramid />,
    },
    { title: "Our Man Power", to: "/about/our-man-power", icon: <Users2 /> },
    {
      title: "Owned Machines",
      to: "/about/owned-machines",
      icon: <Hammer />,
    },
    {
      title: "Financial Status",
      to: "/about/financial-status",
      icon: <BarChart2 />,
    },
  ];

  return (
    <>
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <Fade
            direction="right"
            duration={600}
            delay={200}
            cascade
            damping={0.5}
            triggerOnce
          >
            <div className="mb-12">
              <h3 className="text-3xl md:text-4xl font-extrabold text-primary tracking-wide mb-2">
                About Us
              </h3>
              <div className="w-24 h-[3px] bg-primary mx-auto" />
              <p className="text-center max-w-96 mx-auto font-semibold my-6 md:text-lg text-primary/90">
                Gulf Seas For Pipes. (GSP) since 1991 commits to provide
                comprehensive top-quality services to its community.
              </p>
            </div>
          </Fade>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Fade duration={800} cascade damping={0.2} triggerOnce>
              {sections.map((section, key) => (
                <NavLink
                  key={key}
                  to={section.to}
                  className={cn(
                    " p-6 rounded-xl  transition flex flex-col items-center gap-3 border ",
                    "shadow-md shadow-primary/70",
                    "special-style border-t-4"
                  )}
                >
                  <div className=" text-4xl">{section.icon}</div>
                  <h3 className="text-lg font-bold ">{section.title}</h3>
                </NavLink>
              ))}
            </Fade>
          </div>
        </div>
      </section>
    </>
  );
}

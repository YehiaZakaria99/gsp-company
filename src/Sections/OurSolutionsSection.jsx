import { Building2, Cable, Pipette, Settings, Wrench } from "lucide-react";
import { Link } from "react-router";
import { cn } from "../lib/utils";
import { Fade } from "react-awesome-reveal";

const solutions = [
  {
    icon: <Building2 size={36} />,
    title: "Construction Solutions",
    description:
      "Comprehensive civil and construction services tailored to industrial needs.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36px"
        viewBox="0 0 48 48"
        fill="currentColor"
      >
        <path d="M40,30a2,2,0,0,0-2,2v1H22a2,2,0,0,1,0-4h4A12,12,0,0,0,26,5H10V4A2,2,0,0,0,6,4V16a2,2,0,0,0,4,0V15H26a2,2,0,0,1,0,4H22a12,12,0,0,0,0,24H38v1a2,2,0,0,0,4,0V32A2,2,0,0,0,40,30Z" />
      </svg>
    ),
    title: "Pipelines Solutions",
    description:
      "Expertise in pipeline installation, maintenance, and inspection.",
  },
  {
    icon: <Settings size={36} />,
    title: "Mechanical Solutions",
    description:
      "Innovative mechanical systems and equipment for industrial operations.",
  },
  {
    icon: <Cable size={36} />,
    title: "Electrical Solutions",
    description:
      "High-quality electrical systems, installations, and automation.",
  },
  {
    icon: <Wrench size={36} />,
    title: "Technical Solutions",
    description:
      "Specialized technical support and custom-engineered solutions.",
  },
];

export default function OurSolutionsSection() {
  return (
    <section className="py-16 bg-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <Fade direction="left" duration={800} cascade damping={0.5} triggerOnce>
          <h3 className="text-3xl font-bold text-primary mb-12">
            Our Solutions
          </h3>
        </Fade>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <Fade duration={800} cascade damping={0.2} triggerOnce>
            {solutions.map((solution, idx) => (
              <div
                key={idx}
                className={cn(
                  "bg-white rounded-2xl shadow-md p-6 border-t-4 h-full border-primary text-primary",
                  "transition-all duration-300 transform hover:scale-105 hover:bg-primary hover:text-white"
                )}
              >
                <div className="mb-4 flex justify-center items-center">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                <p className="text-sm ">{solution.description}</p>
              </div>
            ))}
          </Fade>
        </div>

        <Fade direction="left" duration={800} triggerOnce>
          <div className="mt-12">
            <Link
              to="/ourSolutions"
              className={cn(
                "inline-block text-md px-6 py-2 rounded-md border border-primary text-primary",
                "hover:bg-primary hover:text-white transition-colors duration-300 font-semibold"
              )}
            >
              More Details
            </Link>
          </div>
        </Fade>
      </div>
    </section>
  );
}

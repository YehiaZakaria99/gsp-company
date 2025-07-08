import { Building2, Cable, Pipette, Settings, Wrench } from "lucide-react";
import { Link } from "react-router";
import { cn } from "../lib/utils";
import { Fade, Flip } from "react-awesome-reveal";

const solutions = [
  {
    icon: <Building2 size={36} />,
    title: "Construction Solutions",
    description:
      "Comprehensive civil and construction services tailored to industrial needs.",
  },
  {
    icon: <Pipette size={36} />,
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
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <Fade direction="left" duration={800} cascade damping={0.5}>
          <h3 className="text-3xl font-bold text-primary mb-12">
            Our Solutions
          </h3>
        </Fade>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          <Flip direction="vertical" duration={800} cascade damping={0.2}>
            {solutions.map((solution, idx) => (
              <div
                key={idx}
                className={cn(
                  "bg-white rounded-2xl shadow-md p-6 border-t-4 border-primary text-primary",
                  "special-style border-t-4 h-full"
                )}
              >
                <div className="mb-4 flex justify-center">{solution.icon}</div>
                <h3 className="text-xl font-semibold  mb-2">
                  {solution.title}
                </h3>
                <p className="text-sm">{solution.description}</p>
              </div>
            ))}
          </Flip>
        </div>
        <Fade direction="left" duration={800}>
          <div className="mt-12">
            <Link
              to="/ourSolutions"
              className={cn(
                "mt-6 inline-block text-md  px-4 py-2 rounded-md ",
                "font-semibold ",
                "special-style border"
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

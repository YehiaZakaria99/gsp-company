import OurSolutionsPageCard from "./../../Components/OurSolutionsComponents/OurSolutionsPageCard";

import bgImg from "/OurSolutionsPage/bgImg.webp";


import pipelinesImg from "/OurSolutionsPage/pipelines-solutions.webp";
import constructionImg from "/OurSolutionsPage/construction-solutions.webp";
import mechanicalImg from "/OurSolutionsPage/mechanical-solutions.webp";


import { cn } from "../../lib/utils";

export default function OurSolutionsPage() {
  const solutions = [
    {
      id: 0,
      img: constructionImg,
      title: "Construction Solutions",
      description: `We have extensive experience in all aspects of construction, from civil and marine works to building and infrastructure development`,
    },
    {
      id: 1,
      img: pipelinesImg,
      title: "Pipelines Solutions",
      description: `We specialize in the design, construction, and maintenance of pipelines for oil, gas, and water transmission.
      Our capabilities in Pipe construction, Bending of pipes, Automatic welding, Procedure testing, Permanent control of welding procedures,
      Lowering the pipe strings with pipe fitters, Joint welding by hand or automatic methods
`,
    },
    {
      id: 2,
      img: mechanicalImg,
      title: "Mechanical Solutions",
      description: `We provide a full range of mechanical services; including equipment installation,
      maintenance, and repair, with a specific focus on air conditioning and refrigeration systems.`,
    },
    { id: 3, img: "", title: "Electrical Solutions", description: `` },
    { id: 3, img: "", title: "Technical Solutions", description: "" },
  ];
  return (
    <>
      <section className="oursolution-page">
        {/* <div className="container mx-auto px-4"> */}
        {/* Header Section */}
        <section className="bg-primary/20 pt-20">
          <div
            className={cn(
              "relative px-6 md:px-16 mb-20 shadow-2xl overflow-hidden",
              "flex flex-col-reverse md:flex-row items-center gap-10",
              "h-[300px] md:h-[450px] lg:h-[500px]",
              "bg-cover bg-bottom bg-fixed"
            )}
            style={{ backgroundImage: `url(${bgImg})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-hover/30 to-primary/80 z-10 animate-fade-in" />
            <div className="md:w-1/2 space-y-4 z-20 text-center md:text-left">
              <h1 className="text-bg text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-xl">
                Our Solutions
              </h1>
              <p
                className="text-white max-w-3xl mx-auto text-xl md:text-2xl font-bold leading-relaxed"
                data-aos="fade-left"
              >
                We offer a wide range of services, with our core business
                focused on earthwork activities
              </p>
            </div>
          </div>
          {/* <h2
            className="text-3xl md:text-4xl font-bold  mb-4  "
            data-aos="fade-right"
          ></h2> */}
        </section>
        <section className="space-y-28 overflow-hidden">
          {solutions.map((solution, index) => (
            <OurSolutionsPageCard
              key={index}
              solution={solution}
              index={index}
            />
          ))}

          {/* <OurSolutionsPageCard index={0} />
            <OurSolutionsPageCard index={1} />
            <OurSolutionsPageCard index={2} /> */}
        </section>
        {/* </div> */}
      </section>
    </>
  );
}

import React, { useEffect, useState } from "react";
import { Tree, TreeNode } from "react-organizational-chart";
import chartData from "../../Data/chartData.json";
import { cn } from "../../lib/utils";

export default function OrganizationalChart() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderNode = (node, key) => (
    <TreeNode
      key={key}
      label={
        <div
          className={cn(
            "text-white bg-primary border-2 border-white text-center",
            "rounded-full px-3 py-1.5 md:px-4 md:py-2",
            "text-xs md:text-sm shadow-sm transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          )}
        >
          {node.name}
          <div className="text-[10px] md:text-xs text-white/80">
            {node.title}
          </div>
        </div>
      }
    >
      {node.children &&
        node.children.map((child, idx) => renderNode(child, idx))}
    </TreeNode>
  );

  return (
    <section
      className={cn(
        "organizational-chart min-h-screen  py-24 relative overflow-hidden",
        "bg-white"
      )}
    >
      {/* overlay */}
      <div className="absolute w-96 h-96 bg-white/10 rounded-full -top-20 -left-20 blur-3xl opacity-30"></div>
      <div className="absolute w-72 h-72 bg-white/5 rounded-full -bottom-10 -right-10 blur-2xl opacity-20"></div>
      {/* ################ */}

      <div className="container flex flex-col items-center justify-center gap-10 py-16 px-4">
        <div
          className="  space-y-6 w-full text-center "
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-0 text-primary border-b-2 border-white/20 inline-block pb-2">
            Organizational Chart
          </h2>
          <p className="text-primary/80 text-sm md:text-base font-bold max-w-md mx-auto ">
            Explore our structure and meet the amazing team leading our company.
          </p>
        </div>

        <div className="w-full flex justify-center">
          <div className="min-w-[600px] w-full flex justify-center">
            <Tree
              direction={isMobile ? "vertical" : "horizontal"}
              lineWidth={"2px"}
              lineColor="#292C62"
              lineBorderRadius={"10px"}
              label={
                <div
                  className={cn(
                    "text-white font-bold bg-primary border-2 border-white text-center",
                    "rounded-full px-4 py-2 md:px-6 md:py-2",
                    "text-sm md:text-base shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                  )}
                >
                  {chartData.name}
                  <div className="text-xs font-medium text-white/80">
                    {chartData.title}
                  </div>
                </div>
              }
            >
              {chartData.children.map((child, key) => renderNode(child, key))}
            </Tree>
          </div>
        </div>
      </div>
    </section>
  );
}

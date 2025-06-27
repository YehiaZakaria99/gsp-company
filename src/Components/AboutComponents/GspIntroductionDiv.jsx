import React from "react";

export default function GspIntroductionDiv({h2,p,img}) {
  return (
    <>
      <div className="h-full flex flex-col-reverse md:flex-row justify-between items-center px-6 md:px-16 gap-10">
        {/* Text Section */}
        <div
          className="md:w-1/2 text-white space-y-6 animate-fade-in-up"
          style={{ animationDelay: "0.5s" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-wide">
            {h2}
          </h2>
          <p className="text-lg md:text-xl leading-relaxed">
            {p}
          </p>
        </div>

        {/* Image Section */}
        <div
          className="relative md:w-1/2 rounded-xl overflow-hidden shadow-2xl animate-fade-in"
          style={{ animationDelay: "0.8s" }}
        >
          <img className="w-full h-full object-cover" src={img} alt={img} />
          <div className="absolute inset-0 bg-black/20 " />
        </div>
      </div>
    </>
  );
}

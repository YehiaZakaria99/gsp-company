import React from "react";
import { cn } from "../../lib/utils";

export default function GspIntroductionDiv({ h2, p, img }) {
  return (
    <div
      className={cn(
        "px-6 md:px-16 py-10 gap-10",
        "flex flex-col-reverse md:flex-row justify-between items-center"
      )}
    >
      {/* Text */}
      <div className="md:w-1/2 text-primary space-y-6">
        {h2 && (
          <h2 className="text-3xl md:text-4xl font-bold tracking-wide">{h2}</h2>
        )}
        <p className="text-lg md:text-xl leading-relaxed">{p}</p>
      </div>

      {/* Image */}
      <div className="relative md:w-1/2 rounded-xl overflow-hidden shadow-lg">
        <img className="w-full h-full object-cover" src={img} alt="Slide" />
        <div className="absolute inset-0 bg-primary/40" />
      </div>
    </div>
  );
}

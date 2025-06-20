import { useState, useEffect } from "react";
// import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

export default function HeroText() {
  const [textIndex, setTextIndex] = useState(0);

  const texts = [
    { text: "GSP", className: "text-4xl md:text-6xl font-bold text-primary" },
    {
      text: "Gulf Seas Pipes Company",
      className: "text-3xl md:text-5xl font-medium text-hover",
    },
  ];

  return (
    <h1 className={`tracking-wide ${texts[textIndex].className}`}>
      <TypeAnimation
        sequence={[
          () => setTextIndex(0),
          texts[0].text,
          2000, // wait before deleting
          "", // delete

          () => setTextIndex(1),
          texts[1].text,
          2500,
          "", // delete
        ]}
        speed={75}
        deletionSpeed={75}
        repeat={Infinity}
        cursor={false}
        wrapper="span"
        className="inline"
        cursorClassName="text-primary"
      />
    </h1>
  );
}

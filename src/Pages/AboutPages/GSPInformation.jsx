import img1 from "/AboutPage/gsp-information/scan-me.webp";
import { cn } from './../../lib/utils';

const infoData = [
  { "Company Name ": " Gulf Seas For Pipes. (GSP)" },
  { "Commercial Registration No.(CR)": "2051174064" },
  { "Value Added Tex No": "310229334300003" },
  { "Aramco Vendor No": "10108180" },
  {
    Address:
      "P.O.BOX 3086, Al Bandariyah Tower - A, Office -105, Al Khobar 31952, Kingdom of Saudi Arabia",
  },
];

export default function GSPInformation() {
  return (
    <>
      <section className="gsp-information min-h-screen bg-gradient-to-br from-primary via-primary/90 to-primary/60 py-24 relative overflow-hidden">
        <div className="absolute w-96 h-96 bg-white/10 rounded-full -top-20 -left-20 blur-3xl opacity-30"></div>
        <div className="absolute w-72 h-72 bg-white/5 rounded-full -bottom-10 -right-10 blur-2xl opacity-20"></div>

        <div className="container">
          <div className="flex flex-col-reverse md:flex-row justify-between items-center px-6 md:px-16 gap-10">
            {/* Text Section */}
            <div
              className="md:w-1/2 text-white space-y-6"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-white border-b-2 border-white/20 inline-block pb-2">
                Company Information
              </h2>
              <ul className="space-y-4">
                {infoData.map((infoObj, infoKey) => (
                  <li
                    key={infoKey}
                    className={cn(
                        "bg-white/50 p-4 rounded-lg shadow-lg backdrop-blur-sm border border-white/20",
                        "transition-all duration-500 ",
                        "group hover:bg-white"
                    )}
                  >
                    {Object.entries(infoObj).map(([key, value], i) => (
                      <div key={i} className="flex flex-col gap-1">
                        <span className={cn(
                            "text-lg text-primary/80 font-bold",
                            "transition-all duration-300",
                            "group-hover:text-primary"
                        )}>{key}</span>
                        <span className={cn(
                            "text-xl font-semibold text-white",
                            "transition-all duration-300",
                            "group-hover:text-primary/80"
                            )}>
                          {value}
                        </span>
                      </div>
                    ))}
                  </li>
                ))}
              </ul>
            </div>

            {/* Image Section */}
            <div
              className="relative md:w-1/2 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.4)] border border-white/10"
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              <img
                className="w-full h-full object-cover grayscale-[80%] hover:grayscale-0 transition duration-500 relative z-20"
                src={img1}
                alt="Scan QR"
              />
              {/* <div className="absolute inset-0 bg-primary/ z-10" /> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

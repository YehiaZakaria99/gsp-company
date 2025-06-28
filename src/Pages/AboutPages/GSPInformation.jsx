import img1 from "/AboutPage/gsp-information/scan-me.webp";
import { cn } from "./../../lib/utils";

const infoData = [
  { "Company Name": "Gulf Seas For Pipes. (GSP)" },
  { "Commercial Registration No. (CR)": "2051174064" },
  { "Value Added Tax No.": "310229334300003" },
  { "Aramco Vendor No.": "10108180" },
  {
    Address:
      "P.O.BOX 3086, Al Bandariyah Tower - A, Office -105, Al Khobar 31952, Kingdom of Saudi Arabia",
  },
];

export default function GSPInformation() {
  return (
    <section className="gsp-information min-h-screen bg-primary/10 py-36 md:py-24 relative overflow-hidden">
      {/* Background Blur Circles */}
      <div className="absolute w-96 h-96 bg-white/10 rounded-full -top-20 -left-20 blur-3xl opacity-20"></div>
      <div className="absolute w-72 h-72 bg-white/5 rounded-full -bottom-10 -right-10 blur-2xl opacity-20"></div>

      <div className="container px-4 md:px-10 lg:px-20">
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-12">
          {/* Text Section */}
          <div
            className="w-full lg:w-1/2 space-y-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary border-b-2 border-primary/50 inline-block pb-2">
              Company Information
            </h2>
            <ul className="space-y-4">
              {infoData.map((infoObj, key) => (
                <li
                  key={key}
                  className={cn(
                    "bg-primary p-4 rounded-lg shadow-lg backdrop-blur-sm border border-white/20",
                    "transition-all duration-500 ",
                    "group hover:bg-white"
                  )}
                  data-aos="fade-up"
                  data-aos-delay={400 + key * 100}
                >
                  {Object.entries(infoObj).map(([label, value], i) => (
                    <div key={i} className="flex flex-col gap-1">
                      <span
                        className={cn(
                          " text-sm md:text-base font-semibold text-white/80 ",
                          "transition-all duration-300",
                          "group-hover:text-primary"
                        )}
                      >
                        {label}
                      </span>
                      <span
                        className={cn(
                          "text-base md:text-lg font-bold text-white",
                          "transition-all duration-300",
                          "group-hover:text-primary/80"
                        )}
                      >
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
            className="w-full lg:w-1/2 max-w-md mx-auto"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <div className="overflow-hidden rounded-2xl shadow-2xl border border-white/20">
              <img
                src={img1}
                alt="Scan QR"
                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

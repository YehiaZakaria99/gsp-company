import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { cn } from "./../lib/utils";

export default function ContactSection() {
  return (
    <section className="bg-navBg relative overflow-hidden py-20 px-4 lg:px-32">
      <div className="absolute -top-10 -left-10 w-64 h-64 bg-mainColor opacity-10 rounded-full blur-3xl z-0"></div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h3
          className="text-3xl md:text-4xl font-bold text-primary mb-4"
          data-aos="fade-up"
        >
          Contact Us
        </h3>
        <p
          className="text-primary text-lg md:text-xl mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Whether you have a question, a business inquiry, or just want to say
          hello — we're here to listen.
        </p>

        {/* Map */}
        <div
          className="w-full h-[400px] mb-12 rounded-2xl overflow-hidden shadow-xl border border-mainColor/10"
          data-aos="zoom-in-up"
        >
          <iframe
            title="gspLocation"
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d915417.7871715222!2d49.758230847358675!3d26.331332553463806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d30.0192266!2d31.2727774!4m5!1s0x3e49e9b296d1f973%3A0xa03ccdc4c9c1c993!2sAL%20BANDARIYAH%20TOWER%2C%208627%2BWMG%2C%20Al%20Bandariyah%2C%20Al%20Khobar%2034424%2C%20Saudi%20Arabia!3m2!1d26.302312999999998!2d50.214204699999996!5e0!3m2!1sen!2seg!4v1752067534992!5m2!1sen!2seg"
            loading="lazy"
          ></iframe>
        </div>

        {/* Contact Info Cards */}
        <div className="grid gap-6 md:grid-cols-3 mb-12">
          {/* Email */}
          <div
            className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-primary flex flex-col items-center gap-3"
            // data-aos="fade-up"
            // data-aos-delay="100"
          >
            <div className="bg-mainColor text-navBg p-3 rounded-full">
              <Mail size={24} />
            </div>
            <div className="text-center text-sm">
              <p className="font-semibold">Emails</p>
              <a
                href="mailto:info@gsp-sa.com"
                className="hover:underline block"
              >
                info@gsp-sa.com
              </a>
              <a
                href="mailto:mohammed@gsp-sa.com"
                className="hover:underline block"
              >
                mohammed@gsp-sa.com
              </a>
            </div>
          </div>

          {/* Phone */}
          <div
            className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-primary flex flex-col items-center gap-3"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="bg-mainColor text-navBg p-3 rounded-full">
              <Phone size={24} />
            </div>
            <div className="text-center text-sm">
              <p className="font-semibold">Phone</p>
              <a href="tel:+966138813042" className="hover:underline">
                +966 13 881 3042
              </a>
            </div>
          </div>

          {/* Address */}
          <div
            className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-primary flex flex-col items-center gap-3"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="bg-mainColor text-navBg p-3 rounded-full">
              <MapPin size={24} />
            </div>
            <div className="text-center text-sm">
              <p className="font-semibold">Location</p>
              <span>
                Al Bandariyah Business Centre, Office No 105,
                <br />
                Al Amir Faisal Bin Fahd Rd, Khobar, K.S.A
              </span>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div data-aos="fade-up" data-aos-delay="400">
          <Link
            to="/contact"
            className={cn(
              "inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-lg group",
              "hover:bg-primary hover:text-white hover:border-white transition duration-300"
            )}
          >
            Send a Message
            <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}

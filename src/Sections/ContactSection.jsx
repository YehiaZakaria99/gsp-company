import { Link } from "react-router";

export default function ContactSection() {
  return (
    <>
      <section className="bg-navBg py-16 px-4 lg:px-32 overflow-hidden">
        <div className="max-w-3xl mx-auto text-center">
          <h3
            className="text-3xl font-bold text-primary mb-4"
            data-aos="fade-left"
          >
            Contact Us
          </h3>
          <p className="text-primary text-lg mb-8" data-aos="fade-right">
            Whether you have a question, a business inquiry, or just want to say
            hello — we're here to listen.
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            {/* Map */}
            <div
              className="w-full h-96"
              data-aos="zoom-in"
              data-aos-easing="ease-in-out"
            >
              <iframe
                className="w-full h-full rounded-2xl shadow-lg"
                src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d915417.7871715222!2d49.758230847358675!3d26.331332553463806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d30.0192266!2d31.2727774!4m5!1s0x3e49e9b296d1f973%3A0xa03ccdc4c9c1c993!2sAL%20BANDARIYAH%20TOWER%2C%208627%2BWMG%2C%20Al%20Bandariyah%2C%20Al%20Khobar%2034424%2C%20Saudi%20Arabia!3m2!1d26.302312999999998!2d50.214204699999996!5e0!3m2!1sen!2seg!4v1752067534992!5m2!1sen!2seg"
                // style="border:0;"
                // allowfullscreen=""
                loading="lazy"
                // referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="flex items-center gap-3 text-primary">
              {/* <FaEnvelope />{" "} */}
              <a href="mailto:Info@greatshieldegypt.com">
                <span>Info@greatshieldegypt.com</span>
              </a>
            </div>
            <div className="flex items-center gap-3 text-primary">
              {/* <FaPhoneAlt />{" "} */}
              <a href="https://wa.me/201040391955" target="_blank">
                <span>+201040391955</span>
              </a>
            </div>
            <div className="flex items-center gap-3 text-primary">
              {/* <FaLocationArrow />{" "} */}
              <span>
                Banks Center St, New Cairo 1, Cairo Governorate, Egypt
              </span>
            </div>
          </div>
          <div className="py-10" data-aos="fade-up">
            <Link
              to={"/contact"}
              className="inline-flex items-center group px-5 py-3 border-2 border-mainColor text-mainColor hover:bg-mainColor hover:text-navBg transition duration-300 rounded-lg"
            >
              Contact Us
              <svg
                className="w-4 h-4 ms-2 rtl:rotate-180 group-hover:animate-bounceX duration-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

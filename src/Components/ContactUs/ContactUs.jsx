import { Mail, Phone } from "lucide-react";
import { cn } from "../../lib/utils";
import { Link } from "react-router";
export default function ContactUs() {
  return (
    <>
      <div
        className={cn(
          "group fixed z-[9999999] top-1/2 left-1 -translate-y-1/2 bg-white ",
          "flex flex-col justify-between items-center gap-y-2  text-center",
          "font-bold text-primary rounded-lg",
          "border-2 border-primary"
        )}
      >
        <div className="p-4 border-b-2 border-primary">
          <a
            href="tel:+966 13 881 3042"
            rel="noopener noreferrer"
            className={cn(
              "contact",
              "cursor-pointer",
              "flex flex-col justify-center items-center"
            )}
          >
            <Phone />
            <span className="text-sm my-2">+966 13 881 3042</span>
          </a>
        </div>
        <div className="p-4 text-sm">
          <Link
            to={"conact"}
            className={cn(
              "contact",
              "cursor-pointer",
              "flex flex-col justify-center items-center"
            )}
          >
            <Mail />
            <span className="text-sm my-2">Send Message</span>
          </Link>
        </div>
      </div>
    </>
  );
}

import { ArrowUp } from "lucide-react";
import { Link } from "react-scroll";

export default function ScrollUp({to}) {
  return (
    <>
      {/* Scroll Up */}
      <div className="fixed right-10 bottom-8 z-[9999999] transition-all duration-300">
        <Link to={to} smooth={true} duration={0} offset={-50}>
          <div className="border-2 border-primary cursor-pointer rounded-full flex items-start justify-center p-1 mx-auto bg-white transition-all duration-300">
            <ArrowUp className="text-primary font-extrabold" size={25} />
          </div>
        </Link>
      </div>
    </>
  );
}

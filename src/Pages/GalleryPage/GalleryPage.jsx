import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import bgImg from "/GalleryPage/bgImg.webp";
import img1 from "/GalleryPage/1.webp";
import img2 from "/GalleryPage/2.webp";
import img3 from "/GalleryPage/3.webp";
import img4 from "/GalleryPage/4.webp";
import img44 from "/GalleryPage/44.webp";
import { Fade } from "react-awesome-reveal";
import { useEffect } from "react";

const images = [img1, img2, img3, img4, img44, img1, img2, img3, img4];

export default function GalleryPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="bg-primary/20 py-20">
      {/* Header */}
      <div
        className="relative px-6 md:px-16 py-10 mb-20 flex flex-col-reverse md:flex-row items-center gap-10 bg-cover h-[300px] md:h-[450px] lg:h-[500px] md:bg-fixed bg-center shadow-xl overflow-hidden"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-hover/50 to-primary/90 z-10" />
        <div className="md:w-1/2 space-y-4 z-20 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-bg tracking-tight leading-tight drop-shadow-lg">
            Media Gallery
          </h1>
        </div>
      </div>
      <div className="container mx-auto px-4 py-5">
        <PhotoProvider>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <Fade cascade damping={0.2} duration={800} triggerOnce>
              {images.map((src, index) => (
                <PhotoView key={index} src={src}>
                  <div className="group rounded-lg overflow-hidden shadow-md shadow-primary h-full border border-primary">
                    <img
                      src={src}
                      alt={`Gallery ${index + 1}`}
                      loading="lazy"
                      className=" cursor-pointer transition-transform h-full duration-300 group-hover:scale-110"
                    />
                  </div>
                </PhotoView>
              ))}
            </Fade>
          </div>
        </PhotoProvider>
      </div>
    </section>
  );
}

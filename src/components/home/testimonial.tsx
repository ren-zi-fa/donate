import testi1 from "@/assets/testimonial-1.jpg";
import testi2 from "@/assets/testimonial-2.jpg";
import testi3 from "@/assets/testimonial-3.jpg";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { MoveLeft, MoveRight } from "lucide-react";
import { useCallback } from "react";

const slides = [
  {
    image: testi1,
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore iure amet ea minus sed quis excepturi laboriosam rerum sequi iste ad voluptates",
    name: "Doner Name",
    profession: " profession",
  },
  {
    image: testi2,
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore iure amet ea minus sed quis excepturi laboriosam rerum sequi iste ad voluptates",
    name: "Doner Name",
    profession: " profession",
  },
  {
    image: testi3,
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore iure amet ea minus sed quis excepturi laboriosam rerum sequi iste ad voluptates",
    name: "Doner Name",
    profession: " profession",
  },
];
export default function Testimonial() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="relative h-screen mt-10 px-4 md:px-10 lg:px-20">
      <h1 className="text-sm font-semibold tracking-wide bg-orange-200 w-fit mx-auto rounded-4xl p-2 text-orange-500">
        Testimonial
      </h1>
      <h2 className="text-2xl md:text-4xl font-bold text-center my-4">
        Trusted By Thousands Of <br /> People And Nonprofits
      </h2>

      <div className="overflow-hidden group" ref={emblaRef}>
        <div className="flex ">
          {slides.map((slide, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col items-center  justify-center min-w-3xl text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              {/* Foto Profil */}
              <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-orange-500 mb-4">
                <img
                  src={slide.image}
                  alt="User"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Testimoni */}
              <div className="bg-orange-500 text-white p-6 rounded-2xl max-w-sm md:max-w-lg">
                <p className="text-sm md:text-lg">{slide.desc}</p>
                <h3 className="font-bold mt-4">{slide.name}</h3>
                <p className="italic text-sm">{slide.profession}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <button
          onClick={scrollPrev}
          className="absolute left-1/4 md:left-1/3 top-1/4 text-orange-500 -translate-y-1/2 opacity-0 transition-opacity 
        duration-300 group-hover:opacity-100 rounded-full p-2 shadow-lg"
        >
          <MoveLeft size={30} />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-1/4 md:right-1/3 top-1/4  text-orange-500 -translate-y-1/2 opacity-0 transition-opacity 
        duration-300 group-hover:opacity-100 rounded-full p-2 shadow-lg"
        >
          <MoveRight size={30} />
        </button>
      </div>
    </div>
  );
}

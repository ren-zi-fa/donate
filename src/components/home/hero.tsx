"use client";

import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import { useCallback } from "react";
import image1 from "@/assets/carousel-1.webp";
import image2 from "@/assets/carousel-2.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: image1,
    text: "Let's Save More Lives With Our Helping Hand",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore iure amet ea minus sed quis excepturi laboriosam rerum sequi iste ad voluptates",
  },
  {
    image: image2,
    text: "Together We Can Make a Difference",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore iure amet ea minus sed quis excepturi laboriosam rerum sequi iste ad voluptates",
  },
];

export default function HeroBanner() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="relative w-full  h-screen overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full " ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <motion.div
              key={index}
              className="relative min-w-full h-screen flex items-center justify-center bg-black/50 text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <img
                src={slide.image}
                alt={`Slide ${index}`}
                className="absolute inset-0 w-full h-full object-cover "
              />
              <div className="absolute inset-0 bg-black/70"></div>
              <div className="relative z-10 text-center px-6">
                <motion.h1
                  className="text-xl md:text-4xl font-bold"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {slide.text}
                </motion.h1>
                <motion.h2
                  className="text-sm md:text-2xl mt-7 text-white/40 font-bold"
                  initial={{ y: 50, opacity: 4 }}
                  animate={{ y: 0, opacity: 3 }}
                  transition={{ delay: 0.3 }}
                >
                  {slide.desc}
                </motion.h2>
                <Button className="mt-4 px-6 py-3 bg-orange-500 hover:bg-orange-600">
                  Learn More →
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Button
        onClick={scrollPrev}
        variant="outline"
        className="absolute left-4 top-1/2 rounded-full  -translate-y-1/2 text-black size-10 md:size-14"
      >
        <ChevronLeft strokeWidth={5} width={40} />
      </Button>
      <Button
        onClick={scrollNext}
        variant="outline"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-black rounded-full size-10 md:size-14"
      >
        <ChevronRight strokeWidth={5} />
      </Button>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";

export default function ScrollTriggered() {
  return (
    <div className="mx-auto max-w-xl pb-24 w-full">
      {food.map(([emoji, hueA, hueB], i) => (
        <Card i={i} emoji={emoji} hueA={hueA} hueB={hueB} key={emoji} />
      ))}
    </div>
  );
}

interface CardProps {
  emoji: string;
  hueA: number;
  hueB: number;
  i: number;
}

function Card({ emoji, hueA, hueB }: CardProps) {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <motion.div
      className="overflow-hidden flex justify-center items-center relative pt-5 mb-[-30px]"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
    >
      <div
        className="absolute inset-0"
        style={{ background, clipPath: splashClipPath }}
      />
      <motion.div
        className="text-[10rem] w-72 h-[26rem] flex justify-center items-center rounded-2xl bg-gray-200 shadow-lg"
        variants={cardVariants}
      >
        {emoji}
      </motion.div>
    </motion.div>
  );
}

const cardVariants = {
  offscreen: { y: 300 },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: { type: "spring", bounce: 0.4, duration: 0.8 },
  },
};

const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

const splashClipPath = `path('M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z')`;

const food: [string, number, number][] = [
  ["🍅", 340, 10],
  ["🍊", 20, 40],
  ["🍋", 60, 90],
  ["🍐", 80, 120],
  ["🍏", 100, 140],
  ["🫐", 205, 245],
  ["🍆", 260, 290],
  ["🍇", 290, 320],
];

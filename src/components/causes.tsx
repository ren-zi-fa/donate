import { causes } from "@/constant";
import { Card, CardDescription, CardTitle } from "./ui/card";

import { motion } from "framer-motion";

export default function CausesCard() {
  return (
    <div className=" w-fit mx-auto bg-gray-300 mt-4 p-8 h-fit">
      <h1 className="text-center p-1 text-orange-500 font-normal border-2 bg-white rounded-2xl w-fit mx-auto">
        Feature Causes
      </h1>
      <h2 className="text-center font-bold text-2xl md:text-4xl my-4">
        Setiap Anak Berhak <br /> Mendapatkan <br /> Kesempatan untuk Belajar
      </h2>
      <div className="flex flex-col md:flex-row justify-center gap-2 md:gap-8 ">
        {causes.map((cause, index) => {
          let initialAnim = {};
          let whileInViewAnim = {};

          if (index === 0) {
            // Masuk dari kiri
            initialAnim = { opacity: 0, x: -10 };
            whileInViewAnim = { opacity: 1, x: 0 };
          } else if (index === 1) {
            // Masuk dari atas
            initialAnim = { opacity: 0, y: -10 };
            whileInViewAnim = { opacity: 1, y: 0 };
          } else if (index === 2) {
            // Masuk dari kanan
            initialAnim = { opacity: 0, x: 10 };
            whileInViewAnim = { opacity: 1, x: 0 };
          }
          return (
            <motion.div
              key={index}
              initial={initialAnim}
              whileInView={whileInViewAnim}
              transition={{ duration: 0.5 }}
              viewport={{ once: false, amount: 0.3 }}
              className="border-y-4 border-orange-600 bg-white px-2 rounded-2xl mx-auto"
            >
              <Card className="py-0 px-8 mx-auto">
                <CardTitle className="mx-auto text-white py-2 px-4 rounded-sm bg-orange-500 w-fit">
                  {cause.title}
                </CardTitle>
                <h1 className="text-center font-bold text-xl">
                  {cause.tagLine}
                </h1>
                <CardDescription className="text-center">
                  {cause.description}
                </CardDescription>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row">
                    <div className="text-xs">Rp 10,000 -</div>
                    <div className="text-xs">Rp 9,000,000</div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-lg">
                    <div className="bg-orange-500 h-3 rounded-lg w-[90%]"></div>
                  </div>
                </div>
                <img src={cause.image} alt="pendidikan" className="mb-4" />
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

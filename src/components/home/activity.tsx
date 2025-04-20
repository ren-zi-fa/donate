import { activityItems } from "@/constant";
import { Card, CardFooter } from "../ui/card";
import { motion } from "framer-motion";

export default function Activity() {
  return (
    <div className="h-fit my-10">
      <h1 className="text-center py-1 px-3 text-gray-100 font-extralight rounded-xl bg-orange-400  w-fit mx-auto">
        What We Do
      </h1>
      <h2 className="text-center text-xl md:text-3xl font-semibold my-8">
        Pelajari Lebih Lanjut <br /> Tentang Apa yang Kami <br />
        Lakukan dan Ikut Terlibat
      </h2>
      <div className="flex px-4 gap-2 flex-col md:flex-row justify-center items-center">
        {activityItems.map((item, index) => {
          let initialAnim = {};
          let whileInViewAnim = {};

          if (index === 0) {
            // Masuk dari kiri
            initialAnim = { opacity: 0, x: -20 };
            whileInViewAnim = { opacity: 1, x: 0 };
          } else if (index === 1) {
            // Masuk dari atas
            initialAnim = { opacity: 0, y: -20 };
            whileInViewAnim = { opacity: 1, y: 0 };
          } else if (index === 2) {
            // Masuk dari kanan
            initialAnim = { opacity: 0, x: 20 };
            whileInViewAnim = { opacity: 1, x: 0 };
          }

          return (
            <motion.div
              key={index}
              initial={initialAnim}
              whileInView={whileInViewAnim}
              transition={{ duration: 0.5 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <Card className="flex flex-col items-center">
                <div className="font-bold text-2xl text-center">
                  {item.title}
                </div>

                <item.icon className="text-orange-500 h-40 w-40" />

                <CardFooter>
                  <div className="flex flex-col text-center mx-auto">
                    <div className="text-gray-600">{item.description}</div>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

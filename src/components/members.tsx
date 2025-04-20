import { Card, CardFooter, CardHeader } from "./ui/card";
import { TeamMember } from "@/constant/index.ts";
import { motion } from "framer-motion";
export default function Members() {
  return (
    <div className="h-fit mt-10">
      <h1 className="text-sm  font-semibold tracking-wide bg-orange-200 w-fit mx-auto rounded-4xl p-2 text-orange-500">
        Team members
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 justify-center p-8">
        {TeamMember.map((member, index) => {
          let initialAnim = {};
          let whileInViewAnim = {};

          if (index === 0) {
            initialAnim = { opacity: 0, x: -20 };
            whileInViewAnim = { opacity: 1, x: 0 };
          } else if (index === 1) {
            initialAnim = { opacity: 0, y: -20 };
            whileInViewAnim = { opacity: 1, y: 0 };
          } else if (index === 2) {
            initialAnim = { opacity: 0, x: 20 };
            whileInViewAnim = { opacity: 1, x: 0 };
          } else {
            initialAnim = { opacity: 0 };
            whileInViewAnim = { opacity: 1 };
          }

          return (
            <motion.div
              key={index}
              initial={initialAnim}
              whileInView={whileInViewAnim}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <img src={member.image} alt={member.name} />
                </CardHeader>
                <CardFooter>
                  <div className="flex flex-col text-center mx-auto">
                    <div className="font-bold text-2xl">{member.name}</div>
                    <div className="text-orange-600">{member.position}</div>
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

import { containerVariants, itemVariants } from "@/lib/efek";
import { motion } from "framer-motion";

export default function MenuTest() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      className="flex flex-col items-center gap-4 mt-10"
    >
      <motion.div
        variants={itemVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-blue-500 text-white text-center mx-auto size-60 rounded-xl shadow-lg flex items-center justify-center"
      >
        Hover & Tap Me!
      </motion.div>
    </motion.div>
  );
}

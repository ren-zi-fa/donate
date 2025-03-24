import aboutImage1 from "@/assets/about-1.jpg";
import aboutImage2 from "@/assets/about-2.jpg";
import { Card, CardDescription, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { containerVariants } from "@/lib/efek";

export default function AboutHome() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/contact");
  };
  return (
    <motion.div className="mt-20 flex flex-col md:flex-row gap-4 p-4 md:p-0 h-fit">
      <div className="relative ms-6">
        <img src={aboutImage1} alt="donate" className="w-[800px]" />
        <img
          src={aboutImage2}
          alt="donate"
          className="absolute -top-10 right-0 h-32 md:h-auto shadow-lg  border-4 border-white"
        />
      </div>
      <div className="">
        <h1 className="text-sm font-semibold bg-orange-500 w-fit rounded-4xl p-2 text-white ">
          about us
        </h1>
        <h3 className="text-3xl font-semibold tracking-tight">
          Kami Membuka Kesempatan <br />
          untuk kamu yang ingin berbagi <br /> kepada orang yang mmebutuhkan
        </h3>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Card className="px-4 border-b-4 border-orange-600 mt-4">
            <CardDescription>
              Kalau kamu tidak mempunyai uang lebih untuk berdonasi, sedikit
              uang <br />
              kamu masih bisa memberikan manfaat yang besar bagi mereka yang
              membutuhkan.
            </CardDescription>
            <CardTitle className="underline text-orange-500">
              Developer
            </CardTitle>
          </Card>
        </motion.div>

        <p>
          Keterbatasan akses dan kurangnya transparansi sering menghambat
          penggalangan dana. <br /> Platform ini hadir untuk menghubungkan pihak
          yang membutuhkan dengan <br /> donatur secara transparan dan mudah,
          meningkatkan partisipasi sosial, dan memastikan donasi tepat sasaran.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Button className="bg-orange-500 hover:bg-orange-600">
            {" "}
            Learn More
          </Button>
          <Button variant="outline" onClick={handleNavigate}>
            {" "}
            Contact Us
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

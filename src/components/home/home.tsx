import { Navbar } from "@/pages/routes/navigation";
import HeroBanner from "../hero";

export default function Home() {
  return (
    <div className="relative w-full  h-screen overflow-hidden">
      <Navbar />
      <HeroBanner />
    </div>
  );
}

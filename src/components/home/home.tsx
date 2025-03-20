import { Navbar } from "@/pages/routes/navigation";
import HeroBanner from "./hero";
import AboutHome from "./aboutHome";
import CausesHome from "./causesHome";
import Activity from "./activity";

export default function Home() {
  return (
    <div className="">
      <div className="relative w-full  h-screen overflow-hidden">
        <Navbar />
        <HeroBanner />
      </div>
      <AboutHome />
      <CausesHome />
      <Activity />
    </div>
  );
}

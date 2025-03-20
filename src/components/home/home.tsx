import HeroBanner from "./hero";
import AboutHome from "./aboutHome";
import CausesHome from "./causesHome";
import Activity from "./activity";
import DonateForm from "./donate";

export default function Home() {
  return (
    <div className="">
      <HeroBanner />
      <AboutHome />
      <CausesHome />
      <Activity />
      <DonateForm />
    </div>
  );
}

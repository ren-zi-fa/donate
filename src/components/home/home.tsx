import HeroBanner from "./hero";
import AboutHome from "./aboutHome";
import CausesHome from "./causesHome";
import Activity from "./activity";
import DonateForm from "./donate";
import { useDocumentTitle } from "@/hooks/useTitle";
import Members from "../about/members";
import Testimonial from "./testimonial";
export default function Home() {
  useDocumentTitle("Home - DoNate");
  return (
    <>
      <HeroBanner />
      <AboutHome />
      <CausesHome />
      <Activity />
      <DonateForm />
      <Members />
      <Testimonial />
    </>
  );
}

import HeroBanner from "./hero";
import AboutHome from "./aboutHome";
import CausesHome from "./causesHome";
import Activity from "./activity";
import DonateForm from "./donate";
import { useDocumentTitle } from "@/hooks/useTitle";
export default function Home() {
  useDocumentTitle("Home - DoNate");
  return (
    <>
      <HeroBanner />
      <AboutHome />
      <CausesHome />
      <Activity />
      <DonateForm />
    </>
  );
}

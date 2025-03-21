import { Route, Routes } from "react-router-dom";
import { route } from "./constant";
import About from "@/components/about/about";
import Causes from "@/components/causes/causes";
import NotFound from "@/components/notfound/notFound";
import Home from "@/components/home/home";
import { Navbar } from "./navigation";
import Footer from "@/components/ui/footer";
import Contact from "@/components/contact/contact";
import { ScrollToTop } from "@/hooks/scrollTop";

export default function RouteMain() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path={route[0]} element={<Home />} />
        <Route path={route[1]} element={<About />} />
        <Route path={route[2]} element={<Causes />} />
        <Route path={route[3]} element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

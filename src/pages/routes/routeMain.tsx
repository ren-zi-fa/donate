import { Route, Routes } from "react-router-dom";
import { route } from "./constant";
import About from "@/components/about/about";
import Causes from "@/components/causes/causes";
import NotFound from "@/components/notfound/notFound";
import Home from "@/components/home/home";

export default function RouteMain() {
  return (
    <>
      <Routes>
        <Route path={route[0]} element={<Home />} />
        <Route path={route[1]} element={<About />} />
        <Route path={route[2]} element={<Causes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

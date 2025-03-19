import { Navigate, Route, Routes } from "react-router-dom";
import { routes } from "./constant";
import About from "@/components/about/about";
import Causes from "@/components/causes/causes";
import NotFound from "@/components/notfound/notFound";
import {Navbar} from "./navigation";
import Home from "@/components/home/home";

export default function RouteMain() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={routes[0]} element={<Home />} />
        <Route path={routes[1]} element={<About />} />
        <Route path={routes[2]} element={<Causes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

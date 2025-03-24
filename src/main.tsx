import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import RouteMain from "./pages/routes/routeMain.tsx";
import Onboarding from "./components/Onboarding.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Onboarding />
      <RouteMain />
    </BrowserRouter>
  </StrictMode>
);

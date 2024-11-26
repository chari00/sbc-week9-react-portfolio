import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "@material-tailwind/react";
import { BrowserRouter } from "react-router-dom";
import { MotionConfig } from "framer-motion";
// import { Vortex } from "./components/ui/Vortex.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <ThemeProvider>
          {/* <Vortex> */}
          <div className="flex flex-col justify-between">
            <App />
          </div>
          {/* </Vortex> */}
        </ThemeProvider>
      </BrowserRouter>
    </MotionConfig>
  </StrictMode>
);

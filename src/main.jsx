import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./lib/router/router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <main className="font-montserrat font-normal">
      <RouterProvider router={router} />
    </main>
  </StrictMode>
);

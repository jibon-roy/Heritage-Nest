import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./lib/router/router";
import { Provider } from "react-redux";
import store from "./lib/store/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <main className="font-montserrat font-normal">
          <RouterProvider router={router} />
        </main>
      </QueryClientProvider>
    </Provider>
  </StrictMode>
);

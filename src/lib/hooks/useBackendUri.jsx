// import { useState, useEffect } from "react";

export default function useBackendUri() {
  // const [backendUri, setBackendUri] = useState(null);
  const mode = import.meta.env.VITE_MODE;

  // const devURL = import.meta.env.VITE_DEV_URL;
  // const prodURL = import.meta.env.VITE_PROD_URL;

  if (mode === "dev") {
    return import.meta.env.VITE_DEV_BACKEND_URI;
  }
  if (mode === "prod") {
    return import.meta.env.VITE_PROD_BACKEND_URI;
  }
}

import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./routers/AppRouter";
import Vega from "./engines/vega/src/vega";
import { useEffect } from "react";
import React from "react";

function App() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/css/all.min.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return <RouterProvider router={AppRouter}></RouterProvider>;
}

export default App;
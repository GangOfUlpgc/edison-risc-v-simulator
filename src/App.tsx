import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./routers/AppRouter";
import React from "react";
import "./app.css";



function App() {
  return <RouterProvider router={AppRouter}></RouterProvider>;
}

export default App;

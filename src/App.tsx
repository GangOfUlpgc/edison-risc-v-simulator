import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./routers/AppRouter";
import Vega from "./engines/vega/src/vega";

function App() {
  return <RouterProvider router={AppRouter}></RouterProvider>;
}

export default App;

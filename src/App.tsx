import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./routers/AppRouter";
import { Alu32 } from "./engines/vega/src/core/modular/alu32";
import { Constant } from "./engines/vega/src/core/modular/constant";
import { Multiplexor } from "./engines/vega/src/core/modular/multiplexor";
import { Register } from "./engines/vega/src/core/modular/register";

function App() {
  return <RouterProvider router={AppRouter}></RouterProvider>;
}

export default App;

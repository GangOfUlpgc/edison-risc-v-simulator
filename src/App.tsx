import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./routers/AppRouter";
import { Alu32 } from "./engines/vega/src/core/modular/alu32";
import { Constant } from "./engines/vega/src/core/modular/constant";
import { Multiplexor } from "./engines/vega/src/core/modular/multiplexor";
import { Register } from "./engines/vega/src/core/modular/register";
import { decodeInstruction } from "./engines/vega/src/core/decode";


const decoded = decodeInstruction("add x1, x2, x3")

console.log(decoded)

function App() {
  return <RouterProvider router={AppRouter}></RouterProvider>;
}

export default App;

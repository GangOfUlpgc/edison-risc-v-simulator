import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./routers/AppRouter";
import { Constant } from "./engines/vega/src/core/components/constant";
import { Register } from "./engines/vega/src/core/components/register";
import { Alu32 } from "./engines/vega/src/core/components/alu32";

let pc = "0";
for (let ins = 0; ins < 10; ins++) {
  const alu3 = new Alu32([
    new Constant(pc),
    new Constant("100"),
    new Constant("010"),
  ]);

  pc = alu3.execute()[0];
  console.log(pc);
}

function App() {
  return <RouterProvider router={AppRouter}></RouterProvider>;
}

export default App;

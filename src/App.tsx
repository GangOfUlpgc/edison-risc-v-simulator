import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./routers/AppRouter";
import { Constant } from "./engines/vega/src/core/components/constant";
import { Register } from "./engines/vega/src/core/components/register";
import { Alu32 } from "./engines/vega/src/core/components/alu32";

const alu1 = new Alu32([
  new Constant("0"),
  new Constant("1"),
  new Constant("010"),
]);

const alu2 = new Alu32([
  new Constant("0"),
  new Constant("1"),
  new Constant("010"),
]);

const alu3 = new Alu32([alu1, alu2, new Constant("010")]);

console.log(alu3.execute());

function App() {
  return <RouterProvider router={AppRouter}></RouterProvider>;
}

export default App;

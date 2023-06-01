import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./routers/AppRouter";
import { Constant } from "./engines/vega/src/core/components/constant";
import { Register } from "./engines/vega/src/core/components/register";
import { Alu32 } from "./engines/vega/src/core/components/alu32";

const register = new Register([], {
  "0": "addi $t0, $zero, 0",
  "100": "mult $t0, $t0",
  "1000": "lw $t0, $t0",
  "1100": "ld $t0, $t0",
});

console.log(register.state);
let pc = "0";

for (let i = 0; i < 4; i++) {
  const constant = new Constant(pc);
  const alu32 = new Alu32([]);

  register.setInputs([constant, new Constant("0"), new Constant("0")]);
  alu32.setInputs([constant, new Constant("100"), new Constant("010")]);

  console.log(register.execute());
  pc = alu32.execute();
}

function App() {
  return <RouterProvider router={AppRouter}></RouterProvider>;
}

export default App;

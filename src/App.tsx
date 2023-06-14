import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./routers/AppRouter";
import React from "react";
import "./app.css";
import { Encoder } from "@vega/core/assambler/encoder";
import { Assambler } from "@vega/core/assambler";

const pepe = new Assambler();

console.log(
  pepe.decode(`.text
main:
lw x2, 0(x0)
add x0, x0, x0
add x0, x0, x0
add x0, x0, x0
add x0, x0, x0
add x0, x0, x0
sw x2, 4(x0)
.data
pepe: .word 0x20
otro: .word 0x40`)
);

console.log(pepe);

function App() {
  return <RouterProvider router={AppRouter}></RouterProvider>;
}

export default App;

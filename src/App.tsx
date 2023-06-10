import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./routers/AppRouter";
import { Preprocessor } from "@vega/core/assambler/preprocessor";
import { Encoder } from "@vega/core/assambler/encoder";
import { Assambler } from "@vega/core/assambler";
import { EncodedInstruction } from "@vega/types/assambler";


let goku : Assambler = new Assambler()

let voc : EncodedInstruction[] = goku.decode(".globl main\nmain:\n     add x0, x0, x1\n flako:\n    beq x0, x1, flako   ")

for(let x = 0; x<voc.length;x++) {
  console.log(voc[x].instruction)
  console.log(voc[x].hex)
}



function App() {
  return <RouterProvider router={AppRouter}></RouterProvider>;
}

export default App;

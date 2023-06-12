import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./routers/AppRouter";
import { Preprocessor } from "@vega/core/assambler/preprocessor";
import { Encoder } from "@vega/core/assambler/encoder";
import { Assambler } from "@vega/core/assambler";
import { EncodedInstruction } from "@vega/types/assambler";

function App() {
  return <RouterProvider router={AppRouter}></RouterProvider>;
}

export default App;

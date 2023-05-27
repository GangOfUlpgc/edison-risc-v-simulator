import { createBrowserRouter } from "react-router-dom";
import SimulatorPage from "../pages/simulator/SimulatorPage";
import EditorPage from "../pages/simulator/pages/editor/EditorPage";
import DissasemblerPage from "../pages/simulator/pages/dissasembler/DissasemblerPage";
import DatapathPage from "../pages/simulator/pages/datapath/DatapathPage";

export const AppRouter = createBrowserRouter([
  {
    path: "",
    element: <SimulatorPage />,
    children: [
      {
        path: "editor",
        element: <EditorPage />,
      },
      {
        path: "dissasembly",
        element: <DissasemblerPage />,
      },
      {
        path: "datapath",
        element: <DatapathPage />,
      },
    ],
  },
]);

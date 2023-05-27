import { createBrowserRouter } from "react-router-dom";
import SimulatorPage from "../pages/simulator/SimulatorPage";
import EditorPage from "../pages/simulator/pages/editor/EditorPage";
import DissasemblyPage from "../pages/simulator/pages/dissasembly/DissasemblyPage";
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
        element: <DissasemblyPage />,
      },
      {
        path: "datapath",
        element: <DatapathPage />,
      },
    ],
  },
]);

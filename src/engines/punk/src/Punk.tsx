import React, { useCallback } from "react";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  SmoothStepEdge,
  StepEdge,
} from "reactflow";
import "reactflow/dist/style.css";
import { DatapathNodes } from "./core/nodes";
import riscv32i from "./datapath/riscv32i";
import { Box } from "@chakra-ui/react";
import { rv32i } from "src/cpus";
import Test from "./core/edges/Test";
import Horizontal from "./core/edges/Horizontal";

const edgeTypes = {
  default: StepEdge,
  custom: Test,
  horizontal: Horizontal,
};

export default function Punk() {
  const [nodes] = useNodesState(riscv32i.nodes);
  const [edges] = useEdgesState(riscv32i.edges);

  return (
    <Box width="100%" height="100%">
      <ReactFlow
        nodeTypes={DatapathNodes}
        nodes={nodes}
        edges={edges}
        edgeTypes={edgeTypes}
      >
        <Controls />
        <MiniMap />
        <Background gap={12} size={1} />
      </ReactFlow>
    </Box>
  );
}

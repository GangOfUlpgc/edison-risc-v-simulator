import React from "react";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  StepEdge,
} from "reactflow";
import "reactflow/dist/style.css";
import { DatapathNodes } from "./core/nodes";
import riscv32i from "./datapath/riscv32i";
import { Box } from "@chakra-ui/react";
import Test from "./core/edges/Test";
import Horizontal from "./core/edges/Horizontal";
import SegmentedBar from "./datapath/SegmentedBar";

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
      <SegmentedBar />
      <ReactFlow
        minZoom={0.1}
        defaultViewport={{ zoom: 0.5, x: 190, y: 240 }}
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

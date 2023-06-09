import React, { useCallback } from "react";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  SmoothStepEdge,
} from "reactflow";
import "reactflow/dist/style.css";
import { DatapathNodes } from "./core/nodes";
import riscv32i from "./datapath/riscv32i";
import { Box } from "@chakra-ui/react";

const edgeTypes = {
  default: SmoothStepEdge,

}

export default function Punk() {
  const [nodes] = useNodesState(riscv32i.nodes);
  const [edges] = useEdgesState(riscv32i.edges);


  return (
    <Box width="100%" height="100%">
      <ReactFlow nodeTypes={DatapathNodes} nodes={nodes} edges={edges} edgeTypes={edgeTypes}>
        <Controls />
        <MiniMap />
        <Background gap={12} size={1} />
      </ReactFlow>
    </Box>
  );
}

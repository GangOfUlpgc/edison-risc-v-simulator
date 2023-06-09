import { Box } from "@chakra-ui/react";
import React from "react";
import { Handle, Position } from "reactflow";

export default function Multiplexor() {
  const handleStyle = { top: 20 };

  return (
    <Box backgroundColor="gray.200" position="relative">
      <Box padding="2">Mux</Box>
      <Handle type="source" position={Position.Left} style={handleStyle} id="input1" />
      <Handle type="source" position={Position.Left} id="input2" />
      <Handle type="source" position={Position.Bottom} id="selector" />
      <Handle type="source" position={Position.Right} id="output" />
    </Box>
  )
}

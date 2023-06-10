import { Box } from "@chakra-ui/react";
import React from "react";
import { Handle, Position } from "reactflow";

export default function Multiplexor() {
  const firstInputStyle = { top: 20 };
  const secondInputStyle = { top: 50 }

  return (
    <Box backgroundColor="gray.200" position="relative" width="30px">
      <Box px="2" py="6" fontSize="0.4rem" textAlign="center">Mux</Box>
      <Handle type="target" position={Position.Left} style={firstInputStyle} id="input1" />
      <Handle type="target" position={Position.Left} style={secondInputStyle} id="input2" />
      <Handle type="target" position={Position.Bottom} id="selector" />
      <Handle type="source" position={Position.Right} id="output" />
    </Box>
  )
}

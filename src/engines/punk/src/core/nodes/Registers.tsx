import { Box } from "@chakra-ui/react";
import React from "react";
import { Handle, Position } from "reactflow";


export default function Registers() {
  return (
    <Box backgroundColor="gray.200" position="relative">
      <Box padding="2" py="6">PC</Box>
      <Handle type="source" position={Position.Left} id="input" />
      <Handle type="source" position={Position.Right} id="output" />
    </Box>
  )
}

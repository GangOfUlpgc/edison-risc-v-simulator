import { Box } from "@chakra-ui/react";
import React from "react";
import { Handle, Position } from "reactflow";


export default function PC() {
  return (
    <Box backgroundColor="gray.200" position="relative">
      <Box padding="2" py="6" fontSize="0.8rem" textAlign="center">Pc</Box>
      <Handle type="target" position={Position.Left} id="input" />
      <Handle type="source" position={Position.Right} id="output" />
      <Handle type="target" position={Position.Top} id="controlUnit" />
    </Box>
  )
}

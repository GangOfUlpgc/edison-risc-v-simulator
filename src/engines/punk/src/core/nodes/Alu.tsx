import { Box } from "@chakra-ui/react";
import React from "react";
import { Handle, Position } from "reactflow";

const handleStyle = { top: 20 };

export default function Alu() {
  <Box backgroundColor="gray.200" py="10">
    <Box padding="2" >Adder +4</Box>
    <Handle type="source" position={Position.Left} style={handleStyle} id="input 1" />
    <Handle type="source" position={Position.Left} id="input 2" />
    <Handle type="source" position={Position.Right} style={handleStyle} id="zero" />
    <Handle type="source" position={Position.Left} id="aluResult" />
  </Box>
}

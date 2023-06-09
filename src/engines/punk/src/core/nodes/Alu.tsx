import { Box } from "@chakra-ui/react";
import React from "react";
import { Handle, Position } from "reactflow";

const firstInputStyle = { top: 20, left: 0 };
const secondInputStyle = { top: 95, left: 0 }
const selectorStyle = { top: 90 }
const outputStyle = { right: 0 }

export default function Alu() {
  return (
    <Box backgroundColor="gray.200" px="2" py="10" clipPath="polygon(0 0, 100% 29%, 100% 67%, 0 100%, 0% 69%, 24% 48%, 0 29%)">
      <Box padding="2" fontSize="0.8rem" textAlign="center">Alu</Box>
      <Handle type="source" position={Position.Left} style={firstInputStyle} id="input1" />
      <Handle type="source" position={Position.Left} style={secondInputStyle} id="input2" />
      <Handle type="source" position={Position.Bottom} style={selectorStyle} id="selector" />
      <Handle type="source" position={Position.Right} style={outputStyle} id="output" />
    </Box>
  );
}

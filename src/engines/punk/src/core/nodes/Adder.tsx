import React from "react";
import { Box } from "@chakra-ui/react";
import { Handle, Position } from "reactflow";
import ValuePopover from "../components/ValuePopover";

const firstInputStyle = { top: 20, left: 0 };
const secondInputStyle = { top: 95, left: 0 };
const outputStyle = { right: 0 };

export default function Adder() {
  return (
    <ValuePopover value="0x00000000">
      <Box
        backgroundColor="gray.200"
        px="2"
        py="10"
        clipPath="polygon(0 0, 100% 29%, 100% 67%, 0 100%, 0% 69%, 24% 48%, 0 29%)"
      >
        <Box padding="2" fontSize="0.8rem" textAlign="center">
          Adder
        </Box>
        <Handle
          type="target"
          position={Position.Left}
          style={firstInputStyle}
          id="input1"
        />
        <Handle
          type="target"
          position={Position.Left}
          style={secondInputStyle}
          id="input2"
        />
        <Handle
          type="source"
          position={Position.Right}
          style={outputStyle}
          id="output"
        />
      </Box>
    </ValuePopover>
  );
}

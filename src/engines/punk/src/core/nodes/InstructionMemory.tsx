import { Box } from "@chakra-ui/react";
import React from "react";
import { Handle, Position } from "reactflow";
import ValuePopover from "../components/ValuePopover";

export default function InstructionMemory() {
  return (
    <ValuePopover value="0x00000000">
      <Box backgroundColor="gray.200" position="relative">
        <Box padding="2" py="6" fontSize="0.8rem" textAlign="center">
          Instr. Memory
        </Box>
        <Handle type="target" position={Position.Left} id="address" />
        <Handle type="source" position={Position.Right} id="readInstr" />
      </Box>
    </ValuePopover>
  );
}

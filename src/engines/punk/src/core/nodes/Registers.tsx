import { Box } from "@chakra-ui/react";
import React from "react";
import { Handle, NodeProps, Position } from "reactflow";

const firstReadRegStyle = { top: 20 };
const secondReadRegStyle = { top: 30 };
const writeRegStyle = { top: 80 };
const writeDataStyle = { top: 90 };
const firstReadDataStyle = { top: 40 };
const secondReadDataStyle = { top: 70 };

export default function Registers() {
  return (
    <Box backgroundColor="gray.200" position="relative" height="100">
      <Box padding="2" py="6">
        Registers
      </Box>
      <Handle
        type="target"
        position={Position.Left}
        style={firstReadRegStyle}
        id="readReg1"
      />
      <Handle
        type="target"
        position={Position.Left}
        style={secondReadRegStyle}
        id="readReg2"
      />
      <Handle
        type="target"
        position={Position.Left}
        style={writeRegStyle}
        id="writeReg"
      />
      <Handle
        type="target"
        position={Position.Left}
        style={writeDataStyle}
        id="writeData"
      />
      <Handle type="target" position={Position.Top} id="selector" />
      <Handle
        type="source"
        position={Position.Right}
        style={firstReadDataStyle}
        id="readData1"
      />
      <Handle
        type="source"
        position={Position.Right}
        style={secondReadDataStyle}
        id="readData2"
      />
    </Box>
  );
}

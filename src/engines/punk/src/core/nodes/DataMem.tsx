import { Box } from "@chakra-ui/react";
import React from "react";
import { Handle, Position } from "reactflow";
import ValuePopover from "../components/ValuePopover";

const addressStyle = { top: 20 }
const writeDataStyle = { top: 80 }


export default function DataMem() {
  return (
    <Box backgroundColor="gray.200" position="relative" height="100">
      <Box padding="2" py="6">Data memory</Box>
      <Handle type="target" position={Position.Left} style={addressStyle} id="address" />
      <Handle type="target" position={Position.Left} style={writeDataStyle} id="writeData" />
      <Handle type="target" position={Position.Top} id="memRead" />
      <Handle type="target" position={Position.Bottom} id="memWrite" />
      <ValuePopover value="0x00000000">
        <Handle type="source" position={Position.Right} id="readData" />
      </ValuePopover>
    </Box>
  )
}

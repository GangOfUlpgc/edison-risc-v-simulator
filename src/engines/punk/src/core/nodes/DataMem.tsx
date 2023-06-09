import { Box } from "@chakra-ui/react";
import React from "react";
import { Handle, Position } from "reactflow";

const addressStyle = { top: 20 }
const writeDataStyle = { top: 80 }


export default function DataMem() {
  return (
    <Box backgroundColor="gray.200" position="relative" height="100">
      <Box padding="2" py="6">Data memory</Box>
      <Handle type="source" position={Position.Left} style={addressStyle} id="address" />
      <Handle type="source" position={Position.Left} style={writeDataStyle} id="writeData" />
      <Handle type="source" position={Position.Top} id="memRead" />
      <Handle type="source" position={Position.Bottom} id="memWrite" />
      <Handle type="source" position={Position.Right} id="readData" />
    </Box>
  )
}

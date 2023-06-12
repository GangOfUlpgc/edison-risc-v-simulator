import { Box } from "@chakra-ui/react";
import React from "react";
import { Handle, Position } from "reactflow";
import ValuePopover from "../components/ValuePopover";
import { rv32i } from "../../../../../cpus";

const addressStyle = { top: 20 };
const writeDataStyle = { top: 80 };

export default function DataMem() {
  const ins = rv32i.useState((state) => state.pipeline.MEM.cpumeta.ReadData);
  return (
    <ValuePopover value={"0x" + (ins ?? "0").toString(16)}>
      <Box backgroundColor="gray.200" position="relative" height="100">
        <Box padding="2" py="6">
          Data memory
        </Box>
        <Handle
          type="target"
          position={Position.Left}
          style={addressStyle}
          id="address"
        />
        <Handle
          type="target"
          position={Position.Left}
          style={writeDataStyle}
          id="writeData"
        />
        <Handle type="target" position={Position.Top} id="memRead" />
        <Handle type="target" position={Position.Bottom} id="memWrite" />
        <Handle type="source" position={Position.Right} id="readData" />
      </Box>
    </ValuePopover>
  );
}

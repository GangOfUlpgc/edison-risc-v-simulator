import { Box, Popover, Text } from "@chakra-ui/react";
import React from "react";
import { Handle, NodeProps, Position } from "reactflow";
import ValuePopover from "../components/ValuePopover";
import { UICPUState } from "@vega/types/state";
import { rv32i } from "../../../../../cpus";

export default function BufferRegs({
  data,
}: {
  data: { query: (state: UICPUState) => any; label: string };
}) {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      fontSize="0.5rem"
      w="36px"
      h="30px"
    >
      <Text>{data["label"]}</Text>
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </Box>
  );
}

import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { Handle, NodeProps, Position } from "reactflow";

export default function BufferRegs({ data }: NodeProps) {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      border={data["border"]}
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

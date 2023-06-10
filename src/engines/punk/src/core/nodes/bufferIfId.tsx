import { Box } from "@chakra-ui/react";
import React from "react";
import { Handle, Position } from "reactflow";

const firstInputStyle = { top: 50 }
const secondInputStyle = { top: 220 }
const firstOutputStyle = { top: 50 }
const secondOutputStyle = { top: 220 }

export default function BufferIfId() {
    return (
        <Box backgroundColor="gray.200" position="relative" height="500" bgColor="blue.100">
            <Box padding="2" py="6" fontSize="0.8rem" textAlign="center">F/D</Box>
            <Handle type="target" position={Position.Left} style={firstInputStyle} id="input1" />
            <Handle type="target" position={Position.Left} style={secondInputStyle} id="input2" />
            <Handle type="source" position={Position.Right} style={firstOutputStyle} id="output1" />
            <Handle type="source" position={Position.Right} style={secondOutputStyle} id="output2" />
        </Box>
    )
}

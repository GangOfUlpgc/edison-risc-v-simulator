import { Box } from "@chakra-ui/react";
import React from "react";
import { Handle, Position } from "reactflow";

const firstInOutStyle = { top: 10 }
const secondInOutStyle = { top: 40 }

export default function Branch() {
    return (
        <Box backgroundColor="gray.200" height="50" bgColor="white" border='2px' borderColor='blue.200' borderRightRadius="20px" >
            <Box padding="2" py="6" fontSize="0.8rem" textAlign="center">AND</Box>
            <Handle type="target" position={Position.Left} style={firstInOutStyle} id="input1" />
            <Handle type="target" position={Position.Left} style={secondInOutStyle} id="input2" />
            <Handle type="source" position={Position.Right} id="output" />
        </Box>
    )
}

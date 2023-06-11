import { Box } from "@chakra-ui/react";
import React from "react";
import { Handle, Position } from "reactflow";



export default function NodeWb() {
    return (
        <Box backgroundColor="gray.200" position="relative" bgColor="blue.100">
            <Box padding="2" py="6" fontSize="0.8rem" textAlign="center">WB</Box>

            <Handle type="target" position={Position.Left} id="input1" />
            <Handle type="source" position={Position.Right} id="output1" />
        </Box>
    )
}

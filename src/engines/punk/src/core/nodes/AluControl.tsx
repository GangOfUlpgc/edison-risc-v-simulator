import { Box } from "@chakra-ui/react";
import React from "react";
import { Handle, Position } from "reactflow";

const firstInOutStyle = { top: 50 }
const secondInOutStyle = { top: 250 }
const thirdInOutStyle = { top: 350 }
const fourthInOutStyle = { top: 450 }

export default function AluControl() {
    return (
        <Box backgroundColor="gray.200" height="100" bgColor="white" border='2px' borderColor='blue.200' borderRadius="40%" >
            <Box padding="2" py="6" fontSize="0.8rem" textAlign="center">Alu Control</Box>
            <Handle type="target" position={Position.Left} style={firstInOutStyle} id="input1" />

            <Handle type="source" position={Position.Right} style={firstInOutStyle} id="output1" />
        </Box>
    )
}

import { Box } from "@chakra-ui/react";
import React from "react";
import { Handle, Position } from "reactflow";

const firstInOutStyle = { top: 50 }
const secondInOutStyle = { top: 250 }
const thirdInOutStyle = { top: 450 }

export default function BufferMemWb() {
    return (
        <Box backgroundColor="gray.200" position="relative" height="500" bgColor="red.100">
            <Box padding="2" py="6" fontSize="0.8rem" textAlign="center">M/W</Box>

            <Handle type="target" position={Position.Left} style={firstInOutStyle} id="input1" />
            <Handle type="target" position={Position.Left} style={secondInOutStyle} id="input2" />
            <Handle type="target" position={Position.Left} style={thirdInOutStyle} id="input3" />

            <Handle type="source" position={Position.Right} style={firstInOutStyle} id="output1" />
            <Handle type="source" position={Position.Right} style={secondInOutStyle} id="output2" />
            <Handle type="source" position={Position.Right} style={thirdInOutStyle} id="output3" />

        </Box>
    )
}

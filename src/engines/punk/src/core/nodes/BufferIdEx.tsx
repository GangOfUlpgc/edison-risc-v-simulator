import { Box } from "@chakra-ui/react";
import React from "react";
import { Handle, Position } from "reactflow";

const firstInOutStyle = { top: 50 }
const secondInOutStyle = { top: 130 }
const thirdInOutStyle = { top: 210 }
const fourthInOutStyle = { top: 290 }
const fifthInOutStyle = { top: 370 }
const sixthInOutStyle = { top: 450 }


export default function BufferIdEx() {
    return (
        <Box backgroundColor="gray.200" position="relative" height="500" bgColor="green.100">
            <Box padding="2" py="6" fontSize="0.8rem" textAlign="center">D/E</Box>

            <Handle type="target" position={Position.Left} style={firstInOutStyle} id="input1" />
            <Handle type="target" position={Position.Left} style={secondInOutStyle} id="input2" />
            <Handle type="target" position={Position.Left} style={thirdInOutStyle} id="input3" />
            <Handle type="target" position={Position.Left} style={fourthInOutStyle} id="input4" />
            <Handle type="target" position={Position.Left} style={fifthInOutStyle} id="input5" />
            <Handle type="target" position={Position.Left} style={sixthInOutStyle} id="input6" />

            <Handle type="source" position={Position.Right} style={firstInOutStyle} id="output1" />
            <Handle type="source" position={Position.Right} style={secondInOutStyle} id="output2" />
            <Handle type="source" position={Position.Right} style={thirdInOutStyle} id="output3" />
            <Handle type="source" position={Position.Right} style={fourthInOutStyle} id="output4" />
            <Handle type="source" position={Position.Right} style={fifthInOutStyle} id="output5" />
            <Handle type="source" position={Position.Right} style={sixthInOutStyle} id="output6" />
        </Box>
    )
}

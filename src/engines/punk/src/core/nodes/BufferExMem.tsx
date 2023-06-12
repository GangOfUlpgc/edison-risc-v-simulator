import {
  Box,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Handle, Position } from "reactflow";
import { rv32i } from "../../../../../cpus";

const firstInOutStyle = { top: 50 };
const secondInOutStyle = { top: 250 };
const thirdInOutStyle = { top: 350 };
const fourthInOutStyle = { top: 450 };
const zeroStyle = { top: 169 };

export default function BufferExMem() {
  const uc = rv32i.useState((state) => state.pipeline.MEM.cumeta);
  return (
    <Popover isOpen={true} placement="right-start" flip={false}>
      <PopoverTrigger>
        <Box
          backgroundColor="gray.200"
          position="relative"
          height="500"
          bgColor="purple.100"
        >
          <Box padding="2" py="6" fontSize="0.8rem" textAlign="center">
            E/M
          </Box>
          <Handle
            type="target"
            position={Position.Left}
            style={firstInOutStyle}
            id="input1"
          />
          <Handle
            type="target"
            position={Position.Left}
            style={zeroStyle}
            id="zero"
          />
          <Handle
            type="target"
            position={Position.Left}
            style={secondInOutStyle}
            id="input2"
          />
          <Handle
            type="target"
            position={Position.Left}
            style={thirdInOutStyle}
            id="input3"
          />
          <Handle
            type="target"
            position={Position.Left}
            style={fourthInOutStyle}
            id="input4"
          />

          <Handle
            type="source"
            position={Position.Right}
            style={firstInOutStyle}
            id="output1"
          />
          <Handle
            type="source"
            position={Position.Right}
            style={zeroStyle}
            id="zero"
          />
          <Handle
            type="source"
            position={Position.Right}
            style={secondInOutStyle}
            id="output2"
          />
          <Handle
            type="source"
            position={Position.Right}
            style={thirdInOutStyle}
            id="output3"
          />
          <Handle
            type="source"
            position={Position.Right}
            style={fourthInOutStyle}
            id="output4"
          />
        </Box>
      </PopoverTrigger>
      <PopoverContent w="fit-content" mt="-20">
        <Box backgroundColor="white" p="2">
          <Text>Branch: {uc?.Branch ?? 0}</Text>
          <Text>MemRead: {uc?.MemRead ?? 0}</Text>
          <Text>MemWrite: {uc?.MemWrite ?? 0}</Text>
          <Text>RegWrite: {uc?.RegWrite ?? 0}</Text>
          <Text>MemToReg: {uc?.MemToReg ?? 0}</Text>
        </Box>
      </PopoverContent>
    </Popover>
  );
}

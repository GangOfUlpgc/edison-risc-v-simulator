import {
  Box,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Handle, NodeProps, Position } from "reactflow";
import ValuePopover from "../components/ValuePopover";
import { rv32i } from "../../../../../cpus";

const firstReadRegStyle = { top: 20 };
const secondReadRegStyle = { top: 30 };
const writeRegStyle = { top: 80 };
const writeDataStyle = { top: 90 };
const firstReadDataStyle = { top: 40 };
const secondReadDataStyle = { top: 70 };

export default function Registers() {
  const uc = rv32i.useState((state) => state.pipeline.ID.cpumeta);
  const i = rv32i.useState((state) => state.pipeline.ID.imeta);
  return (
    <Popover isOpen={true} placement="left">
      <PopoverTrigger>
        <Box backgroundColor="gray.200" position="relative" height="100">
          <Box padding="2" py="6">
            Registers
          </Box>
          <Handle
            type="target"
            position={Position.Left}
            style={firstReadRegStyle}
            id="readReg1"
          />
          <Handle
            type="target"
            position={Position.Left}
            style={secondReadRegStyle}
            id="readReg2"
          />
          <Handle
            type="target"
            position={Position.Left}
            style={writeRegStyle}
            id="writeReg"
          />
          <Handle
            type="target"
            position={Position.Left}
            style={writeDataStyle}
            id="writeData"
          />
          <Handle type="target" position={Position.Top} id="selector" />
          <Handle
            type="source"
            position={Position.Right}
            style={firstReadDataStyle}
            id="readData1"
          />
          <Handle
            type="source"
            position={Position.Right}
            style={secondReadDataStyle}
            id="readData2"
          />
        </Box>
      </PopoverTrigger>
      <PopoverContent width="fit-content" p="3" fontSize="15px">
        <Text>rs1: {i.rs ?? 0}</Text>
        <Text>rs2: {i.rt ?? 0}</Text>
        <Text>rs1Val: 0x{uc?.rs1Value?.toString(16) ?? 0}</Text>
        <Text>rs2Val: 0x{uc?.rs2Value?.toString(16) ?? 0}</Text>
        {/*
        
        <Text>RegDestValue: {uc?.RegWrite ?? 0}</Text>
        <Text>RegWriteValue: {uc?.MemWrite ?? 0}</Text>
  */}
      </PopoverContent>
    </Popover>
  );
}

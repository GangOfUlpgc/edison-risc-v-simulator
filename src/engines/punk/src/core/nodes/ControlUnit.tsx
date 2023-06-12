import {
  Box,
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import React from "react";
import JSONPretty from "react-json-pretty";
import { Handle, Position } from "reactflow";
import { rv32i } from "../../../../../cpus/riscv-rv32i";

const firstInOutStyle = { top: 50 };
const secondInOutStyle = { top: 250 };
const thirdInOutStyle = { top: 350 };
const fourthInOutStyle = { top: 450 };

export default function ControlUnit() {
  const uc = rv32i.useState((state) => state.pipeline.ID.cumeta);

  return (
    <Popover isOpen={true} placement="left">
      <PopoverTrigger>
        <Box
          backgroundColor="gray.200"
          height="100"
          bgColor="white"
          border="2px"
          borderColor="blue.200"
          borderRadius="40%"
        >
          <Box padding="2" py="6" fontSize="0.8rem" textAlign="center">
            Control Unit
          </Box>
          <Handle
            type="target"
            position={Position.Left}
            style={firstInOutStyle}
            id="input1"
          />
          <Handle
            type="source"
            position={Position.Right}
            style={firstInOutStyle}
            id="output1"
          />
        </Box>
      </PopoverTrigger>
      <PopoverContent width="fit-content" p="3">
        <Text>ALUop: {uc?.ALUop ?? 0}</Text>
        <Text>ALUsrc: {uc?.ALUsrc ?? 0}</Text>
        <Text>Branch: {uc?.Branch ?? 0}0</Text>
        <Text>MemRead: {uc?.MemRead ?? 0}</Text>
        <Text>MemWrite: {uc?.MemWrite ?? 0}</Text>
        <Text>RegWrite: {uc?.RegWrite ?? 0}</Text>
        <Text>MemToReg: {uc?.MemToReg ?? 0}</Text>
      </PopoverContent>
    </Popover>
  );
}

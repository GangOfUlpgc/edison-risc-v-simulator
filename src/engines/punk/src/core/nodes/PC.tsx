import {
  Box,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Handle, Position } from "reactflow";
import ValuePopover from "../components/ValuePopover";
import { rv32i } from "../../../../../cpus/riscv-rv32i";

export default function PC() {
  const pc = rv32i.useState((state) => state.pipeline.IF.cpumeta.pc);

  return (
    <ValuePopover
      value={"0x" + (pc ?? "0").toString(16).padStart(8, "0")}
      placement="right"
    >
      <Box
        cursor="pointer"
        backgroundColor="gray.200"
        position="relative"
        height="100"
        bgColor="yellow.100"
      >
        <Box padding="2" py="6" fontSize="0.8rem" textAlign="center">
          Pc
        </Box>
        <Handle type="target" position={Position.Left} id="input" />
        <Handle type="source" position={Position.Right} id="output" />
        <Handle type="target" position={Position.Top} id="controlUnit" />
      </Box>
    </ValuePopover>
  );
}

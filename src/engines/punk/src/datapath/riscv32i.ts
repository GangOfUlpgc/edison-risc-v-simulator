import { Edge, Node, Position } from "reactflow";

const nodes: Node[] = [
  {
    id: "muxAlu1",
    position: { x: 600, y: 150 },
    type:"mux",
    data: { label: "MUX" },
  },
  {
    id: "muxAlu2",
    position: { x: 750, y: 150 },
    type:"mux",
    data: { label: "MUX" },
  },
  {
    id: "muxAlu3",
    position: { x: 600, y: 350 },
    type:"mux",
    data: { label: "MUX" },
  },
  {
    id: "muxAlu4",
    position: { x: 750, y: 350 },
    type:"mux",
    data: { label: "MUX" },
  },
  {
    id: "Adder",
    type: "adder",
    position: { x: -100, y: -100 },
    data: { label: "Add" },
  },
  {
    id: "pc",
    position: { x: -250, y: 250 },
    type: "pc",
    data: { label: "PC" },
  },
  {
    id: "alu",
    type: "alu",
    position: { x: 900, y: 225 },
    data: { label: "Alu" },
  },
  {
    id: "dataMemory",
    type: "datamem",
    position: { x: -200, y: -200 },
    data: { label: "DataMem" },
  },
  {
    id: "registers",
    type: "registers",
    position: { x: 300, y: 200 },
    data: { label: "registers" },
  },
  
  {
    id: "instructionMemory",
    type: "instrMemory",
    position: {x: -100, y: 250},
    data: {label: "Instruction Memory"},
  },
  {
    id: "ifid",
    type: "bufferifid",
    position: {x: 50, y: 150},
    data: {label: "buffer if/id"},
  },
  {
    id: "idex",
    type: "bufferidex",
    position: {x: 450, y: 150},
    data: {label: "buffer id/ex"},
  },
  {
    id: "exmem",
    type: "bufferexmem",
    position: {x: 1000, y: 150},
    data: {label: "buffer ex/mem"},
  }
];
const edges: Edge[] = [
  { id: "e1-1", source: "pc", target: "instructionMemory", label: "0x00000000", sourceHandle:"output", targetHandle: "address" },
  { id: "e1-2", source: "instructionMemory", target: "ifid", sourceHandle:"readInstr", targetHandle: "input2" },
  { id: "e1-3", source: "ifid", target: "registers", sourceHandle:"output2", targetHandle: "readReg1"},
  { id: "e1-4", source: "ifid", target: "registers", sourceHandle:"output2", targetHandle: "readReg2"},
  { id: "e1-5", source: "registers", target: "idex", sourceHandle:"readData1", targetHandle: "input1"},
  { id: "e1-6", source: "registers", target: "idex", sourceHandle:"readData2", targetHandle: "input2"},
  {id: "e1-7", source: "idex", target: "muxAlu1", sourceHandle:"output1", targetHandle: "input1"},
  {id: "e1-8", source: "idex", target: "muxAlu3", sourceHandle:"output2", targetHandle: "input1"},
  {id: "e1-9", source: "muxAlu1", target: "muxAlu2", sourceHandle:"output", targetHandle: "input1"},
  {id: "e1-10", source: "muxAlu3", target: "muxAlu4", sourceHandle:"output", targetHandle: "input1"},
  {id: "e1-11", source: "muxAlu2", target: "alu", sourceHandle:"output", targetHandle: "input1"},
  {id: "e1-12", source: "muxAlu4", target: "alu", sourceHandle:"output", targetHandle: "input2"},
];

export default {
  nodes,
  edges,
};

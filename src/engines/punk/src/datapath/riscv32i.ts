import { Edge, Node, Position } from "reactflow";

const nodes: Node[] = [
  {
    id: "controlUnit",
    position: { x: 300, y: -300 },
    type: "controlUnit",
  },
  {
    id: "aluControl",
    position: { x: 800, y: 700 },
    type: "aluControl",
  },
  {
    id: "branch",
    position: { x: 1200, y: -200 },
    type: "branch",
  },
  {
    id: "muxAlu",
    position: { x: 750, y: 291 },
    type: "mux",
    data: { label: "MUX" },
  },
  {
    id: "muxWb",
    position: { x: 1600, y: 500 },
    type: "mux",
    data: { label: "MUX" },
  },
  {
    id: "muxPc",
    position: { x: -400, y: 300 },
    type: "mux",
    data: { label: "MUX" },
  },
  {
    id: "adder",
    type: "adder",
    position: { x: -100, y: -100 },
    data: { label: "Add" },
  },
  {
    id: "add4node",
    data: {
      label: "+ 4",
    },
    style: {
      width: 60, // Initial width of the node
      height: 30, // Initial height of the node
    },
    sourcePosition: Position.Right,
    position: { x: -250, y: -20 },
  },
  {
    id: "adderIdex",
    type: "adder",
    position: { x: 800, y: 50 },
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
    position: { x: 1200, y: 150 },
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
    position: { x: -100, y: 250 },
    data: { label: "Instruction Memory" },
  },
  {
    id: "immGen",
    data: {
      label: "Imm Gen",
    },
    style: {
      width: 90, // Initial width of the node
      height: 30, // Initial height of the node
    },
    targetPosition: Position.Left,
    sourcePosition: Position.Right,
    position: { x: 300, y: 535 },
  },
  {
    id: "shiftLeft",
    data: {
      label: "Shift Left 1",
    },
    style: {
      width: 90, // Initial width of the node
      height: 30, // Initial height of the node
    },
    targetPosition: Position.Left,
    sourcePosition: Position.Right,
    position: { x: 670, y: 130 },
  },
  {
    id: "ifid",
    type: "bufferifid",
    position: { x: 50, y: 100 },
    data: { label: "buffer if/id" },
  },
  {
    id: "idex",
    type: "bufferidex",
    position: { x: 500, y: 100 },
    data: { label: "buffer id/ex" },
  },
  {
    id: "exmem",
    type: "bufferexmem",
    position: { x: 1000, y: 100 },
    data: { label: "buffer ex/mem" },
  },
  {
    id: "memwb",
    type: "buffermemwb",
    position: { x: 1400, y: 100 },
    data: { label: "buffer mem/wb" },
  },

  {
    id: "exNodeIdexBuffer",
    data: {
      label: "EX",
    },
    type: "bufferregs",
    style: {
      border: "1px solid #48BB78",
      borderRadius: "2px",
      fontSize: "0.5rem",
      width: 36, // Initial width of the node
      height: 30, // Initial height of the node
    },
    targetPosition: Position.Left,
    sourcePosition: Position.Right,
    position: { x: 500, y: 70 },
  },
  {
    id: "mNodeIdexBuffer",
    data: {
      label: "M",
    },
    type: "bufferregs",
    style: {
      border: "1px solid #48BB78",
      borderRadius: "2px",
      fontSize: "0.5rem",
      width: 36, // Initial width of the node
      height: 30, // Initial height of the node
    },
    targetPosition: Position.Left,
    sourcePosition: Position.Right,
    position: { x: 500, y: 40 },
  },
  {
    id: "wbNodeIdexBuffer",
    type: "bufferregs",
    data: {
      label: "WB",
    },
    style: {
      border: "1px solid #48BB78",
      borderRadius: "2px",
      fontSize: "0.5rem",
      width: 36, // Initial width of the node
      height: 30, // Initial height of the node
      borderRadius: 2,
    },
    targetPosition: Position.Left,
    sourcePosition: Position.Right,
    position: { x: 500, y: 10 },
  },
  {
    id: "mNodeExmemBuffer",
    type: "bufferregs",
    data: {
      label: "M",
    },
    style: {
      border: "1px solid #805AD5",
      borderRadius: "2px",
      fontSize: "0.5rem",
      width: 39, // Initial width of the node
      height: 30, // Initial height of the node
    },
    targetPosition: Position.Left,
    sourcePosition: Position.Right,
    position: { x: 1000, y: 70 },
  },
  {
    id: "wbNodeExmemBuffer",
    type: "bufferregs",
    data: {
      label: "WB",
    },
    style: {
      border: "1px solid #805AD5",
      borderRadius: "2px",
      fontSize: "0.5rem",
      width: 39, // Initial width of the node
      height: 30, // Initial height of the node
    },
    targetPosition: Position.Left,
    sourcePosition: Position.Right,
    position: { x: 1000, y: 40 },
  },
  {
    id: "wbNodeMemwbBuffer",
    type: "bufferregs",
    data: {
      label: "WB",
    },
    style: {
      border: "1px solid #E53E3E",
      borderRadius: "2px",
      fontSize: "0.5rem",
      width: 44, // Initial width of the node
      height: 30, // Initial height of the node
    },
    targetPosition: Position.Left,
    sourcePosition: Position.Right,
    position: { x: 1400, y: 70 },
  },
];
const edges: Edge[] = [
  {
    id: "e1-1",
    source: "pc",
    target: "instructionMemory",
    label: "0x00000000",
    type: "horizontal",
    data: {
      offsetx: 59,
    },
    sourceHandle: "output",
    targetHandle: "address",
  },
  {
    id: "e1-2",
    source: "pc",
    target: "adder",
    sourceHandle: "output",
    targetHandle: "input1",
  },
  {
    id: "e1-3",
    source: "pc",
    target: "ifid",
    type: "horizontal",
    data: {
      offsetx: 59,
    },
    sourceHandle: "output",
    targetHandle: "input1",
  },
  {
    id: "e1-4",
    type: "custom",
    data: {
      offsetx: 70,
      offsety: -100,
    },
    source: "adder",
    target: "muxPc",
    sourceHandle: "output",
    targetHandle: "input1",
  },
  {
    id: "e1-5",
    source: "muxPc",
    target: "pc",
    sourceHandle: "output",
    targetHandle: "input",
  },
  {
    id: "e1-6",
    source: "instructionMemory",
    target: "ifid",
    sourceHandle: "readInstr",
    targetHandle: "input2",
  },
  {
    id: "e1-7",
    source: "add4node",
    target: "adder",
    sourceHandle: "1",
    targetHandle: "input2",
  },
  {
    id: "e2-1",
    source: "ifid",
    target: "registers",
    sourceHandle: "output2",
    targetHandle: "readReg1",
    type: "horizontal",
    data: {
      offsetx: 50,
    },
  },
  {
    id: "e2-2",
    source: "ifid",
    target: "registers",
    sourceHandle: "output2",
    targetHandle: "readReg2",
    type: "horizontal",
    data: {
      offsetx: 50,
    },
  },
  {
    id: "e2-3",
    source: "ifid",
    target: "idex",
    sourceHandle: "output1",
    targetHandle: "input1",
    type: "horizontal",
    data: {
      offsetx: 70,
    },
  },
  {
    id: "e2-4",
    source: "ifid",
    target: "idex",
    sourceHandle: "output2",
    targetHandle: "input5",
    label: "instruction",
    type: "horizontal",
    data: {
      offsetx: 50,
    },
  },
  {
    id: "e2-5",
    source: "ifid",
    target: "idex",
    sourceHandle: "output2",
    targetHandle: "input4",
    type: "horizontal",
    data: {
      offsetx: 50,
    },
  },
  {
    id: "e2-6",
    source: "registers",
    target: "idex",
    sourceHandle: "readData1",
    targetHandle: "input2",
  },
  {
    id: "e2-7",
    source: "registers",
    target: "idex",
    sourceHandle: "readData2",
    targetHandle: "input3",
  },
  {
    id: "e2-8",
    source: "ifid",
    target: "immGen",
    sourceHandle: "output2",
    targetHandle: "1",
    type: "horizontal",
    data: {
      offsetx: 50,
    },
  },
  {
    id: "e2-9",
    source: "immGen",
    target: "idex",
    sourceHandle: "1",
    targetHandle: "input6",
  },
  {
    id: "e2-10",
    source: "ifid",
    target: "controlUnit",
    sourceHandle: "output2",
    targetHandle: "input1",
    type: "horizontal",
    data: {
      offsetx: 50,
    },
  },
  {
    id: "e3-1",
    source: "idex",
    target: "alu",
    sourceHandle: "output2",
    targetHandle: "input1",
  },
  {
    id: "e3-2",
    source: "idex",
    target: "adderIdex",
    sourceHandle: "output1",
    targetHandle: "input1",
    type: "horizontal",
    data: {
      offsetx: 50,
    },
  },
  {
    id: "e3-3",
    source: "idex",
    target: "muxAlu",
    sourceHandle: "output3",
    targetHandle: "input1",
  },
  {
    id: "e3-4",
    source: "idex",
    target: "exmem",
    sourceHandle: "output3",
    targetHandle: "input3",
    type: "horizontal",
    data: {
      offsetx: 50,
    },
  },
  {
    id: "e3-5",
    source: "idex",
    target: "muxAlu",
    sourceHandle: "output4",
    targetHandle: "input2",
    type: "horizontal",
    data: {
      offsetx: 120,
    },
  },
  {
    id: "e3-6",
    source: "idex",
    target: "shiftLeft",
    sourceHandle: "output4",
    targetHandle: "1",
    type: "horizontal",
    data: {
      offsetx: 80,
    },
  },
  {
    id: "e3-7",
    source: "muxAlu",
    target: "alu",
    sourceHandle: "output",
    targetHandle: "input2",
  },
  {
    id: "e3-8",
    source: "alu",
    target: "exmem",
    sourceHandle: "output",
    targetHandle: "input2",
  },
  {
    id: "e3-9",
    source: "adderIdex",
    target: "exmem",
    sourceHandle: "output",
    targetHandle: "input1",
  },
  {
    id: "e3-10",
    source: "idex",
    target: "exmem",
    sourceHandle: "output5",
    targetHandle: "input4",
    type: "horizontal",
    data: {
      offsetx: 30,
    },
  },
  {
    id: "e3-11",
    source: "shiftLeft",
    target: "adderIdex",
    sourceHandle: "1",
    targetHandle: "input2",
  },
  {
    id: "e3-12",
    source: "idex",
    target: "aluControl",
    sourceHandle: "output6",
    targetHandle: "1",
    type: "horizontal",
    data: {
      offsetx: 30,
    },
    style: { stroke: "#4299e1a6" },
  },
  {
    id: "e3-13",
    source: "aluControl",
    target: "alu",
    sourceHandle: "1",
    targetHandle: "selector",
    style: { stroke: "#4299e1a6" },
  },
  {
    id: "e3-14",
    source: "idex",
    target: "aluControl",
    sourceHandle: "output6",
    targetHandle: "input1",
    type: "horizontal",
    data: {
      offsetx: 15,
    },
  },
  {
    id: "e3-15",
    source: "alu",
    target: "exmem",
    sourceHandle: "zero",
    targetHandle: "zero",
    style: {
      stroke: "#4299e1a6",
    },
  },
  {
    id: "e4-1",
    source: "exmem",
    target: "muxPc",
    type: "custom",
    data: {
      offsetx: 100,
      offsety: -320,
    },

    sourceHandle: "output1",
    targetHandle: "input2",
  },
  {
    id: "e4-2",
    source: "exmem",
    target: "dataMemory",
    sourceHandle: "output2",
    targetHandle: "address",
    type: "horizontal",
    data: {
      offsetx: 50,
    },
  },
  {
    id: "e4-3",
    source: "exmem",
    target: "dataMemory",
    sourceHandle: "output3",
    targetHandle: "writeData",
  },
  {
    id: "e4-5",
    source: "exmem",
    target: "memwb",
    sourceHandle: "output2",
    targetHandle: "input2",
  },
  {
    id: "e4-6",
    source: "exmem",
    target: "memwb",
    sourceHandle: "output4",
    targetHandle: "input3",
  },
  {
    id: "e4-7",
    source: "dataMemory",
    target: "memwb",
    sourceHandle: "readData",
    targetHandle: "input1",
  },

  {
    id: "e5-1",
    source: "memwb",
    target: "muxWb",
    sourceHandle: "output1",
    targetHandle: "input1",
    type: "horizontal",
    data: {
      offsetx: 100,
    },
  },
  {
    id: "e5-2",
    source: "memwb",
    target: "muxWb",
    sourceHandle: "output2",
    targetHandle: "input2",
  },
  {
    id: "e5-3",

    type: "custom",
    data: {
      offsetx: 50,
      offsety: 130,
    },
    source: "memwb",
    target: "registers",
    sourceHandle: "output3",
    targetHandle: "writeReg",
  },
  {
    id: "e5-4",
    type: "custom",
    data: {
      offsetx: 40,
      offsety: 100,
    },
    source: "muxWb",
    target: "registers",
    sourceHandle: "output",
    targetHandle: "writeData",
    label: "WB Data",
  },
  {
    id: "c1",
    source: "controlUnit",
    target: "exNodeIdexBuffer",
    sourceHandle: "output1",
    targetHandle: "1",
    type: "horizontal",
    data: {
      offsetx: 30,
    },
    style: { stroke: "#4299e1a6" },
  },
  {
    id: "c2",
    source: "controlUnit",
    target: "mNodeIdexBuffer",
    sourceHandle: "output1",
    targetHandle: "1",
    type: "horizontal",
    data: {
      offsetx: 30,
    },
    style: { stroke: "#4299e1a6" },
  },
  {
    id: "c3",
    source: "controlUnit",
    target: "wbNodeIdexBuffer",
    sourceHandle: "output1",
    targetHandle: "1",
    type: "horizontal",
    data: {
      offsetx: 30,
    },
    style: { stroke: "#4299e1a6" },
  },
  {
    id: "c4",
    source: "mNodeIdexBuffer",
    target: "mNodeExmemBuffer",
    sourceHandle: "1",
    targetHandle: "1",
    type: "horizontal",
    data: {
      offsetx: 400,
    },
    style: { stroke: "#4299e1a6" },
  },
  {
    id: "c5",
    source: "wbNodeIdexBuffer",
    target: "wbNodeExmemBuffer",
    sourceHandle: "1",
    targetHandle: "1",
    type: "horizontal",
    data: {
      offsetx: 430,
    },
    style: { stroke: "#4299e1a6" },
  },
  {
    id: "c6",
    source: "wbNodeExmemBuffer",
    target: "wbNodeMemwbBuffer",
    sourceHandle: "1",
    targetHandle: "1",
    type: "horizontal",
    data: {
      offsetx: 250,
    },
    style: { stroke: "#4299e1a6" },
  },
  {
    id: "c7",
    source: "wbNodeMemwbBuffer",
    target: "registers",
    sourceHandle: "1",
    targetHandle: "selector",
    type: "custom",
    data: {
      offsetx: 70,
      offsety: -400,
    },
    style: { stroke: "#4299e1a6" },
  },
  {
    id: "c8",
    source: "wbNodeMemwbBuffer",
    target: "muxWb",
    sourceHandle: "1",
    targetHandle: "selector",
    type: "horizontal",
    data: {
      offsetx: 60,
    },
    style: { stroke: "#4299e1a6" },
  },
  {
    id: "c9",
    source: "exNodeIdexBuffer",
    target: "muxAlu",
    sourceHandle: "1",
    targetHandle: "selector",
    type: "horizontal",
    data: {
      offsetx: 70,
    },
    style: { stroke: "#4299e1a6" },
  },
  {
    id: "c10",
    source: "exNodeIdexBuffer",
    target: "aluControl",
    sourceHandle: "1",
    targetHandle: "aluOp",
    type: "horizontal",
    data: {
      offsetx: 70,
    },
    style: { stroke: "#4299e1a6" },
  },
  {
    id: "c11",
    source: "mNodeExmemBuffer",
    target: "dataMemory",
    sourceHandle: "1",
    targetHandle: "memRead",
    style: { stroke: "#4299e1a6" },
  },
  {
    id: "c12",
    source: "mNodeExmemBuffer",
    target: "dataMemory",
    sourceHandle: "1",
    targetHandle: "memWrite",
    type: "horizontal",
    data: {
      offsetx: 40,
    },
    style: { stroke: "#4299e1a6" },
  },
  {
    id: "c13",
    source: "mNodeExmemBuffer",
    target: "branch",
    sourceHandle: "1",
    targetHandle: "input1",
    type: "horizontal",
    data: {
      offsetx: 10,
    },
    style: { stroke: "#4299e1a6" },
  },
  {
    id: "c14",
    source: "exmem",
    target: "branch",
    sourceHandle: "zero",
    targetHandle: "input2",
    type: "horizontal",
    data: {
      offsetx: 20,
    },
    style: { stroke: "#4299e1a6" },
  },
  {
    id: "c15",
    source: "branch",
    target: "muxPc",
    sourceHandle: "output",
    targetHandle: "selector",
    type: "custom",
    data: {
      offsetx: 50,
      offsety: -200,
    },
    style: { stroke: "#4299e1a6" },
  },
];

export default {
  nodes,
  edges,
};

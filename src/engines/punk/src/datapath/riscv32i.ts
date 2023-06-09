import { Edge, Node, Position } from "reactflow";

const nodes: Node[] = [
  {
    id: "-1",
    type: "adder",
    position: { x: -100, y: -100 },
    data: { label: "Add" },
    targetPosition: Position.Right,
    sourcePosition: Position.Right,
  },
  {
    id: "0",
    position: { x: -100, y: 27 },
    type:"mux",
    data: { label: "MUX" },
    targetPosition: Position.Right,
    sourcePosition: Position.Right,
    style: {
      width: 30,
      height: 80,
    },
  },
  {
    id: "1",
    position: { x: -250, y: 250 },
    type: "pc",
    data: { label: "PC" },
    targetPosition: Position.Left,
    sourcePosition: Position.Right,
  },
  {
    id: "2",
    position: { x: 400, y: 400 },
    data: { label: "Instruction Memory" },
    targetPosition: Position.Left,
    style: {
      height: 130,
    },
  },
  {
    id: "3",
    type: "alu",
    position: { x: 200, y: 200 },
    data: { label: "Alu" },
    targetPosition: Position.Right,
    sourcePosition: Position.Right,
  },
  {
    id: "4",
    type: "datamem",
    position: { x: -200, y: -200 },
    data: { label: "DataMem" },
    targetPosition: Position.Right,
    sourcePosition: Position.Right,
  },
  {
    id: "5",
    type: "registers",
    position: { x: 300, y: 200 },
    data: { label: "registers" },
    targetPosition: Position.Right,
    sourcePosition: Position.Right,
  },
  {
    id: "6",
    type: "bufferifid",
    position: {x: 50, y: 150},
    data: {label: "buffer if/id"},
    targetPosition: Position.Right,
    sourcePosition: Position.Left
  },
  {
    id: "7",
    type: "instrMemory",
    position: {x: -100, y: 250},
    data: {label: "Instruction Memory"},
    targetPosition: Position.Right,
    sourcePosition: Position.Left
  },
];
const edges: Edge[] = [
  { id: "e1-2", source: "1", target: "7", label: "0x00000000", targetHandle: "address", sourceHandle:"output" },


];

export default {
  nodes,
  edges,
};

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
    position: { x: 0, y: 45 },
    type: "pc",
    data: { label: "PC" },
    targetPosition: Position.Left,
    sourcePosition: Position.Right,
  },
  {
    id: "2",
    position: { x: 250, y: 0 },
    data: { label: "Instruction Memory" },
    targetPosition: Position.Left,
    style: {
      height: 130,
    },
  },
  {
    id: "3",
    type: "alu",
    position: { x: 0, y: 0 },
    data: { label: "Alu" },
    targetPosition: Position.Right,
    sourcePosition: Position.Right,
  },
];
const edges: Edge[] = [
  { id: "e1-2", source: "1", target: "2", label: "0x00000000" },
  { id: "e0-1", source: "0", target: "1" },
  { id: "e0-2", source: "0", target: "-1", targetHandle: "input 1" },
];

export default {
  nodes,
  edges,
};

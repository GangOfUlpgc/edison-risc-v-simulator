export const operations: { [key: string]: string } = {
  0b000: "and",
  0b001: "or",
  0b010: "add",
  0b110: "sub",
  0b111: "slt",
};

export const roperations: { [key: string]: number } = {
  and: 0b000,
  or: 0b001,
  add: 0b010,
  sub: 0b110,
  slt: 0b111,
};

export const operationFunctions: { [key: string]: OperationFunction } = {
  and: (a, b) => a & b,
  or: (a, b) => a | b,
  add: (a, b) => a + b,
  sub: (a, b) => a - b,
  slt: (a, b) => (a < b ? 1 : 0),
  xor: (a, b) => a ^ b,
  srl: (a, b) => a >>> b,
  sra: (a, b) => a >> b,
};

export type OperationFunction = (a: number, b: number) => number;

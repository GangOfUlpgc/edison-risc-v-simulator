export const operations: { [key: string]: string } = {
  "000": "and",
  "001": "or",
  "010": "add",
  "110": "sub",
  "111": "slt",
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

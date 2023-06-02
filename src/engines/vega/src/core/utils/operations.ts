export const operations: { [key: string]: string } = {
  "000": "and",
  "001": "or",
  "010": "add",
  "110": "sub",
  "111": "slt",
};

export const operationFunctions: { [key: string]: OperationFunction } = {
  and: (a, b) => (parseInt(a, 2) & parseInt(b, 2)).toString(2),
  or: (a, b) => (parseInt(a, 2) | parseInt(b, 2)).toString(2),
  add: (a, b) => (parseInt(a, 2) + parseInt(b, 2)).toString(2),
  sub: (a, b) => (parseInt(a, 2) - parseInt(b, 2)).toString(2),
  slt: (a, b) => (parseInt(a, 2) < parseInt(b, 2) ? "1" : "0"),
  xor: (a, b) => (parseInt(a, 2) ^ parseInt(b, 2)).toString(2),
  srl: (a, b) => (parseInt(a, 2) >>> parseInt(b, 2)).toString(2),
  sra: (a, b) => (parseInt(a, 2) >> parseInt(b, 2)).toString(2),
};

export type OperationFunction = (a: string, b: string) => string;

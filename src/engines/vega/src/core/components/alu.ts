import { operationFunctions, operations } from "../utils/operations";

interface ALUNext {
  A: number;
  B: number;
  op: number;
}

export class ALU {
  public next({ A, B, op }: ALUNext) {
    const operation = operations[op];
    const operationFunction = operationFunctions[operation];
    return operationFunction(A, B);
  }
}

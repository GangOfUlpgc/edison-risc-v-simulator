import { operationFunctions, operations } from "../utils/operations";

function useALU(A: string, B: string, op: string) {
  const operator = operations[op];
  const f = operationFunctions[operator];
  return f(A, B);
}

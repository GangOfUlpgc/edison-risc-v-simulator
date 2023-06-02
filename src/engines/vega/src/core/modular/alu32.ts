import { operationFunctions, operations } from "../utils/operations";
import { DatapathComponent } from "./base";

export class Alu32 extends DatapathComponent {
  constructor(inputs: DatapathComponent[]) {
    super(inputs);
  }

  public execute() {
    const input1 = this.inputs[0].execute();
    const input2 = this.inputs[1].execute();
    const op = this.inputs[2].execute();

    const operation = operations[op[0]];
    const operationFunction = operationFunctions[operation];

    return [operationFunction(input1[0], input2[0])];
  }
}

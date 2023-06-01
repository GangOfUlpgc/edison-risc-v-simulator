import { DatapathComponent } from "./base";

type OperationFunction = (a: string, b: string) => string;

export class Alu32 extends DatapathComponent {
  operations: { [key: string]: string } = {
    "000": "and",
    "001": "or",
    "010": "add",
    "110": "sub",
    "111": "slt",
  };

  operationFunctions: { [key: string]: OperationFunction } = {
    and: (a, b) => (parseInt(a, 2) & parseInt(b, 2)).toString(2),
    or: (a, b) => (parseInt(a, 2) | parseInt(b, 2)).toString(2),
    add: (a, b) => (parseInt(a, 2) + parseInt(b, 2)).toString(2),
    sub: (a, b) => (parseInt(a, 2) - parseInt(b, 2)).toString(2),
    slt: (a, b) => (parseInt(a, 2) < parseInt(b, 2) ? "1" : "0"),
    xor: (a, b) => (parseInt(a, 2) ^ parseInt(b, 2)).toString(2),
    srl: (a, b) => (parseInt(a, 2) >>> parseInt(b, 2)).toString(2),
    sra: (a, b) => (parseInt(a, 2) >> parseInt(b, 2)).toString(2),
  };

  constructor(inputs: DatapathComponent[]) {
    super(inputs);
  }

  public execute(): string {
    const input1 = this.inputs[0].execute();
    const input2 = this.inputs[1].execute();
    const op = this.inputs[2].execute();

    const operation = this.operations[op];
    const operationFunction = this.operationFunctions[operation];

    return operationFunction(input1, input2);
  }
}

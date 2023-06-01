import { DatapathComponent } from "./base";

export class Multiplexor extends DatapathComponent {
  constructor(inputs: DatapathComponent[]) {
    super(inputs);
  }

  public execute(): string[] {
    const input1 = this.inputs[0].execute();
    const input2 = this.inputs[1].execute();
    const control = this.inputs[2].execute();

    if (control[0] === "0") {
      return input1;
    } else {
      return input2;
    }
  }
}

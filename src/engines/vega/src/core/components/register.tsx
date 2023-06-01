import { DatapathComponent } from "./base";

export class Register extends DatapathComponent {
  public state: { [value: string]: string } = {
    "0000": "00000000000000000000000000000000", // Register 0
    "0001": "00000000000000000000000000000000", // Register 1
    "0010": "00000000000000000000000000000000", // Register 2
    "0011": "00000000000000000000000000000000", // Register 3
    "0100": "00000000000000000000000000000000", // Register 4
    "0101": "00000000000000000000000000000000", // Register 5
    "0110": "00000000000000000000000000000000", // Register 6
    "0111": "00000000000000000000000000000000", // Register 7
  };

  constructor(inputs: DatapathComponent[], state: { [value: string]: string }) {
    super(inputs);
    this.state = state;
  }

  public execute(): string {
    const select = this.inputs[2].execute();
    const address = this.inputs[0].execute();
    const writeValue = this.inputs[1].execute();

    if (select === "0") {
      // Read operation
      return this.state[address];
    } else if (select === "1") {
      // Write operation
      this.state[address] = writeValue;
      return writeValue;
    }

    return "00000000000000000000000000000000"; // Default return value
  }
}

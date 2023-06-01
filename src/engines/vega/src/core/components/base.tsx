export class DatapathComponent {
  inputs: DatapathComponent[];

  constructor(inputs: DatapathComponent[]) {
    this.inputs = inputs;
  }

  public setInputs(inputs: DatapathComponent[]) {
    this.inputs = inputs;
  }

  public execute(): string {
    console.log("implement this method");
    return "0";
  }
}

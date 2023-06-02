import { DatapathComponent } from "./base";

export class Constant extends DatapathComponent {
  value: string;
  constructor(value: string) {
    super([]);
    this.value = value;
  }

  public execute(): string[] {
    return [this.value];
  }
}

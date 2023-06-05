import { EncodedInstruction } from "@vega/types/assambler";
import { Encoder } from "./encoder";
import { Preprocessor } from "./preprocessor";

export class Assambler {
  encoder: Encoder;
  preprocessor: Preprocessor;

  constructor() {
    this.encoder = new Encoder();
    this.preprocessor = new Preprocessor();
  }

  decode(program: string): EncodedInstruction[] {
    return [];
  }
}

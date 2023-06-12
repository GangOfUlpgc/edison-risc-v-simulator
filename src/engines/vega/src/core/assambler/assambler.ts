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
    /*
    .global main
    main:
    addi x0, x0, 1
    jalr x0, main
    */
    const processed_program = this.preprocessor.preprocess(program);
    console.log("processed program");
    console.log(processed_program);

    /*
    addi x0, x0, 1
    jalr x0, 0x00000000
    */

    const final_lines: EncodedInstruction[] = [];

    for (let x = 0; x < processed_program.length; x++) {
      final_lines.push(this.encoder.encode(processed_program[x]));
    }

    return final_lines;
  }
}

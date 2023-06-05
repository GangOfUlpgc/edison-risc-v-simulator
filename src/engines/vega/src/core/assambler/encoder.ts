import { EncodedInstruction } from "@vega/types/assambler";

export class Encoder {
  encode(instruction: string): EncodedInstruction {
    return {
      instruction: "",
      hex: "",
      bin: 0,
      meta: {
        type: "add",
        rs: 0,
        rt: 0,
        rd: 0,
        inmm: 0,
        aluOp: 0,
      },
    };
  }
}

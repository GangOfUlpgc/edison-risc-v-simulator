export interface EncodedInstructionMeta {
  type?: string | null;
  rs?: number | null;
  rt?: number | null;
  rd?: number | null;
  inmm?: number | null;
  aluOp?: number | null;
  instruction?: string;
}

export interface EncodedInstruction {
  instruction: string;
  hex: string;
  bin: number;
  meta: EncodedInstructionMeta;
}

export const rtype = ["add", "sub", "or", "and", "xor", "sll", "srl"];

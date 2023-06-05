export interface EncodedInstruction {
  instruction: string;
  hex: string;
  bin: number;
  meta: {
    type?: string | null;
    rs?: number | null;
    rt?: number | null;
    rd?: number | null;
    inmm?: number | null;
    aluOp?: number | null;
  };
}

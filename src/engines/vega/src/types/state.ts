import { EncodedInstructionMeta } from "./assambler";
import { ControlUnitSignals } from "./controlUnit";

export interface UICPUState {
  cycles: number;
  pipeline: {
    IF: {
      instruction: string;
      imeta: Partial<EncodedInstructionMeta>;
      cumeta: Partial<ControlUnitSignals>;
      cpumeta: Partial<CPUMeta>;
    };
    ID: {
      instruction: string;
      imeta: Partial<EncodedInstructionMeta>;
      cumeta: Partial<ControlUnitSignals>;
      cpumeta: Partial<CPUMeta>;
    };
    EX: {
      instruction: string;
      imeta: Partial<EncodedInstructionMeta>;
      cumeta: Partial<ControlUnitSignals>;
      cpumeta: Partial<CPUMeta>;
    };
    MEM: {
      instruction: string;
      imeta: Partial<EncodedInstructionMeta>;
      cumeta: Partial<ControlUnitSignals>;
      cpumeta: Partial<CPUMeta>;
    };
    WB: {
      instruction: string;
      imeta: Partial<EncodedInstructionMeta>;
      cumeta: Partial<ControlUnitSignals>;
      cpumeta: Partial<CPUMeta>;
    };
  };
  setStageValue: (stage: string, key: string, value: number | string) => void;
  reset: () => void;
}

interface CPUMeta {
  rs1: number;
  rs2: number;
  pc: number;
  rs1Value: number;
  rs2Value: number;
  inmm: number;
  A: number;
  B: number;
  ALUOut: number;
  WriteData: number;
  ReadData: number;
  WriteRegister: number;
  aluCtrl: number;
  jumpDir: number;
}
/*
decode: {
  instruction: string;
}
execute: {
  ALUSrc: number;
  ALUOp: number;
  ALUCtrl: number;
}
mem: {
  ALUOut: number;
  MemWrite: number;
  MemRead: number;
  WriteData: number;
  ReadData: number;
}
writeBack: {
  MemToReg: number;
  RegWrite: number;
}

*/

import { EncodedInstruction, rtype } from "@vega/types/assambler";
import { ControlUnitSignals } from "@vega/types/controlUnit";

const controlMap: { [instruction: string]: ControlUnitSignals } = {
  rtype: {
    //Execution
    ALUop: 0b10,
    ALUsrc: 0b0,
    //Mem Access
    Branch: 0b0,
    MemRead: 0b0,
    MemWrite: 0b0,
    //Write back
    RegWrite: 0b1,
    MemToReg: 0b0,
  },
  ld: {
    //Execution
    ALUop: 0b00,
    ALUsrc: 1,
    //Mem Access
    Branch: 0,
    MemRead: 1,
    MemWrite: 0,
    //Write back
    RegWrite: 1,
    MemToReg: 1,
  },
  sd: {
    //Execution
    ALUop: 0b00,
    ALUsrc: 1,
    //Mem Access
    Branch: 0,
    MemRead: 0,
    MemWrite: 1,
    //Write back
    RegWrite: 0,
    MemToReg: 0,
  },
  beq: {
    //Execution
    ALUop: 0b01,
    ALUsrc: 0,
    //Mem Access
    Branch: 1,
    MemRead: 0,
    MemWrite: 0,
    //Write back
    RegWrite: 0,
    MemToReg: 0,
  },
};

export class ControlUnit {
  generateSignals(instruction: EncodedInstruction): ControlUnitSignals {
    const aluOp = instruction?.meta?.aluOp ?? "";
    if (aluOp in rtype) return controlMap["rtype"];
    return controlMap[aluOp];
  }
}

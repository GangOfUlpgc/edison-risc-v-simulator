import { IControlUnit } from "../../types/controlUnit";

export function useControlUnit(instruction: string): IControlUnit {
  /**
   *
   * Veri difficult to implement
   *
   */

  return {
    Branch: "0",
    MemRead: "0",
    MemToReg: "0",
    ALUOp: "010",
    MemWrite: "0",
    ALUSrc: "0",
    RegWrite: "0",
    RegDst: "0",
  };
}

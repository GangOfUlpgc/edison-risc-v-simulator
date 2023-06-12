import { rtype } from "@vega/types/assambler";
import { roperations } from "../utils/operations";

export class AluControlUnit {
  getAluOp(itype: string, aluop: number) {
    //first check if its rtype
    //if it is, then check the funct7 and funct3
    //if it is not, then check the opcode
    //if it is not, then return 0

    //rtype
    if (aluop == 2) return roperations[itype];
    if (aluop == 0b00) return roperations["add"];
    if (aluop == 0b01) return roperations["sub"];
  }
}

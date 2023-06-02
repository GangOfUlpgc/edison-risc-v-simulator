import { IControlUnit } from "../../types/controlUnit";
import { Memory } from "../../types/mem";
import { RegisterBank } from "../../types/registers";

interface DatapathInput {
  signals: IControlUnit;
  registers: RegisterBank;
  instructionMem: Memory;
  dataMem: Memory;
  writeDataMem: (dir: string, value: string) => void;
  writeRegister: (dir: string, value: string) => void;
  loadRegisters: (register1: string, register2: string) => void;
  decodeInmm: (instruction: string) => void;
}

interface Step {
  type: "IF/ID" | "ID/EX" | "EX/MEM" | "MEM/WB" | "WB";
  execute: () => void;
}

export function useDatapath(controller: DatapathInput): Step[] {
  const { signals, registers, instructionMem, dataMem } = controller;

  const steps: Step[] = [];

  steps.push({
    type: "IF/ID",
    execute: () => {
      controller.writeRegister("pc", (registers.pc + 0x4).toString(2));
    },
  });

  steps.push({
    type: "ID/EX",
    execute: () => {
      console.log("ID/EX");
      controller.loadRegisters("rs1", "rs2");
      //controller.decodeInmm(instructionMem[registers.pc]);
    },
  });

  steps.push({
    type: "EX/MEM",
    execute: () => {
      console.log("EX/MEM");
    },
  });

  steps.push({
    type: "MEM/WB",
    execute: () => {
      console.log("MEM/WB");
    },
  });

  steps.push({
    type: "WB",
    execute: () => {
      console.log("WB");
    },
  });

  return steps;
}

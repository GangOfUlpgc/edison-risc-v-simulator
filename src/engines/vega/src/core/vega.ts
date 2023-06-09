import { create } from "zustand";
import {
  ALU,
  ControlUnit,
  RAM,
  ROM,
  RegisterBank,
  CPUStateManager,
  PCRegister,
} from "./components";
import { CPUState, CPUMem } from "./storage";

/**
 * Vega engine
 *
 * This is the main class of the Vega engine. Vega is a RISCV emulator written in TypeScript.
 * It implements the RISCV32I instruction set and can be used to run RISCV32I binaries.
 *
 * @module Vega
 * @class Vega
 * @constructor
 *
 * @example
 *
 */
export default class Vega {
  rom = new ROM();
  ram = new RAM();
  alu = new ALU();
  registers = new RegisterBank();
  pc = new PCRegister();
  manager = new CPUStateManager();
  controlUnit = new ControlUnit();
  newInstruction = 0;

  loadRom(rom: number[]) {
    this.rom.load(rom);
  }

  next() {
    this.writeback();
    this.mem();
    this.execute();
    this.decode();
    this.fetch();
    this.manager.nextStep(this.newInstruction.toString());
  }

  reload() {
    this.pc.write(0);
    this.manager.reset();
  }

  fetch() {
    const instruction = this.rom.read(this.pc.read()) | 0;
    this.pc.plus4();
    this.newInstruction = instruction;
    this.manager.setState(() => ({
      fetch: {
        instruction: instruction.toString(16),
      },
    }));
  }

  decode() {
    //DECODIFICAR LA INSTRUCCION Y GUARDARLA

    const rs1 = 0;
    const rs2 = 0;
    const inmm = 0;

    const val1 = this.registers.read(rs1);
    const val2 = this.registers.read(rs2);

    this.manager.setState((state) => ({
      decode: {
        instruction: this.manager.getState().fetch.instruction,
        rs1: rs1,
        rs2: rs2,
        rs1Value: val1,
        rs2Value: val2,
        inmm: inmm,
      },
    }));
  }

  execute() {
    console.log("execute");
  }

  mem() {
    console.log("mem");
  }

  writeback() {
    console.log("writeback");
  }

  get useMem() {
    return create(CPUMem);
  }

  get useState() {
    return create(CPUState);
  }
}

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

  loadRom(rom: number[]) {
    this.rom.load(rom);
  }

  next() {
    this.fetch();
    this.decode();
    this.execute();
    this.mem();
    this.writeback();
  }

  reload() {
    this.pc.write(0);
    this.manager.reset();
  }

  fetch() {
    const instruction = this.rom.read(this.pc.read()) | 0;
    this.pc.plus4();
    this.manager.nextStep(instruction.toString());
    console.log("fetch");
  }

  decode() {
    console.log("decode");
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

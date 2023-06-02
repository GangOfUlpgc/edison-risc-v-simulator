import { ALU } from "./core/mem/alu";
import { PCRegister } from "./core/mem/pc";
import { RAM } from "./core/mem/ram";
import { RegisterBank } from "./core/mem/registers";
import { ROM } from "./core/mem/rom";
import { CPUStateManager } from "./core/mem/state";
import { CPUState } from "./core/state";

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
}

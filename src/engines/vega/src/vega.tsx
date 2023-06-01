import { createRegisterBank } from "./core/registers";

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
  public registers: RegisterBank;
  public memory: Memory = {};

  constructor() {
    this.registers = createRegisterBank();
  }

  private setPc(pc: number) {
    this.registers.pc = pc;
  }

  public load(assamblyCode: string) {
    console.log("Vega load");
  }

  public run() {
    console.log("Vega run");
  }

  public next() {
    this.setPc(this.registers.pc + 0x4);
    const instruction = this.memory[this.registers.pc];
    console.log(instruction);
  }

  public prev() {
    console.log("Vega prev");
  }
}

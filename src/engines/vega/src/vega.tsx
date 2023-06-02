import { ALU } from "./core/mem/alu";
import { PCRegister } from "./core/mem/pc";
import { RAM } from "./core/mem/ram";
import { RegisterBank } from "./core/mem/registers";
import { ROM } from "./core/mem/rom";
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

  fetch() {
    const instruction = this.rom.read(this.pc.read());
    this.pc.plus4();
    console.log(instruction);

    CPUState.setState((state) => ({
      ...state,
      pipeline: {
        ...state.pipeline,
        ID: state.pipeline["IF"],
        IF: instruction.toString(),
      },
      fetch: {
        instruction: instruction.toString(),
      },
    }));
    console.log("fetch");
  }

  decode() {
    console.log("decode");
    CPUState.setState((state) => ({
      ...state,
      pipeline: {
        ...state.pipeline,
        EX: state.pipeline["IF"],
        IF: state.pipeline["ID"],
      },
    }));
  }

  execute() {
    console.log("execute");
    CPUState.setState((state) => ({
      ...state,
      pipeline: {
        ...state.pipeline,
        MEM: state.pipeline["IF"],
        EX: state.pipeline["IF"],
      },
    }));
  }

  mem() {
    console.log("mem");
  }

  writeback() {
    console.log("writeback");
  }
}
